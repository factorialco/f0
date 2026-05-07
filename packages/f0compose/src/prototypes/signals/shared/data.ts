import { employees } from "@/fixtures"

import type {
  AreaScore,
  EmployeeSignals,
  SignalAlert,
  SignalAreaId,
  SignalAreaStatus,
  SignalContest,
  SignalPolicy,
} from "./types"

import { SIGNAL_AREAS } from "./areas"

/**
 * Tiny deterministic PRNG (mulberry32) so scores stay stable across renders
 * without polluting the bundle with a real RNG.
 */
function seedFrom(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function rng(seed: number) {
  let s = seed
  return () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const statusFromScore = (score: number): SignalAreaStatus => {
  if (score >= 70) return "healthy"
  if (score >= 40) return "warning"
  return "critical"
}

const HEADLINES: Record<SignalAreaId, string[]> = {
  goals: [
    "3 of 4 OKRs on track for this quarter.",
    "Key result velocity slowed in the last 30 days.",
    "All committed goals delivered ahead of schedule.",
    "Two objectives missing recent updates.",
  ],
  absenteeism: [
    "No unplanned absences in the last 90 days.",
    "Sick days slightly above team average.",
    "Pattern of Friday absences — worth a check-in.",
    "Within the healthy band for the team.",
  ],
  engagement: [
    "eNPS up 12 points vs. last pulse.",
    "Skipped the last 2 pulse surveys.",
    "Active in recognition; gives kudos weekly.",
    "Engagement trending down for two cycles.",
  ],
  attendance_productivity: [
    "Consistently meets scheduled hours.",
    "Overtime increasing — possible burnout signal.",
    "Strong focus-time blocks logged this month.",
    "Frequent late check-ins last 30 days.",
  ],
  talent_development: [
    "Completed 2 trainings this quarter.",
    "No development plan in place.",
    "Ready for stretch assignment per last review.",
    "Mentor sessions stalled for 6 weeks.",
  ],
  compensation: [
    "Salary aligned with band midpoint.",
    "No raise in the last 24 months.",
    "Bonus eligibility met for current cycle.",
    "Below band — review recommended.",
  ],
  compensation_insights: ["Activate Compensation Insights to see market data."],
}

function pick<T>(arr: T[], r: () => number): T {
  return arr[Math.floor(r() * arr.length)]
}

function buildAreaScores(employeeId: string): AreaScore[] {
  const r = rng(seedFrom(`${employeeId}::areas`))
  return SIGNAL_AREAS.map((area) => {
    if (!area.activated) {
      return {
        areaId: area.id,
        score: -1,
        status: "product_not_activated",
        delta: 0,
        headline: HEADLINES[area.id][0],
      }
    }
    const score = Math.round(20 + r() * 80)
    const delta = Math.round((r() - 0.5) * 24)
    return {
      areaId: area.id,
      score,
      status: statusFromScore(score),
      delta,
      headline: pick(HEADLINES[area.id], r),
    }
  })
}

function buildTrend(employeeId: string, target: number): number[] {
  const r = rng(seedFrom(`${employeeId}::trend`))
  const trend: number[] = []
  let v = Math.max(20, Math.min(95, target - 10 + Math.round(r() * 20)))
  for (let i = 0; i < 12; i += 1) {
    v += Math.round((r() - 0.5) * 8)
    v = Math.max(10, Math.min(100, v))
    trend.push(v)
  }
  // Anchor last point near target so the latest dot matches the gauge.
  trend[trend.length - 1] = target
  return trend
}

function compositeScore(areas: AreaScore[]): number {
  const active = areas.filter((a) => a.score >= 0)
  if (active.length === 0) return 0
  const totalWeight = active.reduce((acc, a) => {
    const area = SIGNAL_AREAS.find((x) => x.id === a.areaId)
    return acc + (area?.defaultWeight ?? 0)
  }, 0)
  const weighted = active.reduce((acc, a) => {
    const area = SIGNAL_AREAS.find((x) => x.id === a.areaId)
    return acc + a.score * (area?.defaultWeight ?? 0)
  }, 0)
  return Math.round(weighted / Math.max(1, totalWeight))
}

export const employeeSignals: EmployeeSignals[] = employees.map((e) => {
  const areas = buildAreaScores(e.id)
  const overall = compositeScore(areas)
  const r = rng(seedFrom(`${e.id}::overall`))
  const overallDelta = Math.round((r() - 0.5) * 18)
  return {
    employeeId: e.id,
    overall,
    overallStatus: statusFromScore(overall),
    overallDelta,
    areas,
    trend: buildTrend(e.id, overall),
    computedAt: "2026-05-07T08:00:00Z",
  }
})

export const findEmployeeSignals = (
  employeeId: string
): EmployeeSignals | undefined =>
  employeeSignals.find((s) => s.employeeId === employeeId)

/**
 * Alerts derived from any area scoring critical or with a sharp negative
 * delta. Mock — capped at the most relevant items per employee.
 */
export const signalAlerts: SignalAlert[] = employeeSignals.flatMap((s) => {
  const alerts: SignalAlert[] = []
  s.areas.forEach((a) => {
    if (a.status === "critical") {
      alerts.push({
        id: `${s.employeeId}-${a.areaId}-critical`,
        employeeId: s.employeeId,
        areaId: a.areaId,
        severity: "critical",
        title: `${a.headline}`,
        description: `Score dropped to ${a.score}/100 in ${
          SIGNAL_AREAS.find((x) => x.id === a.areaId)?.name
        }.`,
        triggeredAt: "2026-05-06T09:00:00Z",
      })
    } else if (a.status === "warning" && a.delta <= -8) {
      alerts.push({
        id: `${s.employeeId}-${a.areaId}-warning`,
        employeeId: s.employeeId,
        areaId: a.areaId,
        severity: "warning",
        title: `${a.headline}`,
        description: `Trend down ${Math.abs(a.delta)} pts vs. previous period.`,
        triggeredAt: "2026-05-05T09:00:00Z",
      })
    }
  })
  return alerts.slice(0, 2)
})

export const signalPolicies: SignalPolicy[] = [
  {
    id: "policy-default",
    name: "Default policy",
    description:
      "Balanced weighting across all activated areas. Recommended for most teams.",
    weights: {
      goals: 22,
      absenteeism: 12,
      engagement: 18,
      attendance_productivity: 18,
      talent_development: 18,
      compensation: 12,
    },
    excludedAreas: ["compensation_insights"],
  },
  {
    id: "policy-engineering",
    name: "Engineering",
    description:
      "Heavier emphasis on goals/OKRs and talent development for IC-heavy teams.",
    weights: {
      goals: 30,
      absenteeism: 10,
      engagement: 15,
      attendance_productivity: 10,
      talent_development: 25,
      compensation: 10,
    },
    excludedAreas: ["compensation_insights"],
  },
  {
    id: "policy-sales",
    name: "Sales",
    description:
      "Goals and engagement weighted higher to reflect quota-driven roles.",
    weights: {
      goals: 35,
      absenteeism: 10,
      engagement: 20,
      attendance_productivity: 10,
      talent_development: 15,
      compensation: 10,
    },
    excludedAreas: ["compensation_insights"],
  },
  {
    id: "policy-operations",
    name: "Operations",
    description:
      "Attendance and absenteeism weighted higher for shift-based teams.",
    weights: {
      goals: 15,
      absenteeism: 20,
      engagement: 15,
      attendance_productivity: 25,
      talent_development: 15,
      compensation: 10,
    },
    excludedAreas: ["compensation_insights"],
  },
]

export const signalContests: SignalContest[] = [
  {
    id: "contest-001",
    employeeId: "emp-007",
    areaId: "absenteeism",
    status: "open",
    reason:
      "Approved medical leave was incorrectly counted as unplanned absence.",
    raisedAt: "2026-05-04T10:00:00Z",
  },
  {
    id: "contest-002",
    employeeId: "emp-012",
    areaId: "engagement",
    status: "open",
    reason: "Pulse survey was unavailable due to a known bug.",
    raisedAt: "2026-05-03T12:30:00Z",
  },
]
