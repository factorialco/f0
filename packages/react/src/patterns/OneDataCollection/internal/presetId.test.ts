import { describe, expect, it } from "vitest"

import { derivePresetId } from "./presetId"

describe("derivePresetId", () => {
  it("uses the trimmed title as the id", () => {
    expect(derivePresetId("  My View  ", [])).toBe("My View")
  })

  it("collapses runs of whitespace to single spaces", () => {
    expect(derivePresetId("My   View\tnow", [])).toBe("My View now")
  })

  it("falls back to 'preset' for an empty/whitespace title", () => {
    expect(derivePresetId("   ", [])).toBe("preset")
  })

  it("suffixes an incrementing number on collision", () => {
    expect(derivePresetId("My View", ["My View"])).toBe("My View 2")
    expect(derivePresetId("My View", ["My View", "My View 2"])).toBe(
      "My View 3"
    )
  })

  it("de-dupes against developer preset ids too", () => {
    expect(derivePresetId("Engineering", ["Engineering", "other"])).toBe(
      "Engineering 2"
    )
  })
})
