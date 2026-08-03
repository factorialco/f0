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
})
