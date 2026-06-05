/**
 * Mercer level-analysis prototype — ALL mock data lives here.
 *
 * This is the single file to swap when the real benchmark numbers and the
 * level → Mercer-code mapping arrive. Nothing else hardcodes a salary, a
 * Mercer code, or a chat line.
 *
 * Model: an internal job catalog of roles. Each role belongs to a
 * function → family and has several internal levels. The customer picks a
 * role in the org chart and triggers an AI analysis of ALL its levels
 * against Mercer market data. The chat is fully scripted.
 *
 * "Software Engineer" (id `swe`) is hand-authored; every other role's
 * numbers are generated deterministically so the whole catalog is
 * interactive in the demo.
 */

export type Confidence = "High" | "Medium" | "Low"

/** One row of the benchmark report / distributions table. */
export type BenchmarkRow = {
  level: string
  mercerCode: string
  marketMedian: number
  marketP25: number
  marketP75: number
  yourMin: number
  yourMax: number
  confidence: Confidence
}

/** A salary range for a single location. */
export type SalaryByLocation = {
  location: string
  min: number
  max: number
}

/** Skeleton-level detail shown in the role detail drawer for ONE level. */
export type LevelDetail = {
  level: string
  description: string
  badge: string
  salaryMin: number
  salaryMax: number
  workingConditions: string
  salariesByLocation: SalaryByLocation[]
  competencies: string[]
  devices: string[]
}

/** A role in the internal job catalog. */
export type CatalogRole = {
  id: string
  title: string
  family: string
  function: string
  /** Internal levels, low → high, e.g. ["L1","L2","L3","Manager"]. */
  levels: string[]
  /** Mercer position family this role maps to, e.g. "TEC.05.001". */
  mercerFamily: string
  /** Mercer role title the match resolves to. */
  mercerTitle: string
  /** L1 internal minimum salary; higher levels scale from here. */
  baseMin: number
}

/** Locations the company has salaries for, in the job catalog. */
export const analysisLocations: string[] = ["Barcelona", "Madrid", "Berlin"]
const LOCATION_FACTOR: Record<string, number> = {
  Barcelona: 1,
  Madrid: 1.04,
  Berlin: 1.18,
}

/** The internal job catalog rendered as the org chart. */
export const catalog: CatalogRole[] = [
  {
    id: "swe",
    title: "Software Engineer",
    family: "Software Development",
    function: "Engineering",
    levels: ["L1", "L2", "L3", "L4", "Manager"],
    mercerFamily: "TEC.05.001",
    mercerTitle: "Software Development Engineer",
    baseMin: 28000,
  },
  {
    id: "qae",
    title: "QA Engineer",
    family: "Quality Assurance",
    function: "Engineering",
    levels: ["L1", "L2", "L3"],
    mercerFamily: "TEC.06.002",
    mercerTitle: "Quality Assurance Engineer",
    baseMin: 26000,
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    family: "Infrastructure",
    function: "Engineering",
    levels: ["L1", "L2", "L3", "L4"],
    mercerFamily: "TEC.07.003",
    mercerTitle: "Infrastructure / DevOps Engineer",
    baseMin: 30000,
  },
  {
    id: "pm",
    title: "Product Manager",
    family: "Product Management",
    function: "Product & Design",
    levels: ["L1", "L2", "L3", "Manager"],
    mercerFamily: "PRD.01.001",
    mercerTitle: "Product Manager",
    baseMin: 34000,
  },
  {
    id: "designer",
    title: "Product Designer",
    family: "Design",
    function: "Product & Design",
    levels: ["L1", "L2", "L3"],
    mercerFamily: "DSG.02.001",
    mercerTitle: "Product Designer",
    baseMin: 30000,
  },
  {
    id: "ae",
    title: "Account Executive",
    family: "Account Management",
    function: "Sales",
    levels: ["L1", "L2", "L3", "Manager"],
    mercerFamily: "SAL.01.001",
    mercerTitle: "Account Executive",
    baseMin: 28000,
  },
  {
    id: "growth",
    title: "Growth Marketer",
    family: "Growth",
    function: "Marketing",
    levels: ["L1", "L2", "L3"],
    mercerFamily: "MKT.03.002",
    mercerTitle: "Growth Marketing Specialist",
    baseMin: 27000,
  },
  {
    id: "analyst",
    title: "Financial Analyst",
    family: "Financial Analysis",
    function: "Finance",
    levels: ["L1", "L2", "L3"],
    mercerFamily: "FIN.02.001",
    mercerTitle: "Financial Analyst",
    baseMin: 29000,
  },
]

