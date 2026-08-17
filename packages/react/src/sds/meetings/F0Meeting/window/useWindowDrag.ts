import { useCallback, useRef } from "react"

import { type F0Rect } from "../types"
import { clamp } from "../utils/aspect"
import { applyResize, type ResizeHandleId } from "./placement"
import {
  DRAG_THRESHOLD,
  WINDOW_MARGIN,
  WINDOW_MIN_HEIGHT,
  WINDOW_MIN_WIDTH,
} from "./window-constants"

type Gesture = {
  pointerId: number
  startX: number
  startY: number
  origin: F0Rect
  handle: ResizeHandleId | null
  latest: F0Rect
  /** A pointer-down only becomes a drag past `DRAG_THRESHOLD`. */
  moved: boolean
}

export type WindowGestureOptions = {
  /** The element to move. Written to directly — React is not involved. */
  elementRef: React.RefObject<HTMLElement | null>
  getRect: () => F0Rect
  onStart: () => void
  onSettle: (rect: F0Rect) => void
  onResize: (rect: F0Rect) => void
  enabled: boolean
}

const viewport = (): { width: number; height: number } => ({
  width: typeof window === "undefined" ? 0 : window.innerWidth,
  height: typeof window === "undefined" ? 0 : window.innerHeight,
})

/**
 * Drag and resize with Pointer Events and pointer capture.
 *
 * Capture (rather than listeners on `document`) is what keeps the gesture alive
 * when the pointer leaves the window or crosses an `<iframe>`, and it unifies
 * mouse, touch and pen without branching.
 *
 * While a gesture is running the rect is written STRAIGHT TO THE DOM inside a
 * single coalesced animation frame. Nothing is committed to React until the
 * pointer is released, so the 60fps of the drag is fully decoupled from the
 * runtime's own render rate — which, on a busy call, is around 100 per second.
 */
export const useWindowGestures = ({
  elementRef,
  getRect,
  onStart,
  onSettle,
  onResize,
  enabled,
}: WindowGestureOptions) => {
  const gestureRef = useRef<Gesture | null>(null)
  const frameRef = useRef(0)

  const paint = useCallback(
    (rect: F0Rect) => {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const element = elementRef.current
        if (!element) return
        element.style.left = `${rect.x}px`
        element.style.top = `${rect.y}px`
        element.style.width = `${rect.width}px`
        element.style.height = `${rect.height}px`
      })
    },
    [elementRef]
  )

  const begin = useCallback(
    (event: React.PointerEvent, handle: ResizeHandleId | null) => {
      if (!enabled || event.button !== 0) return
      if (
        handle === null &&
        (event.target as HTMLElement).closest("[data-f0-no-drag]")
      ) {
        return
      }

      const origin = getRect()
      gestureRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        origin,
        handle,
        latest: origin,
        moved: false,
      }
      event.currentTarget.setPointerCapture(event.pointerId)
      event.preventDefault()
    },
    [enabled, getRect]
  )

  const move = useCallback(
    (event: React.PointerEvent) => {
      const gesture = gestureRef.current
      if (!gesture || gesture.pointerId !== event.pointerId) return

      const deltaX = event.clientX - gesture.startX
      const deltaY = event.clientY - gesture.startY

      // A few pixels of slop tells a drag from a click, so a plain click on the
      // header cannot nudge the window.
      if (!gesture.moved) {
        if (Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) return
        gesture.moved = true
        onStart()
      }

      const view = viewport()

      const next =
        gesture.handle === null
          ? {
              ...gesture.origin,
              x: clamp(
                gesture.origin.x + deltaX,
                WINDOW_MARGIN,
                Math.max(
                  WINDOW_MARGIN,
                  view.width - gesture.origin.width - WINDOW_MARGIN
                )
              ),
              y: clamp(
                gesture.origin.y + deltaY,
                WINDOW_MARGIN,
                Math.max(
                  WINDOW_MARGIN,
                  view.height - gesture.origin.height - WINDOW_MARGIN
                )
              ),
            }
          : applyResize(
              gesture.origin,
              gesture.handle,
              deltaX,
              deltaY,
              view,
              WINDOW_MIN_WIDTH,
              WINDOW_MIN_HEIGHT
            )

      gesture.latest = next
      paint(next)
    },
    [paint, onStart]
  )

  const end = useCallback(
    (event: React.PointerEvent) => {
      const gesture = gestureRef.current
      if (!gesture || gesture.pointerId !== event.pointerId) return
      gestureRef.current = null
      cancelAnimationFrame(frameRef.current)

      if (!gesture.moved) return
      if (gesture.handle !== null) onResize(gesture.latest)
      else onSettle(gesture.latest)
    },
    [onSettle, onResize]
  )

  const cancel = useCallback(
    (event: React.PointerEvent) => {
      const gesture = gestureRef.current
      if (!gesture || gesture.pointerId !== event.pointerId) return
      gestureRef.current = null
      cancelAnimationFrame(frameRef.current)
      paint(gesture.origin)
      if (gesture.moved) onSettle(gesture.origin)
    },
    [paint, onSettle]
  )

  return { begin, move, end, cancel }
}
