const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { URL } = require("url");
const { Pool } = require("pg");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 8000);
const DATA_DIR = path.join(ROOT, "data");
const RESULTS_FILE = path.join(DATA_DIR, "assessment-results.json");
const POSTGRES_TABLE = process.env.POSTGRES_TABLE || "assessment_results";
const EXPORT_TOKEN = String(process.env.ASSESSMENT_EXPORT_TOKEN || "").trim();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function resolveStorageBackend() {
  const explicit = String(process.env.ASSESSMENT_STORAGE || "").trim().toLowerCase();
  if (explicit === "file" || explicit === "postgres") return explicit;
  if (process.env.DATABASE_URL) return "postgres";
  return "file";
}

const STORAGE_BACKEND = resolveStorageBackend();
const pgPool =
  STORAGE_BACKEND === "postgres"
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
      })
    : null;

async function ensureResultsFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(RESULTS_FILE);
  } catch (err) {
    await fs.writeFile(RESULTS_FILE, "[]\n", "utf8");
  }
}

async function readResults() {
  await ensureResultsFile();
  const raw = await fs.readFile(RESULTS_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

async function writeResults(results) {
  await ensureResultsFile();
  await fs.writeFile(RESULTS_FILE, `${JSON.stringify(results, null, 2)}\n`, "utf8");
}

function createEmptyRecord(userId, now = new Date().toISOString()) {
  return {
    userId,
    createdAt: now,
    updatedAt: now,
    preScore: null,
    preTotal: null,
    preSavedAt: null,
    postScore: null,
    postTotal: null,
    postSavedAt: null,
  };
}

function normalizeRecord(userId, raw) {
  const base = createEmptyRecord(userId);
  if (!raw || typeof raw !== "object") return base;
  return {
    ...base,
    ...raw,
    userId,
  };
}

function normalizePostgresRow(row) {
  if (!row || typeof row !== "object") return null;
  return normalizeRecord(row.user_id, {
    createdAt: row.created_at ? new Date(row.created_at).toISOString() : null,
    updatedAt: row.updated_at ? new Date(row.updated_at).toISOString() : null,
    preScore: row.pre_score,
    preTotal: row.pre_total,
    preSavedAt: row.pre_saved_at ? new Date(row.pre_saved_at).toISOString() : null,
    postScore: row.post_score,
    postTotal: row.post_total,
    postSavedAt: row.post_saved_at ? new Date(row.post_saved_at).toISOString() : null,
  });
}

async function ensurePostgresTable() {
  await pgPool.query(`
    CREATE TABLE IF NOT EXISTS ${POSTGRES_TABLE} (
      user_id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL,
      pre_score INTEGER,
      pre_total INTEGER,
      pre_saved_at TIMESTAMPTZ,
      post_score INTEGER,
      post_total INTEGER,
      post_saved_at TIMESTAMPTZ
    )
  `);
}

async function ensureStorageReady() {
  if (STORAGE_BACKEND === "file") {
    await ensureResultsFile();
    return;
  }
  await ensurePostgresTable();
}

async function getAssessmentRecord(userId) {
  if (!userId) return null;
  if (STORAGE_BACKEND === "file") {
    const results = await readResults();
    const record = results.find((entry) => entry.userId === userId);
    return record ? normalizeRecord(userId, record) : null;
  }

  const result = await pgPool.query(`SELECT * FROM ${POSTGRES_TABLE} WHERE user_id = $1 LIMIT 1`, [userId]);
  return result.rows.length ? normalizePostgresRow(result.rows[0]) : null;
}

async function listAssessmentRecords() {
  if (STORAGE_BACKEND === "file") {
    const results = await readResults();
    return results.map((record) => normalizeRecord(record.userId, record));
  }

  const result = await pgPool.query(`SELECT * FROM ${POSTGRES_TABLE} ORDER BY created_at ASC`);
  return result.rows.map(normalizePostgresRow);
}

async function saveAssessmentRecord(record) {
  if (STORAGE_BACKEND === "file") {
    const results = await readResults();
    const idx = results.findIndex((entry) => entry.userId === record.userId);
    if (idx >= 0) results[idx] = record;
    else results.push(record);
    await writeResults(results);
    return;
  }

  await pgPool.query(
    `
      INSERT INTO ${POSTGRES_TABLE} (
        user_id, created_at, updated_at,
        pre_score, pre_total, pre_saved_at,
        post_score, post_total, post_saved_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (user_id) DO UPDATE SET
        created_at = EXCLUDED.created_at,
        updated_at = EXCLUDED.updated_at,
        pre_score = EXCLUDED.pre_score,
        pre_total = EXCLUDED.pre_total,
        pre_saved_at = EXCLUDED.pre_saved_at,
        post_score = EXCLUDED.post_score,
        post_total = EXCLUDED.post_total,
        post_saved_at = EXCLUDED.post_saved_at
    `,
    [
      record.userId,
      record.createdAt,
      record.updatedAt,
      record.preScore,
      record.preTotal,
      record.preSavedAt,
      record.postScore,
      record.postTotal,
      record.postSavedAt,
    ]
  );
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function sendText(res, statusCode, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

function sanitizeRelativePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const cleanPath = decoded === "/" ? "/index.html" : decoded;
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return normalized.startsWith(path.sep) ? normalized.slice(1) : normalized;
}

function toCsv(records) {
  const header = [
    "userId",
    "createdAt",
    "updatedAt",
    "preScore",
    "preTotal",
    "preSavedAt",
    "postScore",
    "postTotal",
    "postSavedAt",
  ];
  const escape = (value) => {
    if (value === null || value === undefined) return "";
    const text = String(value);
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const lines = [header.join(",")];
  records.forEach((record) => {
    lines.push(
      [
        record.userId,
        record.createdAt,
        record.updatedAt,
        record.preScore,
        record.preTotal,
        record.preSavedAt,
        record.postScore,
        record.postTotal,
        record.postSavedAt,
      ]
        .map(escape)
        .join(",")
    );
  });
  return `${lines.join("\n")}\n`;
}

function isAuthorizedExport(url, req) {
  if (!EXPORT_TOKEN) return false;
  const queryToken = String(url.searchParams.get("token") || "").trim();
  const headerToken = String(req.headers["x-export-token"] || "").trim();
  return queryToken === EXPORT_TOKEN || headerToken === EXPORT_TOKEN;
}

async function serveStatic(req, res, pathname) {
  const relativePath = sanitizeRelativePath(pathname);
  const filePath = path.join(ROOT, relativePath);
  const resolved = path.resolve(filePath);

  if (!resolved.startsWith(path.resolve(ROOT))) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  try {
    const stat = await fs.stat(resolved);
    const finalPath = stat.isDirectory() ? path.join(resolved, "index.html") : resolved;
    const ext = path.extname(finalPath).toLowerCase();
    const content = await fs.readFile(finalPath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Content-Length": content.length,
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=60",
    });
    res.end(content);
  } catch (err) {
    sendJson(res, 404, { error: "Not found" });
  }
}

async function handleAssessmentPost(req, res) {
  try {
    const rawBody = await readRequestBody(req);
    const body = rawBody ? JSON.parse(rawBody) : {};
    const { userId, phase, score, total } = body;

    if (!userId || (phase !== "pre" && phase !== "post") || !Number.isFinite(score)) {
      sendJson(res, 400, { error: "Invalid assessment payload" });
      return;
    }

    const now = new Date().toISOString();
    let record = await getAssessmentRecord(userId);

    if (!record) {
      record = createEmptyRecord(userId, now);
    }

    if (phase === "pre") {
      if (record.preSavedAt) {
        sendJson(res, 409, { error: "Pre-assessment already submitted", record });
        return;
      }
      record.preScore = score;
      record.preTotal = Number.isFinite(total) ? total : record.preTotal;
      record.preSavedAt = now;
    } else {
      if (record.postSavedAt) {
        sendJson(res, 409, { error: "Post-assessment already submitted", record });
        return;
      }
      record.postScore = score;
      record.postTotal = Number.isFinite(total) ? total : record.postTotal;
      record.postSavedAt = now;
    }
    record.updatedAt = now;

    await saveAssessmentRecord(record);
    sendJson(res, 200, { ok: true, record });
  } catch (err) {
    console.error("Could not save assessment result:", err);
    sendJson(res, 500, { error: "Could not save assessment result" });
  }
}

async function handleAssessmentGet(req, res, url) {
  try {
    const userId = url.searchParams.get("userId");
    const record = userId ? await getAssessmentRecord(userId) : null;
    sendJson(res, 200, { ok: true, record });
  } catch (err) {
    console.error("Could not read assessment result:", err);
    sendJson(res, 500, { error: "Could not read assessment result" });
  }
}

async function handleAssessmentExport(req, res, url) {
  if (!isAuthorizedExport(url, req)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  try {
    const records = await listAssessmentRecords();
    const format = String(url.searchParams.get("format") || "json").trim().toLowerCase();
    if (format === "csv") {
      sendText(res, 200, toCsv(records), "text/csv; charset=utf-8");
      return;
    }
    sendJson(res, 200, { ok: true, count: records.length, records });
  } catch (err) {
    console.error("Could not export assessment results:", err);
    sendJson(res, 500, { error: "Could not export assessment results" });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/api/assessment") {
    if (req.method === "POST") {
      await handleAssessmentPost(req, res);
      return;
    }
    if (req.method === "GET") {
      await handleAssessmentGet(req, res, url);
      return;
    }
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  if (url.pathname === "/api/assessment/export") {
    if (req.method === "GET") {
      await handleAssessmentExport(req, res, url);
      return;
    }
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  await serveStatic(req, res, url.pathname);
});

ensureStorageReady()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      if (STORAGE_BACKEND === "file") {
        console.log(`Assessment storage backend: file (${RESULTS_FILE})`);
      } else {
        console.log(`Assessment storage backend: postgres (${POSTGRES_TABLE})`);
      }
      if (EXPORT_TOKEN) {
        console.log("Assessment export endpoint enabled at /api/assessment/export");
      }
    });
  })
  .catch((err) => {
    console.error("Failed to initialize assessment storage:", err);
    process.exit(1);
  });
  try {
    await fs.access(RESULTS_FILE);
  } catch (err) {
    await fs.writeFile(RESULTS_FILE, "[]\n", "utf8");
  }
}

