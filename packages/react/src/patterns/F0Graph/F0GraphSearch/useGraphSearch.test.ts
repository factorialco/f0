import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import type { GraphNode } from "../types"
import type { Searchable } from "./types"

import { useGraphSearch } from "./useGraphSearch"

interface Person {
  name: string
}

const nodes: GraphNode<Person>[] = [
  { id: "1", parentId: null, data: { name: "Sofia" } },
  { id: "2", parentId: "1", data: { name: "Sofie" } },
  { id: "3", parentId: "1", data: { name: "Marcus" } },
  { id: "4", parentId: "1", data: { name: "Sofia Reyes" } },
]

const searchable: Searchable<Person> = {
  getLabel: (n) => n.data.name,
}

describe("useGraphSearch", () => {
  it("returns no results when query is empty", () => {
    const { result } = renderHook(() => useGraphSearch(nodes, "", searchable))
    expect(result.current.results).toEqual([])
    expect(result.current.hasQuery).toBe(false)
  })

  it("returns matches sorted by score (exact > prefix > contains)", () => {
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "sofia", searchable)
    )
    // Exact "Sofia" first, then prefix "Sofia Reyes". "Sofie" doesn't match.
    expect(result.current.results.map((r) => r.id)).toEqual(["1", "4"])
  })

  it("falls back to alphabetical within same score", () => {
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "sof", searchable)
    )
    // All three are prefix matches (score 1) → alphabetical by label.
    expect(result.current.results.map((r) => r.label)).toEqual([
      "Sofia",
      "Sofia Reyes",
      "Sofie",
    ])
  })

  it("returns empty when no matches", () => {
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "zebra", searchable)
    )
    expect(result.current.results).toEqual([])
    expect(result.current.hasQuery).toBe(true)
  })

  it("returns no results when searchable is undefined", () => {
    const { result } = renderHook(() => useGraphSearch(nodes, "sof", undefined))
    expect(result.current.results).toEqual([])
  })

  it("includes secondaryLabel and icon when provided", () => {
    const withSecondary: Searchable<Person> = {
      getLabel: (n) => n.data.name,
      getSecondaryLabel: () => "Engineering",
    }
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "marcus", withSecondary)
    )
    expect(result.current.results[0]).toEqual({
      id: "3",
      label: "Marcus",
      secondaryLabel: "Engineering",
      icon: undefined,
    })
  })
})
