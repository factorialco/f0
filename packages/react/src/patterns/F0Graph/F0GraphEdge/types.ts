export const edgeTypes = ["smoothstep", "straight", "bezier"] as const
export type EdgeType = (typeof edgeTypes)[number]

export const edgeVariants = [
  "default",
  "hover",
  "highlighted",
  "dimmed",
] as const
export type EdgeVariant = (typeof edgeVariants)[number]

export interface F0GraphEdgeProps {
  /** Edge rendering style */
  type?: EdgeType
  /** Visual variant */
  variant?: EdgeVariant
  /** Stroke width (adjusts with zoom level) */
  strokeWidth?: number
}
