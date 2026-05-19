import type { CompanyId } from "../shared/companies"
import { getGoalChildren, getGoalsByScope } from "../shared/fixtures"
import type { GoalRecord, GoalStatus } from "../shared/types"

const CURRENT_USER = "emp-001"

export type TreeNode = {
  goal: GoalRecord
  children: TreeNode[]
}

export type GoalsTreeFilters = {
  scope: "all" | "mine" | "team"
  search: string
  statuses: GoalStatus[]
  dueDate?: string
}

/**
 * Recursively build a tree starting from a root goal.
 * Children are pulled from the global fixtures so cross-company links are
 * not an issue (each company has its own ids).
 */
function buildSubtree(goal: GoalRecord, extraGoals: GoalRecord[]): TreeNode {
  const childRecords = [
    ...getGoalChildren(goal.id),
    ...extraGoals.filter((g) => g.parentId === goal.id),
  ]
  return {
    goal,
    children: childRecords.map((c) => buildSubtree(c, extraGoals)),
  }
}

/**
 * Determine the list of root goals to show given the active scope, then
 * apply text/status/dueDate filters across the whole tree.
 *
 * Filtering rule: if any descendant matches the filter the entire branch
 * is kept (so context isn't lost). The root must additionally satisfy
 * the scope predicate; descendants are always included regardless of
 * their own scope so the visual tree stays connected.
 */
export function useGoalsTreeData(
  companyId: CompanyId,
  extraGoals: GoalRecord[],
  filters: GoalsTreeFilters
): TreeNode[] {
  const { scope, search, statuses, dueDate } = filters
  const term = search.trim().toLowerCase()

  let roots: GoalRecord[]
  if (scope === "mine") {
    roots = [
      ...getGoalsByScope("all", companyId),
      ...extraGoals.filter((g) => g.parentId === null),
    ].filter((g) => g.ownerId === CURRENT_USER)
  } else if (scope === "all") {
    roots = [
      ...getGoalsByScope("all", companyId),
      ...extraGoals.filter((g) => g.parentId === null),
    ]
  } else {
    roots = [
      ...getGoalsByScope(scope, companyId),
      ...extraGoals.filter((g) => g.parentId === null && g.scope === scope),
    ]
  }

  const trees = roots.map((r) => buildSubtree(r, extraGoals))

  function matches(node: TreeNode): boolean {
    const g = node.goal
    if (term && !g.title.toLowerCase().includes(term)) {
      // allow if any descendant matches
      if (!node.children.some(matches)) return false
    }
    if (statuses.length > 0 && !statuses.includes(g.status)) {
      if (!node.children.some(matches)) return false
    }
    if (dueDate && g.dueDate > dueDate) {
      if (!node.children.some(matches)) return false
    }
    return true
  }

  // Prune children that don't match either; keep the branch if any
  // descendant survives.
  function prune(node: TreeNode): TreeNode | null {
    const survivingChildren = node.children
      .map(prune)
      .filter((c): c is TreeNode => c !== null)
    const g = node.goal
    const selfMatches =
      (term === "" || g.title.toLowerCase().includes(term)) &&
      (statuses.length === 0 || statuses.includes(g.status)) &&
      (!dueDate || g.dueDate <= dueDate)
    if (!selfMatches && survivingChildren.length === 0) return null
    return { goal: g, children: survivingChildren }
  }

  return trees
    .filter(matches)
    .map(prune)
    .filter((n): n is TreeNode => n !== null)
}

/** Total count of goals (across all branches) in the tree. Used in the header. */
export function countTreeNodes(trees: TreeNode[]): number {
  let n = 0
  const walk = (t: TreeNode) => {
    n += 1
    t.children.forEach(walk)
  }
  trees.forEach(walk)
  return n
}
