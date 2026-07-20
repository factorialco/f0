import { describe, expect, it } from "vitest"

import {
  buildMonthOptions,
  buildYearOptions,
  DEFAULT_YEARS_RANGE,
  getYearBounds,
} from "../CalendarHeaderDropdowns"

describe("buildYearOptions", () => {
  it("defaults to a wide window centered on the current year, newest first", () => {
    const options = buildYearOptions(2026)

    expect(options).toHaveLength(DEFAULT_YEARS_RANGE * 2 + 1)
    expect(options[0]).toEqual({
      value: String(2026 + DEFAULT_YEARS_RANGE),
      label: String(2026 + DEFAULT_YEARS_RANGE),
    })
    expect(options[options.length - 1]).toEqual({
      value: String(2026 - DEFAULT_YEARS_RANGE),
      label: String(2026 - DEFAULT_YEARS_RANGE),
    })
  })

  it("reaches far enough back for birthdays and forward for deadlines", () => {
    const values = buildYearOptions(2026).map((o) => o.value)
    expect(values).toContain("1985")
    expect(values).toContain("2076")
  })

  it("bounds the list to minDate/maxDate years when provided", () => {
    const options = buildYearOptions(
      2026,
      new Date(1990, 0, 1),
      new Date(1995, 11, 31)
    )

    expect(options.map((o) => o.value)).toEqual([
      "1995",
      "1994",
      "1993",
      "1992",
      "1991",
      "1990",
    ])
  })

  it("stays descending even if min/max are passed inverted", () => {
    const options = buildYearOptions(
      2026,
      new Date(1995, 0, 1),
      new Date(1990, 0, 1)
    )
    expect(options[0].value).toBe("1995")
    expect(options[options.length - 1].value).toBe("1990")
  })
})

describe("getYearBounds", () => {
  it("defaults to the wide window centered on the current year", () => {
    expect(getYearBounds(2026)).toEqual({
      fromYear: 2026 - DEFAULT_YEARS_RANGE,
      toYear: 2026 + DEFAULT_YEARS_RANGE,
    })
  })

  it("uses minDate/maxDate years when provided", () => {
    expect(
      getYearBounds(2026, new Date(1990, 0, 1), new Date(1995, 11, 31))
    ).toEqual({ fromYear: 1990, toYear: 1995 })
  })

  it("normalizes inverted bounds", () => {
    expect(
      getYearBounds(2026, new Date(1995, 0, 1), new Date(1990, 0, 1))
    ).toEqual({ fromYear: 1990, toYear: 1995 })
  })

  it("stretches to include a view year outside the window", () => {
    // Selection is bounded by the consumer's minDate/maxDate only, so an
    // allowed value can lie outside the default window (e.g. a very old date
    // when only maxDate is set). The range must include it so the dropdown
    // can display it.
    expect(getYearBounds(2026, undefined, new Date(2026, 0, 1), 1850)).toEqual({
      fromYear: 1850,
      toYear: 2026,
    })
    expect(getYearBounds(2026, new Date(2020, 0, 1), undefined, 2200)).toEqual({
      fromYear: 2020,
      toYear: 2200,
    })
  })

  it("does not shrink the window when the view year is inside it", () => {
    expect(getYearBounds(2026, undefined, undefined, 2026)).toEqual({
      fromYear: 2026 - DEFAULT_YEARS_RANGE,
      toYear: 2026 + DEFAULT_YEARS_RANGE,
    })
  })
})

describe("buildMonthOptions", () => {
  it("returns 12 localized months, none disabled without bounds", () => {
    const options = buildMonthOptions(2026, "en-US")

    expect(options).toHaveLength(12)
    expect(options[0]).toMatchObject({ value: "0", label: "January" })
    expect(options[11]).toMatchObject({ value: "11", label: "December" })
    expect(options.every((o) => !o.disabled)).toBe(true)
  })

  it("localizes month names", () => {
    const options = buildMonthOptions(2026, "es-ES")
    expect(options[0].label.toLowerCase()).toBe("enero")
  })

  it("returns localized short month names for compact headers", () => {
    const english = buildMonthOptions(
      2026,
      "en-US",
      undefined,
      undefined,
      "short"
    )
    expect(english[8].label).toBe("Sep")

    const spanish = buildMonthOptions(
      2026,
      "es-ES",
      undefined,
      undefined,
      "short"
    )
    expect(spanish[0].label.toLowerCase()).toContain("ene")
  })

  it("disables months that fall entirely outside min/max", () => {
    // Range is only June–August 2026.
    const options = buildMonthOptions(
      2026,
      "en-US",
      new Date(2026, 5, 1),
      new Date(2026, 7, 31)
    )

    // January (0) is before the range, December (11) is after it.
    expect(options[0].disabled).toBe(true)
    expect(options[11].disabled).toBe(true)
    // June/July/August are within range.
    expect(options[5].disabled).toBe(false)
    expect(options[6].disabled).toBe(false)
    expect(options[7].disabled).toBe(false)
  })

  it("keeps a partially-covered boundary month enabled", () => {
    // minDate mid-March: March is partially covered, so it stays enabled.
    const options = buildMonthOptions(2026, "en-US", new Date(2026, 2, 15))
    expect(options[2].disabled).toBe(false)
    expect(options[1].disabled).toBe(true) // February fully before min
  })
})
