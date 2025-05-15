import { endOfYear, startOfYear } from "date-fns"
import { describe, expect, it } from "vitest"
import { yearGranularity } from "../index"

describe("yearGranularity", () => {
  const baseDate = new Date(2024, 0, 15) // January 15, 2024
  const nextYearDate = new Date(2025, 0, 15) // January 15, 2025
  const invalidDate = new Date("Invalid Date")

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = yearGranularity.toRangeString(baseDate)
      expect(result).toEqual({
        from: "2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = yearGranularity.toRangeString({
        from: baseDate,
        to: nextYearDate,
      })
      expect(result).toEqual({
        from: "2024",
        to: "2025",
      })
    })

    it("handles undefined input", () => {
      const result = yearGranularity.toRangeString(undefined)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct year range", () => {
      const result = yearGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfYear(baseDate),
        to: endOfYear(baseDate),
      })
    })

    it("converts a date range to the correct year ranges", () => {
      const result = yearGranularity.toRange({
        from: baseDate,
        to: nextYearDate,
      })
      expect(result).toEqual({
        from: startOfYear(baseDate),
        to: endOfYear(nextYearDate),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = yearGranularity.toString(baseDate)
      expect(result).toBe("2024")
    })

    it("formats a date range correctly", () => {
      const result = yearGranularity.toString({
        from: baseDate,
        to: nextYearDate,
      })
      expect(result).toBe("2024 → 2025")
    })
  })

  describe("fromString", () => {
    it("parses a single year string correctly", () => {
      const result = yearGranularity.fromString("2024")
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 11, 31, 23, 59, 59, 999),
      })
    })

    it("parses a year range string correctly", () => {
      const result = yearGranularity.fromString("2024 - 2025")
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2025, 11, 31, 23, 59, 59, 999),
      })
    })

    it("handles invalid input", () => {
      const result = yearGranularity.fromString("invalid")
      expect(result?.from).toStrictEqual(invalidDate)
      expect(result?.to).toStrictEqual(invalidDate)
    })
  })

  describe("navigate", () => {
    it("navigates to next year", () => {
      const result = yearGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2025, 0, 15))
    })

    it("navigates to previous year", () => {
      const result = yearGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2023, 0, 15))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next decade", () => {
      const result = yearGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2034, 0, 15))
    })

    it("navigates to previous decade", () => {
      const result = yearGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2014, 0, 15))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = yearGranularity.getPrevNext(
        {
          from: startOfYear(baseDate),
          to: endOfYear(baseDate),
        },
        {
          min: new Date(2023, 0, 1),
          max: new Date(2026, 11, 31),
        }
      )

      expect(result).toEqual({
        prev: {
          from: new Date(2023, 0, 1),
          to: new Date(2023, 11, 31, 23, 59, 59, 999),
        },
        next: {
          from: new Date(2025, 0, 1),
          to: new Date(2025, 11, 31, 23, 59, 59, 999),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = yearGranularity.getPrevNext(
        {
          from: new Date(2023, 0, 1),
          to: new Date(2023, 11, 31),
        },
        {
          min: new Date(2023, 0, 1),
          max: new Date(2026, 11, 31),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = yearGranularity.getPrevNext(
        {
          from: new Date(2026, 0, 1),
          to: new Date(2026, 11, 31),
        },
        {
          min: new Date(2023, 0, 1),
          max: new Date(2026, 11, 31),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("label", () => {
    it("formats the label correctly", () => {
      const result = yearGranularity.label(baseDate)
      expect(result).toBe("2020 → 2029")
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of year for any date", () => {
      const result = yearGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfYear(baseDate))
    })
  })
})
