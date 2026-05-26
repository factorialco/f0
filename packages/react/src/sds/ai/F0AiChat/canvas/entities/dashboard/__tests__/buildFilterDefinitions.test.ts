import { describe, expect, it } from "vitest"

import { buildFilterDefinitions } from "../DashboardContent"
import type { ChatDashboardFilterDefinition } from "../types"
import type { DashboardFilterOptions } from "../useDashboardCompute"

const dateSpec = (label = "Created"): ChatDashboardFilterDefinition => ({
  type: "date",
  label,
  column: "created_at",
  datasetId: "ds1",
})

const numericRangeSpec = (label = "Amount"): ChatDashboardFilterDefinition => ({
  type: "numericRange",
  label,
  column: "amount",
  datasetId: "ds1",
})

const inSpec = (label = "Department"): ChatDashboardFilterDefinition => ({
  type: "in",
  label,
  column: "department",
  datasetId: "ds1",
})

describe("buildFilterDefinitions", () => {
  it("returns undefined when filterSpecs is undefined", () => {
    expect(buildFilterDefinitions(undefined, undefined)).toBeUndefined()
  })

  it("returns undefined when filterSpecs is empty", () => {
    expect(buildFilterDefinitions({}, undefined)).toBeUndefined()
  })

  it("renders a date filter even when filterOptions is undefined", () => {
    // Regression: open-domain `date` filters used to be suppressed by an
    // over-eager `!filterOptions` short-circuit.
    const result = buildFilterDefinitions({ when: dateSpec("When") }, undefined)
    expect(result).toEqual({
      when: { type: "date", label: "When", options: { mode: "range" } },
    })
  })

  it("includes a date filter even when filterOptions[key] is missing but other keys exist", () => {
    const filterOptions: DashboardFilterOptions = {
      dept: ["Eng", "Sales"],
    }
    const result = buildFilterDefinitions(
      { when: dateSpec("When"), dept: inSpec("Dept") },
      filterOptions
    )
    expect(result?.when).toEqual({
      type: "date",
      label: "When",
      options: { mode: "range" },
    })
  })

  it("suppresses a numericRange filter when min === max", () => {
    const result = buildFilterDefinitions(
      { amount: numericRangeSpec() },
      { amount: { min: 10, max: 10 } }
    )
    expect(result).toBeUndefined()
  })

  it("renders a numericRange filter as number type with range mode when min < max", () => {
    const result = buildFilterDefinitions(
      { amount: numericRangeSpec("Amount") },
      { amount: { min: 0, max: 100 } }
    )
    expect(result).toEqual({
      amount: {
        type: "number",
        label: "Amount",
        options: { min: 0, max: 100, modes: ["range"] },
      },
    })
  })

  it("skips a numericRange filter when filterOptions[key] is missing", () => {
    const result = buildFilterDefinitions({ amount: numericRangeSpec() }, {})
    expect(result).toBeUndefined()
  })

  it("suppresses an `in` filter when options array is empty", () => {
    const result = buildFilterDefinitions({ dept: inSpec() }, { dept: [] })
    expect(result).toBeUndefined()
  })

  it("renders an `in` filter with mapped {value, label} pairs", () => {
    const result = buildFilterDefinitions(
      { dept: inSpec("Department") },
      { dept: ["Eng", "Sales"] }
    )
    expect(result).toEqual({
      dept: {
        type: "in",
        label: "Department",
        options: {
          options: [
            { value: "Eng", label: "Eng" },
            { value: "Sales", label: "Sales" },
          ],
        },
      },
    })
  })

  it("returns undefined when every spec is skipped", () => {
    const result = buildFilterDefinitions(
      {
        amount: numericRangeSpec(),
        dept: inSpec(),
      },
      {
        amount: { min: 5, max: 5 },
        dept: [],
      }
    )
    expect(result).toBeUndefined()
  })
})
