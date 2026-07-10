import { describe, expect, it } from "vitest"

import { fixedScales, nextScaleDown, nextScaleUp } from "../scales"

describe("scales", () => {
  it("exposes the fixed zoom steps in ascending order", () => {
    expect(fixedScales).toEqual([
      "0.5",
      "0.75",
      "1",
      "1.25",
      "1.5",
      "2",
      "3",
      "4",
    ])
  })

  it("steps up to the next larger fixed scale", () => {
    expect(nextScaleUp(1)).toBe(1.25)
    expect(nextScaleUp(0.9)).toBe(1)
  })

  it("steps down to the next smaller fixed scale", () => {
    expect(nextScaleDown(1)).toBe(0.75)
    expect(nextScaleDown(1.1)).toBe(1)
  })

  it("returns undefined past the bounds", () => {
    expect(nextScaleUp(4)).toBeUndefined()
    expect(nextScaleDown(0.5)).toBeUndefined()
  })
})
