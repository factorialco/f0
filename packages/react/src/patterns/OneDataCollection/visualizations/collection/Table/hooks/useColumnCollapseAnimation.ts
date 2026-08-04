import { RefObject, useLayoutEffect } from "react"

/** Kept in step with the durations below. */
export const COLLAPSE_ANIMATION_MS = 220

export type ColumnCollapseTransition = {
  groupId: string
  /** Marker class the animating cells of this group carry. */
  cellClass: string
  direction: "open" | "close"
}

/**
 * Drives the open/close of a header group's columns with the Web Animations
 * API, and reports each group as finished so the caller can drop the columns.
 *
 * Why not a CSS transition: closing works either way, but opening does not.
 * A transition needs a concrete value on both ends, and a reopening column is
 * heading for whatever width the table layout algorithm resolves — there is no
 * end value to interpolate towards, so it snaps. Measuring the natural width
 * first and animating to that pixel value is what makes the two directions
 * behave the same.
 *
 * The contents are faded on their own schedule rather than alongside the width:
 * out early when closing, in late when opening. Matching them to the width
 * leaves a sliver of clipped text riding the column, in both directions.
 */
export const useColumnCollapseAnimation = (
  containerRef: RefObject<HTMLElement | null>,
  transitions: ColumnCollapseTransition[],
  onGroupFinished: (groupId: string) => void,
  enabled = true
) => {
  useLayoutEffect(() => {
    if (transitions.length === 0) return

    const container = containerRef.current

    // No container, motion turned down, or no Web Animations API (jsdom, older
    // browsers): settle straight away so the collapse still happens, just
    // without the movement. The columns must never be left mid-flight.
    const canAnimate =
      !!container && enabled && typeof container.animate === "function"

    if (!canAnimate) {
      transitions.forEach(({ groupId }) => onGroupFinished(groupId))
      return
    }

    const animations: Animation[] = []
    const restores: Array<() => void> = []
    let cancelled = false

    transitions.forEach(({ groupId, cellClass, direction }) => {
      const cells = Array.from(
        container.querySelectorAll<HTMLElement>(`.${cellClass}`)
      )

      if (cells.length === 0) {
        onGroupFinished(groupId)
        return
      }

      const settled: Array<Promise<unknown>> = []

      cells.forEach((cell) => {
        // Measured before anything is touched: this is the width the table
        // resolved for the column, and the value the open direction needs.
        const width = cell.getBoundingClientRect().width
        const { paddingLeft, paddingRight } = getComputedStyle(cell)

        const previousOverflow = cell.style.overflow
        cell.style.overflow = "hidden"
        restores.push(() => {
          cell.style.overflow = previousOverflow
        })

        const shut = {
          width: "0px",
          minWidth: "0px",
          maxWidth: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }
        const open = {
          width: `${width}px`,
          minWidth: "0px",
          maxWidth: `${width}px`,
          paddingLeft,
          paddingRight,
        }
        const closing = direction === "close"

        const size = cell.animate(closing ? [open, shut] : [shut, open], {
          duration: COLLAPSE_ANIMATION_MS,
          easing: "ease-out",
          // Closing holds at zero until the columns are dropped; opening holds
          // at zero before it starts, so the natural width never flashes.
          fill: closing ? "forwards" : "backwards",
        })

        const fade = cell.animate(
          closing
            ? [{ opacity: 1 }, { opacity: 0 }]
            : [{ opacity: 0 }, { opacity: 1 }],
          closing
            ? { duration: 80, easing: "ease-out", fill: "forwards" }
            : {
                duration: 120,
                delay: 110,
                easing: "ease-out",
                fill: "backwards",
              }
        )

        animations.push(size, fade)
        settled.push(size.finished.catch(() => undefined))
      })

      Promise.all(settled).then(() => {
        if (!cancelled) onGroupFinished(groupId)
      })
    })

    return () => {
      cancelled = true
      animations.forEach((animation) => animation.cancel())
      restores.forEach((restore) => restore())
    }
  }, [transitions, containerRef, onGroupFinished, enabled])
}
