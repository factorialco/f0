import type { ReactNode } from "react"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { TagVariant } from "@/components/tags/F0Tag/F0Tag"

/** Tag types that can be rendered in a node's metadata row. */
export type F0GraphNodeTagType = TagVariant["type"]

/**
 * Optional labels for the auto-generated multi-tag summary text.
 * One label per `TagVariant` `type`. Used when 2+ tags of the same type
 * are present and need to collapse to a single summary tag.
 *
 * Default English plural labels are provided when omitted.
 */
export type F0GraphNodeTagLabels = Partial<Record<F0GraphNodeTagType, string>>

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
  /** Tab index for roving tabindex (0 = focused, -1 = not focused) */
  tabIndex?: 0 | -1
  /** ARIA set size — number of siblings at this level */
  setSize?: number
  /** ARIA position in set — 1-based index among siblings */
  posInSet?: number
  /** Whether the node has children */
  hasChildren?: boolean
  /** Number of children (informational) */
  childrenCount?: number
  /** Callback when expand/collapse is toggled */
  onExpandToggle?: () => void
  /** Callback when the node is clicked */
  onClick?: () => void
  /** Ref callback for registering this node's DOM element (used by roving tabindex) */
  nodeRef?: (el: HTMLDivElement | null) => void
  /** Avatar shown on the leading side of the pill. Always rendered at size `lg`. */
  avatar?: AvatarVariant
  /** Primary line of text. Hidden in dot variant. */
  title?: ReactNode
  /** Secondary line of text. Hidden in compact and dot variants. */
  subtitle?: ReactNode
  /**
   * Tag metadata rendered as a flex-wrap row below the pill (detail variant
   * only). Tags are grouped by their `type`: a single tag of a given type
   * renders directly; multiple tags of the same type collapse into one
   * summary tag ("3 teams") with all member names exposed via tooltip.
   */
  tags?: TagVariant[]
  /**
   * Set of tag types that should be rendered. When provided, tags whose
   * `type` is not in the set are filtered out. When omitted, all tags are
   * rendered. Used by the parent `<F0Graph>` per-type visibility toggles.
   */
  visibleTagTypes?: ReadonlySet<F0GraphNodeTagType>
  /** Optional labels override for multi-tag summary text. */
  tagLabels?: F0GraphNodeTagLabels
  /**
   * Floating toolbar shown above the node when it is selected (detail
   * variant only). Rendered via ReactFlow `NodeToolbar`, so the host
   * tree must be wrapped in a `ReactFlowProvider` for these actions to
   * appear.
   */
  actions?: ReactNode
  /** Show a skeleton/loading placeholder instead of real content. */
  loading?: boolean
  /** DOM id for aria-owns cross-references */
  nodeId?: string
  /** Space-separated DOM ids for aria-owns (accessible tree hierarchy) */
  ariaOwns?: string
}
