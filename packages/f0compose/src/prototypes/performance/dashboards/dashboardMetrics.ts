import type {
  ChartColorToken,
  F0DataChartBarSeries,
  F0DataChartLineSeries,
  F0DataChartPieSeries,
  F0DataChartRadarIndicator,
  F0DataChartRadarSeries,
} from "@factorialco/f0-react"

import {
  competencies,
  employeeCompetencies,
  feedbacks,
  goals,
  performanceCycles,
  performanceReviews,
  type CompetencyLevel,
} from "@/fixtures/performance"

// ---------------------------------------------------------------------------
// KPI tiles (top row)
// ---------------------------------------------------------------------------

export type DashboardKpi = {
  id: string
  label: string
  /** Big value. */
  value: number
  /** Unit symbol shown next to the value (e.g. "%"). */
  units?: string
  unitsPosition?: "prepend" | "append"
  /** Previous-period value used to compute the trend. */
  comparison: number
  /** Caption rendered under the comparison. */
  comparisonHint: string
  /**
   * When true, a downward trend reads as positive (used for metrics where
   * "less is better", e.g. pending reviews).
   */
  invertStatus?: boolean
}

const ACTIVE_STATUSES = new Set(["active"])

/** Active cycles with reviewer counts, used for the participation KPIs. */
const activeCyclesWithCounts = performanceCycles.filter(
  (c) =>
    ACTIVE_STATUSES.has(c.status) &&
    typeof c.completed === "number" &&
    typeof c.total === "number" &&
    (c.total ?? 0) > 0
)

function overallParticipation(): number {
  const completed = activeCyclesWithCounts.reduce(
    (sum, c) => sum + (c.completed ?? 0),
    0
  )
  const total = activeCyclesWithCounts.reduce(
    (sum, c) => sum + (c.total ?? 0),
    0
  )
  return total === 0 ? 0 : Math.round((completed / total) * 100)
}

const reviewsCompleted = performanceReviews.filter(
  (r) => r.status === "completed"
).length

const reviewsPending = performanceReviews.filter(
  (r) => r.status === "draft" || r.status === "submitted"
).length

const avgGoalProgress = Math.round(
  goals.reduce((sum, g) => sum + g.progress, 0) / Math.max(1, goals.length)
)

export const dashboardKpis: DashboardKpi[] = [
  {
    id: "participation",
    label: "Participación media",
    value: overallParticipation(),
    units: "%",
    unitsPosition: "append",
    comparison: 31,
    comparisonHint: "vs. ciclo anterior",
  },
  {
    id: "reviews-completed",
    label: "Reviews completadas",
    value: reviewsCompleted,
    comparison: 5,
    comparisonHint: `de ${performanceReviews.length} en el ciclo`,
  },
  {
    id: "reviews-pending",
    label: "Reviews pendientes",
    value: reviewsPending,
    comparison: 6,
    comparisonHint: "borradores y enviadas",
    invertStatus: true,
  },
  {
    id: "goal-progress",
    label: "Progreso medio de objetivos",
    value: avgGoalProgress,
    units: "%",
    unitsPosition: "append",
    comparison: 54,
    comparisonHint: "vs. trimestre anterior",
  },
]

// ---------------------------------------------------------------------------
// Participation by cycle (line chart)
// ---------------------------------------------------------------------------

/**
 * Hand-picked recent cycles with distinct short labels, ordered oldest →
 * newest, so the completion-rate line tells the "recent active cycles are
 * lagging" story without colliding duplicate month labels.
 */
const PARTICIPATION_CYCLES: { id: string; label: string }[] = [
  { id: "cyc-007", label: "Sep '25" },
  { id: "cyc-006", label: "Oct '25" },
  { id: "cyc-005", label: "Dic '25" },
  { id: "cyc-003", label: "Ene '26" },
  { id: "cyc-014", label: "Feb '26" },
  { id: "cyc-001", label: "Abr '26" },
]

function completionRate(cycleId: string): number {
  const c = performanceCycles.find((x) => x.id === cycleId)
  if (!c || !c.total || c.completed == null) return 0
  return Math.round((c.completed / c.total) * 100)
}

export const participationByCycle: {
  categories: string[]
  series: F0DataChartLineSeries[]
} = {
  categories: PARTICIPATION_CYCLES.map((c) => c.label),
  series: [
    {
      name: "Tasa de finalización",
      data: PARTICIPATION_CYCLES.map((c) => completionRate(c.id)),
      color: "malibu",
    },
  ],
}

// ---------------------------------------------------------------------------
// Ratings distribution (bar chart)
// ---------------------------------------------------------------------------

const RATING_BUCKETS: {
  label: string
  match: (rating: string | undefined) => boolean
  color: ChartColorToken
}[] = [
  { label: "Exceeds", match: (r) => r === "exceeds", color: "grass" },
  { label: "Meets", match: (r) => r === "meets", color: "malibu" },
  { label: "Below", match: (r) => r === "below", color: "red" },
  { label: "Sin calificar", match: (r) => r == null, color: "smoke" },
]