export function findRole(roleId: string): CatalogRole {
  return catalog.find((r) => r.id === roleId) ?? catalog[0]
}

// ── Hand-authored hero data (Software Engineer) ──────────────────────

const HERO_ROWS: BenchmarkRow[] = [
  { level: "L1", mercerCode: "TEC.05.001.P20", marketP25: 27000, marketMedian: 32000, marketP75: 38000, yourMin: 28000, yourMax: 36000, confidence: "High" },
  { level: "L2", mercerCode: "TEC.05.001.P30", marketP25: 38000, marketMedian: 44000, marketP75: 51000, yourMin: 36000, yourMax: 46000, confidence: "High" },
  { level: "L3", mercerCode: "TEC.05.001.P40", marketP25: 50000, marketMedian: 58000, marketP75: 68000, yourMin: 48000, yourMax: 62000, confidence: "Medium" },
  { level: "L4", mercerCode: "TEC.05.001.P50", marketP25: 64000, marketMedian: 75000, marketP75: 88000, yourMin: 65000, yourMax: 82000, confidence: "Medium" },
  { level: "Manager", mercerCode: "TEC.05.001.M40", marketP25: 72000, marketMedian: 85000, marketP75: 100000, yourMin: 70000, yourMax: 90000, confidence: "Low" },
]

// ── Deterministic generation for non-hero roles ──────────────────────

function variance(seed: string, i: number): number {
  let h = 2166136261
  const s = `${seed}:${i}`
  for (let k = 0; k < s.length; k++) {
    h ^= s.charCodeAt(k)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 1000) / 1000
}

const round500 = (n: number) => Math.round(n / 500) * 500

function levelCode(role: CatalogRole, level: string, i: number): string {
  if (/manager|director|lead/i.test(level)) return `${role.mercerFamily}.M40`
  return `${role.mercerFamily}.P${20 + i * 10}`
}

function generateRows(role: CatalogRole): BenchmarkRow[] {
  const growth = 1.28
  return role.levels.map((level, i) => {
    const yourMin = round500(role.baseMin * growth ** i)
    const yourMax = round500(yourMin * 1.3)
    const mid = (yourMin + yourMax) / 2
    const v = variance(role.id, i)
    const marketMedian = round500(mid * (0.97 + v * 0.13))
    const marketP25 = round500(marketMedian * 0.88)
    const marketP75 = round500(marketMedian * 1.16)
    const confidence: Confidence = v > 0.66 ? "High" : v > 0.33 ? "Medium" : "Low"
    return {
      level,
      mercerCode: levelCode(role, level, i),
      marketMedian,
      marketP25,
      marketP75,
      yourMin,
      yourMax,
      confidence,
    }
  })
}

export function benchmarkRowsFor(role: CatalogRole): BenchmarkRow[] {
  return role.id === "swe" ? HERO_ROWS : generateRows(role)
}

// ── Level detail (drawer) ────────────────────────────────────────────

const SHARED_DEVICES = ['MacBook Pro 14"', "External monitor", "iPhone 15", "Headset"]

