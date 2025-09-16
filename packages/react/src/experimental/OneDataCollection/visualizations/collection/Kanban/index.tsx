//
import type { CardAvatarVariant } from "@/components/F0Card/components/CardAvatar"
import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import type { Variant } from "@/components/tags/F0TagStatus"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  CollectionProps,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"
import { useData } from "../../../useData"

export type KanbanLaneDefinition = {
  id: string
  title: string
  variant?: Variant
}

export type KanbanVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  lanes: ReadonlyArray<KanbanLaneDefinition>
  title?: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => CardAvatarVariant
  metadata?: (
    record: Record
  ) => ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  onMove?: (
    fromLaneId: string,
    toLaneId: string,
    sourceId: string,
    toIndex: number | null
  ) => Promise<void>
}

export type KanbanCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>

export const KanbanCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  lanes,
  title,
  description,
  avatar,
  metadata: optionsMetadata,
  onMove,
  source,
  onSelectItems,
  onLoadError,
}: KanbanCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const { lanesData, fetchMoreForLane: fetchMoreForLaneFromUseData } = useData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

  if (!lanesData) {
    throw new Error("Lanes has not been configured on data source")
  }

  // Create global data by combining all lanes data for useSelectable
  const globalData = useMemo(() => {
    if (!lanesData) return { type: "flat" as const, records: [] }

    const allRecords = Object.values(lanesData).flatMap(
      (laneData) => laneData.data.records
    )
    return { type: "flat" as const, records: allRecords }
  }, [lanesData])
  /**
   * Item selection - global across all lanes
   */
  const { selectedItems, handleSelectItemChange } = useSelectable(
    globalData,
    null, // PaginationInfo is used only for grouped data.
    source,
    onSelectItems,
    source.defaultSelectedItems
  )

  const [instanceId] = useState(() => Symbol("kanban-visualization"))
  // Function to fetch more data for a specific lane
  const fetchMoreForLane = useCallback(
    async (laneId: string) => {
      const laneData = lanesData?.[laneId]
      if (!laneData?.paginationInfo) return

      const paginationInfo = laneData.paginationInfo
      if (!paginationInfo.hasMore) return

      // Call the fetchMoreForLane function from useData
      if (fetchMoreForLaneFromUseData) {
        await fetchMoreForLaneFromUseData(laneId)
      }
    },
    [lanesData, fetchMoreForLaneFromUseData]
  )

  const idProvider = source.idProvider

  const laneItems = useMemo(() => {
    return lanes.map((lane) => {
      // Use lane-specific data if available, otherwise fallback to global data
      const laneData = lanesData?.[lane.id]
      const items = laneData ? laneData.data.records : []
      return { ...lane, items }
    })
  }, [lanes, lanesData])

  // Internal per-lane paging state (in-memory slice)
  const DEFAULT_STEP = 20
  type LanePageSizes = { [laneId: string]: number }
  const [lanePageSize, setLanePageSize] = useState<LanePageSizes>({})
  // Ensure page sizes exist for current lanes
  useEffect(() => {
    setLanePageSize((prev: LanePageSizes) => {
      const next: LanePageSizes = { ...prev }
      laneItems.forEach((l) => {
        if (!(l.id in next)) next[l.id] = DEFAULT_STEP
      })
      // Clean up removed lanes
      Object.keys(next).forEach((k) => {
        if (!laneItems.find((l) => l.id === k)) delete next[k]
      })
      return next
    })
  }, [laneItems])

  const toCardMetadata = (
    items: ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  ): CardMetadata[] =>
    items.map(({ icon, property }) =>
      property.type === "file" ? { property } : { icon, property }
    )

  const kanbanProps: KanbanProps<Record> = {
    lanes: laneItems.map((l) => {
      const pageSize = lanePageSize[l.id] ?? DEFAULT_STEP
      const laneData = lanesData?.[l.id]
      // Use the real total from pagination info, fallback to loaded items length
      const totalItems = laneData?.paginationInfo?.total ?? l.items.length
      // Show all loaded items, not just up to pageSize
      const visible = l.items
      const hasMore = pageSize < totalItems
      return {
        id: l.id,
        title: l.title,
        items: visible,
        variant: l.variant,
        total: totalItems,
        hasMore: laneData?.paginationInfo
          ? laneData.paginationInfo.hasMore
          : hasMore,
        loading: laneData?.isLoading || false,
        loadingMore: laneData?.isLoadingMore || false,
        fetchMore: laneData?.paginationInfo?.hasMore
          ? () => fetchMoreForLane(l.id)
          : hasMore
            ? () =>
                setLanePageSize((prev: LanePageSizes) => ({
                  ...prev,
                  [l.id]: Math.min(
                    (prev[l.id] ?? DEFAULT_STEP) + DEFAULT_STEP,
                    totalItems
                  ),
                }))
            : undefined,
      }
    }),
    getKey: (item, index) =>
      idProvider ? String(idProvider(item, index)) : index,
    renderCard: (item, index, total, laneId) => {
      const dragId = String(idProvider ? idProvider(item, index) : index)
      const itemId = source.selectable ? source.selectable(item) : item.id
      const isSelected =
        (typeof itemId === "string" || typeof itemId === "number") &&
        selectedItems.has(itemId)

      return (
        <KanbanCard
          key={dragId}
          drag={{ id: dragId, type: "list-card", data: { laneId } }}
          id={String(item.id)}
          index={index}
          total={total}
          laneId={laneId}
          showIndicator={allowReorder}
          title={title ? title(item) : String(index)}
          description={description ? description(item) : undefined}
          avatar={avatar ? avatar(item) : undefined}
          draggable={onMove !== undefined}
          metadata={
            optionsMetadata ? toCardMetadata(optionsMetadata(item)) : undefined
          }
          compact
          selectable={source.selectable !== undefined}
          selected={isSelected}
          onSelect={(selected) => handleSelectItemChange(item, selected)}
        />
      )
    },
  }

  // Fine-grained reorder only when no sort order is applied
  const allowReorder = source.currentSortings === null

  // Build index maps per lane when needed
  const laneIndexMaps = useMemo(() => {
    const maps = new Map<string, Map<string, number>>()
    laneItems.forEach((lane) => {
      const map = new Map<string, number>()
      lane.items.forEach((item, index) => {
        const itemId = String(idProvider ? idProvider(item, index) : index)
        map.set(itemId, index)
      })
      maps.set(lane.id, map)
    })
    return maps
  }, [laneItems, idProvider])

  kanbanProps.dnd = {
    instanceId: instanceId,
    getIndexById: (laneId: string, id: string) => {
      const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
      return allowReorder ? idx : -1
    },
    onMove: onMove
      ? async (
          fromLaneId: string,
          toLaneId: string,
          sourceId: string,
          toIndex: number | null
        ) => {
          await onMove(fromLaneId, toLaneId, sourceId, toIndex)
        }
      : undefined,
  }

  if (!onMove) {
    return <Kanban<Record> {...kanbanProps} />
  }

  return (
    <DndProvider driver={createAtlaskitDriver(instanceId)}>
      <Kanban<Record> {...kanbanProps} />
    </DndProvider>
  )
}
