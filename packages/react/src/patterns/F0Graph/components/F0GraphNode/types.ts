import type { ReactNode } from "react"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { TagVariant } from "@/components/tags/F0Tag/F0Tag"

/**
 * Identifies the show/hide column a tag belongs to. Defaults to the tag's
 * visual `type` (`TagVariant["type"]`, e.g. `"raw"`, `"status"`), but a tag can
 * override it with an arbitrary `column` key (see [[F0GraphNodeTag]]) so that
 * two tags sharing a `type` — e.g. two `raw` pills — occupy independent columns
 * with their own toggle, label and default visibility. The `(string & {})`
 * widening keeps autocomplete for the built-in types while allowing custom keys.
 */
export type F0GraphNodeTagType = TagVariant["type"] | (string & {})

/**
 * A tag rendered in a node's metadata row. Its visual is driven by the
 * `TagVariant` `type`; its column identity — which toggle/label/default-
 * visibility bucket it falls into — is `column ?? type`.
 */
export type F0GraphNodeTag = TagVariant & {
  /**
   * Optional column identity, decoupling this tag's show/hide toggle, hover-
   * card label and default visibility from its visual `type`. Defaults to
   * `type` when omitted. Use it to give two tags of the same `type` (e.g. a
   * second `raw` pill) their own independent column.
   */
  column?: F0GraphNodeTagType
}

/** The column a tag belongs to: its explicit `column`, else its visual `type`. */
export const tagColumn = (tag: F0GraphNodeTag): F0GraphNodeTagType =>
  tag.column ?? tag.type

/**
 * Optional human-readable label per tag column (see [[F0GraphNodeTagType]]).
 * Used as the metadata row label inside the node's hover card (see
 * [[F0GraphNodeHoverCard]]). Keyed by the built-in tag types plus any custom
 * `column` keys.
 */
export interface F0GraphNodeTagLabels {
  person?: string
  team?: string
  company?: string
  status?: string
  alert?: string
  balance?: string
  dot?: string
  raw?: string
  /** Labels for custom column keys (see [[F0GraphNodeTag]] `column`). */
  [column: string]: string | undefined
}

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
   * only). Every tag is rendered individually — tags are never grouped or
   * collapsed, even when several share the same `type`.
   */
  tags?: F0GraphNodeTag[]
  /**
   * Set of tag columns that should be rendered. When provided, tags whose
   * column (`column ?? type`) is not in the set are filtered out. When
   * omitted, all tags are rendered. Used by the parent `<F0Graph>` per-column
   * visibility toggles.
   */
  visibleTagTypes?: ReadonlySet<F0GraphNodeTagType>
  /** Optional per-type labels, used as metadata row labels in the hover card. */
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
  /**
   * In the compacted modes (compact/dot), reveal the rest of the node's info in
   * an F0Card popover on hover. Shows only the non-hidden tags (those allowed by
   * `visibleTagTypes`). No-op in the detail variant, where everything is already
   * on screen.
   */
  hoverCard?: boolean
  /** DOM id for aria-owns cross-references */
  nodeId?: string
  /** Space-separated DOM ids for aria-owns (accessible tree hierarchy) */
  ariaOwns?: string
}
