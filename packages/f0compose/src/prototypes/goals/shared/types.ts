export type GoalStatus =
  | "not-started"
  | "on-track"
  | "off-track"
  | "achieved"
  | "cancelled"
export type GoalScope = "team" | "all" | "mine"

/**
 * Who a goal is assigned to. Distinct from the owner (a single person
 * accountable for tracking it). An assignee can be the whole company,
 * a team, an ad-hoc group of employees, or a single individual.
 */
export type GoalAssignee =
  | { type: "company"; name: string }
  | { type: "department"; departmentId: string }
  | { type: "team"; teamId: string }
  | { type: "area"; name: string }
  | { type: "group"; employeeIds: string[] }
  | { type: "individual"; employeeId: string }

export type GoalRecord = {
  id: string
  title: string
  /** Person accountable for keeping the goal up to date. */
  ownerId: string
  /** Entity the goal is assigned to (company, team, group or individual). */
  assignee: GoalAssignee
  status: GoalStatus
  measure: string
  progress: number
  startDate: string
  dueDate: string
  parentId: string | null
  childrenIds: string[]
  /** Which preset bucket this goal belongs to */
  scope: GoalScope
}
