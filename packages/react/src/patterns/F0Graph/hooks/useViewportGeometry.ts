import { type ReactFlowState, useStore } from "@xyflow/react"
import { useMemo } from "react"

import {
  DEFAULT_NODE_WINDOW_PADDING,
  NODE_WINDOW_QUANTIZE_STEP,
} from "../constants"
import type { ViewportRect } from "../utils"

interface UseViewportGeometryOptions {
  /** When false the hook does no work and never subscribes to viewport changes. */
  enabled: boolean
  /** Flow-space px added around the viewport rect. Defaults to {@link DEFAULT_NODE_WINDOW_PADDING}. */
  padding?: number
}

// A compact snapshot of the pieces of the React Flow transform we need. We read
// primitives (not an object) so the equality check below is a cheap element
// comparison and the selector never allocates a fresh object that would defeat
// memoization.
type ViewportSnapshot = readonly [
  tx: number,
  ty: number,
  zoom: number,
  width: number,
  height: number,
]

const selectViewport =
  (enabled: boolean) =>
  (state: ReactFlowState): ViewportSnapshot | null => {
    if (!enabled) return null
    const [tx, ty, zoom] = state.transform
    return [tx, ty, zoom, state.width, state.height] as const
  }

function snapshotsEqual(
  a: ViewportSnapshot | null,
  b: ViewportSnapshot | null
): boolean {
  if (a === b) return true
  if (!a || !b) return false
  return (
    a[0] === b[0] &&
    a[1] === b[1] &&
    a[2] === b[2] &&
    a[3] === b[3] &&
    a[4] === b[4]
  )
}

/**
 * Computes the current viewport as a padded rect in flow-space coordinates,
 * driving node-array windowing. Returns `null` when disabled or before React
 * Flow has measured the pane (width/height still 0) — callers treat `null` as
 * "no windowing, render everything", which is also the correct behavior for the
 * first paint (React Flow's own `fitView` needs all nodes present to fit them).
 *
 * The rect edges are snapped to {@link NODE_WINDOW_QUANTIZE_STEP} so the
 * returned object identity is stable while the camera stays within a grid cell.
 * That throttles the O(N) intersection downstream to fire only when the camera
 * crosses a cell boundary rather than on every pan frame.
 */
export function useViewportGeometry({
  enabled,
  padding = DEFAULT_NODE_WINDOW_PADDING,
}: UseViewportGeometryOptions): ViewportRect | null {
  const selector = useMemo(() => selectViewport(enabled), [enabled])
  const snapshot = useStore(selector, snapshotsEqual)

  const tx = snapshot?.[0] ?? 0
  const ty = snapshot?.[1] ?? 0
  const zoom = snapshot?.[2] ?? 0
  const width = snapshot?.[3] ?? 0
  const height = snapshot?.[4] ?? 0

  const hasViewport = snapshot !== null && width > 0 && height > 0 && zoom > 0

  // Flow-space rect of what the camera currently shows, grown by `padding`.
  // Screen point p maps to flow coordinate (p - t) / zoom.
  const rawMinX = -tx / zoom - padding
  const rawMinY = -ty / zoom - padding
  const rawMaxX = (-tx + width) / zoom + padding
  const rawMaxY = (-ty + height) / zoom + padding

  const step = NODE_WINDOW_QUANTIZE_STEP
  const minX = Math.floor(rawMinX / step) * step
  const minY = Math.floor(rawMinY / step) * step
  const maxX = Math.ceil(rawMaxX / step) * step
  const maxY = Math.ceil(rawMaxY / step) * step

  // Depend on the quantized scalars so the rect object identity only changes
  // when the camera crosses a grid cell — this is the throttle.
  return useMemo(() => {
    if (!hasViewport) return null
    return { minX, minY, maxX, maxY }
  }, [hasViewport, minX, minY, maxX, maxY])
}
