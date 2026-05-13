/**
 * Curated fixtures for f0compose prototypes. Use these in any prototype
 * inside `src/prototypes/` instead of inlining arrays.
 *
 * All IDs are stable and references between fixtures are consistent
 * (e.g., `payrollLines[*].employeeId` always points to a real `employees[*].id`).
 *
 * Volume v1:
 *   employees:           20
 *   teams:               8
 *   departments:         6
 *   payroll periods:     6 (4 paid, 1 in-review, 1 open)
 *   payroll lines:       100 (5 closed periods × 20 employees)
 *   time-off requests:   60+
 *   time-off policies:   5
 *   holidays:            8
 *   performance reviews: 15
 *   goals:               6
 *   onboarding templates: 3
 *   onboarding progress: 4
 *   chart datasets:      6
 *   documents:           30
 *   notifications:       15
 *   comment threads:     8
 */

export * from "./types"
export * from "./helpers"

export { employees, findEmployee } from "./employees"
export { departments, findDepartment } from "./departments"
export { teams, findTeam } from "./teams"
export { payrollPeriods, payrollLines } from "./payroll"
export {
  timeOffPolicies,
  timeOffRequests,
  timeOffBalances,
  holidays,
} from "./time-off"
export {
  performanceReviews,
  performanceCycles,
  cycleActivity,
  goals,
  type PerformanceCycle,
  type ReviewCycleStatus,
  type ReviewCycleType,
  type CycleActivity,
  type CycleActivityType,
} from "./performance"
export { onboardingTemplates, onboardingProgress } from "./onboarding"
export {
  chartHeadcount,
  chartPayrollGross,
  chartTimeOffByType,
  chartHeadcountByDept,
  chartReviewRatings,
  chartHiringFunnel,
  charts,
} from "./charts"
export { documents } from "./documents"
export { notifications } from "./notifications"
export { commentThreads } from "./comments"
export {
  jobs,
  candidates,
  type Job,
  type JobStatus,
  type JobType,
  type Candidate,
  type CandidateRating,
  type CandidateState,
  type CandidateStageCount,
} from "./recruitment"
export {
  expenses,
  expenseCountsByStatus,
  expenseGroups,
  groupCountsByStatus,
  type Expense,
  type ExpenseStatus,
  type ExpenseCategory,
  type ExpenseAlert,
  type ExpenseGroup,
} from "./expenses"
export {
  trainings,
  trainingCategories,
  trainingParticipants,
  findTraining,
  participantsForTraining,
  type Training,
  type TrainingStatus,
  type TrainingType,
  type TrainingCategory,
  type TrainingClass,
  type TrainingParticipant,
  type ParticipantStatus,
} from "./trainings"
export {
  trainingAxes,
  trainingSessions,
  trainingRequests,
  trainingBudgets,
  surveyTemplates,
  surveyAnswers,
  contentModules,
  insightsAggregates,
  fundaeSettings,
  sessionAttendances,
  certificates,
  trainingFiles,
  sessionsForClass,
  sessionsForTraining,
  attendancesForSession,
  certificatesForTraining,
  certificatesForEmployee,
  filesForTraining,
  contentModulesForTraining,
  answersForTraining,
  requestsForEmployee,
  type TrainingAxis,
  type TrainingSession,
  type TrainingSessionMode,
  type TrainingSessionStatus,
  type TrainingRequest,
  type TrainingRequestStatus,
  type TrainingBudget,
  type BudgetStatus,
  type SurveyTemplate,
  type SurveyAnswer,
  type ContentModule,
  type ContentBlock,
  type ContentBlockType,
  type FundaeSettings,
  type SessionAttendance,
  type AttendanceStatus,
  type Certificate,
  type TrainingFile,
  competencies,
  trainingProcesses,
  trainingBudgetMovements,
  movementsForBudget,
  type Competency,
  type TrainingProcess,
  type TrainingBudgetMovement,
  type TrainingGroupStatus,
  type PaymentStatus,
} from "./trainings-extra"
