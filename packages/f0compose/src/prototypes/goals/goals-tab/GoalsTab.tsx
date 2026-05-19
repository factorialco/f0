import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import type { CompanyId } from "../shared/companies"
import type { GoalRecord } from "../shared/types"
import { goalsColumns } from "./goalsColumns"
import { useGoalsSource } from "./useGoalsSource"
import { type GoalsTreeFilters } from "./useGoalsTreeData"

type Scope = GoalsTreeFilters["scope"]

export function GoalsTab({
  onCreateGoal,
  onSelectGoal,
  onEditGoal,
  extraGoals,
  companyId,
}: {
  onCreateGoal: () => void
  onSelectGoal: (id: string) => void
  onEditGoal: (id: string) => void
  extraGoals: GoalRecord[]
  companyId: CompanyId
  viewMode: "table" | "tree"
  onViewModeChange: (m: "table" | "tree") => void
  treeScope: Scope
  onTreeScopeChange: (s: Scope) => void
}) {
  const source = useGoalsSource(
    onCreateGoal,
    onSelectGoal,
    onEditGoal,
    extraGoals,
    companyId
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        { type: "table", options: { columns: goalsColumns, frozenColumns: 1, allowColumnHiding: true, allowColumnReordering: true } },
      ]}
    />
  )
}
