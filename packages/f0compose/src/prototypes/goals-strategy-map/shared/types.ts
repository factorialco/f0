export type GoalLevel = "company" | "team" | "individual"

export type GoalStatus = "on-track" | "not-started" | "at-risk" | "in-progress" | "overachieved"

export type StrategyGoal = {
  id: string
  title: string
  description: string
  level: GoalLevel
  status: GoalStatus
  progress: number
  /** Employee id of the goal owner. */
  ownerId: string
  /** Ids of employees contributing to this goal (beyond the owner). */
  contributorIds: string[]
  /** Parent goal id — null for top-level company goals. */
  parentId: string | null
  dueDate: string
  /** Display name for the assignation: company name, team name, or person name. */
  assignation: string
  /** Starting target value (e.g. revenue in thousands). */
  measureStart: number
  /** Achievable target value. */
  measureTarget: number
  /** Current value toward the target. */
  measureCurrent: number
}

/** A goal with its resolved children for tree rendering. */
export type GoalNode = StrategyGoal & { children: GoalNode[] }