async function readResults() {
  await ensureResultsFile();
  const raw = await fs.readFile(RESULTS_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

async function writeResults(results) {
  await ensureResultsFile();
  await fs.writeFile(RESULTS_FILE, `${JSON.stringify(results, null, 2)}\n`, "utf8");
}

function createEmptyRecord(userId, now = new Date().toISOString()) {
  return {
    userId,
    createdAt: now,
    updatedAt: now,
    preScore: null,
    preTotal: null,
    preSavedAt: null,
    postScore: null,
    postTotal: null,
    postSavedAt: null,
  };
}

function normalizeRecord(userId, raw) {
  const base = createEmptyRecord(userId);
  if (!raw || typeof raw !== "object") return base;
  return {
    ...base,
    ...raw,
    userId,
  };
}

async function ensureStorageReady() {
  if (STORAGE_BACKEND === "file") {
    await ensureResultsFile();
  }
}

async function getAssessmentRecord(userId) {
  if (!userId) return null;
  if (STORAGE_BACKEND === "file") {
    const results = await readResults();
    const record = results.find((entry) => entry.userId === userId);
    return record ? normalizeRecord(userId, record) : null;
  }

  const snapshot = await firestore.collection(FIRESTORE_COLLECTION).doc(userId).get();
  if (!snapshot.exists) return null;
  return normalizeRecord(userId, snapshot.data());
}

async function saveAssessmentRecord(record) {
  if (STORAGE_BACKEND === "file") {
    const results = await readResults();
    const idx = results.findIndex((entry) => entry.userId === record.userId);
    if (idx >= 0) results[idx] = record;
    else results.push(record);
    await writeResults(results);
    return;
  }

  await firestore.collection(FIRESTORE_COLLECTION).doc(record.userId).set(record, { merge: true });
}

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

function sanitizeRelativePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const cleanPath = decoded === "/" ? "/index.html" : decoded;
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  return normalized.startsWith(path.sep) ? normalized.slice(1) : normalized;
}

async function serveStatic(req, res, pathname) {
  const relativePath = sanitizeRelativePath(pathname);
  const filePath = path.join(ROOT, relativePath);
  const resolved = path.resolve(filePath);

  if (!resolved.startsWith(path.resolve(ROOT))) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  try {
    const stat = await fs.stat(resolved);
    const finalPath = stat.isDirectory() ? path.join(resolved, "index.html") : resolved;
    const ext = path.extname(finalPath).toLowerCase();
    const content = await fs.readFile(finalPath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Content-Length": content.length,
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=60",
    });
    res.end(content);
  } catch (err) {
    sendJson(res, 404, { error: "Not found" });
  }
}

