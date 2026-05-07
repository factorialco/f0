// Core node type — generic T is the entity payload (opaque to F0Graph)
export interface GraphNode<T = unknown> {
  id: string
  parentId: string | null
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
}

// Zoom levels
export const zoomLevels = ["detail", "compact", "dot"] as const
export type ZoomLevel = (typeof zoomLevels)[number]

// Zoom presets with named threshold configurations
export const zoomPresets = {
  default: { detail: 0.7, compact: 0.3, dot: 0.15 },
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
export type LayoutDirection = "TB" | "LR"

// Layout engine interface (abstract — implementations can be swapped)
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
