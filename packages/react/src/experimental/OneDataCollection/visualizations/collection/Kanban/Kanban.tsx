import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useDataCollectionLanesData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData"
import { useSelectableLanes } from "@/experimental/OneDataCollection/hooks/useSelectableLanes"
import {
  InfiniteScrollPaginatedResponse,
  PaginationInfo,
  type RecordType,
} from "@/hooks/datasource"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { useIsDev } from "@/lib/providers/user-platafform"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useEffect, useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"
import { KanbanCollectionProps } from "./types"

export const KanbanCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
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
  onLoadData,
}: KanbanCollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const { lanesProvider, lanesHooks } = useDataCollectionLanesData<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

  const isDev = useIsDev()

  if (source.currentGrouping && isDev) {
    throw new Error("Grouping is not supported in Kanban yet")
  }

  const [instanceId] = useState(() => Symbol("kanban-visualization"))

  const idProvider = source.idProvider

  const lanesSignature = useMemo(() => {
    return JSON.stringify(
      Object.values(lanesHooks).map((laneHook) => laneHook.data)
    )
  }, [lanesHooks])

  const laneItems = useMemo(() => {
    return lanes.map((lane) => ({
      ...lane,
      items: lanesHooks[lane.id]?.data?.records || [],
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lanesSignature])

  const toCardMetadata = (
    items: ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  ): CardMetadata[] =>
    items.map(({ icon, property }) =>
      property.type === "file" ? { property } : { icon, property }
    )

  const isInfiniteScrollPaginationInfo = (
    paginationInfo: PaginationInfo | undefined | null
  ): paginationInfo is InfiniteScrollPaginatedResponse<unknown> => {
    return Boolean(paginationInfo && paginationInfo.type === "infinite-scroll")
  }

  const getStableId = (item: R, index?: number) => {
    const explicitId = (item as unknown as { id?: string | number })?.id
    if (explicitId !== undefined && explicitId !== null)
      return String(explicitId)
    if (idProvider) return String(idProvider(item, index ?? 0))
    return String(index ?? 0)
  }

  const optimisticMoveIntoData = async (
    fromLaneId: string,
    toLaneId: string,
    sourceRecord: R,
    destiny: { record: R; position: "above" | "below" } | null
  ) => {
    if (fromLaneId === toLaneId) {
      const laneHook = lanesHooks[fromLaneId]
      if (!laneHook) return
      const srcKey = getStableId(sourceRecord)
      laneHook.updateRecords((prev) => {
        const items = [...prev]
        const fromIdx = items.findIndex(
          (item, index) => getStableId(item, index) === srcKey
        )
        if (fromIdx === -1) return prev
        const [moved] = items.splice(fromIdx, 1)
        let insertIndex = 0
        if (destiny && destiny.record) {
          const destKey = getStableId(destiny.record)
          const targetIdx = items.findIndex(
            (item, index) => getStableId(item, index) === destKey
          )
          if (targetIdx !== -1) {
            insertIndex = targetIdx + (destiny.position === "below" ? 1 : 0)
          }
        }
        const adjustedIndex =
          fromIdx < insertIndex ? insertIndex - 1 : insertIndex
        if (fromIdx === adjustedIndex) return prev
        const bounded = Math.max(0, Math.min(adjustedIndex, items.length))
        items.splice(bounded, 0, moved)
        return items
      })
      return
    }

    const fromHook = lanesHooks[fromLaneId]
    const toHook = lanesHooks[toLaneId]
    if (!fromHook || !toHook) return
    const srcKey = getStableId(sourceRecord)
    fromHook.updateRecords((prev) =>
      prev.filter((item, index) => getStableId(item, index) !== srcKey)
    )
    toHook.updateRecords((prev) => {
      const items = [...prev]
      let insertIndex = 0
      if (destiny && destiny.record) {
        const destKey = getStableId(destiny.record)
        const targetIdx = items.findIndex(
          (item, index) => getStableId(item, index) === destKey
        )
        if (targetIdx !== -1)
          insertIndex = targetIdx + (destiny.position === "below" ? 1 : 0)
      }
      const bounded = Math.max(0, Math.min(insertIndex, items.length))
      items.splice(bounded, 0, sourceRecord)
      return items
    })
  }

  const kanbanProps: KanbanProps<R> = {
    lanes: laneItems.map((l) => {
      const laneData = lanesHooks[l.id]
      const totalItems = laneData?.paginationInfo?.total

      const hasMore =
        isInfiniteScrollPaginationInfo(laneData?.paginationInfo) &&
        laneData?.paginationInfo?.hasMore
      return {
        id: l.id,
        title: l.title,
        items: l.items,
        variant: l.variant,
        total: totalItems,
        hasMore: hasMore,
        loading: laneData?.isLoading || false,
        loadingMore: laneData?.isLoadingMore || false,
        fetchMore: hasMore ? () => laneData.loadMore() : undefined,
      }
    }),
    loading: Object.values(lanesHooks).some(
      (laneHook) => laneHook.isInitialLoading
    ),
    getKey: (item, index) => getStableId(item, index),
    renderCard: (item, index, total, laneId) => {
      const dragId = getStableId(item, index)
      const itemId = source.selectable
        ? source.selectable(item)
        : (item as unknown as { id?: string | number })?.id

      // Gets the lane useSelectable hook
      const useSelectable =
        lanesUseSelectable && laneId
          ? lanesUseSelectable.get(laneId)
          : undefined

      const isSelected =
        (typeof itemId === "string" || typeof itemId === "number") &&
        useSelectable &&
        useSelectable?.selectedItems.has(itemId)

      const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
      const itemOnClick = source.itemOnClick
        ? source.itemOnClick(item)
        : undefined

      return (
        <KanbanCard<R>
          key={dragId}
          drag={{ id: dragId, type: "list-card", data: { ...item, laneId } }}
          id={dragId}
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
          forceVerticalMetadata
          selectable={source.selectable !== undefined}
          selected={isSelected}
          data-testid={`kanban-card-${String(item.id)}`}
          onSelect={(selected) => {
            if (useSelectable) {
              useSelectable.handleSelectItemChange(item, selected)
            }
          }}
          onClick={itemOnClick}
          link={itemHref}
        />
      )
    },
  }

  // Report aggregated totals/loading so header total updates
  const totalItemsAggregated = useMemo(() => {
    const hooks = Object.values(lanesHooks)
    if (hooks.length === 0) return undefined
    // Sum totals from lanes that expose paginationInfo.total; fallback to records length
    return hooks.reduce((acc, lane) => {
      const laneTotal = lane.paginationInfo?.total ?? lane.data.records.length
      return acc + (typeof laneTotal === "number" ? laneTotal : 0)
    }, 0)
  }, [lanesHooks])

  const isInitialLoadingAggregated = useMemo(() => {
    const hooks = Object.values(lanesHooks)
    if (hooks.length === 0) return true
    // Consider initial loading if any lane is still in initial loading
    return hooks.some((lane) => lane.isInitialLoading)
  }, [lanesHooks])

  useEffect(() => {
    onLoadData({
      totalItems: totalItemsAggregated,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading: isInitialLoadingAggregated,
      data: Object.values(lanesHooks).flatMap((l) => l.data.records),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- follow Table/List behavior: rerun when totals or loading change
  }, [totalItemsAggregated, isInitialLoadingAggregated])

  // Fine-grained reorder only when no sort order is applied
  const allowReorder = source.currentSortings === null

  // Build index maps per lane when needed
  const laneIndexMaps = useMemo(() => {
    const maps = new Map<string, Map<string, number>>()
    laneItems.forEach((lane) => {
      const map = new Map<string, number>()
      lane.items.forEach((item, index) => {
        const rawId = idProvider
          ? idProvider(item as R, index)
          : ((item as unknown as { id?: string | number })?.id ?? index)
        const itemId = String(rawId)
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
    onMove: async (fromLaneId, toLaneId, sourceRecord, destiny) => {
      // Optimistic into useData
      await optimisticMoveIntoData(fromLaneId, toLaneId, sourceRecord, destiny)
      // Delegate to external onMove, then replace if backend returned updated record
      if (onMove) {
        const result = await onMove(fromLaneId, toLaneId, sourceRecord, destiny)
        if (result) {
          const destHook = lanesHooks[toLaneId]
          const srcHook = lanesHooks[fromLaneId]
          const srcKey = getStableId(sourceRecord)
          // Replace in destination (same-lane: this is the only operation needed)
          destHook?.updateRecords((prev) => {
            const items = [...prev]
            const idx = items.findIndex(
              (item, index) => getStableId(item, index) === srcKey
            )
            if (idx !== -1) items.splice(idx, 1, result)
            return items
          })
          // Cross-lane: ensure cleanup in origin in case of race
          if (fromLaneId !== toLaneId) {
            srcHook?.updateRecords((prev) =>
              prev.filter((item, index) => getStableId(item, index) !== srcKey)
            )
          }
        }
        return result
      }
      return sourceRecord
    },
  }

  /**
   * Selection
   */

  const lanesDef = useMemo(() => {
    return lanes.map((lane) => ({
      id: lane.id,
      data: lanesHooks[lane.id]?.data || {
        type: "flat",
        records: [],
        groups: [],
      },
      paginationInfo: lanesHooks[lane.id]?.paginationInfo || null,
    }))
  }, [lanes, lanesHooks])

  const { lanesSelectProvider, lanesUseSelectable } = useSelectableLanes<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(lanesDef, source, (selectItemsStatus, clearCallback) => {
    onSelectItems?.(selectItemsStatus, clearCallback)
  })

  return (
    <>
      {lanesProvider}
      {lanesSelectProvider}
      {!onMove ? (
        <Kanban<R> {...kanbanProps} />
      ) : (
        <DndProvider driver={createAtlaskitDriver(instanceId)}>
          <Kanban<R> {...kanbanProps} />
        </DndProvider>
      )}
    </>
  )
}
