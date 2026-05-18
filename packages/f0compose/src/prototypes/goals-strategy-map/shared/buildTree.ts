import type { GoalNode, StrategyGoal } from "./types"
import { strategyGoals } from "./strategyGoals"

export function buildTree(goals: StrategyGoal[]): GoalNode[] {
  const map = new Map<string, GoalNode>()
  const roots: GoalNode[] = []

  for (const g of goals) {
    map.set(g.id, { ...g, children: [] })
  }
  for (const g of goals) {
    const node = map.get(g.id)!
    if (g.parentId) {
      const parent = map.get(g.parentId)
      if (parent) parent.children.push(node)
      else roots.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}

export const goalTree: GoalNode[] = buildTree(strategyGoals)
