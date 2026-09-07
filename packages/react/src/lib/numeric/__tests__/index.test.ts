import { describe, expect, it } from "vitest"
import {
  normalizeNumericWithFormatter,
  numericFinalValue,
  numericFormatter,
  toNumericValue,
  type Numeric,
  type NumericFormatterOptions,
  type NumericValue,
  type NumericWithFormatter,
} from "../index"

describe("index.ts exports", () => {
  it("should export normalizeNumericWithFormatter", () => {
    expect(typeof normalizeNumericWithFormatter).toBe("function")
  })

  it("should export numericFinalValue", () => {
    expect(typeof numericFinalValue).toBe("function")
  })

  it("should export numericFormatter", () => {
    expect(typeof numericFormatter).toBe("function")
  })

  it("should export toNumericValue", () => {
    expect(typeof toNumericValue).toBe("function")
  })

  it("should export types", () => {
    // Test that types are available (compile-time check)
    const value: NumericValue = { value: 123.45 }
    const numeric: Numeric = 123.45
    const options: NumericFormatterOptions = { decimalPlaces: 2 }
    const withFormatter: NumericWithFormatter = {
      numericValue: { value: 123.45 },
      formatter: numericFormatter,
      formatterOptions: {},
    }

    expect(value).toBeDefined()
    expect(numeric).toBeDefined()
    expect(options).toBeDefined()
    expect(withFormatter).toBeDefined()
  })

  it("should allow importing and using exported functions", () => {
    const value: NumericValue = { value: 123.45 }
    const result = numericFormatter(value)
    expect(result).toBe("123.45")
  })

  it("should allow importing and using normalizeNumericWithFormatter", () => {
    const value: Numeric = 123.45
    const result = normalizeNumericWithFormatter(value)
    expect(result.numericValue).toEqual({ value: 123.45 })
    expect(typeof result.formatter).toBe("function")
    expect(result.formatterOptions).toEqual({})
  })

  it("should allow importing and using numericFinalValue", () => {
    const value: NumericValue = { value: 123.45 }
    const result = numericFinalValue(value)
    expect(result).toBe(123.45)
  })

  it("should allow importing and using toNumericValue", () => {
    const value: Numeric = 123.45
    const result = toNumericValue(value)
    expect(result).toEqual({ value: 123.45 })
  })
})
