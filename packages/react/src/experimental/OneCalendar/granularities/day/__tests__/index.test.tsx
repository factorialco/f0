import { endOfDay, startOfDay, startOfMonth } from "date-fns"
import { describe, expect, it } from "vitest"
import { dayGranularity } from "../index"

describe("dayGranularity", () => {
  const baseDate = new Date(2024, 0, 15) // January 15, 2024
  const nextDayDate = new Date(2024, 0, 16) // January 16, 2024
  const invalidDate = new Date("Invalid Date")
  const i18n = {}

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = dayGranularity.toRangeString(baseDate, i18n)
      expect(result).toEqual({
        from: "15/01/2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = dayGranularity.toRangeString(
        {
          from: baseDate,
          to: nextDayDate,
        },
        i18n
      )
      expect(result).toEqual({
        from: "15/01/2024",
        to: "16/01/2024",
      })
    })

    it("handles undefined input", () => {
      const result = dayGranularity.toRangeString(undefined, i18n)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct day range", () => {
      const result = dayGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfDay(baseDate),
        to: endOfDay(baseDate),
      })
    })

    it("converts a date range to the correct day ranges", () => {
      const result = dayGranularity.toRange({
        from: baseDate,
        to: nextDayDate,
      })
      expect(result).toEqual({
        from: startOfDay(baseDate),
        to: endOfDay(nextDayDate),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = dayGranularity.toString(baseDate, i18n)
      expect(result).toBe("15/01/2024")
    })

    it("formats a single date correctly with long format", () => {
      const result = dayGranularity.toString(baseDate, i18n, "long")
      expect(result).toBe("15 Jan 2024")
    })

    it("formats a date range correctly", () => {
      const result = dayGranularity.toString(
        {
          from: baseDate,
          to: nextDayDate,
        },
        i18n
      )
      expect(result).toBe("15/01/2024 → 16/01/2024")
    })

    it("formats a date range correctly with long format", () => {
      const result = dayGranularity.toString(
        {
          from: baseDate,
          to: nextDayDate,
        },
        i18n,
        "long"
      )
      expect(result).toBe("15 → 16 Jan 2024")
    })

    it("formats a date range across months correctly with long format", () => {
      const result = dayGranularity.toString(
        {
          from: new Date(2024, 0, 31), // January 31, 2024
          to: new Date(2024, 1, 1), // February 1, 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("31 Jan → 01 Feb 2024")
    })

    it("formats a date range across years correctly with long format", () => {
      const result = dayGranularity.toString(
        {
          from: new Date(2023, 11, 31), // December 31, 2023
          to: new Date(2024, 0, 1), // January 1, 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("31 Dec 2023 → 01 Jan 2024")
    })

    it("formats a long range in same month correctly with long format", () => {
      const result = dayGranularity.toString(
        {
          from: new Date(2024, 0, 5), // January 5, 2024
          to: new Date(2024, 0, 25), // January 25, 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("05 → 25 Jan 2024")
    })
  })

  describe("fromString", () => {
    it("parses a single day string correctly", () => {
      const result = dayGranularity.fromString("15/01/2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 15, 0, 0, 0, 0),
        to: new Date(2024, 0, 15, 23, 59, 59, 999),
      })
    })

    it("parses a day range string correctly", () => {
      const result = dayGranularity.fromString("15/01/2024 - 16/01/2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 15, 0, 0, 0, 0),
        to: new Date(2024, 0, 16, 23, 59, 59, 999),
      })
    })

    it("handles different date separators", () => {
      const result = dayGranularity.fromString("15-01-2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 15, 0, 0, 0, 0),
        to: new Date(2024, 0, 15, 23, 59, 59, 999),
      })
    })

    it("handles invalid input", () => {
      const result = dayGranularity.fromString("invalid", i18n)
      expect(result).toEqual({
        from: invalidDate,
        to: invalidDate,
      })
    })
  })

  describe("navigate", () => {
    it("navigates to next day", () => {
      const result = dayGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2024, 0, 16))
    })

    it("navigates to previous day", () => {
      const result = dayGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2024, 0, 14))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next month", () => {
      const result = dayGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2024, 1, 15))
    })

    it("navigates to previous month", () => {
      const result = dayGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2023, 11, 15))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = dayGranularity.getPrevNext(dayGranularity.toRange(baseDate), {
        min: new Date(2024, 0, 14),
        max: new Date(2024, 0, 17),
      })

      expect(result).toEqual({
        prev: {
          from: new Date(2024, 0, 14, 0, 0, 0, 0),
          to: new Date(2024, 0, 14, 23, 59, 59, 999),
        },
        next: {
          from: new Date(2024, 0, 16, 0, 0, 0, 0),
          to: new Date(2024, 0, 16, 23, 59, 59, 999),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = dayGranularity.getPrevNext(
        {
          from: new Date(2024, 0, 14),
          to: new Date(2024, 0, 14),
        },
        {
          min: new Date(2024, 0, 14),
          max: new Date(2024, 0, 17),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = dayGranularity.getPrevNext(
        {
          from: new Date(2024, 0, 17),
          to: new Date(2024, 0, 17),
        },
        {
          min: new Date(2024, 0, 14),
          max: new Date(2024, 0, 17),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("label", () => {
    it("formats the label correctly", () => {
      const result = dayGranularity.label(baseDate, i18n)
      expect(result).toBe("January 2024")
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of month for any date", () => {
      const result = dayGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfMonth(baseDate))
    })
  })
})
