import { endOfQuarter, startOfQuarter } from "date-fns"
import { describe, expect, it } from "vitest"
import { quarterGranularity } from "../index"

describe("quarterGranularity", () => {
  const baseDate = new Date(2024, 0, 15) // January 15, 2024 (Q1)
  const nextQuarterDate = new Date(2024, 3, 15) // April 15, 2024 (Q2)
  const invalidDate = new Date("Invalid Date")
  const i18n = {}

  describe("toRangeString", () => {
    it("formats a single date correctly", () => {
      const result = quarterGranularity.toRangeString(baseDate, i18n)
      expect(result).toEqual({
        from: "Q1 2024",
        to: undefined,
      })
    })

    it("formats a date range correctly", () => {
      const result = quarterGranularity.toRangeString(
        {
          from: baseDate,
          to: nextQuarterDate,
        },
        i18n
      )
      expect(result).toEqual({
        from: "Q1 2024",
        to: "Q2 2024",
      })
    })

    it("handles undefined input", () => {
      const result = quarterGranularity.toRangeString(undefined, i18n)
      expect(result).toEqual({
        from: "",
        to: undefined,
      })
    })
  })

  describe("toRange", () => {
    it("converts a single date to the correct quarter range", () => {
      const result = quarterGranularity.toRange(baseDate)
      expect(result).toEqual({
        from: startOfQuarter(baseDate),
        to: endOfQuarter(baseDate),
      })
    })

    it("converts a date range to the correct quarter ranges", () => {
      const result = quarterGranularity.toRange({
        from: baseDate,
        to: nextQuarterDate,
      })
      expect(result).toEqual({
        from: startOfQuarter(baseDate),
        to: endOfQuarter(nextQuarterDate),
      })
    })
  })

  describe("toString", () => {
    it("formats a single date correctly", () => {
      const result = quarterGranularity.toString(baseDate, i18n)
      expect(result).toBe("Q1 2024")
    })

    it("formats a single date correctly with long format", () => {
      const result = quarterGranularity.toString(baseDate, i18n, "long")
      expect(result).toBe("Q1 2024")
    })

    it("formats a date range correctly", () => {
      const result = quarterGranularity.toString(
        {
          from: baseDate,
          to: nextQuarterDate,
        },
        i18n
      )
      expect(result).toBe("Q1 2024 → Q2 2024")
    })

    it("formats a date range correctly with long format", () => {
      const result = quarterGranularity.toString(
        {
          from: baseDate,
          to: nextQuarterDate,
        },
        i18n,
        "long"
      )
      expect(result).toBe("Q1 → Q2 2024")
    })

    it("formats a quarter range across years correctly with long format", () => {
      const result = quarterGranularity.toString(
        {
          from: new Date(2023, 9, 15), // Q4 2023 (October)
          to: new Date(2024, 2, 15), // Q1 2024 (March)
        },
        i18n,
        "long"
      )
      expect(result).toBe("Q4 2023 → Q1 2024")
    })

    it("formats a long quarter range in same year correctly with long format", () => {
      const result = quarterGranularity.toString(
        {
          from: new Date(2024, 0, 15), // Q1 2024
          to: new Date(2024, 8, 15), // Q3 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("Q1 → Q3 2024")
    })

    it("formats all quarters correctly with long format", () => {
      expect(quarterGranularity.toString(new Date(2024, 0, 15), i18n, "long")).toBe("Q1 2024") // January - Q1
      expect(quarterGranularity.toString(new Date(2024, 3, 15), i18n, "long")).toBe("Q2 2024") // April - Q2
      expect(quarterGranularity.toString(new Date(2024, 6, 15), i18n, "long")).toBe("Q3 2024") // July - Q3
      expect(quarterGranularity.toString(new Date(2024, 9, 15), i18n, "long")).toBe("Q4 2024") // October - Q4
    })

    it("formats quarter boundaries correctly with long format", () => {
      const result = quarterGranularity.toString(
        {
          from: new Date(2024, 2, 31), // March 31, 2024 (end of Q1)
          to: new Date(2024, 3, 1), // April 1, 2024 (start of Q2)
        },
        i18n,
        "long"
      )
      expect(result).toBe("Q1 → Q2 2024")
    })

    it("formats full year quarter range correctly with long format", () => {
      const result = quarterGranularity.toString(
        {
          from: new Date(2024, 0, 1), // Q1 2024
          to: new Date(2024, 9, 31), // Q4 2024
        },
        i18n,
        "long"
      )
      expect(result).toBe("Q1 → Q4 2024")
    })
  })

  describe("fromString", () => {
    it("parses a single quarter string correctly", () => {
      const result = quarterGranularity.fromString("Q1 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 2, 31, 23, 59, 59, 999),
      })
    })

    it("parses a quarter range string correctly", () => {
      const result = quarterGranularity.fromString("Q1 2024 - Q2 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 5, 30, 23, 59, 59, 999),
      })
    })

    it("handles different quarter formats", () => {
      const result = quarterGranularity.fromString("q1 2024", i18n)
      expect(result).toEqual({
        from: new Date(2024, 0, 1),
        to: new Date(2024, 2, 31, 23, 59, 59, 999),
      })
    })

    it("handles invalid input", () => {
      const result = quarterGranularity.fromString("invalid", i18n)
      expect(result).toEqual({
        from: invalidDate,
        to: invalidDate,
      })
    })
  })

  describe("navigate", () => {
    it("navigates to next quarter", () => {
      const result = quarterGranularity.navigate(baseDate, 1)
      expect(result).toEqual(new Date(2024, 3, 1))
    })

    it("navigates to previous quarter", () => {
      const result = quarterGranularity.navigate(baseDate, -1)
      expect(result).toEqual(new Date(2023, 9, 1))
    })
  })

  describe("navigateUIView", () => {
    it("navigates to next 5-year period", () => {
      const result = quarterGranularity.navigateUIView(baseDate, 1)
      expect(result).toEqual(new Date(2029, 0, 1))
    })

    it("navigates to previous 5-year period", () => {
      const result = quarterGranularity.navigateUIView(baseDate, -1)
      expect(result).toEqual(new Date(2019, 0, 1))
    })
  })

  describe("getPrevNext", () => {
    it("returns correct prev/next dates within bounds", () => {
      const result = quarterGranularity.getPrevNext(quarterGranularity.toRange(baseDate), {
        min: new Date(2023, 9, 1),
        max: new Date(2024, 8, 30),
      })

      expect(result).toEqual({
        prev: {
          from: new Date(2023, 9, 1),
          to: new Date(2023, 11, 31, 23, 59, 59, 999),
        },
        next: {
          from: new Date(2024, 3, 1),
          to: new Date(2024, 5, 30, 23, 59, 59, 999),
        },
      })
    })

    it("returns false for prev when at min date", () => {
      const result = quarterGranularity.getPrevNext(
        {
          from: new Date(2023, 9, 1),
          to: new Date(2023, 11, 31),
        },
        {
          min: new Date(2023, 9, 1),
          max: new Date(2024, 8, 30),
        }
      )

      expect(result.prev).toBe(false)
      expect(result.next).toBeTruthy()
    })

    it("returns false for next when at max date", () => {
      const result = quarterGranularity.getPrevNext(
        {
          from: new Date(2024, 6, 1),
          to: new Date(2024, 8, 30),
        },
        {
          min: new Date(2023, 9, 1),
          max: new Date(2024, 8, 30),
        }
      )

      expect(result.prev).toBeTruthy()
      expect(result.next).toBe(false)
    })
  })

  describe("label", () => {
    it("formats the label correctly", () => {
      const result = quarterGranularity.label(baseDate, i18n)
      expect(result).toBe("2020 → 2024")
    })
  })

  describe("getViewDateFromDate", () => {
    it("returns the start of quarter for any date", () => {
      const result = quarterGranularity.getViewDateFromDate(baseDate)
      expect(result).toEqual(startOfQuarter(baseDate))
    })
  })
})
