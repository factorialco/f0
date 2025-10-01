import { endOfISOWeek, startOfISOWeek, startOfMonth } from "date-fns"
import { describe, expect, it } from "vitest"
import { weekGranularity } from "../index"

describe("weekGranularity", () => {
  // January 15, 2024 is a Monday (week 3 of 2024)
  const baseDate = new Date(2024, 0, 15)
  const nextWeekDate = new Date(2024, 0, 22)
  const invalidDate = new Date("Invalid Date")
  const i18n = {
    date: {
      granularities: {
        week: {
          long: "Week of {{day}} {{month}} {{year}}",
        },
      },
    },
  }

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = weekGranularity.toRangeString(baseDate, i18n)
      expect(result).toEqual({
        from: "W3 2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = weekGranularity.toRangeString(
        {
          from: baseDate,
          to: nextWeekDate,
        },
        i18n
      )
      expect(result).toEqual({
        from: "W3 2024",
        to: "W4 2024",
      })
    })

    it("handles undefined input", () => {
      const result = weekGranularity.toRangeString(undefined, i18n)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct week range", () => {
      const result = weekGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfISOWeek(baseDate),
        to: endOfISOWeek(baseDate),
      })
    })

    it("converts a date range to the correct week ranges", () => {
      const result = weekGranularity.toRange({
        from: baseDate,
        to: nextWeekDate,
      })
      expect(result).toEqual({
        from: startOfISOWeek(baseDate),
        to: endOfISOWeek(nextWeekDate),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = weekGranularity.toString(baseDate, i18n)
      expect(result).toBe("W3 2024")
    })

    it("formats a single date correctly with long format", () => {
      const result = weekGranularity.toString(baseDate, i18n, "long")
      expect(result).toBe("Week of 15 Jan 2024")
    })

    it("formats a date range correctly", () => {
      const result = weekGranularity.toString(
        {
          from: baseDate,
          to: nextWeekDate,
        },
        i18n
      )
      expect(result).toBe("W3 2024 → W4 2024")
    })
  })

  describe("fromString", () => {
    it("parses a single week string correctly", () => {
      const result = weekGranularity.fromString("W3 2024", i18n)
      expect(result).toEqual({
        from: startOfISOWeek(new Date(2024, 0, 15)),
        to: endOfISOWeek(new Date(2024, 0, 15)),
      })
    })

    it("parses a week range string correctly", () => {
      const result = weekGranularity.fromString("W3 2024 - W4 2024", i18n)
      expect(result).toEqual({
        from: startOfISOWeek(new Date(2024, 0, 15)),
        to: endOfISOWeek(new Date(2024, 0, 22)),
      })
    })

    it("handles different week formats", () => {
      const result = weekGranularity.fromString("w3 2024", i18n)
      expect(result).toEqual({
        from: startOfISOWeek(new Date(2024, 0, 15)),
        to: endOfISOWeek(new Date(2024, 0, 15)),
      })
    })

    it("handles invalid input", () => {
      const result = weekGranularity.fromString("invalid", i18n)
      expect(result?.from).toStrictEqual(invalidDate)
      expect(result?.to).toStrictEqual(invalidDate)
    })
  })

  describe("navigate", () => {
    it("navigates to next week", () => {
      const result = weekGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2024, 0, 22))
    })

    it("navigates to previous week", () => {
      const result = weekGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2024, 0, 8))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next month", () => {
      const result = weekGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2024, 1, 15))
    })

    it("navigates to previous month", () => {
      const result = weekGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2023, 11, 15))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = weekGranularity.getPrevNext(
        {
          from: startOfISOWeek(baseDate),
          to: endOfISOWeek(baseDate),
        },
        {
          min: startOfISOWeek(new Date(2024, 0, 8)),
          max: endOfISOWeek(new Date(2024, 0, 29)),
        }
      )

      expect(result).toEqual({
        prev: {
          from: startOfISOWeek(new Date(2024, 0, 8)),
          to: endOfISOWeek(new Date(2024, 0, 8)),
        },
        next: {
          from: startOfISOWeek(new Date(2024, 0, 22)),
          to: endOfISOWeek(new Date(2024, 0, 22)),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = weekGranularity.getPrevNext(
        {
          from: new Date(2024, 0, 8),
          to: new Date(2024, 0, 8),
        },
        {
          min: new Date(2024, 0, 8),
          max: new Date(2024, 0, 29),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = weekGranularity.getPrevNext(
        {
          from: startOfISOWeek(new Date(2024, 0, 22)),
          to: endOfISOWeek(new Date(2024, 0, 22)),
        },
        {
          min: new Date(2024, 0, 8),
          max: new Date(2024, 0, 22),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("label", () => {
    it("formats the label correctly", () => {
      const result = weekGranularity.label(baseDate, i18n)
      expect(result).toBe("January 2024")
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of month for any date", () => {
      const result = weekGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfMonth(baseDate))
    })
  })
})
