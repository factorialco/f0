import { describe, expect, it } from "vitest"

import {
  buildMonthOptions,
  buildYearOptions,
  DEFAULT_YEARS_BACK,
  getYearBounds,
} from "../CalendarHeaderDropdowns"

describe("buildYearOptions", () => {
  it("defaults to a wide window ending at the current year, newest first", () => {
    const options = buildYearOptions(2026)

    expect(options).toHaveLength(DEFAULT_YEARS_BACK + 1)
    expect(options[0]).toEqual({ value: "2026", label: "2026" })
    expect(options[options.length - 1]).toEqual({
      value: String(2026 - DEFAULT_YEARS_BACK),
      label: String(2026 - DEFAULT_YEARS_BACK),
    })
  })

  it("reaches far enough back to cover a birthday", () => {
    const values = buildYearOptions(2026).map((o) => o.value)
    expect(values).toContain("1985")
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
  it("defaults to the wide window ending at the current year", () => {
    expect(getYearBounds(2026)).toEqual({
      fromYear: 2026 - DEFAULT_YEARS_BACK,
      toYear: 2026,
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
