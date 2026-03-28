const els = {
  heroParticles: document.getElementById("heroParticles"),

  miniScrollVelocity: document.getElementById("miniScrollVelocity"),
  miniScrollVal: document.getElementById("miniScrollVal"),
  miniAttentionVal: document.getElementById("miniAttentionVal"),
  miniCorrSvg: document.getElementById("miniCorrSvg"),

  miniUserSvg: document.getElementById("miniUserSvg"),
  miniUserTooltip: document.getElementById("miniUserTooltip"),

  act2RowCount: document.getElementById("act2RowCount"),
  act2RefreshBtn: document.getElementById("act2RefreshBtn"),
  act2TableBody: document.getElementById("act2TableBody"),
  act2MeanX: document.getElementById("act2MeanX"),
  act2MeanY: document.getElementById("act2MeanY"),
  act2VarX: document.getElementById("act2VarX"),
  act2VarY: document.getElementById("act2VarY"),
  act2CovXY: document.getElementById("act2CovXY"),
  act2SdX: document.getElementById("act2SdX"),
  act2SdY: document.getElementById("act2SdY"),
  act2CorrXY: document.getElementById("act2CorrXY"),

  act2HeightRefreshBtn: document.getElementById("act2HeightRefreshBtn"),
  act2HeightHistSvg: document.getElementById("act2HeightHistSvg"),
  act2Q10: document.getElementById("act2Q10"),
  act2Q50: document.getElementById("act2Q50"),
  act2Q90: document.getElementById("act2Q90"),
  act2HeightN: document.getElementById("act2HeightN"),
  act2HeightMean: document.getElementById("act2HeightMean"),
  act2HeightSd: document.getElementById("act2HeightSd"),

  act2SkewRefreshBtn: document.getElementById("act2SkewRefreshBtn"),
  act2SkewRightSvg: document.getElementById("act2SkewRightSvg"),
  act2SkewRightMode: document.getElementById("act2SkewRightMode"),
  act2SkewRightMedian: document.getElementById("act2SkewRightMedian"),
  act2SkewRightMean: document.getElementById("act2SkewRightMean"),
  act2SkewRightOrder: document.getElementById("act2SkewRightOrder"),
  act2SkewLeftSvg: document.getElementById("act2SkewLeftSvg"),
  act2SkewLeftMode: document.getElementById("act2SkewLeftMode"),
  act2SkewLeftMedian: document.getElementById("act2SkewLeftMedian"),
  act2SkewLeftMean: document.getElementById("act2SkewLeftMean"),
  act2SkewLeftOrder: document.getElementById("act2SkewLeftOrder"),

  act2MultiRefreshBtn: document.getElementById("act2MultiRefreshBtn"),
  act2MultiPeakSvg: document.getElementById("act2MultiPeakSvg"),
  act2MultiMode: document.getElementById("act2MultiMode"),
  act2MultiMedian: document.getElementById("act2MultiMedian"),
  act2MultiMean: document.getElementById("act2MultiMean"),
  act2MultiOrder: document.getElementById("act2MultiOrder"),

  act3DatasetSelect: document.getElementById("act3DatasetSelect"),
  act3ShuffleBtn: document.getElementById("act3ShuffleBtn"),
  act3Status: document.getElementById("act3Status"),
  act3DozenSvg: document.getElementById("act3DozenSvg"),
  act3DatasetName: document.getElementById("act3DatasetName"),
  act3N: document.getElementById("act3N"),
  act3MeanX: document.getElementById("act3MeanX"),
  act3MeanY: document.getElementById("act3MeanY"),
  act3VarX: document.getElementById("act3VarX"),
  act3VarY: document.getElementById("act3VarY"),
  act3Corr: document.getElementById("act3Corr"),
  act3SmallMultiples: document.getElementById("act3SmallMultiples"),
  act3DinoSvg: document.getElementById("act3DinoSvg"),
  act3DinoMeanX: document.getElementById("act3DinoMeanX"),
  act3DinoMeanY: document.getElementById("act3DinoMeanY"),
  act3DinoSdX: document.getElementById("act3DinoSdX"),
  act3DinoSdY: document.getElementById("act3DinoSdY"),
  act3DinoVarX: document.getElementById("act3DinoVarX"),
  act3DinoVarY: document.getElementById("act3DinoVarY"),
  act3MatrixRefreshBtn: document.getElementById("act3MatrixRefreshBtn"),
  act3WideRowCount: document.getElementById("act3WideRowCount"),
  act3WideColCount: document.getElementById("act3WideColCount"),
  act3WideTableHead: document.getElementById("act3WideTableHead"),
  act3WideTableBody: document.getElementById("act3WideTableBody"),
  act3PairplotSvg: document.getElementById("act3PairplotSvg"),
  act3BoxColumnSelect: document.getElementById("act3BoxColumnSelect"),
  act3BoxRefreshBtn: document.getElementById("act3BoxRefreshBtn"),
  act3BoxplotSvg: document.getElementById("act3BoxplotSvg"),
  act3BoxColumnLabel: document.getElementById("act3BoxColumnLabel"),
  act3BoxOutlier: document.getElementById("act3BoxOutlier"),
  act3BoxLargestNormal: document.getElementById("act3BoxLargestNormal"),
  act3BoxIqr: document.getElementById("act3BoxIqr"),
  act3BoxQ3: document.getElementById("act3BoxQ3"),
  act3BoxMedian: document.getElementById("act3BoxMedian"),
  act3BoxQ1: document.getElementById("act3BoxQ1"),
  act3BoxSmallestNormal: document.getElementById("act3BoxSmallestNormal"),

  act4NRange: document.getElementById("act4NRange"),
  act4NVal: document.getElementById("act4NVal"),
  act4LiftDemoSvg: document.getElementById("act4LiftDemoSvg"),
  act4LiftDemoReadout: document.getElementById("act4LiftDemoReadout"),
  act4ObservedGapSvg: document.getElementById("act4ObservedGapSvg"),
  act4ObservedGapReadout: document.getElementById("act4ObservedGapReadout"),
  act4CiNRange: document.getElementById("act4CiNRange"),
  act4CiNVal: document.getElementById("act4CiNVal"),
  act4CiLiftRange: document.getElementById("act4CiLiftRange"),
  act4CiLiftVal: document.getElementById("act4CiLiftVal"),
  act4CiConceptSvg: document.getElementById("act4CiConceptSvg"),
  act4CiConceptText: document.getElementById("act4CiConceptText"),
  act4ZDiffRange: document.getElementById("act4ZDiffRange"),
  act4ZDiffVal: document.getElementById("act4ZDiffVal"),
  act4ZSeRange: document.getElementById("act4ZSeRange"),
  act4ZSeVal: document.getElementById("act4ZSeVal"),
  act4ZConceptSvg: document.getElementById("act4ZConceptSvg"),
  act4ZConceptText: document.getElementById("act4ZConceptText"),
  act4PZRange: document.getElementById("act4PZRange"),
  act4PZVal: document.getElementById("act4PZVal"),
  act4PConceptSvg: document.getElementById("act4PConceptSvg"),
  act4PConceptText: document.getElementById("act4PConceptText"),
  act4PConceptPVal: document.getElementById("act4PConceptPVal"),
  act4NullNRange: document.getElementById("act4NullNRange"),
  act4NullNVal: document.getElementById("act4NullNVal"),
  act4NullRunsRange: document.getElementById("act4NullRunsRange"),
  act4NullRunsVal: document.getElementById("act4NullRunsVal"),
  act4NullSimBtn: document.getElementById("act4NullSimBtn"),
  act4NullPSvg: document.getElementById("act4NullPSvg"),
  act4NullSummary: document.getElementById("act4NullSummary"),
  act4BaseRange: document.getElementById("act4BaseRange"),
  act4BaseVal: document.getElementById("act4BaseVal"),
  act4LiftRange: document.getElementById("act4LiftRange"),
  act4LiftVal: document.getElementById("act4LiftVal"),
  act4ExpectedSe: document.getElementById("act4ExpectedSe"),
  act4ExpectedWidth: document.getElementById("act4ExpectedWidth"),
  act4SetupHint: document.getElementById("act4SetupHint"),
  act4RunTestBtn: document.getElementById("act4RunTestBtn"),
  act4RunBatchBtn: document.getElementById("act4RunBatchBtn"),
  act4ResetHistoryBtn: document.getElementById("act4ResetHistoryBtn"),
  act4DecisionText: document.getElementById("act4DecisionText"),
  act4CiSvg: document.getElementById("act4CiSvg"),
  act4ControlRate: document.getElementById("act4ControlRate"),
  act4TreatmentRate: document.getElementById("act4TreatmentRate"),
  act4ObservedLift: document.getElementById("act4ObservedLift"),
  act4CiText: document.getElementById("act4CiText"),
  act4PValue: document.getElementById("act4PValue"),
  act4Verdict: document.getElementById("act4Verdict"),
  act4HistorySvg: document.getElementById("act4HistorySvg"),
  act4HistoryHint: document.getElementById("act4HistoryHint"),
  act4RunCount: document.getElementById("act4RunCount"),
  act4LiftEvidenceRate: document.getElementById("act4LiftEvidenceRate"),
  act4InconclusiveRate: document.getElementById("act4InconclusiveRate"),
  act4AvgObservedLift: document.getElementById("act4AvgObservedLift"),

  act5NRange: document.getElementById("act5NRange"),
  act5NVal: document.getElementById("act5NVal"),
  act5RunsRange: document.getElementById("act5RunsRange"),
  act5RunsVal: document.getElementById("act5RunsVal"),
  act5ShockRange: document.getElementById("act5ShockRange"),
  act5ShockVal: document.getElementById("act5ShockVal"),
  act5SimBtn: document.getElementById("act5SimBtn"),
  act5DistType: document.getElementById("act5DistType"),
  act5DistNRange: document.getElementById("act5DistNRange"),
  act5DistNVal: document.getElementById("act5DistNVal"),
  act5ResampleBtn: document.getElementById("act5ResampleBtn"),
  act5DistSvg: document.getElementById("act5DistSvg"),
  act5DistSummary: document.getElementById("act5DistSummary"),
  act5QqSvg: document.getElementById("act5QqSvg"),
  act5QqCorr: document.getElementById("act5QqCorr"),
  act5DiagVerdict: document.getElementById("act5DiagVerdict"),
  act5DiagSummary: document.getElementById("act5DiagSummary"),
  act5QqDistType: document.getElementById("act5QqDistType"),
  act5QqRefType: document.getElementById("act5QqRefType"),
  act5QqFamilySvg: document.getElementById("act5QqFamilySvg"),
  act5QqFamilyCorr: document.getElementById("act5QqFamilyCorr"),
  act5QqFamilyVerdict: document.getElementById("act5QqFamilyVerdict"),
  act5QqFamilySummary: document.getElementById("act5QqFamilySummary"),
  act5QqScenarioDataType: document.getElementById("act5QqScenarioDataType"),
  act5QqScenarioRefType: document.getElementById("act5QqScenarioRefType"),
  act5QqScenarioNRange: document.getElementById("act5QqScenarioNRange"),
  act5QqScenarioNVal: document.getElementById("act5QqScenarioNVal"),
  act5QqScenarioSvg: document.getElementById("act5QqScenarioSvg"),
  act5QqScenarioCorr: document.getElementById("act5QqScenarioCorr"),
  act5QqScenarioVerdict: document.getElementById("act5QqScenarioVerdict"),
  act5QqScenarioSummary: document.getElementById("act5QqScenarioSummary"),
  act5AssumptionSvg: document.getElementById("act5AssumptionSvg"),
  act5FalseRate: document.getElementById("act5FalseRate"),
  act5MedianP: document.getElementById("act5MedianP"),
  act5RiskLabel: document.getElementById("act5RiskLabel"),
  act5Summary: document.getElementById("act5Summary"),

  act6NRange: document.getElementById("act6NRange"),
  act6NVal: document.getElementById("act6NVal"),
  act6TrueSlopeRange: document.getElementById("act6TrueSlopeRange"),
  act6TrueSlopeVal: document.getElementById("act6TrueSlopeVal"),
  act6NoiseRange: document.getElementById("act6NoiseRange"),
  act6NoiseVal: document.getElementById("act6NoiseVal"),
  act6ResampleBtn: document.getElementById("act6ResampleBtn"),
  act6ScatterSvg: document.getElementById("act6ScatterSvg"),
  act6SlopeEst: document.getElementById("act6SlopeEst"),
  act6SlopeBias: document.getElementById("act6SlopeBias"),
  act6PredLift: document.getElementById("act6PredLift"),
  act6PointSummary: document.getElementById("act6PointSummary"),
  act6RunsRange: document.getElementById("act6RunsRange"),
  act6RunsVal: document.getElementById("act6RunsVal"),
  act6ResimBtn: document.getElementById("act6ResimBtn"),
  act6SlopeDistSvg: document.getElementById("act6SlopeDistSvg"),
  act6DistMean: document.getElementById("act6DistMean"),
  act6DistSd: document.getElementById("act6DistSd"),
  act6DistSummary: document.getElementById("act6DistSummary"),
  act6MomNRange: document.getElementById("act6MomNRange"),
  act6MomNVal: document.getElementById("act6MomNVal"),
  act6OutlierRange: document.getElementById("act6OutlierRange"),
  act6OutlierVal: document.getElementById("act6OutlierVal"),
  act6MomMleResampleBtn: document.getElementById("act6MomMleResampleBtn"),
  act6MomMleSvg: document.getElementById("act6MomMleSvg"),
  act6MomMu: document.getElementById("act6MomMu"),
  act6MomB: document.getElementById("act6MomB"),
  act6MleMu: document.getElementById("act6MleMu"),
  act6MleB: document.getElementById("act6MleB"),
  act6MomMleSummary: document.getElementById("act6MomMleSummary"),

  act7ZNRange: document.getElementById("act7ZNRange"),
  act7ZNVal: document.getElementById("act7ZNVal"),
  act7ZMu0Range: document.getElementById("act7ZMu0Range"),
  act7ZMu0Val: document.getElementById("act7ZMu0Val"),
  act7ZTrueMuRange: document.getElementById("act7ZTrueMuRange"),
  act7ZTrueMuVal: document.getElementById("act7ZTrueMuVal"),
  act7ZSigmaRange: document.getElementById("act7ZSigmaRange"),
  act7ZSigmaVal: document.getElementById("act7ZSigmaVal"),
  act7ZSampleBtn: document.getElementById("act7ZSampleBtn"),
  act7ZSvg: document.getElementById("act7ZSvg"),
  act7ZXbar: document.getElementById("act7ZXbar"),
  act7ZStat: document.getElementById("act7ZStat"),
  act7ZP: document.getElementById("act7ZP"),
  act7ZDecision: document.getElementById("act7ZDecision"),
  act7ZSummary: document.getElementById("act7ZSummary"),

  act7TNRange: document.getElementById("act7TNRange"),
  act7TNVal: document.getElementById("act7TNVal"),
  act7TMu0Range: document.getElementById("act7TMu0Range"),
  act7TMu0Val: document.getElementById("act7TMu0Val"),
  act7TTrueMuRange: document.getElementById("act7TTrueMuRange"),
  act7TTrueMuVal: document.getElementById("act7TTrueMuVal"),
  act7TSigmaRange: document.getElementById("act7TSigmaRange"),
  act7TSigmaVal: document.getElementById("act7TSigmaVal"),
  act7TSampleBtn: document.getElementById("act7TSampleBtn"),
  act7TSvg: document.getElementById("act7TSvg"),
  act7TXbar: document.getElementById("act7TXbar"),
  act7TSVal: document.getElementById("act7TSVal"),
  act7TTStat: document.getElementById("act7TTStat"),
  act7TP: document.getElementById("act7TP"),
  act7TDecision: document.getElementById("act7TDecision"),
  act7TSummary: document.getElementById("act7TSummary"),

  act7PowerNRange: document.getElementById("act7PowerNRange"),
  act7PowerNVal: document.getElementById("act7PowerNVal"),
  act7PowerEffectRange: document.getElementById("act7PowerEffectRange"),
  act7PowerEffectVal: document.getElementById("act7PowerEffectVal"),
  act7PowerAlphaRange: document.getElementById("act7PowerAlphaRange"),
  act7PowerAlphaVal: document.getElementById("act7PowerAlphaVal"),
  act7PowerSvg: document.getElementById("act7PowerSvg"),
  act7PowerVal: document.getElementById("act7PowerVal"),
  act7BetaVal: document.getElementById("act7BetaVal"),
  act7AlphaVal: document.getElementById("act7AlphaVal"),
  act7PowerSummary: document.getElementById("act7PowerSummary"),

  act7PZRange: document.getElementById("act7PZRange"),
  act7PZVal: document.getElementById("act7PZVal"),
  act7PSvg: document.getElementById("act7PSvg"),
  act7PVal: document.getElementById("act7PVal"),
  act7PTail: document.getElementById("act7PTail"),
  act7PSummary: document.getElementById("act7PSummary"),

  act7SideSelect: document.getElementById("act7SideSelect"),
  act7SideZRange: document.getElementById("act7SideZRange"),
  act7SideZVal: document.getElementById("act7SideZVal"),
  act7SideSvg: document.getElementById("act7SideSvg"),
  act7SideP: document.getElementById("act7SideP"),
  act7SideRule: document.getElementById("act7SideRule"),
  act7SideSummary: document.getElementById("act7SideSummary"),

  act7MultMRange: document.getElementById("act7MultMRange"),
  act7MultMVal: document.getElementById("act7MultMVal"),
  act7MultAlphaRange: document.getElementById("act7MultAlphaRange"),
  act7MultAlphaVal: document.getElementById("act7MultAlphaVal"),
  act7MultRunBtn: document.getElementById("act7MultRunBtn"),
  act7MultSvg: document.getElementById("act7MultSvg"),
  act7MultExpected: document.getElementById("act7MultExpected"),
  act7MultFwer: document.getElementById("act7MultFwer"),
  act7MultLastFalse: document.getElementById("act7MultLastFalse"),
  act7MultSummary: document.getElementById("act7MultSummary"),

  preAssessmentPanel: document.getElementById("preAssessmentPanel"),
  guidedCourseProgress: document.getElementById("guidedCourseProgress"),
  guidedCourseProgressLabel: document.getElementById("guidedCourseProgressLabel"),
  guidedCourseProgressFocus: document.getElementById("guidedCourseProgressFocus"),
  guidedCourseProgressBar: document.getElementById("guidedCourseProgressBar"),
  guidedCourseProgressFill: document.getElementById("guidedCourseProgressFill"),
  preAssessmentGrid: document.getElementById("preAssessmentGrid"),
  preAssessmentSummary: document.getElementById("preAssessmentSummary"),
  preAssessmentCheckBtn: document.getElementById("preAssessmentCheckBtn"),
  postAssessmentPanel: document.getElementById("postAssessmentPanel"),
  postAssessmentGrid: document.getElementById("postAssessmentGrid"),
  postAssessmentSummary: document.getElementById("postAssessmentSummary"),
  postAssessmentCheckBtn: document.getElementById("postAssessmentCheckBtn"),
};

const heroMotion = {
  particles: [],
  frameId: null,
  lastTime: 0,
};

const miniCorrState = {
  points: [],
  latestAttention: 0,
};

const miniUserState = {
  rows: [],
};

const act2State = {
  rows: [],
  version: 0,
};

const act2HeightState = {
  heights: [],
  version: 0,
};

const act2SkewState = {
  rightValues: [],
  leftValues: [],
  version: 0,
};

const act2MultiState = {
  values: [],
  version: 0,
};

const act3DozenState = {
  names: [],
  byName: new Map(),
  selected: "",
  loaded: false,
};

const act3MatrixState = {
  rows: [],
  columns: [
    "height_cm",
    "weight_kg",
    "monthly_income",
    "monthly_spend",
    "scroll_velocity",
    "attention_span",
    "bonus_points",
    "sleep_hours",
    "coffee_cups",
    "keyboard_pressure",
  ],
  version: 0,
  boxColumn: "monthly_spend",
  hoveredUserId: "",
  tableHoverBound: false,
  matrixBtnBound: false,
  boxBtnBound: false,
  boxSelectBound: false,
};

const act4State = {
  nPerGroup: 2000,
  baseRate: 0.12,
  expectedLift: 0.015,
  last: null,
  liftDemoControlRate: 0.12,
  liftDemoTreatmentRate: 0.135,
  observedGapControlRate: 0.118,
  observedGapTreatmentRate: 0.132,
  history: [],
  ciDemoN: 1200,
  ciDemoLiftPp: 1.2,
  zDemoDiffPp: 1.2,
  zDemoSePp: 0.6,
  pDemoZ: 2.0,
  nullNPerGroup: 2000,
  nullRuns: 1000,
  nullPValues: [],
};

const act5State = {
  nPerGroup: 1500,
  runs: 1200,
  shock: 0.02,
  pValues: [],
  distType: "normal",
  distN: 300,
  distData: [],
  qqDistType: "normal",
  qqDistData: [],
  qqRefType: "normal",
  qqScenarioDataType: "right_skew",
  qqScenarioRefType: "normal",
  qqScenarioN: 260,
  qqScenarioData: [],
};

const act6State = {
  n: 70,
  trueSlope: 1.4,
  noise: 28,
  runs: 400,
  sample: [],
  fit: { slope: NaN, intercept: NaN, bias: NaN, predLift: NaN },
  slopeSamples: [],
  distTrueSlope: 1.4,
  distN: 70,
  distNoise: 28,
  momN: 120,
  outlierRate: 0.05,
  momMleData: [],
  momMleTrueMu: 24,
  momMleTrueB: 15,
  momMleMomMu: NaN,
  momMleMomB: NaN,
  momMleMleMu: NaN,
  momMleMleB: NaN,
};

const act7State = {
  z: {
    n: 60,
    mu0: 100,
    trueMu: 101.2,
    sigma: 8,
    noisePool: [],
    xbar: NaN,
    stat: NaN,
    p: NaN,
  },
  t: {
    n: 25,
    mu0: 100,
    trueMu: 101.2,
    sigma: 8,
    noisePool: [],
    xbar: NaN,
    s: NaN,
    stat: NaN,
    p: NaN,
  },
  power: {
    n: 80,
    effect: 0.3,
    alpha: 0.05,
    sigma: 1,
  },
  pval: {
    zObs: 2.1,
  },
  side: {
    mode: "two",
    zObs: 1.5,
  },
  mult: {
    m: 20,
    alpha: 0.05,
    flags: [],
  },
};

const assessmentState = {
  pre: {},
  post: {},
  userId: "",
  scores: {
    pre: null,
    post: null,
  },
  saveStatus: {
    pre: "idle",
    post: "idle",
  },
  submitted: {
    pre: false,
    post: false,
  },
  restoredFromSavedRecord: {
    pre: false,
    post: false,
  },
};

const assessmentUiState = {
  pre: {},
  post: {},
  lastScrollY: 0,
  scrollBound: false,
  autoCollapseTimer: null,
  lastScrollDirection: "idle",
};

const ASSESSMENT_USER_KEY = "statsBlogAssessmentUserId";
const ASSESSMENT_STAGE_KEY = "statsBlogAssessmentStageIndex";

const ASSESSMENT_QUESTIONS = [
  {
    id: "qq_diagnostic",
    title: "Read the QQ plot",
    prompt: "The plot compares ordered sample quantiles with the quantiles of a fitted normal model. Which interpretation fits the pattern best?",
    defaults: { choice: "" },
  },
  {
    id: "boxplot_normality",
    title: "Read the boxplot",
    prompt: "Based on the shape of the box, whiskers, and median, which conclusion is the most reasonable?",
    defaults: { choice: "" },
  },
  {
    id: "pvalue_decision",
    title: "Read the test decision",
    prompt: "The orange tails sum to a two-sided p-value of 0.10. At α = 0.05, would this test reject the null hypothesis?",
    defaults: { choice: "" },
    observedZ: normalInv(1 - 0.10 / 2),
    alpha: 0.05,
  },
  {
    id: "assumption_stress_label",
    title: "Label the assumption check",
    prompt: "The true effect is zero and the hidden volatility is fixed at 0.05. Which label best describes what this plot says about the model?",
    defaults: { choice: "" },
  },
  {
    id: "summary_vs_shape",
    title: "Do the summaries determine the shape?",
    prompt:
      "Suppose you were only given the following summary statistics. Would they be enough to conclude that the data look roughly like this straight-line cloud around the fitted line?" +
      '<span class="assessment-summary-math">\\(\\bar{x} = 49.3\\), \\(\\bar{y} = 56.0\\), \\(s_x^2 = 619.8\\), \\(s_y^2 = 279.6\\), \\(r = 0.933\\), \\(\\text{slope} = 0.627\\)</span>',
    defaults: { choice: "" },
  },
  {
    id: "ci_alpha_decision",
    title: "Does this count as evidence at 5%?",
    prompt: "The 95% confidence interval just includes 0 pp. Under a two-sided test at α = 0.05, which conclusion is supported by the plot?",
    defaults: { choice: "" },
    observedLiftPp: 0.52,
    ciLo: -0.04,
    ciHi: 1.08,
  },
  {
    id: "estimate_bias_check",
    title: "Is this mismatch concerning?",
    prompt: "The blue dashed line is the average estimate across repeated samples, and it sits slightly away from the orange true slope. Is that, by itself, evidence of poor model fit?",
    defaults: { choice: "" },
    trueSlope: 0.46,
  },
  {
    id: "test_selection",
    title: "Which test matches this design?",
    prompt: "The same 24 users are measured before and after a redesign. You want to test whether the mean change differs from zero, and the population variance is unknown. Which test is the best fit?",
    defaults: { choice: "" },
  },
  {
    id: "multiple_once_realistic",
    title: "Is this many positives still realistic?",
    prompt: "Suppose all 55 dots are null features, each tested once at α = 0.05, and 6 dots turn orange. Here, an orange dot means a test that came out significant in that run. Is that still a realistic outcome from chance alone?",
    defaults: { choice: "" },
    m: 55,
    observedFalse: 6,
    alpha: 0.05,
  },
  {
    id: "skew_center_order",
    title: "Order the three centres",
    prompt: "Take a look at the distribution. From left to right, in what order do mode, median, and mean appear?",
    defaults: { choice: "" },
  },
];

const ASSESSMENT_CORR_POINTS = [
  { x: 12, y: 82 },
  { x: 18, y: 76 },
  { x: 24, y: 66 },
  { x: 31, y: 63 },
  { x: 37, y: 58 },
  { x: 43, y: 50 },
  { x: 50, y: 47 },
  { x: 58, y: 40 },
  { x: 64, y: 36 },
  { x: 71, y: 32 },
  { x: 79, y: 25 },
  { x: 86, y: 20 },
  { x: 93, y: 15 },
];

const ASSESSMENT_HIST_SAMPLE = [
  19, 22, 24, 27, 29, 31, 34, 36, 39, 42, 45, 47, 50, 53, 55, 58, 60, 62, 64, 66,
  68, 70, 72, 74, 76, 78, 81, 84, 88, 93, 98, 104, 112, 124,
];

const ASSESSMENT_SKEW_SAMPLE = [
  18, 24, 31, 38, 46, 52, 57, 61, 65, 69, 72, 74, 76, 78, 79, 80, 81, 82, 83, 84, 84, 85, 85, 86,
];

const ASSESSMENT_QQ_RIGHT_SKEW_SAMPLE = (() => {
  const random = createSeededRandom(20260322);
  const values = [];
  for (let i = 0; i < 72; i += 1) {
    const sigma = 0.8;
    values.push(Math.exp(sigma * gaussianFrom(random)) - Math.exp((sigma * sigma) / 2));
  }
  return values;
})();

const ASSESSMENT_BOXPLOT_LEFT_SKEW_SAMPLE = (() => {
  const random = createSeededRandom(20260323);
  const values = [];
  for (let i = 0; i < 84; i += 1) {
    const sigma = 0.78;
    values.push(-(Math.exp(sigma * gaussianFrom(random)) - Math.exp((sigma * sigma) / 2)));
  }
  return values;
})();

const ASSESSMENT_ACT5_STRESS_SAMPLE = (() => {
  const rand = createSeededRandom(20260325);
  const n = 1500;
  const runs = 1200;
  const shock = 0.05;
  const base = 0.12;
  const pValues = [];
  for (let r = 0; r < runs; r += 1) {
    const days = Math.max(10, Math.min(80, Math.round(n / 45)));
    const usersPerDay = Math.max(1, Math.floor(n / days));
    let xC = 0;
    let xT = 0;

    for (let d = 0; d < days; d += 1) {
      const pC = clamp(base + gaussianFrom(rand) * shock, 0.001, 0.95);
      const pT = clamp(base + gaussianFrom(rand) * shock, 0.001, 0.95);
      xC += binomialSample(usersPerDay, pC, rand);
      xT += binomialSample(usersPerDay, pT, rand);
    }

    const usedN = usersPerDay * days;
    const rC = xC / usedN;
    const rT = xT / usedN;
    const diff = rT - rC;
    const pooled = (xC + xT) / (2 * usedN);
    const seNaive = Math.sqrt(Math.max(1e-12, pooled * (1 - pooled) * (2 / usedN)));
    const z = diff / seNaive;
    pValues.push(Math.max(0, Math.min(1, 2 * (1 - normalCdf(Math.abs(z))))));
  }
  return pValues;
})();

const ASSESSMENT_SUMMARY_SHAPE_POINTS = (() => {
  const rand = createSeededRandom(20260326);
  return Array.from({ length: 34 }, (_, i) => {
    const x = 8 + i * 2.5;
    const y = 28 + 0.56 * x + gaussianFrom(rand) * 5.2;
    return { x, y: clamp(y, 6, 96) };
  });
})();

const ASSESSMENT_SUMMARY_SHAPE_STATS = (() => {
  const xs = ASSESSMENT_SUMMARY_SHAPE_POINTS.map((p) => p.x);
  const ys = ASSESSMENT_SUMMARY_SHAPE_POINTS.map((p) => p.y);
  const fit = regression(xs, ys);
  return {
    meanX: mean(xs),
    meanY: mean(ys),
    varX: sampleVariance(xs),
    varY: sampleVariance(ys),
    corr: correlation(xs, ys),
    slope: fit.slope,
    intercept: fit.intercept,
  };
})();

const ASSESSMENT_SLOPE_DIST_SAMPLE = (() => {
  const rand = createSeededRandom(20260327);
  const trueSlope = 0.46;
  const slopes = [];
  for (let r = 0; r < 240; r += 1) {
    slopes.push(clamp(trueSlope + 0.024 + gaussianFrom(rand) * 0.105, 0.04, 0.92));
  }
  return { slopes, trueSlope, n: 70, noise: 34 };
})();

const ASSESSMENT_ACT2_RIGHT_SKEW_VALUES = (() => {
  const rand = createSeededRandom(447701);
  return Array.from({ length: 360 }, () => {
    const core = Math.exp(5.65 + gaussianFrom(rand) * 0.66);
    const tail = rand() < 0.11 ? Math.exp(7.1 + gaussianFrom(rand) * 0.52) : 0;
    return clamp(core + tail, 8, 3600);
  });
})();

const heroPalette = [
  [0, 114, 178],
  [86, 180, 233],
  [0, 158, 115],
  [230, 159, 0],
  [204, 121, 167],
];

const DATASAURUS_SOURCES = [
  {
    url: "https://raw.githubusercontent.com/rfordatascience/tidytuesday/master/data/2020/2020-10-13/datasaurus.csv",
    type: "csv",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/rfordatascience/tidytuesday@master/data/2020/2020-10-13/datasaurus.csv",
    type: "csv",
  },
  {
    url: "https://raw.githubusercontent.com/jumpingrivers/datasauRus/master/inst/extdata/DatasaurusDozen.tsv",
    type: "tsv",
  },
];

const ACT3_SMALL_MULTIPLES_ORDER = [
  "away",
  "bullseye",
  "circle",
  "dots",
  "h_lines",
  "high_lines",
  "slant_down",
  "slant_up",
  "star",
  "v_lines",
  "wide_lines",
  "x_shape",
];

function gaussian() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function laplaceSample(mu = 0, b = 1) {
  const u = Math.random() - 0.5;
  return mu - b * Math.sign(u) * Math.log(1 - 2 * Math.abs(u));
}

