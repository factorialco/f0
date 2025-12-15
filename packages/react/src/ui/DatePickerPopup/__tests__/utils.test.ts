import { GranularityDefinitionKey } from "@/experimental/OneCalendar/granularities"
import { describe, expect, it } from "vitest"
import { DatePickerValue } from "../types"
import { isSameDatePickerValue } from "../utils"

describe("isSameDatePickerValue", () => {
  const createDatePickerValue = (
    fromDate: Date,
    toDate: Date,
    granularity: GranularityDefinitionKey = "day"
  ): DatePickerValue => ({
    value: {
      from: fromDate,
      to: toDate,
    },
    granularity,
  })

  it("returns true when both values are undefined", () => {
    expect(isSameDatePickerValue(undefined, undefined)).toBe(true)
  })

  it("returns false when one value is undefined and the other is not", () => {
    const value = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31))

    expect(isSameDatePickerValue(undefined, value)).toBe(false)
    expect(isSameDatePickerValue(value, undefined)).toBe(false)
  })

  it("returns true when both values have the same dates and granularity", () => {
    const value1 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31), "month")
    const value2 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31), "month")

    expect(isSameDatePickerValue(value1, value2)).toBe(true)
  })

  it("returns false when dates are different", () => {
    const value1 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31))
    const value2 = createDatePickerValue(new Date(2023, 1, 1), new Date(2023, 1, 28))

    expect(isSameDatePickerValue(value1, value2)).toBe(false)
  })

  it("returns false when from dates are different", () => {
    const value1 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31))
    const value2 = createDatePickerValue(new Date(2023, 0, 2), new Date(2023, 0, 31))

    expect(isSameDatePickerValue(value1, value2)).toBe(false)
  })

  it("returns false when to dates are different", () => {
    const value1 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31))
    const value2 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 30))

    expect(isSameDatePickerValue(value1, value2)).toBe(false)
  })

  it("returns false when granularities are different", () => {
    const value1 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31), "month")
    const value2 = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31), "day")

    expect(isSameDatePickerValue(value1, value2)).toBe(false)
  })

  it("handles same dates with different time components correctly", () => {
    const value1 = createDatePickerValue(
      new Date(2023, 0, 1, 10, 30, 0),
      new Date(2023, 0, 31, 15, 45, 0)
    )
    const value2 = createDatePickerValue(
      new Date(2023, 0, 1, 14, 20, 0),
      new Date(2023, 0, 31, 9, 15, 0)
    )

    // Should return false because the time components make the timestamps different
    expect(isSameDatePickerValue(value1, value2)).toBe(false)
  })

  it("returns false when one value has no date range", () => {
    const validValue = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 31))

    // Create a value with undefined date range (this might not be realistic in real usage but tests the function's robustness)
    const invalidValue: DatePickerValue = {
      value: undefined,
      granularity: "day",
    }

    expect(isSameDatePickerValue(validValue, invalidValue)).toBe(false)
    expect(isSameDatePickerValue(invalidValue, validValue)).toBe(false)
  })

  it("handles values with different granularity types correctly", () => {
    const weekValue = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 7), "week")
    const monthValue = createDatePickerValue(new Date(2023, 0, 1), new Date(2023, 0, 7), "month")

    expect(isSameDatePickerValue(weekValue, monthValue)).toBe(false)
  })
})
