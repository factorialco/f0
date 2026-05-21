import { useEffect, useMemo, useRef, useState } from "react"

import type {
  DeferredNodesPayload,
  DeferredStatus,
  GraphEdge,
  GraphNode,
} from "../types"

interface UseDeferredMergeOptions<T> {
  initialNodes: GraphNode<T>[]
  initialEdges: GraphEdge[]
  deferredNodes?:
    | Promise<DeferredNodesPayload<T>>
    | (() => Promise<DeferredNodesPayload<T>>)
}

interface UseDeferredMergeResult<T> {
  mergedNodes: GraphNode<T>[]
  mergedEdges: GraphEdge[]
  deferredStatus: DeferredStatus
  error: Error | null
}

/**
 * Merges an initial set of nodes/edges with a deferred (Promise-based)
 * second batch. Dedup by `id`; deferred wins on conflict. Appends new
 * entries. Safe against unmount races and stale closures.
 */
export function useDeferredMerge<T>(
  options: UseDeferredMergeOptions<T>
): UseDeferredMergeResult<T> {
  const { initialNodes, initialEdges, deferredNodes } = options

  const [deferredPayload, setDeferredPayload] =
    useState<DeferredNodesPayload<T> | null>(null)
  const [deferredStatus, setDeferredStatus] = useState<DeferredStatus>(
    deferredNodes ? "loading" : "idle"
  )
  const [error, setError] = useState<Error | null>(null)

  // Track the current deferred source identity to discard stale results.
  const deferredRef = useRef(deferredNodes)
  const mountedRef = useRef(true)

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    // Reset when deferredNodes identity changes (or becomes undefined).
    deferredRef.current = deferredNodes

    if (!deferredNodes) {
      setDeferredStatus("idle")
      setDeferredPayload(null)
      setError(null)
      return
    }

    setDeferredStatus("loading")
    setError(null)
    setDeferredPayload(null)

    // Resolve: thunk → invoke; raw Promise → use directly.
    const promise =
      typeof deferredNodes === "function" ? deferredNodes() : deferredNodes

    // Capture current identity for staleness check.
    const capturedRef = deferredNodes

    promise.then(
      (payload) => {
        if (!mountedRef.current) return
        if (deferredRef.current !== capturedRef) return // stale
        setDeferredPayload(payload)
        setDeferredStatus("resolved")
      },
      (err: unknown) => {
        if (!mountedRef.current) return
        if (deferredRef.current !== capturedRef) return // stale
        setError(err instanceof Error ? err : new Error(String(err)))
        setDeferredStatus("error")
      }
    )
  }, [deferredNodes])

  // Stable merge: dedup by id, deferred wins on conflict, append new.
  const mergedNodes = useMemo(
    () => mergeNodes(initialNodes, deferredPayload?.nodes),
    [initialNodes, deferredPayload]
  )
  const mergedEdges = useMemo(
    () => mergeEdges(initialEdges, deferredPayload?.edges),
    [initialEdges, deferredPayload]
  )

  return { mergedNodes, mergedEdges, deferredStatus, error }
}

// ─── Pure merge helpers ────────────────────────────────────────

function mergeNodes<T>(
  initial: GraphNode<T>[],
  deferred: GraphNode<T>[] | undefined
): GraphNode<T>[] {
  if (!deferred || deferred.length === 0) return initial

  const merged = new Map<string, GraphNode<T>>()
  for (const node of initial) {
    merged.set(node.id, node)
  }
  // Deferred wins on conflict (overwrites by id).
  for (const node of deferred) {
    merged.set(node.id, node)
  }
  return Array.from(merged.values())
}

function mergeEdges(
  initial: GraphEdge[],
  deferred: GraphEdge[] | undefined
): GraphEdge[] {
  if (!deferred || deferred.length === 0) return initial

  const merged = new Map<string, GraphEdge>()
  for (const edge of initial) {
    merged.set(edge.id, edge)
  }
  for (const edge of deferred) {
    merged.set(edge.id, edge)
  }
  return Array.from(merged.values())
}
