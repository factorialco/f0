import { useStore } from "@xyflow/react"

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
 * The rect edges are snapped to {@link NODE_WINDOW_QUANTIZE_STEP} so both the
 * returned identity AND this hook's own subscription are stable while the camera
 * stays within a grid cell. That throttles the O(N) intersection downstream —
 * and the host component's re-render — to cell crossings rather than every
 * pan/zoom frame. The snapping must happen inside the store selector: quantizing
 * a raw `transform` read afterwards stabilizes the value but not the render.
 */
export function useViewportGeometry({
  enabled,
  padding = DEFAULT_NODE_WINDOW_PADDING,
}: UseViewportGeometryOptions): ViewportRect | null {
  // The quantization happens INSIDE the selector, and the equality function
  // compares the quantized edges. Both matter: `useStore` only skips a re-render
  // when the selected value is equal, so reading the raw `transform` here (and
  // quantizing afterwards) would re-render this hook's host — F0GraphView, and
  // its whole subtree — on every single pan/zoom frame, even though the windowed
  // node set is unchanged. Quantizing first turns that into one re-render per
  // grid-cell crossing, and the equality function keeps the previous object
  // identity in between, so every downstream memo stays stable too.
  const rect = useStore(
    (s): ViewportRect | null => {
      if (!enabled) return null
      const [tx, ty, zoom] = s.transform
      const { width, height } = s
      if (width <= 0 || height <= 0 || zoom <= 0) return null

      // Flow-space rect of what the camera currently shows, grown by `padding`.
      // Screen point p maps to flow coordinate (p - t) / zoom.
      const step = NODE_WINDOW_QUANTIZE_STEP
      return {
        minX: Math.floor((-tx / zoom - padding) / step) * step,
        minY: Math.floor((-ty / zoom - padding) / step) * step,
        maxX: Math.ceil(((-tx + width) / zoom + padding) / step) * step,
        maxY: Math.ceil(((-ty + height) / zoom + padding) / step) * step,
      }
    },
    (a, b) =>
      a === b ||
      (a !== null &&
        b !== null &&
        a.minX === b.minX &&
        a.minY === b.minY &&
        a.maxX === b.maxX &&
        a.maxY === b.maxY)
  )

  return rect
}
