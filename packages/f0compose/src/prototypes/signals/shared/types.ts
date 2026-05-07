/**
 * Performance Signal System — type definitions.
 *
 * The system surfaces "battery scores" (0–100) across 6 performance areas
 * to help managers prepare reviews. Scores are computed on-demand from
 * underlying signals (goals, absences, engagement, etc.).
 */

export type SignalAreaId =
  | "goals"
  | "absenteeism"
  | "engagement"
  | "attendance_productivity"
  | "talent_development"
  | "compensation"
  | "compensation_insights"

export type SignalAreaStatus =
  | "healthy" // score >= 70
  | "warning" // 40 <= score < 70
  | "critical" // score < 40
  | "no_data" // not enough signals
  | "product_not_activated" // module disabled / upsell

export type SignalArea = {
  id: SignalAreaId
  name: string
  shortName: string
  description: string
  /** Whether the underlying product/module is activated. */
  activated: boolean
  /** Default weight (0–100) used by the policy when none is configured. */
  defaultWeight: number
}

export type AreaScore = {
  areaId: SignalAreaId
  /** Battery score 0–100. -1 when status is no_data / product_not_activated. */
  score: number
  status: SignalAreaStatus
  /** Delta vs. previous period in absolute points. */
  delta: number
  /** Short human-readable summary of the main signal driver. */
  headline: string
}

export type EmployeeSignals = {
  employeeId: string
  /** Composite battery score 0–100, weighted across active areas. */
  overall: number
  overallStatus: SignalAreaStatus
  overallDelta: number
  areas: AreaScore[]
  /** 12-month trend of the overall score. */
  trend: number[]
  /** ISO date when scores were last computed (mock). */
  computedAt: string
}

export type SignalAlert = {
  id: string
  employeeId: string
  areaId: SignalAreaId
  severity: "warning" | "critical"
  title: string
  description: string
  triggeredAt: string
}

export type SignalPolicy = {
  id: string
  name: string
  description: string
  /** Per-area weight overrides (0–100). Sums to 100 across active areas. */
  weights: Partial<Record<SignalAreaId, number>>
  /** Areas explicitly excluded from the composite score. */
  excludedAreas: SignalAreaId[]
}

export type SignalContest = {
  id: string
  employeeId: string
  areaId: SignalAreaId
  status: "open" | "resolved" | "dismissed"
  reason: string
  raisedAt: string
}
