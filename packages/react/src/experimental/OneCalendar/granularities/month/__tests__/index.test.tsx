import { endOfMonth, startOfMonth } from "date-fns"
import { describe, expect, it } from "vitest"
import { monthGranularity } from "../index"

describe("monthGranularity", () => {
  const baseDate = new Date(2024, 0, 15) // January 15, 2024
  const nextMonthDate = new Date(2024, 1, 15) // February 15, 2024
  const invalidDate = new Date("Invalid Date")
  const i18n = {}

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = monthGranularity.toRangeString(baseDate, i18n)
      expect(result).toEqual({
        from: "01/2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = monthGranularity.toRangeString(
        {
          from: baseDate,
          to: nextMonthDate,
        },
        i18n
      )
      expect(result).toEqual({
        from: "01/2024",
        to: "02/2024",
      })
    })

    it("handles undefined input", () => {
      const result = monthGranularity.toRangeString(undefined, i18n)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct month range", () => {
      const result = monthGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfMonth(baseDate),
        to: endOfMonth(baseDate),
      })
    })

    it("converts a date range to the correct month ranges", () => {
      const result = monthGranularity.toRange({
        from: baseDate,
        to: nextMonthDate,
      })
      expect(result).toEqual({
        from: startOfMonth(baseDate),
        to: endOfMonth(nextMonthDate),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = monthGranularity.toString(baseDate, i18n)
      expect(result).toBe("01/2024")
    })

    it("formats a single date correctly with long format", () => {
      const result = monthGranularity.toString(baseDate, i18n, "long")
      expect(result).toBe("Jan 2024")
    })

    it("formats a date range correctly", () => {
      const result = monthGranularity.toString(
        {
          from: baseDate,
          to: nextMonthDate,
        },
        i18n
      )
      expect(result).toBe("01/2024 → 02/2024")
    })

    it("formats a date range correctly with long format", () => {
      const result = monthGranularity.toString(
        {
          from: baseDate,
          to: nextMonthDate,
        },
        i18n,
        "long"
      )
      expect(result).toBe("Jan → Feb 2024")
    })

    it("formats a month range across years correctly with long format", () => {
      const result = monthGranularity.toString(
        {
          from: new Date(2023, 11, 15), // December 2023
          to: new Date(2024, 1, 15), // February 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("Dec 2023 → Feb 2024")
    })

    it("formats a long month range in same year correctly with long format", () => {
      const result = monthGranularity.toString(
        {
          from: new Date(2024, 2, 15), // March 2024
          to: new Date(2024, 8, 15), // September 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("Mar → Sep 2024")
    })

    it("formats first month of year correctly with long format", () => {
      const result = monthGranularity.toString(
        new Date(2024, 0, 15),
        i18n,
        "long"
      ) // January 2024
      expect(result).toBe("Jan 2024")
    })

    it("formats last month of year correctly with long format", () => {
      const result = monthGranularity.toString(
        new Date(2024, 11, 15),
        i18n,
        "long"
      ) // December 2024
      expect(result).toBe("Dec 2024")
    })

    it("formats leap year February correctly with long format", () => {
      const result = monthGranularity.toString(
        new Date(2024, 1, 15),
        i18n,
        "long"
      ) // February 2024 (leap year)
      expect(result).toBe("Feb 2024")
    })
  })

  describe("fromString", () => {
    it("parses a single month string correctly", () => {
      const result = monthGranularity.fromString("01/2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 0, 31, 23, 59, 59, 999),
      })
    })

    it("parses a month range string correctly", () => {
      const result = monthGranularity.fromString("01/2024 - 02/2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 1, 29, 23, 59, 59, 999), // 2024 is a leap year
      })
    })

    it("parses month names correctly", () => {
      const result = monthGranularity.fromString("January 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 0, 31, 23, 59, 59, 999),
      })
    })

    it("handles invalid input", () => {
      const result = monthGranularity.fromString("invalid", i18n)
      expect(result?.from).toStrictEqual(invalidDate)
      expect(result?.to).toStrictEqual(invalidDate)
    })
  })

  describe("navigate", () => {
    it("navigates to next month", () => {
      const result = monthGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2024, 1, 15))
    })

    it("navigates to previous month", () => {
      const result = monthGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2023, 11, 15))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next year", () => {
      const result = monthGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2025, 0, 15))
    })

    it("navigates to previous year", () => {
      const result = monthGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2023, 0, 15))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = monthGranularity.getPrevNext(
        {
          from: startOfMonth(baseDate), // January 1, 2024
          to: endOfMonth(baseDate), // January 31, 2024
        },
        {
          min: new Date(2023, 11, 1),
          max: new Date(2024, 11, 31),
        }
      )

      expect(result).toEqual({
        prev: {
          from: new Date(2023, 11, 1),
          to: new Date(2023, 11, 31, 23, 59, 59, 999),
        },
        next: {
          from: new Date(2024, 1, 1),
          to: new Date(2024, 1, 29, 23, 59, 59, 999),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = monthGranularity.getPrevNext(
        {
          from: new Date(2023, 11, 1),
          to: new Date(2023, 11, 31),
        },
        {
          min: new Date(2023, 11, 1),
          max: new Date(2024, 11, 31),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = monthGranularity.getPrevNext(
        {
          from: new Date(2024, 11, 1),
          to: new Date(2024, 11, 31),
        },
        {
          min: new Date(2023, 11, 1),
          max: new Date(2024, 11, 31),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of month for any date", () => {
      const result = monthGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfMonth(baseDate))
    })
  })
})