function gaussianFrom(randomFn) {
  let u = 0;
  let v = 0;
  while (u === 0) u = randomFn();
  while (v === 0) v = randomFn();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function createSeededRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mean(arr) {
  if (!arr.length) return NaN;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function sampleVariance(arr) {
  if (arr.length < 2) return NaN;
  const m = mean(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += (arr[i] - m) ** 2;
  }
  return sum / (arr.length - 1);
}

function sd(arr) {
  const variance = sampleVariance(arr);
  return Number.isFinite(variance) ? Math.sqrt(variance) : NaN;
}

function sampleCovariance(xs, ys) {
  if (xs.length !== ys.length || xs.length < 2) return NaN;
  const mx = mean(xs);
  const my = mean(ys);
  let sum = 0;
  for (let i = 0; i < xs.length; i += 1) {
    sum += (xs[i] - mx) * (ys[i] - my);
  }
  return sum / (xs.length - 1);
}

function correlation(xs, ys) {
  if (xs.length !== ys.length || xs.length < 2) return NaN;
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let dx = 0;
  let dy = 0;

  for (let i = 0; i < xs.length; i += 1) {
    const x = xs[i] - mx;
    const y = ys[i] - my;
    num += x * y;
    dx += x * x;
    dy += y * y;
  }

  if (dx === 0 || dy === 0) return NaN;
  return num / Math.sqrt(dx * dy);
}

function regression(xs, ys) {
  if (xs.length !== ys.length || xs.length < 2) {
    return { slope: NaN, intercept: NaN };
  }

  const mx = mean(xs);
  const my = mean(ys);
  let numerator = 0;
  let denominator = 0;

  for (let i = 0; i < xs.length; i += 1) {
    numerator += (xs[i] - mx) * (ys[i] - my);
    denominator += (xs[i] - mx) ** 2;
  }

  if (denominator === 0) return { slope: NaN, intercept: my };
  const slope = numerator / denominator;
  return { slope, intercept: my - slope * mx };
}

function empiricalQuantile(arr, p) {
  if (!arr.length) return NaN;
  const sorted = [...arr].sort((a, b) => a - b);
  const pos = (sorted.length - 1) * p;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  const t = pos - lo;
  return sorted[lo] * (1 - t) + sorted[hi] * t;
}

function fmt(value, digits = 2) {
  return Number.isFinite(value) ? value.toFixed(digits) : "-";
}

function fmtNum(value, digits = 2) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function fmtInt(value) {
  if (!Number.isFinite(value)) return "-";
  return Math.round(value).toLocaleString("en-US");
}

function erfApprox(x) {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) *
      Math.exp(-ax * ax);
  return sign * y;
}

function normalCdf(x) {
  return 0.5 * (1 + erfApprox(x / Math.sqrt(2)));
}

function normalInv(p) {
  const prob = clamp(p, 1e-12, 1 - 1e-12);
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2, 1.38357751867269e2, -3.066479806614716e1, 2.506628277459239];
  const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2, 6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996, 3.754408661907416];
  const plow = 0.02425;
  const phigh = 1 - plow;

  if (prob < plow) {
    const q = Math.sqrt(-2 * Math.log(prob));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  if (prob > phigh) {
    const q = Math.sqrt(-2 * Math.log(1 - prob));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }

  const q = prob - 0.5;
  const r = q * q;
  return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function normalPdf(x, mu = 0, sigma = 1) {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

function assessmentAttentionFromScroll(scroll) {
  return clamp(96 - 0.82 * scroll, 6, 96);
}

function assessmentCiFromN(n, observedLiftPp = 1.2, baseline = 0.12) {
  const nSafe = Math.max(50, Math.round(n));
  const sePp = Math.sqrt((2 * baseline * (1 - baseline)) / nSafe) * 100;
  return {
    n: nSafe,
    sePp,
    ciLo: observedLiftPp - 1.96 * sePp,
    ciHi: observedLiftPp + 1.96 * sePp,
  };
}

function getAssessmentQuestionDefinition(questionId) {
  return ASSESSMENT_QUESTIONS.find((question) => question.id === questionId) || null;
}

function getOrCreateAssessmentUserId() {
  try {
    const existing = window.localStorage.getItem(ASSESSMENT_USER_KEY);
    if (existing) return existing;
    const created =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `user-${Date.now()}-${Math.round(Math.random() * 1e8)}`;
    window.localStorage.setItem(ASSESSMENT_USER_KEY, created);
    return created;
  } catch (err) {
    return typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `user-${Date.now()}-${Math.round(Math.random() * 1e8)}`;
  }
}

function cloneAssessmentDefaults() {
  const next = {};
  ASSESSMENT_QUESTIONS.forEach((question) => {
    next[question.id] = { ...question.defaults };
  });
  return next;
}

function cloneAssessmentUiDefaults() {
  const next = {};
  ASSESSMENT_QUESTIONS.forEach((question) => {
    next[question.id] = {
      collapsed: false,
      pinnedOpen: false,
    };
  });
  return next;
}

function getStoredAssessmentStageIndex() {
  try {
    const raw = window.localStorage.getItem(ASSESSMENT_STAGE_KEY);
    if (raw === null) return 0;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed)) : 0;
  } catch (err) {
    return 0;
  }
}

function setStoredAssessmentStageIndex(index) {
  try {
    window.localStorage.setItem(ASSESSMENT_STAGE_KEY, String(index));
  } catch (err) {
    // Ignore storage issues and keep the guided flow usable.
  }
}

function getGuidedSections() {
  return Array.from(document.querySelectorAll("[data-pre-gated]")).filter((section) => {
    if (section.hasAttribute("data-requires-post") && !assessmentState.submitted.post) return false;
    return true;
  });
}

function getActNumberFromSection(section) {
  const datasetActNumber = Number(section?.dataset?.actNumber);
  if (Number.isFinite(datasetActNumber) && datasetActNumber > 0) return datasetActNumber;
  const title = section?.querySelector(".act-title")?.textContent?.trim() || "";
  const match = title.match(/^Act\s+(\d+)/i);
  return match ? Number(match[1]) : null;
}

function getActNameFromSection(section) {
  const datasetActName = section?.dataset?.actName?.trim();
  if (datasetActName) return datasetActName;
  const title = section?.querySelector(".act-title")?.textContent?.trim() || "";
  const match = title.match(/^Act\s+\d+\s*:\s*(.+)$/i);
  return match ? match[1].trim() : "";
}

function getGuidedSectionLabel(section, index) {
  if (!section) return `Section ${index + 1}`;
  if (section.id === "postAssessmentPanel") return "Post-assessment";
  if (section.id === "thankYouPanel") return "Wrap-up";
  const title = section.querySelector(".act-title");
  return title?.textContent?.trim() || `Section ${index + 1}`;
}

function getGuidedProgressMeta(section, index) {
  const actNumber = getActNumberFromSection(section);
  const actName = getActNameFromSection(section);
  const focus = section?.dataset?.guidedFocus || "";
  if (actNumber) {
    return {
      label: actName ? `Act ${actNumber} of 7 • ${actName}` : `Act ${actNumber} of 7`,
      percent: Math.round((actNumber / 7) * 100),
      focus,
    };
  }
  if (section?.id === "postAssessmentPanel") {
    return {
      label: "Post-assessment",
      percent: 100,
      focus,
    };
  }
  if (section?.id === "thankYouPanel") {
    return {
      label: "Wrap-up",
      percent: 100,
      focus,
    };
  }
  return {
    label: getGuidedSectionLabel(section, index),
    percent: 0,
    focus: "",
  };
}

function updateGuidedCourseProgress(section, index = 0) {
  if (!els.guidedCourseProgress) return;
  const unlocked = assessmentState.submitted.pre;
  els.guidedCourseProgress.hidden = !unlocked;
  if (!unlocked || !section) return;

  const meta = getGuidedProgressMeta(section, index);
  if (els.guidedCourseProgressLabel) {
    els.guidedCourseProgressLabel.textContent = meta.label;
  }
  if (els.guidedCourseProgressFocus) {
    els.guidedCourseProgressFocus.textContent = meta.focus || "";
    els.guidedCourseProgressFocus.hidden = !meta.focus;
  }
  if (els.guidedCourseProgressBar) {
    els.guidedCourseProgressBar.setAttribute("aria-valuenow", String(meta.percent));
    els.guidedCourseProgressBar.setAttribute("aria-valuetext", meta.label);
  }
  if (els.guidedCourseProgressFill) {
    els.guidedCourseProgressFill.style.width = `${meta.percent}%`;
  }
}

function ensureGuidedStageChrome() {
  const sections = getGuidedSections();
  sections.forEach((section, index) => {
    let nav = section.querySelector(".guided-stage-nav");
    if (!nav) {
      nav = document.createElement("div");
      nav.className = "guided-stage-nav";
      nav.innerHTML = `
        <div class="guided-stage-progress"></div>
        <div class="guided-stage-actions"></div>
      `;
      section.appendChild(nav);
    }

    const progress = nav.querySelector(".guided-stage-progress");
    let actions = nav.querySelector(".guided-stage-actions");
    if (!actions) {
      actions = document.createElement("div");
      actions.className = "guided-stage-actions";
      nav.appendChild(actions);
    }

    let prevBtn = nav.querySelector('[data-guided-nav="prev"]');
    if (!prevBtn) {
      prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.className = "guided-stage-btn secondary";
      prevBtn.dataset.guidedNav = "prev";
      prevBtn.textContent = "Previous Section";
      actions.appendChild(prevBtn);
    }

    let nextBtn = nav.querySelector('[data-guided-nav="next"]');
    if (!nextBtn) {
      nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "guided-stage-btn primary";
      nextBtn.dataset.guidedNav = "next";
      actions.appendChild(nextBtn);
    }

    if (progress) {
      progress.textContent = getGuidedProgressMeta(section, index).label;
    }
    if (prevBtn) {
      prevBtn.hidden = index === 0;
      prevBtn.onclick = () => setActiveGuidedStage(index - 1);
    }
    if (nextBtn) {
      const isLast = index === sections.length - 1;
      if (isLast) {
        nextBtn.hidden = true;
        nextBtn.onclick = null;
      } else {
        nextBtn.hidden = false;
        nextBtn.textContent = `Continue to ${getGuidedSectionLabel(sections[index + 1], index + 1)}`;
        nextBtn.onclick = () => setActiveGuidedStage(index + 1);
      }
    }
  });
}

function setActiveGuidedStage(index, options = {}) {
  const sections = getGuidedSections();
  if (!sections.length) return;
  const nextIndex = Math.max(0, Math.min(index, sections.length - 1));

  sections.forEach((section, sectionIndex) => {
    section.hidden = sectionIndex !== nextIndex;
    section.classList.toggle("guided-stage-active", sectionIndex === nextIndex);
  });

  setStoredAssessmentStageIndex(nextIndex);

  const activeSection = sections[nextIndex];
  updateGuidedCourseProgress(activeSection, nextIndex);
  if (activeSection && options.scroll !== false) {
    activeSection.scrollIntoView({ behavior: options.behavior || "smooth", block: "start" });
  }

  window.requestAnimationFrame(() => {
    redrawResponsiveVisualsAfterLayout();
  });
}

function getAssessmentCardAnswered(values) {
  if (!values) return false;
  if (typeof values.choice === "string") return values.choice.trim() !== "";
  return false;
}

function getAssessmentCardUi(phase, questionId) {
  if (!assessmentUiState[phase] || !assessmentUiState[phase][questionId]) {
    if (!assessmentUiState[phase]) assessmentUiState[phase] = {};
    assessmentUiState[phase][questionId] = {
      collapsed: false,
      pinnedOpen: false,
    };
  }
  return assessmentUiState[phase][questionId];
}

function syncAssessmentCardUi(phase, questionId) {
  const prefix = `${phase}-${questionId}`;
  const card = document.getElementById(`${prefix}-card`);
  if (!card) return;
  const toggle = document.getElementById(`${prefix}-toggle`);
  const note = document.getElementById(`${prefix}-collapsed-note`);
  const values = assessmentState[phase][questionId];
  const answered = getAssessmentCardAnswered(values);
  const ui = getAssessmentCardUi(phase, questionId);

  card.classList.toggle("is-collapsed", ui.collapsed);
  card.classList.toggle("is-answered", answered);

  if (toggle) {
    toggle.setAttribute("aria-expanded", String(!ui.collapsed));
    toggle.setAttribute("aria-label", ui.collapsed ? "Expand question" : "Collapse question");
    toggle.innerHTML = ui.collapsed ? "&#43;" : "&#8722;";
    toggle.classList.toggle("is-collapsed", ui.collapsed);
  }

  if (note) {
    if (ui.collapsed) {
      note.textContent = answered ? "Answered. Click the icon to reopen." : "Collapsed. Click the icon to reopen.";
    } else {
      note.textContent = "";
    }
  }
}

function setAssessmentCardCollapsed(phase, questionId, collapsed, options = {}) {
  const prefix = `${phase}-${questionId}`;
  const card = document.getElementById(`${prefix}-card`);
  const heightBefore = card ? card.offsetHeight : 0;
  const ui = getAssessmentCardUi(phase, questionId);
  ui.collapsed = collapsed;
  if (options.pinnedOpen !== undefined) {
    ui.pinnedOpen = options.pinnedOpen;
  }
  syncAssessmentCardUi(phase, questionId);
  if (!card) return 0;
  const heightAfter = card.offsetHeight;
  return heightBefore - heightAfter;
}

function shouldAutoCollapseAssessmentCard(card) {
  const rect = card.getBoundingClientRect();
  return rect.bottom < -18;
}

function getAssessmentScrollAnchor() {
  const cards = Array.from(document.querySelectorAll(".assessment-card"));
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      return {
        id: card.id,
        top: rect.top,
      };
    }
  }
  return null;
}

function runAssessmentAutoCollapseCheck() {
  if (assessmentUiState.lastScrollDirection !== "down") return;
  const anchor = getAssessmentScrollAnchor();
  let collapsedAny = false;

  ["pre", "post"].forEach((phase) => {
    document.querySelectorAll(`#${phase}AssessmentGrid .assessment-card`).forEach((card) => {
      const questionId = card.dataset.questionId;
      if (!questionId) return;
      const values = assessmentState[phase]?.[questionId];
      const ui = getAssessmentCardUi(phase, questionId);
      if (!getAssessmentCardAnswered(values) || ui.collapsed || ui.pinnedOpen) return;
      if (shouldAutoCollapseAssessmentCard(card)) {
        setAssessmentCardCollapsed(phase, questionId, true);
        collapsedAny = true;
      }
    });
  });

  if (collapsedAny && anchor) {
    const anchorNode = document.getElementById(anchor.id);
    if (anchorNode) {
      const delta = anchorNode.getBoundingClientRect().top - anchor.top;
      if (Math.abs(delta) > 0.5) {
        window.scrollBy(0, delta);
        assessmentUiState.lastScrollY += delta;
      }
    }
  }
}

function queueAssessmentAutoCollapseCheck() {
  const currentScrollY = window.scrollY || window.pageYOffset || 0;
  if (currentScrollY > assessmentUiState.lastScrollY + 2) {
    assessmentUiState.lastScrollDirection = "down";
  } else if (currentScrollY < assessmentUiState.lastScrollY - 2) {
    assessmentUiState.lastScrollDirection = "up";
  } else {
    assessmentUiState.lastScrollDirection = "idle";
  }
  assessmentUiState.lastScrollY = currentScrollY;

  if (assessmentUiState.autoCollapseTimer) {
    window.clearTimeout(assessmentUiState.autoCollapseTimer);
  }

  assessmentUiState.autoCollapseTimer = window.setTimeout(() => {
    assessmentUiState.autoCollapseTimer = null;
    runAssessmentAutoCollapseCheck();
  }, 160);
}

function ensureAssessmentScrollBinding() {
  if (assessmentUiState.scrollBound || typeof window === "undefined") return;
  assessmentUiState.scrollBound = true;
  assessmentUiState.lastScrollY = window.scrollY || window.pageYOffset || 0;
  window.addEventListener("scroll", queueAssessmentAutoCollapseCheck, { passive: true });
}

function buildAssessmentFigureHtml(phase, question) {
  if (question.id === "qq_diagnostic" || question.id === "boxplot_normality" || question.id === "pvalue_decision" || question.id === "assumption_stress_label" || question.id === "summary_vs_shape" || question.id === "estimate_bias_check" || question.id === "ci_alpha_decision" || question.id === "multiple_once_realistic" || question.id === "skew_center_order") {
    return `<svg class="assessment-figure assessment-figure-wide" id="${phase}-${question.id}-figure" viewBox="0 0 780 240" aria-hidden="true"></svg>`;
  }
  return `<svg class="assessment-figure" id="${phase}-${question.id}-figure" viewBox="0 0 260 140" aria-hidden="true"></svg>`;
}

function assessmentPlotX(x, min = 0, max = 100) {
  return 22 + ((x - min) / (max - min)) * 216;
}

function assessmentPlotY(y, min = 0, max = 100) {
  return 118 - ((y - min) / (max - min)) * 96;
}

function setAssessmentFigure(prefix, markup) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (svg) svg.innerHTML = markup;
}

function assessmentFigureBackdrop() {
  return `
    <rect x="8" y="8" width="244" height="124" rx="12" fill="#f8fbff" />
  `;
}

function drawAssessmentTrendFigure(prefix, slope) {
  const x1 = 8;
  const x2 = 96;
  const intercept = 90;
  const y1 = intercept + slope * x1;
  const y2 = intercept + slope * x2;
  const points = ASSESSMENT_CORR_POINTS
    .map((point) => `<circle cx="${assessmentPlotX(point.x)}" cy="${assessmentPlotY(point.y)}" r="4.2" fill="#56b4e9" opacity="0.82" />`)
    .join("");
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="22" y1="118" x2="238" y2="118" stroke="#bfd0da" />
      <line x1="22" y1="22" x2="22" y2="118" stroke="#bfd0da" />
      ${points}
      <line x1="${assessmentPlotX(x1)}" y1="${assessmentPlotY(y1)}" x2="${assessmentPlotX(x2)}" y2="${assessmentPlotY(y2)}" stroke="#d55e00" stroke-width="3.4" stroke-linecap="round" />
      <text x="238" y="133" text-anchor="end" font-size="10" fill="#527086">scrollingVelocity</text>
      <text x="10" y="20" font-size="10" fill="#527086">attentionSpan</text>
    `,
  );
}

function drawAssessmentBoxplotNormalityFigure(prefix) {
  const svgNode = document.getElementById(`${prefix}-figure`);
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const values = ASSESSMENT_BOXPLOT_LEFT_SKEW_SAMPLE;
  const s = act3BoxStats(values);
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(190, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 24, bottom: 46, left: 52 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const allValues = [s.whiskerLow, s.whiskerHigh, ...s.outliers].filter(Number.isFinite);
  const minV = d3.min(allValues);
  const maxV = d3.max(allValues);
  const span = Math.max(1e-6, maxV - minV);
  const y = d3.scaleLinear().domain([minV - span * 0.08, maxV + span * 0.08]).nice().range([margin.top + innerH, margin.top]);
  const cx = margin.left + innerW / 2;
  const boxW = Math.min(82, innerW * 0.18);

  y.ticks(6).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72, 102, 120, 0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .append("line")
    .attr("x1", cx)
    .attr("x2", cx)
    .attr("y1", y(s.whiskerLow))
    .attr("y2", y(s.whiskerHigh))
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 1.6);

  svg
    .append("line")
    .attr("x1", cx - boxW * 0.34)
    .attr("x2", cx + boxW * 0.34)
    .attr("y1", y(s.whiskerLow))
    .attr("y2", y(s.whiskerLow))
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 1.5);

  svg
    .append("line")
    .attr("x1", cx - boxW * 0.34)
    .attr("x2", cx + boxW * 0.34)
    .attr("y1", y(s.whiskerHigh))
    .attr("y2", y(s.whiskerHigh))
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 1.5);

  svg
    .append("rect")
    .attr("x", cx - boxW / 2)
    .attr("y", y(s.q3))
    .attr("width", boxW)
    .attr("height", Math.max(1, y(s.q1) - y(s.q3)))
    .attr("fill", "rgba(86, 180, 233, 0.32)")
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 1.2);

  svg
    .append("line")
    .attr("x1", cx - boxW / 2)
    .attr("x2", cx + boxW / 2)
    .attr("y1", y(s.median))
    .attr("y2", y(s.median))
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 2.2);

  svg
    .selectAll("circle.outlier")
    .data(s.outliers)
    .enter()
    .append("circle")
    .attr("class", "outlier")
    .attr("cx", () => cx + (Math.random() - 0.5) * boxW * 0.22)
    .attr("cy", (v) => y(v))
    .attr("r", 2.2)
    .attr("fill", "rgba(0, 114, 178, 0.75)");

  const yAxis = d3.axisLeft(y).ticks(6).tickSizeOuter(0);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", cx)
    .attr("y", h - 12)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "11px")
    .style("font-weight", "700")
    .text("sample distribution");
}

function drawAssessmentScaleCovarianceFigure(prefix) {
  const leftPoints = [
    [18, 82], [27, 71], [35, 65], [44, 56], [53, 50], [61, 43], [70, 37], [79, 29], [88, 20],
  ];
  const rightPoints = [
    [14, 88], [24, 73], [37, 66], [49, 54], [60, 46], [72, 33], [84, 24], [92, 16],
  ];
  const renderDots = (pts, color) =>
    pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.7" fill="${color}" opacity="0.88" />`).join("");

  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <rect x="18" y="22" width="92" height="92" rx="10" fill="#ffffff" stroke="#d8e5ee" />
      <rect x="150" y="22" width="92" height="92" rx="10" fill="#ffffff" stroke="#d8e5ee" />
      <line x1="30" y1="102" x2="100" y2="102" stroke="#bfd0da" />
      <line x1="30" y1="34" x2="30" y2="102" stroke="#bfd0da" />
      <line x1="162" y1="102" x2="232" y2="102" stroke="#bfd0da" />
      <line x1="162" y1="34" x2="162" y2="102" stroke="#bfd0da" />
      ${renderDots(leftPoints, "#0072b2")}
      ${renderDots(rightPoints, "#56b4e9")}
      <text x="64" y="118" text-anchor="middle" font-size="10" fill="#527086">Panel A</text>
      <text x="196" y="118" text-anchor="middle" font-size="10" fill="#527086">Panel B</text>
      <text x="64" y="34" text-anchor="middle" font-size="10" fill="#355b72">tighter scale</text>
      <text x="196" y="34" text-anchor="middle" font-size="10" fill="#355b72">wider scale</text>
    `,
  );
}

function drawAssessmentLiftFigure(prefix, controlRate, treatmentRate, targetRate) {
  const yScale = (value) => 118 - ((value - 8) / 8) * 82;
  const controlY = yScale(controlRate);
  const treatmentY = yScale(treatmentRate);
  const targetY = yScale(targetRate);
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="28" y1="118" x2="232" y2="118" stroke="#bfd0da" />
      <rect x="54" y="${controlY}" width="42" height="${118 - controlY}" rx="8" fill="#0072b2" opacity="0.9" />
      <rect x="144" y="${treatmentY}" width="42" height="${118 - treatmentY}" rx="8" fill="#009e73" opacity="0.9" />
      <line x1="136" y1="${targetY}" x2="194" y2="${targetY}" stroke="#a2cdb3" stroke-width="3" stroke-dasharray="5 4" />
      <line x1="194" y1="${controlY}" x2="194" y2="${targetY}" stroke="#a2cdb3" stroke-width="2" stroke-dasharray="4 4" />
      <text x="75" y="132" text-anchor="middle" font-size="10" fill="#527086">control</text>
      <text x="165" y="132" text-anchor="middle" font-size="10" fill="#527086">treatment</text>
      <text x="194" y="18" text-anchor="middle" font-size="10" fill="#6c9b83">benchmark</text>
    `,
  );
}

function drawAssessmentHistogramFigure(prefix, values, marker, { quantile = null } = {}) {
  if (!window.d3) return;
  const d3 = window.d3;
  const bins = d3.bin().thresholds(8)(values);
  const minV = d3.min(values);
  const maxV = d3.max(values);
  const x = d3.scaleLinear().domain([minV - 4, maxV + 4]).range([24, 236]);
  const y = d3.scaleLinear().domain([0, (d3.max(bins, (b) => b.length) || 1) * 1.18]).range([114, 22]);

  const bars = bins
    .map((bin) => {
      const bx = x(bin.x0) + 1;
      const bw = Math.max(3, x(bin.x1) - x(bin.x0) - 2);
      const by = y(bin.length);
      const bh = 114 - by;
      return `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="2.5" fill="#9ecae1" opacity="0.95" />`;
    })
    .join("");

  const guide =
    Number.isFinite(quantile)
      ? `<line x1="${x(quantile)}" x2="${x(quantile)}" y1="24" y2="114" stroke="#9aaebc" stroke-width="1.4" stroke-dasharray="4 4" />`
      : "";

  const markerLine = Number.isFinite(marker)
    ? `<line x1="${x(marker)}" x2="${x(marker)}" y1="20" y2="114" stroke="#d55e00" stroke-width="2.8" />`
    : "";
  const markerDot = Number.isFinite(marker)
    ? `<circle cx="${x(marker)}" cy="20" r="4.2" fill="#d55e00" />`
    : "";

  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="24" y1="114" x2="236" y2="114" stroke="#bfd0da" />
      ${bars}
      ${guide}
      ${markerLine}
      ${markerDot}
    `,
  );
}

function drawAssessmentDualCiFigure(prefix, ci95, ci99) {
  const allValues = [ci95.lo, ci95.hi, ci99.lo, ci99.hi, 0];
  const minV = Math.min(...allValues) - 0.3;
  const maxV = Math.max(...allValues) + 0.3;
  const xScale = (value) => 24 + ((value - minV) / (maxV - minV)) * 212;

  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="24" y1="96" x2="236" y2="96" stroke="#bfd0da" />
      <line x1="${xScale(0)}" y1="26" x2="${xScale(0)}" y2="114" stroke="#6f8797" stroke-dasharray="5 4" />
      <line x1="${xScale(ci99.lo)}" y1="48" x2="${xScale(ci99.hi)}" y2="48" stroke="#7f95a6" stroke-width="4.4" stroke-linecap="round" />
      <line x1="${xScale(ci95.lo)}" y1="80" x2="${xScale(ci95.hi)}" y2="80" stroke="#0072b2" stroke-width="6.2" stroke-linecap="round" />
      <circle cx="${xScale((ci95.lo + ci95.hi) / 2)}" cy="80" r="4.4" fill="#d55e00" />
      <text x="24" y="43" font-size="10" fill="#60798a">99%</text>
      <text x="24" y="75" font-size="10" fill="#60798a">95%</text>
    `,
  );
}

function drawAssessmentCiFigure(prefix, ciLo, ciHi) {
  const xScale = (value) => 22 + ((value + 2) / 6) * 216;
  const clear = ciLo > 0;
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="22" y1="70" x2="238" y2="70" stroke="#bfd0da" />
      <line x1="${xScale(0)}" y1="32" x2="${xScale(0)}" y2="108" stroke="#355b72" stroke-dasharray="5 4" />
      <line x1="${xScale(ciLo)}" y1="70" x2="${xScale(ciHi)}" y2="70" stroke="${clear ? "#009e73" : "#d55e00"}" stroke-width="6" stroke-linecap="round" />
      <circle cx="${xScale((ciLo + ciHi) / 2)}" cy="70" r="5" fill="#0072b2" />
      <text x="${xScale(0)}" y="24" text-anchor="middle" font-size="10" fill="#527086">0</text>
      <text x="22" y="132" font-size="10" fill="#527086">95% interval</text>
    `,
  );
}

function drawAssessmentGapFigure(prefix, observedA, observedB, targetB) {
  const yScale = (value) => 118 - ((value - 10) / 5) * 82;
  const aY = yScale(observedA);
  const bY = yScale(observedB);
  const targetY = yScale(targetB);
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="28" y1="118" x2="232" y2="118" stroke="#bfd0da" />
      <rect x="56" y="${aY}" width="42" height="${118 - aY}" rx="8" fill="#0072b2" opacity="0.92" />
      <rect x="146" y="${bY}" width="42" height="${118 - bY}" rx="8" fill="#009e73" opacity="0.92" />
      <line x1="205" y1="${aY}" x2="205" y2="${targetY}" stroke="#a2cdb3" stroke-width="2.2" stroke-dasharray="4 4" />
      <line x1="199" y1="${aY}" x2="211" y2="${aY}" stroke="#a2cdb3" stroke-width="2.2" />
      <line x1="199" y1="${targetY}" x2="211" y2="${targetY}" stroke="#a2cdb3" stroke-width="2.2" />
      <line x1="195" y1="${aY}" x2="195" y2="${bY}" stroke="#d55e00" stroke-width="2.4" />
      <line x1="189" y1="${aY}" x2="201" y2="${aY}" stroke="#d55e00" stroke-width="2.4" />
      <line x1="189" y1="${bY}" x2="201" y2="${bY}" stroke="#d55e00" stroke-width="2.4" />
      <text x="77" y="132" text-anchor="middle" font-size="10" fill="#527086">A</text>
      <text x="167" y="132" text-anchor="middle" font-size="10" fill="#527086">B</text>
    `,
  );
}

function drawAssessmentTailFigure(prefix, z, mode = "two") {
  const xScale = (value) => 20 + ((value + 4) / 8) * 220;
  const yScale = (density) => 114 - density * 92;
  const curve = [];
  for (let x = -4; x <= 4; x += 0.05) {
    curve.push(`${xScale(x)},${yScale(normalPdf(x) / 0.4)}`);
  }

  const areaPoints = [];
  const addArea = (from, to) => {
    const pts = [`${xScale(from)},114`];
    for (let x = from; x <= to; x += 0.05) {
      pts.push(`${xScale(x)},${yScale(normalPdf(x) / 0.4)}`);
    }
    pts.push(`${xScale(to)},114`);
    areaPoints.push(`<polygon points="${pts.join(" ")}" fill="#e69f00" opacity="0.35" />`);
  };

  const absZ = Math.abs(z);
  if (mode === "two") {
    addArea(-4, -absZ);
    addArea(absZ, 4);
  } else if (mode === "right") {
    addArea(z, 4);
  } else if (mode === "left") {
    addArea(-4, z);
  }

  const markers =
    mode === "two"
      ? `
        <line x1="${xScale(-absZ)}" y1="26" x2="${xScale(-absZ)}" y2="114" stroke="#d55e00" stroke-width="2.2" />
        <line x1="${xScale(absZ)}" y1="26" x2="${xScale(absZ)}" y2="114" stroke="#d55e00" stroke-width="2.2" />
      `
      : mode === "right" || mode === "left"
        ? `<line x1="${xScale(z)}" y1="26" x2="${xScale(z)}" y2="114" stroke="#d55e00" stroke-width="2.2" />`
        : "";

  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="20" y1="114" x2="240" y2="114" stroke="#bfd0da" />
      ${areaPoints.join("")}
      <polyline points="${curve.join(" ")}" fill="none" stroke="#0072b2" stroke-width="2.5" />
      ${markers}
      <text x="228" y="20" text-anchor="end" font-size="10" fill="#527086">${mode ? "tail evidence" : "choose an answer"}</text>
    `,
  );
}

function drawAssessmentRobustCenterFigure(prefix) {
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <line x1="20" y1="114" x2="240" y2="114" stroke="#bfd0da" />
      <path d="M24,108 C48,34 88,30 118,60 C146,88 170,98 208,108" fill="none" stroke="#0072b2" stroke-width="3" />
      <circle cx="228" cy="20" r="6.2" fill="#d55e00" />
      <line x1="84" y1="40" x2="84" y2="114" stroke="#009e73" stroke-width="2.2" />
      <line x1="114" y1="48" x2="114" y2="114" stroke="#56b4e9" stroke-width="2.2" />
      <line x1="154" y1="62" x2="154" y2="114" stroke="#d55e00" stroke-width="2.2" />
      <text x="84" y="32" text-anchor="middle" font-size="10" fill="#009e73">mode</text>
      <text x="114" y="40" text-anchor="middle" font-size="10" fill="#56b4e9">median</text>
      <text x="154" y="54" text-anchor="middle" font-size="10" fill="#d55e00">mean</text>
    `,
  );
}

function drawAssessmentTestChoiceFigure(prefix, choice) {
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <text x="24" y="30" font-size="11" fill="#355b72">same users measured twice</text>
      <text x="24" y="49" font-size="11" fill="#355b72">question is about mean change</text>
      <text x="24" y="68" font-size="11" fill="#355b72">unknown spread, n = 18</text>
      <line x1="62" y1="84" x2="62" y2="110" stroke="#0072b2" stroke-width="3" />
      <line x1="62" y1="97" x2="86" y2="97" stroke="#c1d4e0" stroke-width="1.5" stroke-dasharray="3 3" />
      <line x1="86" y1="88" x2="86" y2="106" stroke="#009e73" stroke-width="3" />
      <line x1="140" y1="84" x2="140" y2="110" stroke="#0072b2" stroke-width="3" />
      <line x1="140" y1="97" x2="164" y2="97" stroke="#c1d4e0" stroke-width="1.5" stroke-dasharray="3 3" />
      <line x1="164" y1="90" x2="164" y2="104" stroke="#009e73" stroke-width="3" />
      <text x="74" y="124" text-anchor="middle" font-size="10" fill="#527086">user 1</text>
      <text x="152" y="124" text-anchor="middle" font-size="10" fill="#527086">user 2</text>
    `,
  );
}

function drawAssessmentIndependentTestChoiceFigure(prefix) {
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      <text x="24" y="28" font-size="11" fill="#355b72">two separate user groups</text>
      <text x="24" y="47" font-size="11" fill="#355b72">question is about mean difference</text>
      <text x="24" y="66" font-size="11" fill="#355b72">unknown, unequal spreads</text>
      <circle cx="62" cy="84" r="4.2" fill="#0072b2" />
      <circle cx="62" cy="97" r="5.7" fill="#0072b2" opacity="0.82" />
      <circle cx="62" cy="111" r="3.5" fill="#0072b2" opacity="0.68" />
      <circle cx="92" cy="76" r="3.6" fill="#0072b2" opacity="0.82" />
      <circle cx="92" cy="101" r="6.2" fill="#0072b2" opacity="0.72" />
      <circle cx="92" cy="118" r="4.1" fill="#0072b2" opacity="0.62" />
      <circle cx="156" cy="71" r="3.9" fill="#56b4e9" />
      <circle cx="156" cy="88" r="5.2" fill="#56b4e9" opacity="0.86" />
      <circle cx="156" cy="109" r="7.1" fill="#56b4e9" opacity="0.62" />
      <circle cx="188" cy="65" r="3.4" fill="#56b4e9" opacity="0.86" />
      <circle cx="188" cy="89" r="6.6" fill="#56b4e9" opacity="0.72" />
      <circle cx="188" cy="116" r="8.1" fill="#56b4e9" opacity="0.56" />
      <text x="77" y="131" text-anchor="middle" font-size="10" fill="#527086">group A</text>
      <text x="172" y="131" text-anchor="middle" font-size="10" fill="#527086">group B</text>
    `,
  );
}

function drawAssessmentQqDiagnosticFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg || !window.d3) return;
  const qq = computeAct5QqMetrics(ASSESSMENT_QQ_RIGHT_SKEW_SAMPLE, "normal");
  drawAct5QqChart(svg, qq, {
    xLabel: "Theoretical fitted Normal quantiles",
    yLabel: "Measured sample quantiles",
  });
}

