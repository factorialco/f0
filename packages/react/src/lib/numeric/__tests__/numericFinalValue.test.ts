import { describe, expect, it } from "vitest"
import type { NumericValue } from "../types"
import { numericFinalValue } from "../utils/numericFinalValue"

describe("numericFinalValue", () => {
  describe("value property", () => {
    it("should return the value when value property exists", () => {
      const numericValue: NumericValue = { value: 123.45 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })

    it("should return zero when value is zero", () => {
      const numericValue: NumericValue = { value: 0 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(0)
    })

    it("should return negative value", () => {
      const numericValue: NumericValue = { value: -123.45 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(-123.45)
    })

    it("should return undefined when value is undefined", () => {
      const numericValue: NumericValue = { value: undefined }
      const result = numericFinalValue(numericValue)
      expect(result).toBeUndefined()
    })

    it("should return large numbers correctly", () => {
      const numericValue: NumericValue = { value: 999999999.99 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(999999999.99)
    })

    it("should return very small numbers correctly", () => {
      const numericValue: NumericValue = { value: 0.001 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(0.001)
    })

    it("should return value with units property", () => {
      const numericValue: NumericValue = { value: 123.45, units: "€" }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })

    it("should return value with unitsPosition property", () => {
      const numericValue: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })
  })

  describe("value_x100 property", () => {
    it("should return value_x100 divided by 100", () => {
      const numericValue: NumericValue = { value_x100: 12345 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })

    it("should return zero when value_x100 is zero", () => {
      const numericValue: NumericValue = { value_x100: 0 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(0)
    })

    it("should return negative value_x100 divided by 100", () => {
      const numericValue: NumericValue = { value_x100: -12345 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(-123.45)
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
      expect(result).toBe(0.05)
    })

    it("should handle large value_x100", () => {
      const numericValue: NumericValue = { value_x100: 99999999999 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(999999999.99)
    })

    it("should return value_x100 with units property", () => {
      const numericValue: NumericValue = { value_x100: 12345, units: "€" }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })

    it("should return value_x100 with unitsPosition property", () => {
      const numericValue: NumericValue = {
        value_x100: 12345,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(123.45)
    })
  })

  describe("edge cases", () => {
    it("should handle decimal value_x100 correctly", () => {
      const numericValue: NumericValue = { value_x100: 1234 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(12.34)
    })

    it("should handle value_x100 that results in whole number", () => {
      const numericValue: NumericValue = { value_x100: 10000 }
      const result = numericFinalValue(numericValue)
      expect(result).toBe(100)
    })
  })
})
