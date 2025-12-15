import { describe, expect, it } from "vitest"
import { toCalendarPickerMatcher } from "../utils"

describe("toCalendarPickerMatcher", () => {
  const minDate = new Date("2024-01-01")
  const maxDate = new Date("2024-12-31")

  it("should return empty array when no dates are provided", () => {
    const result = toCalendarPickerMatcher({})
    expect(result).toEqual([])
  })

  it("should return before matcher when only minDate is provided", () => {
    const result = toCalendarPickerMatcher({ minDate })
    expect(result).toEqual([{ before: minDate }])
  })

  it("should return after matcher when only maxDate is provided", () => {
    const result = toCalendarPickerMatcher({ maxDate })
    expect(result).toEqual([{ after: maxDate }])
  })

  it("should return both matchers when both dates are provided", () => {
    const result = toCalendarPickerMatcher({ minDate, maxDate })
    expect(result).toEqual([{ before: minDate }, { after: maxDate }])
  })

  it("should handle undefined minDate and defined maxDate", () => {
    const result = toCalendarPickerMatcher({ minDate: undefined, maxDate })
    expect(result).toEqual([{ after: maxDate }])
  })

  it("should handle defined minDate and undefined maxDate", () => {
    const result = toCalendarPickerMatcher({ minDate, maxDate: undefined })
    expect(result).toEqual([{ before: minDate }])
  })

  it("should handle both dates as undefined", () => {
    const result = toCalendarPickerMatcher({
      minDate: undefined,
      maxDate: undefined,
    })
    expect(result).toEqual([])
  })

  it("should preserve exact date references in matchers", () => {
    const specificMinDate = new Date("2024-06-15T10:30:00")
    const specificMaxDate = new Date("2024-08-20T14:45:00")

    const result = toCalendarPickerMatcher({
      minDate: specificMinDate,
      maxDate: specificMaxDate,
    })

    expect(result).toEqual([{ before: specificMinDate }, { after: specificMaxDate }])

    // Check that the actual date objects are the same reference
    const matchers = result as Array<{ before?: Date; after?: Date }>
    expect(matchers[0].before).toBe(specificMinDate)
    expect(matchers[1].after).toBe(specificMaxDate)
  })

  it("should handle same minDate and maxDate", () => {
    const sameDate = new Date("2024-07-15")
    const result = toCalendarPickerMatcher({
      minDate: sameDate,
      maxDate: sameDate,
    })

    expect(result).toEqual([{ before: sameDate }, { after: sameDate }])
  })
})
