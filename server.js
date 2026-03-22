const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { URL } = require("url");
const { Firestore } = require("@google-cloud/firestore");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 8000);
const DATA_DIR = path.join(ROOT, "data");
const RESULTS_FILE = path.join(DATA_DIR, "assessment-results.json");
const FIRESTORE_COLLECTION = process.env.FIRESTORE_COLLECTION || "assessmentResults";

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
  if (explicit === "file" || explicit === "firestore") return explicit;
  if (process.env.K_SERVICE || process.env.FIRESTORE_EMULATOR_HOST) return "firestore";
  return "file";
}

const STORAGE_BACKEND = resolveStorageBackend();
const firestore = STORAGE_BACKEND === "firestore" ? new Firestore() : null;

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
