import type { Goal, PerformanceReview } from "./types"

/**
 * A review cycle / campaign — the higher-level concept the Performance main
 * screen lists. Each row in the table is one cycle; many `PerformanceReview`
 * rows belong to a single cycle.
 */
export type ReviewCycleStatus = "draft" | "active" | "finished"

export type ReviewCycleType =
  | "180º"
  | "270º"
  | "360º"
  | "self"
  | "probation"
  | "calibration"
  | "onboarding"

export type PerformanceCycle = {
  id: string
  name: string
  status: ReviewCycleStatus
  /** Cycle template — drives the avatar emoji + filter chips. */
  type: ReviewCycleType
  /** Employee id of the admin/HR responsible for the cycle. */
  ownerId: string
  /** Whether automatic reminders are enabled for pending reviewers. */
  automaticReminders: boolean
  /** Number of completed reviewer submissions in the cycle. */
  completed: number | null
  /** Total expected reviewer submissions in the cycle. Null on drafts. */
  total: number | null
  /** ISO YYYY-MM-DD. */
  createdOn: string
  /** ISO YYYY-MM-DD or null while the cycle is still a draft. */
  startDate: string | null
  /** ISO YYYY-MM-DD or null while the cycle is still a draft. */
  deadline: string | null
}

export const performanceCycles: PerformanceCycle[] = [
  {
    id: "cyc-001",
    name: "180º Review - March 2026",
    status: "active",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 487,
    total: 1261,
    createdOn: "2026-04-15",
    startDate: "2026-04-20",
    deadline: "2026-05-12",
  },
  {
    id: "cyc-002",
    name: "180º Review - June 2026",
    status: "draft",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: false,
    completed: null,
    total: null,
    createdOn: "2026-04-25",
    startDate: null,
    deadline: null,
  },
  {
    id: "cyc-003",
    name: "270º Review with weighted scores - January 2026",
    status: "finished",
    type: "270º",
    ownerId: "emp-008",
    automaticReminders: true,
    completed: 8,
    total: 8,
    createdOn: "2025-12-01",
    startDate: "2026-01-01",
    deadline: "2026-02-01",
  },
  {
    id: "cyc-004",
    name: "180º Review - June 2025",
    status: "finished",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 925,
    total: 925,
    createdOn: "2025-05-01",
    startDate: "2025-06-01",
    deadline: "2025-07-01",
  },
  {
    id: "cyc-005",
    name: "180º Review - December 2025",
    status: "finished",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 1139,
    total: 1139,
    createdOn: "2025-11-01",
    startDate: "2025-12-01",
    deadline: "2026-01-01",
  },
  {
    id: "cyc-006",
    name: "360º Review - Engineering Q4 2025",
    status: "finished",
    type: "360º",
    ownerId: "emp-001",
    automaticReminders: true,
    completed: 84,
    total: 84,
    createdOn: "2025-09-15",
    startDate: "2025-10-01",
    deadline: "2025-11-15",
  },
  {
    id: "cyc-007",
    name: "180º Review - September 2025",
    status: "finished",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 1042,
    total: 1042,
    createdOn: "2025-08-01",
    startDate: "2025-09-01",
    deadline: "2025-10-01",
  },
  {
    id: "cyc-008",
    name: "Self-assessment - Mid-year 2025",
    status: "finished",
    type: "self",
    ownerId: "emp-010",
    automaticReminders: false,
    completed: 1210,
    total: 1210,
    createdOn: "2025-06-15",
    startDate: "2025-07-01",
    deadline: "2025-07-31",
  },
  {
    id: "cyc-009",
    name: "Probation review - Q1 2026 hires",
    status: "active",
    type: "probation",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 18,
    total: 47,
    createdOn: "2026-02-10",
    startDate: "2026-04-15",
    deadline: "2026-05-15",
  },
  {
    id: "cyc-010",
    name: "Manager calibration - April 2026",
    status: "active",
    type: "calibration",
    ownerId: "emp-001",
    automaticReminders: false,
    completed: 6,
    total: 32,
    createdOn: "2026-03-20",
    startDate: "2026-04-01",
    deadline: "2026-05-08",
  },
  {
    id: "cyc-011",
    name: "180º Review - March 2025",
    status: "finished",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 887,
    total: 887,
    createdOn: "2025-02-01",
    startDate: "2025-03-01",
    deadline: "2025-04-01",
  },
  {
    id: "cyc-012",
    name: "270º Review - Sales leadership",
    status: "draft",
    type: "270º",
    ownerId: "emp-014",
    automaticReminders: false,
    completed: null,
    total: null,
    createdOn: "2026-04-10",
    startDate: null,
    deadline: null,
  },
  {
    id: "cyc-013",
    name: "Quarterly check-in - Q2 2026",
    status: "draft",
    type: "self",
    ownerId: "emp-010",
    automaticReminders: false,
    completed: null,
    total: null,
    createdOn: "2026-04-22",
    startDate: null,
    deadline: null,
  },
  {
    id: "cyc-014",
    name: "Onboarding review - 30/60/90 day",
    status: "active",
    type: "onboarding",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 22,
    total: 64,
    createdOn: "2026-01-15",
    startDate: "2026-02-01",
    deadline: "2026-05-01",
  },
  {
    id: "cyc-015",
    name: "180º Review - December 2024",
    status: "finished",
    type: "180º",
    ownerId: "emp-002",
    automaticReminders: true,
    completed: 712,
    total: 712,
    createdOn: "2024-11-01",
    startDate: "2024-12-01",
    deadline: "2025-01-01",
  },
]

