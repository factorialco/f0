import { describe, expect, it } from "vitest"

import { dateToDisplayTime, displayTimeToDate } from "./utils"

const at = (hours: number, minutes: number): Date => {
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date
}

describe("dateToDisplayTime", () => {
  it("formats as 24h", () => {
    expect(dateToDisplayTime(at(20, 0), "24h")).toBe("20:00")
    expect(dateToDisplayTime(at(9, 5), "24h")).toBe("09:05")
  })

  it("formats as 12h with meridiem", () => {
    expect(dateToDisplayTime(at(20, 0), "12h")).toBe("08:00 PM")
    expect(dateToDisplayTime(at(9, 5), "12h")).toBe("09:05 AM")
    expect(dateToDisplayTime(at(0, 0), "12h")).toBe("12:00 AM")
  })

  it("returns empty string for a missing/invalid date", () => {
    expect(dateToDisplayTime(undefined, "24h")).toBe("")
    expect(dateToDisplayTime(new Date("invalid"), "12h")).toBe("")
  })
})

describe("displayTimeToDate", () => {
  it("parses 24h", () => {
    const date = displayTimeToDate("20:00", "24h")
    expect(date?.getHours()).toBe(20)
    expect(date?.getMinutes()).toBe(0)
  })

  it("parses 12h with meridiem", () => {
    const date = displayTimeToDate("08:00 PM", "12h")
    expect(date?.getHours()).toBe(20)
    expect(date?.getMinutes()).toBe(0)
  })

  it("returns undefined for empty or invalid input", () => {
    expect(displayTimeToDate("", "24h")).toBeUndefined()
    expect(displayTimeToDate("not a time", "24h")).toBeUndefined()
  })
})
