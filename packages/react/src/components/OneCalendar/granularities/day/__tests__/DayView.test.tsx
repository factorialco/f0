import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DayView } from "../DayView"

const grid = () => document.querySelectorAll("table")

describe("DayView", () => {
  it("keeps the same month grid when `month` moves to another day of the same month", () => {
    const { rerender } = render(
      <DayView mode="single" month={new Date(2025, 8, 30)} />
    )
    const before = grid()
    expect(before).toHaveLength(1)

    rerender(<DayView mode="single" month={new Date(2025, 8, 1)} />)

    // Same month, same grid: no exit/enter transition should have been started
    const after = grid()
    expect(after).toHaveLength(1)
    expect(after[0]).toBe(before[0])
  })

  it("swaps the month grid when `month` moves to a different month", () => {
    const { rerender } = render(
      <DayView mode="single" month={new Date(2025, 8, 30)} />
    )
    const before = grid()[0]

    rerender(<DayView mode="single" month={new Date(2025, 9, 1)} />)

    // A real month change re-keys the grid, so the new month is a new table
    // (the outgoing one may still be in the DOM while it animates out)
    const tables = Array.from(grid())
    expect(tables.some((t) => t !== before)).toBe(true)
  })

  it("keeps the range grid stable across days of the same month", () => {
    const { rerender } = render(
      <DayView mode="range" month={new Date(2025, 8, 30)} />
    )
    const before = grid()
    expect(before).toHaveLength(1)

    rerender(<DayView mode="range" month={new Date(2025, 8, 1)} />)

    const after = grid()
    expect(after).toHaveLength(1)
    expect(after[0]).toBe(before[0])
  })
})
