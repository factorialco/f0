import { useStore } from "@xyflow/react"
import { useMemo } from "react"

import {
  DEFAULT_NODE_WINDOW_PADDING,
  NODE_WINDOW_QUANTIZE_STEP,
} from "../constants"
import type { ViewportRect } from "../utils"

interface UseViewportGeometryOptions {
  /** When false the hook reads nothing and never re-renders on viewport changes. */
  enabled: boolean
  /** Flow-space px added around the viewport rect. Defaults to {@link DEFAULT_NODE_WINDOW_PADDING}. */
  padding?: number
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
 *
 * Each viewport field is read as a separate primitive selector so the default
 * `Object.is` equality already prevents re-renders on unrelated store changes;
 * when disabled the selectors return a constant `0`, so no subscription churn.
 */
export function useViewportGeometry({
  enabled,
  padding = DEFAULT_NODE_WINDOW_PADDING,
}: UseViewportGeometryOptions): ViewportRect | null {
  const tx = useStore((s) => (enabled ? s.transform[0] : 0))
  const ty = useStore((s) => (enabled ? s.transform[1] : 0))
  const zoom = useStore((s) => (enabled ? s.transform[2] : 0))
  const width = useStore((s) => (enabled ? s.width : 0))
  const height = useStore((s) => (enabled ? s.height : 0))

  const hasViewport = enabled && width > 0 && height > 0 && zoom > 0

  // Flow-space rect of what the camera currently shows, grown by `padding`.
  // Screen point p maps to flow coordinate (p - t) / zoom.
  const step = NODE_WINDOW_QUANTIZE_STEP
  const minX = Math.floor((-tx / zoom - padding) / step) * step
  const minY = Math.floor((-ty / zoom - padding) / step) * step
  const maxX = Math.ceil(((-tx + width) / zoom + padding) / step) * step
  const maxY = Math.ceil(((-ty + height) / zoom + padding) / step) * step

  // Depend on the quantized scalars so the rect object identity only changes
  // when the camera crosses a grid cell — this is the throttle.
  return useMemo(() => {
    if (!hasViewport) return null
    return { minX, minY, maxX, maxY }
  }, [hasViewport, minX, minY, maxX, maxY])
}
