import { useEffect, useRef } from "react"

import { DEFAULT_VISIBLE_DATA_DEBOUNCE_MS } from "../constants"

interface UseViewportDataLoaderOptions {
  /** Ids of the nodes currently materialized on screen. */
  nodeIds: string[]
  /**
   * Called (debounced) with the batch of ids that have entered the viewport
   * and not been requested before. Undefined disables the loader entirely.
   */
  loadVisibleNodeData?: (ids: string[]) => void
  /** Debounce before flushing a batch. Defaults to {@link DEFAULT_VISIBLE_DATA_DEBOUNCE_MS}. */
  debounceMs?: number
}

/**
 * Viewport-driven data loading. Watches the on-screen node ids and, once the
 * camera settles for `debounceMs`, invokes `loadVisibleNodeData` with the ids
 * that newly entered the viewport. Each id is requested at most once for the
 * lifetime of the graph, and ids seen mid-pan accumulate into a single batch —
 * so a fast pan across the graph produces one settled fetch, not one per frame.
 */
export function useViewportDataLoader({
  nodeIds,
  loadVisibleNodeData,
  debounceMs = DEFAULT_VISIBLE_DATA_DEBOUNCE_MS,
}: UseViewportDataLoaderOptions): void {
  // Ids already handed to the consumer (never re-requested).
  const requestedRef = useRef<Set<string>>(new Set())
  // Ids seen but not yet flushed (accumulates across pan frames).
  const pendingRef = useRef<Set<string>>(new Set())
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Latest callback, so the timer always calls the current prop.
  const callbackRef = useRef(loadVisibleNodeData)
  callbackRef.current = loadVisibleNodeData

  useEffect(() => {
    if (!loadVisibleNodeData) return

    let hasNew = false
    for (const id of nodeIds) {
      if (!requestedRef.current.has(id) && !pendingRef.current.has(id)) {
        pendingRef.current.add(id)
        hasNew = true
      }
    }
    if (!hasNew) return

    // Debounce: reschedule the flush while new ids keep arriving. No cleanup
    // here on purpose — an unrelated re-render must not cancel a pending flush;
    // unmount is handled by the effect below.
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      const batch = Array.from(pendingRef.current)
      pendingRef.current.clear()
      for (const id of batch) requestedRef.current.add(id)
      callbackRef.current?.(batch)
    }, debounceMs)
  }, [nodeIds, loadVisibleNodeData, debounceMs])

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    },
    []
  )
}
