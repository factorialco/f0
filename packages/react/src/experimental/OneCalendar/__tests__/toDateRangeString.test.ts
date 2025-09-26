import { describe, expect, it } from "vitest"
import { DateRangeString } from "../types"
import { toDateRangeString } from "../utils"

describe("toDateRangeString", () => {
  it("should return undefined when input is undefined", () => {
    const result = toDateRangeString(undefined)
    expect(result).toBeUndefined()
  })

  it("should parse string with dash separator", () => {
    const input = "2024-01-01 - 2024-01-31"
    const result = toDateRangeString(input)

    expect(result).toEqual({
      from: "2024-01-01",
      to: "2024-01-31",
    })
  })

  it("should parse string with arrow separator", () => {
    const input = "2024-01-01 → 2024-01-31"
    const result = toDateRangeString(input)

    expect(result).toEqual({
      from: "2024-01-01",
      to: "2024-01-31",
    })
  })

  it("should parse string with only from date", () => {
    const input = "2024-01-01"
    const result = toDateRangeString(input)

    expect(result).toEqual({
      from: "2024-01-01",
      to: undefined,
    })
  })

  it("should return the same DateRangeString when input is already a DateRangeString", () => {
    const dateRangeString: DateRangeString = {
      from: "2024-01-01",
      to: "2024-01-31",
    }
    const result = toDateRangeString(dateRangeString)

    expect(result).toEqual(dateRangeString)
  })

  it("should return DateRangeString with only from when to is undefined", () => {
    const dateRangeString: DateRangeString = {
      from: "2024-01-01",
    }
    const result = toDateRangeString(dateRangeString)

    expect(result).toEqual(dateRangeString)
    expect(result?.to).toBeUndefined()
  })

  it("should handle complex date strings with dash separator", () => {
    const input = "January 1, 2024 - December 31, 2024"
    const result = toDateRangeString(input)

    expect(result).toEqual({
      from: "January 1, 2024",
      to: "December 31, 2024",
    })
  })

  it("should handle complex date strings with arrow separator", () => {
    const input = "Jan 1 → Jan 31"
    const result = toDateRangeString(input)

    expect(result).toEqual({
      from: "Jan 1",
      to: "Jan 31",
    })
  })
})