const COMPETENCIES_BY_FUNCTION: Record<string, string[]> = {
  Engineering: ["System design", "Code review", "Testing & QA", "Incident response", "Mentoring", "Stakeholder comms"],
  "Product & Design": ["Discovery", "Prototyping", "User research", "Roadmapping", "Stakeholder comms", "Data analysis"],
  Sales: ["Prospecting", "Negotiation", "Pipeline mgmt", "Forecasting", "CRM hygiene", "Stakeholder comms"],
  Marketing: ["Campaigns", "Analytics", "Copywriting", "SEO/SEM", "Experimentation", "Stakeholder comms"],
  Finance: ["Modelling", "Reporting", "Forecasting", "Controls", "Stakeholder comms", "Data analysis"],
}

function badgeFor(level: string, i: number, total: number): string {
  if (/manager|director|lead/i.test(level)) return "People manager"
  if (i >= total - 1) return "Staff IC"
  if (i >= total - 2) return "Senior IC"
  return "Individual contributor"
}

function describeLevel(role: CatalogRole, level: string, i: number, total: number): string {
  if (/manager|director|lead/i.test(level))
    return `Leads a ${role.title} team — owns delivery, hiring and people growth.`
  if (i === 0) return `Entry-level ${role.title}. Works on well-scoped tasks with guidance.`
  if (i >= total - 1) return `Drives technical direction for ${role.title} across teams.`
  return `${role.title} who owns work end-to-end with limited supervision.`
}

function buildLevelDetail(role: CatalogRole, row: BenchmarkRow, i: number, total: number): LevelDetail {
  const salariesByLocation: SalaryByLocation[] = analysisLocations.map((location) => {
    const factor = LOCATION_FACTOR[location] ?? 1
    return {
      location,
      min: round500(row.yourMin * factor),
      max: round500(row.yourMax * factor),
    }
  })
  return {
    level: row.level,
    description: describeLevel(role, row.level, i, total),
    badge: badgeFor(row.level, i, total),
    salaryMin: row.yourMin,
    salaryMax: row.yourMax,
    workingConditions: "Hybrid · Full-time · 40h/week · Madrid HQ",
    salariesByLocation,
    competencies: COMPETENCIES_BY_FUNCTION[role.function] ?? COMPETENCIES_BY_FUNCTION.Engineering,
    devices: SHARED_DEVICES,
  }
}

export function levelDetailsFor(role: CatalogRole): Record<string, LevelDetail> {
  const rows = benchmarkRowsFor(role)
  return Object.fromEntries(
    rows.map((row, i) => [row.level, buildLevelDetail(role, row, i, rows.length)])
  )
}

// ── Bundled analysis for a role ──────────────────────────────────────

export type RoleAnalysis = {
  role: CatalogRole
  rows: BenchmarkRow[]
  levelDetails: Record<string, LevelDetail>
  levelIds: string[]
}

export function getRoleAnalysis(roleId: string): RoleAnalysis {
  const role = findRole(roleId)
  const rows = benchmarkRowsFor(role)
  return {
    role,
    rows,
    levelDetails: levelDetailsFor(role),
    levelIds: rows.map((r) => r.level),
  }
}

// ── Scripted chat (per role) ─────────────────────────────────────────

const THOUGHT_STEP_MS = 750

export type ChatScript = {
  userMessage: string
  thoughts: string[]
  thoughtStepMs: number
  thinkingSeconds: number
  assistantReply: string
  reportCard: { title: string; subtitle: string }
}

