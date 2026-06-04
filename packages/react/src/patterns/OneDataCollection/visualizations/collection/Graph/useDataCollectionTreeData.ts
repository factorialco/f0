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
   * Walks the tree from the roots and ensures the children of every *visible*
   * node are loaded — i.e. roots plus the descendants of expanded nodes. This
   * keeps the "one level ahead" invariant so collapsed-but-visible nodes render
   * an expander (F0Graph only draws it for parents that have loaded children).
   */
  const ensureFrontierLoaded = useCallback(
    async (expanded: Set<string>): Promise<void> => {
      let frontier = nodesRef.current.filter((node) => node.parentId === null)
      const seen = new Set<string>()

      while (frontier.length > 0) {
        const loadable = frontier.filter(
          (node) => hasChildren(node) && !seen.has(node.id)
        )
        loadable.forEach((node) => seen.add(node.id))
        if (loadable.length === 0) break

        const results = await Promise.all(
          loadable.map((node) =>
            loadChildrenOf(node.id).then((children) => ({ node, children }))
          )
        )

        const next: GraphNode<R>[] = []
        for (const { node, children } of results) {
          // Only descend into expanded nodes — their children become visible
          // and therefore need their own children pre-loaded.
          if (expanded.has(node.id)) {
            next.push(...children)
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

  const loadInitial = useCallback(async (): Promise<void> => {
    setIsInitialLoading(true)
    setError(null)
    setNodes([])
    nodesRef.current = []
    loadedParents.current = new Set()
    try {
      // Number of levels expanded by default. The children of the deepest
      // expanded level are still loaded (one level ahead) so they show expanders.
      const depth = Math.max(0, optionsRef.current.defaultExpandDepth ?? 1)
      const records = await fetchRecords(
        optionsRef.current.childrenFilters(null)
      )
      const roots = records.map((record) => toNode(record, null))
      setNodes(roots)
      nodesRef.current = roots

      const expanded = new Set<string>()
      let frontier = roots
      for (let level = 0; frontier.length > 0; level++) {
        const loadable = frontier.filter(hasChildren)
        if (loadable.length === 0) break

        const childArrays = await Promise.all(
          loadable.map((node) => loadChildrenOf(node.id))
        )
        if (level < depth) {
          loadable.forEach((node) => expanded.add(node.id))
          frontier = loadable.flatMap((_, index) => childArrays[index])
        } else {
          // Children of the deepest expanded level are loaded; stop here.
          frontier = []
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
  }, [fetchRecords, toNode, loadChildrenOf])

  const filtersKey = JSON.stringify(source.currentFilters)
  const navigationFiltersKey = JSON.stringify(source.currentNavigationFilters)

  useEffect(() => {
    void loadInitial()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload only when filters/navigation change, keyed by their serialized value
  }, [filtersKey, navigationFiltersKey, loadInitial])

  return {
    nodes,
    expandedNodes,
    setExpandedNodes,
    focusedNode,
    highlightedNodes,
    revealNode,
    clearFocus,
    isInitialLoading,
    error,
  }
}