export const ratingsDistribution: {
  categories: string[]
  series: F0DataChartBarSeries[]
} = {
  categories: RATING_BUCKETS.map((b) => b.label),
  series: [
    {
      name: "Reviews",
      data: RATING_BUCKETS.map((bucket) => ({
        value: performanceReviews.filter((r) => bucket.match(r.rating)).length,
        color: bucket.color,
      })),
    },
  ],
}

// ---------------------------------------------------------------------------
// Goals by status (donut chart)
// ---------------------------------------------------------------------------

const GOAL_STATUS_META: Record<
  string,
  { label: string; color: ChartColorToken }
> = {
  "on-track": { label: "On track", color: "grass" },
  "at-risk": { label: "At risk", color: "yellow" },
  completed: { label: "Completados", color: "viridian" },
  abandoned: { label: "Abandonados", color: "red" },
}

export const goalsByStatus: F0DataChartPieSeries = {
  name: "Objetivos por estado",
  data: Object.entries(GOAL_STATUS_META)
    .map(([status, meta]) => ({
      name: meta.label,
      value: goals.filter((g) => g.status === status).length,
      color: meta.color,
    }))
    .filter((d) => d.value > 0),
}

// ---------------------------------------------------------------------------
// Goal progress per goal (horizontal bar chart)
// ---------------------------------------------------------------------------

function shortTitle(title: string): string {
  return title.length > 28 ? `${title.slice(0, 27)}…` : title
}

export const goalProgress: {
  categories: string[]
  series: F0DataChartBarSeries[]
} = {
  categories: goals.map((g) => shortTitle(g.title)),
  series: [
    {
      name: "Progreso",
      data: goals.map((g) => ({
        value: g.progress,
        color:
          g.status === "at-risk"
            ? "yellow"
            : g.status === "abandoned"
              ? "red"
              : g.status === "completed"
                ? "viridian"
                : "grass",
      })),
    },
  ],
}

// ---------------------------------------------------------------------------
// Competencies: current vs target level by category (radar chart)
// ---------------------------------------------------------------------------

const LEVEL_VALUE: Record<CompetencyLevel, number> = {
  novice: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
}

const COMPETENCY_CATEGORIES: {
  key: "technical" | "leadership" | "communication" | "execution"
  label: string
}[] = [
  { key: "technical", label: "Técnicas" },
  { key: "leadership", label: "Liderazgo" },
  { key: "communication", label: "Comunicación" },
  { key: "execution", label: "Ejecución" },
]

function avg(values: number[]): number {
  if (values.length === 0) return 0
  return Math.round((values.reduce((s, v) => s + v, 0) / values.length) * 10) / 10
}

function levelsForCategory(category: string): {
  current: number[]
  target: number[]
} {
  const idsInCategory = new Set(
    competencies.filter((c) => c.category === category).map((c) => c.id)
  )
  const rows = employeeCompetencies.filter((ec) =>
    idsInCategory.has(ec.competencyId)
  )
  return {
    current: rows.map((ec) => LEVEL_VALUE[ec.currentLevel]),
    target: rows.map((ec) => LEVEL_VALUE[ec.targetLevel]),
  }
}

export const competencyRadar: {
  indicators: F0DataChartRadarIndicator[]
  series: F0DataChartRadarSeries[]
} = {
  indicators: COMPETENCY_CATEGORIES.map((c) => ({ name: c.label, max: 4 })),
  series: [
    {
      name: "Nivel actual",
      data: COMPETENCY_CATEGORIES.map((c) => avg(levelsForCategory(c.key).current)),
      color: "malibu",
    },
    {
      name: "Objetivo",
      data: COMPETENCY_CATEGORIES.map((c) => avg(levelsForCategory(c.key).target)),
      color: "indigo",
    },
  ],
}

// ---------------------------------------------------------------------------
// Feedback by type (bar chart)
// ---------------------------------------------------------------------------

const FEEDBACK_BUCKETS: {
  label: string
  type: "praise" | "constructive" | "request"
  color: ChartColorToken
}[] = [
  { label: "Reconocimiento", type: "praise", color: "grass" },
  { label: "Constructivo", type: "constructive", color: "yellow" },
  { label: "Petición", type: "request", color: "malibu" },
]

export const feedbackByType: {
  categories: string[]
  series: F0DataChartBarSeries[]
} = {
  categories: FEEDBACK_BUCKETS.map((b) => b.label),
  series: [
    {
      name: "Feedback",
      data: FEEDBACK_BUCKETS.map((bucket) => ({
        value: feedbacks.filter((f) => f.type === bucket.type).length,
        color: bucket.color,
      })),
    },
  ],
}
