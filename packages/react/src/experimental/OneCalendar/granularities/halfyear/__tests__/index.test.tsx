import { startOfYear } from "date-fns"
import { describe, expect, it } from "vitest"
import { granularityDefinitions } from "../.."
import { halfyearGranularity } from "../index"

describe("halfyearGranularity", () => {
  const baseDate = new Date(2024, 0, 1) // January 1, 2024
  const secondHalfDate = new Date(2024, 6, 1) // July 1, 2024
  const invalidDate = new Date("Invalid Date")
  const i18n = {}

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = halfyearGranularity.toRangeString(baseDate, i18n)
      expect(result).toEqual({
        from: "H1 2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = halfyearGranularity.toRangeString(
        {
          from: baseDate,
          to: secondHalfDate,
        },
        i18n
      )
      expect(result).toEqual({
        from: "H1 2024",
        to: "H2 2024",
      })
    })

    it("handles undefined input", () => {
      const result = halfyearGranularity.toRangeString(undefined, i18n)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct half-year range", () => {
      const result = halfyearGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfYear(baseDate),
        to: new Date(2024, 5, 30, 23, 59, 59, 999),
      })
    })

    it("converts a date in second half to the correct range", () => {
      const result = halfyearGranularity.toRange(secondHalfDate)
      expect(result).toEqual({
        from: new Date(2024, 6, 1),
        to: new Date(2024, 11, 31, 23, 59, 59, 999),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = halfyearGranularity.toString(baseDate, i18n)
      expect(result).toBe("H1 2024")
    })

    it("formats a date range correctly", () => {
      const result = halfyearGranularity.toString(
        {
          from: baseDate,
          to: secondHalfDate,
        },
        i18n
      )
      expect(result).toBe("H1 2024 → H2 2024")
    })
  })

  describe("fromString", () => {
    it("parses a single half-year string correctly", () => {
      const result = halfyearGranularity.fromString("H1 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 5, 30, 23, 59, 59, 999),
      })
    })

    it("parses a half-year range string correctly", () => {
      const result = halfyearGranularity.fromString("H1 2024 → H2 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 11, 31, 23, 59, 59, 999),
      })
    })

    it("handles invalid input", () => {
      const result = halfyearGranularity.fromString("invalid", i18n)
      expect(result).toEqual({
        from: invalidDate,
        to: invalidDate,
      })
    })
  })

  describe("navigate", () => {
    it("navigates to next half-year", () => {
      const result = halfyearGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2024, 6, 1))
    })

    it("navigates to previous half-year", () => {
      const result = halfyearGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2023, 6, 1))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next view", () => {
      const result = halfyearGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2029, 0, 1))
    })

    it("navigates to previous view", () => {
      const result = halfyearGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2019, 0, 1))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = halfyearGranularity.getPrevNext(
        granularityDefinitions.halfyear.toRange(baseDate), // 2024-01-01 → 2024-06-30
        {
          min: new Date(2023, 0, 1),
          max: new Date(2025, 11, 31),
        }
      )

      expect(result).toEqual({
        prev: {
          from: new Date(2023, 6, 1),
          to: new Date(2023, 11, 31, 23, 59, 59, 999),
        },
        next: {
          from: new Date(2024, 6, 1),
          to: new Date(2024, 11, 31, 23, 59, 59, 999),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = halfyearGranularity.getPrevNext(
        {
          from: new Date(2023, 0, 1),
          to: new Date(2023, 5, 30),
        },
        {
          min: new Date(2023, 0, 1),
          max: new Date(2025, 11, 31),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = halfyearGranularity.getPrevNext(
        {
          from: new Date(2025, 6, 1),
          to: new Date(2025, 11, 31),
        },
        {
          min: new Date(2023, 0, 1),
          max: new Date(2025, 11, 31),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("label", () => {
    it("formats the label correctly", () => {
      const result = halfyearGranularity.label(baseDate, i18n)
      expect(result).toBe("2020 → 2024")
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of year for any date", () => {
      const result = halfyearGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfYear(baseDate))
    })
  })
})
