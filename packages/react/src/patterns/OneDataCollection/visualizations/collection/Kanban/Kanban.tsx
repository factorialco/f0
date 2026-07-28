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
import { useIsDev } from "@/lib/providers/user-platafform"
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
  const isDev = useIsDev()
  const groupOrder = source.currentGrouping?.order ?? "asc"
  const groupingField = source.currentGrouping?.field
  const paginationType = source.dataAdapter?.paginationType

  // Group metadata (label, itemCount) is lane-independent: resolve it from the
  // grouping config — like useData/List/Table — instead of from whichever lane
  // happened to surface the group first (each lane fetches with its own filters).
  const groupByConfig = useMemo(() => {
    const field = source.currentGrouping?.field
    if (field == null) return undefined
    const byField = source.grouping?.groupBy as
      | Record<
          string,
          {
            label: (
              groupId: unknown,
              filters: unknown
            ) => string | Promise<string>
            itemCount?: (
              groupId: unknown,
              filters: unknown
            ) => number | undefined | Promise<number | undefined>
          }
        >
      | undefined
    return byField?.[field as string]
  }, [source.currentGrouping?.field, source.grouping])

  const knownLaneIds = useMemo(() => new Set(lanes.map((l) => l.id)), [lanes])

  // Group keys present in the data, ordered by the grouping sort
  // (currentGrouping.order) — NOT by the order lanes happen to surface them. A
  // group only appears if it has items, so empty groups aren't shown.
  const groupKeysOrdered = useMemo(() => {
    if (!isGrouped) return [] as string[]
    const keys = new Set<string>()
    for (const lane of lanes) {
      const data = lanesHooks[lane.id]?.data
      if (data?.type !== "grouped") continue
      for (const group of data.groups) keys.add(group.key)
    }
    return Array.from(keys).sort((a, b) => {
      const cmp = a.localeCompare(b, undefined, { numeric: true })
      return groupOrder === "desc" ? -cmp : cmp
    })
  }, [isGrouped, lanes, lanesHooks, groupOrder])

  const groupedBoards = useMemo(() => {
    if (!isGrouped) {
      return [] as {
        key: string
        label: string | Promise<string>
        itemCount: number | Promise<number | undefined> | undefined
        lanes: KanbanProps<R>["lanes"]
      }[]
    }

    return groupKeysOrdered.map((key) => {
      // Per-group columns when provided, else the shared global lane set. Drop
      // ids that aren't declared lanes — they would never load (see dev warning).
      const groupLaneDefs = (
        getLanesForGroup ? getLanesForGroup(key) : lanes
      ).filter((lane) => knownLaneIds.has(lane.id))
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
      const label = groupByConfig
        ? groupByConfig.label(key, source.currentFilters)
        : key
      // Header count from the authoritative itemCount (matches List/Table); fall
      // back to loaded records only when the source provides no itemCount.
      const itemCount: number | Promise<number | undefined> | undefined =
        groupByConfig?.itemCount
          ? groupByConfig.itemCount(key, source.currentFilters)
          : boardLanes.reduce((sum, lane) => sum + lane.items.length, 0)
      return { key, label, itemCount, lanes: boardLanes }
    })
  }, [
    isGrouped,
    groupKeysOrdered,
    lanes,
    lanesHooks,
    getLanesForGroup,
    groupByConfig,
    knownLaneIds,
    source.currentFilters,
  ])

  // Ids returned by getLanesForGroup that aren't declared lanes: they never load.
  const unknownLaneIds = useMemo(() => {
    if (!isGrouped || !getLanesForGroup) return [] as string[]
    const unknown = new Set<string>()
    for (const key of groupKeysOrdered) {
      for (const lane of getLanesForGroup(key)) {
        if (!knownLaneIds.has(lane.id)) unknown.add(lane.id)
      }
    }
    return Array.from(unknown)
  }, [isGrouped, getLanesForGroup, groupKeysOrdered, knownLaneIds])

  // Dev diagnostics: surface silent-failure modes instead of degrading quietly.
  useEffect(() => {
    if (!isDev || !isGrouped) return
    if (groupingField != null && !groupByConfig) {
      // The old runtime throw caught this: a grouping field absent from groupBy
      // makes useData return flat data, so the board renders without groups.
      console.error(
        `[OneDataCollection/Kanban] currentGrouping.field "${String(groupingField)}" is not a key of grouping.groupBy — the board will render without groups.`
      )
    }
    if (paginationType === "infinite-scroll" || paginationType === "pages") {
      console.warn(
        "[OneDataCollection/Kanban] grouping with a paginated source only shows each group's first page; counters use the authoritative itemCount but cards may be incomplete. Use a non-paginated source for grouped Kanban."
      )
    }
    if (unknownLaneIds.length > 0) {
      console.warn(
        `[OneDataCollection/Kanban] getLanesForGroup returned lane id(s) not present in source.lanes: ${unknownLaneIds.join(", ")}. They are ignored (they would never load).`
      )
    }
  }, [
    isDev,
    isGrouped,
    groupingField,
    paginationType,
    groupByConfig,
    unknownLaneIds,
  ])

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
          className="flex max-h-full min-h-0 flex-1 flex-col gap-6 overflow-auto"
          aria-busy={kanbanLoading}
          aria-live={kanbanLoading ? "polite" : undefined}
        >
          {groupedBoards.length === 0 ? (
            // Groups have not arrived yet: show the lanes in a loading state
            // instead of flashing an empty container while data mounts.
            <KanbanBoard<R>
              lanes={flatLanes}
              renderCard={renderCard}
              getKey={getKey}
              onCreate={onCreate}
              onMove={onMove}
              idProvider={idProvider}
              allowReorder={false}
              loading={kanbanLoading}
            />
          ) : (
            groupedBoards.map((board) => {
              // Group-level selection: selection lives per lane, so aggregate the
              // board's lanes' status for this group into one tri-state, and fan
              // the toggle out to each lane (same primitives Card/List use, just
              // summed across the board's columns).
              const groupSelectable = source.selectable !== undefined
              let selectedCount = 0
              let unselectedCount = 0
              for (const lane of board.lanes) {
                const status = lanesUseSelectable.get(lane.id)
                  ?.groupAllSelectedStatus[board.key]
                selectedCount += status?.selectedCount ?? 0
                unselectedCount += status?.unselectedCount ?? 0
              }
              const groupSelect: boolean | "indeterminate" =
                selectedCount === 0
                  ? false
                  : unselectedCount === 0
                    ? true
                    : "indeterminate"
              return (
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
                    selectable={groupSelectable}
                    select={groupSelect}
                    onSelectChange={(checked) =>
                      board.lanes.forEach((lane) =>
                        lanesUseSelectable
                          .get(lane.id)
                          ?.handleSelectGroupChange(board.key, checked)
                      )
                    }
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
                        {/* Stacked boards render at content height; the group list
                          above owns the single vertical scroll — same model as the
                          grouped List/Card. Each lane still honours ui/Kanban's
                          400px minimum (KanbanLane MIN_HEIGHT); a true content-hug
                          for short groups would need an explicit content-height
                          option on ui/Kanban (pending Foundations). */}
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
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
