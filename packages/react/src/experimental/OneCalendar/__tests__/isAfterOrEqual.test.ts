import { describe, expect, it } from "vitest"

import { isAfterOrEqual } from "../utils"

describe("isAfterOrEqual", () => {
  const baseDate = new Date("2024-01-15")
  const earlierDate = new Date("2024-01-10")
  const laterDate = new Date("2024-01-20")
  const sameDate = new Date("2024-01-15")

  it("should return false when date is before max date", () => {
    const result = isAfterOrEqual(earlierDate, baseDate)
    expect(result).toBe(false)
  })

  it("should return true when date is equal to max date", () => {
    const result = isAfterOrEqual(sameDate, baseDate)
    expect(result).toBe(true)
  })

  it("should return true when date is after max date", () => {
    const result = isAfterOrEqual(laterDate, baseDate)
    expect(result).toBe(true)
  })

  it("should return true when max date is undefined", () => {
    const result = isAfterOrEqual(baseDate, undefined)
    expect(result).toBe(true)
  })

  it("should return true when max date is undefined and date is earlier", () => {
    const result = isAfterOrEqual(earlierDate, undefined)
    expect(result).toBe(true)
  })

  it("should return true when max date is undefined and date is later", () => {
    const result = isAfterOrEqual(laterDate, undefined)
    expect(result).toBe(true)
  })

  it("should handle exact same timestamp", () => {
    const timestamp = 1642204800000 // 2022-01-15
    const date1 = new Date(timestamp)
    const date2 = new Date(timestamp)
    const result = isAfterOrEqual(date1, date2)
    expect(result).toBe(true)
  })

  it("should handle different years", () => {
    const date2023 = new Date("2023-01-15")
    const date2024 = new Date("2024-01-15")

    expect(isAfterOrEqual(date2023, date2024)).toBe(false)
    expect(isAfterOrEqual(date2024, date2023)).toBe(true)
  })

  it("should handle time differences on same day", () => {
    const morning = new Date("2024-01-15T08:00:00")
    const evening = new Date("2024-01-15T20:00:00")

    expect(isAfterOrEqual(morning, evening)).toBe(false)
    expect(isAfterOrEqual(evening, morning)).toBe(true)
  })

  it("should handle leap year dates", () => {
    const feb28 = new Date("2024-02-28")
    const feb29 = new Date("2024-02-29")

    expect(isAfterOrEqual(feb29, feb28)).toBe(true)
    expect(isAfterOrEqual(feb28, feb29)).toBe(false)
  })
})