function drawAssessmentPValueDecisionFigure(prefix, z) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return;
  drawAct7TailChart(svg, {
    pdfFn: (x) => normalPdf(x, 0, 1),
    domain: [-4, 4],
    stat: z,
    mode: "two",
  });
}

function drawAct5AssumptionChartInto(svgNode, values) {
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(180, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  if (!values.length) {
    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "#567384")
      .style("font-size", "11px")
      .text("No stress-test samples yet.");
    return;
  }

  const bins = d3
    .bin()
    .domain([0, 1])
    .thresholds(d3.range(0, 1.0001, 0.05))(values);

  const x = d3.scaleLinear().domain([0, 1]).range([margin.left, margin.left + innerW]);
  const y = d3
    .scaleLinear()
    .domain([0, (d3.max(bins, (b) => b.length) || 1) * 1.15])
    .range([margin.top + innerH, margin.top]);

  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("rect.bin")
    .data(bins)
    .enter()
    .append("rect")
    .attr("class", "bin")
    .attr("x", (d) => x(d.x0) + 0.5)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr("height", (d) => Math.max(0, y(0) - y(d.length)))
    .attr("fill", (d) => (d.x1 <= 0.05 ? "rgba(213,94,0,0.58)" : "rgba(0,114,178,0.34)"))
    .attr("stroke", (d) => (d.x1 <= 0.05 ? "#d55e00" : "rgba(0,114,178,0.58)"))
    .attr("stroke-width", 0.7);

  svg
    .append("line")
    .attr("x1", x(0.05))
    .attr("x2", x(0.05))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 4");

  svg
    .append("text")
    .attr("x", x(0.05) + 5)
    .attr("y", margin.top + 11)
    .attr("fill", "#d55e00")
    .style("font-size", "9px")
    .style("font-weight", "700")
    .text("false-alarm threshold");

  const xAxis = d3.axisBottom(x).ticks(6).tickFormat((v) => fmtNum(v, 2)).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickFormat((v) => fmtNum(v, 0)).tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");
}

function drawAssessmentAssumptionStressFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return;
  drawAct5AssumptionChartInto(svg, ASSESSMENT_ACT5_STRESS_SAMPLE);
}

function drawAct3ScatterInto(svgNode, points, {
  xDomain = [0, 100],
  yDomain = [0, 100],
  xLabel = "x",
  yLabel = "y",
  line = null,
  lineColor = "#d55e00",
  lineDash = "5 4",
} = {}) {
  if (!svgNode || !window.d3 || !points.length) return;
  const d3 = window.d3;
  const w = Math.max(360, Math.floor(svgNode.clientWidth));
  const h = Math.max(260, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 44, left: 46 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain(xDomain).range([margin.left, margin.left + innerW]);
  const y = d3.scaleLinear().domain(yDomain).range([margin.top + innerH, margin.top]);

  const gridColor = "rgba(72, 102, 120, 0.08)";
  x.ticks(10).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", gridColor)
      .attr("stroke-width", 0.8);
  });
  y.ticks(7).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", gridColor)
      .attr("stroke-width", 0.8);
  });

  if (line) {
    svg
      .append("line")
      .attr("x1", x(line.x1))
      .attr("x2", x(line.x2))
      .attr("y1", y(line.y1))
      .attr("y2", y(line.y2))
      .attr("stroke", lineColor)
      .attr("stroke-width", 2.2)
      .attr("stroke-dasharray", lineDash);
  }

  svg
    .append("g")
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 3.2)
    .attr("fill", "rgba(0, 114, 178, 0.84)");

  const xAxis = d3.axisBottom(x).ticks(10).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(7).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 9)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "11px")
    .text(xLabel);

  svg
    .append("text")
    .attr("transform", `translate(14, ${margin.top + innerH / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "11px")
    .text(yLabel);
}

function drawAssessmentSummaryVsShapeFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return;
  const { slope, intercept } = ASSESSMENT_SUMMARY_SHAPE_STATS;
  drawAct3ScatterInto(svg, ASSESSMENT_SUMMARY_SHAPE_POINTS, {
    xDomain: [0, 100],
    yDomain: [0, 100],
    xLabel: "x",
    yLabel: "y",
    line: { x1: 0, y1: intercept, x2: 100, y2: intercept + slope * 100 },
    lineColor: "#d55e00",
    lineDash: "5 4",
  });
}

function drawAssessmentCiAlphaDecisionFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return;
  const question = getAssessmentQuestionDefinition("ci_alpha_decision");
  if (!question) return;
  drawAct4CiChartInto(svg, {
    liftPp: question.observedLiftPp,
    ciLo: question.ciLo,
    ciHi: question.ciHi,
  });
}

function drawAct6SlopeDistInto(svgNode, values, { trueSlope, n, noise, summaryTarget = null } = {}) {
  if (!svgNode || !window.d3) return null;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  if (!values.length) {
    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "#567384")
      .style("font-size", "11px")
      .text("Run simulation to see estimator spread.");
    return null;
  }

  const sorted = [...values].sort((a, b) => a - b);
  const loQ = empiricalQuantile(sorted, 0.01);
  const hiQ = empiricalQuantile(sorted, 0.99);
  const pad = Math.max(0.08, (hiQ - loQ) * 0.16);
  const xLo = loQ - pad;
  const xHi = hiQ + pad;
  const binCount = clamp(Math.round(Math.sqrt(values.length)), 10, 48);
  const bins = d3.bin().domain([xLo, xHi]).thresholds(binCount)(values);
  const avg = mean(values);
  const spread = sd(values);

  const x = d3.scaleLinear().domain([xLo, xHi]).range([margin.left, margin.left + innerW]);
  const y = d3
    .scaleLinear()
    .domain([0, (d3.max(bins, (b) => b.length) || 1) * 1.18])
    .range([margin.top + innerH, margin.top]);

  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("rect.act6-bin")
    .data(bins)
    .enter()
    .append("rect")
    .attr("class", "act6-bin")
    .attr("x", (d) => x(d.x0) + 0.5)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr("height", (d) => Math.max(0, y(0) - y(d.length)))
    .attr("fill", "rgba(0,114,178,0.34)")
    .attr("stroke", "rgba(0,114,178,0.58)")
    .attr("stroke-width", 0.7);

  svg
    .append("line")
    .attr("x1", x(trueSlope))
    .attr("x2", x(trueSlope))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 2);

  svg
    .append("line")
    .attr("x1", x(avg))
    .attr("x2", x(avg))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4 4");

  const legendX = margin.left + 8;
  const legendY = margin.top + 8;
  svg
    .append("line")
    .attr("x1", legendX)
    .attr("x2", legendX + 18)
    .attr("y1", legendY)
    .attr("y2", legendY)
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 2);
  svg
    .append("text")
    .attr("x", legendX + 24)
    .attr("y", legendY + 3)
    .attr("fill", "#355b72")
    .style("font-size", "9px")
    .text("True slope");

  svg
    .append("line")
    .attr("x1", legendX)
    .attr("x2", legendX + 18)
    .attr("y1", legendY + 12)
    .attr("y2", legendY + 12)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 1.5)
    .attr("stroke-dasharray", "4 4");
  svg
    .append("text")
    .attr("x", legendX + 24)
    .attr("y", legendY + 15)
    .attr("fill", "#355b72")
    .style("font-size", "9px")
    .text("Average estimate");

  const xAxis = d3.axisBottom(x).ticks(7).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickFormat((v) => fmtNum(v, 0)).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  if (summaryTarget) {
    summaryTarget.textContent =
      `Across ${fmtInt(values.length)} repeated samples, slope estimates center near ${fmtNum(avg, 3)} ` +
      `with spread ${fmtNum(spread, 3)} (simulated with n=${fmtInt(n)}, noise=${fmtInt(noise)}). ` +
      `Orange = true effect, blue dashed = average estimate.`;
  }

  return { avg, spread };
}

function drawAssessmentEstimateBiasFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return null;
  const sample = ASSESSMENT_SLOPE_DIST_SAMPLE;
  return drawAct6SlopeDistInto(svg, sample.slopes, {
    trueSlope: sample.trueSlope,
    n: sample.n,
    noise: sample.noise,
  });
}

function drawAssessmentSkewCenterOrderFigure(prefix) {
  const svg = document.getElementById(`${prefix}-figure`);
  if (!svg) return;
  const rightMax = clamp(empiricalQuantile(ASSESSMENT_ACT2_RIGHT_SKEW_VALUES, 0.997) * 1.1, 1400, 3600);
  const rightStep = Math.max(30, Math.round(rightMax / 28));
  drawSingleSkewHistogram({
    svgNode: svg,
    values: ASSESSMENT_ACT2_RIGHT_SKEW_VALUES,
    xDomain: [0, rightMax],
    thresholdStep: rightStep,
    axisLabel: "money_spent ($)",
    direction: "right",
    markerIds: {},
    isCurrency: true,
    showMarkers: false,
  });
}

function drawAssessmentSkewTypeFigure(prefix) {
  drawAssessmentHistogramFigure(prefix, ASSESSMENT_SKEW_SAMPLE, empiricalQuantile(ASSESSMENT_SKEW_SAMPLE, 0.5));
}

function drawAssessmentMultipleFigure(prefix, m, alpha) {
  const expected = m * alpha;
  const orangeCount = Math.max(0, Math.min(m, Math.round(expected)));
  const circles = [];
  for (let i = 0; i < m; i += 1) {
    const col = i % 10;
    const row = Math.floor(i / 10);
    if (row > 7) break;
    const cx = 26 + col * 21;
    const cy = 30 + row * 19;
    circles.push(`<circle cx="${cx}" cy="${cy}" r="5.2" fill="${i < orangeCount ? "#e69f00" : "#c8d8e4"}" opacity="${i < orangeCount ? "0.9" : "0.8"}" />`);
  }
  setAssessmentFigure(
    prefix,
    `
      ${assessmentFigureBackdrop()}
      ${circles.join("")}
      <text x="24" y="128" font-size="10" fill="#527086">orange = expected false alarms</text>
    `,
  );
}

function drawAssessmentMultipleObservedFigure(prefix, m, orangeCount) {
  const svgNode = document.getElementById(`${prefix}-figure`);
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(180, Math.floor(svgNode.clientHeight));
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const cols = 11;
  const rows = Math.ceil(m / cols);
  const margin = { top: 22, right: 28, bottom: 42, left: 28 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const dx = cols > 1 ? innerW / (cols - 1) : innerW;
  const dy = rows > 1 ? innerH / (rows - 1) : innerH;
  const radius = Math.max(6, Math.min(9, Math.min(dx, dy) * 0.22));

  const data = Array.from({ length: m }, (_, i) => ({
    idx: i,
    col: i % cols,
    row: Math.floor(i / cols),
    flagged: i < orangeCount,
  }));

  svg
    .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", w - 20)
    .attr("height", h - 20)
    .attr("rx", 14)
    .attr("fill", "#f8fbff");

  svg
    .selectAll("circle.assessment-multi-dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "assessment-multi-dot")
    .attr("cx", (d) => margin.left + d.col * dx)
    .attr("cy", (d) => margin.top + d.row * dy)
    .attr("r", radius)
    .attr("fill", (d) => (d.flagged ? "#e69f00" : "#c8d8e4"))
    .attr("opacity", (d) => (d.flagged ? 0.94 : 0.86));

  svg
    .append("text")
    .attr("x", margin.left)
    .attr("y", h - 16)
    .attr("fill", "#527086")
    .style("font-size", "10px")
    .text("orange = significant in this one family of tests");
}

function buildAssessmentQuestionHtml(phase, question, index) {
  const prefix = `${phase}-${question.id}`;
  let widget = "";
  const figure = buildAssessmentFigureHtml(phase, question);

  switch (question.id) {
    case "boxplot_normality":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="boxplot interpretation options">
          <button type="button" class="assessment-option" data-value="normal_ok">This boxplot is broadly consistent with a roughly normal distribution.</button>
          <button type="button" class="assessment-option" data-value="left_skew">This boxplot suggests left-skew, so a normal model would be questionable.</button>
          <button type="button" class="assessment-option" data-value="right_skew">This boxplot suggests right-skew, so a normal model would be questionable.</button>
          <button type="button" class="assessment-option" data-value="bimodal">This boxplot is evidence that the distribution is bimodal.</button>
        </div>
      `;
      break;
    case "pvalue_decision":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="hypothesis test decision options">
          <button type="button" class="assessment-option" data-value="reject">Yes. A two-sided p-value of 0.10 is small enough to reject at α = 0.05.</button>
          <button type="button" class="assessment-option" data-value="fail">No. A two-sided p-value of 0.10 is too large to reject at α = 0.05.</button>
        </div>
      `;
      break;
    case "assumption_stress_label":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="assumption stress labels">
          <button type="button" class="assessment-option" data-value="fit_ok">Model seems to fit well.</button>
          <button type="button" class="assessment-option" data-value="question_fit">Model fit should be questioned.</button>
          <button type="button" class="assessment-option" data-value="clear_misfit">Clear evidence of model misfit; a false-positive rate like this should not appear under a well-calibrated test.</button>
        </div>
      `;
      break;
    case "summary_vs_shape":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="summary versus shape options">
          <button type="button" class="assessment-option" data-value="yes_fixed">Yes. Once mean, variance, correlation, and slope are known, the points must lie roughly along that straight line.</button>
          <button type="button" class="assessment-option" data-value="no_shape">No. Those summaries do not determine the geometry of the point cloud; very different shapes can share them.</button>
          <button type="button" class="assessment-option" data-value="yes_corr">Yes. Correlation and fitted slope are enough to certify an approximately linear pattern.</button>
          <button type="button" class="assessment-option" data-value="no_meaning">No. A fitted line has no meaning unless both sample means are exactly zero.</button>
        </div>
      `;
      break;
    case "ci_alpha_decision":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="confidence interval interpretation options">
          <button type="button" class="assessment-option" data-value="effect_evident">The effect is modest, but it is clearly supported at the 0.05 level.</button>
          <button type="button" class="assessment-option" data-value="no_evidence">This is not evidence of an effect at the two-sided 0.05 level, because 0 pp is still inside the 95% interval.</button>
          <button type="button" class="assessment-option" data-value="negative_effect">Because the interval touches 0 pp, the results support a small negative effect.</button>
        </div>
      `;
      break;
    case "z_target":
      widget = `
        ${figure}
        <div class="act4-control">
          <label for="${prefix}-gap"><span>Observed Gap (pp)</span><strong id="${prefix}-gap-val">${fmtNum(question.defaults.gap, 1)}</strong></label>
          <input id="${prefix}-gap" type="range" min="0.4" max="4" step="0.1" value="${question.defaults.gap}" />
        </div>
        <div class="act4-control">
          <label for="${prefix}-se"><span>Standard Error (pp)</span><strong id="${prefix}-se-val">${fmtNum(question.defaults.se, 2)}</strong></label>
          <input id="${prefix}-se" type="range" min="0.2" max="2.0" step="0.05" value="${question.defaults.se}" />
        </div>
      `;
      break;
    case "estimate_bias_check":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="average estimate mismatch options">
          <button type="button" class="assessment-option" data-value="not_concerning">No. A small gap between the average estimate and the true slope can arise from finite-sample and Monte Carlo variation alone.</button>
          <button type="button" class="assessment-option" data-value="clear_misfit">Yes. Any visible gap between the average estimate and the true slope is evidence that the model is misspecified.</button>
          <button type="button" class="assessment-option" data-value="always_unbiased">No. In a sound model, the average estimate must equal the true slope exactly in every finite simulation.</button>
        </div>
      `;
      break;
    case "test_selection":
      widget = `
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="test selection options">
          <button type="button" class="assessment-option" data-value="one_t">One-sample t-test</button>
          <button type="button" class="assessment-option" data-value="paired_t">Paired t-test</button>
          <button type="button" class="assessment-option" data-value="two_t">Two-sample t-test</button>
          <button type="button" class="assessment-option" data-value="z">z-test</button>
        </div>
      `;
      break;
    case "qq_diagnostic":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="QQ plot interpretation options">
          <button type="button" class="assessment-option" data-value="normal_ok">The QQ plot shows no serious issue with normality.</button>
          <button type="button" class="assessment-option" data-value="right_heavy">The QQ plot suggests a heavier right tail than the normal model.</button>
          <button type="button" class="assessment-option" data-value="left_heavy">The QQ plot suggests a heavier left tail than the normal model.</button>
          <button type="button" class="assessment-option" data-value="bimodal">The QQ plot is evidence of a bimodal distribution.</button>
        </div>
      `;
      break;
    case "multiple_once_realistic":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="multiple testing realism options">
          <button type="button" class="assessment-option" data-value="yes_realistic">Yes. Six positives out of 55 can still occur by chance when each test is run once at α = 0.05.</button>
          <button type="button" class="assessment-option" data-value="no_impossible">No. Six positives out of 55 is already too many to be plausible under α = 0.05.</button>
          <button type="button" class="assessment-option" data-value="means_effect">No. Six positives already shows that at least some of the 55 dots must contain real effects.</button>
        </div>
      `;
      break;
    case "skew_center_order":
      widget = `
        ${figure}
        <div class="assessment-option-list" id="${prefix}-options" role="group" aria-label="mode median mean order options">
          <button type="button" class="assessment-option" data-value="mode_median_mean">mode, then median, then mean</button>
          <button type="button" class="assessment-option" data-value="mode_mean_median">mode, then mean, then median</button>
          <button type="button" class="assessment-option" data-value="median_mode_mean">median, then mode, then mean</button>
          <button type="button" class="assessment-option" data-value="median_mean_mode">median, then mean, then mode</button>
          <button type="button" class="assessment-option" data-value="mean_mode_median">mean, then mode, then median</button>
          <button type="button" class="assessment-option" data-value="mean_median_mode">mean, then median, then mode</button>
        </div>
      `;
      break;
    default:
      widget = "";
  }

  return `
    <article class="assessment-card" id="${prefix}-card" data-phase="${phase}" data-question-id="${question.id}">
      <button type="button" class="assessment-collapse-toggle" id="${prefix}-toggle" aria-expanded="true" aria-label="Collapse question">&#8722;</button>
      <div class="assessment-card-head">
        <p class="story-tag">Question ${index + 1} of ${ASSESSMENT_QUESTIONS.length}</p>
        <h3>${question.title}</h3>
        <p class="assessment-collapsed-note" id="${prefix}-collapsed-note"></p>
      </div>
      <div class="assessment-card-body">
        <p class="assessment-goal">${question.prompt}</p>
        <div class="assessment-widget">${widget}</div>
        <div class="assessment-readout" id="${prefix}-readout"></div>
        <p class="assessment-status" id="${prefix}-status">Choose your answer, then submit the assessment when you are ready.</p>
      </div>
    </article>
  `;
}

function getAssessmentQuestionFeedback(questionId, values) {
  const question = getAssessmentQuestionDefinition(questionId);
  switch (questionId) {
    case "boxplot_normality":
      return {
        correct: values.choice === "left_skew",
        message:
          values.choice === ""
            ? "No answer was selected. The longer lower tail and off-centre median suggest left-skew, so a normal model would be doubtful."
            : values.choice === "left_skew"
            ? "Correct. The longer lower tail points to left-skew, which makes a normal description questionable."
            : "Not quite. The boxplot is asymmetric in the lower tail, which suggests left-skew rather than a roughly normal shape.",
      };
    case "pvalue_decision":
      return {
        correct: values.choice === "fail",
        message:
          values.choice === ""
            ? "No answer was selected. For a two-sided test, p = 0.10 is larger than alpha = 0.05, so the null would not be rejected."
            : values.choice === "fail"
            ? "Correct. Because p = 0.10 is larger than 0.05, a two-sided 5% test would fail to reject the null."
            : "Not quite. A p-value has to be at most alpha to reject. Here 0.10 is larger than 0.05, so the null is not rejected.",
      };
    case "assumption_stress_label":
      return {
        correct: values.choice === "question_fit",
        message:
          values.choice === ""
            ? "No answer was selected. At hidden volatility 0.05, the false-positive rate is well above the nominal 5%, so the model fit should be questioned."
            : values.choice === "question_fit"
            ? "Correct. The orange mass below 0.05 is too large for a well-calibrated test, so the model fit should be questioned."
            : values.choice === "fit_ok"
            ? "Not quite. If the model fit were fine, the orange false-alarm region would stay near the nominal 5%, not around the mid-teens."
            : "Too strong. The plot is clearly concerning, but it is not so extreme that such a result would be essentially impossible under a calibrated procedure.",
      };
    case "summary_vs_shape":
      return {
        correct: values.choice === "no_shape",
        message:
          values.choice === ""
            ? "No answer was selected. Means, variances, correlation, and a fitted slope do not uniquely determine the shape of the point cloud."
            : values.choice === "no_shape"
            ? "Correct. Those summaries constrain some aspects of the cloud, but they do not force the data to lie approximately on a straight line."
            : "Not quite. Different datasets can share mean, variance, correlation, and even the same fitted line while having very different visible shapes.",
      };
    case "ci_alpha_decision":
      return {
        correct: values.choice === "no_evidence",
        message:
          values.choice === ""
            ? "No answer was selected. If the 95% interval still includes 0 pp, a two-sided 0.05 test does not give evidence against the null."
            : values.choice === "no_evidence"
            ? "Correct. Because 0 pp is still inside the 95% interval, the corresponding two-sided 0.05 test would fail to reject the null."
            : values.choice === "effect_evident"
            ? "Not quite. The estimated lift is positive, but the interval still includes 0 pp, so the effect is not established at the 0.05 level."
            : "Not quite. An interval that crosses 0 pp does not point to a confirmed negative effect; it says no-effect is still compatible with the data.",
      };
    case "z_target": {
      const z = values.gap / Math.max(0.05, values.se);
      const correct = z > question.lowerZ && z < question.upperZ;
      return {
        correct,
        message: correct
          ? "Correct. The statistic falls in the range where a two-sided 5% test rejects, but a 1% test would not."
          : z <= question.lowerZ
            ? "The statistic is still too small for two-sided significance at the 5% level."
            : "The statistic is too large; it would also reject at the 1% level.",
      };
    }
    case "estimate_bias_check":
      return {
        correct: values.choice === "not_concerning",
        message:
          values.choice === ""
            ? "No answer was selected. A small average gap from the true slope can happen in a finite simulation and is not, by itself, evidence of poor fit."
            : values.choice === "not_concerning"
            ? "Correct. In repeated sampling, the average estimate can sit a bit away from the true slope just by Monte Carlo noise and finite-sample variation."
            : values.choice === "clear_misfit"
            ? "Not quite. A visible but small gap alone is not enough to diagnose misspecification; you would need a more systematic departure than that."
            : "Not quite. Even a well-behaved estimator does not have to average to the true value exactly in every finite simulation run.",
      };
    case "test_selection":
      return {
        correct: values.choice === "paired_t",
        message:
          values.choice === ""
            ? "No answer was selected. Because the same users are measured twice and the variance is unknown, the right analysis is a paired t-test."
            : values.choice === "paired_t"
            ? "Correct. The design is paired, so the test should be based on within-user differences, using a t distribution because the population variance is unknown."
            : values.choice === "two_t"
            ? "Not quite. A two-sample t-test is for independent groups, but here the same users are measured twice."
            : "Not quite. This is not a one-sample setup, and there is no known population variance for a z-test.",
      };
    case "qq_diagnostic":
      return {
        correct: values.choice === "right_heavy",
        message:
          values.choice === ""
            ? "No answer was selected. The upper tail bends above the line, which is a classic sign that the sample's right tail is heavier than the normal reference."
            : values.choice === "right_heavy"
            ? "Correct. The rightmost sample quantiles are larger than the normal model would predict, so the right tail is too heavy for a normal fit."
            : "Not quite. The main signal here is the upward bend in the upper tail, which points to a heavier right tail than normal.",
      };
    case "multiple_once_realistic":
      return {
        correct: values.choice === "yes_realistic",
        message:
          values.choice === ""
            ? "No answer was selected. Even though 6 out of 55 is above the expected count, it is still a realistic outcome from chance alone in one family of tests."
            : values.choice === "yes_realistic"
            ? "Correct. The expected number is lower, but six positives out of 55 is still a realistic single-family outcome under repeated null testing."
            : values.choice === "no_impossible"
            ? "Not quite. It is more than the nominal expectation, but it is not so extreme that chance alone becomes unrealistic."
            : "Not quite. Several positives in one family do not, by themselves, prove true effects when many null tests are run.",
      };
    case "skew_center_order":
      return {
        correct: values.choice === "mode_median_mean",
        message:
          values.choice === ""
            ? "No answer was selected. In a right-skewed distribution, the usual order is mode, then median, then mean."
            : values.choice === "mode_median_mean"
            ? "Correct. The peak stays leftmost, the median sits in the middle, and the long right tail pulls the mean furthest right."
            : "Not quite. For a right-skewed distribution like money_spent, the standard ordering is mode < median < mean.",
      };
    default:
      return { correct: false, message: "No evaluation available." };
  }
}

function renderMathIfAvailable(root) {
  if (!root || !window.renderMathInElement) return;
  window.renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\(", right: "\\)", display: false },
    ],
    throwOnError: false,
  });
}

function getAssessmentCorrectValue(questionId) {
  switch (questionId) {
    case "boxplot_normality":
      return "left_skew";
    case "pvalue_decision":
      return "fail";
    case "assumption_stress_label":
      return "question_fit";
    case "summary_vs_shape":
      return "no_shape";
    case "ci_alpha_decision":
      return "no_evidence";
    case "estimate_bias_check":
      return "not_concerning";
    case "test_selection":
      return "paired_t";
    case "qq_diagnostic":
      return "right_heavy";
    case "multiple_once_realistic":
      return "yes_realistic";
    case "skew_center_order":
      return "mode_median_mean";
    default:
      return null;
  }
}

function syncAssessmentOptionButtons(phase, questionId, choice) {
  const buttons = document.querySelectorAll(`#${phase}-${questionId}-options .assessment-option`);
  const revealCorrect = phase === "post" && assessmentState.submitted.post;
  const correctValue = getAssessmentCorrectValue(questionId);
  const choiceIsCorrect = Boolean(correctValue && choice === correctValue);
  const highlightedValue = revealCorrect && correctValue && !choiceIsCorrect ? correctValue : choice;

  buttons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.value === highlightedValue);
    button.classList.toggle("revealed-correct", Boolean(revealCorrect && correctValue && button.dataset.value === correctValue));
    button.classList.toggle(
      "revealed-correct-border",
      Boolean(revealCorrect && correctValue && !choiceIsCorrect && button.dataset.value === correctValue),
    );
  });

  return buttons;
}

function updateAssessmentQuestion(phase, questionId) {
  const values = assessmentState[phase][questionId];
  const prefix = `${phase}-${questionId}`;
  const readout = document.getElementById(`${prefix}-readout`);
  if (!values || !readout) return;
  const question = getAssessmentQuestionDefinition(questionId);

  switch (questionId) {
    case "boxplot_normality": {
      drawAssessmentBoxplotNormalityFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice ? "Answer selected." : "Use the box, whiskers, and median to judge whether a normal model is plausible.";
      break;
    }
    case "pvalue_decision": {
      drawAssessmentPValueDecisionFigure(prefix, question.observedZ);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice
          ? "Answer selected."
          : `The figure fixes a two-sided p-value of <strong>${fmtNum(0.10, 2)}</strong> against H0.`;
      break;
    }
    case "assumption_stress_label": {
      drawAssessmentAssumptionStressFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice
          ? "Answer selected."
          : "Judge the orange false-alarm region against the nominal 5% benchmark.";
      break;
    }
    case "summary_vs_shape": {
      const stats = ASSESSMENT_SUMMARY_SHAPE_STATS;
      drawAssessmentSummaryVsShapeFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        `Summaries: <strong>x̄ = ${fmtNum(stats.meanX, 1)}</strong>, <strong>ȳ = ${fmtNum(stats.meanY, 1)}</strong>, ` +
        `<strong>s²x = ${fmtNum(stats.varX, 1)}</strong>, <strong>s²y = ${fmtNum(stats.varY, 1)}</strong>, ` +
        `<strong>r = ${fmtNum(stats.corr, 3)}</strong>, <strong>slope = ${fmtNum(stats.slope, 3)}</strong>.`;
      break;
    }
    case "ci_alpha_decision": {
      drawAssessmentCiAlphaDecisionFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        `Current 95% CI: <strong>[${question.ciLo > 0 ? "+" : ""}${fmtNum(question.ciLo, 2)} pp, ${question.ciHi > 0 ? "+" : ""}${fmtNum(question.ciHi, 2)} pp]</strong>.`;
      break;
    }
    case "z_target": {
      const gapVal = document.getElementById(`${prefix}-gap-val`);
      const seVal = document.getElementById(`${prefix}-se-val`);
      if (gapVal) gapVal.textContent = fmtNum(values.gap, 1);
      if (seVal) seVal.textContent = fmtNum(values.se, 2);
      const z = values.gap / Math.max(0.05, values.se);
      drawAssessmentTailFigure(prefix, z, "two");
      readout.innerHTML =
        `Observed gap = <strong>${fmtNum(values.gap, 1)} pp</strong>, SE = <strong>${fmtNum(values.se, 2)} pp</strong>. Judge significance from the tail area, not from a reported p-value.`;
      break;
    }
    case "estimate_bias_check": {
      const summary = drawAssessmentEstimateBiasFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML = summary
        ? `True slope: <strong>${fmtNum(ASSESSMENT_SLOPE_DIST_SAMPLE.trueSlope, 3)}</strong>. Average estimate: <strong>${fmtNum(summary.avg, 3)}</strong>.`
        : "Inspect the distance between the orange true slope and the blue dashed average estimate.";
      break;
    }
    case "test_selection": {
      const labels = {
        one_t: "one-sample t-test",
        paired_t: "paired t-test",
        two_t: "Two-sample t-test",
        z: "z-test",
      };
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice ? `Selected test: <strong>${labels[values.choice]}</strong>.` : "Choose the test that matches a paired design with unknown variance.";
      break;
    }
    case "qq_diagnostic": {
      drawAssessmentQqDiagnosticFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice ? "Answer selected." : "Choose the best interpretation of the upper-tail deviation from the diagonal.";
      break;
    }
    case "multiple_once_realistic": {
      drawAssessmentMultipleObservedFigure(prefix, question.m, question.observedFalse);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        `${fmtInt(question.observedFalse)} of ${fmtInt(question.m)} tests turned orange in one run at <strong>alpha = ${fmtNum(question.alpha, 2)}</strong>.`;
      break;
    }
    case "skew_center_order": {
      drawAssessmentSkewCenterOrderFigure(prefix);
      syncAssessmentOptionButtons(phase, questionId, values.choice);
      readout.innerHTML =
        values.choice ? "Answer selected." : "Read the right tail carefully and decide which summary is pulled furthest to the right.";
      break;
    }
    default:
      break;
  }

  syncAssessmentCardUi(phase, questionId);
}

function updateAssessmentSummary(phase) {
  const summaryNode = phase === "pre" ? els.preAssessmentSummary : els.postAssessmentSummary;
  if (!summaryNode) return;
  const score = assessmentState.scores[phase];
  const saveStatus = assessmentState.saveStatus[phase];
  const submitted = assessmentState.submitted[phase];

  if (!submitted) {
    if (saveStatus === "saving") {
      summaryNode.textContent = "Submitting your responses...";
      return;
    }
    if (saveStatus === "error") {
      summaryNode.textContent = "Could not save your responses. Please try submitting again.";
      return;
    }
    summaryNode.textContent = "You can revise answers until you submit.";
    return;
  }

  if (phase === "pre") {
    summaryNode.textContent = assessmentState.restoredFromSavedRecord.pre
      ? "A saved pre-assessment was found, so the story is already unlocked."
      : "Responses recorded. The answers stay hidden for now, and the story continues below.";
    return;
  }

  let text = `Post-assessment score: ${score}/${ASSESSMENT_QUESTIONS.length}.`;
  if (assessmentState.scores.pre !== null) {
    const delta = score - assessmentState.scores.pre;
    if (delta > 0) {
      text += ` That is ${delta} more correct than the pre-assessment.`;
    } else if (delta < 0) {
      text += ` That is ${Math.abs(delta)} fewer correct than the pre-assessment.`;
    } else {
      text += " Same score as the pre-assessment.";
    }
  }
  text += " Answers and explanations are now shown below. Thanks for working through the blog.";
  summaryNode.textContent = text;
}

function updatePreUnlockState() {
  const unlocked = assessmentState.submitted.pre;
  if (els.preAssessmentPanel) {
    els.preAssessmentPanel.hidden = unlocked;
  }
  if (els.guidedCourseProgress) {
    els.guidedCourseProgress.hidden = !unlocked;
  }
  const guidedSections = getGuidedSections();
  guidedSections.forEach((section) => {
    section.hidden = !unlocked;
  });
  if (unlocked) {
    ensureGuidedStageChrome();
    renderAssessmentPhase("post");
    const savedIndex = Math.min(getStoredAssessmentStageIndex(), Math.max(0, guidedSections.length - 1));
    setActiveGuidedStage(savedIndex, { scroll: false });
  } else {
    setStoredAssessmentStageIndex(0);
    updateGuidedCourseProgress(null);
  }
}

function setAssessmentPhaseDisabled(phase, disabled) {
  const mount = phase === "pre" ? els.preAssessmentGrid : els.postAssessmentGrid;
  if (mount) {
    mount.querySelectorAll("input, select, button, textarea").forEach((node) => {
      if (node.classList.contains("assessment-collapse-toggle")) return;
      node.disabled = disabled;
    });
  }
  const submitBtn = phase === "pre" ? els.preAssessmentCheckBtn : els.postAssessmentCheckBtn;
  if (submitBtn) {
    submitBtn.disabled = disabled;
    submitBtn.textContent = disabled ? "Assessment Submitted" : "Submit Assessment";
  }
}

