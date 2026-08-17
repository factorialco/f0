import { describe, expect, it } from "vitest"

import { getColSizing, getColWidth, isFillWidth } from "../colWidth"

describe("getColWidth", () => {
  it("passes a numeric width through", () => {
    expect(getColWidth(240)).toBe(240)
  })

  it("leaves an auto column unsized", () => {
    expect(getColWidth("auto")).toBeUndefined()
  })

  it("resolves fit to its shrink-to-content value", () => {
    expect(getColWidth("fit")).toBe(1)
  })

  it("resolves fill to a percentage", () => {
    expect(getColWidth("fill")).toBe("100%")
  })
})

describe("getColSizing", () => {
  it("pins all three properties on a sized column so it cannot shrink or grow", () => {
    expect(getColSizing(240)).toEqual({
      width: 240,
      maxWidth: 240,
      minWidth: 240,
    })
  })

  it("lets an explicit minWidth lower the floor without unpinning the width", () => {
    expect(getColSizing(240, 120)).toEqual({
      width: 240,
      maxWidth: 240,
      minWidth: 120,
    })
  })

  // Both halves matter: the percentage is what absorbs the table's leftover
  // width, and the absent maxWidth plus the zero floor are what stop the
  // column's own text from setting its minimum.
  it("makes a fill column absorb the leftover width with no ceiling and no floor", () => {
    expect(getColSizing("fill")).toEqual({
      width: "100%",
      maxWidth: undefined,
      minWidth: 0,
    })
  })

  it("honours an explicit minWidth on a fill column", () => {
    expect(getColSizing("fill", 160)).toEqual({
      width: "100%",
      maxWidth: undefined,
      minWidth: 160,
    })
  })
})

describe("isFillWidth", () => {
  it.each([
    ["fill", true],
    ["auto", false],
    ["fit", false],
    [240, false],
  ] as const)("reports %s as %s", (width, expected) => {
    expect(isFillWidth(width)).toBe(expected)
  })
})
