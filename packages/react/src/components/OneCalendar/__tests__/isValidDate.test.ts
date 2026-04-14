import { describe, expect, it } from "vitest"

import { isValidDate } from "../utils"

describe("isValidDate", () => {
  it("should return true for valid dates", () => {
    const validDate = new Date("2024-01-15")
    expect(isValidDate(validDate)).toBe(true)
  })

  it("should return true for current date", () => {
    const currentDate = new Date()
    expect(isValidDate(currentDate)).toBe(true)
  })

  it("should return false for invalid date objects", () => {
    const invalidDate = new Date("invalid-date")
    expect(isValidDate(invalidDate)).toBe(false)
  })

  it("should return false for NaN date", () => {
    const nanDate = new Date(NaN)
    expect(isValidDate(nanDate)).toBe(false)
  })

  it("should return false for undefined input", () => {
    expect(isValidDate(undefined)).toBe(false)
  })

  it("should return false for null input", () => {
    expect(isValidDate(null)).toBe(false)
  })

  it("should return true for date created from timestamp", () => {
    const timestampDate = new Date(1642204800000) // 2022-01-15
    expect(isValidDate(timestampDate)).toBe(true)
  })

  it("should return true for date created from valid string", () => {
    const stringDate = new Date("2024-12-25")
    expect(isValidDate(stringDate)).toBe(true)
  })
})
