import { ReactNode } from "react"

import { IconType } from "@/components/F0Icon"

/**
 * A top-of-panel action (e.g. "New chat", "New group"). The panel renders one
 * ghost button per action, so they all share the same design. For an action
 * that needs custom chrome (e.g. a popover trigger), pass `render` to wrap the
 * default button while keeping its look.
 */
export type SidebarTabPanelAction = {
  label: string
  icon?: IconType
  onClick?: () => void
  /**
   * Wrap the default ghost button (received as `button`) in custom chrome —
   * e.g. a popover/credits trigger. Return the wrapped node. The button keeps
   * the standard action design; only its surroundings change.
   */
  render?: (button: ReactNode) => ReactNode
}

/**
 * A single row in a group. The panel is agnostic about what a row looks like:
 * it renders `content` opaquely. `searchText` is what the search box matches
 * against (omit it to keep the item out of search results while filtering).
 */
export type SidebarTabPanelItem = {
  id: string
  searchText?: string
  content: ReactNode
}

export type SidebarTabPanelGroup = {
  id: string
  /** Omit to render the items without a collapsible header (root group). */
  title?: string
  /** Initial open state of the collapsible group. @default true */
  isOpen?: boolean
  /** Emphasise the title (darker, bolder) while collapsed. */
  highlightWhenCollapsed?: boolean
  /** Content shown at the end of the header only while collapsed. */
  collapsedBadge?: ReactNode
  items: SidebarTabPanelItem[]
}

export type SidebarTabPanelProps = {
  groups: SidebarTabPanelGroup[]
  /** Top-of-panel actions, rendered as a stack of ghost buttons. */
  actions?: SidebarTabPanelAction[]
  /**
   * When set, renders a search box pinned at the very top of the panel that
   * fuzzy-filters items by their `searchText`. Omit for no search.
   */
  searchPlaceholder?: string
  /** Whole-panel loading: renders `skeleton` instead of the groups. */
  loading?: boolean
  /** Shown while `loading` and there are no items yet. */
  skeleton?: ReactNode
  /** Shown when there are no items at all (not while searching). */
  emptyState?: ReactNode
  /** Shown when a search yields no matches. */
  noResultsLabel?: ReactNode
  /**
   * Animate rows as they appear/disappear/move between groups — a pin/unpin
   * glides a row across, search reflows smoothly (reduced-motion aware).
   * On by default; pass `false` to render rows statically.
   */
  animateItems?: boolean
  /** Override the outer container className. */
  className?: string
}
