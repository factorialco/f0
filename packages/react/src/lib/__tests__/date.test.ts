import { describe, expect, it } from "vitest"

import { de as locale } from "date-fns/locale"

import {
  formatTime,
  getAbbreviateMonth,
  getAgo,
  getDisplayDateBasedOnDuration,
} from "../date"

describe("date formatting with an explicit locale", () => {
  it("formats a relative date", () => {
    const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000)

    expect(getAgo(threeHoursAgo, locale)).toBe("vor 3 Stunden")
  })

  it("formats an absolute date", () => {
    expect(
      getDisplayDateBasedOnDuration(new Date("2026-07-31T12:00:00Z"), {
        locale,
      })
    ).toMatch(/31\. Juli 2026/)
  })

  it("formats a time without the English AM/PM suffix", () => {
    const time = formatTime(new Date("2026-07-31T12:00:00Z"), locale)

    expect(time).toMatch(/^\d{2}:\d{2}$/)
  })

  it("formats an abbreviated month", () => {
    expect(getAbbreviateMonth(new Date("2026-10-15T12:00:00Z"), locale)).toBe(
      "Okt"
    )
  })
})
