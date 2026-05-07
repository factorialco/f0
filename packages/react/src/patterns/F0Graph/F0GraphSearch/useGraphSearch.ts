import { useMemo } from "react"

import type { GraphNode } from "../types"
import type { Searchable, SearchResult } from "./types"

const normalize = (value: string) => value.trim().toLowerCase()

/** Lower-is-better match score. 0 = exact, 1 = prefix, 2 = contains. */
const scoreLabel = (label: string, query: string) => {
  if (label === query) return 0
  if (label.startsWith(query)) return 1
  return 2
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
): { results: SearchResult[]; hasQuery: boolean } {
  const normalizedQuery = normalize(query)
  const hasQuery = normalizedQuery.length > 0

  const results = useMemo<SearchResult[]>(() => {
    if (!hasQuery || !searchable) return []

    const { getLabel, getSecondaryLabel, getIcon } = searchable

    const matches: Array<{ node: GraphNode<T>; label: string; score: number }> =
      []

    for (const node of nodes) {
      const label = getLabel(node)
      const normalizedLabel = label.toLowerCase()
      if (!normalizedLabel.includes(normalizedQuery)) continue
      matches.push({
        node,
        label,
        score: scoreLabel(normalizedLabel, normalizedQuery),
      })
    }

    matches.sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score
      return a.label.toLowerCase().localeCompare(b.label.toLowerCase())
    })

    return matches.map(({ node, label }) => ({
      id: node.id,
      label,
      secondaryLabel: getSecondaryLabel?.(node),
      icon: getIcon?.(node),
    }))
  }, [hasQuery, nodes, normalizedQuery, searchable])

  return { results, hasQuery }
}
