import { useEffect, useMemo, useState } from "react"

import type { GraphNode } from "../types"
import type {
  SearchMatch,
  SearchMatcher,
  Searchable,
  SearchResult,
} from "./types"

const DEBOUNCE_MS = 200

/**
 * Punctuation- and diacritic-insensitive normalization.
 *
 * - NFD-decomposes characters and strips combining marks → "café" === "cafe"
 * - Strips apostrophes/single-quotes WITHOUT inserting a separator, so
 *   contractions/possessives stay glued: "O'Brien" → "obrien", "it's" → "its"
 * - Replaces other non-alphanumeric runs (hyphens, dots, commas, parens,
 *   slashes…) with a single space, so compound words split predictably:
 *   "Müller-Schmidt" → "muller schmidt", "Ana M." → "ana m"
 * - Collapses whitespace and lowercases.
 *
 * We keep spaces (rather than dropping them) so prefix scoring is meaningful
 * at word boundaries and multi-term queries like "ana m" still work.
 *
 * Exposed to custom matchers via `SearchMatcherHelpers.normalize` so consumer
 * implementations stay consistent with the built-in behavior.
 */
export const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['\u2018\u2019]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()

/** Lower-is-better match score. 0 = exact, 1 = prefix, 2 = contains. */
const scoreLabel = (label: string, query: string) => {
  if (label === query) return 0
  if (label.startsWith(query)) return 1
  return 2
}

/**
 * Default matcher: normalized substring match against the primary label,
 * with the secondary label as a lower-priority fallback. Predictable, no
 * "fuzzy noise", zero dependencies — appropriate for the vast majority of
 * graphs (org charts, dependency graphs, taxonomies, file trees).
 *
 * Consumers who need typo tolerance, out-of-order terms, or weighted multi-
 * field ranking can plug in their own matcher via `Searchable.match` (e.g. a
 * uFuzzy or Fuse.js adapter).
 */
export const defaultSearchMatcher = <T>(
  normalizedQuery: string,
  nodes: ReadonlyArray<GraphNode<T>>,
  {
    getLabel,
    getSecondaryLabel,
  }: {
    getLabel: (node: GraphNode<T>) => string
    getSecondaryLabel?: (node: GraphNode<T>) => string | undefined
  }
): ReadonlyArray<SearchMatch> => {
  const matches: SearchMatch[] = []

  for (const node of nodes) {
    const label = getLabel(node)
    const secondary = getSecondaryLabel?.(node) ?? ""
    const normalizedLabel = normalize(label)
    const normalizedSecondary = normalize(secondary)

    const primaryIndex = normalizedLabel.indexOf(normalizedQuery)
    const matchesPrimary = primaryIndex !== -1
    const matchesSecondary =
      !matchesPrimary && normalizedSecondary.includes(normalizedQuery)

    if (!matchesPrimary && !matchesSecondary) continue

    // Highlight ranges against the *original* label. We approximate the
    // index in the original label by reusing the normalized one — for
    // ASCII-only labels this is exact; for diacritic-stripped labels the
    // offset can drift by a few code units, which is acceptable here
    // (highlighting is a hint, not a contract). When this becomes user-
    // visible we can map normalized→original offsets explicitly.
    const ranges =
      matchesPrimary && primaryIndex >= 0
        ? ([
            [primaryIndex, primaryIndex + normalizedQuery.length] as const,
          ] satisfies ReadonlyArray<readonly [number, number]>)
        : undefined

    const score = matchesPrimary
      ? scoreLabel(normalizedLabel, normalizedQuery)
      : 3 // secondary-only matches rank below any primary match
    matches.push({ id: node.id, score, ranges })
  }

  return matches
}

/**
 * Build the search result list from the source nodes. Reads via `getLabel`
 * so consumers stay in control of the entity payload shape.
 *
 * The index is built from the source `nodes`/`rootNodes`, NOT from the
 * currently rendered ReactFlow nodes — collapsed and virtualized branches
 * are still searchable.
 */
export function useGraphSearch<T>(
  nodes: GraphNode<T>[],
  query: string,
  searchable: Searchable<T> | undefined
): { results: SearchResult[]; hasQuery: boolean; pending: boolean } {
  const normalizedQuery = normalize(query)
  const hasQuery = normalizedQuery.length > 0

  // Debounce the scoring computation so rapid keystrokes don't re-score on
  // every frame. The empty-query path stays synchronous (returns [] instantly).
  const [debouncedQuery, setDebouncedQuery] = useState(normalizedQuery)

  useEffect(() => {
    if (normalizedQuery.length === 0) {
      setDebouncedQuery("")
      return
    }
    const id = window.setTimeout(
      () => setDebouncedQuery(normalizedQuery),
      DEBOUNCE_MS
    )
    return () => window.clearTimeout(id)
  }, [normalizedQuery])

  // True while the user has typed a query but the debounced index hasn't
  // caught up yet. Consumers should treat this as "searching" rather than
  // "no results".
  const pending = hasQuery && debouncedQuery !== normalizedQuery

  const results = useMemo<SearchResult[]>(() => {
    if (!debouncedQuery || !searchable) return []

    const { getLabel, getSecondaryLabel, getIcon, match } = searchable
    const matcher: SearchMatcher<T> = match ?? defaultSearchMatcher

    const rawMatches = matcher(debouncedQuery, nodes, {
      getLabel,
      getSecondaryLabel,
      normalize,
    })

    // Resolve presentational fields and sort. Sorting lives here (not in the
    // matcher) so custom matchers don't need to re-implement tie-breaking;
    // matchers that want to bypass sorting can return pre-sorted results
    // with strictly increasing scores.
    const nodesById = new Map(nodes.map((n) => [n.id, n]))
    const enriched = rawMatches
      .map((m) => {
        const node = nodesById.get(m.id)
        if (!node) return null
        return {
          match: m,
          node,
          label: getLabel(node),
        }
      })
      .filter((x): x is NonNullable<typeof x> => x !== null)

    enriched.sort((a, b) => {
      if (a.match.score !== b.match.score) return a.match.score - b.match.score
      return a.label.localeCompare(b.label)
    })

    return enriched.map(({ match: m, node, label }) => ({
      id: node.id,
      label,
      secondaryLabel: getSecondaryLabel?.(node),
      icon: getIcon?.(node),
      ranges: m.ranges,
    }))
  }, [debouncedQuery, nodes, searchable])

  return { results, hasQuery, pending }
}
