import { renderHook } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import type { GraphNode } from "../types"
import type { SearchMatcher, Searchable } from "./types"

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
      ranges: [[0, 6]],
    })
  })

  it("ignores diacritics on both query and label", () => {
    const accented: GraphNode<Person>[] = [
      { id: "a", parentId: null, data: { name: "Café Müller" } },
      { id: "b", parentId: null, data: { name: "Zoë Andersson" } },
    ]
    const queryAccented = renderHook(() =>
      useGraphSearch(accented, "café", searchable)
    )
    expect(queryAccented.result.current.results.map((r) => r.id)).toEqual(["a"])

    const queryPlain = renderHook(() =>
      useGraphSearch(accented, "zoe", searchable)
    )
    expect(queryPlain.result.current.results.map((r) => r.id)).toEqual(["b"])
  })

  it("ignores punctuation (apostrophes, hyphens, dots)", () => {
    const punctuated: GraphNode<Person>[] = [
      { id: "a", parentId: null, data: { name: "O'Brien" } },
      { id: "b", parentId: null, data: { name: "Müller-Schmidt" } },
      { id: "c", parentId: null, data: { name: "Ana M." } },
    ]
    const obrien = renderHook(() =>
      useGraphSearch(punctuated, "obrien", searchable)
    )
    expect(obrien.result.current.results.map((r) => r.id)).toContain("a")

    const muller = renderHook(() =>
      useGraphSearch(punctuated, "muller schmidt", searchable)
    )
    expect(muller.result.current.results.map((r) => r.id)).toContain("b")

    const anaM = renderHook(() =>
      useGraphSearch(punctuated, "ana m", searchable)
    )
    expect(anaM.result.current.results.map((r) => r.id)).toContain("c")
  })

  it("matches against secondary label as a lower-priority fallback", () => {
    const withSecondary: Searchable<Person> = {
      getLabel: (n) => n.data.name,
      getSecondaryLabel: (n) =>
        n.id === "3" ? "Engineering Manager" : undefined,
    }
    // "engineering" is in Marcus's secondary label only.
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "engineering", withSecondary)
    )
    expect(result.current.results.map((r) => r.id)).toEqual(["3"])
    // Secondary-only matches don't expose primary-label ranges.
    expect(result.current.results[0]?.ranges).toBeUndefined()
  })

  it("uses a custom matcher when provided and bypasses default scoring", () => {
    // Custom matcher that returns nodes in *reverse* order with a unique
    // synthetic score per node, so we can prove the override is in effect
    // and that result ordering follows matcher scores rather than alphabetical.
    const reverseMatcher: SearchMatcher<Person> = vi.fn((_q, all) =>
      [...all].reverse().map((node, i) => ({ id: node.id, score: i }))
    )
    const withMatcher: Searchable<Person> = {
      getLabel: (n) => n.data.name,
      match: reverseMatcher,
    }
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "anything", withMatcher)
    )
    expect(reverseMatcher).toHaveBeenCalledTimes(1)
    // Reversed source order: ids 4, 3, 2, 1.
    expect(result.current.results.map((r) => r.id)).toEqual([
      "4",
      "3",
      "2",
      "1",
    ])
  })

  it("custom matcher receives normalized query and helpers", () => {
    let capturedQuery = ""
    let capturedHelperKeys: string[] = []
    const inspectMatcher: SearchMatcher<Person> = (q, _all, helpers) => {
      capturedQuery = q
      capturedHelperKeys = Object.keys(helpers).sort()
      return []
    }
    renderHook(() =>
      useGraphSearch(nodes, "  Café!?  ", {
        getLabel: (n) => n.data.name,
        match: inspectMatcher,
      })
    )
    expect(capturedQuery).toBe("cafe")
    expect(capturedHelperKeys).toEqual([
      "getLabel",
      "getSecondaryLabel",
      "normalize",
    ])
  })

  it("drops matches whose id is not in the source nodes", () => {
    const ghostMatcher: SearchMatcher<Person> = () => [
      { id: "ghost", score: 0 },
      { id: "1", score: 1 },
    ]
    const { result } = renderHook(() =>
      useGraphSearch(nodes, "x", {
        getLabel: (n) => n.data.name,
        match: ghostMatcher,
      })
    )
    expect(result.current.results.map((r) => r.id)).toEqual(["1"])
  })
})
