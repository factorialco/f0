import { describe, expect, it } from "vitest"

import type { I18nContextType } from "@/lib/providers/i18n"

import type { DateFilterOptions } from "../filterTypes/DateFilter/DateFilter"
import type { FilterTypeContext } from "../filterTypes/types"

import dateFilter from "../filterTypes/DateFilter"

const value = new Date(2026, 6, 12)

const contextFor = (
  options: DateFilterOptions,
  context: Partial<FilterTypeContext<DateFilterOptions>> = {}
): FilterTypeContext<DateFilterOptions> =>
  ({
    schema: { label: "Added on", options },
    i18n: {} as I18nContextType,
    locale: "en-US",
    ...context,
  }) as FilterTypeContext<DateFilterOptions>

describe("date filter chip label", () => {
  it("keeps the day-first format when localizedDayFormat is not opted into", () => {
    expect(dateFilter.chipLabel(value, contextFor({ view: "day" }))).toBe(
      "12/07/2026"
    )
  })

  it("follows the locale's field order once opted in", () => {
    expect(
      dateFilter.chipLabel(
        value,
        contextFor({ view: "day", localizedDayFormat: true })
      )
    ).toBe("07/12/2026")
  })

  it("falls back to the provider-level default when the filter does not set the flag", () => {
    expect(
      dateFilter.chipLabel(
        value,
        contextFor({ view: "day" }, { localizedDayFormat: true })
      )
    ).toBe("07/12/2026")
  })

  it("lets an explicit per-filter false override the provider-level default", () => {
    expect(
      dateFilter.chipLabel(
        value,
        contextFor(
          { view: "day", localizedDayFormat: false },
          { localizedDayFormat: true }
        )
      )
    ).toBe("12/07/2026")
  })
})