export function buildChatScript(role: CatalogRole, rows: BenchmarkRow[]): ChatScript {
  const levelRange = `${rows[0].level}–${rows[rows.length - 1].level}`
  const thoughts = [
    "Searching the Mercer catalog for a matching role…",
    `Matched “${role.title}” → Mercer “${role.mercerTitle}” (${role.mercerFamily})`,
    `Pulling Mercer market data for all ${rows.length} levels (${levelRange})…`,
    `Reading your job catalog — found salary ranges for ${analysisLocations.join(", ")}`,
    "Aligning your internal ranges with the market P25–P75 per level…",
    "Building the benchmark report…",
  ]
  return {
    userMessage: `Give me a salary benchmark for ${role.title}s.`,
    thoughts,
    thoughtStepMs: THOUGHT_STEP_MS,
    thinkingSeconds: Math.round(((thoughts.length + 1) * THOUGHT_STEP_MS) / 1000),
    assistantReply: [
      `All done — here's your **${role.title}** benchmark:`,
      [
        `- I found a match in Mercer: **${role.mercerTitle}** (**${role.mercerFamily}**).`,
        `- I analyzed all **${rows.length} levels** — ${levelRange} — against the market.`,
        `- I picked **${analysisLocations.join(", ")}**, since those are the locations you have for this role in the job catalog.`,
      ].join("\n"),
      `Want me to add another location? Open the report below for the full breakdown.`,
    ].join("\n\n"),
    reportCard: {
      title: `Mercer benchmark — ${role.title}`,
      subtitle: `${rows.length} levels · ${analysisLocations.length} locations · Mercer market data`,
    },
  }
}

// ── Scripted follow-up (clarifying-question demo) ────────────────────

const PM_ROLE = findRole("pm")
const DESIGNER_ROLE = findRole("designer")

/**
 * After the first benchmark, the user can ask about a weird-named role.
 * The assistant proposes the closest Mercer match, the user corrects it,
 * and the assistant resolves the real role + offers a second report.
 */
export const followUpScript = {
  thoughtStepMs: THOUGHT_STEP_MS,
  prompts: {
    ask: `Can you also benchmark our "Product Maker" role?`,
    reject: `It's the design one — we call it "Product Maker", but it's really our product designer.`,
  },
  // Stage 0 — the assistant searches and comes up uncertain.
  thoughtsAsk: [
    `Searching the Mercer catalog for "Product Maker"…`,
    `No exact title match — comparing responsibilities and seniority…`,
    `Found a few candidates, but match confidence is low…`,
  ],
  clarify: [
    `I couldn't pin down **Product Maker** with confidence — it isn't a standard Mercer title. The closest matches are:`,
    [
      `- **${PM_ROLE.mercerTitle}** (${PM_ROLE.mercerFamily}) — owns product direction and roadmap`,
      `- **${DESIGNER_ROLE.mercerTitle}** (${DESIGNER_ROLE.mercerFamily}) — designs the product experience`,
      `- **Product Owner** (PRD.01.004) — manages the backlog and delivery`,
    ].join("\n"),
    `Which one sounds like yours?`,
  ].join("\n\n"),
  // Stage 1 — user clarifies, the assistant resolves it confidently.
  thoughtsResolve: [
    `Re-checking the design track in Mercer…`,
    `Matched Product Designer — high confidence this time.`,
  ],
  answer: [
    `Got it — that's your **${DESIGNER_ROLE.title}** track.`,
    `Matched to Mercer's **${DESIGNER_ROLE.mercerTitle}** (**${DESIGNER_ROLE.mercerFamily}**), high confidence this time. Here's the benchmark:`,
  ].join("\n\n"),
  resolvedRoleId: "designer",
}

/** Report-card title/subtitle for a given role id. */
export function reportCardFor(roleId: string): {
  title: string
  subtitle: string
} {
  const a = getRoleAnalysis(roleId)
  return buildChatScript(a.role, a.rows).reportCard
}

// ── Formatting helpers ───────────────────────────────────────────────

export function formatCompact(value: number): string {
  return `€${Math.round(value / 1000)}k`
}

export function formatFull(value: number): string {
  return `€${value.toLocaleString("en-US")}`
}

const CONFIDENCE_VARIANT: Record<Confidence, "positive" | "warning" | "critical"> = {
  High: "positive",
  Medium: "warning",
  Low: "critical",
}

export function confidenceVariant(c: Confidence): "positive" | "warning" | "critical" {
  return CONFIDENCE_VARIANT[c]
}
