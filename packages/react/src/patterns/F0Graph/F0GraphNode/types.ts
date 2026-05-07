import type { ReactNode } from "react"

export const graphNodeVariants = ["detail", "compact", "dot"] as const
export type GraphNodeVariant = (typeof graphNodeVariants)[number]

export const graphNodeStates = [
  "default",
  "selected",
  "highlighted",
  "dimmed",
] as const
export type GraphNodeState = (typeof graphNodeStates)[number]

export interface F0GraphNodeProps {
  /** Visual variant based on zoom level */
  variant?: GraphNodeVariant
  /** Visual state */
  state?: GraphNodeState
  /** Whether the node is expanded (has visible children) */
  expanded?: boolean
  /** ARIA tree level (1-based depth) */
  level?: number
  /** Whether the node has children */
  hasChildren?: boolean
  /** Number of children (shown as badge) */
  childrenCount?: number
  /** Callback when expand/collapse is toggled */
  onExpandToggle?: () => void
  /** Callback when the node is clicked */
  onClick?: () => void
  /** Slot content */
  children?: ReactNode
}
