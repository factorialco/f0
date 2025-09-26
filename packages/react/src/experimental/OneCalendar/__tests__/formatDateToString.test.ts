import { describe, expect, it } from "vitest"
import { DateRange } from "../types"
import { formatDateToString } from "../utils"

describe("formatDateToString", () => {
  const fromDate = new Date("2024-01-15")
  const toDate = new Date("2024-01-31")

  it("should format single date as string", () => {
    const result = formatDateToString(fromDate, "yyyy-MM-dd")
    expect(result).toBe("2024-01-15")
  })

  it("should format DateRange with different from and to dates using separator", () => {
    const dateRange: DateRange = { from: fromDate, to: toDate }
    const result = formatDateToString(dateRange, "yyyy-MM-dd")
    expect(result).toBe("2024-01-15 → 2024-01-31")
  })

  it("should format DateRange with same from and to dates without separator", () => {
    const dateRange: DateRange = { from: fromDate, to: fromDate }
    const result = formatDateToString(dateRange, "yyyy-MM-dd")
    expect(result).toBe("2024-01-15")
  })

  it("should format DateRange with only from date", () => {
    const dateRange: DateRange = { from: fromDate }
    const result = formatDateToString(dateRange, "yyyy-MM-dd")
    expect(result).toBe("2024-01-15")
  })

  it("should return dash when date is undefined", () => {
    const result = formatDateToString(undefined, "yyyy-MM-dd")
    expect(result).toBe("-")
  })

  it("should return dash when date is null", () => {
    const result = formatDateToString(null, "yyyy-MM-dd")
    expect(result).toBe("-")
  })

  it("should format with different date patterns", () => {
    const dateRange: DateRange = { from: fromDate, to: toDate }
    const result = formatDateToString(dateRange, "MMM d, yyyy")
    expect(result).toBe("Jan 15, 2024 → Jan 31, 2024")
  })

  it("should handle month names format", () => {
    const dateRange: DateRange = { from: fromDate, to: toDate }
    const result = formatDateToString(dateRange, "MMMM d, yyyy")
    expect(result).toBe("January 15, 2024 → January 31, 2024")
  })

  it("should format single date with complex pattern", () => {
    const result = formatDateToString(fromDate, "EEEE, MMMM d, yyyy")
    expect(result).toBe("Monday, January 15, 2024")
  })

  it("should handle year-only format", () => {
    const differentYearDate = new Date("2025-01-15")
    const dateRange: DateRange = { from: fromDate, to: differentYearDate }
    const result = formatDateToString(dateRange, "yyyy")
    expect(result).toBe("2024 → 2025")
  })

  it("should handle month/year format", () => {
    const differentMonthDate = new Date("2024-03-15")
    const dateRange: DateRange = { from: fromDate, to: differentMonthDate }
    const result = formatDateToString(dateRange, "MM/yyyy")
    expect(result).toBe("01/2024 → 03/2024")
  })
})
