import {
  F0Box,
  F0Button,
  F0ButtonToggle,
  F0Heading,
  Chip,
} from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Add, Graph, Table } from "@factorialco/f0-react/icons/app"

import type { CompanyId } from "../shared/companies"
import type { GoalRecord } from "../shared/types"
import { goalsColumns } from "./goalsColumns"
import { GoalsTreeView } from "./GoalsTreeView"
import { useGoalsSource } from "./useGoalsSource"
import {
  countTreeNodes,
  useGoalsTreeData,
  type GoalsTreeFilters,
} from "./useGoalsTreeData"

type ViewMode = "table" | "tree"
type Scope = GoalsTreeFilters["scope"]

const SCOPES: { value: Scope; label: string }[] = [
  { value: "team", label: "Team goals" },
  { value: "all", label: "All goals" },
  { value: "mine", label: "My goals" },
  { value: "created-by-me", label: "Created by me" },
  { value: "needs-attention", label: "Needs attention" },
]

export function GoalsTab({
  onCreateGoal,
  onSelectGoal,
  onEditGoal,
  extraGoals,
  companyId,
  viewMode,
  onViewModeChange,
  treeScope,
  onTreeScopeChange,
}: {
  onCreateGoal: () => void
  onSelectGoal: (id: string) => void
  onEditGoal: (id: string) => void
  extraGoals: GoalRecord[]
  companyId: CompanyId
  viewMode: ViewMode
  onViewModeChange: (m: ViewMode) => void
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

  const trees = useGoalsTreeData(companyId, extraGoals, {
    scope: treeScope,
    search: "",
    statuses: [],
  })
  const treeCount = countTreeNodes(trees)

  return (
    <div className="flex flex-col gap-4">
      {/* View toggle row — sits above whichever visualization is active */}
      <div className="flex items-center justify-end gap-1">
        <F0ButtonToggle
          size="sm"
          icon={Table}
          label="Table view"
          selected={viewMode === "table"}
          onSelectedChange={(s) => s && onViewModeChange("table")}
        />
        <F0ButtonToggle
          size="sm"
          icon={Graph}
          label="Tree view"
          selected={viewMode === "tree"}
          onSelectedChange={(s) => s && onViewModeChange("tree")}
        />
      </div>

      {viewMode === "table" && (
        <OneDataCollection
          source={source}
          visualizations={[
            { type: "table", options: { columns: goalsColumns } },
          ]}
        />
      )}

      {viewMode === "tree" && (
        <div className="flex flex-col gap-4">
          {/* Mini-toolbar: count + preset chips + new goal */}
          <F0Box display="flex" alignItems="center" gap="sm">
            <F0Heading content={`${treeCount} goals`} variant="heading" />
          </F0Box>

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {SCOPES.map((s) => (
                <Chip
                  key={s.value}
                  label={s.label}
                  variant={s.value === treeScope ? "selected" : "default"}
                  onClick={() => onTreeScopeChange(s.value)}
                />
              ))}
            </div>
            <F0Button
              variant="default"
              label="New goal"
              icon={Add}
              onClick={onCreateGoal}
            />
          </div>

          <GoalsTreeView trees={trees} onSelectGoal={onSelectGoal} />
        </div>
      )}
    </div>
  )
}