async function handleAssessmentPost(req, res) {
  try {
    const rawBody = await readRequestBody(req);
    const body = rawBody ? JSON.parse(rawBody) : {};
    const { userId, phase, score, total } = body;

    if (!userId || (phase !== "pre" && phase !== "post") || !Number.isFinite(score)) {
      sendJson(res, 400, { error: "Invalid assessment payload" });
      return;
    }

    const now = new Date().toISOString();
    let record = await getAssessmentRecord(userId);

    if (!record) {
      record = createEmptyRecord(userId, now);
    }

    if (phase === "pre") {
      if (record.preSavedAt) {
        sendJson(res, 409, { error: "Pre-assessment already submitted", record });
        return;
      }
      record.preScore = score;
      record.preTotal = Number.isFinite(total) ? total : record.preTotal;
      record.preSavedAt = now;
    } else {
      if (record.postSavedAt) {
        sendJson(res, 409, { error: "Post-assessment already submitted", record });
        return;
      }
      record.postScore = score;
      record.postTotal = Number.isFinite(total) ? total : record.postTotal;
      record.postSavedAt = now;
    }
    record.updatedAt = now;

    await saveAssessmentRecord(record);
    sendJson(res, 200, { ok: true, record });
  } catch (err) {
    console.error("Could not save assessment result:", err);
    sendJson(res, 500, { error: "Could not save assessment result" });
  }
}

async function handleAssessmentGet(req, res, url) {
  try {
    const userId = url.searchParams.get("userId");
    const record = userId ? await getAssessmentRecord(userId) : null;
    sendJson(res, 200, { ok: true, record });
  } catch (err) {
    console.error("Could not read assessment result:", err);
    sendJson(res, 500, { error: "Could not read assessment result" });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/api/assessment") {
    if (req.method === "POST") {
      await handleAssessmentPost(req, res);
      return;
    }
    if (req.method === "GET") {
      await handleAssessmentGet(req, res, url);
      return;
    }
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  await serveStatic(req, res, url.pathname);
});

ensureStorageReady()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
      if (STORAGE_BACKEND === "file") {
        console.log(`Assessment storage backend: file (${RESULTS_FILE})`);
      } else {
        console.log(`Assessment storage backend: firestore (${FIRESTORE_COLLECTION})`);
      }
    });
  })
  .catch((err) => {
    console.error("Failed to initialize assessment storage:", err);
    process.exit(1);
  });
