import type { IconType } from "@/components/F0Icon"

import type { GraphNode } from "../types"

/**
 * Declarative search configuration. F0Graph builds the search index from the
 * source `nodes` (or `rootNodes`) prop, so collapsed/un-rendered subtrees are
 * still searchable.
 */
export interface Searchable<T> {
  /** Primary label for matching and the main result row text. */
  getLabel: (node: GraphNode<T>) => string
  /**
   * Optional secondary label rendered after the primary label (e.g. a job
   * title, breadcrumb, or department).
   */
  getSecondaryLabel?: (node: GraphNode<T>) => string | undefined
  /** Optional icon per result row. */
  getIcon?: (node: GraphNode<T>) => IconType | undefined
  placeholder?: string
  noResultsLabel?: string
}

export interface SearchResult {
  id: string
  label: string
  secondaryLabel?: string
  icon?: IconType
}
