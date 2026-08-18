import { endOfDay, startOfDay } from "date-fns"
import { describe, expect, it } from "vitest"

import { createPeriodsGranularity, periodsGranularity } from "../index"
import { DatePeriod } from "../types"

const i18n = {}

// Payroll-style cycles: each one is labelled by its month but runs from the
// 25th of the previous month to the 24th of its own.
const periods: DatePeriod[] = [
  {
    label: "February 2026",
    from: new Date(2026, 0, 25),
    to: new Date(2026, 1, 24),
  },
  {
    label: "January 2026",
    from: new Date(2025, 11, 25),
    to: new Date(2026, 0, 24),
  },
  {
    label: "March 2026",
    from: new Date(2026, 1, 25),
    to: new Date(2026, 2, 24),
  },
]

const granularity = createPeriodsGranularity({ label: "Payroll", periods })

const rangeOf = (label: string) => {
  const period = periods.find((p) => p.label === label)!
  return { from: startOfDay(period.from), to: endOfDay(period.to) }
}

describe("periodsGranularity", () => {
  describe("toRange", () => {
    it("snaps a date to the period containing it", () => {
      expect(granularity.toRange(new Date(2026, 0, 10))).toEqual(
        rangeOf("January 2026")
      )
    })

    it("snaps a range to the period containing its start", () => {
      const result = granularity.toRange({
        from: new Date(2026, 1, 3),
        to: new Date(2026, 2, 20),
      })
      expect(result).toEqual(rangeOf("February 2026"))
    })

    it("keeps the date's own range when no period contains it", () => {
      const outside = new Date(2027, 5, 1)
      expect(granularity.toRange(outside)).toEqual({
        from: startOfDay(outside),
        to: endOfDay(outside),
      })
    })

    it("handles undefined input", () => {
      expect(granularity.toRange(undefined)).toBeNull()
    })
  })

  describe("toString", () => {
    it("returns the label of the matching period", () => {
      expect(granularity.toString(new Date(2026, 1, 1), i18n)).toBe(
        "February 2026"
      )
    })

    it("falls back to the formatted date when no period matches", () => {
      expect(granularity.toString(new Date(2027, 5, 1), i18n)).toBe(
        "01/06/2027"
      )
    })

    it("handles undefined input", () => {
      expect(granularity.toString(undefined, i18n)).toBe("")
    })
  })

  describe("getPrevNext", () => {
    it("steps to the adjacent periods in chronological order", () => {
      const result = granularity.getPrevNext(rangeOf("February 2026"), {})
      expect(result).toEqual({
        prev: rangeOf("January 2026"),
        next: rangeOf("March 2026"),
      })
    })

    it("stops at the ends of the list", () => {
      expect(granularity.getPrevNext(rangeOf("January 2026"), {}).prev).toBe(
        false
      )
      expect(granularity.getPrevNext(rangeOf("March 2026"), {}).next).toBe(
        false
      )
    })

    it("offers the periods that overlap the min/max bounds", () => {
      const result = granularity.getPrevNext(rangeOf("February 2026"), {
        min: new Date(2026, 0, 5),
        max: new Date(2026, 2, 1),
      })
      expect(result).toEqual({
        prev: rangeOf("January 2026"),
        next: rangeOf("March 2026"),
      })
    })

    it("does not offer periods beyond the min/max bounds", () => {
      const result = granularity.getPrevNext(rangeOf("February 2026"), {
        min: new Date(2026, 0, 25),
        max: new Date(2026, 1, 24),
      })
      expect(result).toEqual({ prev: false, next: false })
    })

    it("has nowhere to go when the value is outside every period", () => {
      const outside = new Date(2027, 5, 1)
      expect(
        granularity.getPrevNext(
          { from: startOfDay(outside), to: endOfDay(outside) },
          {}
        )
      ).toEqual({ prev: false, next: false })
    })
  })

  describe("navigate", () => {
    it("moves to the start of the adjacent period", () => {
      expect(granularity.navigate(new Date(2026, 1, 1), 1)).toEqual(
        rangeOf("March 2026").from
      )
      expect(granularity.navigate(new Date(2026, 1, 1), -1)).toEqual(
        rangeOf("January 2026").from
      )
    })

    it("keeps the date when there is no adjacent period", () => {
      const lastPeriodDate = new Date(2026, 2, 1)
      expect(granularity.navigate(lastPeriodDate, 1)).toEqual(lastPeriodDate)
    })
  })

  describe("add", () => {
    it("shifts by whole periods", () => {
      expect(granularity.add(rangeOf("January 2026"), 2)).toEqual(
        rangeOf("March 2026")
      )
    })

    it("keeps the range when the shift falls off the list", () => {
      expect(granularity.add(rangeOf("March 2026"), 1)).toEqual(
        rangeOf("March 2026")
      )
    })
  })

  describe("fromString", () => {
    it("snaps a parsed date to its period", () => {
      expect(granularity.fromString("25/01/2026", i18n)).toEqual(
        rangeOf("February 2026")
      )
    })

    it("returns null for an unparseable string", () => {
      expect(granularity.fromString("not a date", i18n)).toBeNull()
    })
  })

  describe("without periods", () => {
    it("falls back to the date's own range", () => {
      const date = new Date(2026, 0, 10)
      expect(periodsGranularity.toRange(date)).toEqual({
        from: startOfDay(date),
        to: endOfDay(date),
      })
    })

    it("has no previous or next", () => {
      const date = new Date(2026, 0, 10)
      expect(
        periodsGranularity.getPrevNext(
          { from: startOfDay(date), to: endOfDay(date) },
          {}
        )
      ).toEqual({ prev: false, next: false })
    })
  })
})
