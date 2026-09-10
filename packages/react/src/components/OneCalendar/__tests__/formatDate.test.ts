import { describe, expect, it } from "vitest"
import { formatDate } from "../utils"

describe("formatDate", () => {
  const testDate = new Date("2024-01-15T10:30:00Z")

  it("should format date with simple pattern", () => {
    const result = formatDate(testDate, "yyyy-MM-dd")
    expect(result).toBe("2024-01-15")
  })

  it("should format date with full month name", () => {
    const result = formatDate(testDate, "MMMM d, yyyy")
    expect(result).toBe("January 15, 2024")
  })

  it("should format date with short month name", () => {
    const result = formatDate(testDate, "MMM d, yyyy")
    expect(result).toBe("Jan 15, 2024")
  })

  it("should format date with day of week", () => {
    const result = formatDate(testDate, "EEEE, MMMM d, yyyy")
    expect(result).toBe("Monday, January 15, 2024")
  })

  it("should format date with short day of week", () => {
    const result = formatDate(testDate, "EEE, MMM d")
    expect(result).toBe("Mon, Jan 15")
  })

  it("should format date with time", () => {
    const result = formatDate(testDate, "yyyy-MM-dd HH:mm")
    expect(result).toMatch(/2024-01-15 \d{2}:\d{2}/)
  })

  it("should format date with year only", () => {
    const result = formatDate(testDate, "yyyy")
    expect(result).toBe("2024")
  })

  it("should format date with month and year", () => {
    const result = formatDate(testDate, "MM/yyyy")
    expect(result).toBe("01/2024")
  })

  it("should format date with custom separator", () => {
    const result = formatDate(testDate, "dd.MM.yyyy")
    expect(result).toBe("15.01.2024")
  })
})
