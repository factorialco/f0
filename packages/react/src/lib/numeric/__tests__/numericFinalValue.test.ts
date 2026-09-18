import { describe, expect, it } from "vitest"
import type { NumericValue } from "../types"
import { numericFinalValue } from "../utils/numericFinalValue"

describe("numericFinalValue", () => {
  describe("value property", () => {
    it.each([
      { name: "the value when value property exists", value: 123.45 },
      { name: "zero when value is zero", value: 0 },
      { name: "negative value", value: -123.45 },
      { name: "large numbers correctly", value: 999999999.99 },
      { name: "very small numbers correctly", value: 0.001 },
    ])("should return $name", ({ value }) => {
      const numericValue: NumericValue = { value }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(value)
    })

    it("should return undefined when value is undefined", () => {
      const numericValue: NumericValue = { value: undefined }
      const result = numericFinalValue(numericValue)
      expect(result).toBeUndefined()
    })

    it("should return value with units property", () => {
      const numericValue: NumericValue = { value: 123.45, units: "€" }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(123.45)
    })

    it("should return value with unitsPosition property", () => {
      const numericValue: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(123.45)
    })
  })

  describe("value_x100 property", () => {
    it.each([
      {
        name: "value_x100 divided by 100",
        value_x100: 12345,
        expected: 123.45,
      },
      { name: "zero when value_x100 is zero", value_x100: 0, expected: 0 },
      {
        name: "negative value_x100 divided by 100",
        value_x100: -12345,
        expected: -123.45,
      },
    ])("should return $name", ({ value_x100, expected }) => {
      const numericValue: NumericValue = { value_x100 }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(expected)
    })

    it("should return undefined when value_x100 is undefined", () => {
      const numericValue: NumericValue = { value_x100: undefined }
      const result = numericFinalValue(numericValue)
      expect(result).toBeUndefined()
    })

    it("should return undefined when value_x100 is null", () => {
      const numericValue: NumericValue = {
        value_x100: null as unknown as undefined,
      }
      const result = numericFinalValue(numericValue)
      expect(result).toBeUndefined()
    })

    it("should handle single digit value_x100", () => {
      const numericValue: NumericValue = { value_x100: 5 }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(0.05)
    })

    it("should handle large value_x100", () => {
      const numericValue: NumericValue = { value_x100: 99999999999 }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(999999999.99)
    })

    it("should return value_x100 with units property", () => {
      const numericValue: NumericValue = { value_x100: 12345, units: "€" }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(123.45)
    })

    it("should return value_x100 with unitsPosition property", () => {
      const numericValue: NumericValue = {
        value_x100: 12345,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(123.45)
    })
  })

  describe("edge cases", () => {
    it("should handle decimal value_x100 correctly", () => {
      const numericValue: NumericValue = { value_x100: 1234 }
      const result = numericFinalValue(numericValue)
      expect(result).toBeCloseTo(12.34)
    })

    it("should handle value_x100 that results in whole number", () => {
      const numericValue: NumericValue = { value_x100: 10000 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(100)
    })
  })
})