function bindAssessmentControl(phase, questionId, field, parser = (value) => value) {
  const input = document.getElementById(`${phase}-${questionId}-${field}`);
  if (!input) return;
  const eventName = input.tagName === "SELECT" ? "change" : "input";
  input.addEventListener(eventName, () => {
    assessmentState[phase][questionId][field] = parser(input.value);
    updateAssessmentQuestion(phase, questionId);
  });
}

function bindAssessmentOptionButtons(phase, questionId) {
  document.querySelectorAll(`#${phase}-${questionId}-options .assessment-option`).forEach((button) => {
    button.addEventListener("click", () => {
      assessmentState[phase][questionId].choice = button.dataset.value || "";
      const ui = getAssessmentCardUi(phase, questionId);
      ui.collapsed = false;
      ui.pinnedOpen = false;
      updateAssessmentQuestion(phase, questionId);
    });
  });
}

function bindAssessmentCollapseToggle(phase, questionId) {
  const toggle = document.getElementById(`${phase}-${questionId}-toggle`);
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const ui = getAssessmentCardUi(phase, questionId);
    if (ui.collapsed) {
      setAssessmentCardCollapsed(phase, questionId, false, { pinnedOpen: true });
    } else {
      setAssessmentCardCollapsed(phase, questionId, true, { pinnedOpen: false });
    }
  });
}

function renderAssessmentPhase(phase) {
  const mount = phase === "pre" ? els.preAssessmentGrid : els.postAssessmentGrid;
  if (!mount) return;
  if (!assessmentState[phase] || !Object.keys(assessmentState[phase]).length) {
    assessmentState[phase] = cloneAssessmentDefaults();
  }
  if (!assessmentUiState[phase] || !Object.keys(assessmentUiState[phase]).length) {
    assessmentUiState[phase] = cloneAssessmentUiDefaults();
  }

  mount.innerHTML = ASSESSMENT_QUESTIONS.map((question, index) => buildAssessmentQuestionHtml(phase, question, index)).join("");
  renderMathIfAvailable(mount);

  ASSESSMENT_QUESTIONS.forEach((question) => {
    bindAssessmentCollapseToggle(phase, question.id);
    switch (question.id) {
      case "boxplot_normality":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "pvalue_decision":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "assumption_stress_label":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "summary_vs_shape":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "ci_alpha_decision":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "z_target":
        bindAssessmentControl(phase, question.id, "gap", (value) => Number(value));
        bindAssessmentControl(phase, question.id, "se", (value) => Number(value));
        break;
      case "estimate_bias_check":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "test_selection":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "qq_diagnostic":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "multiple_once_realistic":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      case "skew_center_order":
        bindAssessmentOptionButtons(phase, question.id);
        break;
      default:
        break;
    }
    updateAssessmentQuestion(phase, question.id);
  });

  setAssessmentPhaseDisabled(phase, assessmentState.submitted[phase]);
}

async function submitAssessmentScore(phase, correctness = null) {
  if (!assessmentState.userId || typeof fetch !== "function") {
    return { ok: false, status: "error" };
  }
  const score = assessmentState.scores[phase];
  if (!Number.isFinite(score)) {
    return { ok: false, status: "error" };
  }

  assessmentState.saveStatus[phase] = "saving";
  updateAssessmentSummary(phase);

  try {
    const response = await fetch("/api/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: assessmentState.userId,
        phase,
        score,
        total: ASSESSMENT_QUESTIONS.length,
        correctness: Array.isArray(correctness) ? correctness : null,
      }),
    });

    if (response.status === 409) {
      assessmentState.saveStatus[phase] = "already";
      return { ok: false, status: "already" };
    }
    if (!response.ok) throw new Error(`Save failed with status ${response.status}`);
    const payload = await response.json();
    assessmentState.saveStatus[phase] = "saved";
    return { ok: true, status: "saved", record: payload.record || null };
  } catch (err) {
    assessmentState.saveStatus[phase] = "error";
    return { ok: false, status: "error" };
  }
}

function gradeAssessmentPhase(phase, revealAnswers) {
  let score = 0;
  const results = [];
  ASSESSMENT_QUESTIONS.forEach((question) => {
    const result = getAssessmentQuestionFeedback(question.id, assessmentState[phase][question.id]);
    const status = document.getElementById(`${phase}-${question.id}-status`);
    results.push(result);
    if (status) {
      status.classList.remove("correct", "incorrect");
      if (revealAnswers) {
        status.textContent = result.message;
        status.classList.add(result.correct ? "correct" : "incorrect");
      } else {
        status.textContent = "Response recorded. Feedback is shown only after the post-assessment.";
      }
    }
    if (result.correct) score += 1;
  });
  assessmentState.scores[phase] = score;
  return { score, results };
}

async function submitAssessmentPhase(phase) {
  if (assessmentState.submitted[phase]) return;

  assessmentState.saveStatus[phase] = "idle";
  updateAssessmentSummary(phase);
  const shouldReveal = phase === "post";
  const graded = gradeAssessmentPhase(phase, false);

  updateAssessmentSummary(phase);

  const saveResult = await submitAssessmentScore(
    phase,
    graded.results.map((result) => Boolean(result.correct))
  );
  if (!saveResult.ok) {
    if (saveResult.status === "already") {
      assessmentState.submitted[phase] = true;
      setAssessmentPhaseDisabled(phase, true);
      if (phase === "pre") updatePreUnlockState();
    }
    updateAssessmentSummary(phase);
    return;
  }

  assessmentState.submitted[phase] = true;
  if (shouldReveal) {
    gradeAssessmentPhase(phase, true);
  }
  setAssessmentPhaseDisabled(phase, true);
  if (phase === "pre") {
    updatePreUnlockState();
    setActiveGuidedStage(getStoredAssessmentStageIndex(), { behavior: "smooth" });
  } else {
    ensureGuidedStageChrome();
    setActiveGuidedStage(getGuidedSections().length - 1, { behavior: "smooth" });
  }
  updateAssessmentSummary(phase);
}

async function loadExistingAssessmentRecord() {
  if (!assessmentState.userId || typeof fetch !== "function") return;
  try {
    const response = await fetch(`/api/assessment?userId=${encodeURIComponent(assessmentState.userId)}`, {
      cache: "no-store",
    });
    if (!response.ok) return;
    const payload = await response.json();
    const record = payload.record;
    if (!record) return;
    if (record.preSavedAt) {
      assessmentState.submitted.pre = true;
      assessmentState.scores.pre = Number.isFinite(record.preScore) ? record.preScore : null;
      assessmentState.saveStatus.pre = "saved";
      assessmentState.restoredFromSavedRecord.pre = true;
    }
    if (record.postSavedAt) {
      assessmentState.submitted.post = true;
      assessmentState.scores.post = Number.isFinite(record.postScore) ? record.postScore : null;
      assessmentState.saveStatus.post = "saved";
      assessmentState.restoredFromSavedRecord.post = true;
    }
  } catch (err) {
    // Leave the assessment usable even if the saved record cannot be loaded.
  }
}

async function initAssessments() {
  if (!els.preAssessmentGrid && !els.postAssessmentGrid) return;

  assessmentState.userId = getOrCreateAssessmentUserId();
  assessmentState.pre = cloneAssessmentDefaults();
  assessmentState.post = cloneAssessmentDefaults();
  assessmentUiState.pre = cloneAssessmentUiDefaults();
  assessmentUiState.post = cloneAssessmentUiDefaults();
  ensureAssessmentScrollBinding();
  await loadExistingAssessmentRecord();
  renderAssessmentPhase("pre");
  updatePreUnlockState();
  updateAssessmentSummary("pre");
  updateAssessmentSummary("post");

  if (els.preAssessmentCheckBtn) {
    els.preAssessmentCheckBtn.addEventListener("click", () => {
      void submitAssessmentPhase("pre");
    });
  }
  if (els.postAssessmentCheckBtn) {
    els.postAssessmentCheckBtn.addEventListener("click", () => {
      void submitAssessmentPhase("post");
    });
  }
}

function logGamma(z) {
  const p = [
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7,
  ];
  if (z < 0.5) {
    return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - logGamma(1 - z);
  }
  let x = 0.99999999999980993;
  const tZ = z - 1;
  for (let i = 0; i < p.length; i += 1) {
    x += p[i] / (tZ + i + 1);
  }
  const t = tZ + p.length - 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (tZ + 0.5) * Math.log(t) - t + Math.log(x);
}

function incompleteBetaContinuedFraction(a, b, x) {
  const maxIter = 200;
  const eps = 3e-7;
  const fpMin = 1e-30;
  let qab = a + b;
  let qap = a + 1;
  let qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < fpMin) d = fpMin;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= maxIter; m += 1) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpMin) d = fpMin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpMin) c = fpMin;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpMin) d = fpMin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpMin) c = fpMin;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < eps) break;
  }
  return h;
}

function regularizedIncompleteBeta(x, a, b) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  if (x < (a + 1) / (a + b + 2)) {
    return (bt * incompleteBetaContinuedFraction(a, b, x)) / a;
  }
  return 1 - (bt * incompleteBetaContinuedFraction(b, a, 1 - x)) / b;
}

function studentTCdf(t, df) {
  const nu = Math.max(1, df);
  if (t === 0) return 0.5;
  const x = nu / (nu + t * t);
  const ib = regularizedIncompleteBeta(x, nu / 2, 0.5);
  if (t > 0) return 1 - 0.5 * ib;
  return 0.5 * ib;
}

function sampleSkewness(values) {
  const n = values.length;
  if (n < 3) return NaN;
  const m = mean(values);
  const s = sd(values);
  if (!Number.isFinite(s) || s <= 0) return NaN;
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += ((values[i] - m) / s) ** 3;
  }
  return (n / ((n - 1) * (n - 2))) * sum;
}

function sampleExcessKurtosis(values) {
  const n = values.length;
  if (n < 4) return NaN;
  const m = mean(values);
  const s = sd(values);
  if (!Number.isFinite(s) || s <= 0) return NaN;
  let sum4 = 0;
  for (let i = 0; i < n; i += 1) {
    sum4 += ((values[i] - m) / s) ** 4;
  }
  const term1 = (n * (n + 1) * sum4) / ((n - 1) * (n - 2) * (n - 3));
  const term2 = (3 * (n - 1) ** 2) / ((n - 2) * (n - 3));
  return term1 - term2;
}

function binomialSample(n, p, rand = Math.random) {
  const prob = clamp(p, 1e-6, 1 - 1e-6);
  let count = 0;
  for (let i = 0; i < n; i += 1) {
    if (rand() < prob) count += 1;
  }
  return count;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setupHeroCanvas() {
  const canvas = els.heroParticles;
  if (!canvas) return null;

  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(280, Math.floor(canvas.clientWidth));
  const height = Math.max(220, Math.floor(canvas.clientHeight));
  const targetWidth = Math.floor(width * dpr);
  const targetHeight = Math.floor(height * dpr);

  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
  }

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, width, height };
}

function heroTargetCount(width, height) {
  return clamp(Math.round((width * height) / 14500), 28, 120);
}

function makeHeroParticle(width, height) {
  const color = heroPalette[Math.floor(Math.random() * heroPalette.length)];
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 18,
    vy: (Math.random() - 0.5) * 14,
    radius: 1 + Math.random() * 2.7,
    age: Math.random() * 7,
    life: 4 + Math.random() * 8,
    color,
  };
}

function alphaFromLife(age, life) {
  const t = age / life;
  if (t <= 0.2) return t / 0.2;
  if (t >= 0.8) return Math.max(0, (1 - t) / 0.2);
  return 1;
}

function animateHeroParticles(now) {
  const setup = setupHeroCanvas();
  if (!setup) return;

  const { ctx, width, height } = setup;
  const dt = heroMotion.lastTime ? Math.min(0.05, (now - heroMotion.lastTime) / 1000) : 0.016;
  heroMotion.lastTime = now;

  const targetCount = heroTargetCount(width, height);
  while (heroMotion.particles.length < targetCount) {
    heroMotion.particles.push(makeHeroParticle(width, height));
  }
  if (heroMotion.particles.length > targetCount) {
    heroMotion.particles.length = targetCount;
  }

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < heroMotion.particles.length; i += 1) {
    let p = heroMotion.particles[i];
    p.age += dt;

    if (p.age >= p.life) {
      p = makeHeroParticle(width, height);
      heroMotion.particles[i] = p;
    }

    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.x < -22) p.x = width + 22;
    if (p.x > width + 22) p.x = -22;
    if (p.y < -22) p.y = height + 22;
    if (p.y > height + 22) p.y = -22;

    const alpha = alphaFromLife(p.age, p.life) * 0.62;
    const [r, g, b] = p.color;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  heroMotion.frameId = requestAnimationFrame(animateHeroParticles);
}

function startHeroParticles() {
  if (!els.heroParticles || heroMotion.frameId) return;
  setupHeroCanvas();
  heroMotion.lastTime = 0;
  heroMotion.frameId = requestAnimationFrame(animateHeroParticles);
}

function miniAttentionFromScroll(scrollVelocity) {
  return clamp(92 - 0.72 * scrollVelocity + gaussian() * 5, 2, 99);
}

function regenerateMiniCorrDataset(scrollTarget) {
  miniCorrState.points = [];
  for (let i = 0; i < 34; i += 1) {
    const x = clamp(scrollTarget + gaussian() * 13, 0, 100);
    const y = miniAttentionFromScroll(x);
    miniCorrState.points.push({ id: i + 1, x, y });
  }

  miniCorrState.latestAttention = clamp(92 - 0.72 * scrollTarget, 2, 99);
  if (els.miniAttentionVal) {
    els.miniAttentionVal.textContent = fmt(miniCorrState.latestAttention, 1);
  }
}

function drawMiniCorrelation() {
  if (!els.miniCorrSvg || !window.d3) return;

  const d3 = window.d3;
  const svgNode = els.miniCorrSvg;
  const w = Math.max(260, Math.floor(svgNode.clientWidth));
  const h = Math.max(180, Math.floor(svgNode.clientHeight));
  const margin = { top: 12, right: 12, bottom: 30, left: 36 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const xScale = d3.scaleLinear().domain([0, 100]).range([margin.left, margin.left + innerW]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([margin.top + innerH, margin.top]);

  const xAxis = d3.axisBottom(xScale).ticks(5).tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(4).tickSizeOuter(0);

  const gridColor = "rgba(72, 102, 120, 0.2)";
  for (let i = 0; i <= 5; i += 1) {
    const x = margin.left + (i / 5) * innerW;
    svg
      .append("line")
      .attr("x1", x)
      .attr("y1", margin.top)
      .attr("x2", x)
      .attr("y2", margin.top + innerH)
      .attr("stroke", gridColor)
      .attr("stroke-width", 1);
  }
  for (let i = 0; i <= 4; i += 1) {
    const y = margin.top + (i / 4) * innerH;
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("y1", y)
      .attr("x2", margin.left + innerW)
      .attr("y2", y)
      .attr("stroke", gridColor)
      .attr("stroke-width", 1);
  }

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 4)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text("scrollingVelocity");

  if (miniCorrState.points.length >= 2) {
    const xs = miniCorrState.points.map((p) => p.x);
    const ys = miniCorrState.points.map((p) => p.y);
    const model = regression(xs, ys);
    const y0 = clamp(model.intercept, 0, 100);
    const y100 = clamp(model.intercept + model.slope * 100, 0, 100);

    svg
      .append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(y0))
      .attr("x2", xScale(100))
      .attr("y2", yScale(y100))
      .attr("stroke", "#d55e00")
      .attr("stroke-width", 2);
  }

  svg
    .append("g")
    .selectAll("circle")
    .data(miniCorrState.points)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.x))
    .attr("cy", (d) => yScale(d.y))
    .attr("r", 3)
    .attr("fill", "rgba(0, 114, 178, 0.66)")
    .attr("stroke", "rgba(0, 114, 178, 0.95)")
    .attr("stroke-width", 0.4);
}

function startMiniCorrelationDemo() {
  if (!els.miniScrollVelocity || !els.miniCorrSvg) return;

  els.miniScrollVal.textContent = els.miniScrollVelocity.value;
  const seedValue = Number(els.miniScrollVelocity.value);
  regenerateMiniCorrDataset(seedValue);
  drawMiniCorrelation();

  els.miniScrollVelocity.addEventListener("input", () => {
    const current = Number(els.miniScrollVelocity.value);
    els.miniScrollVal.textContent = els.miniScrollVelocity.value;
    regenerateMiniCorrDataset(current);
    drawMiniCorrelation();
  });
}

function makeSyntheticPassword(hasCat) {
  const noCatRefPw = [
    "sunsetPiano9",
    "brunchNebula88",
    "otterWallet22",
    "rainyParcel17",
    "mintCloud703",
    "velvetEngine5",
    "bananaCipher41",
    "copperLantern6",
    "drizzleOrbit3",
    "nachoComet77",
  ];
  const extraNoCatRefPw = [
    "orbitDesk2",
    "paperStone8",
    "glacierKey17",
    "pixelRiver4",
    "lampSignal52",
    "mangoRocket6",
    "cloudHarbor31",
    "violetHarbor9",
    "plasmaGarden4",
    "silverTunnel91",
  ];
  const catRefPw = [
    "catnapQuartz7",
    "whiskerOrbit2",
    "purrSignal44",
    "tabbyCipher9",
    "felineCloud6",
    "meowEngine83",
    "pawprintHarbor1",
    "kittyVector58",
    "siameseRocket3",
    "catCafeDelta5",
  ];

  const nonCatPool = noCatRefPw.concat(extraNoCatRefPw);
  if (!hasCat) return pick(nonCatPool);
  const pool = Math.random() < 0.72 ? catRefPw : nonCatPool;
  return pick(pool);
}

function regenerateMiniUserDataset() {
  const total = 54;
  miniUserState.rows = Array.from({ length: total }, (_, idx) => {
    const hasCat = Math.random() < 0.46 ? 1 : 0;
    const password = makeSyntheticPassword(hasCat);
    const scrollingVelocity = clamp(18 + Math.random() * 80 + gaussian() * 4, 0, 100);
    const attentionSpan = miniAttentionFromScroll(scrollingVelocity);

    return {
      id: idx + 1,
      hasCat,
      password,
      scrollingVelocity,
      attentionSpan,
      plotX: 0.06 + Math.random() * 0.88,
      plotY: 0.06 + Math.random() * 0.88,
    };
  });

  if (els.miniUserTooltip) {
    els.miniUserTooltip.innerHTML = "Hover a point.";
  }
}

function drawMiniUserChart() {
  if (!els.miniUserSvg || !window.d3) return;

  const d3 = window.d3;
  const svgNode = els.miniUserSvg;
  const w = Math.max(260, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 10, right: 12, bottom: 10, left: 12 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const xScale = d3.scaleLinear().domain([0, 1]).range([margin.left, margin.left + innerW]);
  const yScale = d3.scaleLinear().domain([0, 1]).range([margin.top + innerH, margin.top]);

  const points = svg
    .append("g")
    .selectAll("circle")
    .data(miniUserState.rows)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d.plotX))
    .attr("cy", (d) => yScale(d.plotY))
    .attr("r", 5.5)
    .attr("fill", (d) => (d.hasCat ? "rgba(0, 158, 115, 0.72)" : "rgba(0, 114, 178, 0.66)"))
    .attr("stroke", "rgba(20, 33, 43, 0.35)")
    .attr("stroke-width", 0.5);

  function moveTooltip(event) {
    if (!els.miniUserTooltip) return;
    const wrapper = els.miniUserTooltip.parentElement;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const x = event.clientX - rect.left + 12;
    const y = event.clientY - rect.top + 12;
    els.miniUserTooltip.style.left = `${x}px`;
    els.miniUserTooltip.style.top = `${y}px`;
  }

  points
    .on("mouseenter", function onEnter(event, d) {
      d3.select(this).attr("r", 7.7).attr("stroke-width", 1.2);
      if (els.miniUserTooltip) {
        els.miniUserTooltip.innerHTML = `<code>password = ${d.password}</code>`;
        els.miniUserTooltip.style.opacity = "1";
        moveTooltip(event);
      }
    })
    .on("mousemove", function onMove(event) {
      moveTooltip(event);
    })
    .on("mouseleave", function onLeave() {
      d3.select(this).attr("r", 5.5).attr("stroke-width", 0.5);
      if (els.miniUserTooltip) {
        els.miniUserTooltip.style.opacity = "0";
      }
    });
}

function startMiniUserDemo() {
  if (!els.miniUserSvg) return;
  regenerateMiniUserDataset();
  drawMiniUserChart();
}

function generateAct2Dataset(size = 100, seedOffset = 0) {
  const rand = createSeededRandom(20260314 + seedOffset * 7919);
  act2State.rows = Array.from({ length: size }, (_, idx) => {
    const monthlyIncome = clamp(Math.round(2500 + rand() * 9500 + gaussianFrom(rand) * 420), 1800, 16000);
    const spendRate = clamp(0.14 + rand() * 0.36 + gaussianFrom(rand) * 0.03, 0.08, 0.62);
    const monthlySpend = clamp(Math.round(monthlyIncome * spendRate + gaussianFrom(rand) * 260), 120, 6500);
    return {
      user: idx + 1,
      monthlySpend,
      monthlyIncome,
    };
  });
}

function renderAct2Dataset() {
  if (!els.act2TableBody) return;

  const rowsHtml = act2State.rows
    .map(
      (row) =>
        `<tr><td>${row.user}</td><td>${fmtInt(row.monthlySpend)}</td><td>${fmtInt(row.monthlyIncome)}</td></tr>`,
    )
    .join("");
  els.act2TableBody.innerHTML = rowsHtml;

  if (els.act2RowCount) {
    els.act2RowCount.textContent = String(act2State.rows.length);
  }

  const xs = act2State.rows.map((row) => row.monthlySpend);
  const ys = act2State.rows.map((row) => row.monthlyIncome);

  const meanX = mean(xs);
  const meanY = mean(ys);
  const varX = sampleVariance(xs);
  const varY = sampleVariance(ys);
  const covXY = sampleCovariance(xs, ys);
  const corrXY = correlation(xs, ys);
  const sdX = Math.sqrt(varX);
  const sdY = Math.sqrt(varY);

  if (els.act2MeanX) els.act2MeanX.textContent = fmtNum(meanX);
  if (els.act2MeanY) els.act2MeanY.textContent = fmtNum(meanY);
  if (els.act2VarX) els.act2VarX.textContent = fmtNum(varX);
  if (els.act2VarY) els.act2VarY.textContent = fmtNum(varY);
  if (els.act2CovXY) els.act2CovXY.textContent = fmtNum(covXY);
  if (els.act2CorrXY) els.act2CorrXY.textContent = fmtNum(corrXY, 3);
  if (els.act2SdX) els.act2SdX.textContent = fmtNum(sdX);
  if (els.act2SdY) els.act2SdY.textContent = fmtNum(sdY);
}

function initAct2Scene1() {
  if (!els.act2TableBody) return;

  generateAct2Dataset(100, act2State.version);
  renderAct2Dataset();

  if (els.act2RefreshBtn) {
    els.act2RefreshBtn.addEventListener("click", () => {
      act2State.version += 1;
      generateAct2Dataset(100, act2State.version);
      renderAct2Dataset();
    });
  }
}

function generateAct2HeightSample(size = 420, seedOffset = 0) {
  const rand = createSeededRandom(880301 + seedOffset * 3571);
  act2HeightState.heights = Array.from({ length: size }, () => {
    const h = 171 + gaussianFrom(rand) * 8.2 + gaussianFrom(rand) * 1.1;
    return clamp(h, 145, 205);
  });
}

function drawAct2HeightHistogram() {
  if (!els.act2HeightHistSvg || !window.d3 || !act2HeightState.heights.length) return;

  const d3 = window.d3;
  const values = act2HeightState.heights;
  const q10 = empiricalQuantile(values, 0.1);
  const q50 = empiricalQuantile(values, 0.5);
  const q90 = empiricalQuantile(values, 0.9);
  const m = mean(values);
  const sigma = sd(values);

  if (els.act2Q10) els.act2Q10.textContent = fmtNum(q10, 1);
  if (els.act2Q50) els.act2Q50.textContent = fmtNum(q50, 1);
  if (els.act2Q90) els.act2Q90.textContent = fmtNum(q90, 1);
  if (els.act2HeightN) els.act2HeightN.textContent = fmtInt(values.length);
  if (els.act2HeightMean) els.act2HeightMean.textContent = fmtNum(m, 1);
  if (els.act2HeightSd) els.act2HeightSd.textContent = fmtNum(sigma, 1);

  const svgNode = els.act2HeightHistSvg;
  const w = Math.max(320, Math.floor(svgNode.clientWidth));
  const h = Math.max(220, Math.floor(svgNode.clientHeight));
  const margin = { top: 24, right: 16, bottom: 34, left: 42 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain([145, 205]).range([margin.left, margin.left + innerW]);
  const bins = d3
    .bin()
    .domain(x.domain())
    .thresholds(d3.range(145, 206, 2))(values);

  const binWidth = bins.length > 0 ? bins[0].x1 - bins[0].x0 : 2;
  const maxBin = d3.max(bins, (b) => b.length) || 1;

  const densityPoints = Number.isFinite(sigma) && sigma > 0
    ? d3.range(145, 205.1, 0.5).map((xv) => {
        const z = (xv - m) / sigma;
        const pdf = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
        return { x: xv, y: pdf * values.length * binWidth };
      })
    : [];

  const maxDensity = d3.max(densityPoints, (p) => p.y) || 0;
  const y = d3.scaleLinear().domain([0, Math.max(maxBin, maxDensity) * 1.12]).nice().range([margin.top + innerH, margin.top]);

  const gridColor = "rgba(72, 102, 120, 0.09)";
  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", gridColor)
      .attr("stroke-width", 0.8);
  });

  svg
    .append("g")
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.x0) + 0.7)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1.4))
    .attr("height", (d) => y(0) - y(d.length))
    .attr("fill", "rgba(86, 180, 233, 0.56)")
    .attr("stroke", "rgba(0, 114, 178, 0.55)")
    .attr("stroke-width", 0.7);

  if (densityPoints.length) {
    const curve = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    svg
      .append("path")
      .datum(densityPoints)
      .attr("fill", "none")
      .attr("stroke", "#d55e00")
      .attr("stroke-width", 2.1)
      .attr("d", curve);
  }

  const quantiles = [
    { label: "Q10", value: q10, color: "#0072b2" },
    { label: "Q50", value: q50, color: "#009e73" },
    { label: "Q90", value: q90, color: "#e69f00" },
  ];

  quantiles.forEach((q) => {
    svg
      .append("line")
      .attr("x1", x(q.value))
      .attr("x2", x(q.value))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", q.color)
      .attr("stroke-width", 1.6)
      .attr("stroke-dasharray", "5 4");

    svg
      .append("text")
      .attr("x", x(q.value))
      .attr("y", margin.top - 7)
      .attr("text-anchor", "middle")
      .attr("fill", q.color)
      .style("font-size", "10px")
      .style("font-weight", "700")
      .text(q.label);
  });

  const xAxis = d3.axisBottom(x).ticks(7).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "11px")
    .text("height (cm)");
}

function initAct2Scene2() {
  if (!els.act2HeightHistSvg) return;

  generateAct2HeightSample(420, act2HeightState.version);
  drawAct2HeightHistogram();

  if (els.act2HeightRefreshBtn) {
    els.act2HeightRefreshBtn.addEventListener("click", () => {
      act2HeightState.version += 1;
      generateAct2HeightSample(420, act2HeightState.version);
      drawAct2HeightHistogram();
    });
  }
}

function generateAct2SkewSample(size = 360, seedOffset = 0) {
  const rand = createSeededRandom(447701 + seedOffset * 2713);
  act2SkewState.rightValues = Array.from({ length: size }, () => {
    const core = Math.exp(5.65 + gaussianFrom(rand) * 0.66);
    const tail = rand() < 0.11 ? Math.exp(7.1 + gaussianFrom(rand) * 0.52) : 0;
    return clamp(core + tail, 8, 3600);
  });

  act2SkewState.leftValues = Array.from({ length: size }, () => {
    const core = Math.exp(3.5 + gaussianFrom(rand) * 0.5);
    const tail = rand() < 0.1 ? Math.exp(4.45 + gaussianFrom(rand) * 0.42) : 0;
    const rightBase = clamp(core + tail, 2, 97);
    return clamp(100 - rightBase + rand() * 0.9, 0.5, 99.5);
  });
}

function skewOrderingLabel(modeVal, medianVal, meanVal, direction) {
  if (!Number.isFinite(modeVal) || !Number.isFinite(medianVal) || !Number.isFinite(meanVal)) return "-";
  if (direction === "multi") {
    const modeGap = Math.abs(modeVal - (meanVal + medianVal) / 2);
    if (modeGap >= 12) return "multi-peak: mode sticks to one hill while mean/median summarize across hills";
    return "multi-peak: several hills present, centers can drift away from the tallest hill";
  }
  if (direction === "right") {
    if (modeVal < medianVal && medianVal < meanVal) return "right-skew: mode < median < mean";
    return "right-skew: long tail present, ordering is close/crossing this draw";
  }
  if (modeVal > medianVal && medianVal > meanVal) return "left-skew: mode > median > mean";
  return "left-skew: long tail present, ordering is close/crossing this draw";
}

function generateAct2MultiPeakSample(size = 460, seedOffset = 0) {
  const rand = createSeededRandom(771011 + seedOffset * 2957);
  act2MultiState.values = Array.from({ length: size }, () => {
    const u = rand();
    if (u < 0.31) return clamp(18 + gaussianFrom(rand) * 1.8, 1, 99);
    if (u < 0.66) return clamp(52 + gaussianFrom(rand) * 6.5, 1, 99);
    return clamp(82 + gaussianFrom(rand) * 5.2, 1, 99);
  });
}

function drawSingleSkewHistogram({
  svgNode,
  values,
  xDomain,
  thresholdStep,
  axisLabel,
  direction,
  markerIds,
  isCurrency,
  showMarkers = true,
}) {
  if (!svgNode || !window.d3 || !values.length) return;
  const d3 = window.d3;
  const medianVal = empiricalQuantile(values, 0.5);
  const meanVal = mean(values);
  const skewSd = sd(values);
  const w = Math.max(320, Math.floor(svgNode.clientWidth));
  const h = Math.max(220, Math.floor(svgNode.clientHeight));
  const margin = { top: 24, right: 16, bottom: 34, left: 42 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain(xDomain).range([margin.left, margin.left + innerW]);
  const bins = d3
    .bin()
    .domain(x.domain())
    .thresholds(d3.range(xDomain[0], xDomain[1] + thresholdStep, thresholdStep))(values);

  const binWidth = bins.length > 0 ? bins[0].x1 - bins[0].x0 : thresholdStep;
  const maxBin = d3.max(bins, (b) => b.length) || 1;
  const modeBin = bins.reduce((best, b) => (best === null || b.length > best.length ? b : best), null);
  const modeVal = modeBin ? (modeBin.x0 + modeBin.x1) / 2 : NaN;

  const bandwidthMin = Math.max(3, thresholdStep * 0.7);
  const bandwidthMax = Math.max(14, thresholdStep * 3.2);
  const bandwidth = Number.isFinite(skewSd)
    ? clamp(1.06 * skewSd * Math.pow(values.length, -0.2), bandwidthMin, bandwidthMax)
    : thresholdStep * 1.6;
  const densityStep = thresholdStep / 4;
  const densityPoints = d3.range(xDomain[0], xDomain[1] + 0.001, densityStep).map((xv) => {
    let kernelSum = 0;
    for (let i = 0; i < values.length; i += 1) {
      const u = (xv - values[i]) / bandwidth;
      kernelSum += Math.exp(-0.5 * u * u);
    }
    const density = kernelSum / (values.length * bandwidth * Math.sqrt(2 * Math.PI));
    return { x: xv, y: density * values.length * binWidth };
  });

  const maxDensity = d3.max(densityPoints, (p) => p.y) || 0;
  const y = d3.scaleLinear().domain([0, Math.max(maxBin, maxDensity) * 1.14]).nice().range([margin.top + innerH, margin.top]);

  if (markerIds.mode) markerIds.mode.textContent = fmtNum(modeVal, isCurrency ? 0 : 1);
  if (markerIds.median) markerIds.median.textContent = fmtNum(medianVal, isCurrency ? 0 : 1);
  if (markerIds.mean) markerIds.mean.textContent = fmtNum(meanVal, isCurrency ? 0 : 1);
  if (markerIds.order) {
    markerIds.order.textContent = skewOrderingLabel(modeVal, medianVal, meanVal, direction);
  }

  const gridColor = "rgba(72, 102, 120, 0.09)";
  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", gridColor)
      .attr("stroke-width", 0.8);
  });

  svg
    .append("g")
    .selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.x0) + 0.8)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1.6))
    .attr("height", (d) => y(0) - y(d.length))
    .attr("fill", "rgba(0, 158, 115, 0.48)")
    .attr("stroke", "rgba(0, 114, 178, 0.5)")
    .attr("stroke-width", 0.7);

  const densityLine = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y));

  svg
    .append("path")
    .datum(densityPoints)
    .attr("fill", "none")
    .attr("stroke", "#cc79a7")
    .attr("stroke-width", 2.1)
    .attr("d", densityLine);

  if (showMarkers) {
    const markers = [
      { label: "mode", value: modeVal, color: "#0072b2" },
      { label: "median", value: medianVal, color: "#009e73" },
      { label: "mean", value: meanVal, color: "#d55e00" },
    ];

    const markerLabelY = {
      mode: margin.top - 7,
      median: margin.top + 5,
      mean: margin.top + 17,
    };

    markers.forEach((m) => {
      const lineTop = markerLabelY[m.label] + 4;
      svg
        .append("line")
        .attr("x1", x(m.value))
        .attr("x2", x(m.value))
        .attr("y1", lineTop)
        .attr("y2", y(0) - 1)
        .attr("stroke", m.color)
        .attr("stroke-width", 1.8)
        .attr("stroke-dasharray", "5 4");

      svg
        .append("text")
        .attr("x", x(m.value))
        .attr("y", markerLabelY[m.label])
        .attr("text-anchor", "middle")
        .attr("fill", m.color)
        .style("font-size", "10px")
        .style("font-weight", "700")
        .text(m.label);
    });
  }

  const xAxis = d3.axisBottom(x).ticks(9).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "11px")
    .text(axisLabel);
}

