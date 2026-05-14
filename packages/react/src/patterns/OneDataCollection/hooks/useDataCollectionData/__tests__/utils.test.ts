import { describe, expect, it } from "vitest"

import { mergeFiltersWithIntersection } from "../utils"

describe("mergeFiltersWithIntersection", () => {
  it("intersects overlapping array filters", () => {
    expect(
      mergeFiltersWithIntersection<{ k: number[] }>(
        { k: [1, 2, 3] },
        { k: [2, 3, 4] }
      )
    ).toEqual({ k: [2, 3] })
  })

  it("falls back to the lane's own filter when arrays are disjoint", () => {
    // Regression: previously the disjoint case produced `{ k: [] }`, which
    // many backends collapse to "no filter" — silently widening the lane's
    // query to the whole dataset. Lane is authoritative for its own filter.
    expect(
      mergeFiltersWithIntersection<{ k: number[] }>({ k: [99] }, { k: [42] })
    ).toEqual({ k: [42] })
  })

  it("uses the lane filter when the global value is missing", () => {
    expect(
      mergeFiltersWithIntersection<{ k: number[]; o?: string }>(
        {} as { k: number[] },
        { k: [42] }
      )
    ).toEqual({ k: [42] })
  })

  it("uses the lane filter when the global value is an empty array", () => {
    expect(
      mergeFiltersWithIntersection<{ k: number[] }>({ k: [] }, { k: [42] })
    ).toEqual({ k: [42] })
  })

  it("preserves global filter keys not present in lane filters", () => {
    expect(
      mergeFiltersWithIntersection<{ a: number[]; b: number[] }>(
        { a: [1, 2], b: [9] },
        { a: [2, 3] } as { a: number[]; b: number[] }
      )
    ).toEqual({ a: [2], b: [9] })
  })

  it("for non-array filter types, lane wins", () => {
    expect(
      mergeFiltersWithIntersection<{ k: { mode: string; value: number } }>(
        { k: { mode: "single", value: 1 } },
        { k: { mode: "single", value: 2 } }
      )
    ).toEqual({ k: { mode: "single", value: 2 } })
  })
})
