/**
 * Local fixtures for the AI Mentor prototype.
 * These model the existing Trainings surfaces first; AI Mentor is only a layer
 * that creates/adapts courses when a closed review identifies a learning gap.
 */

export type CourseSource = "manual" | "catalog" | "ai-mentor"
export type CourseStatus = "published" | "draft" | "needs-review" | "archived"
export type CourseDecision = "existing" | "adapted" | "new"
export type RecommendationStatus =
  | "needs-course-review"
  | "ready-to-assign"
  | "assigned"
  | "completed"
  | "dismissed"

export type TrainingCourse = {
  id: string
  title: string
  provider: string
  source: CourseSource
  status: CourseStatus
  decision?: CourseDecision
  competency: string
  audience: string
  durationMin: number
  estimatedCost: number
  assignedCount: number
  completedCount: number
  createdFromRecommendationId?: string
  aiReason?: string
}

export type AiRecommendation = {
  id: string
  employeeId: string
  employeeName: string
  managerId: string
  cycleName: string
  role: string
  currentLevel: string
  nextLevel: string
  competency: string
  gap: string
  courseId: string
  decision: CourseDecision
  status: RecommendationStatus
  justification: string
}

export type TrainingRequest = {
  id: string
  employeeId: string
  employeeName: string
  trainingName: string
  provider: string
  status: "pending" | "approved" | "rejected" | "draft"
  competency: string
  amount: number
  submittedAt: string
  linkedRecommendationId?: string
}

export type TrainingBudget = {
  id: string
  name: string
  owner: string
  allocated: number
  used: number
  committedByAiMentor: number
  pendingApproval: number
}

export type CompanyContext = {
  industry: string
  size: string
  keyTools: string[]
  culture: string
  autoAssignExisting: boolean
  reviewAdaptedCourses: boolean
  reviewNewCourses: boolean
}

export type CareerPathCoverage = {
  role: string
  department: string
  employees: number
  configured: boolean
  gapsDetected: number
}

export const recommendations: AiRecommendation[] = [
  {
    id: "rec-lin-mentoring",
    employeeId: "emp-005",
    employeeName: "Lin Chen",
    managerId: "emp-004",
    cycleName: "180º Review — March 2026",
    role: "Senior Frontend Engineer",
    currentLevel: "Mid",
    nextLevel: "Senior",
    competency: "Mentoring",
    gap: "Needs to guide other engineers before progressing to Senior level.",
    courseId: "course-mentoring-senior-engineers",
    decision: "adapted",
    status: "assigned",
    justification:
      "Your last review highlights strong frontend ownership, but also that you have not yet taken an active role mentoring other engineers. This course focuses on pairing, feedback and technical coaching in product teams.",
  },
  {
    id: "rec-diego-ownership",
    employeeId: "emp-006",
    employeeName: "Diego Hernández",
    managerId: "emp-004",
    cycleName: "180º Review — March 2026",
    role: "Backend Engineer",
    currentLevel: "Mid",
    nextLevel: "Senior",
    competency: "Ownership",
    gap: "Needs more end-to-end ownership of releases and blockers.",
    courseId: "course-ownership-delivery",
    decision: "existing",
    status: "assigned",
    justification:
      "Your review shows strong implementation speed, but your manager expects more end-to-end follow-through on dependencies, blockers and deployment readiness.",
  },
  {
    id: "rec-priya-strategy",
    employeeId: "emp-007",
    employeeName: "Priya Patel",
    managerId: "emp-008",
    cycleName: "180º Review — March 2026",
    role: "Product Designer",
    currentLevel: "Mid",
    nextLevel: "Senior",
    competency: "Strategy",
    gap: "Design work needs stronger connection to business outcomes.",
    courseId: "course-business-driven-design",
    decision: "new",
    status: "needs-course-review",
    justification:
      "Your design craft is strong, but stakeholders need clearer framing of expected business impact. This draft course teaches how to connect design decisions to retention, activation and customer outcomes.",
  },
  {
    id: "rec-chiara-data",
    employeeId: "emp-009",
    employeeName: "Chiara Romano",
    managerId: "emp-010",
    cycleName: "180º Review — March 2026",
    role: "Senior Product Manager",
    currentLevel: "Senior",
    nextLevel: "Lead",
    competency: "Data analysis",
    gap: "Needs stronger quantitative decision-making for pricing work.",
    courseId: "course-data-analysis-pm",
    decision: "adapted",
    status: "ready-to-assign",
    justification:
      "Your current goals include pricing strategy. This adapted course focuses on product analytics, retention cohorts and pricing signals in a B2B SaaS context.",
  },
]

