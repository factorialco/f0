import { describe, expect, it } from "vitest"
import { DateRange } from "../types"
import { toDateRange } from "../utils"

describe("toDateRange", () => {
  it("should convert a Date to a DateRange with only from property", () => {
    const date = new Date("2024-01-15")
    const result = toDateRange(date)

    expect(result).toEqual({
      from: date,
    })
  })

  it("should return undefined when input is null", () => {
    const result = toDateRange(null)
    expect(result).toBeUndefined()
  })

  it("should return undefined when input is undefined", () => {
    const result = toDateRange(undefined)
    expect(result).toBeUndefined()
  })

  it("should return the same DateRange when input is already a DateRange", () => {
    const dateRange: DateRange = {
      from: new Date("2024-01-01"),
      to: new Date("2024-01-31"),
    }
    const result = toDateRange(dateRange)

    expect(result).toEqual(dateRange)
  })

  it("should return DateRange with only from when to is undefined", () => {
    const dateRange: DateRange = {
      from: new Date("2024-01-01"),
    }
    const result = toDateRange(dateRange)

    expect(result).toEqual(dateRange)
    expect(result?.to).toBeUndefined()
  })
})
