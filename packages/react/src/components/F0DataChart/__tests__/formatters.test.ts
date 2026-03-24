import { describe, expect, it } from "vitest"

import { formatPercent } from "../utils/formatters"

describe("formatPercent", () => {
  it("returns 0% when total is 0", () => {
    expect(formatPercent(50, 0)).toBe("0%")
  })

  it("returns 100% when value equals total", () => {
    expect(formatPercent(200, 200)).toBe("100%")
  })

  it("returns one decimal place for partial values", () => {
    expect(formatPercent(50, 200)).toBe("25.0%")
    expect(formatPercent(1, 3)).toBe("33.3%")
  })

  it("handles very small percentages", () => {
    expect(formatPercent(1, 10000)).toBe("0.0%")
  })
})
