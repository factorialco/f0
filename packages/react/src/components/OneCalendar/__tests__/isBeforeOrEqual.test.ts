import { describe, expect, it } from "vitest"
import { isBeforeOrEqual } from "../utils"

describe("isBeforeOrEqual", () => {
  const baseDate = new Date("2024-01-15")
  const earlierDate = new Date("2024-01-10")
  const laterDate = new Date("2024-01-20")
  const sameDate = new Date("2024-01-15")

  it("should return true when date is before min date", () => {
    const result = isBeforeOrEqual(earlierDate, baseDate)
    expect(result).toBe(true)
  })

  it("should return true when date is equal to min date", () => {
    const result = isBeforeOrEqual(sameDate, baseDate)
    expect(result).toBe(true)
  })

  it("should return false when date is after min date", () => {
    const result = isBeforeOrEqual(laterDate, baseDate)
    expect(result).toBe(false)
  })

  it("should return true when min date is undefined", () => {
    const result = isBeforeOrEqual(baseDate, undefined)
    expect(result).toBe(true)
  })

  it("should return true when min date is undefined and date is earlier", () => {
    const result = isBeforeOrEqual(earlierDate, undefined)
    expect(result).toBe(true)
  })

  it("should return true when min date is undefined and date is later", () => {
    const result = isBeforeOrEqual(laterDate, undefined)
    expect(result).toBe(true)
  })

  it("should handle exact same timestamp", () => {
    const timestamp = 1642204800000 // 2022-01-15
    const date1 = new Date(timestamp)
    const date2 = new Date(timestamp)
    const result = isBeforeOrEqual(date1, date2)
    expect(result).toBe(true)
  })

  it("should handle different years", () => {
    const date2023 = new Date("2023-01-15")
    const date2024 = new Date("2024-01-15")

    expect(isBeforeOrEqual(date2023, date2024)).toBe(true)
    expect(isBeforeOrEqual(date2024, date2023)).toBe(false)
  })

  it("should handle time differences on same day", () => {
    const morning = new Date("2024-01-15T08:00:00")
    const evening = new Date("2024-01-15T20:00:00")

    expect(isBeforeOrEqual(morning, evening)).toBe(true)
    expect(isBeforeOrEqual(evening, morning)).toBe(false)
  })
})
