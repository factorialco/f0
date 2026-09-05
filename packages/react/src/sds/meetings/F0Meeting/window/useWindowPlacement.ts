import { useCallback, useEffect, useState } from "react"

import { usePersistedState } from "@/lib/persisted-state"

import { type F0Rect, type F0WindowPlacement } from "../types"
import { panelWidthFor } from "./panel"
import {
  isWindowPlacement,
  placementFromRect,
  resolvePlacement,
  settlePlacement,
} from "./placement"
import {
  PLACEMENT_STORAGE_KEY,
  WINDOW_DEFAULT_HEIGHT,
  WINDOW_DEFAULT_WIDTH,
  WINDOW_MARGIN,
} from "./window-constants"

const DEFAULT_PLACEMENT: F0WindowPlacement = {
  corner: "br",
  dx: WINDOW_MARGIN * 2,
  dy: WINDOW_MARGIN * 2,
  width: WINDOW_DEFAULT_WIDTH,
  height: WINDOW_DEFAULT_HEIGHT,
}

const readViewport = (): { width: number; height: number } =>
  typeof window === "undefined"
    ? { width: 1280, height: 800 }
    : { width: window.innerWidth, height: window.innerHeight }

/**
 * Owns the floating window's anchored placement, its persistence, and the
 * viewport it is clamped against.
 *
 * The viewport is tracked with a ResizeObserver on the document element rather
 * than `window.resize`: that also fires for the mobile URL bar and for zoom.
 */
export const useWindowPlacement = (): {
  placement: F0WindowPlacement
  viewport: { width: number; height: number }
  rect: F0Rect
  /** Commit an absolute rect after a drag: re-anchors and snaps. */
  settle: (rect: F0Rect) => void
  /** Commit a resize without re-anchoring. */
  resize: (rect: F0Rect) => void
  /** Resize the side panel. Never touches the floating rect. */
  setPanelWidth: (width: number, area: { width: number }) => void
} => {
  const [placement, setPlacement] = usePersistedState<F0WindowPlacement>(
    PLACEMENT_STORAGE_KEY,
    DEFAULT_PLACEMENT,
    isWindowPlacement
  )
  const [viewport, setViewport] = useState(readViewport)

  useEffect(() => {
    if (typeof window === "undefined") return
    let frame = 0
    const measure = (): void => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setViewport((previous) => {
          const next = readViewport()
          return previous.width === next.width &&
            previous.height === next.height
            ? previous
            : next
        })
      })
    }

    const observer = new ResizeObserver(measure)
    observer.observe(document.documentElement)
    window.addEventListener("orientationchange", measure)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("orientationchange", measure)
    }
  }, [])

  // `placementFromRect` builds a fresh placement and knows nothing about the
  // panel, so both of these have to carry `panelWidth` over by hand — otherwise
  // resizing or dragging the floating window silently resets the width the user
  // chose for the side panel.
  const settle = useCallback(
    (rect: F0Rect) =>
      setPlacement((previous) => ({
        ...settlePlacement(rect, readViewport()),
        ...(previous.panelWidth !== undefined
          ? { panelWidth: previous.panelWidth }
          : {}),
      })),
    [setPlacement]
  )

  // Resizing keeps the current anchor: only dragging re-decides the corner.
  const resize = useCallback(
    (rect: F0Rect) =>
      setPlacement((previous) => ({
        ...placementFromRect(rect, previous.corner, readViewport()),
        ...(previous.panelWidth !== undefined
          ? { panelWidth: previous.panelWidth }
          : {}),
      })),
    [setPlacement]
  )

  const setPanelWidth = useCallback(
    (width: number, area: { width: number }) =>
      setPlacement((previous) => ({
        ...previous,
        panelWidth: panelWidthFor({ width: area.width, height: 0 }, width),
      })),
    [setPlacement]
  )

  return {
    placement,
    viewport,
    rect: resolvePlacement(placement, viewport),
    settle,
    resize,
    setPanelWidth,
  }
}
