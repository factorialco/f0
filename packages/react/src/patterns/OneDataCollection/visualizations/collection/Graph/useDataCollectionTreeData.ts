import { useCallback, useEffect, useRef, useState } from "react"

import type { Observable } from "zen-observable-ts"

import {
  DataError,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import type { SortingsStateMultiple } from "@/hooks/datasource/types/sortings.typings"
import type { PromiseState } from "@/lib/promise-to-observable"
import type { GraphNode } from "@/patterns/F0Graph"

import type { DataCollectionSource } from "../../../hooks/useDataCollectionSource"
import type { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type { SummariesDefinition } from "../../../summary"
import type { OnLoadDataCallback, OnLoadErrorCallback } from "../../../types"
import type { GraphVisualizationOptions } from "./types"

const DEFAULT_TREE_PER_PAGE = 200

type GraphSource<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = DataCollectionSource<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActionsDefinition<R>,
  NavigationFilters,
  Grouping
>

export type UseDataCollectionTreeData<R extends RecordType> = {
  /** All loaded nodes (grows as the frontier is expanded). */
  nodes: GraphNode<R>[]
  /** Controlled expanded set for F0Graph. */
  expandedNodes: Set<string>
  /**
   * Updates the expanded set and pre-loads the children of every newly visible
   * node, so collapsed-but-visible nodes always show their expand affordance.
   */
  setExpandedNodes: (next: Set<string>) => void
  /** Node F0Graph should center on (set by `revealNode`). */
  focusedNode: string | undefined
  /** Highlighted node set (set by `revealNode`). */
  highlightedNodes: Set<string>
  /**
   * Reveals `nodeId`: loads its ancestor path, expands the ancestors, then
   * focuses and highlights it. Used by the in-graph search on result select.
   */
  revealNode: (nodeId: string) => Promise<void>
  /** Clears the centered/highlighted node (e.g. on empty-canvas click). */
  clearFocus: () => void
  /**
   * Viewport-driven hydration loader to pass to F0Graph, or `undefined` when
   * `loadNodeData` isn't configured (eager mode). Fetches full records for the
   * on-screen nodes and merges them into `nodes`.
   */
  loadVisibleNodeData?: (ids: string[]) => void
  isInitialLoading: boolean
  error: DataError | null
}

const toDataError = (cause: unknown): DataError => ({
  message: "Error fetching data",
  cause,
})

const extractRecords = <R>(payload: unknown): R[] => {
  if (Array.isArray(payload)) {
    return payload as R[]
  }
  if (payload && typeof payload === "object" && "records" in payload) {
    return ((payload as { records?: R[] }).records ?? []) as R[]
  }
  return []
}

/** Resolves an adapter `fetchData` result (array | response | promise | observable) to records. */
const resolveFetchResult = <R>(result: unknown): Promise<R[]> => {
  if (result && typeof result === "object" && "subscribe" in result) {
    const observable = result as Observable<PromiseState<unknown>>
    return new Promise<R[]>((resolve, reject) => {
      let settled = false
      const subscription = observable.subscribe({
        next: (state) => {
          if (settled) return
          if (state?.error) {
            settled = true
            reject(state.error)
            subscription.unsubscribe()
            return
          }
          if (state?.data) {
            settled = true
            resolve(extractRecords<R>(state.data))
            subscription.unsubscribe()
          }
        },
        error: (err) => {
          if (!settled) {
            settled = true
            reject(err)
          }
        },
        complete: () => {
          if (!settled) {
            settled = true
            resolve([])
          }
        },
      })
    })
  }
  if (result && typeof result === "object" && "then" in result) {
    return (result as Promise<unknown>).then((data) => extractRecords<R>(data))
  }
  return Promise.resolve(extractRecords<R>(result))
}

const hasChildren = <R extends RecordType>(node: GraphNode<R>): boolean =>
  (node.childrenCount ?? 0) > 0

/** Replaces the data of hydrated nodes (matched by id) and clears their loading flag. */
const mergeHydratedData = <R extends RecordType>(
  prev: GraphNode<R>[],
  hydrated: Map<string, R>
): GraphNode<R>[] => {
  if (hydrated.size === 0) return prev
  let changed = false
  const next = prev.map((node) => {
    const record = hydrated.get(node.id)
    if (!record) return node
    changed = true
    // Preserve structure (childrenCount/childrenLoaded/parentId) from the
    // skeleton; only swap in the rich record and mark it loaded.
    return { ...node, data: record, dataLoaded: true }
  })
  return changed ? next : prev
}

/** Appends freshly loaded children for `parentId`, marking the parent as loaded. */
const mergeChildren = <R extends RecordType>(
  prev: GraphNode<R>[],
  children: GraphNode<R>[],
  parentId: string
): GraphNode<R>[] => {
  const existing = new Set(prev.map((node) => node.id))
  const additions = children.filter((child) => !existing.has(child.id))
  const withParentMarked = prev.map((node) =>
    node.id === parentId ? { ...node, childrenLoaded: true } : node
  )
  return [...withParentMarked, ...additions]
}

/** parentId → direct child ids, indexed over the given nodes. */
const indexChildrenByParent = <R extends RecordType>(
  nodes: Iterable<GraphNode<R>>
): Map<string, string[]> => {
  const index = new Map<string, string[]>()
  for (const node of nodes) {
    if (node.parentId === null) continue
    const siblings = index.get(node.parentId) ?? []
    siblings.push(node.id)
    index.set(node.parentId, siblings)
  }
  return index
}

/**
 * The ids in `ids` (those present in `byId`) plus all their loaded
 * descendants. Iterative walk with a read cursor over an append-only frontier
 * — no `shift()` (O(n) per step) and no mutation of the condition the loop
 * observes. Every id is enqueued at most once (guarded by `collected`), so the
 * frontier is bounded by the number of loaded nodes: the walk is O(n) and
 * terminates even if the parent links ever formed a cycle.
 */
const collectSubtreeIds = <R extends RecordType>(
  ids: string[],
  byId: Map<string, GraphNode<R>>
): Set<string> => {
  const collected = new Set<string>()
  if (ids.length === 0) return collected
  const childrenByParent = indexChildrenByParent(byId.values())
  const frontier: string[] = []
  for (const id of ids) {
    if (byId.has(id) && !collected.has(id)) {
      collected.add(id)
      frontier.push(id)
    }
  }
  for (let cursor = 0; cursor < frontier.length; cursor++) {
    for (const childId of childrenByParent.get(frontier[cursor]) ?? []) {
      if (collected.has(childId)) continue
      collected.add(childId)
      frontier.push(childId)
    }
  }
  return collected
}

/** Ids whose parent link points outside the loaded tree. */
const findUnattachedIds = <R extends RecordType>(
  byId: Map<string, GraphNode<R>>
): string[] => {
  const unattached: string[] = []
  for (const node of byId.values()) {
    if (node.parentId !== null && !byId.has(node.parentId)) {
      unattached.push(node.id)
    }
  }
  return unattached
}

/**
 * Applies a live-update `records` batch to `byId` in place: an existing node
 * has its data and structure refreshed (re-parenting via `getParentId`); an
 * unknown record is inserted unconditionally — attachability is resolved by
 * the caller's prune pass afterwards, so the order of records inside the
 * batch doesn't matter. Parents whose child set changes are recorded in
 * `touchedParents` for the reconcile pass.
 */
const applyUpsertRecords = <R extends RecordType>({
  records,
  byId,
  touchedParents,
  getId,
  getParentId,
  getChildrenCount,
  hydrates,
}: {
  records: R[]
  byId: Map<string, GraphNode<R>>
  touchedParents: Set<string>
  getId: (record: R) => string
  getParentId?: (record: R) => string | null
  getChildrenCount: (record: R) => number
  /** Whether two-phase hydration (`loadNodeData`) is configured. */
  hydrates: boolean
}): void => {
  for (const record of records) {
    const id = getId(record)
    const existing = byId.get(id)
    const parentId = getParentId
      ? getParentId(record)
      : (existing?.parentId ?? null)
    const childrenCount = getChildrenCount(record)
    if (existing) {
      if (existing.parentId !== parentId) {
        if (existing.parentId !== null) touchedParents.add(existing.parentId)
        if (parentId !== null) touchedParents.add(parentId)
      }
      byId.set(id, {
        ...existing,
        data: record,
        parentId,
        childrenCount,
        // We hold the full record now, so clear any hydration placeholder.
        dataLoaded: hydrates ? true : existing.dataLoaded,
      })
    } else {
      if (parentId !== null) touchedParents.add(parentId)
      byId.set(id, {
        id,
        parentId,
        data: record,
        childrenCount,
        childrenLoaded: false,
        dataLoaded: hydrates ? true : undefined,
      })
    }
  }
}

/**
 * Recomputes `childrenCount`/`childrenLoaded` of the touched parents from the
 * in-memory tree. For a parent whose children are fully loaded, the in-memory
 * child set is ground truth: losing its last child must drop childrenCount to
 * 0 (or the expander spins forever waiting for children that will never
 * arrive). A believed-leaf parent (count 0) that just gained children this way
 * is now fully loaded too — it gets its expander and expanding it must not
 * fetch (the server may not reflect the live change yet). `loadedParents` (the
 * fetch-dedup set) is kept in sync.
 */
const reconcileTouchedParents = <R extends RecordType>(
  byId: Map<string, GraphNode<R>>,
  touchedParents: Set<string>,
  loadedParents: Set<string>
): void => {
  if (touchedParents.size === 0) return
  // One pass over the nodes instead of one scan per touched parent.
  const childCounts = new Map<string, number>()
  for (const node of byId.values()) {
    if (node.parentId === null || !touchedParents.has(node.parentId)) continue
    childCounts.set(node.parentId, (childCounts.get(node.parentId) ?? 0) + 1)
  }
  for (const parentId of touchedParents) {
    const parent = byId.get(parentId)
    if (!parent) continue
    const inMemoryChildren = childCounts.get(parentId) ?? 0
    if (loadedParents.has(parentId) || parent.childrenLoaded) {
      byId.set(parentId, {
        ...parent,
        childrenCount: inMemoryChildren,
        childrenLoaded: true,
      })
      loadedParents.add(parentId)
    } else {
      const childrenCount = Math.max(
        parent.childrenCount ?? 0,
        inMemoryChildren
      )
      const fullyLoaded =
        inMemoryChildren > 0 && childrenCount === inMemoryChildren
      byId.set(parentId, {
        ...parent,
        childrenCount,
        childrenLoaded: fullyLoaded || parent.childrenLoaded,
      })
      if (fullyLoaded) loadedParents.add(parentId)
    }
  }
}

export function useDataCollectionTreeData<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: GraphSource<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >,
  options: GraphVisualizationOptions<R, Filters, Sortings>,
  callbacks: {
    onLoadData: OnLoadDataCallback<R, Filters>
    onLoadError: OnLoadErrorCallback
  }
): UseDataCollectionTreeData<R> {
  const sourceRef = useRef(source)
  sourceRef.current = source
  const optionsRef = useRef(options)
  optionsRef.current = options
  const callbacksRef = useRef(callbacks)
  callbacksRef.current = callbacks

  const [nodes, setNodes] = useState<GraphNode<R>[]>([])
  const nodesRef = useRef<GraphNode<R>[]>([])
  nodesRef.current = nodes

  const [expandedNodes, setExpandedState] = useState<Set<string>>(new Set())
  const expandedNodesRef = useRef<Set<string>>(expandedNodes)
  expandedNodesRef.current = expandedNodes
  const [focusedNode, setFocusedNode] = useState<string | undefined>(undefined)
  const [highlightedNodes, setHighlightedNodes] = useState<Set<string>>(
    new Set()
  )
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [error, setError] = useState<DataError | null>(null)

  const loadedParents = useRef<Set<string>>(new Set())

  const getId = useCallback((record: R): string => {
    const opts = optionsRef.current
    return opts.getNodeId
      ? opts.getNodeId(record)
      : String((record as RecordType).id)
  }, [])

  const toNode = useCallback(
    (record: R, parentId: string | null): GraphNode<R> => ({
      id: getId(record),
      parentId,
      data: record,
      childrenCount: optionsRef.current.getChildrenCount(record),
      childrenLoaded: false,
      // Two-phase hydration: mark unhydrated so F0Graph surfaces `dataLoading`.
      // `undefined` (not `false`) when the feature is off keeps the flag absent.
      dataLoaded: optionsRef.current.loadNodeData ? false : undefined,
    }),
    [getId]
  )

  const fetchRecords = useCallback(
    async (extraFilters: Partial<FiltersState<Filters>>): Promise<R[]> => {
      const src = sourceRef.current
      const adapter = src.dataAdapter
      const sortings: SortingsStateMultiple = src.currentSortings
        ? [
            {
              field: String(src.currentSortings.field),
              order: src.currentSortings.order,
            },
          ]
        : []
      const base = {
        filters: { ...src.currentFilters, ...extraFilters },
        sortings,
        navigationFilters: src.currentNavigationFilters,
      }
      // `adapter.perPage` may be `"auto"` (height-based sizing), which doesn't
      // apply to the tree/graph fetch — fall back to the default page size.
      const perPage =
        "perPage" in adapter && typeof adapter.perPage === "number"
          ? adapter.perPage
          : DEFAULT_TREE_PER_PAGE

      if (adapter.paginationType === undefined) {
        return resolveFetchResult<R>(adapter.fetchData(base))
      }
      if (adapter.paginationType === "pages") {
        return resolveFetchResult<R>(
          adapter.fetchData({
            ...base,
            pagination: { currentPage: 1, perPage },
          })
        )
      }
      if (adapter.paginationType === "infinite-scroll") {
        return resolveFetchResult<R>(
          adapter.fetchData({ ...base, pagination: { cursor: null, perPage } })
        )
      }
      return resolveFetchResult<R>(
        adapter.fetchData({ ...base, pagination: {} })
      )
    },
    []
  )

  /** Loads (once) and merges the direct children of `nodeId`; returns them. */
  const loadChildrenOf = useCallback(
    async (nodeId: string): Promise<GraphNode<R>[]> => {
      if (loadedParents.current.has(nodeId)) {
        return nodesRef.current.filter((node) => node.parentId === nodeId)
      }
      loadedParents.current.add(nodeId)
      try {
        const records = await fetchRecords(
          optionsRef.current.childrenFilters(nodeId)
        )
        const children = records.map((record) => toNode(record, nodeId))
        setNodes((prev) => mergeChildren(prev, children, nodeId))
        return children
      } catch (cause) {
        loadedParents.current.delete(nodeId)
        const dataError = toDataError(cause)
        setError(dataError)
        callbacksRef.current.onLoadError(dataError)
        return []
      }
    },
    [fetchRecords, toNode]
  )

  /**
   * Ensures the direct children of every *expanded* node are loaded, so their
   * children render. Collapsed nodes need no loading: F0Graph draws their
   * expander affordance from `childrenCount` alone, so there is no "one level
   * ahead" pre-loading — expanding a node with N children is a single fetch,
   * not 1 + N. Walks down only through expanded nodes (the expanded set is
   * always a connected subtree from the roots) and reads the children returned
   * by `loadChildrenOf` so it never depends on React committing state between
   * awaits. Already-loaded parents short-circuit, so re-applying the same
   * expansion does not refetch. The loop reassigns `frontier` each pass but is
   * guaranteed to terminate: every pass only descends into ids never seen
   * before (the `seen` guard), so the walk is bounded by the size of the
   * expanded set even if the data ever contained a parent cycle.
   */
  const ensureFrontierLoaded = useCallback(
    async (expanded: Set<string>): Promise<void> => {
      let frontier = nodesRef.current.filter(
        (node) =>
          node.parentId === null && expanded.has(node.id) && hasChildren(node)
      )
      const seen = new Set<string>()

      while (frontier.length > 0) {
        const loadable = frontier.filter((node) => !seen.has(node.id))
        loadable.forEach((node) => seen.add(node.id))
        if (loadable.length === 0) break

        const results = await Promise.all(
          loadable.map((node) =>
            loadChildrenOf(node.id).then((children) => ({ children }))
          )
        )

        // Descend only into children that are themselves expanded — their
        // children become visible and so must be loaded too.
        const next: GraphNode<R>[] = []
        for (const { children } of results) {
          for (const child of children) {
            if (expanded.has(child.id) && hasChildren(child)) {
              next.push(child)
            }
          }
        }
        frontier = next
      }
    },
    [loadChildrenOf]
  )

  const setExpandedNodes = useCallback(
    (next: Set<string>) => {
      setExpandedState(next)
      void ensureFrontierLoaded(next)
    },
    [ensureFrontierLoaded]
  )

  // Resolve+merge a node's ancestor path and load the chain's children so the
  // node exists in the tree, then return the ancestor ids to expand. Shared by
  // `revealNode` (which also focuses/highlights) and the initial `focusOnEntry`
  // pre-resolution (which only needs the node present + expanded).
  const resolvePath = useCallback(
    async (nodeId: string): Promise<string[]> => {
      const opts = optionsRef.current
      const pathRecords = opts.loadNodePath
        ? await opts.loadNodePath(nodeId)
        : []
      if (pathRecords.length > 0) {
        setNodes((prev) => {
          const existing = new Set(prev.map((node) => node.id))
          const additions = pathRecords
            .filter((record) => !existing.has(getId(record)))
            .map((record, index) => {
              const parentId = opts.getParentId
                ? opts.getParentId(record)
                : index > 0
                  ? getId(pathRecords[index - 1])
                  : null
              return toNode(record, parentId)
            })
          return additions.length > 0 ? [...prev, ...additions] : prev
        })
      }

      const ancestorIds = pathRecords.map(getId).filter((id) => id !== nodeId)

      // Connect the chain and load the node's own children (for its expander).
      await Promise.all(
        [...ancestorIds, nodeId].map((id) => loadChildrenOf(id))
      )

      return ancestorIds
    },
    [getId, toNode, loadChildrenOf]
  )

  const revealNode = useCallback(
    async (nodeId: string): Promise<void> => {
      try {
        const ancestorIds = await resolvePath(nodeId)
        setExpandedNodes(new Set([...expandedNodesRef.current, ...ancestorIds]))
        setFocusedNode(nodeId)
        setHighlightedNodes(new Set([nodeId]))
      } catch (cause) {
        const dataError = toDataError(cause)
        setError(dataError)
        callbacksRef.current.onLoadError(dataError)
      }
    },
    [resolvePath, setExpandedNodes]
  )

  // Drop the centered/highlighted node (e.g. when the user clicks the empty
  // canvas) so the reveal highlight from search / "find me" doesn't linger.
  const clearFocus = useCallback(() => {
    setFocusedNode(undefined)
    setHighlightedNodes(new Set())
  }, [])

  // Two-phase hydration: F0Graph calls this (already debounced + batched +
  // deduped per id by its own useViewportDataLoader) with the ids on screen.
  // We fetch the full records for the still-unhydrated ones and merge them in;
  // the hook owns `nodes`, so it must be the one to merge and re-render.
  const loadVisibleNodeData = useCallback(
    (ids: string[]) => {
      const loader = optionsRef.current.loadNodeData
      if (!loader) return
      const byId = new Map(nodesRef.current.map((node) => [node.id, node]))
      const wanted = ids.filter((id) => byId.get(id)?.dataLoaded === false)
      if (wanted.length === 0) return
      loader(wanted)
        .then((records) => {
          const hydrated = new Map(
            records.map((record) => [getId(record), record])
          )
          setNodes((prev) => mergeHydratedData(prev, hydrated))
        })
        .catch((cause) => {
          const dataError = toDataError(cause)
          setError(dataError)
          callbacksRef.current.onLoadError(dataError)
        })
    },
    [getId]
  )

  // Apply a targeted `liveUpdate` batch to the loaded tree in place: refresh /
  // insert `upsert` records (matched by id, re-parenting via getParentId) and
  // drop `remove` ids with their descendants — all WITHOUT re-fetching or
  // collapsing. Expansion and viewport are preserved; only removed ids leave the
  // expanded set. The structure of the parents whose child set is touched by the
  // batch (old/new parent of a move, parent of a removal) is reconciled locally
  // — the caller only needs to send the records that changed, not their parents.
  const applyLiveUpdate = useCallback(
    (upsert: R[], remove: string[]): void => {
      if (upsert.length === 0 && remove.length === 0) return
      const opts = optionsRef.current

      setNodes((prev) => {
        const byId = new Map(prev.map((node) => [node.id, node]))
        // Ids dropped from the tree this batch — pruned from the expanded set.
        const removedIds = new Set<string>()
        // Parents whose child set changed — their childrenCount/childrenLoaded
        // are reconciled at the end so expanders/spinners stay consistent.
        const touchedParents = new Set<string>()

        // Drops the subtrees rooted at `ids`, recording the parents that lose
        // children and the removed ids (for expansion pruning below).
        const dropSubtrees = (ids: string[]): void => {
          for (const id of collectSubtreeIds(ids, byId)) {
            const parentId = byId.get(id)?.parentId
            if (parentId != null) touchedParents.add(parentId)
            byId.delete(id)
            loadedParents.current.delete(id)
            removedIds.add(id)
          }
        }

        // 1) Explicit removals, cascading to descendants.
        dropSubtrees(remove)

        // 2) Upserts: refresh existing nodes (data + structure, re-parenting)
        //    and insert new ones.
        applyUpsertRecords({
          records: upsert,
          byId,
          touchedParents,
          getId,
          getParentId: opts.getParentId,
          getChildrenCount: opts.getChildrenCount,
          hydrates: Boolean(opts.loadNodeData),
        })

        // 3) Prune nodes left unattachable (parent not in the loaded tree): a
        //    record inserted or re-parented under a not-yet-loaded parent leaves
        //    the tree (with its descendants) and reappears when that parent is
        //    expanded. Without this, a dangling parentId would be promoted to a
        //    floating root by the tree builder.
        dropSubtrees(findUnattachedIds(byId))

        // 4) Reconcile the structure of the parents whose child set changed.
        reconcileTouchedParents(byId, touchedParents, loadedParents.current)

        // 5) Removed ids leave the expanded set.
        if (removedIds.size > 0) {
          const currentExpanded = expandedNodesRef.current
          const nextExpanded = new Set(
            [...currentExpanded].filter((id) => !removedIds.has(id))
          )
          if (nextExpanded.size !== currentExpanded.size)
            setExpandedState(nextExpanded)
        }

        // Preserve prior order for survivors; append any newly inserted nodes.
        const survivors = prev
          .map((node) => byId.get(node.id))
          .filter((node): node is GraphNode<R> => Boolean(node))
        const survivorIds = new Set(survivors.map((node) => node.id))
        const additions = [...byId.values()].filter(
          (node) => !survivorIds.has(node.id)
        )
        return [...survivors, ...additions]
      })
    },
    [getId]
  )

  const loadInitial = useCallback(async (): Promise<void> => {
    setIsInitialLoading(true)
    setError(null)
    setNodes([])
    nodesRef.current = []
    loadedParents.current = new Set()
    try {
      // Number of levels expanded by default. We only load the children of the
      // nodes we actually expand — the children of the deepest expanded level
      // render an expander from their `childrenCount`, so there is no need to
      // pre-load one level beyond (which would fan out into one fetch per node).
      const depth = Math.max(0, optionsRef.current.defaultExpandDepth ?? 1)
      const records = await fetchRecords(
        optionsRef.current.childrenFilters(null)
      )
      const roots = records.map((record) => toNode(record, null))
      setNodes(roots)
      nodesRef.current = roots

      const expanded = new Set<string>()
      let frontier = roots
      for (let level = 0; level < depth && frontier.length > 0; level++) {
        const loadable = frontier.filter(hasChildren)
        if (loadable.length === 0) break

        const childArrays = await Promise.all(
          loadable.map((node) => loadChildrenOf(node.id))
        )
        loadable.forEach((node) => expanded.add(node.id))
        frontier = loadable.flatMap((_, index) => childArrays[index])
      }

      // Focus-on-entry: pre-resolve the target's ancestor path and expand it now,
      // BEFORE the first paint, so the node exists in the layout and F0Graph can
      // open framed on it (via `initialFocusNodeId`) with no fit-then-pan. No
      // focus/highlight is set here — the initial viewport does the centering.
      // On failure we skip silently → F0Graph falls back to fit-to-all.
      const focusOnEntry = optionsRef.current.focusOnEntry
      if (focusOnEntry && optionsRef.current.loadNodePath) {
        try {
          const ancestorIds = await resolvePath(focusOnEntry)
          for (const id of ancestorIds) expanded.add(id)
        } catch {
          // Ignore — fall back to the default fit-to-all initial view.
        }
      }

      setExpandedState(expanded)

      callbacksRef.current.onLoadData({
        totalItems: roots.length,
        filters: sourceRef.current.currentFilters,
        search: sourceRef.current.currentSearch,
        isInitialLoading: false,
        data: roots.map((root) => root.data),
      })
    } catch (cause) {
      const dataError = toDataError(cause)
      setError(dataError)
      callbacksRef.current.onLoadError(dataError)
    } finally {
      setIsInitialLoading(false)
    }
  }, [fetchRecords, toNode, loadChildrenOf, resolvePath])

  const filtersKey = JSON.stringify(source.currentFilters)
  const navigationFiltersKey = JSON.stringify(source.currentNavigationFilters)

  useEffect(() => {
    void loadInitial()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload only when filters/navigation change, keyed by their serialized value
  }, [filtersKey, navigationFiltersKey, loadInitial])

  // Apply a `liveUpdate` batch once per new `version`, in place (no reset). The
  // version dedups against re-renders; the initial value is adopted as already
  // applied so mounting never fires a spurious batch.
  const liveUpdateVersion = options.liveUpdate?.version
  const lastLiveUpdateVersionRef = useRef<number | undefined>(liveUpdateVersion)
  useEffect(() => {
    const liveUpdate = optionsRef.current.liveUpdate
    if (!liveUpdate || liveUpdate.version === lastLiveUpdateVersionRef.current)
      return
    lastLiveUpdateVersionRef.current = liveUpdate.version
    applyLiveUpdate(liveUpdate.upsert ?? [], liveUpdate.remove ?? [])
  }, [liveUpdateVersion, applyLiveUpdate])

  return {
    nodes,
    expandedNodes,
    setExpandedNodes,
    focusedNode,
    highlightedNodes,
    revealNode,
    clearFocus,
    loadVisibleNodeData: options.loadNodeData ? loadVisibleNodeData : undefined,
    isInitialLoading,
    error,
  }
}