function drawAct2SkewHistograms() {
  const rightMax = clamp(empiricalQuantile(act2SkewState.rightValues, 0.997) * 1.1, 1400, 3600);
  const rightStep = Math.max(30, Math.round(rightMax / 28));

  drawSingleSkewHistogram({
    svgNode: els.act2SkewRightSvg,
    values: act2SkewState.rightValues,
    xDomain: [0, rightMax],
    thresholdStep: rightStep,
    axisLabel: "money_spent ($)",
    direction: "right",
    markerIds: {
      mode: els.act2SkewRightMode,
      median: els.act2SkewRightMedian,
      mean: els.act2SkewRightMean,
      order: els.act2SkewRightOrder,
    },
    isCurrency: true,
  });

  drawSingleSkewHistogram({
    svgNode: els.act2SkewLeftSvg,
    values: act2SkewState.leftValues,
    xDomain: [0, 100],
    thresholdStep: 4,
    axisLabel: "satisfaction_score",
    direction: "left",
    markerIds: {
      mode: els.act2SkewLeftMode,
      median: els.act2SkewLeftMedian,
      mean: els.act2SkewLeftMean,
      order: els.act2SkewLeftOrder,
    },
    isCurrency: false,
  });
}

function drawAct2MultiPeakHistogram() {
  drawSingleSkewHistogram({
    svgNode: els.act2MultiPeakSvg,
    values: act2MultiState.values,
    xDomain: [0, 100],
    thresholdStep: 4,
    axisLabel: "bonus_points",
    direction: "multi",
    markerIds: {
      mode: els.act2MultiMode,
      median: els.act2MultiMedian,
      mean: els.act2MultiMean,
      order: els.act2MultiOrder,
    },
    isCurrency: false,
  });
}

function initAct2Scene3() {
  if (!els.act2SkewRightSvg || !els.act2SkewLeftSvg) return;

  generateAct2SkewSample(360, act2SkewState.version);
  drawAct2SkewHistograms();

  if (els.act2SkewRefreshBtn) {
    els.act2SkewRefreshBtn.addEventListener("click", () => {
      act2SkewState.version += 1;
      generateAct2SkewSample(360, act2SkewState.version);
      drawAct2SkewHistograms();
    });
  }
}

function initAct2Scene4() {
  if (!els.act2MultiPeakSvg) return;

  generateAct2MultiPeakSample(460, act2MultiState.version);
  drawAct2MultiPeakHistogram();

  if (els.act2MultiRefreshBtn) {
    els.act2MultiRefreshBtn.addEventListener("click", () => {
      act2MultiState.version += 1;
      generateAct2MultiPeakSample(460, act2MultiState.version);
      drawAct2MultiPeakHistogram();
    });
  }
}

async function loadDatasaurusRows() {
  if (!window.d3) throw new Error("D3 unavailable");

  const d3 = window.d3;
  let lastErr = null;

  for (let i = 0; i < DATASAURUS_SOURCES.length; i += 1) {
    const source = DATASAURUS_SOURCES[i];
    try {
      const response = await fetch(source.url, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const raw = await response.text();
      const parsed = source.type === "tsv" ? d3.tsvParse(raw) : d3.csvParse(raw);
      if (!parsed.length) throw new Error("Empty dataset");
      return parsed;
    } catch (err) {
      lastErr = err;
    }
  }

  throw lastErr || new Error("Failed to load datasaurus data");
}

function setAct3Status(text) {
  if (els.act3Status) els.act3Status.textContent = text;
}

function prepareDatasaurus(rows) {
  const order = [];
  const byName = new Map();

  rows.forEach((row) => {
    const nameRaw = row.dataset || row.Dataset || row.name || row.series;
    const xRaw = row.x;
    const yRaw = row.y;
    const name = String(nameRaw || "").trim();
    const x = Number(xRaw);
    const y = Number(yRaw);
    if (!name || !Number.isFinite(x) || !Number.isFinite(y)) return;

    if (!byName.has(name)) {
      byName.set(name, []);
      order.push(name);
    }
    byName.get(name).push({ x, y });
  });

  act3DozenState.names = order;
  act3DozenState.byName = byName;
  act3DozenState.selected = order[0] || "";
  act3DozenState.loaded = order.length > 0;
}

function populateAct3Select() {
  if (!els.act3DatasetSelect) return;

  els.act3DatasetSelect.innerHTML = "";
  const fragment = document.createDocumentFragment();
  act3DozenState.names.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    fragment.appendChild(opt);
  });
  els.act3DatasetSelect.appendChild(fragment);

  if (act3DozenState.selected) {
    els.act3DatasetSelect.value = act3DozenState.selected;
  }
}

function updateAct3Summary(points) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);

  if (els.act3DatasetName) els.act3DatasetName.textContent = act3DozenState.selected || "-";
  if (els.act3N) els.act3N.textContent = fmtInt(points.length);
  if (els.act3MeanX) els.act3MeanX.textContent = fmtNum(mean(xs), 2);
  if (els.act3MeanY) els.act3MeanY.textContent = fmtNum(mean(ys), 2);
  if (els.act3VarX) els.act3VarX.textContent = fmtNum(sampleVariance(xs), 2);
  if (els.act3VarY) els.act3VarY.textContent = fmtNum(sampleVariance(ys), 2);
  if (els.act3Corr) els.act3Corr.textContent = fmtNum(correlation(xs, ys), 3);
}

function drawAct3DozenScatter() {
  if (!els.act3DozenSvg || !window.d3 || !act3DozenState.loaded) return;
  const points = act3DozenState.byName.get(act3DozenState.selected) || [];
  if (!points.length) return;

  drawAct3ScatterInto(els.act3DozenSvg, points, { xDomain: [0, 100], yDomain: [0, 100], xLabel: "x", yLabel: "y" });

  updateAct3Summary(points);
  setAct3Status(
    `Showing dataset: ${act3DozenState.selected}. Stats stay suspiciously similar, shape changes completely.`
  );
}

function getAct3SmallMultipleNames() {
  const available = act3DozenState.names;
  if (!available.length) return [];

  const preferred = ACT3_SMALL_MULTIPLES_ORDER.filter((name) => available.includes(name));
  const fallback = available.filter((name) => !preferred.includes(name) && name !== "dino");
  const names = [...preferred, ...fallback];

  if (names.length < 12 && available.includes("dino") && !names.includes("dino")) {
    names.unshift("dino");
  }

  return names.slice(0, 12);
}

function drawAct3SmallMultiples() {
  if (!els.act3SmallMultiples || !window.d3 || !act3DozenState.loaded) return;
  const d3 = window.d3;
  const names = getAct3SmallMultipleNames();

  els.act3SmallMultiples.innerHTML = "";
  names.forEach((name) => {
    const card = document.createElement("div");
    card.className = "act3-mini-card";

    const title = document.createElement("p");
    title.className = "act3-mini-name";
    title.textContent = name;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("act3-mini-svg");
    svg.setAttribute("viewBox", "0 0 180 120");
    svg.setAttribute("aria-label", `${name} small multiple`);

    const note = document.createElement("p");
    note.className = "act3-mini-note";

    card.appendChild(title);
    card.appendChild(svg);
    card.appendChild(note);
    els.act3SmallMultiples.appendChild(card);

    const points = act3DozenState.byName.get(name) || [];
    if (!points.length) {
      note.textContent = "n = 0";
      return;
    }

    const w = 180;
    const h = 120;
    const margin = { top: 7, right: 7, bottom: 14, left: 14 };
    const innerW = w - margin.left - margin.right;
    const innerH = h - margin.top - margin.bottom;

    const root = d3.select(svg);
    root.selectAll("*").remove();

    const x = d3.scaleLinear().domain([0, 100]).range([margin.left, margin.left + innerW]);
    const y = d3.scaleLinear().domain([0, 100]).range([margin.top + innerH, margin.top]);

    root
      .append("rect")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", innerW)
      .attr("height", innerH)
      .attr("fill", "none")
      .attr("stroke", "rgba(72, 102, 120, 0.3)")
      .attr("stroke-width", 0.8);

    root
      .append("g")
      .selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y))
      .attr("r", 1.45)
      .attr("fill", "rgba(0, 114, 178, 0.84)");

    note.textContent = `r = ${fmtNum(correlation(points.map((p) => p.x), points.map((p) => p.y)), 3)}`;
  });
}

function getAct3DinoPoints() {
  const exact = act3DozenState.byName.get("dino");
  if (exact && exact.length) return { name: "dino", points: exact };

  const fuzzyName = act3DozenState.names.find((name) => String(name).toLowerCase().includes("dino"));
  if (fuzzyName) {
    return { name: fuzzyName, points: act3DozenState.byName.get(fuzzyName) || [] };
  }

  const fallbackName = act3DozenState.names[0] || "";
  return { name: fallbackName, points: act3DozenState.byName.get(fallbackName) || [] };
}

function drawAct3DinoFocus() {
  if (!els.act3DinoSvg || !window.d3 || !act3DozenState.loaded) return;
  const { points } = getAct3DinoPoints();
  if (!points.length) return;

  const d3 = window.d3;
  const svgNode = els.act3DinoSvg;
  const w = Math.max(260, Math.floor(svgNode.clientWidth));
  const h = Math.max(190, Math.floor(svgNode.clientHeight));
  const margin = { top: 10, right: 10, bottom: 28, left: 30 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);

  if (els.act3DinoMeanX) els.act3DinoMeanX.textContent = fmtNum(mean(xs), 2);
  if (els.act3DinoMeanY) els.act3DinoMeanY.textContent = fmtNum(mean(ys), 2);
  if (els.act3DinoSdX) els.act3DinoSdX.textContent = fmtNum(sd(xs), 2);
  if (els.act3DinoSdY) els.act3DinoSdY.textContent = fmtNum(sd(ys), 2);
  if (els.act3DinoVarX) els.act3DinoVarX.textContent = fmtNum(sampleVariance(xs), 2);
  if (els.act3DinoVarY) els.act3DinoVarY.textContent = fmtNum(sampleVariance(ys), 2);

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain([0, 100]).range([margin.left, margin.left + innerW]);
  const y = d3.scaleLinear().domain([0, 100]).range([margin.top + innerH, margin.top]);

  svg
    .append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", innerW)
    .attr("height", innerH)
    .attr("fill", "none")
    .attr("stroke", "rgba(72, 102, 120, 0.33)")
    .attr("stroke-width", 0.8);

  svg
    .append("g")
    .selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 1.9)
    .attr("fill", "rgba(0, 114, 178, 0.85)");

  const xAxis = d3.axisBottom(x).ticks(5).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(4).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");
}

function generateAct3WideDataset(size = 220, seedOffset = 0) {
  const rand = createSeededRandom(904201 + seedOffset * 3137);
  act3MatrixState.rows = Array.from({ length: size }, (_, idx) => {
    const height = clamp(171 + gaussianFrom(rand) * 8.4, 148, 204);
    const weight = clamp(0.44 * height + gaussianFrom(rand) * 9.6 - 11, 43, 128);
    const income = clamp(5200 + gaussianFrom(rand) * 1250 + rand() * 700, 1600, 9800);
    const scroll = clamp(54 + gaussianFrom(rand) * 18.5 + (income - 5000) * 0.0028, 3, 99);
    const attention = clamp(89 - 0.57 * scroll + gaussianFrom(rand) * 7.4, 4, 100);
    const coffee = clamp(1.4 + (100 - attention) * 0.035 + gaussianFrom(rand) * 0.6 + rand() * 1.2, 0, 8);
    const spend = clamp(0.31 * income + 118 * coffee + gaussianFrom(rand) * 300 + 140, 120, 6200);
    const bonus = clamp(34 + 0.24 * attention + 0.0032 * income + gaussianFrom(rand) * 6.3, 0, 125);
    const sleep = clamp(7.5 - 0.013 * scroll + gaussianFrom(rand) * 0.72, 3.8, 10.6);
    const keyboard = clamp(41 + 0.32 * scroll + gaussianFrom(rand) * 8.5, 8, 98);

    return {
      user_id: `U${String(idx + 1).padStart(3, "0")}`,
      height_cm: height,
      weight_kg: weight,
      monthly_income: income,
      monthly_spend: spend,
      scroll_velocity: scroll,
      attention_span: attention,
      bonus_points: bonus,
      sleep_hours: sleep,
      coffee_cups: coffee,
      keyboard_pressure: keyboard,
    };
  });
}

function formatAct3WideValue(col, value) {
  if (col === "user_id") return String(value);
  const digitsMap = {
    height_cm: 1,
    weight_kg: 1,
    monthly_income: 0,
    monthly_spend: 0,
    scroll_velocity: 1,
    attention_span: 1,
    bonus_points: 1,
    sleep_hours: 2,
    coffee_cups: 2,
    keyboard_pressure: 1,
  };
  return fmtNum(Number(value), digitsMap[col] ?? 2);
}

function renderAct3WideTable() {
  if (!els.act3WideTableHead || !els.act3WideTableBody) return;
  const columns = ["user_id", ...act3MatrixState.columns];

  if (els.act3WideRowCount) els.act3WideRowCount.textContent = fmtInt(act3MatrixState.rows.length);
  if (els.act3WideColCount) els.act3WideColCount.textContent = fmtInt(act3MatrixState.columns.length);

  const selectedId = act3MatrixState.hoveredUserId;
  els.act3WideTableHead.innerHTML = `<tr>${columns.map((col) => `<th>${col}</th>`).join("")}</tr>`;
  els.act3WideTableBody.innerHTML = act3MatrixState.rows
    .map((row) => {
      const selectedClass = row.user_id === selectedId ? ' class="is-selected"' : "";
      return `<tr data-user-id="${row.user_id}"${selectedClass}>${columns
        .map((col) => `<td>${formatAct3WideValue(col, row[col])}</td>`)
        .join("")}</tr>`;
    })
    .join("");
}

function shortAct3ColName(col) {
  const map = {
    height_cm: "height",
    weight_kg: "weight",
    monthly_income: "income",
    monthly_spend: "spend",
    scroll_velocity: "scroll",
    attention_span: "attention",
    bonus_points: "bonus",
    sleep_hours: "sleep",
    coffee_cups: "coffee",
    keyboard_pressure: "keyPress",
  };
  return map[col] || col;
}

function act3ColLabel(col) {
  const map = {
    height_cm: "height_cm",
    weight_kg: "weight_kg",
    monthly_income: "monthly_income",
    monthly_spend: "monthly_spend",
    scroll_velocity: "scroll_velocity",
    attention_span: "attention_span",
    bonus_points: "bonus_points",
    sleep_hours: "sleep_hours",
    coffee_cups: "coffee_cups",
    keyboard_pressure: "keyboard_pressure",
  };
  return map[col] || col;
}

function drawAct3Pairplot() {
  if (!els.act3PairplotSvg || !window.d3 || !act3MatrixState.rows.length) return;

  const d3 = window.d3;
  const cols = act3MatrixState.columns;
  const rows = act3MatrixState.rows;
  const selectedId = act3MatrixState.hoveredUserId;
  const selectedRow = selectedId ? rows.find((r) => r.user_id === selectedId) : null;
  const cell = 92;
  const pad = 28;
  const totalW = pad + cols.length * cell + 6;
  const totalH = pad + cols.length * cell + 6;

  const svg = d3.select(els.act3PairplotSvg);
  svg.attr("viewBox", `0 0 ${totalW} ${totalH}`);
  svg.attr("width", totalW);
  svg.attr("height", totalH);
  svg.selectAll("*").remove();

  const scales = {};
  cols.forEach((col) => {
    const values = rows.map((r) => r[col]);
    const minV = d3.min(values);
    const maxV = d3.max(values);
    const span = Math.max(1e-6, maxV - minV);
    const lo = minV - span * 0.05;
    const hi = maxV + span * 0.05;
    scales[col] = d3.scaleLinear().domain([lo, hi]).range([8, cell - 8]);
  });

  cols.forEach((yCol, i) => {
    cols.forEach((xCol, j) => {
      const gx = pad + j * cell;
      const gy = pad + i * cell;
      const g = svg.append("g").attr("transform", `translate(${gx}, ${gy})`);

      g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", cell)
        .attr("height", cell)
        .attr("fill", "#ffffff")
        .attr("stroke", "rgba(72, 102, 120, 0.27)")
        .attr("stroke-width", 0.8);

      if (i === j) {
        g.append("text")
          .attr("x", cell / 2)
          .attr("y", cell / 2 + 3)
          .attr("text-anchor", "middle")
          .attr("fill", "#355b72")
          .style("font-size", "10px")
          .style("font-weight", "700")
          .text(shortAct3ColName(xCol));
        return;
      }

      g.append("g")
        .selectAll("circle")
        .data(rows)
        .enter()
        .append("circle")
        .attr("cx", (d) => scales[xCol](d[xCol]))
        .attr("cy", (d) => cell - scales[yCol](d[yCol]))
        .attr("r", 1.28)
        .attr("fill", "rgba(0, 158, 115, 0.34)");

      if (selectedRow) {
        g.append("circle")
          .attr("cx", scales[xCol](selectedRow[xCol]))
          .attr("cy", cell - scales[yCol](selectedRow[yCol]))
          .attr("r", 3.4)
          .attr("fill", "rgba(213, 94, 0, 0.95)")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 1.1);
      }
    });
  });
}

function act3BoxStats(values) {
  if (!values.length) {
    return {
      q1: NaN,
      median: NaN,
      q3: NaN,
      whiskerLow: NaN,
      whiskerHigh: NaN,
      outliers: [],
    };
  }

  const sorted = [...values].sort((a, b) => a - b);
  const q1 = empiricalQuantile(sorted, 0.25);
  const median = empiricalQuantile(sorted, 0.5);
  const q3 = empiricalQuantile(sorted, 0.75);
  const iqr = q3 - q1;
  const lowFence = q1 - 1.5 * iqr;
  const highFence = q3 + 1.5 * iqr;

  const inliers = sorted.filter((v) => v >= lowFence && v <= highFence);
  const whiskerLow = inliers.length ? inliers[0] : sorted[0];
  const whiskerHigh = inliers.length ? inliers[inliers.length - 1] : sorted[sorted.length - 1];
  const outliers = sorted.filter((v) => v < lowFence || v > highFence);

  return { q1, median, q3, whiskerLow, whiskerHigh, outliers };
}

function drawAct3Boxplots() {
  if (!els.act3BoxplotSvg || !window.d3 || !act3MatrixState.rows.length) return;

  const d3 = window.d3;
  const svgNode = els.act3BoxplotSvg;
  const col = act3MatrixState.columns.includes(act3MatrixState.boxColumn)
    ? act3MatrixState.boxColumn
    : "monthly_spend";

  if (els.act3BoxColumnLabel) {
    els.act3BoxColumnLabel.textContent = act3ColLabel(col);
  }

  const colStats = [{ col, ...act3BoxStats(act3MatrixState.rows.map((r) => r[col])) }];
  const s = colStats[0];
  const farthestOutlier = s.outliers.length
    ? s.outliers.reduce((best, v) =>
      !Number.isFinite(best) || Math.abs(v - s.median) > Math.abs(best - s.median) ? v : best
    , NaN)
    : NaN;

  if (els.act3BoxLargestNormal) els.act3BoxLargestNormal.textContent = fmtNum(s.whiskerHigh, 0);
  if (els.act3BoxIqr) els.act3BoxIqr.textContent = fmtNum(s.q3 - s.q1, 0);
  if (els.act3BoxQ3) els.act3BoxQ3.textContent = fmtNum(s.q3, 0);
  if (els.act3BoxMedian) els.act3BoxMedian.textContent = fmtNum(s.median, 0);
  if (els.act3BoxQ1) els.act3BoxQ1.textContent = fmtNum(s.q1, 0);
  if (els.act3BoxSmallestNormal) els.act3BoxSmallestNormal.textContent = fmtNum(s.whiskerLow, 0);
  if (els.act3BoxOutlier) {
    if (!Number.isFinite(farthestOutlier)) {
      els.act3BoxOutlier.textContent = "none in sample";
    } else {
      els.act3BoxOutlier.textContent = fmtNum(farthestOutlier, 0);
    }
  }

  const allValues = colStats.flatMap((s) => [s.whiskerLow, s.whiskerHigh, ...s.outliers]).filter(Number.isFinite);
  if (!allValues.length) return;

  const w = Math.max(320, Math.floor(svgNode.clientWidth));
  const h = Math.max(220, Math.floor(svgNode.clientHeight));
  const margin = { top: 16, right: 16, bottom: 50, left: 48 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const minV = d3.min(allValues);
  const maxV = d3.max(allValues);
  const span = Math.max(1e-6, maxV - minV);
  const y = d3.scaleLinear().domain([minV - span * 0.06, maxV + span * 0.06]).nice().range([margin.top + innerH, margin.top]);
  const x = d3
    .scaleBand()
    .domain([col])
    .range([margin.left, margin.left + innerW])
    .paddingInner(0.2)
    .paddingOuter(0.34);

  y.ticks(6).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72, 102, 120, 0.1)")
      .attr("stroke-width", 0.8);
  });

  colStats.forEach((s) => {
    const cx = (x(s.col) || 0) + x.bandwidth() / 2;
    const boxW = Math.min(56, x.bandwidth() * 0.72);

    svg
      .append("line")
      .attr("x1", cx)
      .attr("x2", cx)
      .attr("y1", y(s.whiskerLow))
      .attr("y2", y(s.whiskerHigh))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.4);

    svg
      .append("line")
      .attr("x1", cx - boxW * 0.32)
      .attr("x2", cx + boxW * 0.32)
      .attr("y1", y(s.whiskerLow))
      .attr("y2", y(s.whiskerLow))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.4);

    svg
      .append("line")
      .attr("x1", cx - boxW * 0.32)
      .attr("x2", cx + boxW * 0.32)
      .attr("y1", y(s.whiskerHigh))
      .attr("y2", y(s.whiskerHigh))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.4);

    svg
      .append("rect")
      .attr("x", cx - boxW / 2)
      .attr("y", y(s.q3))
      .attr("width", boxW)
      .attr("height", Math.max(1, y(s.q1) - y(s.q3)))
      .attr("fill", "rgba(86, 180, 233, 0.34)")
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.2);

    svg
      .append("line")
      .attr("x1", cx - boxW / 2)
      .attr("x2", cx + boxW / 2)
      .attr("y1", y(s.median))
      .attr("y2", y(s.median))
      .attr("stroke", "#d55e00")
      .attr("stroke-width", 2);

    svg
      .append("g")
      .selectAll("circle")
      .data(s.outliers)
      .enter()
      .append("circle")
      .attr("cx", () => cx + (Math.random() - 0.5) * boxW * 0.28)
      .attr("cy", (v) => y(v))
      .attr("r", 2.05)
      .attr("fill", "rgba(0, 114, 178, 0.72)");

    const iqrX = cx - boxW / 2 - 10;
    svg
      .append("line")
      .attr("x1", iqrX)
      .attr("x2", iqrX)
      .attr("y1", y(s.q1))
      .attr("y2", y(s.q3))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.1);
    svg
      .append("line")
      .attr("x1", iqrX - 3.5)
      .attr("x2", iqrX + 3.5)
      .attr("y1", y(s.q1))
      .attr("y2", y(s.q1))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.1);
    svg
      .append("line")
      .attr("x1", iqrX - 3.5)
      .attr("x2", iqrX + 3.5)
      .attr("y1", y(s.q3))
      .attr("y2", y(s.q3))
      .attr("stroke", "#2f5a75")
      .attr("stroke-width", 1.1);
    svg
      .append("text")
      .attr("x", iqrX - 6)
      .attr("y", (y(s.q1) + y(s.q3)) / 2 + 3)
      .attr("text-anchor", "end")
      .attr("fill", "#2f5a75")
      .style("font-size", "9px")
      .style("font-weight", "700")
      .text("IQR");
  });

  const xAxis = d3
    .axisBottom(x)
    .tickFormat((col) => shortAct3ColName(col));
  const yAxis = d3.axisLeft(y).ticks(6).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);

  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "10px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gy.selectAll("path,line").attr("stroke", "#4a6678");
}

function renderAct3WideViews() {
  renderAct3WideTable();
  drawAct3Pairplot();
  drawAct3Boxplots();
}

function resampleAct3WideDataset() {
  act3MatrixState.version += 1;
  generateAct3WideDataset(220, act3MatrixState.version);
  renderAct3WideViews();
}

function initAct3Scene3() {
  if (!els.act3WideTableHead || !els.act3WideTableBody || !els.act3PairplotSvg) return;

  generateAct3WideDataset(220, act3MatrixState.version);
  act3MatrixState.hoveredUserId = "";
  renderAct3WideViews();

  if (!act3MatrixState.tableHoverBound) {
    els.act3WideTableBody.addEventListener("mouseover", (event) => {
      const tr = event.target.closest("tr[data-user-id]");
      if (!tr) return;
      const nextId = tr.dataset.userId || "";
      if (nextId === act3MatrixState.hoveredUserId) return;
      act3MatrixState.hoveredUserId = nextId;
      renderAct3WideTable();
      drawAct3Pairplot();
    });

    els.act3WideTableBody.addEventListener("mouseleave", () => {
      if (!act3MatrixState.hoveredUserId) return;
      act3MatrixState.hoveredUserId = "";
      renderAct3WideTable();
      drawAct3Pairplot();
    });

    act3MatrixState.tableHoverBound = true;
  }

  if (els.act3MatrixRefreshBtn && !act3MatrixState.matrixBtnBound) {
    els.act3MatrixRefreshBtn.addEventListener("click", () => {
      resampleAct3WideDataset();
    });
    act3MatrixState.matrixBtnBound = true;
  }
}

function initAct3Scene4() {
  if (!els.act3BoxplotSvg) return;

  if (els.act3BoxColumnSelect) {
    els.act3BoxColumnSelect.innerHTML = act3MatrixState.columns
      .map((col) => `<option value="${col}">${act3ColLabel(col)}</option>`)
      .join("");
    els.act3BoxColumnSelect.value = act3MatrixState.boxColumn;
  }

  drawAct3Boxplots();

  if (els.act3BoxColumnSelect && !act3MatrixState.boxSelectBound) {
    els.act3BoxColumnSelect.addEventListener("change", () => {
      act3MatrixState.boxColumn = els.act3BoxColumnSelect.value;
      drawAct3Boxplots();
    });
    act3MatrixState.boxSelectBound = true;
  }

  if (els.act3BoxRefreshBtn && !act3MatrixState.boxBtnBound) {
    els.act3BoxRefreshBtn.addEventListener("click", () => {
      resampleAct3WideDataset();
    });
    act3MatrixState.boxBtnBound = true;
  }
}

function fmtPct(value, digits = 2) {
  if (!Number.isFinite(value)) return "-";
  return `${fmtNum(value * 100, digits)}%`;
}

function fmtPp(value, digits = 2) {
  if (!Number.isFinite(value)) return "-";
  const sign = value > 0 ? "+" : "";
  return `${sign}${fmtNum(value * 100, digits)} pp`;
}

function updateAct4LiftDemoReadout() {
  if (!els.act4LiftDemoReadout) return;
  const lift = act4State.liftDemoTreatmentRate - act4State.liftDemoControlRate;
  els.act4LiftDemoReadout.textContent = fmtPp(lift, 1);
}

function updateAct4ObservedGapReadout() {
  if (!els.act4ObservedGapReadout) return;
  const gap = act4State.observedGapTreatmentRate - act4State.observedGapControlRate;
  els.act4ObservedGapReadout.textContent = fmtPp(gap, 1);
}

function getAct4CurveLabelLayout(controlX, treatmentX, controlPeakY, treatmentPeakY) {
  const crowded = Math.abs(controlX - treatmentX) < 118;
  const controlLabelY = crowded ? controlPeakY - 30 : controlPeakY - 7;
  const treatmentLabelY = crowded ? treatmentPeakY - 10 : treatmentPeakY - 7;
  const topLabelY = Math.min(controlLabelY, treatmentLabelY);
  const dragY = crowded ? topLabelY - 16 : treatmentPeakY - 24;
  return { controlLabelY, treatmentLabelY, dragY };
}

function drawAct4LiftDemo() {
  if (!els.act4LiftDemoSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4LiftDemoSvg;
  const w = Math.max(460, Math.floor(svgNode.clientWidth));
  const h = Math.max(250, Math.floor(svgNode.clientHeight));
  const margin = { top: 42, right: 18, bottom: 26, left: 42 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const domainMin = 4;
  const domainMax = 28;
  const x = d3.scaleLinear().domain([domainMin, domainMax]).range([margin.left, margin.left + innerW]);
  const controlRatePct = act4State.liftDemoControlRate * 100;
  const treatmentRatePct = act4State.liftDemoTreatmentRate * 100;
  const liftPp = treatmentRatePct - controlRatePct;
  const sigma = 2.05;
  const xs = d3.range(domainMin, domainMax + 0.001, 0.08);
  const controlPoints = xs.map((xv) => ({ x: xv, y: normalPdf(xv, controlRatePct, sigma) }));
  const treatmentPoints = xs.map((xv) => ({ x: xv, y: normalPdf(xv, treatmentRatePct, sigma) }));
  const maxDensity = Math.max(
    d3.max(controlPoints, (d) => d.y) || 0,
    d3.max(treatmentPoints, (d) => d.y) || 0
  );
  const y = d3.scaleLinear().domain([0, maxDensity * 1.18]).range([margin.top + innerH, margin.top + 16]);

  const plotBg = svg.append("g");
  plotBg
    .append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", innerW)
    .attr("height", innerH)
    .attr("rx", 10)
    .attr("fill", "#f7fbff")
    .attr("stroke", "#d7e5ef");

  x.ticks(8).forEach((tick) => {
    plotBg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top + 4)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72, 102, 120, 0.08)")
      .attr("stroke-width", 0.8);
  });
  y.ticks(4).forEach((tick) => {
    plotBg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72, 102, 120, 0.08)")
      .attr("stroke-width", 0.8);
  });

  const area = d3
    .area()
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y))
    .curve(d3.curveBasis);
  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  const controlG = svg.append("g");
  controlG
    .append("path")
    .datum(controlPoints)
    .attr("d", area)
    .attr("fill", "rgba(0,114,178,0.2)");
  controlG
    .append("path")
    .datum(controlPoints)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 2.1);

  const treatmentG = svg.append("g").style("cursor", "ew-resize");
  treatmentG
    .append("path")
    .datum(treatmentPoints)
    .attr("d", area)
    .attr("fill", "rgba(0,158,115,0.2)");
  const treatmentLine = treatmentG
    .append("path")
    .datum(treatmentPoints)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#009e73")
    .attr("stroke-width", 2.1);

  const controlX = x(controlRatePct);
  const treatmentX = x(treatmentRatePct);
  const controlPeakY = y(normalPdf(controlRatePct, controlRatePct, sigma));
  const treatmentPeakY = y(normalPdf(treatmentRatePct, treatmentRatePct, sigma));
  const { controlLabelY, treatmentLabelY, dragY } = getAct4CurveLabelLayout(
    controlX,
    treatmentX,
    controlPeakY,
    treatmentPeakY
  );

  svg
    .append("line")
    .attr("x1", controlX)
    .attr("x2", controlX)
    .attr("y1", margin.top + innerH)
    .attr("y2", controlPeakY + 2)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 3")
    .attr("opacity", 0.7);
  svg
    .append("line")
    .attr("x1", treatmentX)
    .attr("x2", treatmentX)
    .attr("y1", margin.top + innerH)
    .attr("y2", treatmentPeakY + 2)
    .attr("stroke", "#009e73")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 3")
    .attr("opacity", 0.7);

  const bracketY = margin.top + innerH - 12;
  const leftX = Math.min(controlX, treatmentX);
  const rightX = Math.max(controlX, treatmentX);
  const liftColor = "#d55e00";
  svg
    .append("line")
    .attr("x1", leftX)
    .attr("x2", rightX)
    .attr("y1", bracketY)
    .attr("y2", bracketY)
    .attr("stroke", liftColor)
    .attr("stroke-width", 2.4);
  svg
    .append("line")
    .attr("x1", leftX)
    .attr("x2", leftX)
    .attr("y1", bracketY - 6)
    .attr("y2", bracketY + 6)
    .attr("stroke", liftColor)
    .attr("stroke-width", 1.6);
  svg
    .append("line")
    .attr("x1", rightX)
    .attr("x2", rightX)
    .attr("y1", bracketY - 6)
    .attr("y2", bracketY + 6)
    .attr("stroke", liftColor)
    .attr("stroke-width", 1.6);
  svg
    .append("text")
    .attr("x", (leftX + rightX) / 2)
    .attr("y", bracketY - 8)
    .attr("text-anchor", "middle")
    .attr("fill", liftColor)
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`${liftPp >= 0 ? "+" : ""}${fmtNum(liftPp, 1)} pp`);

  svg
    .append("text")
    .attr("x", controlX)
    .attr("y", controlLabelY)
    .attr("text-anchor", "middle")
    .attr("fill", "#0072b2")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`Control ${fmtNum(controlRatePct, 1)}%`);

  svg
    .append("text")
    .attr("x", treatmentX)
    .attr("y", treatmentLabelY)
    .attr("text-anchor", "middle")
    .attr("fill", "#009e73")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`Treatment ${fmtNum(treatmentRatePct, 1)}%`);

  const handle = treatmentG
    .append("circle")
    .attr("cx", treatmentX)
    .attr("cy", treatmentPeakY)
    .attr("r", 6)
    .attr("fill", "#009e73")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.4);

  treatmentG
    .append("text")
    .attr("x", treatmentX)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "9px")
    .style("font-weight", "700")
    .text("drag");

  treatmentG
    .append("text")
    .attr("x", treatmentX - 26)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("←");

  treatmentG
    .append("text")
    .attr("x", treatmentX + 26)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("→");

  const xAxis = d3.axisBottom(x).ticks(7).tickFormat((v) => `${fmtNum(v, 0)}%`).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gx.select("path").attr("stroke-width", 1.1);
  const dragBehavior = d3
    .drag()
    .on("drag", (event) => {
      const [px] = d3.pointer(event, svg.node());
      const nextPct = clamp(x.invert(px), domainMin + 0.4, domainMax - 0.4);
      act4State.liftDemoTreatmentRate = nextPct / 100;
      updateAct4LiftDemoReadout();
      drawAct4LiftDemo();
    });

  treatmentG.call(dragBehavior);
}

