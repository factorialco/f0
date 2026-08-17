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
  /**
   * Gate accumulation/flushing. Defaults to `true`. Pass `false` while the ids
   * don't yet represent the on-screen set — e.g. with node windowing, the very
   * first render (before the viewport settles) exposes *every* node, and
   * flushing then would request the whole tree instead of just what's visible.
   * Ids accumulate only from the render where this becomes `true`.
   */
  enabled?: boolean
}

/**
 * Viewport-driven data loading. Watches the on-screen node ids and, once the
 * camera settles for `debounceMs`, invokes `loadVisibleNodeData` with the ids
 * that newly entered the viewport. Each id is requested at most once for the
 * lifetime of the graph, and ids seen mid-pan accumulate into a single batch —
 * so a fast pan across the graph produces one settled fetch, not one per frame.
 *
 * Fly-over nodes are NOT hydrated: at flush time the batch is filtered to the
 * ids that are STILL on screen, so nodes the camera merely swept across during
 * an automatic navigation (or a fast user pan) — entering and leaving within
 * the debounce window — are dropped. Because the debounce is trailing, the
 * single flush lands after the camera settles, when the on-screen set is the
 * final resting viewport. Dropped ids are NOT marked as requested, so they stay
 * eligible to hydrate if the user later navigates to them.
 */
export function useViewportDataLoader({
  nodeIds,
  loadVisibleNodeData,
  debounceMs = DEFAULT_VISIBLE_DATA_DEBOUNCE_MS,
  enabled = true,
}: UseViewportDataLoaderOptions): void {
  // Ids already handed to the consumer (never re-requested).
  const requestedRef = useRef<Set<string>>(new Set())
  // Ids seen but not yet flushed (accumulates across pan frames).
  const pendingRef = useRef<Set<string>>(new Set())
  // Latest on-screen set, used at flush time to drop fly-over ids that have
  // already left the viewport (see the hook doc).
  const latestNodeIdsRef = useRef<Set<string>>(new Set())
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Latest callback, so the timer always calls the current prop.
  const callbackRef = useRef(loadVisibleNodeData)
  callbackRef.current = loadVisibleNodeData

  useEffect(() => {
    latestNodeIdsRef.current = new Set(nodeIds)

    if (!loadVisibleNodeData || !enabled) return

    let hasNew = false
    for (const id of nodeIds) {
      if (!requestedRef.current.has(id) && !pendingRef.current.has(id)) {
        pendingRef.current.add(id)
        hasNew = true
      }
    }
    if (pendingRef.current.size === 0) return

    // Trailing debounce: reset the timer while new ids keep arriving; otherwise
    // only (re)arm it when none is scheduled. That second case also recovers the
    // batch after StrictMode's mount→unmount→mount cancels the first timer (the
    // ids are already pending, so `hasNew` is false, but the timer is gone).
    // No cleanup here on purpose — an unrelated re-render must not cancel a
    // pending flush; unmount is handled by the effect below.
    if (!hasNew && timerRef.current !== null) return
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      // Drop fly-over ids that left the viewport before this flush; only the
      // ids still on screen are hydrated and marked requested. Dropped ids are
      // left in neither set, so they re-enter `pending` (and hydrate) if they
      // come back on screen later.
      const onScreen = latestNodeIdsRef.current
      const batch: string[] = []
      for (const id of pendingRef.current) {
        if (onScreen.has(id)) {
          batch.push(id)
          requestedRef.current.add(id)
        }
      }
      pendingRef.current.clear()
      if (batch.length > 0) callbackRef.current?.(batch)
    }, debounceMs)
  }, [nodeIds, loadVisibleNodeData, debounceMs, enabled])

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = null
    },
    []
  )
}
