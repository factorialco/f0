import { describe, expect, it } from "vitest"
import type { FiltersDefinition, PresetsDefinition } from "../types"
import { getPresetCoveredKeys } from "./getPresetCoveredKeys"

describe("getPresetCoveredKeys", () => {
  const mockPresets: PresetsDefinition<FiltersDefinition> = [
    {
      label: "London Office",
      filter: { location: ["london"] },
    },
    {
      label: "Engineering Team",
      filter: { department: ["engineering"], role: ["engineer"] },
    },
    {
      label: "Remote Workers",
      filter: { location: ["remote"] },
    },
  ]

  it("should return empty set when no presets are provided", () => {
    const result = getPresetCoveredKeys(undefined, { location: ["london"] })
    expect(result.size).toBe(0)
  })

  it("should return empty set when presets array is empty", () => {
    const result = getPresetCoveredKeys([], { location: ["london"] })
    expect(result.size).toBe(0)
  })

  it("should return empty set when no preset matches current filters", () => {
    const result = getPresetCoveredKeys(mockPresets, { location: ["tokyo"] })
    expect(result.size).toBe(0)
  })

  it("should return covered keys when single preset is selected", () => {
    const result = getPresetCoveredKeys(mockPresets, { location: ["london"] })
    expect(result).toEqual(new Set(["location"]))
  })

  it("should return covered keys when multi-filter preset is selected", () => {
    const result = getPresetCoveredKeys(mockPresets, {
      department: ["engineering"],
      role: ["engineer"],
    })
    expect(result).toEqual(new Set(["department", "role"]))
  })

  it("should return covered keys from multiple selected presets", () => {
    const result = getPresetCoveredKeys(mockPresets, {
      location: ["london"],
      department: ["engineering"],
      role: ["engineer"],
    })
    // Both "London Office" and "Engineering Team" presets are selected
    expect(result).toEqual(new Set(["location", "department", "role"]))
  })

  it("should not include keys when preset partially matches", () => {
    // Only department matches, but role doesn't - so Engineering Team preset is not selected
    const result = getPresetCoveredKeys(mockPresets, {
      department: ["engineering"],
      role: ["manager"], // Different from preset
    })
    expect(result.size).toBe(0)
  })

  it("should return covered keys when filters include extra keys beyond preset", () => {
    const result = getPresetCoveredKeys(mockPresets, {
      location: ["london"],
      employee: ["bob"], // Extra filter not in any preset
    })
    // "London Office" preset is selected, so location is covered
    expect(result).toEqual(new Set(["location"]))
  })

  it("should handle array value comparison correctly", () => {
    // Preset has ["london"], but current filter has ["london", "tokyo"]
    const result = getPresetCoveredKeys(mockPresets, {
      location: ["london", "tokyo"],
    })
    // Values don't match exactly, so no preset is selected
    expect(result.size).toBe(0)
  })
})
