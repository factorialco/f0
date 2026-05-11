export type GoalStatus = "not-started" | "on-track" | "achieved" | "cancelled"
export type GoalScope = "team" | "all" | "mine"

export type GoalRecord = {
  id: string
  title: string
  assigneeId: string
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
