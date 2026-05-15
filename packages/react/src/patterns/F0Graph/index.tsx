/** Interactive tree/graph visualization with zoom levels, expand/collapse, selection, search, and detail panels. */
export { F0Graph } from "./F0Graph"
/** Props for configuring F0Graph — data, rendering, zoom, selection, layout, and customization. */
export type { F0GraphProps } from "./F0Graph"
/** Render context passed to the renderNode callback. */
export type { F0GraphNodeRenderContext } from "./F0Graph"

/** Core data and layout types used across the graph pattern. */
export type {
  GraphNode,
  GraphEdge,
  ZoomLevel,
  ZoomPreset,
  ZoomThresholds,
  LayoutDirection,
  LayoutEngine,
  LayoutResult,
  PositionedNode,
  PositionedEdge,
  DeferredNodesPayload,
  DeferredStatus,
} from "./types"

// Sub-components
/** Zoom/pan/fit controls toolbar. */
export * from "./F0GraphControls"
/** Edge renderer with variant styles (default, hover, highlighted, dimmed). */
export * from "./F0GraphEdge"
/** Collapse/expand pill shown below parent nodes. */
export * from "./F0GraphExpander"
/** Card wrapper for nodes with avatar, title, subtitle, metadata, and actions slots. */
export * from "./F0GraphNode"

// Hooks
/** Focus context hook for reading/controlling roving tabindex focus within the graph. */
export { useF0GraphFocus } from "./contexts"
export type { F0GraphFocusContextValue } from "./contexts"
/** Actions hook — exposes `toggleExpand`, `selectNode`, `expandAll`, `collapseAll` from inside an `<F0Graph>` subtree (e.g. via the `canvasActions` slot). */
export { useF0GraphActions } from "./contexts"
export type { F0GraphActionsContextValue } from "./contexts"
