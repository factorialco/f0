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
  expandNode: (nodeId: string) => Promise<void>
  collapseNode: (nodeId: string) => void
  retryNode: (nodeId: string) => Promise<void>
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
    async (nodeId: string) => {
      // Already loaded — skip
      if (loadedParents.current.has(nodeId)) return

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
          return [...withoutOldChildren, ...enrichedChildren]
        })

        // Mark parent as loaded
        setAllNodes((prev) =>
          prev.map((n) =>
            n.id === nodeId ? { ...n, childrenLoaded: true } : n
          )
        )
      } catch (err) {
        setErrorNodes((prev) => {
          const next = new Map(prev)
          next.set(nodeId, err instanceof Error ? err : new Error(String(err)))
          return next
        })
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
    async (nodeId: string) => {
      await fetchChildren(nodeId)
    },
    [fetchChildren]
  )

  const collapseNode = useCallback((_nodeId: string) => {
    // Collapse is a UI concern — data is NOT evicted.
    // The expand/collapse state is managed by the parent F0Graph via expandedNodes.
  }, [])

  const retryNode = useCallback(
    async (nodeId: string) => {
      // Allow re-fetch by clearing the loaded flag
      loadedParents.current.delete(nodeId)
      await fetchChildren(nodeId)
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
