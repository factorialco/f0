import type { ZoomLevel } from "./types"

// Singleton empty set used as a stable default for `highlightedNodes`.
// A fresh Set per render would invalidate the selection context and
// re-render every node wrapper.
export const EMPTY_HIGHLIGHTED_NODES: Set<string> = new Set<string>()

// The collapser is an F0Button (md/lg) inside a top-aligned box with `pt-2`,
// whereas the expander is a bare pill of `EXPANDER_SIZE`. These per-zoom nudges
// account for that difference so the collapser lands on the same lane center as
// the expander. `dot` is unused (the collapser is hidden at dot zoom).
export const COLLAPSER_OFFSET_ADJUSTMENT_BY_ZOOM: Record<ZoomLevel, number> = {
  detail: -8,
  compact: -4,
  dot: 0,
}

// Canvas background dot spacing. Shared with the layout engine so node
// columns/rows snap onto the dot grid (nodes "squared" with the dots).
export const BACKGROUND_DOT_GAP = 32

// Delay used after a layout-affecting change before calling `fitView`,
// so React Flow can settle the new node positions in its store.
export const FOCUS_SETTLE_DELAY_MS = 100

// fitView paddings used in different fly-to scenarios.
export const FIT_VIEW_PADDING_TIGHT = 0.1
export const FIT_VIEW_PADDING_LOOSE = 0.5

// Squared pixel threshold matching React Flow's `nodeClickDistance` so a
// pan drag ending over a node does not register as a click.
export const NODE_CLICK_DISTANCE_SQ = 4 * 4

// Above this rendered-node count we skip variant transitions on every node
// (chrome opacity, avatar transform, text reveal). Animating thousands of
// pills on a single zoomLevel change overwhelms the compositor; snapping
// trades polish for responsiveness on large graphs. Tuned by feel — the
// 200-node case still animates, the 4000-node case stays interactive.
export const LARGE_GRAPH_SNAP_THRESHOLD = 700
