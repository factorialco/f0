import { describe, expect, it } from "vitest"

import { DateRange } from "../types"
import { formatDateRange } from "../utils"

describe("formatDateRange", () => {
  const fromDate = new Date("2024-01-15")
  const toDate = new Date("2024-01-31")

  it("should format single date as DateRange", () => {
    const result = formatDateRange(fromDate, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "2024-01-15",
      to: undefined,
    })
  })

  it("should format DateRange with different from and to dates", () => {
    const dateRange: DateRange = { from: fromDate, to: toDate }
    const result = formatDateRange(dateRange, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "2024-01-15",
      to: "2024-01-31",
    })
  })

  it("should format DateRange with same from and to dates", () => {
    const dateRange: DateRange = { from: fromDate, to: fromDate }
    const result = formatDateRange(dateRange, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "2024-01-15",
      to: undefined, // Same dates should result in undefined to
    })
  })

  it("should format DateRange with only from date", () => {
    const dateRange: DateRange = { from: fromDate }
    const result = formatDateRange(dateRange, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "2024-01-15",
      to: undefined,
    })
  })

  it("should return empty from when date is undefined", () => {
    const result = formatDateRange(undefined, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "",
      to: undefined,
    })
  })

  it("should return empty from when date is null", () => {
    const result = formatDateRange(null, "yyyy-MM-dd")

    expect(result).toEqual({
      from: "",
      to: undefined,
    })
  })

  it("should format with different date patterns", () => {
    const dateRange: DateRange = { from: fromDate, to: toDate }
    const result = formatDateRange(dateRange, "MMM d, yyyy")

    expect(result).toEqual({
      from: "Jan 15, 2024",
      to: "Jan 31, 2024",
    })
  })

  it("should handle month names when same from and to", () => {
    const sameDate = new Date("2024-06-15")
    const dateRange: DateRange = { from: sameDate, to: sameDate }
    const result = formatDateRange(dateRange, "MMMM d, yyyy")

    expect(result).toEqual({
      from: "June 15, 2024",
      to: undefined,
    })
  })
})