/**
 * Activity feed for the Performance home — surface of recent admin-relevant
 * events. Reverse-chronological in `createdAt`.
 */
export type CycleActivityType =
  | "created"
  | "started"
  | "finished"
  | "extended"
  | "reminder-sent"
  | "owner-changed"

export type CycleActivity = {
  id: string
  type: CycleActivityType
  /** Cycle id this activity refers to. */
  cycleId: string
  /** Cycle name at the time of the event (denormalised for the feed). */
  cycleName: string
  /** Employee id responsible for the action. */
  actorId: string
  /** ISO YYYY-MM-DD. */
  createdAt: string
}

export const cycleActivity: CycleActivity[] = [
  {
    id: "act-001",
    type: "reminder-sent",
    cycleId: "cyc-001",
    cycleName: "180º Review - March 2026",
    actorId: "emp-002",
    createdAt: "2026-05-05",
  },
  {
    id: "act-002",
    type: "started",
    cycleId: "cyc-009",
    cycleName: "Probation review - Q1 2026 hires",
    actorId: "emp-002",
    createdAt: "2026-04-15",
  },
  {
    id: "act-003",
    type: "created",
    cycleId: "cyc-013",
    cycleName: "Quarterly check-in - Q2 2026",
    actorId: "emp-010",
    createdAt: "2026-04-22",
  },
  {
    id: "act-004",
    type: "extended",
    cycleId: "cyc-010",
    cycleName: "Manager calibration - April 2026",
    actorId: "emp-001",
    createdAt: "2026-04-28",
  },
  {
    id: "act-005",
    type: "finished",
    cycleId: "cyc-003",
    cycleName: "270º Review with weighted scores - January 2026",
    actorId: "emp-008",
    createdAt: "2026-02-02",
  },
  {
    id: "act-006",
    type: "owner-changed",
    cycleId: "cyc-014",
    cycleName: "Onboarding review - 30/60/90 day",
    actorId: "emp-002",
    createdAt: "2026-04-10",
  },
  {
    id: "act-007",
    type: "created",
    cycleId: "cyc-012",
    cycleName: "270º Review - Sales leadership",
    actorId: "emp-014",
    createdAt: "2026-04-10",
  },
  {
    id: "act-008",
    type: "reminder-sent",
    cycleId: "cyc-014",
    cycleName: "Onboarding review - 30/60/90 day",
    actorId: "emp-002",
    createdAt: "2026-04-30",
  },
]

