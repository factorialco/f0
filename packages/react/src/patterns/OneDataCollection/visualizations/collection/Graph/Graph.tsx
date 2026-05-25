import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react"

import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { F0Button } from "@/components/F0Button"
import { EllipsisHorizontal } from "@/icons/app"
import {
  F0Graph,
  type F0GraphNodeRenderContext,
  type GraphEdge,
  type GraphNode,
} from "@/patterns/F0Graph"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import type {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { useSelectable } from "@/hooks/datasource/useSelectable/useSelectable"
import { useI18n } from "@/lib/providers/i18n"
import { useIsDev } from "@/lib/providers/user-platafform"

import {
  filterItemActions,
  type ItemActionsDefinition,
} from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type { SummariesDefinition } from "../../../summary"
import { useDataCollectionData } from "../../../hooks/useDataCollectionData/useDataCollectionData"

import { getRecordKey, projectGraph } from "./projectGraph"
import type { GraphCollectionProps } from "./types"

/**
 * Dev-only guard messages.
 *
 * Eager mode (no `loadChildren`) requires a non-paginated source — we pull the
 * full graph in one fetch and hand it to F0Graph in one shot. Lazy mode
 * (`loadChildren` provided) requires the inverse, because paginated sources
 * are the contract that signals "the dataset is fetched in slices".
 */
export const EAGER_REQUIRES_NO_PAGINATION_MESSAGE =
  'Graph visualization in eager mode requires a non-paginated data source (paginationType: "no-pagination" or omitted). Either set paginationType: "no-pagination" on the source, or provide a `loadChildren` option to use lazy mode.'

export const LAZY_REQUIRES_PAGINATION_MESSAGE =
  'Graph visualization: `loadChildren` requires a paginated data source (paginationType: "pages" or "infinite-scroll"). Either remove `loadChildren` to use eager mode, or switch the source to a paginated adapter.'

export const GROUPING_NOT_SUPPORTED_MESSAGE =
  "Graph visualization does not support `grouping`. Remove `source.currentGrouping` or switch to a different visualization."

export const GROUPING_NOT_SUPPORTED_FALLBACK_MESSAGE =
  "Graph visualization is unavailable for grouped data. Remove grouping to continue."

/**
 * Build a dropdown trigger from `source.itemActions(record)` for use in
 * `F0GraphNode.actions`. Returns `null` when there are no actions to render.
 *
 * Phase 1 fallback for `detailPanel` (PLAN §4.5).
 */
function buildItemActionsSlot<R extends RecordType>(
  record: R,
  itemActions: ItemActionsDefinition<R> | undefined,
  actionsLabel: string
): ReactNode {
  if (!itemActions) return null
  const actions = filterItemActions(itemActions, record)
  if (actions.length === 0) return null
  const items: DropdownItem[] = actions.map((action) => {
    if ("type" in action && action.type === "separator") {
      return action as unknown as DropdownItem
    }
    return {
      type: "item" as const,
      ...action,
    } as unknown as DropdownItem
  })
  return (
    <Dropdown items={items}>
      <F0Button
        size="sm"
        variant="ghost"
        icon={EllipsisHorizontal}
        label={actionsLabel}
        hideLabel
      />
    </Dropdown>
  )
}

export const GraphCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  graphId: graphIdProp,
  nodeAdapter,
  edgeAdapter,
  renderNode,
  loadChildren,
  graphProps,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
}: GraphCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const isDev = useIsDev()
  const i18n = useI18n()
  const autoGraphId = useId()
  const graphId = graphIdProp ?? autoGraphId

  // Guard 1: grouping is unsupported (mirror Kanban).
  if (source.currentGrouping && isDev) {
    // eslint-disable-next-line no-console
    console.error(GROUPING_NOT_SUPPORTED_MESSAGE)
    throw new Error(GROUPING_NOT_SUPPORTED_MESSAGE)
  }

  // Guard 2: pagination must match the chosen mode. We normalize the adapter
  // value so undefined and "no-pagination" are equivalent (matches the
  // useDataSource normalization). PLAN §4.1.
  const effectivePagination =
    source.dataAdapter.paginationType ?? "no-pagination"
  const isLazyMode = loadChildren !== undefined
  if (isDev) {
    if (isLazyMode && effectivePagination === "no-pagination") {
      throw new Error(LAZY_REQUIRES_PAGINATION_MESSAGE)
    }
    if (!isLazyMode && effectivePagination !== "no-pagination") {
      throw new Error(EAGER_REQUIRES_NO_PAGINATION_MESSAGE)
    }
  }

  const { data, paginationInfo, isInitialLoading } = useDataCollectionData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => {
      onLoadError(error)
    },
  })

  const hasUnsupportedDataShape =
    data?.type !== undefined && data.type !== "flat"
  const hasGroupingMisuse =
    Boolean(source.currentGrouping) || hasUnsupportedDataShape

  const groupingMisuseWarnedRef = useRef<string>("")
  useEffect(() => {
    if (!hasGroupingMisuse) return

    const signature = `${source.currentGrouping ? "grouping" : "non-flat"}:${data?.type ?? "unknown"}`
    if (groupingMisuseWarnedRef.current === signature) return
    groupingMisuseWarnedRef.current = signature

    // eslint-disable-next-line no-console
    console.error(
      `Graph visualization cannot render grouped/non-flat data (${data?.type ?? "unknown"}). ${GROUPING_NOT_SUPPORTED_MESSAGE}`
    )
  }, [hasGroupingMisuse, source.currentGrouping, data?.type])

  const records = useMemo<ReadonlyArray<Record>>(() => {
    if (!data) return []
    return data.type === "flat" ? data.records : []
  }, [data])

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: [...records],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mirror Card: only re-run on data change
  }, [paginationInfo?.total, records])

  /**
   * Dev-only stable-identity warning (PLAN §4.3). If `nodeAdapter`,
   * `edgeAdapter`, or `renderNode` changes identity 6+ times within 1 second
   * of mount, fire ONE `console.warn` per prop so consumers notice they
   * forgot to `useCallback`/`useMemo` before it surfaces as a perf bug.
   * Production builds skip the check entirely.
   */
  const identityCountsRef = useRef<
    Map<
      string,
      { count: number; first: number; prev: unknown; warned: boolean }
    >
  >(new Map())
  useEffect(() => {
    if (!isDev) return
    const entries: Array<[string, unknown]> = [
      ["nodeAdapter", nodeAdapter],
      ["edgeAdapter", edgeAdapter],
      ["renderNode", renderNode],
    ]
    const now = Date.now()
    const tracked = identityCountsRef.current
    for (const [name, value] of entries) {
      if (value === undefined) continue
      const entry = tracked.get(name)
      if (!entry) {
        tracked.set(name, {
          count: 1,
          first: now,
          prev: value,
          warned: false,
        })
        continue
      }
      if (entry.prev === value) continue
      // Reset the window if more than 1s has elapsed since the first change.
      if (now - entry.first > 1000) {
        entry.count = 1
        entry.first = now
        entry.prev = value
        entry.warned = false
        continue
      }
      entry.count += 1
      entry.prev = value
      if (entry.count >= 6 && !entry.warned) {
        entry.warned = true
        // eslint-disable-next-line no-console
        console.warn(
          `Graph visualization: \`${name}\` identity changed ${entry.count} times within 1s. ` +
            "Wrap it in `useCallback`/`useMemo` so F0Graph can keep node identity stable across renders."
        )
      }
    }
  }, [nodeAdapter, edgeAdapter, renderNode, isDev])

  // Project records → F0Graph topology. matchedIds left undefined in Phase 1
  // (no usePerVisualizationFilters integration yet). Adapters and idProvider
  // are included as deps so a deliberate identity change (e.g. a new
  // edgeAdapter) re-projects; consumers are expected to memoize per PLAN §4.3
  // — the dev-mode identity warning above flags missed memoization.
  const projection = useMemo(() => {
    return projectGraph<Record>({
      records,
      nodeAdapter,
      edgeAdapter,
      idProvider: source.idProvider as unknown as
        | ((item: Record, index: number) => string | number)
        | undefined,
    })
  }, [records, nodeAdapter, edgeAdapter, source.idProvider])

  const cycleWarnedRef = useRef<string>("")
  useEffect(() => {
    if (!isDev) return
    if (projection.cycles.length === 0) return
    const signature = projection.cycles.slice().sort().join("|")
    if (signature === cycleWarnedRef.current) return
    cycleWarnedRef.current = signature
    // eslint-disable-next-line no-console
    console.warn(
      `Graph visualization: cycle detected in parent linkage for keys: ${projection.cycles.join(", ")}. Offending edges dropped to keep the graph acyclic.`
    )
  }, [projection.cycles, isDev])

  const duplicateWarnedRef = useRef<string>("")
  useEffect(() => {
    if (!isDev) return
    if (projection.duplicates.length === 0) return
    const signature = projection.duplicates.slice().sort().join("|")
    if (signature === duplicateWarnedRef.current) return
    duplicateWarnedRef.current = signature
    // eslint-disable-next-line no-console
    console.warn(
      `Graph visualization: duplicate record keys dropped from projection: ${projection.duplicates.join(", ")}. ` +
        "Records must produce unique ids via `source.idProvider`/`item.id`; duplicates after the first occurrence are skipped."
    )
  }, [projection.duplicates, isDev])

  /**
   * Selection bridge — F0Graph emits string ids, DataCollection expects the
   * full record (PLAN §4.4). Lookup is by projected node id so it works even
   * when `source.selectable` is omitted (we fall back to `item.id`/index).
   *
   * Lazy mode forces `allPagesSelection: true` because ids returned by
   * `loadChildren` never enter `data.records`; without this flag,
   * `useSelectable` filters `selectedIds` to the current page and drops every
   * lazy id from the `onSelectItems` payload silently.
   */
  const { selectedItems, handleSelectItemChange } = useSelectable<
    Record,
    Filters,
    Sortings,
    Grouping
  >({
    data,
    paginationInfo,
    source,
    onSelectItems,
    selectionMode: "multi",
    selectedState: source.defaultSelectedItems,
    allPagesSelection: isLazyMode ? true : undefined,
  })

  /**
   * Monotonic cache of records returned by `loadChildren` — never evicted in
   * Phase 1; revisit if memory becomes a concern under deeply nested lazy
   * graphs. The selection bridge needs this so it can resolve a lazy id back
   * to its record when the user toggles selection on a lazy-loaded node.
   */
  const lazyRecordsRef = useRef<Map<string, Record>>(new Map())

  const recordById = useMemo(() => {
    const m = new Map<string, Record>()
    for (const node of projection.nodes) m.set(node.id, node.data)
    return m
  }, [projection.nodes])

  const selectedNodes = useMemo<Set<string>>(() => {
    // Surface every selected id F0Graph might draw — eager projection AND
    // lazy-loaded children — so the checked state survives expand/collapse.
    const ids = new Set<string>()
    for (const id of selectedItems.keys()) ids.add(String(id))
    return ids
  }, [selectedItems])

  const missingSelectionWarnedRef = useRef<Set<string>>(new Set())
  const handleNodeSelect = useCallback(
    (nodeId: string, selected: boolean) => {
      const record =
        recordById.get(nodeId) ?? lazyRecordsRef.current.get(nodeId)
      if (!record) {
        if (isDev && !missingSelectionWarnedRef.current.has(nodeId)) {
          missingSelectionWarnedRef.current.add(nodeId)
          // eslint-disable-next-line no-console
          console.warn(
            `Graph visualization: ignored selection toggle for node "${nodeId}" because no matching record was found. ` +
              "This usually means the node was projected from a lazy load that has since been collapsed."
          )
        }
        return
      }
      handleSelectItemChange(record, selected)
    },
    [recordById, handleSelectItemChange, isDev]
  )

  /**
   * Search — pipe F0Graph's search input straight into the data source.
   */
  const handleSearchChange = useCallback(
    (value: string | undefined) => {
      source.setCurrentSearch(value)
    },
    [source]
  )

  const renderNodeWrapped = useCallback(
    (node: GraphNode<Record>, ctx: F0GraphNodeRenderContext): ReactNode => {
      const actionsSlot = buildItemActionsSlot<Record>(
        node.data,
        source.itemActions as ItemActionsDefinition<Record> | undefined,
        i18n.collections.actions.actions
      )
      // PLAN §3 deviation flagged to user: signature extends consumer's
      // renderNode with a third `extras` arg carrying { actions } so the
      // item-actions fallback can flow through F0GraphNode.actions without
      // GraphCollection inspecting/cloning the returned ReactNode.
      return renderNode(node.data, ctx, { actions: actionsSlot })
    },
    [renderNode, source.itemActions, i18n.collections.actions.actions]
  )

  /**
   * Lazy loader wrapper — per-node AbortController, single in-flight loader
   * per nodeId. On unmount, every controller is aborted; results that arrive
   * after the abort are dropped silently. The controller's `signal` is also
   * forwarded to the consumer's `loadChildren` so the underlying request
   * (e.g. `fetch`) can be cancelled at the network layer. Records that
   * survive are projected with the same `nodeAdapter` + `getRecordKey`
   * pipeline as the eager path and cached in `lazyRecordsRef` for the
   * selection bridge.
   */
  const abortControllersRef = useRef<Map<string, AbortController>>(new Map())
  const idProviderForLazy = source.idProvider as unknown as
    | ((item: Record, index: number) => string | number)
    | undefined

  const wrappedLoadChildren = useCallback(
    async (nodeId: string): Promise<GraphNode<Record>[]> => {
      if (!loadChildren) return []
      const existing = abortControllersRef.current.get(nodeId)
      existing?.abort()
      const controller = new AbortController()
      abortControllersRef.current.set(nodeId, controller)
      try {
        const children = await loadChildren(nodeId, {
          signal: controller.signal,
        })
        if (controller.signal.aborted) return []
        const projected: GraphNode<Record>[] = []
        children.forEach((child, index) => {
          const key = getRecordKey(child, index, idProviderForLazy)
          const linkage = nodeAdapter(child)
          lazyRecordsRef.current.set(key, child)
          const node: GraphNode<Record> = {
            id: key,
            parentId: linkage.parentId ?? nodeId,
            data: child,
          }
          if (linkage.parentIds && linkage.parentIds.length > 0) {
            node.parentIds = linkage.parentIds
          }
          if (linkage.childrenCount !== undefined) {
            node.childrenCount = linkage.childrenCount
          }
          if (linkage.childrenLoaded !== undefined) {
            node.childrenLoaded = linkage.childrenLoaded
          }
          projected.push(node)
        })
        return projected
      } finally {
        const current = abortControllersRef.current.get(nodeId)
        if (current === controller) {
          abortControllersRef.current.delete(nodeId)
        }
      }
    },
    [loadChildren, nodeAdapter, idProviderForLazy]
  )

  useEffect(() => {
    const controllers = abortControllersRef.current
    return () => {
      for (const c of controllers.values()) c.abort()
      controllers.clear()
    }
  }, [])

  if (isInitialLoading) {
    return (
      <div className="flex h-full min-h-0 flex-1 items-center justify-center">
        <div aria-label="Loading graph" role="status" />
      </div>
    )
  }

  if (hasGroupingMisuse) {
    return (
      <div className="flex h-full min-h-0 flex-1 items-center justify-center px-4 text-center">
        <p className="text-sm text-f1-foreground-secondary" role="alert">
          {GROUPING_NOT_SUPPORTED_FALLBACK_MESSAGE}
        </p>
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      {isLazyMode ? (
        <F0Graph<Record>
          {...graphProps}
          graphId={graphId}
          rootNodes={projection.nodes as GraphNode<Record>[]}
          loadChildren={wrappedLoadChildren}
          renderNode={renderNodeWrapped}
          selectionMode={source.selectable ? "multi" : "none"}
          selectedNodes={selectedNodes}
          onNodeSelect={handleNodeSelect}
          searchValue={
            source.debouncedCurrentSearch ?? source.currentSearch ?? undefined
          }
          onSearchChange={handleSearchChange}
        />
      ) : (
        <F0Graph<Record>
          {...graphProps}
          graphId={graphId}
          nodes={projection.nodes as GraphNode<Record>[]}
          edges={projection.edges as GraphEdge[]}
          renderNode={renderNodeWrapped}
          selectionMode={source.selectable ? "multi" : "none"}
          selectedNodes={selectedNodes}
          onNodeSelect={handleNodeSelect}
          searchValue={
            source.debouncedCurrentSearch ?? source.currentSearch ?? undefined
          }
          onSearchChange={handleSearchChange}
        />
      )}
    </div>
  )
}
