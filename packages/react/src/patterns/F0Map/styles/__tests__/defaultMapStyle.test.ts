import { describe, expect, it } from "vitest"
import { defaultMapStyle, f0MapStyles, googleMapStyles } from ".."
import type { F0MapProvider } from "../../providers/names"

describe("defaultMapStyle", () => {
  it("gives each engine a pair tagged for itself", () => {
    // The tag is what F0Map checks before handing a style to an engine, so a
    // default carrying the wrong one would be rejected by its own consumer.
    const providers: F0MapProvider[] = ["maplibre", "google"]
    for (const provider of providers) {
      expect(defaultMapStyle(provider).provider).toBe(provider)
    }
    expect(defaultMapStyle("maplibre")).toBe(f0MapStyles)
    expect(defaultMapStyle("google")).toBe(googleMapStyles)
  })

  it("carries a light and a dark half for both", () => {
    for (const pair of [f0MapStyles, googleMapStyles]) {
      expect(pair.light).toBeTruthy()
      expect(pair.dark).toBeTruthy()
      expect(pair.light).not.toBe(pair.dark)
    }
  })

  it("expresses the Google pair in Google's own styling model", () => {
    // Not a MapLibre StyleSpecification: a flat list of featureType rules, and
    // every featureType has to come from Google's fixed vocabulary.
    const rules = googleMapStyles.light as {
      featureType: string
      elementType: string
      stylers: unknown[]
    }[]
    expect(Array.isArray(rules)).toBe(true)
    const roots = new Set(rules.map((rule) => rule.featureType.split(".")[0]))
    expect([...roots].sort()).toEqual([
      "administrative",
      "all",
      "landscape",
      "poi",
      "road",
      "transit",
      "water",
    ])
    expect(rules.every((rule) => rule.stylers.length > 0)).toBe(true)
  })
})
