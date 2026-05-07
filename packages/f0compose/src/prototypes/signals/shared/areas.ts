import type { SignalArea } from "./types"

/**
 * Catalog of the 6 product areas defined in the PRD plus 1 upsell example
 * (Compensation Insights — surfaced as `product_not_activated` to demo the
 * empty/upsell state in the UI).
 */
export const SIGNAL_AREAS: SignalArea[] = [
  {
    id: "goals",
    name: "Goals & OKRs",
    shortName: "Goals",
    description:
      "Progress on individual and team objectives, on-time completion, key result momentum.",
    activated: true,
    defaultWeight: 22,
  },
  {
    id: "absenteeism",
    name: "Absenteeism",
    shortName: "Absences",
    description:
      "Frequency, distribution and patterns of unplanned absences over the last 90 days.",
    activated: true,
    defaultWeight: 12,
  },
  {
    id: "engagement",
    name: "Engagement",
    shortName: "Engagement",
    description:
      "eNPS, pulse survey responses, recognition and feedback velocity.",
    activated: true,
    defaultWeight: 18,
  },
  {
    id: "attendance_productivity",
    name: "Attendance & Productivity",
    shortName: "Attendance",
    description:
      "Worked hours vs. scheduled, focus time, overtime and shift adherence.",
    activated: true,
    defaultWeight: 18,
  },
  {
    id: "talent_development",
    name: "Talent Development",
    shortName: "Development",
    description:
      "Training completion, skill growth, internal mobility readiness, mentor activity.",
    activated: true,
    defaultWeight: 18,
  },
  {
    id: "compensation",
    name: "Compensation",
    shortName: "Compensation",
    description:
      "Salary positioning vs. band, time since last raise, bonus eligibility.",
    activated: true,
    defaultWeight: 12,
  },
  {
    id: "compensation_insights",
    name: "Compensation Insights",
    shortName: "Insights",
    description:
      "Market benchmarks and pay-equity analytics. Upgrade required to activate.",
    activated: false,
    defaultWeight: 0,
  },
]

export const findArea = (id: string): SignalArea | undefined =>
  SIGNAL_AREAS.find((a) => a.id === id)
