import { endOfDay, startOfDay } from "date-fns"
import { describe, expect, it } from "vitest"

import { DateRange } from "../types"
import { toGranularityDateRange } from "../utils"

describe("toGranularityDateRange", () => {
  // Mock granularity functions
  const mockFromFn = (date: Date): Date => {
    return startOfDay(date)
  }

  const mockToFn = (date: Date): Date => {
    // Mock: end of day
    return endOfDay(date)
  }

  it("should convert single date to DateRangeComplete using granularity functions", () => {
    const inputDate = new Date("2024-01-15T12:30:00")
    const result = toGranularityDateRange(inputDate, mockFromFn, mockToFn)

    expect(result).toEqual({
      from: new Date("2024-01-15T00:00:00.000"),
      to: new Date("2024-01-15T23:59:59.999"),
    })
  })

  it("should convert DateRange to DateRangeComplete using granularity functions", () => {
    const inputRange: DateRange = {
      from: new Date("2024-01-15T12:30:00"),
      to: new Date("2024-01-20T14:45:00"),
    }
    const result = toGranularityDateRange(inputRange, mockFromFn, mockToFn)

    expect(result).toEqual({
      from: new Date("2024-01-15T00:00:00.000"),
      to: new Date("2024-01-20T23:59:59.999"),
    })
  })

  it("should use from date for to when DateRange has no to date", () => {
    const inputRange: DateRange = {
      from: new Date("2024-01-15T12:30:00"),
    }
    const result = toGranularityDateRange(inputRange, mockFromFn, mockToFn)

    expect(result).toEqual({
      from: new Date("2024-01-15T00:00:00.000"),
      to: new Date("2024-01-15T23:59:59.999"),
    })
  })

  it("should return null when input is undefined", () => {
    const result = toGranularityDateRange(undefined, mockFromFn, mockToFn)
    expect(result).toBeNull()
  })

  it("should return null when input is null", () => {
    const result = toGranularityDateRange(null, mockFromFn, mockToFn)
    expect(result).toBeNull()
  })

  it("should work with different granularity functions", () => {
    // Mock: start/end of month
    const monthFromFn = (date: Date): Date => {
      const newDate = new Date(date)
      newDate.setDate(1)
      newDate.setHours(0, 0, 0, 0)
      return newDate
    }

    const monthToFn = (date: Date): Date => {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() + 1)
      newDate.setDate(0) // Last day of previous month
      newDate.setHours(23, 59, 59, 999)
      return newDate
    }

    const inputDate = new Date("2024-01-15")
    const result = toGranularityDateRange(inputDate, monthFromFn, monthToFn)

    expect(result?.from.getDate()).toBe(1) // First day of month
    expect(result?.to?.getDate()).toBe(31) // Last day of January
  })

  it("should handle edge case dates correctly", () => {
    const leapYearDate = new Date("2024-02-29T12:00:00")
    const result = toGranularityDateRange(leapYearDate, mockFromFn, mockToFn)

    expect(result).toEqual({
      from: new Date("2024-02-29T00:00:00.000"),
      to: new Date("2024-02-29T23:59:59.999"),
    })
  })

  it("should preserve timezone handling in granularity functions", () => {
    const utcDate = new Date("2024-01-15T00:00:00.000Z")
    const result = toGranularityDateRange(utcDate, mockFromFn, mockToFn)

    expect(result?.from).toBeInstanceOf(Date)
    expect(result?.to).toBeInstanceOf(Date)
    expect(result?.from.getTime()).toBeLessThanOrEqual(
      result?.to?.getTime() || 0
    )
  })
})
