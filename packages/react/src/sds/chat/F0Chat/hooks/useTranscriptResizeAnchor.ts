import { type MutableRefObject, useCallback, useEffect, useRef } from "react"

/** How long the width must hold steady before the transcript re-anchors. */
export const RESIZE_SETTLE_MS = 120

/**
 * Watches the transcript viewport's WIDTH and reports when a resize starts and
 * settles.
 *
 * Nothing anchors scroll position across a width change: Virtuoso's layout
 * compensation only runs while `scrollDirection === "up"` (a resize is "down"
 * or "none"), and the browser's own fallback is off — the viewport, the measure
 * strip and Virtuoso's elements all set `overflow-anchor: none`. On top of that
 * Virtuoso re-measures ONLY the mounted rows, so everything above the overscan
 * keeps the previous width's heights and the offset tree stops describing the
 * reader's position. The caller uses this hook to freeze its derived state
 * while the width moves and to restore a captured anchor once it stops.
 *
 * Height-only changes are ignored on purpose: those are the composer growing
 * and the keyboard opening, which `followOutput` already owns.
 */
export function useTranscriptResizeAnchor({
  onSettled,
}: {
  /** Fired once, `RESIZE_SETTLE_MS` after the last width change. */
  onSettled: () => void
}): {
  /** Attach to the scroller element (null detaches). */
  observeResize: (element: HTMLElement | null) => void
  /** True from the first width change until the resize settles. */
  resizingRef: MutableRefObject<boolean>
} {
  const resizingRef = useRef(false)
  const widthRef = useRef<number | null>(null)
  const timerRef = useRef<number | null>(null)
  const observerRef = useRef<ResizeObserver | null>(null)

  const onSettledRef = useRef(onSettled)
  onSettledRef.current = onSettled

  const settle = useCallback(() => {
    timerRef.current = null
    if (!resizingRef.current) return
    resizingRef.current = false
    onSettledRef.current()
  }, [])

  const observeResize = useCallback(
    (element: HTMLElement | null) => {
      observerRef.current?.disconnect()
      observerRef.current = null
      if (timerRef.current != null) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
      resizingRef.current = false
      widthRef.current = element ? element.clientWidth : null

      if (!element || typeof ResizeObserver === "undefined") return

      const observer = new ResizeObserver(() => {
        const width = element.clientWidth
        if (width === widthRef.current) return
        widthRef.current = width
        resizingRef.current = true
        if (timerRef.current != null) window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(settle, RESIZE_SETTLE_MS)
      })
      observer.observe(element)
      observerRef.current = observer
    },
    [settle]
  )

  useEffect(
    () => () => {
      observerRef.current?.disconnect()
      observerRef.current = null
      if (timerRef.current != null) window.clearTimeout(timerRef.current)
    },
    []
  )

  return { observeResize, resizingRef }
}