export const performanceReviews: PerformanceReview[] = [
  {
    id: "rev-001",
    employeeId: "emp-003",
    reviewerId: "emp-001",
    cycle: "Q1 2026",
    status: "completed",
    rating: "exceeds",
    goalsCompleted: 4,
    goalsTotal: 4,
    submittedAt: "2026-04-04",
  },
  {
    id: "rev-002",
    employeeId: "emp-005",
    reviewerId: "emp-004",
    cycle: "Q1 2026",
    status: "completed",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 4,
    submittedAt: "2026-04-08",
  },
  {
    id: "rev-003",
    employeeId: "emp-006",
    reviewerId: "emp-004",
    cycle: "Q1 2026",
    status: "completed",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 3,
    submittedAt: "2026-04-09",
  },
  {
    id: "rev-004",
    employeeId: "emp-007",
    reviewerId: "emp-008",
    cycle: "Q1 2026",
    status: "calibrating",
    rating: "exceeds",
    goalsCompleted: 5,
    goalsTotal: 5,
    submittedAt: "2026-04-21",
  },
  {
    id: "rev-005",
    employeeId: "emp-009",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "completed",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 4,
    submittedAt: "2026-04-15",
  },
  {
    id: "rev-006",
    employeeId: "emp-011",
    reviewerId: "emp-002",
    cycle: "Q1 2026",
    status: "submitted",
    rating: "meets",
    goalsCompleted: 2,
    goalsTotal: 3,
    submittedAt: "2026-04-28",
  },
  {
    id: "rev-007",
    employeeId: "emp-013",
    reviewerId: "emp-014",
    cycle: "Q1 2026",
    status: "submitted",
    rating: "below",
    goalsCompleted: 1,
    goalsTotal: 4,
    submittedAt: "2026-04-29",
  },
  {
    id: "rev-008",
    employeeId: "emp-015",
    reviewerId: "emp-016",
    cycle: "Q1 2026",
    status: "draft",
    goalsCompleted: 2,
    goalsTotal: 3,
  },
  {
    id: "rev-009",
    employeeId: "emp-017",
    reviewerId: "emp-004",
    cycle: "Q1 2026",
    status: "draft",
    goalsCompleted: 1,
    goalsTotal: 2,
  },
  {
    id: "rev-010",
    employeeId: "emp-019",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "submitted",
    rating: "exceeds",
    goalsCompleted: 4,
    goalsTotal: 4,
    submittedAt: "2026-04-30",
  },
  {
    id: "rev-011",
    employeeId: "emp-012",
    reviewerId: "emp-002",
    cycle: "Q1 2026",
    status: "completed",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 3,
    submittedAt: "2026-04-12",
  },
  {
    id: "rev-012",
    employeeId: "emp-014",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "calibrating",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 4,
    submittedAt: "2026-04-22",
  },
  {
    id: "rev-013",
    employeeId: "emp-001",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "completed",
    rating: "exceeds",
    goalsCompleted: 4,
    goalsTotal: 4,
    submittedAt: "2026-04-18",
  },
  {
    id: "rev-014",
    employeeId: "emp-008",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "completed",
    rating: "meets",
    goalsCompleted: 3,
    goalsTotal: 3,
    submittedAt: "2026-04-20",
  },
  {
    id: "rev-015",
    employeeId: "emp-016",
    reviewerId: "emp-010",
    cycle: "Q1 2026",
    status: "completed",
    rating: "exceeds",
    goalsCompleted: 4,
    goalsTotal: 4,
    submittedAt: "2026-04-24",
  },
]

/**
 * Competencies — skills/behaviors tracked across the org.
 */
export type CompetencyLevel = "novice" | "intermediate" | "advanced" | "expert"

export type Competency = {
  id: string
  name: string
  category: "technical" | "leadership" | "communication" | "execution"
  description: string
}

