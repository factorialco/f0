import type { IconType } from "@/components/F0Icon"

import type { GraphNode } from "../types"

/** A `[start, end)` slice of the label that matched the query. */
export type SearchMatchRange = readonly [number, number]

/**
 * Single hit produced by a `SearchMatcher`. The hook resolves the rest of the
 * presentational fields (`label`, `secondaryLabel`, `icon`) from the original
 * node + `Searchable` config, so matchers only need to identify which nodes
 * matched and how strongly.
 */
export interface SearchMatch {
  /** Stable id from the source node. */
  id: string
  /** Lower-is-better. Used for sorting; ties fall back to alphabetical. */
  score: number
  /** Optional match ranges over the primary label, for highlighting. */
  ranges?: ReadonlyArray<SearchMatchRange>
}

/**
 * Helpers exposed to custom matchers. Use these instead of re-implementing
 * the same normalization, so consumer matchers stay consistent with the
 * built-in default.
 */
export interface SearchMatcherHelpers<T> {
  getLabel: (node: GraphNode<T>) => string
  getSecondaryLabel?: (node: GraphNode<T>) => string | undefined
  /**
   * Diacritic- and punctuation-insensitive lowercase normalization. Apply to
   * both query and labels for predictable matching.
   */
  normalize: (value: string) => string
}

/**
 * Pluggable matcher. The default implementation is a normalized substring
 * match against the primary (and secondary) label. Consumers can override to
 * plug in a fuzzy library (e.g. uFuzzy, Fuse.js) or any custom strategy.
 *
 * Receives the already-normalized query so trivial matchers can compare
 * directly without re-normalizing.
 */
export type SearchMatcher<T> = (
  normalizedQuery: string,
  nodes: ReadonlyArray<GraphNode<T>>,
  helpers: SearchMatcherHelpers<T>
) => ReadonlyArray<SearchMatch>

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
  /**
   * Optional custom matcher. Use to plug in a fuzzy-search library or any
   * domain-specific ranking. When omitted, F0Graph applies a normalized
   * substring match (diacritic- and punctuation-insensitive) over the
   * primary label, and the secondary label as a lower-priority fallback.
   */
  match?: SearchMatcher<T>
  placeholder?: string
  noResultsLabel?: string
}

export interface SearchResult {
  id: string
  label: string
  secondaryLabel?: string
  icon?: IconType
  /** Optional match ranges over `label`, for highlighting. */
  ranges?: ReadonlyArray<SearchMatchRange>
}
