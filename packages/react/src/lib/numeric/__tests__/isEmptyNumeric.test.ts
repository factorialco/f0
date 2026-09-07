import { describe, expect, it } from "vitest"
import type { Numeric, NumericValue } from "../types"
import { isEmptyNumeric } from "../utils/isEmptyNumeric"

describe("isEmptyNumeric", () => {
  describe("null and undefined values", () => {
    it("should return true for null", () => {
      const result = isEmptyNumeric(null)
      expect(result).toBe(true)
    })

    it("should return true for undefined", () => {
      const result = isEmptyNumeric(undefined)
      expect(result).toBe(true)
    })

    it("should act as type predicate for null", () => {
      const value: Numeric = null
      if (isEmptyNumeric(value)) {
        // TypeScript should narrow to null | undefined
        expect(value).toBeNull()
      }
    })

    it("should act as type predicate for undefined", () => {
      const value: Numeric = undefined
      if (isEmptyNumeric(value)) {
        // TypeScript should narrow to null | undefined
        expect(value).toBeUndefined()
      }
    })
  })

  describe("number values", () => {
    it("should return false for zero", () => {
      const result = isEmptyNumeric(0)
      expect(result).toBe(false)
    })

    it("should return false for positive numbers", () => {
      const result = isEmptyNumeric(123.45)
      expect(result).toBe(false)
    })

    it("should return false for negative numbers", () => {
      const result = isEmptyNumeric(-123.45)
      expect(result).toBe(false)
    })

    it("should return false for very small numbers", () => {
      const result = isEmptyNumeric(0.0001)
      expect(result).toBe(false)
    })

    it("should return false for large numbers", () => {
      const result = isEmptyNumeric(999999999.99)
      expect(result).toBe(false)
    })

    it("should return false for integers", () => {
      const result = isEmptyNumeric(42)
      expect(result).toBe(false)
    })
  })

  describe("NumericValue with value property", () => {
    it("should return false when value is a number", () => {
      const input: NumericValue = { value: 123.45 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false when value is zero", () => {
      const input: NumericValue = { value: 0 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false when value is undefined (function requires both value and value_x100 to be undefined)", () => {
      const input: NumericValue = { value: undefined }
      const result = isEmptyNumeric(input)
      // The function checks for both "value" and "value_x100" properties being undefined
      // Since NumericValue is a discriminated union, this will be false
      expect(result).toBe(false)
    })

    it("should return false when value is negative", () => {
      const input: NumericValue = { value: -123.45 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false for NumericValue with units but undefined value", () => {
      const input: NumericValue = {
        value: undefined,
        units: "€",
      }
      const result = isEmptyNumeric(input)
      // Function requires both value and value_x100 to be undefined
      expect(result).toBe(false)
    })

    it("should return false when value is defined even with units", () => {
      const input: NumericValue = {
        value: 123.45,
        units: "€",
      }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })
  })

  describe("NumericValue with value_x100 property", () => {
    it("should return false when value_x100 is a number", () => {
      const input: NumericValue = { value_x100: 12345 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false when value_x100 is zero", () => {
      const input: NumericValue = { value_x100: 0 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false when value_x100 is undefined (function requires both value and value_x100 to be undefined)", () => {
      const input: NumericValue = { value_x100: undefined }
      const result = isEmptyNumeric(input)
      // The function checks for both "value" and "value_x100" properties being undefined
      // Since NumericValue is a discriminated union, this will be false
      expect(result).toBe(false)
    })

    it("should return false when value_x100 is negative", () => {
      const input: NumericValue = { value_x100: -12345 }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false for NumericValue with units but undefined value_x100", () => {
      const input: NumericValue = {
        value_x100: undefined,
        units: "€",
      }
      const result = isEmptyNumeric(input)
      // Function requires both value and value_x100 to be undefined
      expect(result).toBe(false)
    })

    it("should return false when value_x100 is defined even with units", () => {
      const input: NumericValue = {
        value_x100: 12345,
        units: "€",
      }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })
  })

  describe("complex NumericValue objects", () => {
    it("should return false when both value and value_x100 are defined", () => {
      // Note: This shouldn't happen in practice, but testing edge case
      const input = {
        value: 123.45,
        value_x100: 12345,
      } as NumericValue
      const result = isEmptyNumeric(input)
      // The function checks both, so if value is defined, it returns false
      expect(result).toBe(false)
    })

    it("should return true when both value and value_x100 are undefined", () => {
      // This is an invalid NumericValue (discriminated union violation), but tests the function logic
      const input = {
        value: undefined,
        value_x100: undefined,
      } as NumericValue
      const result = isEmptyNumeric(input)
      expect(result).toBe(true)
    })

    it("should return false for NumericValue with all optional properties but undefined values", () => {
      const input: NumericValue = {
        value: undefined,
        units: "€",
        unitsPosition: "append",
      }
      const result = isEmptyNumeric(input)
      // Function requires both value and value_x100 to be undefined
      expect(result).toBe(false)
    })

    it("should return false when NumericValue has defined value with all properties", () => {
      const input: NumericValue = {
        value: 123.456,
        units: "kg",
        unitsPosition: "prepend",
      }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })
  })

  describe("edge cases", () => {
    it("should return false for Number.MAX_VALUE", () => {
      const result = isEmptyNumeric(Number.MAX_VALUE)
      expect(result).toBe(false)
    })

    it("should return false for Number.MIN_VALUE", () => {
      const result = isEmptyNumeric(Number.MIN_VALUE)
      expect(result).toBe(false)
    })

    it("should return false for Infinity", () => {
      const result = isEmptyNumeric(Infinity)
      expect(result).toBe(false)
    })

    it("should return false for -Infinity", () => {
      const result = isEmptyNumeric(-Infinity)
      expect(result).toBe(false)
    })

    it("should return false for NaN", () => {
      const result = isEmptyNumeric(NaN)
      expect(result).toBe(false)
    })

    it("should return false for NumericValue with NaN value", () => {
      const input: NumericValue = { value: NaN }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })

    it("should return false for NumericValue with Infinity value", () => {
      const input: NumericValue = { value: Infinity }
      const result = isEmptyNumeric(input)
      expect(result).toBe(false)
    })
  })

  describe("type predicate behavior", () => {
    it("should narrow type correctly in conditional", () => {
      const value: Numeric = null
      if (isEmptyNumeric(value)) {
        // Type should be narrowed to null | undefined
        const test: null | undefined = value
        expect(test).toBeNull()
      }
    })

    it("should allow non-empty check after isEmptyNumeric", () => {
      const value: Numeric = 42
      if (!isEmptyNumeric(value)) {
        // Type should be narrowed to exclude null | undefined
        expect(typeof value === "number" || typeof value === "object").toBe(
          true
        )
      }
    })
  })
})