export type EmployeeCompetency = {
  id: string
  employeeId: string
  competencyId: string
  currentLevel: CompetencyLevel
  targetLevel: CompetencyLevel
  assessedAt: string
}

export const competencies: Competency[] = [
  { id: "comp-001", name: "System Design", category: "technical", description: "Ability to design scalable and maintainable systems" },
  { id: "comp-002", name: "Code Quality", category: "technical", description: "Writing clean, tested, and well-documented code" },
  { id: "comp-003", name: "People Management", category: "leadership", description: "Coaching, growing, and supporting direct reports" },
  { id: "comp-004", name: "Strategic Thinking", category: "leadership", description: "Setting direction and making long-term decisions" },
  { id: "comp-005", name: "Written Communication", category: "communication", description: "Clear, concise, and effective written communication" },
  { id: "comp-006", name: "Presentation Skills", category: "communication", description: "Delivering engaging and clear presentations" },
  { id: "comp-007", name: "Delivery", category: "execution", description: "Consistently shipping high-quality work on time" },
  { id: "comp-008", name: "Problem Solving", category: "execution", description: "Breaking down complex problems into actionable steps" },
]

export const employeeCompetencies: EmployeeCompetency[] = [
  { id: "ec-001", employeeId: "emp-003", competencyId: "comp-001", currentLevel: "expert", targetLevel: "expert", assessedAt: "2026-04-01" },
  { id: "ec-002", employeeId: "emp-003", competencyId: "comp-002", currentLevel: "advanced", targetLevel: "expert", assessedAt: "2026-04-01" },
  { id: "ec-003", employeeId: "emp-005", competencyId: "comp-002", currentLevel: "advanced", targetLevel: "expert", assessedAt: "2026-04-01" },
  { id: "ec-004", employeeId: "emp-005", competencyId: "comp-007", currentLevel: "advanced", targetLevel: "advanced", assessedAt: "2026-04-01" },
  { id: "ec-005", employeeId: "emp-004", competencyId: "comp-003", currentLevel: "advanced", targetLevel: "expert", assessedAt: "2026-03-15" },
  { id: "ec-006", employeeId: "emp-004", competencyId: "comp-004", currentLevel: "intermediate", targetLevel: "advanced", assessedAt: "2026-03-15" },
  { id: "ec-007", employeeId: "emp-007", competencyId: "comp-005", currentLevel: "intermediate", targetLevel: "advanced", assessedAt: "2026-04-01" },
  { id: "ec-008", employeeId: "emp-007", competencyId: "comp-008", currentLevel: "advanced", targetLevel: "advanced", assessedAt: "2026-04-01" },
  { id: "ec-009", employeeId: "emp-009", competencyId: "comp-004", currentLevel: "advanced", targetLevel: "expert", assessedAt: "2026-04-10" },
  { id: "ec-010", employeeId: "emp-009", competencyId: "comp-005", currentLevel: "advanced", targetLevel: "advanced", assessedAt: "2026-04-10" },
  { id: "ec-011", employeeId: "emp-001", competencyId: "comp-003", currentLevel: "expert", targetLevel: "expert", assessedAt: "2026-03-01" },
  { id: "ec-012", employeeId: "emp-001", competencyId: "comp-004", currentLevel: "expert", targetLevel: "expert", assessedAt: "2026-03-01" },
]

/**
 * Feedback — peer/manager feedback entries.
 */
export type FeedbackType = "praise" | "constructive" | "request"
export type FeedbackVisibility = "public" | "private" | "manager-only"

export type Feedback = {
  id: string
  fromEmployeeId: string
  toEmployeeId: string
  type: FeedbackType
  visibility: FeedbackVisibility
  content: string
  createdAt: string
}

