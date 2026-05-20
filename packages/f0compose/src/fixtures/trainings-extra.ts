/**
 * Extra trainings fixtures — sessions, requests, budgets, axes, attendances,
 * survey templates/answers, content modules, instructors, insights aggregates,
 * Fundae settings. Layered on top of `./trainings.ts` so the original file
 * stays intact.
 *
 * Anchored to the 3 real seeded trainings from `factorial_development`
 * (Merchandising visual, Resolución de conflictos, Fundamentos ISO 9001)
 * plus the existing synthetic ones (Management Fundamentals, GDPR, React
 * Advanced Patterns, New Employee Orientation, Fire Safety, Public Speaking,
 * Data Analysis with Python).
 */

import { avatarFor } from "./helpers"

// --- TAGS / AXES ------------------------------------------------------------

export type TrainingAxis = { id: string; name: string }

export const trainingAxes: TrainingAxis[] = [
  { id: "axis-001", name: "Strategic" },
  { id: "axis-002", name: "Operational" },
  { id: "axis-003", name: "Compliance" },
  { id: "axis-004", name: "Career development" },
  { id: "axis-005", name: "Onboarding" },
  { id: "axis-006", name: "Wellbeing" },
]

// --- SESSIONS (per class) ---------------------------------------------------

export type TrainingSessionMode = "online" | "in_person" | "hybrid"
export type TrainingSessionStatus =
  | "scheduled"
  | "in_progress"
  | "completed"
  | "cancelled"

export type TrainingSession = {
  id: string
  classId: string
  trainingId: string
  title: string
  startsAt: string // ISO datetime
  endsAt: string // ISO datetime
  durationMinutes: number
  mode: TrainingSessionMode
  location: string | null
  onlineLink: string | null
  status: TrainingSessionStatus
  attendedCount: number
  totalCount: number
  instructorIds: string[]
  hasCalendarInvite: boolean
  hasReminder: boolean
  notes: string | null
}

