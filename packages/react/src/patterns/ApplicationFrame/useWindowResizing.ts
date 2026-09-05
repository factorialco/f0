import { useEffect, useState } from "react"

import { LAYOUT_SETTLE_MS } from "./layoutTransition"

/**
 * True while the user is dragging the browser window's edge.
 *
 * Deliberately fed by `window.resize` ALONE, and not by the frame's own
 * measurement. The frame changes width for two very different reasons and only
 * one of them is a gesture: the sidebar collapsing takes 240px out of it, and
 * that is an animation *we* are playing. When a ResizeObserver on the frame
 * raised this flag — as it used to — every layout that reads it went instant
 * for the duration of the very animation it was supposed to be easing.
 *
 * That case is not hypothetical: opening a right-docked panel floats the
 * sidebar, so the frame's width changes on the single movement it matters most
 * to get right.
 *
 * The settle window is what turns a stream of `resize` events into one
 * gesture — the flag drops only once the window has held still.
 */
export function useWindowResizing(
  settleMs: number = LAYOUT_SETTLE_MS
): boolean {
  const [isWindowResizing, setIsWindowResizing] = useState(false)

  useEffect(() => {
    let settleTimer = 0
    const onWindowResize = () => {
      setIsWindowResizing(true)
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(
        () => setIsWindowResizing(false),
        settleMs
      )
    }
    window.addEventListener("resize", onWindowResize)
    return () => {
      window.clearTimeout(settleTimer)
      window.removeEventListener("resize", onWindowResize)
    }
  }, [settleMs])

  return isWindowResizing
}
