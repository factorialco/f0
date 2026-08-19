import type { ReactNode } from "react"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"

import type { GraphNodeState } from "../F0GraphNode"

export interface F0GraphStackedNodeProps {
  /** Visual state. Mirrors the node card's states so a stack reads with them. */
  state?: GraphNodeState
  /** ARIA tree level (1-based depth). */
  level?: number
  /** Tab index for roving tabindex (0 = focused, -1 = not focused). */
  tabIndex?: 0 | -1
  /** ARIA set size — number of siblings at this level. */
  setSize?: number
  /** ARIA position in set — 1-based index among siblings. */
  posInSet?: number
  /** Callback when the row is clicked. */
  onClick?: () => void
  /** Ref callback registering this row's DOM element (used by roving tabindex). */
  nodeRef?: (el: HTMLDivElement | null) => void
  /** DOM id for aria-owns cross-references. */
  nodeId?: string
  /**
   * Avatar on the leading side of the row — the same slot the node card uses,
   * so a column reads as a continuation of its parent. Rendered at `md` rather
   * than the card's `lg`: the row is a compact strip, and a 40px avatar would
   * fill it edge to edge.
   */
  avatar?: AvatarVariant
  /** The row's label. */
  title?: ReactNode
  /**
   * Content pinned to the trailing edge of the row — a checkbox, a count, a
   * small icon button. Clicks inside it do not select the node.
   */
  trailing?: ReactNode
  /** Show a skeleton placeholder instead of the title. */
  loading?: boolean
  /**
   * Row height in px. Must match the graph's `stackedNodeHeight` (both default
   * to 52) — the layout reserves exactly this much room per row. Only the width
   * is inherited from the card; a row is deliberately shorter. The default is
   * the avatar plus equal padding on every side, so changing it without
   * changing the avatar breaks that symmetry.
   */
  height?: number
}
