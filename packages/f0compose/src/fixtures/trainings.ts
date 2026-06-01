import { avatarFor } from "./helpers"

// ─── Types ────────────────────────────────────────────────────────────────────

export type TrainingStatus = "active" | "draft"
export type TrainingMembershipStatus =
  | "notstarted"
  | "started"
  | "completed"
  | "partiallycompleted"
  | "missing"
export type TrainingModality = "in_person" | "online" | "hybrid"
export type TrainingRequestStatus = "review" | "approved" | "rejected"
export type SurveyType = "satisfaction" | "effectiveness" | "knowledge" | "custom"
export type SurveyStatus = "pending" | "completed"

export type TrainingCategory = {
  id: string
  name: string
}

export type TrainingCompetency = {
  id: string
  name: string
}

export type TrainingSession = {
  id: string
  classId: string
  name: string
  startsAt: string
  endsAt: string
  durationHours: number
  modality: TrainingModality
  location?: string
  link?: string
}

export type TrainingClass = {
  id: string
  trainingId: string
  name: string
  startDate: string
  endDate: string
  durationHours: number
  modality: TrainingModality
  cost: number
  participantCount: number
  sessions: TrainingSession[]
}

export type Training = {
  id: string
  name: string
  code: string
  status: TrainingStatus
  isMandatory: boolean
  catalog: boolean
  categoryIds: string[]
  competencyIds: string[]
  participantCount: number
  expiredParticipantCount: number
  totalDurationHours: number
  description: string
  objectives?: string
  year: number
  format?: "internal" | "external"
  externalProvider?: string
  courseType?: "scheduled" | "self-paced"
  groupAssignment?: "next-available" | "waitlist"
  completionCriteria?: {
    completeLmsModules: boolean
    attendSessions: boolean
    minimumAttendance?: string
    passKnowledgeTest: boolean
  }
  validity?: {
    enabled: boolean
    months?: number
  }
  classes: TrainingClass[]
}

export type TrainingMembership = {
  id: string
  trainingId: string
  employeeId: string
  status: TrainingMembershipStatus
  progressPercent: number
  enrolledAt: string
  completionDate?: string
  sessionsCompleted: number
  sessionsTotal: number
}

export type TrainingRequest = {
  id: string
  trainingName: string
  status: TrainingRequestStatus
  requestedAt: string
  authorId: string
  participantIds: string[]
  reason: string
  rejectionReason?: string
  competencyId?: string
}

export type TrainingSurvey = {
  id: string
  trainingId: string
  title: string
  type: SurveyType
  status: SurveyStatus
  responsesCount: number
  completionRate: number
}