export const feedbacks: Feedback[] = [
  { id: "fb-001", fromEmployeeId: "emp-001", toEmployeeId: "emp-003", type: "praise", visibility: "public", content: "Alan's architecture proposal for the event system was exceptional — clear trade-offs, pragmatic choices.", createdAt: "2026-05-02" },
  { id: "fb-002", fromEmployeeId: "emp-004", toEmployeeId: "emp-005", type: "praise", visibility: "public", content: "Lin shipped the payroll migration ahead of schedule with zero regressions. Incredible attention to detail.", createdAt: "2026-04-28" },
  { id: "fb-003", fromEmployeeId: "emp-005", toEmployeeId: "emp-004", type: "constructive", visibility: "private", content: "It would help if sprint priorities were communicated earlier — the late changes last week caused some churn.", createdAt: "2026-04-25" },
  { id: "fb-004", fromEmployeeId: "emp-010", toEmployeeId: "emp-009", type: "praise", visibility: "public", content: "Great job facilitating the cross-team alignment. The outcome was much better than expected.", createdAt: "2026-04-20" },
  { id: "fb-005", fromEmployeeId: "emp-002", toEmployeeId: "emp-007", type: "constructive", visibility: "manager-only", content: "The onboarding redesign needs more stakeholder input before moving to implementation.", createdAt: "2026-04-18" },
  { id: "fb-006", fromEmployeeId: "emp-003", toEmployeeId: "emp-001", type: "praise", visibility: "public", content: "Ada's mentorship during the architecture review process has been invaluable.", createdAt: "2026-04-15" },
  { id: "fb-007", fromEmployeeId: "emp-008", toEmployeeId: "emp-007", type: "praise", visibility: "public", content: "The onboarding flow improvements show real user empathy. Drop-off metrics are already improving.", createdAt: "2026-04-12" },
  { id: "fb-008", fromEmployeeId: "emp-014", toEmployeeId: "emp-013", type: "constructive", visibility: "private", content: "Pipeline updates need to be more frequent — the team was surprised by the Q1 miss.", createdAt: "2026-04-10" },
  { id: "fb-009", fromEmployeeId: "emp-001", toEmployeeId: "emp-004", type: "request", visibility: "private", content: "Would love your input on the new engineering ladder draft — your perspective on IC growth would be valuable.", createdAt: "2026-05-05" },
  { id: "fb-010", fromEmployeeId: "emp-009", toEmployeeId: "emp-005", type: "praise", visibility: "public", content: "Lin's documentation on the new charting API saved the team hours of onboarding time.", createdAt: "2026-05-01" },
]

export const goals: Goal[] = [
  {
    id: "goal-001",
    employeeId: "emp-005",
    title: "Migrate Payroll views to F0DataChart",
    description:
      "Replace legacy charts in Payroll dashboards with F0DataChart, ensuring visual parity and a11y baseline.",
    progress: 70,
    dueDate: "2026-06-30",
    status: "on-track",
  },
  {
    id: "goal-002",
    employeeId: "emp-005",
    title: "Reduce bundle size by 15%",
    description: "Tree-shake unused locale data and lazy-load heavy editors.",
    progress: 40,
    dueDate: "2026-06-30",
    status: "at-risk",
  },
  {
    id: "goal-003",
    employeeId: "emp-006",
    title: "Ship payroll concept editor",
    description: "Public release of the new concept editor with audit trail.",
    progress: 100,
    dueDate: "2026-04-30",
    status: "completed",
  },
  {
    id: "goal-004",
    employeeId: "emp-007",
    title: "Onboarding flow redesign",
    description: "Reduce drop-off in step 3 by 20% through improved guidance.",
    progress: 85,
    dueDate: "2026-05-31",
    status: "on-track",
  },
  {
    id: "goal-005",
    employeeId: "emp-009",
    title: "Define Time Off v3 scope",
    description: "Align with engineering on a phased rollout for Time Off v3.",
    progress: 50,
    dueDate: "2026-06-15",
    status: "on-track",
  },
  {
    id: "goal-006",
    employeeId: "emp-013",
    title: "Hit Q1 sales target",
    description: "Close 8 enterprise deals in EMEA.",
    progress: 25,
    dueDate: "2026-03-31",
    status: "abandoned",
  },
]
