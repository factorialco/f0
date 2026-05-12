import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import type { CompanyId } from "../shared/companies"
import type { GoalRecord } from "../shared/types"
import { goalsColumns } from "./goalsColumns"
import { useGoalsSource } from "./useGoalsSource"

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
      visualizations={[{ type: "table", options: { columns: goalsColumns } }]}
    />
  )
}