function drawAct4ObservedGapDemo() {
  if (!els.act4ObservedGapSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4ObservedGapSvg;
  const w = Math.max(460, Math.floor(svgNode.clientWidth));
  const h = Math.max(250, Math.floor(svgNode.clientHeight));
  const margin = { top: 42, right: 18, bottom: 26, left: 42 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const observedControl = act4State.observedGapControlRate * 100;
  const observedTreatment = act4State.observedGapTreatmentRate * 100;
  const diffPp = observedTreatment - observedControl;

  updateAct4ObservedGapReadout();

  const domainMin = 4;
  const domainMax = 28;

  const x = d3.scaleLinear().domain([domainMin, domainMax]).range([margin.left, margin.left + innerW]);
  const sigma = 2.05;
  const xs = d3.range(domainMin, domainMax + 0.001, 0.08);
  const controlPoints = xs.map((xv) => ({ x: xv, y: normalPdf(xv, observedControl, sigma) }));
  const treatmentPoints = xs.map((xv) => ({ x: xv, y: normalPdf(xv, observedTreatment, sigma) }));
  const maxDensity = Math.max(
    d3.max(controlPoints, (d) => d.y) || 0,
    d3.max(treatmentPoints, (d) => d.y) || 0
  );
  const y = d3.scaleLinear().domain([0, maxDensity * 1.18]).range([margin.top + innerH, margin.top + 16]);

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const plotBg = svg.append("g");
  plotBg
    .append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", innerW)
    .attr("height", innerH)
    .attr("rx", 10)
    .attr("fill", "#f7fbff")
    .attr("stroke", "#d7e5ef");

  x.ticks(8).forEach((tick) => {
    plotBg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top + 4)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72, 102, 120, 0.08)")
      .attr("stroke-width", 0.8);
  });
  y.ticks(4).forEach((tick) => {
    plotBg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72, 102, 120, 0.08)")
      .attr("stroke-width", 0.8);
  });

  const area = d3
    .area()
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y))
    .curve(d3.curveBasis);
  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  const controlG = svg.append("g");
  controlG
    .append("path")
    .datum(controlPoints)
    .attr("d", area)
    .attr("fill", "rgba(0,114,178,0.2)");
  controlG
    .append("path")
    .datum(controlPoints)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 2.1);

  const treatmentG = svg.append("g").style("cursor", "ew-resize");
  treatmentG
    .append("path")
    .datum(treatmentPoints)
    .attr("d", area)
    .attr("fill", "rgba(0,158,115,0.2)");
  treatmentG
    .append("path")
    .datum(treatmentPoints)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#009e73")
    .attr("stroke-width", 2.1);

  const controlX = x(observedControl);
  const treatmentX = x(observedTreatment);
  const controlPeakY = y(normalPdf(observedControl, observedControl, sigma));
  const treatmentPeakY = y(normalPdf(observedTreatment, observedTreatment, sigma));
  const { controlLabelY, treatmentLabelY, dragY } = getAct4CurveLabelLayout(
    controlX,
    treatmentX,
    controlPeakY,
    treatmentPeakY
  );

  svg
    .append("line")
    .attr("x1", controlX)
    .attr("x2", controlX)
    .attr("y1", margin.top + innerH)
    .attr("y2", controlPeakY + 2)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 3")
    .attr("opacity", 0.7);
  svg
    .append("line")
    .attr("x1", treatmentX)
    .attr("x2", treatmentX)
    .attr("y1", margin.top + innerH)
    .attr("y2", treatmentPeakY + 2)
    .attr("stroke", "#009e73")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 3")
    .attr("opacity", 0.7);

  const bracketY = margin.top + innerH - 12;
  const leftX = Math.min(controlX, treatmentX);
  const rightX = Math.max(controlX, treatmentX);
  const liftColor = "#d55e00";
  svg
    .append("line")
    .attr("x1", leftX)
    .attr("x2", rightX)
    .attr("y1", bracketY)
    .attr("y2", bracketY)
    .attr("stroke", liftColor)
    .attr("stroke-width", 2.4);
  svg
    .append("line")
    .attr("x1", leftX)
    .attr("x2", leftX)
    .attr("y1", bracketY - 6)
    .attr("y2", bracketY + 6)
    .attr("stroke", liftColor)
    .attr("stroke-width", 1.6);
  svg
    .append("line")
    .attr("x1", rightX)
    .attr("x2", rightX)
    .attr("y1", bracketY - 6)
    .attr("y2", bracketY + 6)
    .attr("stroke", liftColor)
    .attr("stroke-width", 1.6);
  svg
    .append("text")
    .attr("x", (leftX + rightX) / 2)
    .attr("y", bracketY - 8)
    .attr("text-anchor", "middle")
    .attr("fill", liftColor)
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`${diffPp >= 0 ? "+" : ""}${fmtNum(diffPp, 1)} pp`);

  svg
    .append("text")
    .attr("x", controlX)
    .attr("y", controlLabelY)
    .attr("text-anchor", "middle")
    .attr("fill", "#0072b2")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`Observed A ${fmtNum(observedControl, 1)}%`);

  svg
    .append("text")
    .attr("x", treatmentX)
    .attr("y", treatmentLabelY)
    .attr("text-anchor", "middle")
    .attr("fill", "#009e73")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`Observed B ${fmtNum(observedTreatment, 1)}%`);

  treatmentG
    .append("circle")
    .attr("cx", treatmentX)
    .attr("cy", treatmentPeakY)
    .attr("r", 6)
    .attr("fill", "#009e73")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.4);

  treatmentG
    .append("text")
    .attr("x", treatmentX)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "9px")
    .style("font-weight", "700")
    .text("drag");

  treatmentG
    .append("text")
    .attr("x", treatmentX - 26)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("←");

  treatmentG
    .append("text")
    .attr("x", treatmentX + 26)
    .attr("y", dragY)
    .attr("text-anchor", "middle")
    .attr("fill", "#2f5a75")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("→");

  const xAxis = d3.axisBottom(x).ticks(7).tickFormat((v) => `${fmtNum(v, 0)}%`).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  gx.select("path").attr("stroke-width", 1.1);

  const dragBehavior = d3
    .drag()
    .on("drag", (event) => {
      const [px] = d3.pointer(event, svg.node());
      const nextPct = clamp(x.invert(px), domainMin + 0.4, domainMax - 0.4);
      act4State.observedGapTreatmentRate = nextPct / 100;
      updateAct4ObservedGapReadout();
      drawAct4ObservedGapDemo();
    });

  treatmentG.call(dragBehavior);
}

function syncAct4ConceptControls() {
  if (els.act4CiNRange) els.act4CiNRange.value = String(act4State.ciDemoN);
  if (els.act4CiLiftRange) els.act4CiLiftRange.value = String(act4State.ciDemoLiftPp);
  if (els.act4ZDiffRange) els.act4ZDiffRange.value = String(act4State.zDemoDiffPp);
  if (els.act4ZSeRange) els.act4ZSeRange.value = String(act4State.zDemoSePp);
  if (els.act4PZRange) els.act4PZRange.value = String(act4State.pDemoZ);

  if (els.act4CiNVal) els.act4CiNVal.textContent = fmtInt(act4State.ciDemoN);
  if (els.act4CiLiftVal) {
    const sign = act4State.ciDemoLiftPp > 0 ? "+" : "";
    els.act4CiLiftVal.textContent = `${sign}${fmtNum(act4State.ciDemoLiftPp, 1)} pp`;
  }
  if (els.act4ZDiffVal) {
    const sign = act4State.zDemoDiffPp > 0 ? "+" : "";
    els.act4ZDiffVal.textContent = `${sign}${fmtNum(act4State.zDemoDiffPp, 1)} pp`;
  }
  if (els.act4ZSeVal) {
    els.act4ZSeVal.textContent = `${fmtNum(act4State.zDemoSePp, 2)} pp`;
  }
  if (els.act4PZVal) els.act4PZVal.textContent = fmtNum(act4State.pDemoZ, 2);
}

function drawAct4CiChartInto(svgNode, { liftPp, ciLo, ciHi, xLabel = "Lift in conversion rate (treatment - control, pp)" } = {}) {
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 20, right: 20, bottom: 42, left: 28 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const bounded = (value, min, max) => Math.max(min, Math.min(max, value));

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const lo = Math.min(ciLo, 0, liftPp) - 0.8;
  const hi = Math.max(ciHi, 0, liftPp) + 0.8;
  const x = d3.scaleLinear().domain([lo, hi]).range([margin.left, margin.left + innerW]);
  const yMid = margin.top + innerH * 0.58;

  x.ticks(7).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72,102,120,0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#4a6678")
    .attr("stroke-width", 1.1)
    .attr("stroke-dasharray", "4 4");

  svg
    .append("line")
    .attr("x1", x(ciLo))
    .attr("x2", x(ciHi))
    .attr("y1", yMid)
    .attr("y2", yMid)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 3.2)
    .attr("stroke-linecap", "round");

  [ciLo, ciHi].forEach((edge) => {
    svg
      .append("line")
      .attr("x1", x(edge))
      .attr("x2", x(edge))
      .attr("y1", yMid - 10)
      .attr("y2", yMid + 10)
      .attr("stroke", "#0072b2")
      .attr("stroke-width", 2);
  });

  svg
    .append("circle")
    .attr("cx", x(liftPp))
    .attr("cy", yMid)
    .attr("r", 5.3)
    .attr("fill", "#d55e00")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.2);

  const ciMid = (ciLo + ciHi) / 2;
  svg
    .append("text")
    .attr("x", bounded(x(ciMid), margin.left + 22, margin.left + innerW - 22))
    .attr("y", yMid - 14)
    .attr("text-anchor", "middle")
    .attr("fill", "#0072b2")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("95% CI");

  svg
    .append("text")
    .attr("x", bounded(x(liftPp), margin.left + 26, margin.left + innerW - 26))
    .attr("y", yMid + 18)
    .attr("text-anchor", "middle")
    .attr("fill", "#d55e00")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("observed lift");

  svg
    .append("text")
    .attr("x", bounded(x(0) + 6, margin.left + 8, margin.left + innerW - 76))
    .attr("y", margin.top + 12)
    .attr("text-anchor", "start")
    .attr("fill", "#4a6678")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("0 pp (no effect)");

  const xAxis = d3.axisBottom(x).ticks(7).tickFormat((v) => `${fmtNum(v, 1)} pp`).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text(xLabel);
}

function drawAct4CiConceptDemo() {
  if (!els.act4CiConceptSvg || !window.d3) return;
  const baseline = 0.12;
  const n = Math.max(50, Math.round(act4State.ciDemoN));
  const liftPp = act4State.ciDemoLiftPp;
  const sePp = Math.sqrt((2 * baseline * (1 - baseline)) / n) * 100;
  const ciLo = liftPp - 1.96 * sePp;
  const ciHi = liftPp + 1.96 * sePp;
  const signedPp = (v) => `${v > 0 ? "+" : ""}${fmtNum(v, 2)} pp`;

  if (els.act4CiConceptText) {
    let verdict = "CI crosses 0, so no-effect is still plausible.";
    if (ciLo <= 0 && ciHi >= 0) {
      verdict = "CI crosses 0, so no-effect is still plausible.";
    } else if (ciLo > 0) {
      verdict = "CI stays above 0, so the data supports a positive effect.";
    } else {
      verdict = "CI stays below 0, so the data supports a negative effect.";
    }
    els.act4CiConceptText.innerHTML =
      `Orange dot = observed lift. Blue bar = 95% CI. Dashed line = 0 pp (no effect). ` +
      `Current 95% CI: <strong>[${signedPp(ciLo)}, ${signedPp(ciHi)}]</strong>. ${verdict}`;
  }

  drawAct4CiChartInto(els.act4CiConceptSvg, { liftPp, ciLo, ciHi });
}

function drawAct4ZConceptDemo() {
  if (!els.act4ZConceptSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4ZConceptSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 20, bottom: 40, left: 30 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const diffPp = act4State.zDemoDiffPp;
  const sePp = Math.max(0.05, act4State.zDemoSePp);
  const zRaw = diffPp / sePp;
  const zPlot = clamp(zRaw, -3.8, 3.8);
  const absZ = Math.abs(zRaw);

  let interpretation = "Very close to 0: this gap looks very compatible with random noise.";
  if (absZ >= 2) {
    interpretation = "Far from 0: this gap looks hard to explain by noise alone.";
  } else if (absZ >= 1) {
    interpretation = "Noticeably away from 0: maybe signal, maybe still noise.";
  }

  const direction =
    zRaw > 0 ? "positive (treatment above control)" : zRaw < 0 ? "negative (treatment below control)" : "neutral";

  if (els.act4ZConceptText) {
    els.act4ZConceptText.innerHTML =
      `z = <strong>(${fmtNum(diffPp, 2)} - 0) / ${fmtNum(sePp, 2)} = ${fmtNum(zRaw, 2)}</strong>, ` +
      `${direction}. The orange marker shows where that observed z lands on the no-effect reference curve. ${interpretation}`;
  }

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain([-4, 4]).range([margin.left, margin.left + innerW]);
  const yMax = normalPdf(0, 0, 1);
  const y = d3.scaleLinear().domain([0, yMax * 1.2]).range([margin.top + innerH, margin.top + 4]);

  const xs = d3.range(-4, 4.001, 0.04);
  const points = xs.map((xv) => ({ x: xv, y: normalPdf(xv, 0, 1) }));
  const area = d3
    .area()
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y))
    .curve(d3.curveBasis);
  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  svg
    .append("path")
    .datum(points)
    .attr("d", area)
    .attr("fill", "rgba(72,102,120,0.08)");

  svg
    .append("path")
    .datum(points)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 2);

  svg
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", y(0))
    .attr("y2", y(normalPdf(0, 0, 1)))
    .attr("stroke", "#4a6678")
    .attr("stroke-width", 1.1)
    .attr("stroke-dasharray", "4 4");

  svg
    .append("line")
    .attr("x1", x(zPlot))
    .attr("x2", x(zPlot))
    .attr("y1", y(0))
    .attr("y2", y(normalPdf(zPlot, 0, 1)))
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 1.8);

  svg
    .append("circle")
    .attr("cx", x(zPlot))
    .attr("cy", y(normalPdf(zPlot, 0, 1)))
    .attr("r", 4.5)
    .attr("fill", "#d55e00")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.1);

  const bounded = (value, min, max) => Math.max(min, Math.min(max, value));
  svg
    .append("text")
    .attr("x", bounded(x(zPlot), margin.left + 28, margin.left + innerW - 28))
    .attr("y", y(normalPdf(zPlot, 0, 1)) - 9)
    .attr("text-anchor", "middle")
    .attr("fill", "#d55e00")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`z = ${fmtNum(zRaw, 2)}`);

  svg
    .append("text")
    .attr("x", x(0) + 6)
    .attr("y", margin.top + 12)
    .attr("text-anchor", "start")
    .attr("fill", "#4a6678")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("0 (no effect)");

  const xAxis = d3.axisBottom(x).ticks(9).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text("Standardized gap (number of standard errors from 0)");
}

function drawAct4PConceptDemo() {
  if (!els.act4PConceptSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4PConceptSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 20, bottom: 38, left: 30 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const zObs = Math.max(0.01, act4State.pDemoZ);
  const pTwo = 2 * (1 - normalCdf(zObs));
  if (els.act4PConceptPVal) els.act4PConceptPVal.textContent = fmtNum(pTwo, 4);
  if (els.act4PConceptText) {
    els.act4PConceptText.innerHTML =
      `Observed z = <strong>${fmtNum(zObs, 2)}</strong> standard errors from 0 (under no effect). ` +
      `The orange tails are outcomes at least this extreme under the null. Two-sided p-value: <strong>${fmtNum(pTwo, 4)}</strong>.`;
  }

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const x = d3.scaleLinear().domain([-4, 4]).range([margin.left, margin.left + innerW]);
  const yMax = normalPdf(0, 0, 1);
  const y = d3.scaleLinear().domain([0, yMax * 1.18]).range([margin.top + innerH, margin.top + 4]);

  const xs = d3.range(-4, 4.001, 0.04);
  const points = xs.map((xv) => ({ x: xv, y: normalPdf(xv, 0, 1) }));

  const area = d3
    .area()
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y))
    .curve(d3.curveBasis);
  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  const tailPoints = points.filter((p) => Math.abs(p.x) >= zObs);
  const leftTail = tailPoints.filter((p) => p.x <= -zObs);
  const rightTail = tailPoints.filter((p) => p.x >= zObs);

  svg
    .append("path")
    .datum(points)
    .attr("d", area)
    .attr("fill", "rgba(72,102,120,0.08)");
  if (leftTail.length) {
    svg
      .append("path")
      .datum(leftTail)
      .attr("d", area)
      .attr("fill", "rgba(213,94,0,0.24)");
  }
  if (rightTail.length) {
    svg
      .append("path")
      .datum(rightTail)
      .attr("d", area)
      .attr("fill", "rgba(213,94,0,0.24)");
  }
  svg
    .append("path")
    .datum(points)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#2f5a75")
    .attr("stroke-width", 2);

  [-zObs, zObs].forEach((zv) => {
    svg
      .append("line")
      .attr("x1", x(zv))
      .attr("x2", x(zv))
      .attr("y1", y(0))
      .attr("y2", y(normalPdf(zv, 0, 1)))
      .attr("stroke", "#d55e00")
      .attr("stroke-width", 1.6);
  });

  svg
    .append("text")
    .attr("x", x(zObs))
    .attr("y", y(normalPdf(zObs, 0, 1)) - 8)
    .attr("text-anchor", "middle")
    .attr("fill", "#d55e00")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text(`±${fmtNum(zObs, 2)}`);

  const xAxis = d3.axisBottom(x).ticks(9).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
}

function syncAct4NullControls() {
  if (els.act4NullNRange) els.act4NullNRange.value = String(act4State.nullNPerGroup);
  if (els.act4NullRunsRange) els.act4NullRunsRange.value = String(act4State.nullRuns);
  if (els.act4NullNVal) els.act4NullNVal.textContent = fmtInt(act4State.nullNPerGroup);
  if (els.act4NullRunsVal) els.act4NullRunsVal.textContent = fmtInt(act4State.nullRuns);
}

function simulateAct4NullWorld() {
  const n = Math.max(30, Math.round(act4State.nullNPerGroup));
  const runs = Math.max(20, Math.round(act4State.nullRuns));
  const base = 0.12;
  const pValues = [];

  for (let i = 0; i < runs; i += 1) {
    const xC = binomialSample(n, base);
    const xT = binomialSample(n, base);
    const rC = xC / n;
    const rT = xT / n;
    const diff = rT - rC;
    const pooled = (xC + xT) / (2 * n);
    const seP = Math.sqrt(Math.max(1e-12, pooled * (1 - pooled) * (2 / n)));
    const z = diff / seP;
    const pValue = Math.max(0, Math.min(1, 2 * (1 - normalCdf(Math.abs(z)))));
    pValues.push(pValue);
  }

  act4State.nullPValues = pValues;
}

function drawAct4NullPChart() {
  if (!els.act4NullPSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4NullPSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 16, bottom: 38, left: 32 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const values = act4State.nullPValues || [];
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  if (!values.length) {
    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "#567384")
      .style("font-size", "11px")
      .text("No simulation yet.");
    return;
  }

  const bins = d3
    .bin()
    .domain([0, 1])
    .thresholds(d3.range(0, 1.0001, 0.05))(values);

  const x = d3.scaleLinear().domain([0, 1]).range([margin.left, margin.left + innerW]);
  const y = d3
    .scaleLinear()
    .domain([0, (d3.max(bins, (b) => b.length) || 1) * 1.15])
    .range([margin.top + innerH, margin.top]);

  y.ticks(4).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("rect.bin")
    .data(bins)
    .enter()
    .append("rect")
    .attr("class", "bin")
    .attr("x", (d) => x(d.x0) + 0.5)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr("height", (d) => Math.max(0, y(0) - y(d.length)))
    .attr("fill", (d) => (d.x1 <= 0.05 ? "rgba(213,94,0,0.56)" : "rgba(0,114,178,0.34)"))
    .attr("stroke", (d) => (d.x1 <= 0.05 ? "#d55e00" : "rgba(0,114,178,0.55)"))
    .attr("stroke-width", 0.7);

  svg
    .append("line")
    .attr("x1", x(0.05))
    .attr("x2", x(0.05))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 4");

  svg
    .append("text")
    .attr("x", x(0.05) + 4)
    .attr("y", margin.top + 11)
    .attr("text-anchor", "start")
    .attr("fill", "#d55e00")
    .style("font-size", "9px")
    .style("font-weight", "700")
    .text("p = 0.05 cutoff");

  const xAxis = d3.axisBottom(x).ticks(6).tickFormat((v) => fmtNum(v, 2)).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(4).tickFormat((v) => fmtNum(v, 0)).tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");
}

function runAct4NullSimulation() {
  simulateAct4NullWorld();
  drawAct4NullPChart();

  const runs = act4State.nullPValues.length;
  const falsePositives = act4State.nullPValues.filter((p) => p < 0.05).length;
  const rate = runs ? falsePositives / runs : 0;
  if (els.act4NullSummary) {
    els.act4NullSummary.innerHTML =
      `Under true no effect, <strong>${falsePositives}/${runs}</strong> runs ` +
      `(${fmtNum(rate * 100, 1)}%) still produced p &lt; 0.05. ` +
      `Those are spurious wins: rare, but expected to happen sometimes.`;
  }
}

function syncAct4Controls() {
  if (els.act4NRange) els.act4NRange.value = String(act4State.nPerGroup);
  if (els.act4BaseRange) els.act4BaseRange.value = String(act4State.baseRate * 100);
  if (els.act4LiftRange) els.act4LiftRange.value = String(act4State.expectedLift * 100);

  if (els.act4NVal) els.act4NVal.textContent = fmtInt(act4State.nPerGroup);
  if (els.act4BaseVal) els.act4BaseVal.textContent = fmtPct(act4State.baseRate, 1);
  if (els.act4LiftVal) {
    const sign = act4State.expectedLift > 0 ? "+" : "";
    els.act4LiftVal.textContent = `${sign}${fmtNum(act4State.expectedLift * 100, 1)} pp`;
  }
  updateAct4SetupSummary();
}

function drawAct4InferenceChart() {
  if (!els.act4CiSvg || !window.d3 || !act4State.last) return;
  const d3 = window.d3;
  const m = act4State.last;

  const svgNode = els.act4CiSvg;
  const w = Math.max(340, Math.floor(svgNode.clientWidth));
  const h = Math.max(190, Math.floor(svgNode.clientHeight));
  const margin = { top: 20, right: 16, bottom: 44, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const lo = Math.min(m.ciLo, 0, m.diff) - 0.006;
  const hi = Math.max(m.ciHi, 0, m.diff) + 0.006;
  const x = d3.scaleLinear().domain([lo * 100, hi * 100]).range([margin.left, margin.left + innerW]);
  const yMid = margin.top + innerH * 0.56;

  x.ticks(7).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72, 102, 120, 0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "#4a6678")
    .attr("stroke-width", 1.1)
    .attr("stroke-dasharray", "4 4");

  svg
    .append("line")
    .attr("x1", x(m.ciLo * 100))
    .attr("x2", x(m.ciHi * 100))
    .attr("y1", yMid)
    .attr("y2", yMid)
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 3.1)
    .attr("stroke-linecap", "round");

  [m.ciLo, m.ciHi].forEach((edge) => {
    svg
      .append("line")
      .attr("x1", x(edge * 100))
      .attr("x2", x(edge * 100))
      .attr("y1", yMid - 9)
      .attr("y2", yMid + 9)
      .attr("stroke", "#0072b2")
      .attr("stroke-width", 2);
  });

  svg
    .append("circle")
    .attr("cx", x(m.diff * 100))
    .attr("cy", yMid)
    .attr("r", 5.1)
    .attr("fill", "#d55e00")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.2);

  const xAxis = d3.axisBottom(x).ticks(7).tickFormat((v) => `${fmtNum(v, 1)} pp`).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 6)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text("Observed lift in conversion rate (treatment - control)");
}

function updateAct4SetupSummary() {
  const n = Math.max(30, Math.round(act4State.nPerGroup));
  const base = clamp(act4State.baseRate, 0.001, 0.95);
  const treatTrue = clamp(base + act4State.expectedLift, 0.001, 0.95);
  const trueLift = treatTrue - base;
  const se = Math.sqrt((base * (1 - base)) / n + (treatTrue * (1 - treatTrue)) / n);
  const ciWidth = 2 * 1.96 * se;
  const expectedZ = trueLift / Math.max(1e-12, se);

  if (els.act4ExpectedSe) els.act4ExpectedSe.textContent = fmtPp(se, 2);
  if (els.act4ExpectedWidth) els.act4ExpectedWidth.textContent = fmtPp(ciWidth, 2);

  if (els.act4SetupHint) {
    let signalText = "single runs will often look noisy";
    if (Math.abs(expectedZ) >= 2) {
      signalText = "single runs should often show a clear directional signal";
    } else if (Math.abs(expectedZ) >= 1) {
      signalText = "single runs may show signal, but noise still matters";
    }
    els.act4SetupHint.textContent =
      `Given this setup, the true lift is ${fmtPp(trueLift, 1)} and expected z is about ${fmtNum(expectedZ, 2)}. ` +
      `Translation: ${signalText}.`;
  }
}

function simulateAct4Experiment() {
  const n = Math.max(30, Math.round(act4State.nPerGroup));
  const base = clamp(act4State.baseRate, 0.001, 0.95);
  const treatTrue = clamp(base + act4State.expectedLift, 0.001, 0.95);

  const xC = binomialSample(n, base);
  const xT = binomialSample(n, treatTrue);
  const rC = xC / n;
  const rT = xT / n;
  const diff = rT - rC;

  const se = Math.sqrt((rC * (1 - rC)) / n + (rT * (1 - rT)) / n);
  const ciLo = diff - 1.96 * se;
  const ciHi = diff + 1.96 * se;

  const pooled = (xC + xT) / (2 * n);
  const seP = Math.sqrt(Math.max(1e-12, pooled * (1 - pooled) * (2 / n)));
  const z = diff / seP;
  const pValue = Math.max(0, Math.min(1, 2 * (1 - normalCdf(Math.abs(z)))));

  let verdict = "Inconclusive";
  let detail = "Uncertainty still includes the possibility of no real effect. Keep testing.";
  if (pValue < 0.05 && ciLo > 0) {
    verdict = "Evidence of lift";
    detail = "Treatment beats control with statistical support. Supervisor can smile responsibly.";
  } else if (pValue < 0.05 && ciHi < 0) {
    verdict = "Evidence of harm";
    detail = "Treatment underperforms. Ship this and your boss will ask hard questions.";
  }

  return { n, xC, xT, rC, rT, diff, ciLo, ciHi, pValue, verdict, detail };
}

function pushAct4HistoryEntry(result) {
  act4State.history.push({
    diff: result.diff,
    pValue: result.pValue,
    verdict: result.verdict,
    ciLo: result.ciLo,
    ciHi: result.ciHi,
  });
  if (act4State.history.length > 350) {
    act4State.history.splice(0, act4State.history.length - 350);
  }
}

function drawAct4HistoryChart() {
  if (!els.act4HistorySvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act4HistorySvg;
  const w = Math.max(340, Math.floor(svgNode.clientWidth));
  const h = Math.max(150, Math.floor(svgNode.clientHeight));
  const margin = { top: 16, right: 16, bottom: 34, left: 36 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const hist = act4State.history;
  if (!hist.length) {
    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "#567384")
      .style("font-size", "11px")
      .text("No runs yet. Click Run Experiment or Run 25 Experiments.");
    return;
  }

  const points = hist.map((row, idx) => ({
    run: idx + 1,
    liftPp: row.diff * 100,
    verdict: row.verdict,
  }));

  const yMinRaw = d3.min(points, (d) => d.liftPp) ?? -1;
  const yMaxRaw = d3.max(points, (d) => d.liftPp) ?? 1;
  const yPad = Math.max(0.35, (yMaxRaw - yMinRaw) * 0.2);
  const y = d3
    .scaleLinear()
    .domain([Math.min(-0.5, yMinRaw - yPad), Math.max(0.5, yMaxRaw + yPad)])
    .range([margin.top + innerH, margin.top]);
  const x = d3
    .scaleLinear()
    .domain([1, Math.max(2, points.length)])
    .range([margin.left, margin.left + innerW]);

  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .append("line")
    .attr("x1", margin.left)
    .attr("x2", margin.left + innerW)
    .attr("y1", y(0))
    .attr("y2", y(0))
    .attr("stroke", "#4a6678")
    .attr("stroke-width", 1.05)
    .attr("stroke-dasharray", "4 4");

  const line = d3
    .line()
    .x((d) => x(d.run))
    .y((d) => y(d.liftPp));
  svg
    .append("path")
    .datum(points)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "rgba(47,90,117,0.35)")
    .attr("stroke-width", 1.3);

  const verdictColor = (verdict) => {
    if (verdict === "Evidence of lift") return "#009e73";
    if (verdict === "Evidence of harm") return "#d55e00";
    return "#0072b2";
  };

  svg
    .selectAll("circle.run-point")
    .data(points)
    .enter()
    .append("circle")
    .attr("class", "run-point")
    .attr("cx", (d) => x(d.run))
    .attr("cy", (d) => y(d.liftPp))
    .attr("r", (d, i) => (i === points.length - 1 ? 4.6 : 3.2))
    .attr("fill", (d) => verdictColor(d.verdict))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.1);

  const tickEvery = Math.max(1, Math.ceil(points.length / 6));
  const tickValues = [];
  for (let run = 1; run <= points.length; run += tickEvery) tickValues.push(run);
  if (tickValues[tickValues.length - 1] !== points.length) tickValues.push(points.length);
  const xAxis = d3.axisBottom(x).tickValues(tickValues).tickFormat((v) => fmtNum(v, 0)).tickSizeOuter(0);
  const yAxis = d3
    .axisLeft(y)
    .ticks(5)
    .tickFormat((v) => `${fmtNum(v, 1)} pp`)
    .tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 5)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text("Experiment run number");
}

function updateAct4HistoryPanel() {
  const history = act4State.history;
  const total = history.length;

  if (els.act4RunCount) els.act4RunCount.textContent = fmtInt(total);

  if (!total) {
    if (els.act4LiftEvidenceRate) els.act4LiftEvidenceRate.textContent = "-";
    if (els.act4InconclusiveRate) els.act4InconclusiveRate.textContent = "-";
    if (els.act4AvgObservedLift) els.act4AvgObservedLift.textContent = "-";
    if (els.act4HistoryHint) {
      els.act4HistoryHint.textContent = "Each dot is one run. Green = lift, orange = harm, blue = inconclusive.";
    }
    drawAct4HistoryChart();
    return;
  }

  const liftCount = history.filter((row) => row.verdict === "Evidence of lift").length;
  const inconclusiveCount = history.filter((row) => row.verdict === "Inconclusive").length;
  const avgDiff = history.reduce((sum, row) => sum + row.diff, 0) / total;
  const latest = history[history.length - 1];
  const latestRun = total;

  if (els.act4LiftEvidenceRate) {
    els.act4LiftEvidenceRate.textContent = `${fmtNum((liftCount / total) * 100, 0)}% (${liftCount}/${total})`;
  }
  if (els.act4InconclusiveRate) {
    els.act4InconclusiveRate.textContent = `${fmtNum((inconclusiveCount / total) * 100, 0)}% (${inconclusiveCount}/${total})`;
  }
  if (els.act4AvgObservedLift) {
    els.act4AvgObservedLift.textContent = fmtPp(avgDiff, 2);
  }
  if (els.act4HistoryHint) {
    els.act4HistoryHint.textContent =
      `Latest run #${latestRun}: ${fmtPp(latest.diff, 2)}, p=${fmtNum(latest.pValue, 4)}, ${latest.verdict}.`;
  }

  drawAct4HistoryChart();
}

