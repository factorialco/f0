import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { Skeleton } from "@/ui/skeleton"

import type {
  DashboardItemFiltersConfig,
  DashboardLocationConfig,
  DashboardLocationItem,
  F0AnalyticsDashboardAskAiTarget,
  F0AnalyticsDashboardAskAiTargetWithQuote,
} from "../../types"

import { useDashboardItemData } from "../../hooks/useDashboardItemData"
import { DashboardItem } from "../DashboardItem/DashboardItem"
import { LocationVisualization } from "./LocationVisualization"

interface LocationItemProps<Filters extends FiltersDefinition> {
  item: DashboardLocationItem<Filters>
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

function LocationItemSkeleton({ config }: { config: DashboardLocationConfig }) {
  const summaryVisible = config.sections?.summary !== false
  const detailsVisible = config.sections?.locationDetails !== false
  const timelineVisible = config.sections?.timeline !== false

  return (
    <div className="relative h-full min-h-[560px] overflow-hidden bg-f1-background-secondary p-4">
      {summaryVisible ? (
        <Skeleton
          data-location-summary-skeleton=""
          className="h-[60px] w-[400px] max-w-[calc(50%_-_4px)] rounded-lg"
        />
      ) : null}
      {detailsVisible ? (
        <Skeleton
          data-location-details-skeleton=""
          className="absolute right-4 top-4 h-[60px] w-[320px] max-w-[calc(50%_-_4px)] rounded-xl"
        />
      ) : null}
      {timelineVisible ? (
        <Skeleton
          data-location-timeline-skeleton=""
          className="absolute bottom-4 left-4 right-4 h-[126px] rounded-xl"
        />
      ) : null}
    </div>
  )
}

export function LocationItem<Filters extends FiltersDefinition>({
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
}: LocationItemProps<Filters>) {
  const itemFiltersKey = JSON.stringify(itemFilters?.value ?? {})
  const { data, isLoading, error, retry } = useDashboardItemData(
    item.fetchData,
    filters,
    item.useDashboardFilters !== false,
    itemFiltersKey
  )

  return (
    <DashboardItem
      title={item.title}
      description={item.description}
      info={item.info}
      explanation={item.explanation}
      isLoading={isLoading}
      error={error}
      onRetry={retry}
      skeleton={<LocationItemSkeleton config={item.location} />}
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
      {data ? (
        <LocationVisualization
          data={data}
          config={item.location}
          selectedLocationId={item.selectedLocationId}
          defaultSelectedLocationId={item.defaultSelectedLocationId}
          onLocationSelect={item.onLocationSelect}
        />
      ) : null}
    </DashboardItem>
  )
}