export const trainingCourses: TrainingCourse[] = [
  {
    id: "course-ownership-delivery",
    title: "Ownership and end-to-end delivery",
    provider: "Factorial Academy",
    source: "catalog",
    status: "published",
    decision: "existing",
    competency: "Ownership",
    audience: "Product engineers",
    durationMin: 35,
    estimatedCost: 0,
    assignedCount: 18,
    completedCount: 12,
    createdFromRecommendationId: "rec-diego-ownership",
    aiReason: "Matched Diego's review gap without requiring content changes.",
  },
  {
    id: "course-mentoring-senior-engineers",
    title: "Technical mentoring for senior engineers",
    provider: "Adapted from Factorial Academy",
    source: "ai-mentor",
    status: "published",
    decision: "adapted",
    competency: "Mentoring",
    audience: "Engineering ICs",
    durationMin: 40,
    estimatedCost: 180,
    assignedCount: 7,
    completedCount: 2,
    createdFromRecommendationId: "rec-lin-mentoring",
    aiReason: "Adapted examples to engineering rituals: PR review, pairing and incident follow-up.",
  },
  {
    id: "course-business-driven-design",
    title: "Business-driven design for product designers",
    provider: "AI Mentor draft",
    source: "ai-mentor",
    status: "needs-review",
    decision: "new",
    competency: "Strategy",
    audience: "Product designers",
    durationMin: 45,
    estimatedCost: 450,
    assignedCount: 0,
    completedCount: 0,
    createdFromRecommendationId: "rec-priya-strategy",
    aiReason: "No existing course connects product design decisions to HR SaaS business outcomes.",
  },
  {
    id: "course-data-analysis-pm",
    title: "Data analysis for product managers",
    provider: "Adapted from Product School",
    source: "ai-mentor",
    status: "draft",
    decision: "adapted",
    competency: "Data analysis",
    audience: "Product managers",
    durationMin: 50,
    estimatedCost: 220,
    assignedCount: 0,
    completedCount: 0,
    createdFromRecommendationId: "rec-chiara-data",
    aiReason: "Adapted examples to Amplitude, retention and pricing signals used by Factorial teams.",
  },
  {
    id: "course-conflict-resolution-hr",
    title: "Negotiation and conflict resolution for HR",
    provider: "People Ops Library",
    source: "manual",
    status: "published",
    competency: "Negotiation",
    audience: "People Partners",
    durationMin: 30,
    estimatedCost: 0,
    assignedCount: 23,
    completedCount: 20,
  },
]

export const trainingRequests: TrainingRequest[] = [
  {
    id: "tr-001",
    employeeId: "emp-006",
    employeeName: "Diego Hernández",
    trainingName: "Ownership and end-to-end delivery",
    provider: "Factorial Academy",
    status: "approved",
    competency: "Ownership",
    amount: 0,
    submittedAt: "2026-04-22",
    linkedRecommendationId: "rec-diego-ownership",
  },
  {
    id: "tr-002",
    employeeId: "emp-007",
    employeeName: "Priya Patel",
    trainingName: "Business-driven design for product designers",
    provider: "AI Mentor draft",
    status: "pending",
    competency: "Strategy",
    amount: 450,
    submittedAt: "2026-04-22",
    linkedRecommendationId: "rec-priya-strategy",
  },
  {
    id: "tr-003",
    employeeId: "emp-009",
    employeeName: "Chiara Romano",
    trainingName: "Advanced Amplitude analytics",
    provider: "External provider",
    status: "pending",
    competency: "Data analysis",
    amount: 320,
    submittedAt: "2026-04-18",
    linkedRecommendationId: "rec-chiara-data",
  },
  {
    id: "tr-004",
    employeeId: "emp-012",
    employeeName: "Marcus Lindberg",
    trainingName: "Recruiting analytics workshop",
    provider: "Greenhouse Academy",
    status: "rejected",
    competency: "Communication",
    amount: 650,
    submittedAt: "2026-03-28",
  },
]

export const trainingBudgets: TrainingBudget[] = [
  {
    id: "budget-eng",
    name: "Engineering development budget",
    owner: "Grace Hopper",
    allocated: 12000,
    used: 7340,
    committedByAiMentor: 180,
    pendingApproval: 0,
  },
  {
    id: "budget-design",
    name: "Design training budget",
    owner: "Henrik Sørensen",
    allocated: 6500,
    used: 3900,
    committedByAiMentor: 0,
    pendingApproval: 450,
  },
  {
    id: "budget-product",
    name: "Product learning budget",
    owner: "Yusuf Adeyemi",
    allocated: 9000,
    used: 5100,
    committedByAiMentor: 0,
    pendingApproval: 220,
  },
]

export const companyContext: CompanyContext = {
  industry: "HR & Payroll SaaS",
  size: "501–1000 employees",
  keyTools: ["Factorial", "Slack", "Notion", "GitHub", "Amplitude", "Salesforce"],
  culture:
    "High ownership, outcome-driven, distributed-first. Training should support concrete role growth, not generic learning goals.",
  autoAssignExisting: true,
  reviewAdaptedCourses: true,
  reviewNewCourses: true,
}

export const careerPathCoverage: CareerPathCoverage[] = [
  {
    role: "Software Engineer",
    department: "Engineering",
    employees: 48,
    configured: true,
    gapsDetected: 17,
  },
  {
    role: "Product Designer",
    department: "Design",
    employees: 12,
    configured: true,
    gapsDetected: 4,
  },
  {
    role: "Product Manager",
    department: "Product",
    employees: 16,
    configured: true,
    gapsDetected: 6,
  },
  {
    role: "Sales Representative",
    department: "Sales",
    employees: 32,
    configured: false,
    gapsDetected: 0,
  },
]