function applyAct4ExperimentResult(result, { recordHistory = true } = {}) {
  act4State.last = result;
  act4State.observedGapControlRate = result.rC;
  act4State.observedGapTreatmentRate = result.rT;

  if (els.act4ControlRate) els.act4ControlRate.textContent = fmtPct(result.rC, 2);
  if (els.act4TreatmentRate) els.act4TreatmentRate.textContent = fmtPct(result.rT, 2);
  if (els.act4ObservedLift) els.act4ObservedLift.textContent = fmtPp(result.diff, 2);
  if (els.act4CiText) els.act4CiText.textContent = `[${fmtPp(result.ciLo, 2)}, ${fmtPp(result.ciHi, 2)}]`;
  if (els.act4PValue) els.act4PValue.textContent = fmtNum(result.pValue, 4);
  if (els.act4Verdict) els.act4Verdict.textContent = result.verdict;
  if (els.act4DecisionText) els.act4DecisionText.textContent = result.detail;

  if (recordHistory) {
    pushAct4HistoryEntry(result);
  }
  updateAct4HistoryPanel();

  drawAct4ObservedGapDemo();
  drawAct4InferenceChart();
}

function runAct4Experiment() {
  const result = simulateAct4Experiment();
  applyAct4ExperimentResult(result, { recordHistory: true });
}

function runAct4ExperimentBatch(batchSize = 25) {
  const size = Math.max(1, Math.round(batchSize));
  let latest = null;
  for (let i = 0; i < size; i += 1) {
    latest = simulateAct4Experiment();
    pushAct4HistoryEntry(latest);
  }
  if (!latest) return;
  applyAct4ExperimentResult(latest, { recordHistory: false });
  if (els.act4DecisionText) {
    els.act4DecisionText.textContent =
      `Batch complete (${size} runs). Last run says: ${latest.verdict}. Check Run History for variability.`;
  }
}

function resetAct4History() {
  act4State.history = [];
  updateAct4HistoryPanel();
  if (els.act4DecisionText) {
    els.act4DecisionText.textContent = "History cleared. Run fresh experiments to rebuild the evidence trail.";
  }
}

function initAct4Scene() {
  if (!els.act4CiSvg) return;

  updateAct4LiftDemoReadout();
  drawAct4LiftDemo();
  drawAct4ObservedGapDemo();
  syncAct4ConceptControls();
  drawAct4CiConceptDemo();
  drawAct4ZConceptDemo();
  drawAct4PConceptDemo();
  syncAct4NullControls();
  runAct4NullSimulation();
  syncAct4Controls();
  updateAct4HistoryPanel();
  runAct4Experiment();

  if (els.act4CiNRange) {
    els.act4CiNRange.addEventListener("input", () => {
      act4State.ciDemoN = Number(els.act4CiNRange.value);
      syncAct4ConceptControls();
      drawAct4CiConceptDemo();
    });
  }
  if (els.act4CiLiftRange) {
    els.act4CiLiftRange.addEventListener("input", () => {
      act4State.ciDemoLiftPp = Number(els.act4CiLiftRange.value);
      syncAct4ConceptControls();
      drawAct4CiConceptDemo();
    });
  }
  if (els.act4ZDiffRange) {
    els.act4ZDiffRange.addEventListener("input", () => {
      act4State.zDemoDiffPp = Number(els.act4ZDiffRange.value);
      syncAct4ConceptControls();
      drawAct4ZConceptDemo();
    });
  }
  if (els.act4ZSeRange) {
    els.act4ZSeRange.addEventListener("input", () => {
      act4State.zDemoSePp = Number(els.act4ZSeRange.value);
      syncAct4ConceptControls();
      drawAct4ZConceptDemo();
    });
  }
  if (els.act4PZRange) {
    els.act4PZRange.addEventListener("input", () => {
      act4State.pDemoZ = Number(els.act4PZRange.value);
      syncAct4ConceptControls();
      drawAct4PConceptDemo();
    });
  }
  if (els.act4NullNRange) {
    els.act4NullNRange.addEventListener("input", () => {
      act4State.nullNPerGroup = Number(els.act4NullNRange.value);
      syncAct4NullControls();
      runAct4NullSimulation();
    });
  }
  if (els.act4NullRunsRange) {
    els.act4NullRunsRange.addEventListener("input", () => {
      act4State.nullRuns = Number(els.act4NullRunsRange.value);
      syncAct4NullControls();
      runAct4NullSimulation();
    });
  }
  if (els.act4NullSimBtn) {
    els.act4NullSimBtn.addEventListener("click", () => {
      runAct4NullSimulation();
    });
  }

  if (els.act4NRange) {
    els.act4NRange.addEventListener("input", () => {
      act4State.nPerGroup = Number(els.act4NRange.value);
      syncAct4Controls();
    });
  }
  if (els.act4BaseRange) {
    els.act4BaseRange.addEventListener("input", () => {
      act4State.baseRate = Number(els.act4BaseRange.value) / 100;
      syncAct4Controls();
    });
  }
  if (els.act4LiftRange) {
    els.act4LiftRange.addEventListener("input", () => {
      act4State.expectedLift = Number(els.act4LiftRange.value) / 100;
      syncAct4Controls();
    });
  }
  if (els.act4RunTestBtn) {
    els.act4RunTestBtn.addEventListener("click", () => {
      runAct4Experiment();
    });
  }
  if (els.act4RunBatchBtn) {
    els.act4RunBatchBtn.addEventListener("click", () => {
      runAct4ExperimentBatch(25);
    });
  }
  if (els.act4ResetHistoryBtn) {
    els.act4ResetHistoryBtn.addEventListener("click", () => {
      resetAct4History();
    });
  }
}

function syncAct5Controls() {
  if (els.act5NRange) els.act5NRange.value = String(act5State.nPerGroup);
  if (els.act5RunsRange) els.act5RunsRange.value = String(act5State.runs);
  if (els.act5ShockRange) els.act5ShockRange.value = String(act5State.shock);
  if (els.act5DistNRange) els.act5DistNRange.value = String(act5State.distN);
  if (els.act5DistType) els.act5DistType.value = act5State.distType;
  if (els.act5QqDistType) els.act5QqDistType.value = act5State.qqDistType;
  if (els.act5QqRefType) els.act5QqRefType.value = act5State.qqRefType;
  if (els.act5QqScenarioDataType) els.act5QqScenarioDataType.value = act5State.qqScenarioDataType;
  if (els.act5QqScenarioRefType) els.act5QqScenarioRefType.value = act5State.qqScenarioRefType;
  if (els.act5QqScenarioNRange) els.act5QqScenarioNRange.value = String(act5State.qqScenarioN);

  if (els.act5NVal) els.act5NVal.textContent = fmtInt(act5State.nPerGroup);
  if (els.act5RunsVal) els.act5RunsVal.textContent = fmtInt(act5State.runs);
  if (els.act5ShockVal) els.act5ShockVal.textContent = fmtNum(act5State.shock, 2);
  if (els.act5DistNVal) els.act5DistNVal.textContent = fmtInt(act5State.distN);
  if (els.act5QqScenarioNVal) els.act5QqScenarioNVal.textContent = fmtInt(act5State.qqScenarioN);
}

function simulateAct5AssumptionStress() {
  const n = Math.max(80, Math.round(act5State.nPerGroup));
  const runs = Math.max(50, Math.round(act5State.runs));
  const shock = clamp(act5State.shock, 0, 0.4);
  const base = 0.12;
  const pValues = [];

  for (let r = 0; r < runs; r += 1) {
    const days = Math.max(10, Math.min(80, Math.round(n / 45)));
    const usersPerDay = Math.max(1, Math.floor(n / days));
    let xC = 0;
    let xT = 0;

    for (let d = 0; d < days; d += 1) {
      const pC = clamp(base + gaussian() * shock, 0.001, 0.95);
      const pT = clamp(base + gaussian() * shock, 0.001, 0.95);
      xC += binomialSample(usersPerDay, pC);
      xT += binomialSample(usersPerDay, pT);
    }

    const usedN = usersPerDay * days;
    const rC = xC / usedN;
    const rT = xT / usedN;
    const diff = rT - rC;
    const pooled = (xC + xT) / (2 * usedN);
    const seNaive = Math.sqrt(Math.max(1e-12, pooled * (1 - pooled) * (2 / usedN)));
    const z = diff / seNaive;
    const pValue = Math.max(0, Math.min(1, 2 * (1 - normalCdf(Math.abs(z)))));
    pValues.push(pValue);
  }

  act5State.pValues = pValues;
}

function drawAct5AssumptionChart() {
  if (!els.act5AssumptionSvg) return;
  drawAct5AssumptionChartInto(els.act5AssumptionSvg, act5State.pValues);
}

function updateAct5Summary() {
  const values = act5State.pValues;
  if (!values.length) return;

  const falseRate = values.filter((p) => p < 0.05).length / values.length;
  const medP = empiricalQuantile(values, 0.5);
  let risk = "Healthy";
  let detail = "Assumptions mostly hold. False alarms stay near the expected ~5%.";
  if (falseRate > 0.22) {
    risk = "Meltdown Risk";
    detail = "False alarms are exploding. This is where dashboards smile and business metrics cry.";
  } else if (falseRate > 0.1) {
    risk = "Concerning";
    detail = "False positives are inflated. Inference quality is degraded.";
  }

  if (els.act5FalseRate) els.act5FalseRate.textContent = `${fmtNum(falseRate * 100, 1)}%`;
  if (els.act5MedianP) els.act5MedianP.textContent = fmtNum(medP, 3);
  if (els.act5RiskLabel) els.act5RiskLabel.textContent = risk;
  if (els.act5Summary) {
    els.act5Summary.textContent =
      `With hidden volatility = ${fmtNum(act5State.shock, 2)}, your naive z-test flags significance ${fmtNum(falseRate * 100, 1)}% of the time under true zero effect. ${detail}`;
  }
}

function runAct5StressTest() {
  simulateAct5AssumptionStress();
  drawAct5AssumptionChart();
  updateAct5Summary();
}

function act5DistributionLabel(type) {
  if (type === "right_skew") return "Right-Skewed";
  if (type === "left_skew") return "Left-Skewed";
  if (type === "heavy_tail") return "Heavy-Tailed";
  if (type === "bimodal") return "Bimodal";
  if (type === "logistic") return "Logistic";
  if (type === "laplace") return "Laplace";
  return "Normal";
}

function sampleAct5DistributionValue(type) {
  if (type === "logistic") {
    const u = clamp(Math.random(), 1e-9, 1 - 1e-9);
    return (Math.sqrt(3) / Math.PI) * Math.log(u / (1 - u));
  }
  if (type === "laplace") {
    const b = 1 / Math.SQRT2;
    const u = clamp(Math.random(), 1e-9, 1 - 1e-9);
    return u < 0.5 ? b * Math.log(2 * u) : -b * Math.log(2 * (1 - u));
  }
  if (type === "right_skew") {
    const sigma = 0.8;
    return Math.exp(sigma * gaussian()) - Math.exp((sigma * sigma) / 2);
  }
  if (type === "left_skew") {
    const sigma = 0.8;
    return -(Math.exp(sigma * gaussian()) - Math.exp((sigma * sigma) / 2));
  }
  if (type === "heavy_tail") {
    const g1 = gaussian();
    const g2 = gaussian();
    const g3 = gaussian();
    const chi = (g1 * g1 + g2 * g2 + g3 * g3) / 3;
    return gaussian() / Math.sqrt(Math.max(1e-9, chi));
  }
  if (type === "bimodal") {
    if (Math.random() < 0.5) return gaussian() * 0.66 - 1.45;
    return gaussian() * 0.78 + 1.35;
  }
  return gaussian();
}

function regenerateAct5Distribution() {
  const n = Math.max(40, Math.round(act5State.distN));
  const type = act5State.distType;
  const values = [];
  for (let i = 0; i < n; i += 1) {
    values.push(sampleAct5DistributionValue(type));
  }
  act5State.distData = values;
}

function regenerateAct5QqSample() {
  const n = Math.max(40, Math.round(act5State.distN));
  const type = act5State.qqDistType;
  const values = [];
  for (let i = 0; i < n; i += 1) {
    values.push(sampleAct5DistributionValue(type));
  }
  act5State.qqDistData = values;
}

function drawAct5DistributionChart() {
  if (!els.act5DistSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act5DistSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;

  const values = act5State.distData || [];
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  if (!values.length) {
    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h / 2)
      .attr("text-anchor", "middle")
      .attr("fill", "#567384")
      .style("font-size", "11px")
      .text("No sample yet.");
    return;
  }

  const sorted = [...values].sort((a, b) => a - b);
  const loQ = empiricalQuantile(sorted, 0.01);
  const hiQ = empiricalQuantile(sorted, 0.99);
  const pad = Math.max(0.45, (hiQ - loQ) * 0.18);
  const domainLo = loQ - pad;
  const domainHi = hiQ + pad;
  const domainRange = Math.max(1e-9, domainHi - domainLo);
  const q25 = empiricalQuantile(sorted, 0.25);
  const q75 = empiricalQuantile(sorted, 0.75);
  const iqr = Math.max(1e-9, q75 - q25);
  const fdWidth = (2 * iqr) / Math.cbrt(values.length);
  const fdBins = Number.isFinite(fdWidth) && fdWidth > 0 ? Math.round(domainRange / fdWidth) : 0;
  const sqrtFloorBins = Math.ceil(Math.sqrt(values.length));
  const binsCount = clamp(Math.max(fdBins, sqrtFloorBins), 10, 72);

  const bins = d3
    .bin()
    .domain([domainLo, domainHi])
    .thresholds(binsCount)(values);

  const x = d3.scaleLinear().domain([domainLo, domainHi]).range([margin.left, margin.left + innerW]);
  const y = d3
    .scaleLinear()
    .domain([0, (d3.max(bins, (b) => b.length) || 1) * 1.18])
    .range([margin.top + innerH, margin.top]);

  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.09)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("rect.hist")
    .data(bins)
    .enter()
    .append("rect")
    .attr("class", "hist")
    .attr("x", (d) => x(d.x0) + 0.5)
    .attr("y", (d) => y(d.length))
    .attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0) - 1))
    .attr("height", (d) => Math.max(0, y(0) - y(d.length)))
    .attr("fill", "rgba(0,114,178,0.35)")
    .attr("stroke", "rgba(0,114,178,0.56)")
    .attr("stroke-width", 0.7);

  const mu = mean(values);
  const sigma = Math.max(1e-9, sd(values));
  const binWidth = bins.length ? bins[0].x1 - bins[0].x0 : domainRange / binsCount;
  const curveXs = d3.range(domainLo, domainHi + 1e-6, (domainHi - domainLo) / 150);
  const curve = curveXs.map((xv) => ({
    x: xv,
    y: normalPdf(xv, mu, sigma) * values.length * binWidth,
  }));

  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  svg
    .append("path")
    .datum(curve)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 2.2);

  const xAxis = d3.axisBottom(x).ticks(7).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickFormat((v) => fmtNum(v, 0)).tickSizeOuter(0);

  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  const skew = sampleSkewness(values);
  const exKurt = sampleExcessKurtosis(values);
  if (els.act5DistSummary) {
    els.act5DistSummary.textContent =
      `${act5DistributionLabel(act5State.distType)} sample: mean=${fmtNum(mu, 2)}, sd=${fmtNum(sigma, 2)}, ` +
      `skew=${fmtNum(skew, 2)}, excess kurtosis=${fmtNum(exKurt, 2)}, bins=${fmtInt(binsCount)}.`;
  }
}

function act5ReferenceQuantile(p, refType = "normal") {
  const prob = clamp(p, 1e-9, 1 - 1e-9);
  if (refType === "logistic") {
    return (Math.sqrt(3) / Math.PI) * Math.log(prob / (1 - prob));
  }
  if (refType === "laplace") {
    const b = 1 / Math.SQRT2;
    return prob < 0.5 ? b * Math.log(2 * prob) : -b * Math.log(2 * (1 - prob));
  }
  if (refType === "right_skew") {
    const sigma = 0.8;
    const m = Math.exp((sigma * sigma) / 2);
    const s = Math.sqrt((Math.exp(sigma * sigma) - 1) * Math.exp(sigma * sigma));
    return (Math.exp(sigma * normalInv(prob)) - m) / s;
  }
  if (refType === "left_skew") {
    return -act5ReferenceQuantile(1 - prob, "right_skew");
  }
  return normalInv(prob);
}

function computeAct5QqMetrics(values, refType = "normal") {
  const n = values.length;
  const obs = [...values].sort((a, b) => a - b);
  const rawTheo = [];
  for (let i = 0; i < n; i += 1) {
    rawTheo.push(act5ReferenceQuantile((i + 0.5) / n, refType));
  }

  // Fit the chosen reference family into the sample's raw units using median + IQR.
  // This keeps the QQ axis tied to the selected family instead of a hidden normal-style standardization.
  const obsQ25 = empiricalQuantile(obs, 0.25);
  const obsQ50 = empiricalQuantile(obs, 0.5);
  const obsQ75 = empiricalQuantile(obs, 0.75);
  const refQ25 = empiricalQuantile(rawTheo, 0.25);
  const refQ50 = empiricalQuantile(rawTheo, 0.5);
  const refQ75 = empiricalQuantile(rawTheo, 0.75);
  const refIqr = refQ75 - refQ25;
  const obsIqr = obsQ75 - obsQ25;
  const scale = Math.abs(refIqr) > 1e-12 ? obsIqr / refIqr : 1;
  const shift = obsQ50 - scale * refQ50;
  const theo = rawTheo.map((q) => shift + scale * q);

  let mse = 0;
  for (let i = 0; i < n; i += 1) {
    const d = obs[i] - theo[i];
    mse += d * d;
  }
  mse /= n;
  const rmse = Math.sqrt(mse);
  const qqCorr = correlation(theo, obs);
  return { theo, obs, qqCorr, rmse };
}

function drawAct5QqChart(svgNode, qqData, labels = {}) {
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 48, left: 48 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const { theo, obs } = qqData;
  const n = theo.length;
  const lim = Math.max(
    1.8,
    Math.max(Math.abs(theo[0]), Math.abs(theo[n - 1]), Math.abs(obs[0]), Math.abs(obs[n - 1])) * 1.07
  );
  const x = d3.scaleLinear().domain([-lim, lim]).range([margin.left, margin.left + innerW]);
  const y = d3.scaleLinear().domain([-lim, lim]).range([margin.top + innerH, margin.top]);

  x.ticks(6).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });
  y.ticks(6).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  svg
    .append("line")
    .attr("x1", x(-lim))
    .attr("x2", x(lim))
    .attr("y1", y(-lim))
    .attr("y2", y(lim))
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 1.4)
    .attr("stroke-dasharray", "4 4");

  const pts = theo.map((tv, i) => ({ x: tv, y: obs[i] }));
  svg
    .selectAll("circle.qq")
    .data(pts)
    .enter()
    .append("circle")
    .attr("class", "qq")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 2.2)
    .attr("fill", "rgba(0,114,178,0.75)");

  const xAxis = d3.axisBottom(x).ticks(6).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(6).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  const xLabel = labels.xLabel || "Theoretical quantiles";
  const yLabel = labels.yLabel || "Measured sample quantiles";

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 10)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text(xLabel);

  svg
    .append("text")
    .attr("x", 14)
    .attr("y", margin.top + innerH / 2)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .attr("transform", `rotate(-90, 14, ${margin.top + innerH / 2})`)
    .text(yLabel);
}

function drawAct5QqDiagnostics() {
  const values = act5State.qqDistData || [];
  if (!els.act5QqSvg || !window.d3) return;
  if (values.length < 8) return;

  const qq = computeAct5QqMetrics(values, "normal");
  drawAct5QqChart(els.act5QqSvg, qq, {
    xLabel: "Theoretical fitted Normal quantiles",
    yLabel: "Measured sample quantiles",
  });

  let verdict = "Use Caution";
  let hint = "Noticeable curvature vs the diagonal: normal-based assumptions are shaky.";
  if (qq.qqCorr > 0.99 && qq.rmse < 0.2) {
    verdict = "Looks Fine";
    hint = "Points track the diagonal well. Normal approximation is plausible.";
  } else if (qq.qqCorr > 0.975 && qq.rmse < 0.35) {
    verdict = "Borderline";
    hint = "Mild deviations. Inference might work, but report diagnostics.";
  }

  if (els.act5QqCorr) els.act5QqCorr.textContent = fmtNum(qq.qqCorr, 4);
  if (els.act5DiagVerdict) els.act5DiagVerdict.textContent = verdict;
  if (els.act5DiagSummary) {
    els.act5DiagSummary.textContent =
      `${act5DistributionLabel(act5State.qqDistType)} sample against fitted Normal quantiles: ` +
      `QQ corr=${fmtNum(qq.qqCorr, 4)}, RMSE=${fmtNum(qq.rmse, 3)}. ${hint}`;
  }
}

function drawAct5QqFamilyDiagnostics() {
  const values = act5State.distData || [];
  if (!els.act5QqFamilySvg || !window.d3) return;
  if (values.length < 8) return;

  const qq = computeAct5QqMetrics(values, act5State.qqRefType);
  drawAct5QqChart(els.act5QqFamilySvg, qq, {
    xLabel: `Theoretical fitted ${act5DistributionLabel(act5State.qqRefType)} quantiles`,
    yLabel: "Measured sample quantiles",
  });

  let verdict = "Weak Match";
  let hint = "Large quantile mismatch for this reference family.";
  if (qq.qqCorr > 0.99 && qq.rmse < 0.2) {
    verdict = "Strong Match";
    hint = "Quantiles align very well with this theoretical family.";
  } else if (qq.qqCorr > 0.975 && qq.rmse < 0.35) {
    verdict = "Moderate Match";
    hint = "Reasonable quantile alignment, but not perfect.";
  }

  if (els.act5QqFamilyCorr) els.act5QqFamilyCorr.textContent = fmtNum(qq.qqCorr, 4);
  if (els.act5QqFamilyVerdict) els.act5QqFamilyVerdict.textContent = verdict;
  if (els.act5QqFamilySummary) {
    els.act5QqFamilySummary.textContent =
      `Compared sample quantiles to fitted ${act5DistributionLabel(act5State.qqRefType)} quantiles: ` +
      `QQ corr=${fmtNum(qq.qqCorr, 4)}, RMSE=${fmtNum(qq.rmse, 3)}. ${hint}`;
  }
}

function regenerateAct5QqScenario() {
  const n = Math.max(60, Math.round(act5State.qqScenarioN));
  const type = act5State.qqScenarioDataType;
  const values = [];
  for (let i = 0; i < n; i += 1) {
    values.push(sampleAct5DistributionValue(type));
  }
  act5State.qqScenarioData = values;
}

function drawAct5QqScenarioDiagnostics() {
  const values = act5State.qqScenarioData || [];
  if (!els.act5QqScenarioSvg || !window.d3) return;
  if (values.length < 8) return;

  const qq = computeAct5QqMetrics(values, act5State.qqScenarioRefType);
  drawAct5QqChart(els.act5QqScenarioSvg, qq, {
    xLabel: `Theoretical fitted ${act5DistributionLabel(act5State.qqScenarioRefType)} quantiles`,
    yLabel: `Measured ${act5DistributionLabel(act5State.qqScenarioDataType)} sample quantiles`,
  });

  let verdict = "Mismatch";
  let hint = "Measured and theoretical quantiles disagree. The model assumption is weak.";
  if (qq.qqCorr > 0.99 && qq.rmse < 0.2) {
    verdict = "Strong Match";
    hint = "Measured quantiles closely follow theoretical quantiles.";
  } else if (qq.qqCorr > 0.975 && qq.rmse < 0.35) {
    verdict = "Partial Match";
    hint = "The fit is usable, but there is visible deviation in some quantiles.";
  }

  if (els.act5QqScenarioCorr) els.act5QqScenarioCorr.textContent = fmtNum(qq.qqCorr, 4);
  if (els.act5QqScenarioVerdict) els.act5QqScenarioVerdict.textContent = verdict;
  if (els.act5QqScenarioSummary) {
    const dataLabel = act5DistributionLabel(act5State.qqScenarioDataType);
    const refLabel = act5DistributionLabel(act5State.qqScenarioRefType);
    els.act5QqScenarioSummary.textContent =
      `Measured quantiles come from a ${dataLabel} sample; theoretical quantiles come from a fitted ${refLabel} model. ` +
      `QQ corr=${fmtNum(qq.qqCorr, 4)}, RMSE=${fmtNum(qq.rmse, 3)}. ${hint}`;
  }
}

function refreshAct5QqScenario() {
  regenerateAct5QqScenario();
  drawAct5QqScenarioDiagnostics();
}

function refreshAct5DistributionDiagnostics() {
  regenerateAct5Distribution();
  drawAct5DistributionChart();
  drawAct5QqFamilyDiagnostics();
}

function refreshAct5QqDiagnostics() {
  regenerateAct5QqSample();
  drawAct5QqDiagnostics();
}

function initAct5Scene() {
  if (!els.act5AssumptionSvg && !els.act5DistSvg && !els.act5QqSvg && !els.act5QqFamilySvg && !els.act5QqScenarioSvg) return;
  syncAct5Controls();
  runAct5StressTest();
  refreshAct5DistributionDiagnostics();
  refreshAct5QqDiagnostics();
  refreshAct5QqScenario();

  if (els.act5NRange) {
    els.act5NRange.addEventListener("input", () => {
      act5State.nPerGroup = Number(els.act5NRange.value);
      syncAct5Controls();
      runAct5StressTest();
    });
  }
  if (els.act5RunsRange) {
    els.act5RunsRange.addEventListener("input", () => {
      act5State.runs = Number(els.act5RunsRange.value);
      syncAct5Controls();
      runAct5StressTest();
    });
  }
  if (els.act5ShockRange) {
    els.act5ShockRange.addEventListener("input", () => {
      act5State.shock = Number(els.act5ShockRange.value);
      syncAct5Controls();
      runAct5StressTest();
    });
  }
  if (els.act5SimBtn) {
    els.act5SimBtn.addEventListener("click", () => {
      runAct5StressTest();
    });
  }
  if (els.act5DistType) {
    els.act5DistType.addEventListener("change", () => {
      act5State.distType = els.act5DistType.value;
      syncAct5Controls();
      refreshAct5DistributionDiagnostics();
    });
  }
  if (els.act5QqDistType) {
    els.act5QqDistType.addEventListener("change", () => {
      act5State.qqDistType = els.act5QqDistType.value;
      syncAct5Controls();
      refreshAct5QqDiagnostics();
    });
  }
  if (els.act5DistNRange) {
    els.act5DistNRange.addEventListener("input", () => {
      act5State.distN = Number(els.act5DistNRange.value);
      syncAct5Controls();
      refreshAct5DistributionDiagnostics();
      refreshAct5QqDiagnostics();
    });
  }
  if (els.act5ResampleBtn) {
    els.act5ResampleBtn.addEventListener("click", () => {
      refreshAct5DistributionDiagnostics();
    });
  }
  if (els.act5QqRefType) {
    els.act5QqRefType.addEventListener("change", () => {
      act5State.qqRefType = els.act5QqRefType.value;
      syncAct5Controls();
      drawAct5QqFamilyDiagnostics();
    });
  }
  if (els.act5QqScenarioDataType) {
    els.act5QqScenarioDataType.addEventListener("change", () => {
      act5State.qqScenarioDataType = els.act5QqScenarioDataType.value;
      syncAct5Controls();
      refreshAct5QqScenario();
    });
  }
  if (els.act5QqScenarioRefType) {
    els.act5QqScenarioRefType.addEventListener("change", () => {
      act5State.qqScenarioRefType = els.act5QqScenarioRefType.value;
      syncAct5Controls();
      drawAct5QqScenarioDiagnostics();
    });
  }
  if (els.act5QqScenarioNRange) {
    els.act5QqScenarioNRange.addEventListener("input", () => {
      act5State.qqScenarioN = Number(els.act5QqScenarioNRange.value);
      syncAct5Controls();
      refreshAct5QqScenario();
    });
  }
}

function syncAct6Controls() {
  if (els.act6NRange) els.act6NRange.value = String(act6State.n);
  if (els.act6TrueSlopeRange) els.act6TrueSlopeRange.value = String(act6State.trueSlope);
  if (els.act6NoiseRange) els.act6NoiseRange.value = String(act6State.noise);
  if (els.act6RunsRange) els.act6RunsRange.value = String(act6State.runs);
  if (els.act6MomNRange) els.act6MomNRange.value = String(act6State.momN);
  if (els.act6OutlierRange) els.act6OutlierRange.value = String(act6State.outlierRate);

  if (els.act6NVal) els.act6NVal.textContent = fmtInt(act6State.n);
  if (els.act6TrueSlopeVal) els.act6TrueSlopeVal.textContent = fmtNum(act6State.trueSlope, 2);
  if (els.act6NoiseVal) els.act6NoiseVal.textContent = fmtInt(act6State.noise);
  if (els.act6RunsVal) els.act6RunsVal.textContent = fmtInt(act6State.runs);
  if (els.act6MomNVal) els.act6MomNVal.textContent = fmtInt(act6State.momN);
  if (els.act6OutlierVal) els.act6OutlierVal.textContent = fmtNum(act6State.outlierRate, 2);
}

function generateAct6Sample() {
  const n = Math.max(20, Math.round(act6State.n));
  const trueSlope = act6State.trueSlope;
  const noise = Math.max(1, act6State.noise);
  const baseline = 160;
  const points = [];

  for (let i = 0; i < n; i += 1) {
    const x = Math.random() * 100;
    const y = baseline + trueSlope * x + gaussian() * noise;
    points.push({ x, y });
  }

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const fit = regression(xs, ys);
  const slope = fit.slope;
  const intercept = fit.intercept;
  const bias = slope - trueSlope;
  const predLift = slope * 50;

  act6State.sample = points;
  act6State.fit = { slope, intercept, bias, predLift };
}

function updateAct6PointSummary() {
  const { slope, bias, predLift } = act6State.fit;
  if (els.act6SlopeEst) els.act6SlopeEst.textContent = fmtNum(slope, 3);
  if (els.act6SlopeBias) {
    const sign = bias >= 0 ? "+" : "";
    els.act6SlopeBias.textContent = `${sign}${fmtNum(bias, 3)}`;
  }
  if (els.act6PredLift) {
    const sign = predLift >= 0 ? "+" : "";
    els.act6PredLift.textContent = `${sign}${fmtNum(predLift, 1)}`;
  }
  if (els.act6PointSummary) {
    const slopeTxt = fmtNum(slope, 3);
    const trueTxt = fmtNum(act6State.trueSlope, 3);
    const liftTxt = fmtNum(predLift, 1);
    els.act6PointSummary.textContent =
      `This sample estimates +${slopeTxt} money units per +1 column unit (true hidden effect: ${trueTxt}). ` +
      `Estimated move from 40 to 90: +${liftTxt}.`;
  }
}

function drawAct6Scatter() {
  if (!els.act6ScatterSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act6ScatterSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(180, Math.floor(svgNode.clientHeight));
  const margin = { top: 20, right: 18, bottom: 42, left: 42 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const points = act6State.sample || [];
  if (!points.length) return;

  const ys = points.map((p) => p.y);
  const yLo = Math.min(d3.min(ys), 0);
  const yHi = d3.max(ys);
  const yPad = Math.max(20, (yHi - yLo) * 0.1);
  const x = d3.scaleLinear().domain([0, 100]).range([margin.left, margin.left + innerW]);
  const y = d3.scaleLinear().domain([yLo - yPad, yHi + yPad]).range([margin.top + innerH, margin.top]);

  x.ticks(8).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });
  y.ticks(6).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("circle.act6-point")
    .data(points)
    .enter()
    .append("circle")
    .attr("class", "act6-point")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 3.1)
    .attr("fill", "rgba(0,114,178,0.55)");

  const trueY = (xv) => 160 + act6State.trueSlope * xv;
  svg
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(100))
    .attr("y1", y(trueY(0)))
    .attr("y2", y(trueY(100)))
    .attr("stroke", "#d55e00")
    .attr("stroke-width", 2)
    .attr("stroke-dasharray", "5 4");

  const estY = (xv) => act6State.fit.intercept + act6State.fit.slope * xv;
  svg
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(100))
    .attr("y1", y(estY(0)))
    .attr("y2", y(estY(100)))
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 2.6);

  svg
    .append("line")
    .attr("x1", x(40))
    .attr("x2", x(40))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "rgba(0,158,115,0.7)")
    .attr("stroke-width", 1.1)
    .attr("stroke-dasharray", "3 4");

  svg
    .append("line")
    .attr("x1", x(90))
    .attr("x2", x(90))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", "rgba(0,158,115,0.7)")
    .attr("stroke-width", 1.1)
    .attr("stroke-dasharray", "3 4");

  const xAxis = d3.axisBottom(x).ticks(7).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(6).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  svg
    .append("text")
    .attr("x", margin.left + innerW / 2)
    .attr("y", h - 7)
    .attr("text-anchor", "middle")
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .text("Column Setting (x)");

  svg
    .append("text")
    .attr("x", 10)
    .attr("y", margin.top + innerH / 2)
    .attr("fill", "#355b72")
    .style("font-size", "10px")
    .attr("transform", `rotate(-90, 10, ${margin.top + innerH / 2})`)
    .text("Money Made (y)");
}

function simulateAct6SlopeSamples() {
  const runs = Math.max(50, Math.round(act6State.runs));
  const n = Math.max(20, Math.round(act6State.n));
  const noise = Math.max(1, act6State.noise);
  const trueSlope = act6State.trueSlope;
  const baseline = 160;
  const slopes = [];

  for (let r = 0; r < runs; r += 1) {
    const xs = [];
    const ys = [];
    for (let i = 0; i < n; i += 1) {
      const x = Math.random() * 100;
      const y = baseline + trueSlope * x + gaussian() * noise;
      xs.push(x);
      ys.push(y);
    }
    const fit = regression(xs, ys);
    if (Number.isFinite(fit.slope)) slopes.push(fit.slope);
  }
  act6State.slopeSamples = slopes;
  act6State.distTrueSlope = trueSlope;
  act6State.distN = n;
  act6State.distNoise = noise;
}

