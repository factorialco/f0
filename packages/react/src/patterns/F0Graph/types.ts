// Core node type — generic T is the entity payload (opaque to F0Graph)
export interface GraphNode<T = unknown> {
  id: string
  /**
   * For tree topology. For DAG nodes with multiple parents, use `parentIds`
   * instead. If both are provided, `parentIds` wins.
   */
  parentId: string | null
  /**
   * Optional list of parent IDs for DAG topology. When provided, takes
   * precedence over `parentId`. A node with `parentIds.length > 1` indicates
   * a DAG node.
   */
  parentIds?: string[]
  data: T
  childrenCount?: number
  childrenLoaded?: boolean
}

// Edge between nodes
export interface GraphEdge {
  id: string
  source: string
  target: string
  type?: "smoothstep" | "straight" | "bezier"
  /**
   * Optional consumer-defined edge metadata (labels, weights, semantic types).
   * Type-erased — consumers narrow as needed.
   */
  data?: unknown
  /**
   * Optional click handler. When defined, the edge becomes interactive: it
   * shows the `hover` variant on pointer-enter and invokes this on click.
   */
  onEdgeClick?: (edge: GraphEdge) => void
  /**
   * Optional hover handler. When defined, the edge becomes interactive: it
   * shows the `hover` variant on pointer-enter and invokes this with the
   * edge on enter and `null` on leave.
   */
  onEdgeHover?: (edge: GraphEdge | null) => void
}

// Internal tree node (enriched during tree building)
export interface TreeNode<T = unknown> {
  id: string
  parentId: string | null
  data: T
  children: TreeNode<T>[]
  depth: number
  childrenCount: number
  childrenLoaded: boolean
  /**
   * Present when a node has multiple parents in a DAG. Lists all logical
   * parent IDs. The canonical layout parent (`parentId`) is the first entry.
   * Only set when `parentIds` was provided on the input `GraphNode`.
   */
  dagParentIds?: string[]
}

// Zoom levels
export const zoomLevels = ["detail", "compact", "dot"] as const
export type ZoomLevel = (typeof zoomLevels)[number]

// Zoom presets with named threshold configurations
export const zoomPresets = {
  default: { detail: 0.56, compact: 0.3, dot: 0.18 },
  dense: { detail: 0.5, compact: 0.2, dot: 0.08 },
  sparse: { detail: 0.85, compact: 0.45, dot: 0.15 },
} as const

export type ZoomPreset = keyof typeof zoomPresets

export interface ZoomThresholds {
  detail: number // Above this = detail
  compact: number // Above this = compact
  dot: number // Above this = dot (lowest level)
}

// Layout direction
export type LayoutDirection = "TB" | "LR" | "BT" | "RL"

/**
 * Layout engine interface (abstract — implementations can be swapped).
 *
 * The built-in implementation (`useLayoutEngine`) produces a deterministic
 * tree layout. For DAG topologies where nodes have multiple parents, consumers
 * should provide a custom engine wrapping a DAG layout library (e.g., dagre,
 * ELK, or d3-dag). A custom engine receives the original `nodes` and `edges`
 * (not the tree projection) and computes its own positions.
 */
export interface LayoutEngine {
  computeLayout(
    nodes: TreeNode[],
    edges: GraphEdge[],
    direction: LayoutDirection
  ): LayoutResult
}

export interface LayoutResult {
  nodes: PositionedNode[]
  edges: PositionedEdge[]
  width: number
  height: number
}

export interface PositionedNode {
  id: string
  x: number
  y: number
  width: number
  height: number
}

export interface PositionedEdge {
  id: string
  source: string
  target: string
  points: Array<{ x: number; y: number }>
}

// ─── Deferred payload ──────────────────────────────────────────

/** Payload shape returned by the deferred nodes source. */
export interface DeferredNodesPayload<T = unknown> {
  nodes: GraphNode<T>[]
  edges?: GraphEdge[]
}

/** Status of the deferred merge lifecycle. */
export type DeferredStatus = "idle" | "loading" | "resolved" | "error"