export const trainingSessions: TrainingSession[] = [
  // trn-001 / cls-001a — Management Fundamentals, Group A
  {
    id: "ses-001",
    classId: "cls-001a",
    trainingId: "trn-001",
    title: "Kickoff: leadership foundations",
    startsAt: "2026-02-10T09:00:00.000Z",
    endsAt: "2026-02-10T11:00:00.000Z",
    durationMinutes: 120,
    mode: "in_person",
    location: "HQ — Conference Room A",
    onlineLink: null,
    status: "completed",
    attendedCount: 9,
    totalCount: 9,
    instructorIds: ["emp-001"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: "Introductions, course structure, expectations.",
  },
  {
    id: "ses-002",
    classId: "cls-001a",
    trainingId: "trn-001",
    title: "Conflict management toolkit",
    startsAt: "2026-02-17T09:00:00.000Z",
    endsAt: "2026-02-17T11:00:00.000Z",
    durationMinutes: 120,
    mode: "hybrid",
    location: "HQ — Conference Room A",
    onlineLink: "https://meet.factorialhr.com/mgmt-fundamentals-a-2",
    status: "completed",
    attendedCount: 8,
    totalCount: 9,
    instructorIds: ["emp-001", "emp-002"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: null,
  },
  {
    id: "ses-003",
    classId: "cls-001a",
    trainingId: "trn-001",
    title: "Decision-making frameworks",
    startsAt: "2026-02-24T09:00:00.000Z",
    endsAt: "2026-02-24T11:00:00.000Z",
    durationMinutes: 120,
    mode: "in_person",
    location: "HQ — Conference Room A",
    onlineLink: null,
    status: "completed",
    attendedCount: 9,
    totalCount: 9,
    instructorIds: ["emp-002"],
    hasCalendarInvite: true,
    hasReminder: false,
    notes: null,
  },
  {
    id: "ses-004",
    classId: "cls-001a",
    trainingId: "trn-001",
    title: "Closing & action plans",
    startsAt: "2026-02-28T15:00:00.000Z",
    endsAt: "2026-02-28T17:00:00.000Z",
    durationMinutes: 120,
    mode: "online",
    location: null,
    onlineLink: "https://meet.factorialhr.com/mgmt-fundamentals-a-4",
    status: "completed",
    attendedCount: 6,
    totalCount: 9,
    instructorIds: ["emp-001"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: "Group A wrap-up.",
  },
  // trn-001 / cls-001b — Group B
  {
    id: "ses-005",
    classId: "cls-001b",
    trainingId: "trn-001",
    title: "Kickoff: leadership foundations",
    startsAt: "2026-04-07T09:00:00.000Z",
    endsAt: "2026-04-07T11:00:00.000Z",
    durationMinutes: 120,
    mode: "in_person",
    location: "HQ — Conference Room A",
    onlineLink: null,
    status: "scheduled",
    attendedCount: 0,
    totalCount: 9,
    instructorIds: ["emp-001"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: null,
  },
  {
    id: "ses-006",
    classId: "cls-001b",
    trainingId: "trn-001",
    title: "Conflict management toolkit",
    startsAt: "2026-04-14T09:00:00.000Z",
    endsAt: "2026-04-14T11:00:00.000Z",
    durationMinutes: 120,
    mode: "in_person",
    location: "HQ — Conference Room A",
    onlineLink: null,
    status: "scheduled",
    attendedCount: 0,
    totalCount: 9,
    instructorIds: ["emp-001", "emp-002"],
    hasCalendarInvite: true,
    hasReminder: false,
    notes: null,
  },
  // trn-002 — GDPR
  {
    id: "ses-007",
    classId: "cls-002a",
    trainingId: "trn-002",
    title: "GDPR refresher — full company",
    startsAt: "2026-03-03T10:00:00.000Z",
    endsAt: "2026-03-03T12:00:00.000Z",
    durationMinutes: 120,
    mode: "online",
    location: null,
    onlineLink: "https://meet.factorialhr.com/gdpr-2026",
    status: "completed",
    attendedCount: 17,
    totalCount: 20,
    instructorIds: ["emp-003"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: "Annual mandatory refresher.",
  },
  // trn-004 — New Employee Orientation
  {
    id: "ses-008",
    classId: "cls-004a",
    trainingId: "trn-004",
    title: "Welcome day — April cohort",
    startsAt: "2026-04-01T09:00:00.000Z",
    endsAt: "2026-04-01T13:00:00.000Z",
    durationMinutes: 240,
    mode: "in_person",
    location: "HQ — Main hall",
    onlineLink: null,
    status: "completed",
    attendedCount: 5,
    totalCount: 5,
    instructorIds: ["emp-002"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: null,
  },
  // trn-005 — Fire Safety
  {
    id: "ses-009",
    classId: "cls-005a",
    trainingId: "trn-005",
    title: "Fire safety briefing — morning",
    startsAt: "2026-05-06T10:00:00.000Z",
    endsAt: "2026-05-06T11:00:00.000Z",
    durationMinutes: 60,
    mode: "in_person",
    location: "HQ — Auditorium",
    onlineLink: null,
    status: "completed",
    attendedCount: 9,
    totalCount: 10,
    instructorIds: ["emp-007"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: null,
  },
  {
    id: "ses-010",
    classId: "cls-005b",
    trainingId: "trn-005",
    title: "Fire safety briefing — afternoon",
    startsAt: "2026-05-06T15:00:00.000Z",
    endsAt: "2026-05-06T16:00:00.000Z",
    durationMinutes: 60,
    mode: "in_person",
    location: "HQ — Auditorium",
    onlineLink: null,
    status: "completed",
    attendedCount: 8,
    totalCount: 10,
    instructorIds: ["emp-007"],
    hasCalendarInvite: true,
    hasReminder: true,
    notes: null,
  },
]

// --- REQUESTS ---------------------------------------------------------------

export type TrainingRequestStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "in_review"

export type TrainingRequest = {
  id: string
  authorEmployeeId: string
  authorEmployeeName: string
  authorAvatar: string
  trainingId: string | null
  trainingName: string
  externalReference: string | null
  providerName: string | null
  trainingNeed: string
  comments: string
  schedule: "during_working_hours" | "after_working_hours" | "mixed"
  durationHours: number
  cost: number
  costToEmployee: number
  paymentInstallments: number
  startDate: string
  endDate: string
  status: TrainingRequestStatus
  subsidized: boolean
  createdAt: string
  reviewerEmployeeId: string | null
  reviewerEmployeeName: string | null
}

export const trainingRequests: TrainingRequest[] = [
  {
    id: "req-001",
    authorEmployeeId: "emp-003",
    authorEmployeeName: "Ana García",
    authorAvatar: avatarFor("emp-003"),
    trainingId: "trn-001",
    trainingName: "Management Fundamentals",
    externalReference: null,
    providerName: null,
    trainingNeed:
      "I'm being asked to lead a small squad next quarter and want to formalise my management knowledge.",
    comments: "Already discussed with my manager.",
    schedule: "during_working_hours",
    durationHours: 8,
    cost: 0,
    costToEmployee: 0,
    paymentInstallments: 1,
    startDate: "2026-04-07",
    endDate: "2026-04-25",
    status: "approved",
    subsidized: false,
    createdAt: "2026-03-20T09:12:00.000Z",
    reviewerEmployeeId: "emp-001",
    reviewerEmployeeName: "Javier Molina",
  },
  {
    id: "req-002",
    authorEmployeeId: "emp-006",
    authorEmployeeName: "Dídac Mas",
    authorAvatar: avatarFor("emp-006"),
    trainingId: null,
    trainingName: "Advanced TypeScript Patterns",
    externalReference: "https://www.totaltypescript.com/",
    providerName: "Total TypeScript",
    trainingNeed:
      "Looking to deepen TS knowledge to refactor our core domain types.",
    comments: "Self-paced, accessible after-hours as well.",
    schedule: "mixed",
    durationHours: 24,
    cost: 480,
    costToEmployee: 0,
    paymentInstallments: 1,
    startDate: "2026-06-01",
    endDate: "2026-07-31",
    status: "pending",
    subsidized: false,
    createdAt: "2026-05-08T16:45:00.000Z",
    reviewerEmployeeId: null,
    reviewerEmployeeName: null,
  },
  {
    id: "req-003",
    authorEmployeeId: "emp-007",
    authorEmployeeName: "Elena Ferrer",
    authorAvatar: avatarFor("emp-007"),
    trainingId: null,
    trainingName: "AWS Solutions Architect Certification",
    externalReference: "https://aws.amazon.com/certification/",
    providerName: "AWS",
    trainingNeed:
      "We're migrating critical workloads — I need a deeper architectural foundation.",
    comments: "",
    schedule: "after_working_hours",
    durationHours: 60,
    cost: 1200,
    costToEmployee: 200,
    paymentInstallments: 2,
    startDate: "2026-05-15",
    endDate: "2026-08-15",
    status: "in_review",
    subsidized: true,
    createdAt: "2026-04-29T11:00:00.000Z",
    reviewerEmployeeId: "emp-001",
    reviewerEmployeeName: "Javier Molina",
  },
  {
    id: "req-004",
    authorEmployeeId: "emp-004",
    authorEmployeeName: "Bernat Puig",
    authorAvatar: avatarFor("emp-004"),
    trainingId: null,
    trainingName: "Public Speaking & Presentation Skills",
    externalReference: null,
    providerName: "Dale Carnegie",
    trainingNeed:
      "I'm presenting more frequently to clients and want to be more impactful.",
    comments: "",
    schedule: "during_working_hours",
    durationHours: 12,
    cost: 2200,
    costToEmployee: 0,
    paymentInstallments: 1,
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    status: "rejected",
    subsidized: false,
    createdAt: "2026-04-10T08:30:00.000Z",
    reviewerEmployeeId: "emp-001",
    reviewerEmployeeName: "Javier Molina",
  },
  {
    id: "req-005",
    authorEmployeeId: "emp-005",
    authorEmployeeName: "Carmen López",
    authorAvatar: avatarFor("emp-005"),
    trainingId: null,
    trainingName: "Spanish for Business — B2",
    externalReference: null,
    providerName: "Cervantes Institute",
    trainingNeed:
      "Most of our customers are Spanish-speaking — I'd like to hold meetings in Spanish.",
    comments: "Group lessons preferred.",
    schedule: "after_working_hours",
    durationHours: 40,
    cost: 800,
    costToEmployee: 0,
    paymentInstallments: 4,
    startDate: "2026-09-01",
    endDate: "2026-12-15",
    status: "pending",
    subsidized: false,
    createdAt: "2026-05-10T14:20:00.000Z",
    reviewerEmployeeId: null,
    reviewerEmployeeName: null,
  },
  {
    id: "req-006",
    authorEmployeeId: "emp-002",
    authorEmployeeName: "Laura Soler",
    authorAvatar: avatarFor("emp-002"),
    trainingId: "trn-003",
    trainingName: "React Advanced Patterns",
    externalReference: null,
    providerName: "Frontend Masters",
    trainingNeed:
      "Aligning frontend architecture across teams. Want to formalise patterns.",
    comments: "From catalog.",
    schedule: "during_working_hours",
    durationHours: 16,
    cost: 0,
    costToEmployee: 0,
    paymentInstallments: 1,
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    status: "approved",
    subsidized: false,
    createdAt: "2026-01-08T10:00:00.000Z",
    reviewerEmployeeId: "emp-001",
    reviewerEmployeeName: "Javier Molina",
  },
]

// --- BUDGETS ---------------------------------------------------------------

export type BudgetStatus = "active" | "exceeded" | "draft" | "closed"

export type TrainingBudget = {
  id: string
  name: string
  year: number
  totalAmount: number
  spentAmount: number
  pendingAmount: number
  remainingAmount: number
  currency: string
  status: BudgetStatus
  scope: "company" | "department" | "team"
  scopeName: string
  ownerEmployeeId: string
  ownerEmployeeName: string
  // Optional human-readable description shown on the budget detail header.
  // Mirrors the `description` field upstream FinanceBudget exposes.
  description?: string
  // Optional start date of the budget period (ISO yyyy-mm-dd). Shown in the
  // detail header as the "Date" metadata. When absent, consumers fall back
  // to Jan 1st of `year`.
  startDate?: string
  // Optional end date of the budget period (ISO yyyy-mm-dd). Mirrors the
  // `effectiveUntil` field upstream `FinanceBudget` exposes; when absent we
  // fall back to Dec 31 of `year`.
  endDate?: string
  // Optional: legal entity that owns this budget. Currency is derived from
  // the legal entity at creation time (mirrors `FinanceBudget.legalEntityId`
  // upstream). Pre-existing fixtures omit it; consumers that need the
  // currency-from-LE behavior should rely on this when present.
  legalEntityId?: string
  // Optional unique people count for the budget summary. This can be lower than
  // the sum of group participants when the same employee attends multiple groups.
  peopleCount?: number
  costUpdateNotice?: {
    title: string
    description: string
    change?: string
    currentStatus?: string
    impact?: string
    details?: string[]
  }
}

export const trainingBudgets: TrainingBudget[] = [
  {
    id: "bud-training-live-costs",
    name: "Training budget 2026 · Needs update",
    year: 2026,
    totalAmount: 50000,
    spentAmount: 0,
    pendingAmount: 30000,
    remainingAmount: 20000,
    currency: "EUR",
    status: "active",
    scope: "company",
    scopeName: "All employees",
    ownerEmployeeId: "emp-001",
    ownerEmployeeName: "Javier Molina",
    description:
      "Exploration state: training group changes have been detected since costs were last saved.",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    legalEntityId: "le-factorial-spain",
    peopleCount: 17,
    costUpdateNotice: {
      title: "Budget changed since last review",
      description:
        "3 training groups changed. Allocated amount increased by 4,800.00 €. These figures already include the latest participant and salary data.",
    },
  },
  {
    id: "bud-training-2026",
    name: "Training budget 2026",
    year: 2026,
    totalAmount: 50000,
    spentAmount: 0,
    pendingAmount: 30000,
    remainingAmount: 20000,
    currency: "EUR",
    status: "active",
    scope: "company",
    scopeName: "All employees",
    ownerEmployeeId: "emp-001",
    ownerEmployeeName: "Javier Molina",
    description:
      "Training budget for Communication skills groups across Madrid, France and Italy.",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    legalEntityId: "le-factorial-spain",
    peopleCount: 17,
  },
  {
    id: "bud-001",
    name: "Company-wide 2026",
    year: 2026,
    totalAmount: 25000,
    spentAmount: 7800,
    pendingAmount: 2200,
    remainingAmount: 15000,
    currency: "EUR",
    status: "active",
    scope: "company",
    scopeName: "All employees",
    ownerEmployeeId: "emp-001",
    ownerEmployeeName: "Javier Molina",
    description:
      "The Training Budget 2026 represents the total financial resources your organization allocates during the year to support employee learning and development.",
    startDate: "2026-04-01",
    endDate: "2026-12-31",
    legalEntityId: "le-001",
  },
  {
    id: "bud-002",
    name: "Engineering 2026",
    year: 2026,
    totalAmount: 12000,
    spentAmount: 6200,
    pendingAmount: 1500,
    remainingAmount: 4300,
    currency: "EUR",
    status: "active",
    scope: "department",
    scopeName: "Engineering",
    ownerEmployeeId: "emp-002",
    ownerEmployeeName: "Laura Soler",
    description:
      "Engineering-specific training budget covering technical conferences, certifications and platform learning subscriptions for the engineering organization.",
    startDate: "2026-01-15",
    endDate: "2026-12-31",
    legalEntityId: "le-001",
  },
  {
    id: "bud-003",
    name: "People & Talent 2026",
    year: 2026,
    totalAmount: 6000,
    spentAmount: 6100,
    pendingAmount: 0,
    remainingAmount: -100,
    currency: "EUR",
    status: "exceeded",
    scope: "department",
    scopeName: "People",
    ownerEmployeeId: "emp-003",
    ownerEmployeeName: "Ana García",
    description:
      "Budget for the People & Talent department, used to fund manager workshops, leadership coaching and HR certifications.",
    startDate: "2026-02-01",
    endDate: "2026-12-31",
    legalEntityId: "le-002",
  },
  {
    id: "bud-004",
    name: "Retail operations 2026",
    year: 2026,
    totalAmount: 8000,
    spentAmount: 0,
    pendingAmount: 0,
    remainingAmount: 8000,
    currency: "EUR",
    status: "draft",
    scope: "department",
    scopeName: "Retail",
    ownerEmployeeId: "emp-004",
    ownerEmployeeName: "Bernat Puig",
    description:
      "Draft budget for the Retail operations team. Will fund in-store coaching programs and mandatory compliance refreshers for store staff.",
    startDate: "2026-03-01",
    endDate: "2026-12-31",
    legalEntityId: "le-003",
  },
]

// --- SURVEY TEMPLATES & ANSWERS --------------------------------------------

export type SurveyTemplate = {
  id: string
  name: string
  description: string
  questionCount: number
  responseScale: "1-5" | "1-10" | "yes-no" | "mixed"
  category: "satisfaction" | "knowledge" | "feedback"
  createdAt: string
  active: boolean
}

export const surveyTemplates: SurveyTemplate[] = [
  {
    id: "tpl-001",
    name: "Post-training satisfaction",
    description: "Default 10-question survey to send after every training.",
    questionCount: 10,
    responseScale: "1-5",
    category: "satisfaction",
    createdAt: "2025-09-01",
    active: true,
  },
  {
    id: "tpl-002",
    name: "Knowledge check — Compliance",
    description: "Yes/No questions to validate retention of key policies.",
    questionCount: 8,
    responseScale: "yes-no",
    category: "knowledge",
    createdAt: "2025-11-12",
    active: true,
  },
  {
    id: "tpl-003",
    name: "Manager feedback on team training",
    description: "Three open questions for managers to assess team uplift.",
    questionCount: 3,
    responseScale: "mixed",
    category: "feedback",
    createdAt: "2026-01-05",
    active: true,
  },
  {
    id: "tpl-004",
    name: "Speaker evaluation",
    description: "Specific scale on the instructor's effectiveness.",
    questionCount: 5,
    responseScale: "1-10",
    category: "satisfaction",
    createdAt: "2024-06-10",
    active: false,
  },
]

export type SurveyAnswer = {
  id: string
  surveyId: string
  templateId: string
  trainingId: string
  employeeId: string
  employeeName: string
  employeeAvatar: string
  submittedAt: string | null
  averageScore: number | null
  status: "pending" | "submitted" | "expired"
}

export const surveyAnswers: SurveyAnswer[] = [
  {
    id: "ans-001",
    surveyId: "srv-001",
    templateId: "tpl-001",
    trainingId: "trn-001",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    submittedAt: "2026-03-01T18:00:00.000Z",
    averageScore: 4.6,
    status: "submitted",
  },
  {
    id: "ans-002",
    surveyId: "srv-001",
    templateId: "tpl-001",
    trainingId: "trn-001",
    employeeId: "emp-004",
    employeeName: "Bernat Puig",
    employeeAvatar: avatarFor("emp-004"),
    submittedAt: "2026-03-01T19:12:00.000Z",
    averageScore: 4.2,
    status: "submitted",
  },
  {
    id: "ans-003",
    surveyId: "srv-001",
    templateId: "tpl-001",
    trainingId: "trn-001",
    employeeId: "emp-005",
    employeeName: "Carmen López",
    employeeAvatar: avatarFor("emp-005"),
    submittedAt: null,
    averageScore: null,
    status: "pending",
  },
  {
    id: "ans-004",
    surveyId: "srv-002",
    templateId: "tpl-002",
    trainingId: "trn-002",
    employeeId: "emp-001",
    employeeName: "Javier Molina",
    employeeAvatar: avatarFor("emp-001"),
    submittedAt: "2026-03-04T08:30:00.000Z",
    averageScore: 5,
    status: "submitted",
  },
  {
    id: "ans-005",
    surveyId: "srv-002",
    templateId: "tpl-002",
    trainingId: "trn-002",
    employeeId: "emp-002",
    employeeName: "Laura Soler",
    employeeAvatar: avatarFor("emp-002"),
    submittedAt: "2026-03-04T09:15:00.000Z",
    averageScore: 3.5,
    status: "submitted",
  },
]

// --- CONTENT MODULES (LMS) --------------------------------------------------

export type ContentBlockType = "page" | "video" | "quiz" | "scorm"

export type ContentBlock = {
  id: string
  moduleId: string
  type: ContentBlockType
  title: string
  order: number
  estimatedMinutes: number
  preview: string | null
  videoUrl?: string
  questionCount?: number
}

export type ContentModule = {
  id: string
  trainingId: string
  title: string
  description: string
  order: number
  blocks: ContentBlock[]
}

export const contentModules: ContentModule[] = [
  {
    id: "mod-001",
    trainingId: "trn-003",
    title: "1 — Render performance",
    description:
      "How React decides what to re-render and how memo, useMemo and useCallback fit in.",
    order: 1,
    blocks: [
      {
        id: "blk-001",
        moduleId: "mod-001",
        type: "page",
        title: "Reconciliation refresher",
        order: 1,
        estimatedMinutes: 8,
        preview:
          "React's reconciler walks the component tree and decides which subtrees need updates...",
      },
      {
        id: "blk-002",
        moduleId: "mod-001",
        type: "video",
        title: "When memo actually helps",
        order: 2,
        estimatedMinutes: 14,
        preview: "Video walkthrough with practical examples.",
        videoUrl: "https://example.com/video/memo-helps",
      },
      {
        id: "blk-003",
        moduleId: "mod-001",
        type: "quiz",
        title: "Quick check — performance",
        order: 3,
        estimatedMinutes: 5,
        preview: null,
        questionCount: 4,
      },
    ],
  },
  {
    id: "mod-002",
    trainingId: "trn-003",
    title: "2 — Concurrent features",
    description:
      "Transitions, deferred values, Suspense and how to apply them to real UI.",
    order: 2,
    blocks: [
      {
        id: "blk-004",
        moduleId: "mod-002",
        type: "page",
        title: "useTransition vs useDeferredValue",
        order: 1,
        estimatedMinutes: 12,
        preview: "Two tools for the same problem — choose the right one.",
      },
      {
        id: "blk-005",
        moduleId: "mod-002",
        type: "scorm",
        title: "Interactive: build a search-as-you-type",
        order: 2,
        estimatedMinutes: 25,
        preview: "SCORM package — published from our authoring tool.",
      },
    ],
  },
  {
    id: "mod-003",
    trainingId: "trn-003",
    title: "3 — Compound components",
    description: "Patterns for composable, type-safe component APIs.",
    order: 3,
    blocks: [
      {
        id: "blk-006",
        moduleId: "mod-003",
        type: "page",
        title: "The accordion exercise",
        order: 1,
        estimatedMinutes: 10,
        preview: "Hands-on: rebuild an accordion using the compound pattern.",
      },
    ],
  },
]

// --- INSIGHTS AGGREGATES ----------------------------------------------------

export const insightsAggregates = {
  trainingsCount: 7,
  totalCost: 6500,
  totalSubsidizedCost: 800,
  totalDurationHours: 71,
  completionRatePct: 64,
  participantsTotal: 71,
  participantsCompleted: 45,
  participantsInProgress: 12,
  participantsExpired: 10,
  participantsNotStarted: 4,
  topCategory: { name: "Compliance", value: 24 },
  monthlyParticipants: [
    { month: "Jan", value: 4 },
    { month: "Feb", value: 9 },
    { month: "Mar", value: 22 },
    { month: "Apr", value: 14 },
    { month: "May", value: 18 },
    { month: "Jun", value: 4 },
  ],
  costByCategory: [
    { name: "Leadership", value: 1200 },
    { name: "Compliance", value: 250 },
    { name: "Technical Skills", value: 4400 },
    { name: "Soft Skills", value: 2200 },
    { name: "Onboarding", value: 0 },
    { name: "Health & Safety", value: 250 },
  ],
  participantsByDepartment: [
    { name: "Engineering", value: 18 },
    { name: "People", value: 6 },
    { name: "Retail", value: 24 },
    { name: "Sales", value: 12 },
    { name: "Operations", value: 11 },
  ],
  hoursByMonth: [
    { month: "Jan", value: 12 },
    { month: "Feb", value: 18 },
    { month: "Mar", value: 32 },
    { month: "Apr", value: 22 },
    { month: "May", value: 28 },
    { month: "Jun", value: 8 },
  ],
}

// --- FUNDAE / SUBSIDY SETTINGS ----------------------------------------------

export type FundaeSettings = {
  enabled: boolean
  cif: string
  socialReason: string
  contactName: string
  contactEmail: string
  bankAccount: string
  digitalCertificateConfigured: boolean
  rltConfigured: boolean
  rltMembers: Array<{ name: string; role: string; signed: boolean }>
  ccc: string
  hasGroup: boolean
  groupCcc: string
  acceptedConditions: boolean
}

export const fundaeSettings: FundaeSettings = {
  enabled: true,
  cif: "B12345678",
  socialReason: "Factorial Clothing Co. SL",
  contactName: "Javier Molina",
  contactEmail: "javier@factorialclothingco.co",
  bankAccount: "ES91 2100 0418 4502 0005 1332",
  digitalCertificateConfigured: true,
  rltConfigured: true,
  rltMembers: [
    { name: "Ana García", role: "Workers' representative", signed: true },
    { name: "Bernat Puig", role: "Workers' representative", signed: true },
    { name: "Carmen López", role: "Workers' representative", signed: false },
  ],
  ccc: "08/12345678/90",
  hasGroup: false,
  groupCcc: "",
  acceptedConditions: true,
}

// --- ATTENDANCE -------------------------------------------------------------

export type AttendanceStatus = "attended" | "missed" | "excused" | "pending"

export type SessionAttendance = {
  sessionId: string
  employeeId: string
  employeeName: string
  employeeAvatar: string
  status: AttendanceStatus
}

export const sessionAttendances: SessionAttendance[] = [
  // ses-001 — Group A kickoff (9/9 attended)
  {
    sessionId: "ses-001",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    status: "attended",
  },
  {
    sessionId: "ses-001",
    employeeId: "emp-004",
    employeeName: "Bernat Puig",
    employeeAvatar: avatarFor("emp-004"),
    status: "attended",
  },
  {
    sessionId: "ses-001",
    employeeId: "emp-005",
    employeeName: "Carmen López",
    employeeAvatar: avatarFor("emp-005"),
    status: "attended",
  },
  // ses-002 — one missed
  {
    sessionId: "ses-002",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    status: "attended",
  },
  {
    sessionId: "ses-002",
    employeeId: "emp-004",
    employeeName: "Bernat Puig",
    employeeAvatar: avatarFor("emp-004"),
    status: "missed",
  },
  {
    sessionId: "ses-002",
    employeeId: "emp-005",
    employeeName: "Carmen López",
    employeeAvatar: avatarFor("emp-005"),
    status: "attended",
  },
  // ses-005 — scheduled, pending
  {
    sessionId: "ses-005",
    employeeId: "emp-006",
    employeeName: "Dídac Mas",
    employeeAvatar: avatarFor("emp-006"),
    status: "pending",
  },
  {
    sessionId: "ses-005",
    employeeId: "emp-007",
    employeeName: "Elena Ferrer",
    employeeAvatar: avatarFor("emp-007"),
    status: "pending",
  },
]

// --- CERTIFICATES -----------------------------------------------------------

export type Certificate = {
  id: string
  trainingId: string
  employeeId: string
  employeeName: string
  employeeAvatar: string
  fileName: string
  fileSize: string
  uploadedAt: string
  expiresAt: string | null
  status: "valid" | "expiring_soon" | "expired"
}

export const certificates: Certificate[] = [
  {
    id: "cert-001",
    trainingId: "trn-001",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    fileName: "management-fundamentals-ana-garcia.pdf",
    fileSize: "412 KB",
    uploadedAt: "2026-02-28",
    expiresAt: "2027-02-28",
    status: "valid",
  },
  {
    id: "cert-002",
    trainingId: "trn-002",
    employeeId: "emp-001",
    employeeName: "Javier Molina",
    employeeAvatar: avatarFor("emp-001"),
    fileName: "gdpr-2026-javier-molina.pdf",
    fileSize: "318 KB",
    uploadedAt: "2026-03-03",
    expiresAt: "2027-03-03",
    status: "valid",
  },
  {
    id: "cert-003",
    trainingId: "trn-002",
    employeeId: "emp-003",
    employeeName: "Ana García",
    employeeAvatar: avatarFor("emp-003"),
    fileName: "gdpr-2025-ana-garcia.pdf",
    fileSize: "298 KB",
    uploadedAt: "2025-03-01",
    expiresAt: "2026-03-01",
    status: "expired",
  },
]

// --- MATERIALS / FILES ------------------------------------------------------

export type TrainingFile = {
  id: string
  trainingId: string
  name: string
  type: "pdf" | "video" | "doc" | "link" | "image" | "scorm"
  size: string | null
  url: string
  uploadedAt: string
  uploadedBy: string
}

export const trainingFiles: TrainingFile[] = [
  {
    id: "file-001",
    trainingId: "trn-001",
    name: "Leadership handbook.pdf",
    type: "pdf",
    size: "2.4 MB",
    url: "#",
    uploadedAt: "2026-01-15",
    uploadedBy: "Javier Molina",
  },
  {
    id: "file-002",
    trainingId: "trn-001",
    name: "Conflict role-play scenarios.docx",
    type: "doc",
    size: "184 KB",
    url: "#",
    uploadedAt: "2026-01-20",
    uploadedBy: "Laura Soler",
  },
  {
    id: "file-003",
    trainingId: "trn-001",
    name: "Recommended reading list",
    type: "link",
    size: null,
    url: "https://example.com/leadership-books",
    uploadedAt: "2026-01-22",
    uploadedBy: "Javier Molina",
  },
  {
    id: "file-004",
    trainingId: "trn-002",
    name: "GDPR policy 2026.pdf",
    type: "pdf",
    size: "1.1 MB",
    url: "#",
    uploadedAt: "2026-02-01",
    uploadedBy: "Ana García",
  },
  {
    id: "file-005",
    trainingId: "trn-002",
    name: "Breach reporting checklist.pdf",
    type: "pdf",
    size: "224 KB",
    url: "#",
    uploadedAt: "2026-02-05",
    uploadedBy: "Ana García",
  },
  {
    id: "file-006",
    trainingId: "trn-003",
    name: "Module 1 — slides.pdf",
    type: "pdf",
    size: "5.2 MB",
    url: "#",
    uploadedAt: "2026-01-10",
    uploadedBy: "Dídac Mas",
  },
  {
    id: "file-007",
    trainingId: "trn-005",
    name: "Evacuation map — HQ.pdf",
    type: "pdf",
    size: "412 KB",
    url: "#",
    uploadedAt: "2026-04-20",
    uploadedBy: "Elena Ferrer",
  },
]

// --- HELPERS ----------------------------------------------------------------

export function sessionsForClass(classId: string): TrainingSession[] {
  return trainingSessions.filter((s) => s.classId === classId)
}

export function sessionsForTraining(trainingId: string): TrainingSession[] {
  return trainingSessions.filter((s) => s.trainingId === trainingId)
}

export function attendancesForSession(sessionId: string): SessionAttendance[] {
  return sessionAttendances.filter((a) => a.sessionId === sessionId)
}

export function certificatesForTraining(trainingId: string): Certificate[] {
  return certificates.filter((c) => c.trainingId === trainingId)
}

export function certificatesForEmployee(employeeId: string): Certificate[] {
  return certificates.filter((c) => c.employeeId === employeeId)
}

export function filesForTraining(trainingId: string): TrainingFile[] {
  return trainingFiles.filter((f) => f.trainingId === trainingId)
}

export function contentModulesForTraining(trainingId: string): ContentModule[] {
  return contentModules.filter((m) => m.trainingId === trainingId)
}

export function answersForTraining(trainingId: string): SurveyAnswer[] {
  return surveyAnswers.filter((a) => a.trainingId === trainingId)
}

export function requestsForEmployee(employeeId: string): TrainingRequest[] {
  return trainingRequests.filter((r) => r.authorEmployeeId === employeeId)
}

// --- COMPETENCIES -----------------------------------------------------------

export type Competency = { id: string; name: string }

export const competencies: Competency[] = [
  { id: "comp-001", name: "Leadership" },
  { id: "comp-002", name: "Communication" },
  { id: "comp-003", name: "Strategic thinking" },
  { id: "comp-004", name: "Customer focus" },
  { id: "comp-005", name: "Adaptability" },
  { id: "comp-006", name: "Technical excellence" },
  { id: "comp-007", name: "Data literacy" },
  { id: "comp-008", name: "Collaboration" },
  { id: "comp-009", name: "Innovation" },
  { id: "comp-010", name: "Continuous improvement" },
]

// --- WORKFLOW PROCESSES -----------------------------------------------------

export type TrainingProcess = { id: string; name: string }

export const trainingProcesses: TrainingProcess[] = [
  { id: "proc-001", name: "Standard approval (Manager → HR)" },
  { id: "proc-002", name: "L&D committee review" },
  { id: "proc-003", name: "Mandatory training auto-approval" },
  { id: "proc-004", name: "Fundae subsidised flow" },
  { id: "proc-005", name: "Executive sponsorship" },
]

// --- BUDGET MOVEMENTS (training groups consuming a budget) -----------------

export type TrainingGroupStatus = "planned" | "ongoing" | "completed"
export type PaymentStatus = "pending" | "spent"

// Optional per-(movement, legalEntity) cost split. Mirrors the multi-entity
// RFC frames 5/6/8: when this array is populated and the user toggles
// "Costs by legal entity" ON in the sidepanel/Group detail, the three cost
// figures shown to the user are the LE-scoped ones (not the movement-level
// directCost/indirectCost/salaryCost, which act as the single-LE fallback
// when this field is absent). Read-only at the budget level; editable only
// from the Group detail Costs tab in upstream.
export type TrainingMovementLegalEntityCost = {
  legalEntityId: string
  participantsCount: number
  directCost: number
  indirectCost: number
  salaryCost: number
}

export type TrainingBudgetMovement = {
  id: string
  budgetId: string
  trainingId: string
  trainingName: string
  groupId: string
  groupName: string
  groupStatus: TrainingGroupStatus
  startDate: string | null
  endDate: string | null
  amountCents: number
  currency: string
  trainingProvider: string
  trainingTeamId: string
  trainingTeamName: string
  paymentStatus: PaymentStatus
  participantsCount: number
  directCost: number
  indirectCost: number
  salaryCost: number
  costsByLegalEntity?: TrainingMovementLegalEntityCost[]
  costUpdateNotice?: {
    title: string
    description: string
    change?: string
    currentStatus?: string
    impact?: string
    details?: string[]
  }
}

// Sum of direct+indirect+salary across LE breakdown (gross cost upstream).
export function grossCostFromBreakdown(
  breakdown: TrainingMovementLegalEntityCost[]
): number {
  return breakdown.reduce(
    (acc, le) => acc + le.directCost + le.indirectCost + le.salaryCost,
    0
  )
}

// Total cost shown to the user: breakdown sum when set, else movement-level
// gross cost.
export function grossCostFromMovement(movement: TrainingBudgetMovement): number {
  if (movement.costsByLegalEntity && movement.costsByLegalEntity.length > 0) {
    return grossCostFromBreakdown(movement.costsByLegalEntity)
  }
  return movement.directCost + movement.indirectCost + movement.salaryCost
}

// Per-bucket aggregates (Direct, Indirect, Salary) used in the Group detail
// Costs page (frame 7) and breakdown card (frame 6 footer). When a movement
// has a per-LE breakdown, the three figures are the sum of that column
// across all LEs; otherwise they fall back to the movement-level field.
export function directCostFromMovement(movement: TrainingBudgetMovement): number {
  if (movement.costsByLegalEntity && movement.costsByLegalEntity.length > 0) {
    return movement.costsByLegalEntity.reduce((acc, le) => acc + le.directCost, 0)
  }
  return movement.directCost
}

export function indirectCostFromMovement(movement: TrainingBudgetMovement): number {
  if (movement.costsByLegalEntity && movement.costsByLegalEntity.length > 0) {
    return movement.costsByLegalEntity.reduce(
      (acc, le) => acc + le.indirectCost,
      0
    )
  }
  return movement.indirectCost
}

export function salaryCostFromMovement(movement: TrainingBudgetMovement): number {
  if (movement.costsByLegalEntity && movement.costsByLegalEntity.length > 0) {
    return movement.costsByLegalEntity.reduce((acc, le) => acc + le.salaryCost, 0)
  }
  return movement.salaryCost
}

// Resolve the per-LE cost breakdown for a movement. When the fixture defines
// `costsByLegalEntity` explicitly (e.g. mov-001 mirroring the Figma), it is
// returned verbatim. Otherwise costs are split PROPORTIONALLY by participant
// count per LE — that's the semantic the toggle promises: "see all costs
// split by legal entity".
//
// Returns one entry per legalEntityId provided, even when the sum is zero.
export function breakdownByLegalEntityFor(
  movement: TrainingBudgetMovement,
  participantsByLegalEntity: Array<{ legalEntityId: string; count: number }>
): TrainingMovementLegalEntityCost[] {
  if (movement.costsByLegalEntity && movement.costsByLegalEntity.length > 0) {
    // Honor the fixture; split any remaining movement cost across missing LEs.
    const map = new Map(
      movement.costsByLegalEntity.map((c) => [c.legalEntityId, c])
    )
    const missing = participantsByLegalEntity.filter(
      ({ legalEntityId }) => !map.has(legalEntityId)
    )
    const missingParticipants = missing.reduce((sum, p) => sum + p.count, 0)
    const defined = movement.costsByLegalEntity.reduce(
      (acc, cost) => ({
        directCost: acc.directCost + cost.directCost,
        indirectCost: acc.indirectCost + cost.indirectCost,
        salaryCost: acc.salaryCost + cost.salaryCost,
      }),
      { directCost: 0, indirectCost: 0, salaryCost: 0 }
    )
    const remaining = {
      directCost: Math.max(0, movement.directCost - defined.directCost),
      indirectCost: Math.max(0, movement.indirectCost - defined.indirectCost),
      salaryCost: Math.max(0, movement.salaryCost - defined.salaryCost),
    }

    return participantsByLegalEntity.map(({ legalEntityId, count }) => {
      const fixtureCost = map.get(legalEntityId)
      if (fixtureCost) return fixtureCost
      const ratio = missingParticipants > 0 ? count / missingParticipants : 0
      return {
        legalEntityId,
        participantsCount: count,
        directCost: Math.round(remaining.directCost * ratio),
        indirectCost: Math.round(remaining.indirectCost * ratio),
        salaryCost: Math.round(remaining.salaryCost * ratio),
      }
    })
  }
  const total = participantsByLegalEntity.reduce((s, p) => s + p.count, 0)
  if (total === 0) {
    return participantsByLegalEntity.map(({ legalEntityId, count }) => ({
      legalEntityId,
      participantsCount: count,
      directCost: 0,
      indirectCost: 0,
      salaryCost: 0,
    }))
  }
  return participantsByLegalEntity.map(({ legalEntityId, count }) => {
    const ratio = count / total
    return {
      legalEntityId,
      participantsCount: count,
      directCost: Math.round(movement.directCost * ratio),
      indirectCost: Math.round(movement.indirectCost * ratio),
      salaryCost: Math.round(movement.salaryCost * ratio),
    }
  })
}

export const trainingBudgetMovements: TrainingBudgetMovement[] = [
  // bud-training-live-costs — exploration state for automatic cost updates
  {
    id: "mov-live-costs-001",
    budgetId: "bud-training-live-costs",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-madrid-morning",
    groupName: "Madrid Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 3,
    directCost: 7769,
    indirectCost: 1942.59,
    salaryCost: 288.41,
    costUpdateNotice: {
      title: "Participant changes detected",
      description:
        "A participant was added since the last review. The budget already includes the latest participant and salary data.",
      change: "+1 participant",
      impact: "+420.00 €",
      currentStatus: "Included in current figures",
      details: [
        "+1 participant since last review",
        "Salary cost increased by 132.00 €",
        "Cost per participant changed from 3,333.00 € to 2,605.00 €",
      ],
    },
    costsByLegalEntity: [
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 2,
        directCost: 5179.33,
        indirectCost: 1295.06,
        salaryCost: 184.23,
      },
      {
        legalEntityId: "le-casa-tarraee",
        participantsCount: 1,
        directCost: 2589.67,
        indirectCost: 647.53,
        salaryCost: 104.18,
      },
    ],
  },
  {
    id: "mov-live-costs-002",
    budgetId: "bud-training-live-costs",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-france-morning",
    groupName: "France Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 5,
    directCost: 7499,
    indirectCost: 1875.18,
    salaryCost: 625.82,
    costUpdateNotice: {
      title: "Legal entity split changed",
      description:
        "One participant now belongs to a different legal entity. The budget split already reflects the current employee data.",
      change: "Legal entity split changed",
      impact: "No total change",
      currentStatus: "Split updated in current figures",
      details: [
        "Northstar BCN added to this group",
        "Acme France participant count changed from 3 to 2",
        "Budget split now includes 3 legal entities",
      ],
    },
    costsByLegalEntity: [
      {
        legalEntityId: "le-casa-tarraee",
        participantsCount: 2,
        directCost: 2999.6,
        indirectCost: 750.07,
        salaryCost: 240.45,
      },
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 2,
        directCost: 2999.6,
        indirectCost: 750.07,
        salaryCost: 151.39,
      },
      {
        legalEntityId: "le-bcn-casa-ee",
        participantsCount: 1,
        directCost: 1499.8,
        indirectCost: 375.04,
        salaryCost: 233.98,
      },
    ],
  },
  {
    id: "mov-live-costs-003",
    budgetId: "bud-training-live-costs",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-italy-morning",
    groupName: "Italy Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 10,
    directCost: 7162.02,
    indirectCost: 1790.51,
    salaryCost: 1047.47,
    costUpdateNotice: {
      title: "Salary data changed",
      description:
        "Contract or salary data changed for participants in this group. Salary cost has been recalculated in the current budget figures.",
      change: "Salary data changed",
      impact: "+1,047.00 €",
      currentStatus: "Included in current figures",
      details: [
        "Salary data changed for 2 participants",
        "Salary cost increased from 878.00 € to 1,047.00 €",
        "Cost per participant changed from 1,000.00 € to 1,105.00 €",
      ],
    },
    costsByLegalEntity: [
      {
        legalEntityId: "le-bcn-casa-ee",
        participantsCount: 5,
        directCost: 3581.01,
        indirectCost: 895.26,
        salaryCost: 379.17,
      },
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 5,
        directCost: 3581.01,
        indirectCost: 895.25,
        salaryCost: 668.3,
      },
    ],
  },
  // bud-training-2026 — Training budget 2026
  {
    id: "mov-training-2026-001",
    budgetId: "bud-training-2026",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-madrid-morning",
    groupName: "Madrid Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 3,
    directCost: 7769,
    indirectCost: 1942.59,
    salaryCost: 288.41,
    costsByLegalEntity: [
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 2,
        directCost: 5179.33,
        indirectCost: 1295.06,
        salaryCost: 184.23,
      },
      {
        legalEntityId: "le-casa-tarraee",
        participantsCount: 1,
        directCost: 2589.67,
        indirectCost: 647.53,
        salaryCost: 104.18,
      },
    ],
  },
  {
    id: "mov-training-2026-002",
    budgetId: "bud-training-2026",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-france-morning",
    groupName: "France Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 5,
    directCost: 7499,
    indirectCost: 1875.18,
    salaryCost: 625.82,
    costsByLegalEntity: [
      {
        legalEntityId: "le-casa-tarraee",
        participantsCount: 2,
        directCost: 2999.6,
        indirectCost: 750.07,
        salaryCost: 240.45,
      },
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 2,
        directCost: 2999.6,
        indirectCost: 750.07,
        salaryCost: 151.39,
      },
      {
        legalEntityId: "le-bcn-casa-ee",
        participantsCount: 1,
        directCost: 1499.8,
        indirectCost: 375.04,
        salaryCost: 233.98,
      },
    ],
  },
  {
    id: "mov-training-2026-003",
    budgetId: "bud-training-2026",
    trainingId: "trn-communication-skills-2026",
    trainingName: "Communication skills",
    groupId: "cls-communication-italy-morning",
    groupName: "Italy Group Morning Mayo 2026",
    groupStatus: "completed",
    startDate: "2026-03-26",
    endDate: "2026-03-27",
    amountCents: 1000000,
    currency: "EUR",
    trainingProvider: "Private",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "pending",
    participantsCount: 10,
    directCost: 7162.02,
    indirectCost: 1790.51,
    salaryCost: 1047.47,
    costsByLegalEntity: [
      {
        legalEntityId: "le-bcn-casa-ee",
        participantsCount: 5,
        directCost: 3581.01,
        indirectCost: 895.26,
        salaryCost: 379.17,
      },
      {
        legalEntityId: "le-factorial-spain",
        participantsCount: 5,
        directCost: 3581.01,
        indirectCost: 895.25,
        salaryCost: 668.3,
      },
    ],
  },
  // bud-001 — Company-wide 2026
  {
    id: "mov-001",
    budgetId: "bud-001",
    trainingId: "trn-001",
    trainingName: "Management Fundamentals",
    groupId: "cls-001a",
    groupName: "Group A – Q1",
    groupStatus: "completed",
    startDate: "2026-02-10",
    endDate: "2026-02-28",
    amountCents: 320000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-eng",
    trainingTeamName: "Engineering",
    paymentStatus: "spent",
    participantsCount: 9,
    // Frame 6 of the RFC ("Costs by legal entity" toggle ON): the three
    // movement-level figures equal the sum of the LE breakdown so the
    // OFF/ON views show the same totals.
    directCost: 6240,
    indirectCost: 1310,
    salaryCost: 2450,
    costsByLegalEntity: [
      {
        legalEntityId: "le-001",
        participantsCount: 1,
        directCost: 1240,
        indirectCost: 310,
        salaryCost: 517,
      },
      {
        legalEntityId: "le-003",
        participantsCount: 1,
        directCost: 1600,
        indirectCost: 300,
        salaryCost: 583,
      },
      {
        legalEntityId: "le-002",
        participantsCount: 1,
        directCost: 3400,
        indirectCost: 700,
        salaryCost: 1350,
      },
    ],
  },
  {
    id: "mov-002",
    budgetId: "bud-001",
    trainingId: "trn-001",
    trainingName: "Management Fundamentals",
    groupId: "cls-001b",
    groupName: "Group B – Q2",
    groupStatus: "planned",
    startDate: "2026-04-07",
    endDate: "2026-04-25",
    amountCents: 280000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-prd",
    trainingTeamName: "Product",
    paymentStatus: "pending",
    participantsCount: 9,
    directCost: 1200,
    indirectCost: 180,
    salaryCost: 1300,
  },
  {
    id: "mov-003",
    budgetId: "bud-001",
    trainingId: "trn-003",
    trainingName: "React Advanced Patterns",
    groupId: "cls-003a",
    groupName: "Self-paced cohort",
    groupStatus: "ongoing",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    amountCents: 380000,
    currency: "EUR",
    trainingProvider: "Frontend Masters",
    trainingTeamId: "team-eng",
    trainingTeamName: "Engineering",
    paymentStatus: "spent",
    participantsCount: 8,
    directCost: 3800,
    indirectCost: 0,
    salaryCost: 0,
  },
  // bud-002 — Engineering 2026
  {
    id: "mov-004",
    budgetId: "bud-002",
    trainingId: "trn-003",
    trainingName: "React Advanced Patterns",
    groupId: "cls-003a",
    groupName: "Self-paced cohort",
    groupStatus: "ongoing",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    amountCents: 380000,
    currency: "EUR",
    trainingProvider: "Frontend Masters",
    trainingTeamId: "team-eng",
    trainingTeamName: "Engineering",
    paymentStatus: "spent",
    participantsCount: 8,
    directCost: 3800,
    indirectCost: 0,
    salaryCost: 9600,
  },
  {
    id: "mov-005",
    budgetId: "bud-002",
    trainingId: "trn-001",
    trainingName: "Management Fundamentals",
    groupId: "cls-001a",
    groupName: "Group A – Q1",
    groupStatus: "completed",
    startDate: "2026-02-10",
    endDate: "2026-02-28",
    amountCents: 240000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-eng",
    trainingTeamName: "Engineering",
    paymentStatus: "spent",
    participantsCount: 5,
    directCost: 1200,
    indirectCost: 180,
    salaryCost: 2350,
  },
  {
    id: "mov-006",
    budgetId: "bud-002",
    trainingId: "trn-001",
    trainingName: "Management Fundamentals",
    groupId: "cls-001b",
    groupName: "Group B – Q2",
    groupStatus: "planned",
    startDate: "2026-04-07",
    endDate: "2026-04-25",
    amountCents: 150000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-eng",
    trainingTeamName: "Engineering",
    paymentStatus: "pending",
    participantsCount: 4,
    directCost: 1200,
    indirectCost: 180,
    salaryCost: 1300,
  },
  // bud-003 — People & Talent 2026 (over budget)
  {
    id: "mov-007",
    budgetId: "bud-003",
    trainingId: "trn-002",
    trainingName: "GDPR Compliance 2026",
    groupId: "cls-002a",
    groupName: "Full company – March",
    groupStatus: "completed",
    startDate: "2026-03-03",
    endDate: "2026-03-03",
    amountCents: 320000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "spent",
    participantsCount: 20,
    directCost: 0,
    indirectCost: 0,
    salaryCost: 1200,
  },
  {
    id: "mov-008",
    budgetId: "bud-003",
    trainingId: "trn-004",
    trainingName: "New Employee Orientation",
    groupId: "cls-004a",
    groupName: "Onboarding – January",
    groupStatus: "completed",
    startDate: "2026-01-10",
    endDate: "2026-01-12",
    amountCents: 290000,
    currency: "EUR",
    trainingProvider: "Internal",
    trainingTeamId: "team-ppl",
    trainingTeamName: "People",
    paymentStatus: "spent",
    participantsCount: 12,
    directCost: 0,
    indirectCost: 0,
    salaryCost: 600,
  },
]

export const movementsForBudget = (budgetId: string): TrainingBudgetMovement[] =>
  trainingBudgetMovements.filter((m) => m.budgetId === budgetId)

// ── Synthetic per-employee training cost data ───────────────────────────────
// Hourly rate is derived from the employee's invented annualSalaryEur using a
// standard ~1.760 productive hours/year. Hours completed for a given group
// are derived deterministically from the (employeeId, groupId) pair so each
// participant has their own value. Per-participant salary cost = rate × hours.
// Not a payroll source of truth — purely prototype data.

import { findEmployee } from "./employees"

const ANNUAL_PRODUCTIVE_HOURS = 1760

function hashCode(input: string): number {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

/** Hourly rate in EUR derived from the employee's annual salary. */
export function hourlyRateForEmployee(employeeId: string): number {
  const emp = findEmployee(employeeId)
  if (!emp?.annualSalaryEur) return 0
  return Math.round((emp.annualSalaryEur / ANNUAL_PRODUCTIVE_HOURS) * 100) / 100
}

/** Stable hours-completed per employee for a given group, range 1.5–4.0h. */
export function hoursCompletedForEmployee(
  employeeId: string,
  groupId: string
): number {
  const h = hashCode(`${employeeId}:${groupId}:hours`)
  // 1.5 + (h % 251) / 100 => 1.50 … 4.00
  return Math.round((1.5 + (h % 251) / 100) * 100) / 100
}

/** Per-employee salary cost in a group = hourlyRate × hoursCompleted. */
export function salaryCostForEmployeeInGroup(
  employeeId: string,
  groupId: string
): number {
  const rate = hourlyRateForEmployee(employeeId)
  const hours = hoursCompletedForEmployee(employeeId, groupId)
  return Math.round(rate * hours * 100) / 100
}
