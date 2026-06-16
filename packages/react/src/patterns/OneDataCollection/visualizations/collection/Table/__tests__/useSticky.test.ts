import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { useSticky } from "../useSticky"

const CHECK_COL = 56

describe("useSticky", () => {
  it("returns undefined for cells beyond the frozen range", () => {
    const { result } = renderHook(() =>
      useSticky(2, [{ width: 100 }, { width: 100 }, { width: 100 }], false)
    )
    expect(result.current.getStickyPosition(2)).toBeUndefined()
  })

  it("stacks frozen columns by their explicit width", () => {
    const { result } = renderHook(() =>
      useSticky(2, [{ width: 100 }, { width: 200 }], false)
    )
    expect(result.current.getStickyPosition(0)).toEqual({ left: 0 })
    expect(result.current.getStickyPosition(1)).toEqual({ left: 100 })
  })

  it("offsets frozen columns by the checkbox column when selectable", () => {
    const { result } = renderHook(() =>
      useSticky(2, [{ width: 100 }, { width: 200 }], true)
    )
    expect(result.current.getStickyPosition(0)).toEqual({ left: CHECK_COL })
    expect(result.current.getStickyPosition(1)).toEqual({
      left: CHECK_COL + 100,
    })
  })

  it("falls back to minWidth when a frozen column has no explicit width", () => {
    // Repro for the regression where the second frozen column landed at left:0
    // (overlapping the first) because column[0].width was undefined and the
    // reducer ignored its declared minWidth.
    const { result } = renderHook(() =>
      useSticky(2, [{ minWidth: 200 }, { minWidth: 100 }], false)
    )
    expect(result.current.getStickyPosition(1)).toEqual({ left: 200 })
  })

  it("prefers width over minWidth when both are set", () => {
    const { result } = renderHook(() =>
      useSticky(2, [{ width: 120, minWidth: 200 }, { width: 100 }], false)
    )
    expect(result.current.getStickyPosition(1)).toEqual({ left: 120 })
  })
})
