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

    it("formats a single date correctly with long format", () => {
      const result = halfyearGranularity.toString(baseDate, i18n, "long")
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

    it("formats a date range correctly with long format", () => {
      const result = halfyearGranularity.toString(
        {
          from: baseDate,
          to: secondHalfDate,
        },
        i18n,
        "long"
      )
      expect(result).toBe("H1 → H2 2024")
    })

    it("formats a half-year range across years correctly with long format", () => {
      const result = halfyearGranularity.toString(
        {
          from: new Date(2023, 6, 1), // H2 2023 (July)
          to: new Date(2024, 2, 1), // H1 2024 (March)
        },
        i18n,
        "long"
      )
      expect(result).toBe("H2 2023 → H1 2024")
    })

    it("formats both half-years correctly with long format", () => {
      expect(
        halfyearGranularity.toString(new Date(2024, 0, 15), i18n, "long")
      ).toBe("H1 2024") // January - H1
      expect(
        halfyearGranularity.toString(new Date(2024, 3, 15), i18n, "long")
      ).toBe("H1 2024") // April - H1
      expect(
        halfyearGranularity.toString(new Date(2024, 5, 15), i18n, "long")
      ).toBe("H1 2024") // June - H1
      expect(
        halfyearGranularity.toString(new Date(2024, 6, 15), i18n, "long")
      ).toBe("H2 2024") // July - H2
      expect(
        halfyearGranularity.toString(new Date(2024, 9, 15), i18n, "long")
      ).toBe("H2 2024") // October - H2
      expect(
        halfyearGranularity.toString(new Date(2024, 11, 15), i18n, "long")
      ).toBe("H2 2024") // December - H2
    })

    it("formats half-year boundaries correctly with long format 2", () => {
      const result = halfyearGranularity.toString(
        {
          from: new Date(2024, 5, 30), // June 30, 2024 (end of H1)
          to: new Date(2024, 6, 1), // July 1, 2024 (start of H2)
        },
        i18n,
        "long"
      )
      expect(result).toBe("H1 → H2 2024")
    })

    it("formats multi-year half-year range correctly with long format", () => {
      const result = halfyearGranularity.toString(
        {
          from: new Date(2023, 0, 1), // H1 2023
          to: new Date(2025, 6, 1), // H2 2025
        },
        i18n,
        "long"
      )
      expect(result).toBe("H1 2023 → H2 2025")
    })

    it("formats same half-year range correctly with long format", () => {
      const result = halfyearGranularity.toString(
        {
          from: new Date(2024, 0, 1), // H1 2024 (January)
          to: new Date(2024, 2, 31), // H1 2024 (March)
        },
        i18n,
        "long"
      )
      expect(result).toBe("H1 2024")
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
