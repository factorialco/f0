export type EnpsSurveyStatus = "active" | "closed" | "draft"

export type EnpsResponseType = "promoter" | "passive" | "detractor" | "no-score"

export type EnpsResponse = {
  id: string
  feedback: string
  score: number | null
  type: EnpsResponseType
  submittedAt: string
}

export type EnpsSurvey = {
  id: string
  name: string
  status: EnpsSurveyStatus
  startDate: string
  endDate: string
  totalParticipants: number
  totalResponses: number
  promoters: number
  passives: number
  detractors: number
  enpsScore: number
  frozenAt: string | null
}

/** Historical eNPS surveys */
export const enpsSurveys: EnpsSurvey[] = [
  {
    id: "enps-001",
    name: "Q1 2026 eNPS",
    status: "closed",
    startDate: "2026-01-15",
    endDate: "2026-01-31",
    totalParticipants: 18,
    totalResponses: 16,
    promoters: 9,
    passives: 4,
    detractors: 3,
    enpsScore: 37,
    frozenAt: "2026-01-31T23:59:59Z",
  },
  {
    id: "enps-002",
    name: "Q2 2026 eNPS",
    status: "closed",
    startDate: "2026-04-01",
    endDate: "2026-04-15",
    totalParticipants: 19,
    totalResponses: 17,
    promoters: 10,
    passives: 5,
    detractors: 2,
    enpsScore: 47,
    frozenAt: "2026-04-15T23:59:59Z",
  },
  {
    id: "enps-003",
    name: "Q3 2026 eNPS",
    status: "active",
    startDate: "2026-05-01",
    endDate: "2026-05-15",
    totalParticipants: 20,
    totalResponses: 12,
    promoters: 7,
    passives: 3,
    detractors: 2,
    enpsScore: 42,
    frozenAt: null,
  },
  {
    id: "enps-004",
    name: "Q4 2026 eNPS",
    status: "draft",
    startDate: "2026-07-01",
    endDate: "2026-07-15",
    totalParticipants: 0,
    totalResponses: 0,
    promoters: 0,
    passives: 0,
    detractors: 0,
    enpsScore: 0,
    frozenAt: null,
  },
]

/** Classify an eNPS score into type */
export function classifyScore(score: number | null): EnpsResponseType {
  if (score === null) return "no-score"
  if (score >= 9) return "promoter"
  if (score >= 7) return "passive"
  return "detractor"
}

/** Anonymous eNPS responses */
export const enpsResponses: EnpsResponse[] = [
  {
    id: "resp-001",
    feedback: "Great culture and leadership. I feel valued every day.",
    score: 9,
    type: "promoter",
    submittedAt: "2026-04-03",
  },
  {
    id: "resp-002",
    feedback: "Love working here, very supportive team and management.",
    score: 10,
    type: "promoter",
    submittedAt: "2026-04-04",
  },
  {
    id: "resp-003",
    feedback: "Good overall, some processes could improve significantly.",
    score: 7,
    type: "passive",
    submittedAt: "2026-04-05",
  },
  {
    id: "resp-004",
    feedback: "Decent workplace with room for professional growth.",
    score: 8,
    type: "passive",
    submittedAt: "2026-04-03",
  },
  {
    id: "resp-005",
    feedback: "Best company I have worked for. Amazing people.",
    score: 10,
    type: "promoter",
    submittedAt: "2026-04-06",
  },
  {
    id: "resp-006",
    feedback: "Management needs to listen more to employees' concerns.",
    score: 3,
    type: "detractor",
    submittedAt: "2026-04-04",
  },
  {
    id: "resp-007",
    feedback: "Flexible and innovative environment. Proud to be here.",
    score: 9,
    type: "promoter",
    submittedAt: "2026-04-07",
  },
  {
    id: "resp-008",
    feedback: "Okay, but compensation could be more competitive.",
    score: 6,
    type: "detractor",
    submittedAt: "2026-04-05",
  },
  {
    id: "resp-009",
    feedback: "Collaborative and transparent culture across teams.",
    score: 9,
    type: "promoter",
    submittedAt: "2026-04-08",
  },
  {
    id: "resp-010",
    feedback: "Too many changes without clear direction or communication.",
    score: 4,
    type: "detractor",
    submittedAt: "2026-04-06",
  },
  {
    id: "resp-011",
    feedback: "Amazing growth opportunities and career development.",
    score: 10,
    type: "promoter",
    submittedAt: "2026-04-09",
  },
  {
    id: "resp-012",
    feedback: "Good but could improve onboarding for new hires.",
    score: 7,
    type: "passive",
    submittedAt: "2026-04-07",
  },
  {
    id: "resp-013",
    feedback: "Very happy with the team dynamics and collaboration.",
    score: 9,
    type: "promoter",
    submittedAt: "2026-04-10",
  },
  {
    id: "resp-014",
    feedback: "Solid company, good benefits package overall.",
    score: 8,
    type: "passive",
    submittedAt: "2026-04-08",
  },
  {
    id: "resp-015",
    feedback: "",
    score: null,
    type: "no-score",
    submittedAt: "2026-04-09",
  },
  {
    id: "resp-016",
    feedback: "Would definitely recommend to friends and family.",
    score: 10,
    type: "promoter",
    submittedAt: "2026-04-10",
  },
  {
    id: "resp-017",
    feedback: "Average experience, nothing exceptional stands out.",
    score: 5,
    type: "detractor",
    submittedAt: "2026-04-11",
  },
]

/** Label for response type */
export function typeLabel(type: EnpsResponseType): string {
  switch (type) {
    case "promoter":
      return "Promoter"
    case "passive":
      return "Passive"
    case "detractor":
      return "Detractor"
    case "no-score":
      return "No score"
  }
}

/** Helper to get status variant */
export function surveyStatusVariant(
  status: EnpsSurveyStatus
): "positive" | "warning" | "neutral" {
  switch (status) {
    case "active":
      return "positive"
    case "closed":
      return "neutral"
    case "draft":
      return "warning"
  }
}

/** Helper to get status label */
export function surveyStatusLabel(status: EnpsSurveyStatus): string {
  switch (status) {
    case "active":
      return "Active"
    case "closed":
      return "Closed"
    case "draft":
      return "Draft"
  }
}
