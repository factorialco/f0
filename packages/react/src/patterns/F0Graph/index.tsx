/** Interactive tree/graph visualization with zoom levels, expand/collapse, and selection. */
export { F0Graph } from "./F0Graph"
/** Loading placeholder mirroring the org-tree shape (root + connecting bus + children). */
export { F0GraphSkeleton } from "./F0GraphSkeleton"
export type { F0GraphSkeletonProps } from "./F0GraphSkeleton"
/** Props for configuring F0Graph — data, rendering, zoom, selection, layout, and customization. */
export type { F0GraphProps } from "./F0Graph"
/** Imperative handle (via ref) — exposes `focusNode(id)` to fly to a node on demand, even when re-selecting the same node. */
export type { F0GraphHandle } from "./F0Graph"
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
export * from "./components/F0GraphControls"
/** Edge renderer with variant styles (default, hover, highlighted, dimmed). */
export * from "./components/F0GraphEdge"
/** Collapse/expand pill shown below parent nodes. */
export * from "./components/F0GraphExpander"
/** Card wrapper for nodes with avatar, title, subtitle, metadata, and actions slots. */
export * from "./components/F0GraphNode"

// Hooks
/** Focus context hook for reading/controlling roving tabindex focus within the graph. */
export { useF0GraphFocus } from "./contexts"
export type { F0GraphFocusContextValue } from "./contexts"
/** Actions hook — exposes `toggleExpand`, `selectNode`, `expandAll`, `collapseAll` from inside an `<F0Graph>` subtree (e.g. via the `canvasActions` slot). */
export { useF0GraphActions } from "./contexts"
export type { F0GraphActionsContextValue } from "./contexts"
