import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import type {
  DashboardCustomItem as DashboardCustomItemType,
  DashboardItemFiltersConfig,
  F0AnalyticsDashboardAskAiTarget,
  F0AnalyticsDashboardAskAiTargetWithQuote,
} from "../../types"

import { DashboardItem } from "../DashboardItem/DashboardItem"

interface CustomItemProps<Filters extends FiltersDefinition> {
  item: DashboardCustomItemType<Filters>
  filters: FiltersState<Filters>
  actions?: DropdownItem[]
  itemFilters?: DashboardItemFiltersConfig
  editMode?: boolean
  handleDelete?: (itemId: string) => void
  onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void
  onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void
  isFullscreen?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
}

/**
 * Keeps domain-specific content inside the same shell and grid contracts as
 * every built-in analytics item.
 */
export function CustomItem<Filters extends FiltersDefinition>({
  item,
  filters,
  actions,
  itemFilters,
  editMode,
  handleDelete,
  onAskAi,
  onAskAiTarget,
  isFullscreen,
  onFullscreenChange,
}: CustomItemProps<Filters>) {
  const effectiveFilters =
    item.useDashboardFilters === false ? ({} as FiltersState<Filters>) : filters

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      info={item.info}
      explanation={item.explanation}
      isLoading={false}
      actions={actions}
      itemFilters={itemFilters}
      editMode={editMode}
      handleDelete={handleDelete}
      onAskAi={onAskAi}
      onAskAiTarget={onAskAiTarget}
      itemId={item.id}
      isFullscreen={isFullscreen}
      onFullscreenChange={onFullscreenChange}
    >
      <div className="h-full min-h-0 overflow-hidden rounded-b-lg">
        {item.renderContent(effectiveFilters)}
      </div>
    </DashboardItem>
  )
}
