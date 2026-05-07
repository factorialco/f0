export const edgeTypes = ["smoothstep", "straight", "bezier"] as const
export type EdgeType = (typeof edgeTypes)[number]

export const edgeVariants = ["default", "highlighted", "dimmed"] as const
export type EdgeVariant = (typeof edgeVariants)[number]

export interface F0GraphEdgeProps {
  /** Edge rendering style */
  type?: EdgeType
  /** Visual variant */
  variant?: EdgeVariant
  /** Whether the edge is animated (shows flow direction) */
  animated?: boolean
  /** Stroke width (adjusts with zoom level) */
  strokeWidth?: number
}
