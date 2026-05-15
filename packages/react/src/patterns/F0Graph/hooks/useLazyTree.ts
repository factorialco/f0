import { useCallback, useEffect, useRef, useState } from "react"

import type { GraphNode } from "../types"

interface UseLazyTreeOptions<T> {
  rootNodes: GraphNode<T>[]
  loadChildren: (nodeId: string) => Promise<GraphNode<T>[]>
}

interface UseLazyTreeResult<T> {
  nodes: GraphNode<T>[]
  loadingNodes: Set<string>
  errorNodes: Map<string, Error>
  /**
   * Loads children for `nodeId` if they are not already cached. Returns the
   * freshly fetched children (or the previously cached ones, if any). The
   * returned array lets bulk callers (e.g. `expandAll`) cascade through the
   * tree without waiting for React to commit between awaits.
   */
  expandNode: (nodeId: string) => Promise<GraphNode<T>[]>
  collapseNode: (nodeId: string) => void
  retryNode: (nodeId: string) => Promise<GraphNode<T>[]>
}

export function useLazyTree<T>(
  options: UseLazyTreeOptions<T>
): UseLazyTreeResult<T> {
  const { rootNodes, loadChildren } = options

  // All loaded nodes (starts with roots, grows as children are fetched)
  const [allNodes, setAllNodes] = useState<GraphNode<T>[]>(() => rootNodes)
  const [loadingNodes, setLoadingNodes] = useState<Set<string>>(new Set())
  const [errorNodes, setErrorNodes] = useState<Map<string, Error>>(new Map())

  // Track which nodes have already been loaded to avoid duplicate fetches
  const loadedParents = useRef<Set<string>>(new Set())

  // Mirror `allNodes` so callers awaiting `expandNode` can read cached
  // children without waiting for a React commit.
  const allNodesRef = useRef<GraphNode<T>[]>(allNodes)
  useEffect(() => {
    allNodesRef.current = allNodes
  }, [allNodes])

  // Sync root nodes when they change externally (by id list)
  const prevRootIdsRef = useRef<string>(rootNodes.map((n) => n.id).join(","))

  useEffect(() => {
    const rootIds = rootNodes.map((n) => n.id).join(",")
    if (prevRootIdsRef.current !== rootIds) {
      prevRootIdsRef.current = rootIds
      setAllNodes((prev) => {
        const nonRootNodes = prev.filter(
          (n) => n.parentId !== null && !rootNodes.some((r) => r.id === n.id)
        )
        return [...rootNodes, ...nonRootNodes]
      })
    }
  }, [rootNodes])

  const fetchChildren = useCallback(
    async (nodeId: string): Promise<GraphNode<T>[]> => {
      // Already loaded — return cached children synchronously from `allNodes`.
      if (loadedParents.current.has(nodeId)) {
        return allNodesRef.current.filter((n) => n.parentId === nodeId)
      }

      setLoadingNodes((prev) => {
        const next = new Set(prev)
        next.add(nodeId)
        return next
      })

      // Clear any previous error for this node
      setErrorNodes((prev) => {
        if (!prev.has(nodeId)) return prev
        const next = new Map(prev)
        next.delete(nodeId)
        return next
      })

      try {
        const children = await loadChildren(nodeId)

        // Mark children with correct parentId and loaded flag
        const enrichedChildren: GraphNode<T>[] = children.map((child) => ({
          ...child,
          parentId: child.parentId ?? nodeId,
        }))

        loadedParents.current.add(nodeId)

        setAllNodes((prev) => {
          // Remove any stale children for this parent, then add fresh ones
          const withoutOldChildren = prev.filter(
            (n) => n.parentId !== nodeId || rootNodes.some((r) => r.id === n.id)
          )
          const merged = [...withoutOldChildren, ...enrichedChildren]
          // Mark parent as loaded in the same update
          return merged.map((n) =>
            n.id === nodeId ? { ...n, childrenLoaded: true } : n
          )
        })

        return enrichedChildren
      } catch (err) {
        setErrorNodes((prev) => {
          const next = new Map(prev)
          next.set(nodeId, err instanceof Error ? err : new Error(String(err)))
          return next
        })
        return []
      } finally {
        setLoadingNodes((prev) => {
          const next = new Set(prev)
          next.delete(nodeId)
          return next
        })
      }
    },
    [loadChildren, rootNodes]
  )

  const expandNode = useCallback(
    async (nodeId: string): Promise<GraphNode<T>[]> => {
      return await fetchChildren(nodeId)
    },
    [fetchChildren]
  )

  const collapseNode = useCallback((_nodeId: string) => {
    // Collapse is a UI concern — data is NOT evicted.
    // The expand/collapse state is managed by the parent F0Graph via expandedNodes.
  }, [])

  const retryNode = useCallback(
    async (nodeId: string): Promise<GraphNode<T>[]> => {
      // Allow re-fetch by clearing the loaded flag
      loadedParents.current.delete(nodeId)
      return await fetchChildren(nodeId)
    },
    [fetchChildren]
  )

  return {
    nodes: allNodes,
    loadingNodes,
    errorNodes,
    expandNode,
    collapseNode,
    retryNode,
  }
}
