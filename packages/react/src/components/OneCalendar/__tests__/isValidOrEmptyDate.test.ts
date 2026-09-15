import { describe, expect, it } from "vitest"
import { isValidOrEmptyDate } from "../utils"

describe("isValidOrEmptyDate", () => {
  it("should return true for valid dates", () => {
    const validDate = new Date("2024-01-15")
    expect(isValidOrEmptyDate(validDate)).toBe(true)
  })

  it("should return true for current date", () => {
    const currentDate = new Date()
    expect(isValidOrEmptyDate(currentDate)).toBe(true)
  })

  it("should return true for undefined input", () => {
    expect(isValidOrEmptyDate(undefined)).toBe(true)
  })

  it("should return true for null input", () => {
    expect(isValidOrEmptyDate(null)).toBe(true)
  })

  it("should return false for invalid date objects", () => {
    const invalidDate = new Date("invalid-date")
    expect(isValidOrEmptyDate(invalidDate)).toBe(false)
  })

  it("should return false for NaN date", () => {
    const nanDate = new Date(NaN)
    expect(isValidOrEmptyDate(nanDate)).toBe(false)
  })

  it("should return true for date created from timestamp", () => {
    const timestampDate = new Date(1642204800000) // 2022-01-15
    expect(isValidOrEmptyDate(timestampDate)).toBe(true)
  })

  it("should return true for date created from valid string", () => {
    const stringDate = new Date("2024-12-25")
    expect(isValidOrEmptyDate(stringDate)).toBe(true)
  })
})
