import { useCallback, useEffect, useMemo, useState } from "react"

import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type { KanbanProps } from "@/ui/Kanban/types"

import { useDataCollectionLanesData } from "@/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData"
import { useSelectableLanes } from "@/patterns/OneDataCollection/hooks/useSelectableLanes"
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

import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"

import { ItemActionsDefinition } from "../../../item-actions"
import { KanbanCollectionProps } from "./types"

const toCardMetadata = (
  items: ReadonlyArray<{
    icon: IconType
    property: CardMetadataProperty
  }>
): CardMetadata[] =>
  items.map(({ icon, property }) =>
    property.type === "file" ? { property } : { icon, property }
  )

const isInfiniteScrollPaginationInfo = (
  paginationInfo: PaginationInfo | undefined | null
): paginationInfo is InfiniteScrollPaginatedResponse<unknown> => {
  return Boolean(paginationInfo && paginationInfo.type === "infinite-scroll")
}

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
  onCreate,
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

  const laneItems = useMemo(() => {
    return lanes.map((lane) => ({
      ...lane,
      items: lanesHooks[lane.id]?.data?.records || [],
    }))
  }, [lanes, lanesHooks])

  // Fine-grained reorder only when no sort order is applied
  const allowReorder = source.currentSortings === null

  // Aggregated totals/loading. A lane that has not yet reported counts as
  // still initial-loading so we do not flash false while lanes are mounting.
  const { totalItemsAggregated, isInitialLoadingAggregated } = useMemo(() => {
    const hooks = Object.values(lanesHooks)
    const allLanesReported = hooks.length === lanes.length
    if (hooks.length === 0 || !allLanesReported) {
      return {
        totalItemsAggregated: undefined,
        isInitialLoadingAggregated: true,
      }
    }
    let total = 0
    let initialLoading = false
    for (const lane of hooks) {
      const laneTotal = lane.paginationInfo?.total ?? lane.data.records.length
      total += typeof laneTotal === "number" ? laneTotal : 0
      if (lane.isInitialLoading) initialLoading = true
    }
    return {
      totalItemsAggregated: total,
      isInitialLoadingAggregated: initialLoading,
    }
  }, [lanesHooks, lanes.length])

  // Used for kanbanProps.loading: empty hooks → not loading (preserves
  // pre-refactor behavior; isInitialLoadingAggregated keeps `true` fallback
  // because onLoadData consumers depend on it).
  const kanbanLoading = useMemo(
    () => Object.values(lanesHooks).some((h) => h.isInitialLoading),
    [lanesHooks]
  )

  useEffect(() => {
    onLoadData({
      totalItems: totalItemsAggregated,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading: isInitialLoadingAggregated,
      data: Object.values(lanesHooks).flatMap((l) => l.data.records),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rerun when totals, loading, records, filters or search change
  }, [
    totalItemsAggregated,
    isInitialLoadingAggregated,
    lanesHooks,
    source.currentFilters,
    source.currentSearch,
  ])

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

  const kanbanLanes = useMemo(
    () =>
      laneItems.map((l) => {
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
          hasMore,
          loading: laneData?.isLoading || false,
          loadingMore: laneData?.isLoadingMore || false,
          fetchMore: hasMore ? () => laneData.loadMore() : undefined,
        }
      }),
    [laneItems, lanesHooks] // laneItems → items; lanesHooks → pagination/loading/fetchMore per lane
  )

  const getKey = useCallback<NonNullable<KanbanProps<R>["getKey"]>>(
    (item, index) => {
      if (idProvider) return String(idProvider(item, index))
      const fallbackId = (item as unknown as { id?: string | number })?.id
      return fallbackId !== undefined && fallbackId !== null
        ? String(fallbackId)
        : String(index)
    },
    [idProvider]
  )

  const renderCard = useCallback<NonNullable<KanbanProps<R>["renderCard"]>>(
    (item, index, total, laneId) => {
      const dragId = String(
        idProvider
          ? idProvider(item, index)
          : ((item as unknown as { id?: string | number })?.id ?? index)
      )
      const itemId = source.selectable ? source.selectable(item) : item.id

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
    [
      idProvider,
      source.selectable,
      source.itemUrl,
      source.itemOnClick,
      lanesUseSelectable,
      allowReorder,
      title,
      description,
      avatar,
      onMove,
      optionsMetadata,
    ]
  )

  const dnd = useMemo<NonNullable<KanbanProps<R>["dnd"]>>(
    () => ({
      instanceId,
      getIndexById: (laneId: string, id: string) => {
        const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
        return allowReorder ? idx : -1
      },
      onMove,
    }),
    [instanceId, laneIndexMaps, allowReorder, onMove]
  )

  const kanbanProps = useMemo<KanbanProps<R>>(
    () => ({
      lanes: kanbanLanes,
      loading: kanbanLoading,
      getKey,
      renderCard,
      onCreate,
      dnd,
    }),
    [kanbanLanes, kanbanLoading, getKey, renderCard, onCreate, dnd]
  )

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
