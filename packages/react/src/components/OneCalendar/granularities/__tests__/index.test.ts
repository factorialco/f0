import { describe, expect, it } from "vitest"

import { granularityDefinitions, resolveGranularityDefinition } from "../index"

describe("granularityDefinitions", () => {
  // `periods` has no definition until a consumer supplies its ranges. Keeping it out of
  // the record is what keeps it out of `GranularityDefinitionKey`, and so out of every
  // exhaustive map a consumer writes over that key — form-field presets and compare-to
  // included, where it could do nothing anyway.
  it("holds only the calendar granularities", () => {
    expect(Object.keys(granularityDefinitions)).toEqual([
      "day",
      "week",
      "month",
      "quarter",
      "halfyear",
      "year",
      "range",
    ])
  })
})

describe("resolveGranularityDefinition", () => {
  it("resolves a calendar key to its static definition", () => {
    expect(resolveGranularityDefinition("month")).toBe(
      granularityDefinitions.month
    )
  })

  // The one key with no entry in the record still has to resolve to something: the empty
  // periods definition renders the "no periods" state instead of throwing.
  it("resolves periods to the empty definition", () => {
    expect(resolveGranularityDefinition("periods").calendarView).toBe("periods")
  })
})
