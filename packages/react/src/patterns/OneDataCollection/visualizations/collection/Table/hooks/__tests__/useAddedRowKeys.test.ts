import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { useAddedRowKeys } from "../useAddedRowKeys"

describe("useAddedRowKeys", () => {
  it("never flashes the rows present on the initial load", () => {
    const { result } = renderHook(({ keys }) => useAddedRowKeys(keys), {
      initialProps: { keys: ["a", "b", "c"] },
    })
    expect([...result.current]).toEqual([])
  })

  it("flashes a row inserted after the baseline is seeded", () => {
    const { result, rerender } = renderHook(
      ({ keys }) => useAddedRowKeys(keys),
      { initialProps: { keys: ["a", "b"] } }
    )

    rerender({ keys: ["a", "b", "c"] })
    expect([...result.current]).toEqual(["c"])
  })

  it("flashes a given row at most once", () => {
    const { result, rerender } = renderHook(
      ({ keys }) => useAddedRowKeys(keys),
      { initialProps: { keys: ["a"] } }
    )

    rerender({ keys: ["a", "b"] })
    expect([...result.current]).toEqual(["b"])

    // A subsequent unrelated re-render must not re-flash "b".
    rerender({ keys: ["a", "b"] })
    expect([...result.current]).toEqual([])
  })

  it("does not flash rows brought in by changing the page", () => {
    const { result, rerender } = renderHook(
      ({ keys, page }) => useAddedRowKeys(keys, page),
      { initialProps: { keys: ["a", "b"], page: 1 } }
    )

    // Navigating to page 2 swaps in a whole new, never-seen row set.
    rerender({ keys: ["c", "d"], page: 2 })
    expect([...result.current]).toEqual([])

    // ...and paging back is navigation too, not an insert.
    rerender({ keys: ["a", "b"], page: 1 })
    expect([...result.current]).toEqual([])
  })

  it("still flashes an insert made after paging to another page", () => {
    const { result, rerender } = renderHook(
      ({ keys, page }) => useAddedRowKeys(keys, page),
      { initialProps: { keys: ["a", "b"], page: 1 } }
    )

    rerender({ keys: ["c", "d"], page: 2 })
    expect([...result.current]).toEqual([])

    // A create on page 2 adds a row without changing the page → it flashes.
    rerender({ keys: ["c", "d", "e"], page: 2 })
    expect([...result.current]).toEqual(["e"])
  })

  it("does not flash rows appended by an infinite-scroll cursor change", () => {
    const { result, rerender } = renderHook(
      ({ keys, cursor }) => useAddedRowKeys(keys, cursor),
      { initialProps: { keys: ["a", "b"], cursor: "0" } }
    )

    // Loading more advances the cursor and appends rows: navigation, no flash.
    rerender({ keys: ["a", "b", "c", "d"], cursor: "1" })
    expect([...result.current]).toEqual([])
  })

  // `query` here stands for the datasource's committed query: it changes only
  // once rows answering the new question are actually rendered. A render still
  // showing the previous query's rows therefore carries the previous key, which
  // is exactly what stops the baseline being seeded from stale rows.
  it("does not flash the rows that come back after clearing a search that matched nothing", () => {
    const { result, rerender } = renderHook(
      ({ keys, query }) => useAddedRowKeys(keys, query),
      { initialProps: { keys: ["a", "b", "c"], query: "all" } }
    )

    // Searching empties the table...
    rerender({ keys: [], query: "zzz" })
    expect([...result.current]).toEqual([])

    // ...and clearing it brings every row back. None of them are new.
    rerender({ keys: ["a", "b", "c"], query: "all" })
    expect([...result.current]).toEqual([])
  })

  it("still flashes an insert after a query that returned the same rows", () => {
    const { result, rerender } = renderHook(
      ({ keys, query }) => useAddedRowKeys(keys, query),
      { initialProps: { keys: ["a", "b"], query: "q1" } }
    )

    // A different question that happens to have the same answer. Nothing was
    // inserted, so nothing flashes...
    rerender({ keys: ["a", "b"], query: "q2" })
    expect([...result.current]).toEqual([])

    // ...but the insert that follows it must still flash. Waiting for the rows
    // to change instead of for the query to commit swallowed this one.
    rerender({ keys: ["a", "b", "c"], query: "q2" })
    expect([...result.current]).toEqual(["c"])
  })

  it("still flashes a genuine insert while a search is active", () => {
    const { result, rerender } = renderHook(
      ({ keys, query }) => useAddedRowKeys(keys, query),
      { initialProps: { keys: ["a", "b"], query: "all" } }
    )

    rerender({ keys: ["a"], query: "q" })

    // A create that matches the active search: same query, new row → flash.
    rerender({ keys: ["a", "new"], query: "q" })
    expect([...result.current]).toEqual(["new"])
  })

  it("does not re-flash a row that briefly disappears during a refetch", () => {
    const { result, rerender } = renderHook(
      ({ keys }) => useAddedRowKeys(keys),
      { initialProps: { keys: ["a", "b"] } }
    )

    // A refetch that momentarily renders nothing must not reset the baseline.
    rerender({ keys: [] })
    rerender({ keys: ["a", "b"] })
    expect([...result.current]).toEqual([])
  })
})