export type MyTrainingSurvey = {
  id: string
  title: string
  type: SurveyType
  status: SurveyStatus
  trainingId: string
  trainingName: string
  participantId: string
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const trainingCategories: TrainingCategory[] = [
  { id: "cat-leadership", name: "Leadership" },
  { id: "cat-technical", name: "Technical Skills" },
  { id: "cat-compliance", name: "Compliance" },
  { id: "cat-soft-skills", name: "Soft Skills" },
  { id: "cat-health", name: "Health & Safety" },
  { id: "cat-sales", name: "Sales" },
]

// ─── Competencies ─────────────────────────────────────────────────────────────

export const trainingCompetencies: TrainingCompetency[] = [
  { id: "comp-comm", name: "Communication" },
  { id: "comp-problem", name: "Problem Solving" },
  { id: "comp-leadership", name: "Leadership" },
  { id: "comp-technical", name: "Technical Proficiency" },
  { id: "comp-data", name: "Data Analysis" },
  { id: "comp-collab", name: "Collaboration" },
]

// ─── Trainings ────────────────────────────────────────────────────────────────

export const trainings: Training[] = [
  {
    id: "tr-001",
    name: "Leadership Foundations",
    code: "LDR-101",
    status: "active",
    isMandatory: true,
    catalog: true,
    categoryIds: ["cat-leadership"],
    competencyIds: ["comp-leadership", "comp-comm"],
    participantCount: 18,
    expiredParticipantCount: 2,
    totalDurationHours: 16,
    description:
      "Core leadership skills for managers: goal-setting, 1:1s, feedback, and team motivation. Required for all team leads and above.",
    objectives:
      "Develop effective goal-setting frameworks, master feedback delivery techniques, build high-performing teams through structured 1:1 conversations.",
    year: 2026,
    format: "internal",
    courseType: "scheduled",
    groupAssignment: "next-available",
    completionCriteria: {
      completeLmsModules: true,
      attendSessions: true,
      minimumAttendance: "80%",
      passKnowledgeTest: false,
    },
    validity: { enabled: true, months: 12 },
    classes: [
      {
        id: "cls-001-a",
        trainingId: "tr-001",
        name: "Barcelona — Q1 2026",
        startDate: "2026-02-10",
        endDate: "2026-02-11",
        durationHours: 16,
        modality: "in_person",
        cost: 1200,
        participantCount: 12,
        sessions: [
          {
            id: "sess-001-a-1",
            classId: "cls-001-a",
            name: "Day 1 — Goals & Feedback",
            startsAt: "2026-02-10T09:00:00",
            endsAt: "2026-02-10T17:00:00",
            durationHours: 8,
            modality: "in_person",
            location: "Barcelona HQ, Room A1",
          },
          {
            id: "sess-001-a-2",
            classId: "cls-001-a",
            name: "Day 2 — 1:1s & Motivation",
            startsAt: "2026-02-11T09:00:00",
            endsAt: "2026-02-11T17:00:00",
            durationHours: 8,
            modality: "in_person",
            location: "Barcelona HQ, Room A1",
          },
        ],
      },
      {
        id: "cls-001-b",
        trainingId: "tr-001",
        name: "Madrid — Q2 2026",
        startDate: "2026-05-20",
        endDate: "2026-05-21",
        durationHours: 16,
        modality: "hybrid",
        cost: 900,
        participantCount: 6,
        sessions: [
          {
            id: "sess-001-b-1",
            classId: "cls-001-b",
            name: "Day 1 — Goals & Feedback",
            startsAt: "2026-05-20T09:00:00",
            endsAt: "2026-05-20T17:00:00",
            durationHours: 8,
            modality: "hybrid",
            location: "Madrid Office",
            link: "https://meet.example.com/ldr-101-may",
          },
        ],
      },
    ],
  },
  {
    id: "tr-002",
    name: "GDPR for HR Teams",
    code: "COMP-201",
    status: "active",
    isMandatory: true,
    catalog: false,
    categoryIds: ["cat-compliance"],
    competencyIds: ["comp-comm"],
    participantCount: 32,
    expiredParticipantCount: 0,
    totalDurationHours: 4,
    description:
      "Data privacy fundamentals for HR professionals. Covers GDPR principles, employee data rights, and lawful processing under Regulation (EU) 2016/679.",
    year: 2026,
    classes: [
      {
        id: "cls-002-a",
        trainingId: "tr-002",
        name: "Online — April 2026",
        startDate: "2026-04-08",
        endDate: "2026-04-08",
        durationHours: 4,
        modality: "online",
        cost: 0,
        participantCount: 32,
        sessions: [
          {
            id: "sess-002-a-1",
            classId: "cls-002-a",
            name: "GDPR Essentials for HR",
            startsAt: "2026-04-08T10:00:00",
            endsAt: "2026-04-08T14:00:00",
            durationHours: 4,
            modality: "online",
            link: "https://zoom.example.com/gdpr-hr",
          },
        ],
      },
    ],
  },
  {
    id: "tr-003",
    name: "Advanced Excel & Data Analysis",
    code: "TECH-305",
    status: "active",
    isMandatory: false,
    catalog: true,
    categoryIds: ["cat-technical"],
    competencyIds: ["comp-data", "comp-technical"],
    participantCount: 9,
    expiredParticipantCount: 1,
    totalDurationHours: 12,
    description:
      "Hands-on Excel training: pivot tables, VLOOKUP, Power Query, and charting. Designed for Finance and Operations teams.",
    year: 2026,
    classes: [
      {
        id: "cls-003-a",
        trainingId: "tr-003",
        name: "Barcelona — March 2026",
        startDate: "2026-03-14",
        endDate: "2026-03-16",
        durationHours: 12,
        modality: "in_person",
        cost: 600,
        participantCount: 9,
        sessions: [
          {
            id: "sess-003-a-1",
            classId: "cls-003-a",
            name: "Session 1 — Pivot Tables",
            startsAt: "2026-03-14T09:00:00",
            endsAt: "2026-03-14T13:00:00",
            durationHours: 4,
            modality: "in_person",
            location: "Barcelona HQ, Training Room B",
          },
          {
            id: "sess-003-a-2",
            classId: "cls-003-a",
            name: "Session 2 — Power Query",
            startsAt: "2026-03-15T09:00:00",
            endsAt: "2026-03-15T13:00:00",
            durationHours: 4,
            modality: "in_person",
            location: "Barcelona HQ, Training Room B",
          },
          {
            id: "sess-003-a-3",
            classId: "cls-003-a",
            name: "Session 3 — Charting & Dashboards",
            startsAt: "2026-03-16T09:00:00",
            endsAt: "2026-03-16T13:00:00",
            durationHours: 4,
            modality: "in_person",
            location: "Barcelona HQ, Training Room B",
          },
        ],
      },
    ],
  },
  {
    id: "tr-004",
    name: "Effective Communication",
    code: "SOFT-110",
    status: "active",
    isMandatory: false,
    catalog: true,
    categoryIds: ["cat-soft-skills"],
    competencyIds: ["comp-comm", "comp-collab"],
    participantCount: 14,
    expiredParticipantCount: 0,
    totalDurationHours: 8,
    description:
      "Improve written and verbal communication skills: clear messaging, active listening, conflict resolution, and cross-team collaboration.",
    year: 2026,
    classes: [
      {
        id: "cls-004-a",
        trainingId: "tr-004",
        name: "Online — May 2026",
        startDate: "2026-05-13",
        endDate: "2026-05-14",
        durationHours: 8,
        modality: "online",
        cost: 300,
        participantCount: 14,
        sessions: [
          {
            id: "sess-004-a-1",
            classId: "cls-004-a",
            name: "Part 1 — Written Communication",
            startsAt: "2026-05-13T10:00:00",
            endsAt: "2026-05-13T14:00:00",
            durationHours: 4,
            modality: "online",
            link: "https://meet.example.com/comms-may",
          },
          {
            id: "sess-004-a-2",
            classId: "cls-004-a",
            name: "Part 2 — Active Listening & Conflict",
            startsAt: "2026-05-14T10:00:00",
            endsAt: "2026-05-14T14:00:00",
            durationHours: 4,
            modality: "online",
            link: "https://meet.example.com/comms-may",
          },
        ],
      },
    ],
  },
  {
    id: "tr-005",
    name: "Health & Safety at Work",
    code: "H&S-100",
    status: "active",
    isMandatory: true,
    catalog: false,
    categoryIds: ["cat-health"],
    competencyIds: [],
    participantCount: 54,
    expiredParticipantCount: 8,
    totalDurationHours: 2,
    description:
      "Annual mandatory safety training. Covers fire safety, emergency procedures, ergonomics, and workplace incident reporting.",
    year: 2025,
    classes: [
      {
        id: "cls-005-a",
        trainingId: "tr-005",
        name: "All staff — Dec 2025",
        startDate: "2025-12-01",
        endDate: "2025-12-05",
        durationHours: 2,
        modality: "in_person",
        cost: 0,
        participantCount: 54,
        sessions: [
          {
            id: "sess-005-a-1",
            classId: "cls-005-a",
            name: "Safety Briefing",
            startsAt: "2025-12-01T09:00:00",
            endsAt: "2025-12-01T11:00:00",
            durationHours: 2,
            modality: "in_person",
            location: "All offices",
          },
        ],
      },
    ],
  },
  {
    id: "tr-006",
    name: "Sales Methodology & Negotiation",
    code: "SALES-201",
    status: "active",
    isMandatory: false,
    catalog: true,
    categoryIds: ["cat-sales", "cat-soft-skills"],
    competencyIds: ["comp-comm", "comp-problem"],
    participantCount: 7,
    expiredParticipantCount: 0,
    totalDurationHours: 24,
    description:
      "Two-day immersive sales training covering MEDDIC methodology, discovery calls, objection handling, and closing techniques.",
    year: 2026,
    classes: [
      {
        id: "cls-006-a",
        trainingId: "tr-006",
        name: "Barcelona — June 2026",
        startDate: "2026-06-02",
        endDate: "2026-06-03",
        durationHours: 24,
        modality: "in_person",
        cost: 2400,
        participantCount: 7,
        sessions: [
          {
            id: "sess-006-a-1",
            classId: "cls-006-a",
            name: "Day 1 — MEDDIC & Discovery",
            startsAt: "2026-06-02T09:00:00",
            endsAt: "2026-06-02T18:00:00",
            durationHours: 9,
            modality: "in_person",
            location: "Barcelona HQ, Boardroom",
          },
          {
            id: "sess-006-a-2",
            classId: "cls-006-a",
            name: "Day 2 — Objections & Closing",
            startsAt: "2026-06-03T09:00:00",
            endsAt: "2026-06-03T18:00:00",
            durationHours: 9,
            modality: "in_person",
            location: "Barcelona HQ, Boardroom",
          },
        ],
      },
    ],
  },
  {
    id: "tr-007",
    name: "Python for Data Analysts",
    code: "TECH-410",
    status: "draft",
    isMandatory: false,
    catalog: false,
    categoryIds: ["cat-technical"],
    competencyIds: ["comp-data", "comp-technical"],
    participantCount: 0,
    expiredParticipantCount: 0,
    totalDurationHours: 20,
    description:
      "Practical introduction to Python for analysts: pandas, matplotlib, and automating Excel workflows. In development.",
    year: 2026,
    classes: [],
  },
  {
    id: "tr-008",
    name: "Unconscious Bias Awareness",
    code: "SOFT-220",
    status: "active",
    isMandatory: true,
    catalog: true,
    categoryIds: ["cat-soft-skills", "cat-compliance"],
    competencyIds: ["comp-collab", "comp-comm"],
    participantCount: 41,
    expiredParticipantCount: 0,
    totalDurationHours: 3,
    description:
      "Awareness training for all employees on recognising and reducing unconscious bias in hiring, performance, and day-to-day interactions.",
    year: 2026,
    classes: [
      {
        id: "cls-008-a",
        trainingId: "tr-008",
        name: "Online — Q1 2026",
        startDate: "2026-01-20",
        endDate: "2026-01-20",
        durationHours: 3,
        modality: "online",
        cost: 0,
        participantCount: 41,
        sessions: [
          {
            id: "sess-008-a-1",
            classId: "cls-008-a",
            name: "Unconscious Bias Workshop",
            startsAt: "2026-01-20T11:00:00",
            endsAt: "2026-01-20T14:00:00",
            durationHours: 3,
            modality: "online",
            link: "https://zoom.example.com/ub-q1",
          },
        ],
      },
    ],
  },
]

// ─── Memberships (employee enrollments) ──────────────────────────────────────

export const trainingMemberships: TrainingMembership[] = [
  // Ada (emp-001) — Leadership (completed), GDPR (completed), H&S (missing)
  {
    id: "mem-001",
    trainingId: "tr-001",
    employeeId: "emp-001",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-01-15",
    completionDate: "2026-02-11",
    sessionsCompleted: 2,
    sessionsTotal: 2,
  },
  {
    id: "mem-002",
    trainingId: "tr-002",
    employeeId: "emp-001",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-03-20",
    completionDate: "2026-04-08",
    sessionsCompleted: 1,
    sessionsTotal: 1,
  },
  {
    id: "mem-003",
    trainingId: "tr-005",
    employeeId: "emp-001",
    status: "missing",
    progressPercent: 0,
    enrolledAt: "2025-11-01",
    sessionsCompleted: 0,
    sessionsTotal: 1,
  },
  // Marie (emp-002) — Leadership (started), GDPR (completed), H&S (completed), Bias (completed)
  {
    id: "mem-004",
    trainingId: "tr-001",
    employeeId: "emp-002",
    status: "started",
    progressPercent: 50,
    enrolledAt: "2026-01-15",
    sessionsCompleted: 1,
    sessionsTotal: 2,
  },
  {
    id: "mem-005",
    trainingId: "tr-002",
    employeeId: "emp-002",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-03-20",
    completionDate: "2026-04-08",
    sessionsCompleted: 1,
    sessionsTotal: 1,
  },
  {
    id: "mem-006",
    trainingId: "tr-005",
    employeeId: "emp-002",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2025-11-01",
    completionDate: "2025-12-01",
    sessionsCompleted: 1,
    sessionsTotal: 1,
  },
  {
    id: "mem-007",
    trainingId: "tr-008",
    employeeId: "emp-002",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-01-05",
    completionDate: "2026-01-20",
    sessionsCompleted: 1,
    sessionsTotal: 1,
  },
  // Alan (emp-003) — Technical Excel (notstarted), Comms (started)
  {
    id: "mem-008",
    trainingId: "tr-003",
    employeeId: "emp-003",
    status: "notstarted",
    progressPercent: 0,
    enrolledAt: "2026-02-28",
    sessionsCompleted: 0,
    sessionsTotal: 3,
  },
  {
    id: "mem-009",
    trainingId: "tr-004",
    employeeId: "emp-003",
    status: "started",
    progressPercent: 50,
    enrolledAt: "2026-04-10",
    sessionsCompleted: 1,
    sessionsTotal: 2,
  },
  // Grace (emp-004) — Leadership (completed), H&S (partiallycompleted), Bias (completed)
  {
    id: "mem-010",
    trainingId: "tr-001",
    employeeId: "emp-004",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-01-15",
    completionDate: "2026-02-11",
    sessionsCompleted: 2,
    sessionsTotal: 2,
  },
  {
    id: "mem-011",
    trainingId: "tr-005",
    employeeId: "emp-004",
    status: "partiallycompleted",
    progressPercent: 50,
    enrolledAt: "2025-11-01",
    sessionsCompleted: 0,
    sessionsTotal: 1,
  },
  {
    id: "mem-012",
    trainingId: "tr-008",
    employeeId: "emp-004",
    status: "completed",
    progressPercent: 100,
    enrolledAt: "2026-01-05",
    completionDate: "2026-01-20",
    sessionsCompleted: 1,
    sessionsTotal: 1,
  },
]

// ─── Training Requests ────────────────────────────────────────────────────────

export const trainingRequests: TrainingRequest[] = [
  {
    id: "req-001",
    trainingName: "Agile Project Management",
    status: "review",
    requestedAt: "2026-04-28",
    authorId: "emp-003",
    participantIds: ["emp-003", "emp-005"],
    reason:
      "Our team is moving to agile delivery and we need foundational training on sprints, ceremonies, and backlog management.",
    competencyId: "comp-problem",
  },
  {
    id: "req-002",
    trainingName: "Executive Presence & Public Speaking",
    status: "approved",
    requestedAt: "2026-03-10",
    authorId: "emp-007",
    participantIds: ["emp-007"],
    reason: "Preparing for upcoming All-Hands presentation and board-level demos.",
    competencyId: "comp-comm",
  },
  {
    id: "req-003",
    trainingName: "GraphQL Advanced Patterns",
    status: "rejected",
    requestedAt: "2026-02-14",
    authorId: "emp-005",
    participantIds: ["emp-005", "emp-006"],
    reason: "We have a GraphQL migration coming up and need to upskill the backend team.",
    rejectionReason:
      "Budget exceeded for Q1. Please re-submit in Q3 when the new training budget is available.",
    competencyId: "comp-technical",
  },
  {
    id: "req-004",
    trainingName: "Diversity & Inclusion for Managers",
    status: "review",
    requestedAt: "2026-05-02",
    authorId: "emp-002",
    participantIds: ["emp-002", "emp-004", "emp-008"],
    reason: "Following the DEI audit, the People team recommends this for all managers.",
    competencyId: "comp-collab",
  },
  {
    id: "req-005",
    trainingName: "LinkedIn Recruiter Advanced",
    status: "approved",
    requestedAt: "2026-04-15",
    authorId: "emp-009",
    participantIds: ["emp-009"],
    reason: "Expanding sourcing capabilities for senior IC hires.",
    competencyId: "comp-problem",
  },
]

// ─── Training Surveys ─────────────────────────────────────────────────────────

export const trainingSurveys: TrainingSurvey[] = [
  {
    id: "surv-001",
    trainingId: "tr-001",
    title: "Leadership Foundations — Satisfaction",
    type: "satisfaction",
    status: "completed",
    responsesCount: 14,
    completionRate: 78,
  },
  {
    id: "surv-002",
    trainingId: "tr-001",
    title: "Leadership Foundations — Knowledge Test",
    type: "knowledge",
    status: "completed",
    responsesCount: 12,
    completionRate: 67,
  },
  {
    id: "surv-003",
    trainingId: "tr-002",
    title: "GDPR — Effectiveness Survey",
    type: "effectiveness",
    status: "completed",
    responsesCount: 29,
    completionRate: 91,
  },
  {
    id: "surv-004",
    trainingId: "tr-004",
    title: "Communication — Satisfaction",
    type: "satisfaction",
    status: "pending",
    responsesCount: 3,
    completionRate: 21,
  },
]

// ─── My Training Surveys (employee view) ─────────────────────────────────────

export const myTrainingSurveys: MyTrainingSurvey[] = [
  {
    id: "mysurvey-001",
    title: "Leadership Foundations — Satisfaction",
    type: "satisfaction",
    status: "completed",
    trainingId: "tr-001",
    trainingName: "Leadership Foundations",
    participantId: "emp-001",
  },
  {
    id: "mysurvey-002",
    title: "GDPR — Effectiveness Survey",
    type: "effectiveness",
    status: "completed",
    trainingId: "tr-002",
    trainingName: "GDPR for HR Teams",
    participantId: "emp-001",
  },
  {
    id: "mysurvey-003",
    title: "Effective Communication — Satisfaction",
    type: "satisfaction",
    status: "pending",
    trainingId: "tr-004",
    trainingName: "Effective Communication",
    participantId: "emp-001",
  },
  {
    id: "mysurvey-004",
    title: "Unconscious Bias — Knowledge Test",
    type: "knowledge",
    status: "pending",
    trainingId: "tr-008",
    trainingName: "Unconscious Bias Awareness",
    participantId: "emp-001",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function findTraining(id: string): Training | undefined {
  return trainings.find((t) => t.id === id)
}

export function findCategoryName(id: string): string {
  return trainingCategories.find((c) => c.id === id)?.name ?? id
}

export function findCompetencyName(id: string): string {
  return trainingCompetencies.find((c) => c.id === id)?.name ?? id
}

export function membershipsByTraining(trainingId: string): TrainingMembership[] {
  return trainingMemberships.filter((m) => m.trainingId === trainingId)
}

export function membershipsByEmployee(employeeId: string): TrainingMembership[] {
  return trainingMemberships.filter((m) => m.employeeId === employeeId)
}

// Needed for catalog — trainings visible to employees (active + in catalog)
export const catalogTrainings = trainings.filter(
  (t) => t.status === "active" && t.catalog
)

// Needed for overview — trainings enrolled by the "current user" (emp-001)
export const myEnrolledMemberships = membershipsByEmployee("emp-001")

export { avatarFor }
