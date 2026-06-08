import { describe, expect, it } from "vitest"

import {
  lerpColor,
  paletteColor,
  resolveChartColorToken,
  resolveDataPointColor,
} from "../utils/colors"

describe("paletteColor", () => {
  it("returns a color for index 0", () => {
    expect(paletteColor(0)).toMatch(/^#[0-9a-f]{6}$/)
  })

  it("wraps around after palette length", () => {
    expect(paletteColor(0)).toBe(paletteColor(10))
  })
})

describe("resolveChartColorToken", () => {
  it("resolves viridian to a hex color", () => {
    const hex = resolveChartColorToken("viridian")
    expect(hex).toMatch(/^#[0-9a-f]{6}$/)
  })

  it("resolves different tokens to different colors", () => {
    expect(resolveChartColorToken("viridian")).not.toBe(
      resolveChartColorToken("red")
    )
  })
})

describe("lerpColor", () => {
  it("returns the start color at t=0", () => {
    expect(lerpColor("#000000", "#ffffff", 0)).toBe("#000000")
  })

  it("returns the end color at t=1", () => {
    expect(lerpColor("#000000", "#ffffff", 1)).toBe("#ffffff")
  })

  it("returns a midpoint color at t=0.5", () => {
    const mid = lerpColor("#000000", "#ffffff", 0.5)
    expect(mid).toMatch(/^#[0-9a-f]{6}$/)
    expect(mid).not.toBe("#000000")
    expect(mid).not.toBe("#ffffff")
  })
})

describe("resolveDataPointColor", () => {
  it("uses point color when provided", () => {
    const result = resolveDataPointColor("red", "#00ff00", 0)
    const redHex = resolveChartColorToken("red")
    expect(result).toBe(redHex)
  })

  it("falls back to series color when no point color", () => {
    expect(resolveDataPointColor(undefined, "#00ff00", 0)).toBe("#00ff00")
  })

  it("uses color scale when no point or series color", () => {
    const result = resolveDataPointColor(undefined, undefined, 0, {
      ratio: 0.5,
      lightColor: "#000000",
      baseColor: "#ffffff",
    })
    expect(result).toMatch(/^#[0-9a-f]{6}$/)
    expect(result).not.toBe("#000000")
    expect(result).not.toBe("#ffffff")
  })

  it("falls back to palette color when nothing else is set", () => {
    const result = resolveDataPointColor(undefined, undefined, 0)
    expect(result).toBe(paletteColor(0))
  })
})
