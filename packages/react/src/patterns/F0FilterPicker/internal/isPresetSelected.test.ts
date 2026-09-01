import { describe, expect, it } from "vitest"

import type {
  FiltersDefinition,
  FiltersState,
  PresetDefinition,
} from "../types"

import { isPresetSelected } from "./isPresetSelected"

type TestFilters = FiltersDefinition

const preset = (
  filter: FiltersState<TestFilters>
): PresetDefinition<TestFilters> => ({
  label: "Test",
  filter,
})

describe("isPresetSelected", () => {
  it("returns true when filters exactly match", () => {
    expect(
      isPresetSelected(
        preset({ status: ["active"], department: ["engineering"] }),
        { status: ["active"], department: ["engineering"] }
      )
    ).toBe(true)
  })

  it("returns true when both preset and current filters are empty", () => {
    expect(isPresetSelected(preset({}), {})).toBe(true)
  })

  it("returns false when current filters have extra keys", () => {
    expect(
      isPresetSelected(preset({ status: ["active"] }), {
        status: ["active"],
        department: ["engineering"],
      })
    ).toBe(false)
  })

  it("returns false when current filters are missing keys", () => {
    expect(
      isPresetSelected(
        preset({ status: ["active"], department: ["engineering"] }),
        { status: ["active"] }
      )
    ).toBe(false)
  })

  it("returns false when same keys have different values", () => {
    expect(
      isPresetSelected(preset({ status: ["active"] }), {
        status: ["inactive"],
      })
    ).toBe(false)
  })

  it("returns false when preset filter is non-empty and current is empty", () => {
    expect(isPresetSelected(preset({ status: ["active"] }), {})).toBe(false)
  })

  it("returns false when preset filter is empty and current is non-empty", () => {
    expect(isPresetSelected(preset({}), { status: ["active"] })).toBe(false)
  })

  it("matches regardless of key insertion order", () => {
    const a = { department: ["eng"], status: ["active"] }
    const b = { status: ["active"], department: ["eng"] }
    expect(isPresetSelected(preset(a), b)).toBe(true)
    expect(isPresetSelected(preset(b), a)).toBe(true)
  })

  it("correctly compares array filter values by content", () => {
    expect(
      isPresetSelected(preset({ department: ["a", "b"] }), {
        department: ["a", "b"],
      })
    ).toBe(true)

    expect(
      isPresetSelected(preset({ department: ["a", "b"] }), {
        department: ["b", "a"],
      })
    ).toBe(false)
  })

  it("matches object filter values regardless of object key insertion order", () => {
    expect(
      isPresetSelected(
        preset({
          salary: {
            mode: "range",
            min: 100,
            max: 200,
          } as unknown as FiltersState<TestFilters>[string],
        }),
        {
          salary: {
            max: 200,
            min: 100,
            mode: "range",
          } as unknown as FiltersState<TestFilters>[string],
        }
      )
    ).toBe(true)
  })

  it("treats undefined values as absent keys in current filters", () => {
    expect(
      isPresetSelected(preset({ status: ["active"] }), {
        status: ["active"],
        department: undefined,
      })
    ).toBe(true)
  })

  it("treats undefined values as absent keys in preset filter", () => {
    expect(
      isPresetSelected(preset({ status: ["active"], department: undefined }), {
        status: ["active"],
      })
    ).toBe(true)
  })

  it("treats undefined symmetrically in both preset and current", () => {
    expect(
      isPresetSelected(preset({ status: ["active"], department: undefined }), {
        status: ["active"],
        department: undefined,
      })
    ).toBe(true)
  })

  it("treats explicit null as a real value (not absent)", () => {
    // null is a meaningful filter value, distinct from undefined
    expect(
      isPresetSelected(
        preset({
          status: null as unknown as FiltersState<TestFilters>[string],
        }),
        { status: null as unknown as FiltersState<TestFilters>[string] }
      )
    ).toBe(true)

    expect(
      isPresetSelected(
        preset({
          status: null as unknown as FiltersState<TestFilters>[string],
        }),
        {}
      )
    ).toBe(false)
  })

  it("returns false for null preset.filter", () => {
    expect(
      isPresetSelected(
        {
          label: "Test",
          filter: null,
        } as unknown as PresetDefinition<TestFilters>,
        { status: ["active"] }
      )
    ).toBe(false)
  })

  it("returns false for undefined preset.filter", () => {
    expect(
      isPresetSelected(
        {
          label: "Test",
          filter: undefined,
        } as unknown as PresetDefinition<TestFilters>,
        {}
      )
    ).toBe(false)
  })

  it("returns false for array preset.filter", () => {
    expect(
      isPresetSelected(
        {
          label: "Test",
          filter: [],
        } as unknown as PresetDefinition<TestFilters>,
        {}
      )
    ).toBe(false)
  })
})
