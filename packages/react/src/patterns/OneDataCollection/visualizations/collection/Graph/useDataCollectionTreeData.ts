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
      const perPage =
        "perPage" in adapter && adapter.perPage
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
   * expansion does not refetch.
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

  const revealNode = useCallback(
    async (nodeId: string): Promise<void> => {
      const opts = optionsRef.current
      try {
        // Resolve and merge the ancestor path so the node exists in the tree.
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

        setExpandedNodes(new Set([...expandedNodesRef.current, ...ancestorIds]))
        setFocusedNode(nodeId)
        setHighlightedNodes(new Set([nodeId]))
      } catch (cause) {
        const dataError = toDataError(cause)
        setError(dataError)
        callbacksRef.current.onLoadError(dataError)
      }
    },
    [getId, toNode, loadChildrenOf, setExpandedNodes]
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
  // expanded set. Structure (childrenCount/parent) comes from the same accessors,
  // so callers must refresh those before bumping the batch version.
  const applyLiveUpdate = useCallback(
    (upsert: R[], remove: string[]): void => {
      if (upsert.length === 0 && remove.length === 0) return
      const opts = optionsRef.current

      setNodes((prev) => {
        const byId = new Map(prev.map((node) => [node.id, node]))

        // 1) Removals, cascading to descendants (BFS over the current parent links).
        if (remove.length > 0) {
          const childrenByParent = new Map<string, string[]>()
          for (const node of prev) {
            if (node.parentId === null) continue
            const siblings = childrenByParent.get(node.parentId) ?? []
            siblings.push(node.id)
            childrenByParent.set(node.parentId, siblings)
          }
          const removeSet = new Set<string>()
          const queue = [...remove]
          while (queue.length > 0) {
            const id = queue.shift() as string
            if (removeSet.has(id)) continue
            removeSet.add(id)
            for (const childId of childrenByParent.get(id) ?? [])
              queue.push(childId)
          }
          removeSet.forEach((id) => {
            byId.delete(id)
            loadedParents.current.delete(id)
          })
          const currentExpanded = expandedNodesRef.current
          const nextExpanded = new Set(
            [...currentExpanded].filter((id) => !removeSet.has(id))
          )
          if (nextExpanded.size !== currentExpanded.size)
            setExpandedState(nextExpanded)
        }

        // 2) Upserts: refresh existing nodes (data + structure, re-parenting) and
        //    insert new attachable ones (root, or parent already present).
        for (const record of upsert) {
          const id = getId(record)
          const existing = byId.get(id)
          const parentId = opts.getParentId
            ? opts.getParentId(record)
            : (existing?.parentId ?? null)
          const childrenCount = opts.getChildrenCount(record)
          if (existing) {
            byId.set(id, {
              ...existing,
              data: record,
              parentId,
              childrenCount,
              // We hold the full record now, so clear any hydration placeholder.
              dataLoaded: opts.loadNodeData ? true : existing.dataLoaded,
            })
          } else if (parentId === null || byId.has(parentId)) {
            byId.set(id, {
              id,
              parentId,
              data: record,
              childrenCount,
              childrenLoaded: false,
              dataLoaded: opts.loadNodeData ? true : undefined,
            })
          }
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
  }, [fetchRecords, toNode, loadChildrenOf])

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
