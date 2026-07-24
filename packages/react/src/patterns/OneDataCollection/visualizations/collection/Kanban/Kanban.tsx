import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo } from "react"

import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type { KanbanProps } from "@/ui/Kanban/types"

import { useDataCollectionLanesData } from "@/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData"
import { useSelectableLanes } from "@/patterns/OneDataCollection/hooks/useSelectableLanes"
import {
  InfiniteScrollPaginatedResponse,
  PaginationInfo,
  type RecordType,
} from "@/hooks/datasource"
import { useGroups } from "@/hooks/datasource/useGroups"
import { useReducedMotion } from "@/lib/a11y"
import { GroupHeader } from "@/ui/GroupHeader/GroupHeader"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"

import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"

import { ItemActionsDefinition } from "../../../item-actions"
import { KanbanBoard } from "./KanbanBoard"
import { KanbanCollectionProps } from "./types"

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
  getLanesForGroup,
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

  const idProvider = source.idProvider
  const shouldReduceMotion = useReducedMotion()

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

  /**
   * Selection — one useSelectable per lane, scoped over the lane's full data.
   * Shared across boards; grouping partitions items visually, not the lane ids.
   */
  const lanesDef = useMemo(() => {
    return lanes.map((lane) => ({
      id: lane.id,
      data: lanesHooks[lane.id]?.data || {
        type: "flat" as const,
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
          metadata={optionsMetadata ? [...optionsMetadata(item)] : undefined}
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

  /**
   * Flat lanes: a single board whose items are each lane's records.
   */
  const flatLanes = useMemo<KanbanProps<R>["lanes"]>(
    () =>
      lanes.map((l) => {
        const laneData = lanesHooks[l.id]
        const totalItems = laneData?.paginationInfo?.total
        const hasMore =
          isInfiniteScrollPaginationInfo(laneData?.paginationInfo) &&
          laneData?.paginationInfo?.hasMore
        return {
          id: l.id,
          title: l.title,
          items: laneData?.data?.records ?? [],
          variant: l.variant,
          color: l.color,
          total: totalItems,
          hasMore,
          loading: laneData ? laneData.isInitialLoading : true,
          loadingMore: laneData?.isLoadingMore || false,
          fetchMore: hasMore ? () => laneData.loadMore() : undefined,
        }
      }),
    [lanes, lanesHooks]
  )

  /**
   * Grouped boards: pivot the per-lane grouped data (lane → groups) into
   * group → lanes. One board per group, each showing the full set of lanes
   * (a lane with no items in a group renders empty, so every group keeps the
   * same columns). Group order follows the adapter's grouping sort (first
   * appearance across lanes). Per-lane and per-group counters come from record
   * counts.
   *
   * Pagination is per board, not per lane inside a group: grouped lanes render
   * the records already fetched (no per-lane load-more), so reorder is disabled
   * in grouped mode (DnD indices would otherwise be group-relative).
   */
  const isGrouped = !!source.currentGrouping

  const groupedBoards = useMemo(() => {
    if (!isGrouped) {
      return [] as {
        key: string
        label: string | Promise<string>
        itemCount: number
        lanes: KanbanProps<R>["lanes"]
      }[]
    }

    // Group axis is data-driven: a group appears only if it has items (standard
    // grouping behaviour), so empty versions are simply not shown.
    const orderedKeys: string[] = []
    const labelByKey = new Map<string, string | Promise<string>>()
    for (const lane of lanes) {
      const data = lanesHooks[lane.id]?.data
      if (data?.type !== "grouped") continue
      for (const group of data.groups) {
        if (!labelByKey.has(group.key)) {
          labelByKey.set(group.key, group.label)
          orderedKeys.push(group.key)
        }
      }
    }

    return orderedKeys.map((key) => {
      // Per-group columns when provided, else the shared global lane set.
      const groupLaneDefs = getLanesForGroup ? getLanesForGroup(key) : lanes
      const boardLanes: KanbanProps<R>["lanes"] = groupLaneDefs.map((lane) => {
        const laneData = lanesHooks[lane.id]
        const group =
          laneData?.data?.type === "grouped"
            ? laneData.data.groups.find((g) => g.key === key)
            : undefined
        const items = group?.records ?? []
        return {
          id: lane.id,
          title: lane.title,
          items,
          variant: lane.variant,
          color: lane.color,
          total: items.length,
          hasMore: false,
          loading: laneData ? laneData.isInitialLoading : true,
          loadingMore: false,
          fetchMore: undefined,
        }
      })
      const itemCount = boardLanes.reduce(
        (sum, lane) => sum + lane.items.length,
        0
      )
      return {
        key,
        label: labelByKey.get(key) ?? key,
        itemCount,
        lanes: boardLanes,
      }
    })
  }, [isGrouped, lanes, lanesHooks, getLanesForGroup])

  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    groupedBoards.map((b) => ({
      key: b.key,
      label: b.label,
      itemCount: b.itemCount,
      records: [] as R[],
    })),
    defaultOpenGroups
  )

  return (
    <>
      {lanesProvider}
      {lanesSelectProvider}
      {isGrouped ? (
        <div
          className="flex flex-col gap-6"
          aria-busy={kanbanLoading}
          aria-live="polite"
        >
          {groupedBoards.length === 0 ? (
            // Groups have not arrived yet: show the lanes in a loading state
            // instead of flashing an empty container while data mounts.
            <KanbanBoard<R>
              lanes={flatLanes}
              renderCard={renderCard}
              getKey={getKey}
              onCreate={onCreate}
              idProvider={idProvider}
              allowReorder={false}
              loading={kanbanLoading}
            />
          ) : (
            groupedBoards.map((board) => (
              <div
                className="flex flex-col gap-2"
                key={`kanban-group-${board.key}`}
                data-testid={`kanban-group-${board.key}`}
              >
                <GroupHeader
                  className="cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover"
                  showOpenChange={collapsible}
                  label={board.label}
                  itemCount={board.itemCount}
                  open={openGroups[board.key]}
                  onOpenChange={(open) => setGroupOpen(board.key, open)}
                />
                <AnimatePresence>
                  {(!collapsible || openGroups[board.key]) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.1,
                        ease: "easeInOut",
                      }}
                    >
                      {/* PROVISIONAL preview height. The Kanban UI is h-full, so
                          stacked boards need a bounded height or the layout breaks.
                          The real stacked-board layout is a Foundations decision —
                          this fixed value is only to preview the feature. */}
                      <div className="h-[440px] min-h-0">
                        <KanbanBoard<R>
                          lanes={board.lanes}
                          renderCard={renderCard}
                          getKey={getKey}
                          onCreate={onCreate}
                          onMove={onMove}
                          idProvider={idProvider}
                          allowReorder={false}
                          loading={kanbanLoading}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>
      ) : (
        <KanbanBoard<R>
          lanes={flatLanes}
          renderCard={renderCard}
          getKey={getKey}
          onCreate={onCreate}
          onMove={onMove}
          idProvider={idProvider}
          allowReorder={allowReorder}
          loading={kanbanLoading}
        />
      )}
    </>
  )
}
