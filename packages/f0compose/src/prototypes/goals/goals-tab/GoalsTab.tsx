import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import type { GoalRecord } from "../shared/types"
import { goalsColumns } from "./goalsColumns"
import { useGoalsSource } from "./useGoalsSource"

/**
 * Goals tab body: hierarchical tree table showing goals with nested sub-goals.
 * Supports expand/collapse, search, filter presets, sorting, pagination,
 * and bulk actions. "+ New goal" navigates to the create-goal sub-screen.
 * Row "View details" / "Update goal" navigate to the detail / edit screens.
 */
export function GoalsTab({
  onCreateGoal,
  onSelectGoal,
  onEditGoal,
  extraGoals,
}: {
  onCreateGoal: () => void
  onSelectGoal: (id: string) => void
  onEditGoal: (id: string) => void
  extraGoals: GoalRecord[]
}) {
  const source = useGoalsSource(
    onCreateGoal,
    onSelectGoal,
    onEditGoal,
    extraGoals
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "table", options: { columns: goalsColumns } }]}
    />
  )
}
