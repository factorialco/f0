/**
 * Shared fixture types for f0compose prototypes. Minimal, tailored for UI
 * rendering — NOT the production types (which live in product packages).
 */

export type EmployeeStatus = "active" | "on-leave" | "offboarding"

export type Employee = {
  id: string
  fullName: string
  preferredName?: string
  email: string
  avatarUrl: string
  role: string
  departmentId: string
  teamId: string
  managerId: string | null
  hireDate: string
  status: EmployeeStatus
  location: string
}

export type Department = {
  id: string
  name: string
  headId: string
  headcount: number
  color: "accent" | "positive" | "warning" | "info" | "neutral" | "critical"
}

export type Team = {
  id: string
  name: string
  description: string
  departmentId: string
  leadId: string
  memberIds: string[]
  color: "accent" | "positive" | "warning" | "info" | "neutral" | "critical"
}

export type PayrollPeriodStatus = "open" | "in-review" | "closed" | "paid"

export type PayrollPeriod = {
  id: string
  label: string
  startDate: string
  endDate: string
  payDate: string
  status: PayrollPeriodStatus
  totalGross: number
  totalNet: number
  employeeCount: number
}

export type PayrollLine = {
  id: string
  periodId: string
  employeeId: string
  grossSalary: number
  deductions: number
  netSalary: number
  bonus: number
  status: "pending" | "approved" | "paid"
}

export type TimeOffType =
  | "vacation"
  | "sick"
  | "parental"
  | "personal"
  | "remote"
export type TimeOffRequestStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "cancelled"

export type TimeOffRequest = {
  id: string
  employeeId: string
  type: TimeOffType
  startDate: string
  endDate: string
  workingDays: number
  status: TimeOffRequestStatus
  reason?: string
  submittedAt: string
}

export type TimeOffPolicy = {
  id: string
  name: string
  type: TimeOffType
  annualDays: number
  carryoverDays: number
  description: string
}

export type TimeOffBalance = {
  employeeId: string
  policyId: string
  total: number
  taken: number
  pending: number
  remaining: number
}

export type Holiday = {
  id: string
  name: string
  date: string
  country: string
}

export type PerformanceReview = {
  id: string
  employeeId: string
  reviewerId: string
  cycle: string
  status: "draft" | "submitted" | "calibrating" | "completed"
  rating?: "exceeds" | "meets" | "below"
  goalsCompleted: number
  goalsTotal: number
  submittedAt?: string
}

export type Goal = {
  id: string
  employeeId: string
  title: string
  description: string
  progress: number
  dueDate: string
  status: "on-track" | "at-risk" | "completed" | "abandoned"
}

export type OnboardingStep = {
  id: string
  title: string
  ownerRole: "hr" | "manager" | "buddy" | "employee" | "it"
  daysFromStart: number
  category: "paperwork" | "equipment" | "intro" | "training" | "access"
}

export type OnboardingTemplate = {
  id: string
  name: string
  role: string
  steps: OnboardingStep[]
}

export type OnboardingProgress = {
  id: string
  employeeId: string
  templateId: string
  startDate: string
  completedStepIds: string[]
  pendingStepIds: string[]
  blockedStepIds: string[]
}

export type ChartSeries = {
  name: string
  values: number[]
}

export type ChartDataset = {
  id: string
  title: string
  labels: string[]
  series: ChartSeries[]
  unit?: string
}

export type FactorialDocument = {
  id: string
  name: string
  type: "pdf" | "docx" | "xlsx" | "image" | "other"
  sizeBytes: number
  ownerId: string
  uploadedAt: string
  sharedWith: string[]
  category: "contract" | "payslip" | "policy" | "personal" | "company"
}

export type Notification = {
  id: string
  severity: "info" | "warning" | "critical" | "positive"
  message: string
  actionLabel?: string
  actionHref?: string
  timestamp: string
  read: boolean
}

export type Comment = {
  id: string
  authorId: string
  body: string
  createdAt: string
  mentionsIds?: string[]
}

export type CommentThread = {
  id: string
  topic: string
  context: string
  comments: Comment[]
}
