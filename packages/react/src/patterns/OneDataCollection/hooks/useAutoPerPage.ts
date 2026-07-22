import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * Upper bound for the resolved page size, so a very tall container never
 * fetches an unreasonably large page.
 */
export const AUTO_PER_PAGE_MAX = 30

/**
 * Number of rows the min-height reservation keeps space for (see
 * `getAutoPerPageMinHeight`). This is NOT a lower bound on the page size — the
 * page size always matches what actually fits, so it never overflows. It only
 * sizes the space a squeezed collection reserves to stay usable.
 */
export const AUTO_PER_PAGE_MIN_RESERVED_ROWS = 10

/**
 * Row-height estimates used to seed the FIRST page in `perPage: "auto"` mode.
 * The real page size is then derived by measuring the rendered content (see
 * `useAutoPerPage`).
 *
 * These MUST be a lower bound of the real row height: the measurement only
 * trims the seeded page down to what fits, never grows it, so an estimate above
 * the real height would under-fetch and leave the collection short. A view with
 * a fixed row height can seed with that exact height (first page is already
 * right, nothing reflows); content-variable views seed at the baseline and let
 * the measurement trim.
 *
 * - `default` (table, editable table) — the baseline min row height. Their real
 *   height depends on column content (wrapping text, inline controls), so they
 *   seed low and rely on the measurement to trim.
 * - `list` — list rows are a fixed height (`min-h-[64px]`, ~68px rendered).
 */
export const ESTIMATED_ROW_HEIGHT = 48
export const ESTIMATED_LIST_ROW_HEIGHT = 68

/**
 * Vertical space inside the visualization container that is not available for
 * rows: the sticky table header (~40px), the pagination footer (~52px) and the
 * gap between them (16px).
 */
const RESERVED_CHROME_HEIGHT = 108

// The page size is whatever fits, never forced up (which would overflow), only
// bounded to at least 1 row and at most AUTO_PER_PAGE_MAX.
const clampPerPage = (value: number): number =>
  Math.min(AUTO_PER_PAGE_MAX, Math.max(1, value))

/**
 * Minimum height a `perPage: "auto"` collection reserves so it stays usable
 * (space for AUTO_PER_PAGE_MIN_RESERVED_ROWS rows plus chrome). Applied as a
 * `min-height` so the collection stays visible when its siblings would
 * otherwise squeeze it to nothing — the whole page scrolls instead of the
 * collection disappearing.
 */
export function getAutoPerPageMinHeight(
  rowHeight: number = ESTIMATED_ROW_HEIGHT
): number {
  return RESERVED_CHROME_HEIGHT + AUTO_PER_PAGE_MIN_RESERVED_ROWS * rowHeight
}

/**
 * Finds the scrollable element inside the visualization container (the table /
 * list / card scroll area), preferring the one holding the most content.
 */
function findScrollContainer(container: HTMLElement): HTMLElement | null {
  const candidates = Array.from(
    container.querySelectorAll<HTMLElement>("*")
  ).filter((el) => {
    const overflowY = getComputedStyle(el).overflowY
    return overflowY === "auto" || overflowY === "scroll"
  })
  if (candidates.length === 0) return null
  return candidates.reduce((tallest, el) =>
    el.scrollHeight > tallest.scrollHeight ? el : tallest
  )
}

/**
 * Resolves `perPage: "auto"` so a page fills the available vertical space
 * without overflowing.
 *
 * How it works: an estimate seeds the first page so the visualization renders,
 * then — once `ready` (the first fetch has resolved) — the real page size is
 * derived by measuring the rendered content. Comparing the scroll container's
 * visible height to its total content height yields the exact number of items
 * that fit, independent of the visualization's row height or column count:
 *
 *   itemsThatFit = seedPerPage × clientHeight / scrollHeight
 *
 * This works for tables, lists and (multi-column) card grids alike, because a
 * grid's total height already reflects its columns. The result is exactly what
 * fits (never forced higher, so a page never overflows), bounded to at most
 * AUTO_PER_PAGE_MAX. A squeezed collection stays usable via the min-height
 * reservation (see `getAutoPerPageMinHeight`), not by inflating the page size.
 *
 * The size is measured once per visualization and kept stable across resizes:
 * resizing must not shift page boundaries under the user (an item would jump
 * between pages) nor trigger refetch churn while dragging a window edge. It is
 * re-derived when `rowHeight` changes, i.e. when the active visualization
 * switches to one with a different row height.
 *
 * Requires a height-bounded container (the collection's `fullHeight` mode).
 * In an unbounded container the measured height would derive from the content
 * itself, creating a feedback loop — callers must not enable the hook there.
 *
 * @param containerRef the visualization container to measure
 * @param enabled whether `perPage: "auto"` is active
 * @param options.rowHeight per-visualization seed estimate
 * @param options.ready `true` once the first page of data has rendered and can
 *   be measured
 * @param options.measureKey re-seeds and re-measures whenever it changes (e.g.
 *   the active visualization), since each visualization has its own row layout
 * @returns the resolved page size, or `undefined` until seeded (or disabled)
 */
export function useAutoPerPage(
  containerRef: RefObject<HTMLElement | null>,
  enabled: boolean,
  {
    rowHeight = ESTIMATED_ROW_HEIGHT,
    ready = true,
    measureKey,
  }: {
    rowHeight?: number
    ready?: boolean
    measureKey?: unknown
  } = {}
): number | undefined {
  const [perPage, setPerPage] = useState<number | undefined>(undefined)
  const seedRef = useRef<number | undefined>(undefined)
  const measuredRef = useRef(false)

  // 1. Seed the first page from the estimate so the visualization mounts and
  //    renders something we can measure. Re-seeds when the visualization
  //    changes (measureKey); intentionally NOT on container resize.
  useLayoutEffect(() => {
    if (!enabled) {
      setPerPage(undefined)
      seedRef.current = undefined
      measuredRef.current = false
      return
    }
    const container = containerRef.current
    if (!container) return

    const available = container.clientHeight - RESERVED_CHROME_HEIGHT
    const seed = clampPerPage(Math.floor(available / rowHeight))
    seedRef.current = seed
    measuredRef.current = false
    setPerPage(seed)
  }, [enabled, rowHeight, measureKey, containerRef])

  // 2. Once the first page has rendered, measure the real content and correct
  //    the page size to what actually fits — exactly once per seed. The
  //    container and seed are read inside the timeout (rather than the effect
  //    body) so the measurement survives mount churn: the ref is reliably
  //    attached and laid out by the time it runs.
  useEffect(() => {
    if (!enabled || !ready || measuredRef.current) return

    // A timeout (not requestAnimationFrame, which is paused in background
    // tabs) lets layout settle after the first page renders, then measures.
    const timer = setTimeout(() => {
      const container = containerRef.current
      const seed = seedRef.current
      if (!container || seed === undefined || measuredRef.current) return
      const scroller = findScrollContainer(container)
      if (
        !scroller ||
        scroller.clientHeight === 0 ||
        scroller.scrollHeight === 0
      )
        return
      measuredRef.current = true
      const fit = clampPerPage(
        Math.floor((seed * scroller.clientHeight) / scroller.scrollHeight)
      )
      setPerPage((prev) => (prev === fit ? prev : fit))
    }, 0)
    return () => clearTimeout(timer)
  }, [enabled, ready, perPage, measureKey, containerRef])

  return enabled ? perPage : undefined
}
