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

/**
 * Build a dropdown trigger from `source.itemActions(record)` for use in
 * `F0GraphNode.actions`. Returns `null` when there are no actions to render.
 *
 * Phase 1 fallback for `detailPanel` (PLAN §4.5).
 */
function buildItemActionsSlot<R extends RecordType>(
  record: R,
  itemActions: ItemActionsDefinition<R> | undefined
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
        label="Actions"
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
  const autoGraphId = useId()
  const graphId = graphIdProp ?? autoGraphId

  // Guard 1: grouping is unsupported (mirror Kanban).
  if (source.currentGrouping && isDev) {
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
   * Stable identity (dev-only): warn once when the same record key appears at
   * a different array index between renders. Re-keying causes F0Graph to
   * remount node DOM and lose expand/selection state. (PLAN §4.3.)
   */
  const previousIdentityRef = useRef<Map<string, number>>(new Map())
  useEffect(() => {
    if (!isDev) return
    const idProvider = source.idProvider
    const current = new Map<string, number>()
    records.forEach((record, index) => {
      const key = getRecordKey(
        record,
        index,
        idProvider as unknown as
          | ((item: Record, index: number) => string | number)
          | undefined
      )
      current.set(key, index)
    })
    const previous = previousIdentityRef.current
    if (previous.size > 0) {
      for (const [key, index] of current) {
        const prev = previous.get(key)
        if (prev !== undefined && prev !== index) {
          // eslint-disable-next-line no-console
          console.warn(
            `Graph visualization: record key "${key}" moved from index ${prev} to ${index}. ` +
              "Provide a stable `source.selectable` (idProvider) so F0Graph can preserve node identity across renders."
          )
          break
        }
      }
    }
    previousIdentityRef.current = current
  }, [records, isDev, source.idProvider])

  // Project records → F0Graph topology. matchedIds left undefined in Phase 1
  // (no usePerVisualizationFilters integration yet).
  const projection = useMemo(() => {
    return projectGraph<Record>({
      records,
      nodeAdapter,
      edgeAdapter,
      idProvider: source.idProvider as unknown as
        | ((item: Record, index: number) => string | number)
        | undefined,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps -- adapters are consumer-supplied; re-run on records only
  }, [records])

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

  /**
   * Selection bridge — F0Graph emits string ids, DataCollection expects the
   * full record (PLAN §4.4). Lookup is by projected node id so it works even
   * when `source.selectable` is omitted (we fall back to `item.id`/index).
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
  })

  /**
   * Lazy record cache — records returned by `loadChildren` never enter
   * `projection.nodes`, so we stash them here so the selection bridge can
   * resolve their record back from a node id when the user toggles selection
   * on a lazy-loaded node.
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

  const handleNodeSelect = useCallback(
    (nodeId: string, selected: boolean) => {
      const record =
        recordById.get(nodeId) ?? lazyRecordsRef.current.get(nodeId)
      if (!record) return
      handleSelectItemChange(record, selected)
    },
    [recordById, handleSelectItemChange]
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
        source.itemActions as ItemActionsDefinition<Record> | undefined
      )
      // PLAN §3 deviation flagged to user: signature extends consumer's
      // renderNode with a third `extras` arg carrying { actions } so the
      // item-actions fallback can flow through F0GraphNode.actions without
      // GraphCollection inspecting/cloning the returned ReactNode.
      return renderNode(node.data, ctx, { actions: actionsSlot })
    },
    [renderNode, source.itemActions]
  )

  /**
   * Lazy loader wrapper — per-node AbortController, single in-flight loader
   * per nodeId. On unmount, every controller is aborted; results that arrive
   * after the abort are dropped silently. Records that survive are projected
   * with the same `nodeAdapter` + `getRecordKey` pipeline as the eager path
   * and cached in `lazyRecordsRef` for the selection bridge.
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
        const children = await loadChildren(nodeId)
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
          searchValue={source.currentSearch}
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
          searchValue={source.currentSearch}
          onSearchChange={handleSearchChange}
        />
      )}
    </div>
  )
}