function drawAct6SlopeDist() {
  if (!els.act6SlopeDistSvg) return;
  const summary = drawAct6SlopeDistInto(els.act6SlopeDistSvg, act6State.slopeSamples || [], {
    trueSlope: Number.isFinite(act6State.distTrueSlope) ? act6State.distTrueSlope : act6State.trueSlope,
    n: act6State.distN,
    noise: act6State.distNoise,
    summaryTarget: els.act6DistSummary,
  });
  if (summary && els.act6DistMean) els.act6DistMean.textContent = fmtNum(summary.avg, 3);
  if (summary && els.act6DistSd) els.act6DistSd.textContent = fmtNum(summary.spread, 3);
}

function generateAct6MomMleSample() {
  const n = Math.max(30, Math.round(act6State.momN));
  const outlierRate = clamp(act6State.outlierRate, 0, 0.35);
  const trueMu = act6State.momMleTrueMu;
  const trueB = act6State.momMleTrueB;
  const points = [];

  for (let i = 0; i < n; i += 1) {
    let value = laplaceSample(trueMu, trueB);
    if (Math.random() < outlierRate) {
      const sign = Math.random() < 0.5 ? -1 : 1;
      value += sign * (95 + Math.random() * 95);
    }
    points.push({
      value,
      jitter: (Math.random() - 0.5) * 0.9,
    });
  }

  const values = points.map((p) => p.value);
  const muMom = mean(values);
  const secondCentral = values.reduce((acc, v) => acc + (v - muMom) ** 2, 0) / values.length;
  const bMom = Math.sqrt(Math.max(1e-9, secondCentral / 2));

  const muMle = empiricalQuantile(values, 0.5);
  const bMle = values.reduce((acc, v) => acc + Math.abs(v - muMle), 0) / values.length;

  act6State.momMleData = points;
  act6State.momMleMomMu = muMom;
  act6State.momMleMomB = bMom;
  act6State.momMleMleMu = muMle;
  act6State.momMleMleB = bMle;
}

function drawAct6MomMleChart() {
  if (!els.act6MomMleSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act6MomMleSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const pts = act6State.momMleData || [];
  if (!pts.length) return;

  const values = pts.map((p) => p.value);
  const sorted = [...values].sort((a, b) => a - b);
  const lo = empiricalQuantile(sorted, 0.01);
  const hi = empiricalQuantile(sorted, 0.99);
  const pad = Math.max(6, (hi - lo) * 0.15);
  const x = d3.scaleLinear().domain([lo - pad, hi + pad]).range([margin.left, margin.left + innerW]);
  const yMid = margin.top + innerH / 2;
  const jitterAmp = innerH * 0.34;

  x.ticks(8).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", x(tick))
      .attr("x2", x(tick))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  svg
    .selectAll("circle.act6-mommle-point")
    .data(pts)
    .enter()
    .append("circle")
    .attr("class", "act6-mommle-point")
    .attr("cx", (d) => x(d.value))
    .attr("cy", (d) => yMid + d.jitter * jitterAmp)
    .attr("r", 2.8)
    .attr("fill", "rgba(0,114,178,0.55)");

  const drawMarker = (value, color, dash = null) => {
    const line = svg
      .append("line")
      .attr("x1", x(value))
      .attr("x2", x(value))
      .attr("y1", margin.top)
      .attr("y2", margin.top + innerH)
      .attr("stroke", color)
      .attr("stroke-width", 2);
    if (dash) line.attr("stroke-dasharray", dash);
  };

  drawMarker(act6State.momMleTrueMu, "#d55e00");
  drawMarker(act6State.momMleMomMu, "#0072b2", "4 4");
  drawMarker(act6State.momMleMleMu, "#009e73", "5 3");

  const xAxis = d3.axisBottom(x).ticks(8).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");

  const legendX = margin.left + 8;
  const legendY = margin.top + 10;
  const legend = [
    { label: "True center", color: "#d55e00", dash: null, y: legendY },
    { label: "MoM center (mean)", color: "#0072b2", dash: "4 4", y: legendY + 12 },
    { label: "MLE center (median)", color: "#009e73", dash: "5 3", y: legendY + 24 },
  ];
  legend.forEach((item) => {
    const line = svg
      .append("line")
      .attr("x1", legendX)
      .attr("x2", legendX + 18)
      .attr("y1", item.y)
      .attr("y2", item.y)
      .attr("stroke", item.color)
      .attr("stroke-width", 2);
    if (item.dash) line.attr("stroke-dasharray", item.dash);
    svg
      .append("text")
      .attr("x", legendX + 24)
      .attr("y", item.y + 3)
      .attr("fill", "#355b72")
      .style("font-size", "9px")
      .text(item.label);
  });

  if (els.act6MomMu) els.act6MomMu.textContent = fmtNum(act6State.momMleMomMu, 2);
  if (els.act6MomB) els.act6MomB.textContent = fmtNum(act6State.momMleMomB, 2);
  if (els.act6MleMu) els.act6MleMu.textContent = fmtNum(act6State.momMleMleMu, 2);
  if (els.act6MleB) els.act6MleB.textContent = fmtNum(act6State.momMleMleB, 2);
  if (els.act6MomMleSummary) {
    const momErr = act6State.momMleMomMu - act6State.momMleTrueMu;
    const mleErr = act6State.momMleMleMu - act6State.momMleTrueMu;
    const momErrTxt = `${momErr >= 0 ? "+" : ""}${fmtNum(momErr, 2)}`;
    const mleErrTxt = `${mleErr >= 0 ? "+" : ""}${fmtNum(mleErr, 2)}`;
    els.act6MomMleSummary.textContent =
      `MoM center error: ${momErrTxt}. MLE center error: ${mleErrTxt}. ` +
      `With heavier outliers, mean-based MoM usually drifts faster than median-based MLE.`;
  }
}

function runAct6MomMleResample() {
  generateAct6MomMleSample();
  drawAct6MomMleChart();
}

function runAct6Resample() {
  generateAct6Sample();
  drawAct6Scatter();
  updateAct6PointSummary();
}

function markAct6DistStale() {
  if (els.act6DistSummary) {
    els.act6DistSummary.textContent = "Parameters changed. Re-run simulation to refresh estimator spread.";
  }
}

function runAct6EstimatorSimulation() {
  simulateAct6SlopeSamples();
  drawAct6SlopeDist();
}

function initAct6Scene() {
  if (!els.act6ScatterSvg && !els.act6SlopeDistSvg && !els.act6MomMleSvg) return;
  syncAct6Controls();
  runAct6Resample();
  runAct6EstimatorSimulation();
  runAct6MomMleResample();

  if (els.act6NRange) {
    els.act6NRange.addEventListener("input", () => {
      act6State.n = Number(els.act6NRange.value);
      syncAct6Controls();
      runAct6Resample();
      markAct6DistStale();
    });
  }
  if (els.act6TrueSlopeRange) {
    els.act6TrueSlopeRange.addEventListener("input", () => {
      act6State.trueSlope = Number(els.act6TrueSlopeRange.value);
      syncAct6Controls();
      runAct6Resample();
      markAct6DistStale();
    });
  }
  if (els.act6NoiseRange) {
    els.act6NoiseRange.addEventListener("input", () => {
      act6State.noise = Number(els.act6NoiseRange.value);
      syncAct6Controls();
      runAct6Resample();
      markAct6DistStale();
    });
  }
  if (els.act6RunsRange) {
    els.act6RunsRange.addEventListener("input", () => {
      act6State.runs = Number(els.act6RunsRange.value);
      syncAct6Controls();
      runAct6EstimatorSimulation();
    });
  }
  if (els.act6ResampleBtn) {
    els.act6ResampleBtn.addEventListener("click", () => {
      runAct6Resample();
      markAct6DistStale();
    });
  }
  if (els.act6ResimBtn) {
    els.act6ResimBtn.addEventListener("click", () => {
      runAct6EstimatorSimulation();
    });
  }
  if (els.act6MomNRange) {
    els.act6MomNRange.addEventListener("input", () => {
      act6State.momN = Number(els.act6MomNRange.value);
      syncAct6Controls();
      runAct6MomMleResample();
    });
  }
  if (els.act6OutlierRange) {
    els.act6OutlierRange.addEventListener("input", () => {
      act6State.outlierRate = Number(els.act6OutlierRange.value);
      syncAct6Controls();
      runAct6MomMleResample();
    });
  }
  if (els.act6MomMleResampleBtn) {
    els.act6MomMleResampleBtn.addEventListener("click", () => {
      runAct6MomMleResample();
    });
  }
}

function studentTPdf(x, df) {
  const nu = Math.max(1, df);
  const logConst = logGamma((nu + 1) / 2) - logGamma(nu / 2) - 0.5 * Math.log(nu * Math.PI);
  return Math.exp(logConst) * (1 + (x * x) / nu) ** (-(nu + 1) / 2);
}

function tailPFromCdf(stat, mode, cdfFn) {
  if (mode === "left") return clamp(cdfFn(stat), 0, 1);
  if (mode === "right") return clamp(1 - cdfFn(stat), 0, 1);
  return clamp(2 * Math.min(cdfFn(stat), 1 - cdfFn(stat)), 0, 1);
}

function drawAct7TailChart(svgNode, { pdfFn, domain = [-4, 4], stat = 0, mode = "two", statColor = "#d55e00" }) {
  if (!svgNode || !window.d3) return;
  const d3 = window.d3;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const statVal = Number.isFinite(stat) ? stat : 0;
  const statAbs = Math.abs(statVal);
  const domainPad = 0.6;
  const domainLo = Math.min(domain[0], -statAbs - domainPad);
  const domainHi = Math.max(domain[1], statAbs + domainPad);
  const x = d3.scaleLinear().domain([domainLo, domainHi]).range([margin.left, margin.left + innerW]);
  const xs = d3.range(domainLo, domainHi + 1e-9, (domainHi - domainLo) / 280);
  const pts = xs.map((xv) => ({ x: xv, y: pdfFn(xv) }));
  const yMax = d3.max(pts, (d) => d.y) || 0.4;
  const y = d3.scaleLinear().domain([0, yMax * 1.16]).range([margin.top + innerH, margin.top]);

  y.ticks(4).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  const area = d3
    .area()
    .x((d) => x(d.x))
    .y0(y(0))
    .y1((d) => y(d.y))
    .curve(d3.curveLinear);

  const paintTail = (tailPts) => {
    if (!tailPts || tailPts.length < 2) return;
    svg.append("path").datum(tailPts).attr("d", area).attr("fill", "rgba(213,94,0,0.35)");
  };

  if (mode === "two") {
    paintTail(pts.filter((d) => d.x <= -statAbs));
    paintTail(pts.filter((d) => d.x >= statAbs));
  } else if (mode === "left") {
    paintTail(pts.filter((d) => d.x <= statVal));
  } else {
    paintTail(pts.filter((d) => d.x >= statVal));
  }

  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBasis);

  svg
    .append("path")
    .datum(pts)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 2.2);

  svg
    .append("line")
    .attr("x1", x(statVal))
    .attr("x2", x(statVal))
    .attr("y1", margin.top)
    .attr("y2", margin.top + innerH)
    .attr("stroke", statColor)
    .attr("stroke-width", 1.8)
    .attr("stroke-dasharray", "4 4");

  const xAxis = d3.axisBottom(x).ticks(8).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(4).tickFormat((v) => fmtNum(v, 2)).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");
}

function syncAct7Controls() {
  if (els.act7ZNRange) els.act7ZNRange.value = String(act7State.z.n);
  if (els.act7ZMu0Range) els.act7ZMu0Range.value = String(act7State.z.mu0);
  if (els.act7ZTrueMuRange) els.act7ZTrueMuRange.value = String(act7State.z.trueMu);
  if (els.act7ZSigmaRange) els.act7ZSigmaRange.value = String(act7State.z.sigma);
  if (els.act7ZNVal) els.act7ZNVal.textContent = fmtInt(act7State.z.n);
  if (els.act7ZMu0Val) els.act7ZMu0Val.textContent = fmtNum(act7State.z.mu0, 1);
  if (els.act7ZTrueMuVal) els.act7ZTrueMuVal.textContent = fmtNum(act7State.z.trueMu, 1);
  if (els.act7ZSigmaVal) els.act7ZSigmaVal.textContent = fmtNum(act7State.z.sigma, 1);

  if (els.act7TNRange) els.act7TNRange.value = String(act7State.t.n);
  if (els.act7TMu0Range) els.act7TMu0Range.value = String(act7State.t.mu0);
  if (els.act7TTrueMuRange) els.act7TTrueMuRange.value = String(act7State.t.trueMu);
  if (els.act7TSigmaRange) els.act7TSigmaRange.value = String(act7State.t.sigma);
  if (els.act7TNVal) els.act7TNVal.textContent = fmtInt(act7State.t.n);
  if (els.act7TMu0Val) els.act7TMu0Val.textContent = fmtNum(act7State.t.mu0, 1);
  if (els.act7TTrueMuVal) els.act7TTrueMuVal.textContent = fmtNum(act7State.t.trueMu, 1);
  if (els.act7TSigmaVal) els.act7TSigmaVal.textContent = fmtNum(act7State.t.sigma, 1);

  if (els.act7PowerNRange) els.act7PowerNRange.value = String(act7State.power.n);
  if (els.act7PowerEffectRange) els.act7PowerEffectRange.value = String(act7State.power.effect);
  if (els.act7PowerAlphaRange) els.act7PowerAlphaRange.value = String(act7State.power.alpha);
  if (els.act7PowerNVal) els.act7PowerNVal.textContent = fmtInt(act7State.power.n);
  if (els.act7PowerEffectVal) els.act7PowerEffectVal.textContent = fmtNum(act7State.power.effect, 2);
  if (els.act7PowerAlphaVal) els.act7PowerAlphaVal.textContent = fmtNum(act7State.power.alpha, 3);

  if (els.act7PZRange) els.act7PZRange.value = String(act7State.pval.zObs);
  if (els.act7PZVal) els.act7PZVal.textContent = fmtNum(act7State.pval.zObs, 2);

  if (els.act7SideSelect) els.act7SideSelect.value = act7State.side.mode;
  if (els.act7SideZRange) els.act7SideZRange.value = String(act7State.side.zObs);
  if (els.act7SideZVal) els.act7SideZVal.textContent = fmtNum(act7State.side.zObs, 2);

  if (els.act7MultMRange) els.act7MultMRange.value = String(act7State.mult.m);
  if (els.act7MultAlphaRange) els.act7MultAlphaRange.value = String(act7State.mult.alpha);
  if (els.act7MultMVal) els.act7MultMVal.textContent = fmtInt(act7State.mult.m);
  if (els.act7MultAlphaVal) els.act7MultAlphaVal.textContent = fmtNum(act7State.mult.alpha, 3);
}

function ensureGaussianPool(pool, sizeNeeded, reseed = false) {
  const next = reseed || !Array.isArray(pool) ? [] : [...pool];
  while (next.length < sizeNeeded) next.push(gaussian());
  return next;
}

function runAct7ZSample(reseed = false) {
  const { n, trueMu, mu0, sigma } = act7State.z;
  act7State.z.noisePool = ensureGaussianPool(act7State.z.noisePool, n, reseed);
  const baseNoise = act7State.z.noisePool.slice(0, n);
  const noiseMean = mean(baseNoise);
  const values = [];
  for (let i = 0; i < n; i += 1) values.push(trueMu + sigma * (baseNoise[i] - noiseMean));
  const xbar = mean(values);
  const stat = (xbar - mu0) / (sigma / Math.sqrt(n));
  const p = tailPFromCdf(stat, "two", normalCdf);
  act7State.z.xbar = xbar;
  act7State.z.stat = stat;
  act7State.z.p = p;
  drawAct7ZChart();
}

function drawAct7ZChart() {
  if (!els.act7ZSvg) return;
  drawAct7TailChart(els.act7ZSvg, {
    pdfFn: (x) => normalPdf(x, 0, 1),
    domain: [-4, 4],
    stat: act7State.z.stat,
    mode: "two",
  });
  if (els.act7ZXbar) els.act7ZXbar.textContent = fmtNum(act7State.z.xbar, 3);
  if (els.act7ZStat) els.act7ZStat.textContent = fmtNum(act7State.z.stat, 3);
  if (els.act7ZP) els.act7ZP.textContent = fmtNum(act7State.z.p, 4);
  if (els.act7ZDecision) els.act7ZDecision.textContent = act7State.z.p < 0.05 ? "Reject H0" : "Fail to reject H0";
  if (els.act7ZSummary) {
    els.act7ZSummary.textContent =
      `Known-σ z-test with n=${fmtInt(act7State.z.n)}: z=${fmtNum(act7State.z.stat, 3)}, p=${fmtNum(act7State.z.p, 4)}. ` +
      `The orange tails are the null-distribution area beyond ±|z|, so two-sided evidence is based on |z|, not the sign of z.`;
  }
}

function runAct7TSample(reseed = false) {
  const { n, trueMu, mu0, sigma } = act7State.t;
  act7State.t.noisePool = ensureGaussianPool(act7State.t.noisePool, n, reseed);
  const baseNoise = act7State.t.noisePool.slice(0, n);
  const noiseMean = mean(baseNoise);
  const values = [];
  for (let i = 0; i < n; i += 1) values.push(trueMu + sigma * (baseNoise[i] - noiseMean));
  const xbar = mean(values);
  const s = sd(values);
  const stat = (xbar - mu0) / (s / Math.sqrt(n));
  const p = tailPFromCdf(stat, "two", (x) => studentTCdf(x, n - 1));
  act7State.t.xbar = xbar;
  act7State.t.s = s;
  act7State.t.stat = stat;
  act7State.t.p = p;
  drawAct7TChart();
}

function drawAct7TChart() {
  if (!els.act7TSvg) return;
  const df = Math.max(1, act7State.t.n - 1);
  drawAct7TailChart(els.act7TSvg, {
    pdfFn: (x) => studentTPdf(x, df),
    domain: [-5, 5],
    stat: act7State.t.stat,
    mode: "two",
  });
  if (els.act7TXbar) els.act7TXbar.textContent = fmtNum(act7State.t.xbar, 3);
  if (els.act7TSVal) els.act7TSVal.textContent = fmtNum(act7State.t.s, 3);
  if (els.act7TTStat) els.act7TTStat.textContent = fmtNum(act7State.t.stat, 3);
  if (els.act7TP) els.act7TP.textContent = fmtNum(act7State.t.p, 4);
  if (els.act7TDecision) els.act7TDecision.textContent = act7State.t.p < 0.05 ? "Reject H0" : "Fail to reject H0";
  if (els.act7TSummary) {
    els.act7TSummary.textContent =
      `Unknown-σ t-test with df=${fmtInt(df)}: t=${fmtNum(act7State.t.stat, 3)}, p=${fmtNum(act7State.t.p, 4)}. ` +
      `The orange tails are the t-distribution area beyond ±|t| under H0, so two-sided evidence is based on |t|, not the sign of t.`;
  }
}

function twoSidedZPower(n, effect, alpha, sigma = 1) {
  const nEff = Math.max(2, n);
  const zCrit = normalInv(1 - alpha / 2);
  const muA = (effect * Math.sqrt(nEff)) / sigma;
  const beta = clamp(normalCdf(zCrit - muA) - normalCdf(-zCrit - muA), 0, 1);
  return { power: clamp(1 - beta, 0, 1), beta };
}

function drawAct7PowerChart() {
  if (!els.act7PowerSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act7PowerSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 18, right: 18, bottom: 38, left: 34 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const nMax = 600;
  const nVals = d3.range(10, nMax + 1, 5);
  const data = nVals.map((n) => ({
    n,
    power: twoSidedZPower(n, act7State.power.effect, act7State.power.alpha, act7State.power.sigma).power,
  }));

  const x = d3.scaleLinear().domain([10, nMax]).range([margin.left, margin.left + innerW]);
  const y = d3.scaleLinear().domain([0, 1]).range([margin.top + innerH, margin.top]);

  y.ticks(5).forEach((tick) => {
    svg
      .append("line")
      .attr("x1", margin.left)
      .attr("x2", margin.left + innerW)
      .attr("y1", y(tick))
      .attr("y2", y(tick))
      .attr("stroke", "rgba(72,102,120,0.08)")
      .attr("stroke-width", 0.8);
  });

  const line = d3
    .line()
    .x((d) => x(d.n))
    .y((d) => y(d.power))
    .curve(d3.curveBasis);

  svg
    .append("path")
    .datum(data)
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#0072b2")
    .attr("stroke-width", 2.2);

  const current = twoSidedZPower(act7State.power.n, act7State.power.effect, act7State.power.alpha, act7State.power.sigma);
  svg
    .append("circle")
    .attr("cx", x(act7State.power.n))
    .attr("cy", y(current.power))
    .attr("r", 4)
    .attr("fill", "#d55e00");

  const xAxis = d3.axisBottom(x).ticks(8).tickSizeOuter(0);
  const yAxis = d3.axisLeft(y).ticks(5).tickFormat((v) => fmtNum(v, 2)).tickSizeOuter(0);
  const gx = svg.append("g").attr("transform", `translate(0, ${margin.top + innerH})`).call(xAxis);
  gx.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gx.selectAll("path,line").attr("stroke", "#4a6678");
  const gy = svg.append("g").attr("transform", `translate(${margin.left}, 0)`).call(yAxis);
  gy.selectAll("text").attr("fill", "#355b72").style("font-size", "9px");
  gy.selectAll("path,line").attr("stroke", "#4a6678");

  if (els.act7PowerVal) els.act7PowerVal.textContent = fmtNum(current.power, 3);
  if (els.act7BetaVal) els.act7BetaVal.textContent = fmtNum(current.beta, 3);
  if (els.act7AlphaVal) els.act7AlphaVal.textContent = fmtNum(act7State.power.alpha, 3);
  if (els.act7PowerSummary) {
    els.act7PowerSummary.textContent =
      `At n=${fmtInt(act7State.power.n)}, effect=${fmtNum(act7State.power.effect, 2)}, alpha=${fmtNum(act7State.power.alpha, 3)}: power=${fmtNum(current.power, 3)}.`;
  }
}

function drawAct7PValueDemo() {
  if (!els.act7PSvg) return;
  const z = act7State.pval.zObs;
  drawAct7TailChart(els.act7PSvg, {
    pdfFn: (x) => normalPdf(x, 0, 1),
    domain: [-4, 4],
    stat: z,
    mode: "two",
  });
  const p = tailPFromCdf(z, "two", normalCdf);
  if (els.act7PVal) els.act7PVal.textContent = fmtNum(p, 4);
  if (els.act7PTail) els.act7PTail.textContent = `|z| ≥ ${fmtNum(Math.abs(z), 2)}`;
  if (els.act7PSummary) {
    els.act7PSummary.textContent =
      `Under H0, the orange tails beyond ±${fmtNum(Math.abs(z), 2)} contain probability p=${fmtNum(p, 4)}.`;
  }
}

function drawAct7SidedDemo() {
  if (!els.act7SideSvg) return;
  const { mode, zObs } = act7State.side;
  drawAct7TailChart(els.act7SideSvg, {
    pdfFn: (x) => normalPdf(x, 0, 1),
    domain: [-4, 4],
    stat: zObs,
    mode,
  });
  const p = tailPFromCdf(zObs, mode, normalCdf);
  if (els.act7SideP) els.act7SideP.textContent = fmtNum(p, 4);
  if (els.act7SideRule) els.act7SideRule.textContent = p < 0.05 ? "Reject H0" : "Fail to reject H0";
  if (els.act7SideSummary) {
    const label = mode === "two" ? "two-sided" : mode === "right" ? "one-sided right" : "one-sided left";
    const region =
      mode === "two"
        ? `both tails beyond ±${fmtNum(Math.abs(zObs), 2)}`
        : mode === "right"
          ? `the right tail beyond ${fmtNum(zObs, 2)}`
          : `the left tail below ${fmtNum(zObs, 2)}`;
    els.act7SideSummary.textContent =
      `Using ${label} tails with z=${fmtNum(zObs, 2)} gives p=${fmtNum(p, 4)}. The orange region is ${region} under H0.`;
  }
}

function runAct7MultipleSimulation() {
  const m = Math.max(2, Math.round(act7State.mult.m));
  const alpha = clamp(act7State.mult.alpha, 0.0001, 0.5);
  act7State.mult.flags = Array.from({ length: m }, () => Math.random() < alpha);
}

function drawAct7MultipleChart() {
  if (!els.act7MultSvg || !window.d3) return;
  const d3 = window.d3;
  const svgNode = els.act7MultSvg;
  const w = Math.max(420, Math.floor(svgNode.clientWidth));
  const h = Math.max(170, Math.floor(svgNode.clientHeight));
  const margin = { top: 16, right: 16, bottom: 16, left: 16 };
  const innerW = w - margin.left - margin.right;
  const innerH = h - margin.top - margin.bottom;
  const svg = d3.select(svgNode);
  svg.attr("viewBox", `0 0 ${w} ${h}`);
  svg.selectAll("*").remove();

  const m = Math.max(2, Math.round(act7State.mult.m));
  if (!act7State.mult.flags.length || act7State.mult.flags.length !== m) runAct7MultipleSimulation();
  const flags = act7State.mult.flags;

  const cols = Math.ceil(Math.sqrt(m * 2.2));
  const rows = Math.ceil(m / cols);
  const stepX = innerW / cols;
  const stepY = innerH / rows;
  const radius = Math.max(2.4, Math.min(6, Math.min(stepX, stepY) * 0.28));

  flags.forEach((isFalse, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const cx = margin.left + c * stepX + stepX * 0.5;
    const cy = margin.top + r * stepY + stepY * 0.5;
    svg
      .append("circle")
      .attr("cx", cx)
      .attr("cy", cy)
      .attr("r", radius)
      .attr("fill", isFalse ? "rgba(213,94,0,0.7)" : "rgba(0,114,178,0.5)")
      .attr("stroke", isFalse ? "#d55e00" : "rgba(0,114,178,0.8)")
      .attr("stroke-width", 0.7);
  });

  const alpha = act7State.mult.alpha;
  const expected = m * alpha;
  const fwer = 1 - (1 - alpha) ** m;
  const lastFalse = flags.filter(Boolean).length;

  if (els.act7MultExpected) els.act7MultExpected.textContent = fmtNum(expected, 2);
  if (els.act7MultFwer) els.act7MultFwer.textContent = fmtNum(fwer, 3);
  if (els.act7MultLastFalse) els.act7MultLastFalse.textContent = fmtInt(lastFalse);
  if (els.act7MultSummary) {
    els.act7MultSummary.textContent =
      `With m=${fmtInt(m)} and alpha=${fmtNum(alpha, 3)}, expected false positives ≈ ${fmtNum(expected, 2)}, ` +
      `FWER=${fmtNum(fwer, 3)}. Last run produced ${fmtInt(lastFalse)}.`;
  }
}

function initAct7Scene() {
  if (!els.act7ZSvg && !els.act7TSvg && !els.act7PowerSvg && !els.act7PSvg && !els.act7SideSvg && !els.act7MultSvg) return;
  syncAct7Controls();
  runAct7ZSample(true);
  runAct7TSample(true);
  drawAct7PowerChart();
  drawAct7PValueDemo();
  drawAct7SidedDemo();
  runAct7MultipleSimulation();
  drawAct7MultipleChart();

  const zResample = () => {
    syncAct7Controls();
    runAct7ZSample(false);
  };
  const tResample = () => {
    syncAct7Controls();
    runAct7TSample(false);
  };

  if (els.act7ZNRange) els.act7ZNRange.addEventListener("input", () => { act7State.z.n = Number(els.act7ZNRange.value); zResample(); });
  if (els.act7ZMu0Range) els.act7ZMu0Range.addEventListener("input", () => { act7State.z.mu0 = Number(els.act7ZMu0Range.value); zResample(); });
  if (els.act7ZTrueMuRange) els.act7ZTrueMuRange.addEventListener("input", () => { act7State.z.trueMu = Number(els.act7ZTrueMuRange.value); zResample(); });
  if (els.act7ZSigmaRange) els.act7ZSigmaRange.addEventListener("input", () => { act7State.z.sigma = Number(els.act7ZSigmaRange.value); zResample(); });
  if (els.act7ZSampleBtn) els.act7ZSampleBtn.addEventListener("click", () => runAct7ZSample(true));

  if (els.act7TNRange) els.act7TNRange.addEventListener("input", () => { act7State.t.n = Number(els.act7TNRange.value); tResample(); });
  if (els.act7TMu0Range) els.act7TMu0Range.addEventListener("input", () => { act7State.t.mu0 = Number(els.act7TMu0Range.value); tResample(); });
  if (els.act7TTrueMuRange) els.act7TTrueMuRange.addEventListener("input", () => { act7State.t.trueMu = Number(els.act7TTrueMuRange.value); tResample(); });
  if (els.act7TSigmaRange) els.act7TSigmaRange.addEventListener("input", () => { act7State.t.sigma = Number(els.act7TSigmaRange.value); tResample(); });
  if (els.act7TSampleBtn) els.act7TSampleBtn.addEventListener("click", () => runAct7TSample(true));

  const powerUpdate = () => {
    syncAct7Controls();
    drawAct7PowerChart();
  };
  if (els.act7PowerNRange) els.act7PowerNRange.addEventListener("input", () => { act7State.power.n = Number(els.act7PowerNRange.value); powerUpdate(); });
  if (els.act7PowerEffectRange) els.act7PowerEffectRange.addEventListener("input", () => { act7State.power.effect = Number(els.act7PowerEffectRange.value); powerUpdate(); });
  if (els.act7PowerAlphaRange) els.act7PowerAlphaRange.addEventListener("input", () => { act7State.power.alpha = Number(els.act7PowerAlphaRange.value); powerUpdate(); });

  if (els.act7PZRange) {
    els.act7PZRange.addEventListener("input", () => {
      act7State.pval.zObs = Number(els.act7PZRange.value);
      syncAct7Controls();
      drawAct7PValueDemo();
    });
  }

  const sideUpdate = () => {
    syncAct7Controls();
    drawAct7SidedDemo();
  };
  if (els.act7SideSelect) els.act7SideSelect.addEventListener("change", () => { act7State.side.mode = els.act7SideSelect.value; sideUpdate(); });
  if (els.act7SideZRange) els.act7SideZRange.addEventListener("input", () => { act7State.side.zObs = Number(els.act7SideZRange.value); sideUpdate(); });

  const multUpdate = (rerun = false) => {
    syncAct7Controls();
    if (rerun) runAct7MultipleSimulation();
    drawAct7MultipleChart();
  };
  if (els.act7MultMRange) els.act7MultMRange.addEventListener("input", () => { act7State.mult.m = Number(els.act7MultMRange.value); multUpdate(true); });
  if (els.act7MultAlphaRange) els.act7MultAlphaRange.addEventListener("input", () => { act7State.mult.alpha = Number(els.act7MultAlphaRange.value); multUpdate(true); });
  if (els.act7MultRunBtn) els.act7MultRunBtn.addEventListener("click", () => multUpdate(true));
}

function randomAct3Dataset() {
  if (!act3DozenState.names.length) return;
  const pool = act3DozenState.names.filter((name) => name !== act3DozenState.selected);
  const next = pool.length ? pool[Math.floor(Math.random() * pool.length)] : act3DozenState.names[0];
  act3DozenState.selected = next;
  if (els.act3DatasetSelect) els.act3DatasetSelect.value = next;
  drawAct3DozenScatter();
}

async function initAct3Scene() {
  if (!els.act3DozenSvg || !els.act3DatasetSelect) return;

  setAct3Status("Loading Datasaurus Dozen...");

  try {
    const rows = await loadDatasaurusRows();
    prepareDatasaurus(rows);
    if (!act3DozenState.loaded) throw new Error("No usable dataset rows found");

    populateAct3Select();
    drawAct3DozenScatter();
    drawAct3SmallMultiples();
    drawAct3DinoFocus();

    els.act3DatasetSelect.addEventListener("change", (event) => {
      act3DozenState.selected = event.target.value;
      drawAct3DozenScatter();
    });

    if (els.act3ShuffleBtn) {
      els.act3ShuffleBtn.addEventListener("click", randomAct3Dataset);
    }
  } catch (err) {
    setAct3Status("Could not load Datasaurus Dozen right now. Check connection and refresh.");
  }
}

function redrawResponsiveVisuals() {
  drawMiniCorrelation();
  drawMiniUserChart();
  drawAct2HeightHistogram();
  drawAct2SkewHistograms();
  drawAct2MultiPeakHistogram();
  drawAct3DozenScatter();
  drawAct3SmallMultiples();
  drawAct3DinoFocus();
  drawAct3Pairplot();
  drawAct3Boxplots();
  drawAct4LiftDemo();
  drawAct4ObservedGapDemo();
  drawAct4CiConceptDemo();
  drawAct4ZConceptDemo();
  drawAct4NullPChart();
  drawAct4PConceptDemo();
  drawAct4InferenceChart();
  drawAct4HistoryChart();
  drawAct5AssumptionChart();
  drawAct5DistributionChart();
  drawAct5QqDiagnostics();
  drawAct5QqFamilyDiagnostics();
  drawAct5QqScenarioDiagnostics();
  drawAct6Scatter();
  drawAct6SlopeDist();
  drawAct6MomMleChart();
  drawAct7ZChart();
  drawAct7TChart();
  drawAct7PowerChart();
  drawAct7PValueDemo();
  drawAct7SidedDemo();
  drawAct7MultipleChart();
}

function redrawResponsiveVisualsAfterLayout() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      redrawResponsiveVisuals();
    });
  });
}

window.addEventListener("resize", () => {
  redrawResponsiveVisuals();
});

startHeroParticles();
initAssessments();
startMiniCorrelationDemo();
startMiniUserDemo();
initAct2Scene1();
initAct2Scene2();
initAct2Scene3();
initAct2Scene4();
initAct3Scene();
initAct3Scene3();
initAct3Scene4();
initAct4Scene();
initAct5Scene();
initAct6Scene();
initAct7Scene();
