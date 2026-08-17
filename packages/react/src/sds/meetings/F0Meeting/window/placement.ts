import {
  f0WindowCorners,
  type F0Rect,
  type F0WindowCorner,
  type F0WindowPlacement,
} from "../types"
import { clamp } from "../utils/aspect"
import {
  SNAP_THRESHOLD,
  WINDOW_MARGIN,
  WINDOW_MIN_HEIGHT,
  WINDOW_MIN_WIDTH,
} from "./window-constants"

export type Viewport = { width: number; height: number }

const isLeft = (corner: F0WindowCorner): boolean => corner.endsWith("l")
const isTop = (corner: F0WindowCorner): boolean => corner.startsWith("t")

/**
 * Resolves an anchored placement into an absolute rect, clamped into the
 * current viewport. Anchoring to a corner (rather than storing x/y) is what
 * keeps the window sensible when the browser is resized: it stays glued to
 * "its" corner instead of drifting off-screen.
 */
export const resolvePlacement = (
  placement: F0WindowPlacement,
  viewport: Viewport,
  minWidth = WINDOW_MIN_WIDTH,
  minHeight = WINDOW_MIN_HEIGHT
): F0Rect => {
  const maxWidth = Math.max(minWidth, viewport.width - WINDOW_MARGIN * 2)
  const maxHeight = Math.max(minHeight, viewport.height - WINDOW_MARGIN * 2)
  const width = clamp(placement.width, minWidth, maxWidth)
  const height = clamp(placement.height, minHeight, maxHeight)

  const maxDx = Math.max(WINDOW_MARGIN, viewport.width - width - WINDOW_MARGIN)
  const maxDy = Math.max(
    WINDOW_MARGIN,
    viewport.height - height - WINDOW_MARGIN
  )
  const dx = clamp(placement.dx, WINDOW_MARGIN, maxDx)
  const dy = clamp(placement.dy, WINDOW_MARGIN, maxDy)

  return {
    x: isLeft(placement.corner) ? dx : viewport.width - dx - width,
    y: isTop(placement.corner) ? dy : viewport.height - dy - height,
    width,
    height,
  }
}

/** Re-expresses an absolute rect against a given corner. */
export const placementFromRect = (
  rect: F0Rect,
  corner: F0WindowCorner,
  viewport: Viewport
): F0WindowPlacement => ({
  corner,
  dx: isLeft(corner) ? rect.x : viewport.width - rect.x - rect.width,
  dy: isTop(corner) ? rect.y : viewport.height - rect.y - rect.height,
  width: rect.width,
  height: rect.height,
})

/** The quadrant the rect's centre falls into. */
export const nearestCorner = (
  rect: F0Rect,
  viewport: Viewport
): F0WindowCorner => {
  const centerX = rect.x + rect.width / 2
  const centerY = rect.y + rect.height / 2
  const vertical = centerY < viewport.height / 2 ? "t" : "b"
  const horizontal = centerX < viewport.width / 2 ? "l" : "r"
  return `${vertical}${horizontal}` as F0WindowCorner
}

/**
 * Placement after a drag: always re-anchored to the nearest corner, and pulled
 * flush to it when the window was dropped close enough.
 */
export const settlePlacement = (
  rect: F0Rect,
  viewport: Viewport
): F0WindowPlacement => {
  const corner = nearestCorner(rect, viewport)
  const placement = placementFromRect(rect, corner, viewport)
  const shouldSnap =
    placement.dx - WINDOW_MARGIN < SNAP_THRESHOLD &&
    placement.dy - WINDOW_MARGIN < SNAP_THRESHOLD

  return shouldSnap
    ? { ...placement, dx: WINDOW_MARGIN, dy: WINDOW_MARGIN }
    : placement
}

export const isWindowPlacement = (
  value: unknown
): value is F0WindowPlacement => {
  if (typeof value !== "object" || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.corner === "string" &&
    (f0WindowCorners as readonly string[]).includes(candidate.corner) &&
    typeof candidate.dx === "number" &&
    Number.isFinite(candidate.dx) &&
    typeof candidate.dy === "number" &&
    Number.isFinite(candidate.dy) &&
    typeof candidate.width === "number" &&
    Number.isFinite(candidate.width) &&
    typeof candidate.height === "number" &&
    Number.isFinite(candidate.height)
  )
}

/** Handle geometry: how a drag delta moves the origin and grows the box. */
export const resizeHandles = {
  n: { dx: 0, dy: 1, dw: 0, dh: -1, cursor: "ns-resize" },
  s: { dx: 0, dy: 0, dw: 0, dh: 1, cursor: "ns-resize" },
  w: { dx: 1, dy: 0, dw: -1, dh: 0, cursor: "ew-resize" },
  e: { dx: 0, dy: 0, dw: 1, dh: 0, cursor: "ew-resize" },
  nw: { dx: 1, dy: 1, dw: -1, dh: -1, cursor: "nwse-resize" },
  ne: { dx: 0, dy: 1, dw: 1, dh: -1, cursor: "nesw-resize" },
  sw: { dx: 1, dy: 0, dw: -1, dh: 1, cursor: "nesw-resize" },
  se: { dx: 0, dy: 0, dw: 1, dh: 1, cursor: "nwse-resize" },
} as const

export type ResizeHandleId = keyof typeof resizeHandles

/** Applies a pointer delta to a rect for the given handle, honouring minimums. */
export const applyResize = (
  rect: F0Rect,
  handle: ResizeHandleId,
  deltaX: number,
  deltaY: number,
  viewport: Viewport,
  minWidth = WINDOW_MIN_WIDTH,
  minHeight = WINDOW_MIN_HEIGHT
): F0Rect => {
  const spec = resizeHandles[handle]
  const width = clamp(
    rect.width + spec.dw * deltaX,
    minWidth,
    viewport.width - WINDOW_MARGIN * 2
  )
  const height = clamp(
    rect.height + spec.dh * deltaY,
    minHeight,
    viewport.height - WINDOW_MARGIN * 2
  )
  // Reuse the clamped size so a handle that moves the origin cannot slide the
  // window while it is pinned at its minimum.
  const x = spec.dx ? rect.x + (rect.width - width) : rect.x
  const y = spec.dy ? rect.y + (rect.height - height) : rect.y

  return {
    x: clamp(
      x,
      WINDOW_MARGIN,
      Math.max(WINDOW_MARGIN, viewport.width - width - WINDOW_MARGIN)
    ),
    y: clamp(
      y,
      WINDOW_MARGIN,
      Math.max(WINDOW_MARGIN, viewport.height - height - WINDOW_MARGIN)
    ),
    width,
    height,
  }
}
