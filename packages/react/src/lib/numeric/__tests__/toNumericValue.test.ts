import { describe, expect, it } from "vitest"

import type { NumericValue } from "../types"

import { toNumericValue } from "../utils/toNumericValue"

describe("toNumericValue", () => {
  describe("null and undefined values", () => {
    it("should return NumericValue with undefined value when input is null", () => {
      const result = toNumericValue(null)
      expect(result).toEqual({
        value: undefined,
      })
    })

    it("should return NumericValue with undefined value when input is undefined", () => {
      const result = toNumericValue(undefined)
      expect(result).toEqual({
        value: undefined,
      })
    })

    it("should return object with value property even for null/undefined", () => {
      const resultNull = toNumericValue(null)
      const resultUndefined = toNumericValue(undefined)

      expect(resultNull).toHaveProperty("value")
      expect(resultUndefined).toHaveProperty("value")
      expect(resultNull.value).toBeUndefined()
      expect(resultUndefined.value).toBeUndefined()
    })
  })

  describe("number values", () => {
    it("should convert a simple number to NumericValue", () => {
      const result = toNumericValue(123.45)
      expect(result).toEqual({
        value: 123.45,
      })
    })

    it("should convert zero to NumericValue", () => {
      const result = toNumericValue(0)
      expect(result).toEqual({
        value: 0,
      })
    })

    it("should convert negative numbers to NumericValue", () => {
      const result = toNumericValue(-123.45)
      expect(result).toEqual({
        value: -123.45,
      })
    })

    it("should convert large numbers to NumericValue", () => {
      const result = toNumericValue(999999999.99)
      expect(result).toEqual({
        value: 999999999.99,
      })
    })

    it("should convert very small numbers to NumericValue", () => {
      const result = toNumericValue(0.0001)
      expect(result).toEqual({
        value: 0.0001,
      })
    })

    it("should convert integers to NumericValue", () => {
      const result = toNumericValue(42)
      expect(result).toEqual({
        value: 42,
      })
    })
  })

  describe("NumericValue objects", () => {
    it("should return the same object when input is already a NumericValue with value", () => {
      const input: NumericValue = { value: 123.45 }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value: 123.45,
      })
    })

    it("should return the same object when input is NumericValue with value_x100", () => {
      const input: NumericValue = { value_x100: 12345 }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value_x100: 12345,
      })
    })

    it("should preserve units property", () => {
      const input: NumericValue = { value: 123.45, units: "€" }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value: 123.45,
        units: "€",
      })
    })

    it("should preserve unitsPosition property", () => {
      const input: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      })
    })

    it("should preserve all properties of NumericValue", () => {
      const input: NumericValue = {
        value: 123.456,
        units: "kg",
        unitsPosition: "append",
      }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value: 123.456,
        units: "kg",
        unitsPosition: "append",
      })
    })

    it("should handle NumericValue with value_x100 and units", () => {
      const input: NumericValue = {
        value_x100: 12345,
        units: "€",
      }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value_x100: 12345,
        units: "€",
      })
    })

    it("should handle NumericValue with undefined value", () => {
      const input: NumericValue = { value: undefined }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value: undefined,
      })
    })

    it("should handle NumericValue with undefined value_x100", () => {
      const input: NumericValue = { value_x100: undefined }
      const result = toNumericValue(input)
      expect(result).toBe(input)
      expect(result).toEqual({
        value_x100: undefined,
      })
    })
  })

  describe("edge cases", () => {
    it("should handle Number.MAX_VALUE", () => {
      const result = toNumericValue(Number.MAX_VALUE)
      expect(result).toEqual({
        value: Number.MAX_VALUE,
      })
    })

    it("should handle Number.MIN_VALUE", () => {
      const result = toNumericValue(Number.MIN_VALUE)
      expect(result).toEqual({
        value: Number.MIN_VALUE,
      })
    })

    it("should handle Number.MAX_SAFE_INTEGER", () => {
      const result = toNumericValue(Number.MAX_SAFE_INTEGER)
      expect(result).toEqual({
        value: Number.MAX_SAFE_INTEGER,
      })
    })

    it("should handle Number.MIN_SAFE_INTEGER", () => {
      const result = toNumericValue(Number.MIN_SAFE_INTEGER)
      expect(result).toEqual({
        value: Number.MIN_SAFE_INTEGER,
      })
    })

    it("should handle Infinity", () => {
      const result = toNumericValue(Infinity)
      expect(result).toEqual({
        value: Infinity,
      })
    })

    it("should handle -Infinity", () => {
      const result = toNumericValue(-Infinity)
      expect(result).toEqual({
        value: -Infinity,
      })
    })

    it("should handle NaN", () => {
      const result = toNumericValue(NaN)
      expect(result).toEqual({
        value: NaN,
      })
      expect(Number.isNaN(result.value)).toBe(true)
    })
  })

  describe("return type", () => {
    it("should always return NumericValue type", () => {
      const result1 = toNumericValue(null)
      const result2 = toNumericValue(42)
      const result3 = toNumericValue({ value: 100 })

      expect(result1).toHaveProperty("value")
      expect(result2).toHaveProperty("value")
      expect(result3).toHaveProperty("value")
    })

    it("should return object reference for NumericValue inputs", () => {
      const input: NumericValue = { value: 100 }
      const result = toNumericValue(input)
      expect(result).toBe(input)
    })

    it("should return new object for number inputs", () => {
      const result = toNumericValue(100)
      expect(result).not.toBe(100)
      expect(typeof result).toBe("object")
    })
  })
})
