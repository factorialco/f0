import { RefObject, useEffect } from "react"

import { useReducedMotion } from "@/lib/a11y"

import { findScrollContainer } from "../lib/scroll"

type UseScrollToFocusedColumnOptions = {
  /** The `scrollToFocusedColumn` visualization option. */
  enabled: boolean
  /** Id of the focused column, if a visible column is focused. */
  focusedColumnId: string | undefined
  /**
   * Width covered by the frozen columns (and the selection column), so the
   * focused column is not scrolled under them.
   */
  stickyOffset: number
  /** False while the table still renders its initial-loading skeleton. */
  ready: boolean
}

/**
 * Scrolls the table's horizontal scroll container to the focused column, once
 * the table has rendered — and again if the focused column changes. Focused
 * header cells carry a `data-focused` marker; the leftmost one wins, so a
 * focused header group (where every column carries the marker) scrolls to the
 * group's start.
 */
export const useScrollToFocusedColumn = (
  containerRef: RefObject<HTMLDivElement | null>,
  {
    enabled,
    focusedColumnId,
    stickyOffset,
    ready,
  }: UseScrollToFocusedColumnOptions
) => {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!enabled || !focusedColumnId || !ready) return

    const container = containerRef.current
    if (!container) return

    const markers = Array.from(
      container.querySelectorAll<HTMLElement>("th[data-focused]")
    )
    if (markers.length === 0) return
    const target = markers.reduce((leftmost, marker) =>
      marker.offsetLeft < leftmost.offsetLeft ? marker : leftmost
    )

    const scrollContainer = findScrollContainer(target)
    if (!scrollContainer) return

    const left = Math.max(0, target.offsetLeft - stickyOffset)

    if (typeof scrollContainer.scrollTo === "function") {
      scrollContainer.scrollTo({
        left,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      })
    } else {
      // jsdom implements scrollLeft but not scrollTo
      scrollContainer.scrollLeft = left
    }
  }, [
    enabled,
    focusedColumnId,
    stickyOffset,
    ready,
    containerRef,
    shouldReduceMotion,
  ])
}
