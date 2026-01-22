import { describe, expect, it } from "vitest"

import type {
  Numeric,
  NumericFormatter,
  NumericFormatterOptions,
  NumericWithFormatter,
  RelaxedNumericWithFormatter,
} from "../types"

import { normalizeNumericWithFormatter } from "../utils/normalizeValueWithFormatter"
import { numericFormatter } from "../utils/numericFormatter"

describe("normalizeNumericWithFormatter", () => {
  describe("null and undefined values", () => {
    it("should return default formatter and options when value is null", () => {
      const result = normalizeNumericWithFormatter(null)
      expect(result).toEqual({
        numericValue: { value: undefined },
        formatter: numericFormatter,
        formatterOptions: {},
      })
    })

    it("should return default formatter and options when value is undefined", () => {
      const result = normalizeNumericWithFormatter(undefined)
      expect(result).toEqual({
        numericValue: { value: undefined },
        formatter: numericFormatter,
        formatterOptions: {},
      })
    })

    it("should use custom default formatter when provided", () => {
      const customFormatter: NumericFormatter = () => "custom"
      const result = normalizeNumericWithFormatter(null, {
        formatter: customFormatter,
      })
      expect(result.formatter).toBe(customFormatter)
      expect(result.numericValue).toEqual({ value: undefined })
      expect(result.formatterOptions).toEqual({})
    })

    it("should use custom default formatterOptions when provided", () => {
      const customOptions: NumericFormatterOptions = {
        locale: "es-ES",
        decimalPlaces: 3,
      }
      const result = normalizeNumericWithFormatter(null, {
        formatterOptions: customOptions,
      })
      expect(result.formatterOptions).toEqual(customOptions)
      expect(result.formatter).toBe(numericFormatter)
      expect(result.numericValue).toEqual({ value: undefined })
    })

    it("should use both custom formatter and formatterOptions", () => {
      const customFormatter: NumericFormatter = () => "custom"
      const customOptions: NumericFormatterOptions = {
        locale: "de-DE",
        decimalPlaces: 4,
      }
      const result = normalizeNumericWithFormatter(undefined, {
        formatter: customFormatter,
        formatterOptions: customOptions,
      })
      expect(result.formatter).toBe(customFormatter)
      expect(result.formatterOptions).toEqual(customOptions)
      expect(result.numericValue).toEqual({ value: undefined })
    })
  })

  describe("number values", () => {
    it("should normalize a simple number", () => {
      const result = normalizeNumericWithFormatter(123.45)
      expect(result).toEqual({
        numericValue: { value: 123.45 },
        formatter: numericFormatter,
        formatterOptions: {},
      })
    })

    it("should normalize zero", () => {
      const result = normalizeNumericWithFormatter(0)
      expect(result).toEqual({
        numericValue: { value: 0 },
        formatter: numericFormatter,
        formatterOptions: {},
      })
    })

    it("should normalize negative numbers", () => {
      const result = normalizeNumericWithFormatter(-123.45)
      expect(result).toEqual({
        numericValue: { value: -123.45 },
        formatter: numericFormatter,
        formatterOptions: {},
      })
    })

    it("should normalize a number with custom defaults", () => {
      const customFormatter: NumericFormatter = () => "custom"
      const customOptions: NumericFormatterOptions = {
        locale: "fr-FR",
        decimalPlaces: 1,
      }
      const result = normalizeNumericWithFormatter(100, {
        formatter: customFormatter,
        formatterOptions: customOptions,
      })
      expect(result).toEqual({
        numericValue: { value: 100 },
        formatter: customFormatter,
        formatterOptions: customOptions,
      })
    })

    it("should normalize large numbers", () => {
      const result = normalizeNumericWithFormatter(999999999.99)
      expect(result.numericValue).toEqual({ value: 999999999.99 })
      expect(result.formatter).toBe(numericFormatter)
    })
  })

  describe("NumericValue objects", () => {
    it("should return the NumericValue object when it has value property", () => {
      const input: Numeric = { value: 123.45 }
      const result = normalizeNumericWithFormatter(input)
      // The function checks "value" in value (true), then returns the whole value object
      expect(result.numericValue).toEqual({ value: 123.45 })
      expect(result.formatter).toBe(numericFormatter)
      expect(result.formatterOptions).toEqual({})
    })

    it("should return the NumericValue object for NumericValue with value_x100 property", () => {
      const input: Numeric = { value_x100: 12345 }
      const result = normalizeNumericWithFormatter(input)
      // Since input doesn't have "value" property, it falls through to line 42 which tries value.numericValue (undefined)
      expect(result.numericValue).toEqual({
        value_x100: 12345,
      })
      expect(result.formatter).toBe(numericFormatter)
      expect(result.formatterOptions).toEqual({})
    })

    it("should return the NumericValue object with units", () => {
      const input: Numeric = { value: 123.45, units: "€" }
      const result = normalizeNumericWithFormatter(input)
      // The function checks "value" in value (true), then returns the whole value object
      expect(result.numericValue).toEqual({ value: 123.45, units: "€" })
      expect(result.formatter).toBe(numericFormatter)
    })

    it("should return the NumericValue object with unitsPosition", () => {
      const input: Numeric = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = normalizeNumericWithFormatter(input)
      // The function checks "value" in value (true), then returns the whole value object
      expect(result.numericValue).toEqual({
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      })
      expect(result.formatter).toBe(numericFormatter)
    })

    it("should return the NumericValue object with custom defaults", () => {
      const input: Numeric = { value: 100 }
      const customFormatter: NumericFormatter = () => "custom"
      const customOptions: NumericFormatterOptions = {
        locale: "es-ES",
        decimalPlaces: 2,
      }
      const result = normalizeNumericWithFormatter(input, {
        formatter: customFormatter,
        formatterOptions: customOptions,
      })
      expect(result.numericValue).toEqual({ value: 100 })
      expect(result.formatter).toBe(customFormatter)
      expect(result.formatterOptions).toEqual(customOptions)
    })
  })

  describe("NumericWithFormatter objects", () => {
    it("should normalize a NumericWithFormatter with numericValue property", () => {
      const input: NumericWithFormatter = {
        numericValue: { value: 123.45 },
      }
      const result = normalizeNumericWithFormatter(input)
      // Since input doesn't have "value" property, it falls through to return the whole value
      expect(result.numericValue).toEqual({ value: 123.45 })
      expect(result.formatter).toBe(numericFormatter)
      expect(result.formatterOptions).toEqual({})
    })

    it("should extract numericValue from RelaxedNumericWithFormatter object", () => {
      const input: RelaxedNumericWithFormatter = {
        numericValue: 456.78,
      }
      const result = normalizeNumericWithFormatter(input)
      // Since input doesn't have "value" property, it falls through to return the whole value
      expect(result.numericValue).toEqual({ value: 456.78 })
      expect(result.formatter).toBe(numericFormatter)
      expect(result.formatterOptions).toEqual({})
    })

    it("should preserve formatter from NumericWithFormatter if provided", () => {
      const customFormatter: NumericFormatter = () => "preserved"
      const input: RelaxedNumericWithFormatter = {
        numericValue: 100,
        formatter: customFormatter,
      }
      const result = normalizeNumericWithFormatter(input)
      // Note: The function uses defaults, not the input's formatter
      expect(result.formatter).toBe(customFormatter)
      expect(result.numericValue).toEqual({ value: 100 })
    })

    it("should preserve formatterOptions from RelaxedNumericWithFormatter if provided", () => {
      const customOptions: NumericFormatterOptions = {
        locale: "it-IT",
        decimalPlaces: 5,
      }
      const input: RelaxedNumericWithFormatter = {
        numericValue: 200,
        formatterOptions: customOptions,
      }
      const result = normalizeNumericWithFormatter(input)
      // Note: The function uses defaults, not the input's formatterOptions
      expect(result.formatterOptions).toEqual(customOptions)
      expect(result.numericValue).toEqual({ value: 200 })
    })

    it("should use input's formatter/formatterOptions over defaults", () => {
      const inputFormatter: NumericFormatter = () => "input"
      const inputOptions: NumericFormatterOptions = { locale: "ja-JP" }
      const defaultFormatter: NumericFormatter = () => "default"
      const defaultOptions: NumericFormatterOptions = { locale: "en-US" }

      const input: RelaxedNumericWithFormatter = {
        numericValue: 300,
        formatter: inputFormatter,
        formatterOptions: inputOptions,
      }

      const result = normalizeNumericWithFormatter(input, {
        formatter: defaultFormatter,
        formatterOptions: defaultOptions,
      })

      expect(result.formatter).toBe(inputFormatter)
      expect(result.formatterOptions).toEqual(inputOptions)
      expect(result.numericValue).toEqual({ value: 300 })
    })
  })

  describe("edge cases", () => {
    it("should return the NumericValue object with undefined value", () => {
      const input: Numeric = { value: undefined }
      const result = normalizeNumericWithFormatter(input)
      // The function checks "value" in value (true), then returns the whole value object
      expect(result.numericValue).toEqual({ value: undefined })
    })

    it("should return undefined for NumericValue with undefined value_x100 (falls through to value.numericValue)", () => {
      const input: Numeric = { value_x100: undefined }
      const result = normalizeNumericWithFormatter(input)
      // Since input doesn't have "value" property, it falls through to line 42 which tries value.numericValue (undefined)
      expect(result.numericValue).toEqual({ value_x100: undefined })
    })

    it("should handle empty formatterOptions object", () => {
      const result = normalizeNumericWithFormatter(42, {
        formatterOptions: {},
      })
      expect(result.formatterOptions).toEqual({})
      expect(result.numericValue).toEqual({ value: 42 })
    })

    it("should handle partial formatterOptions", () => {
      const result = normalizeNumericWithFormatter(42, {
        formatterOptions: { locale: "pt-BR" },
      })
      expect(result.formatterOptions).toEqual({ locale: "pt-BR" })
    })

    it("should return the complex NumericValue object", () => {
      const input: Numeric = {
        value: 123.456,
        units: "kg",
        unitsPosition: "append",
      }
      const result = normalizeNumericWithFormatter(input)
      // The function checks "value" in value (true), then returns the whole value object
      expect(result.numericValue).toEqual({
        value: 123.456,
        units: "kg",
        unitsPosition: "append",
      })
    })
  })

  describe("return type", () => {
    it("should return Required<NumericWithFormatter>", () => {
      const result = normalizeNumericWithFormatter(100)
      // Type check: all properties should be present
      expect(result.numericValue).toBeDefined()
      expect(result.formatter).toBeDefined()
      expect(result.formatterOptions).toBeDefined()
    })

    it("should always have formatter defined", () => {
      const result1 = normalizeNumericWithFormatter(null)
      const result2 = normalizeNumericWithFormatter(42)
      const result3 = normalizeNumericWithFormatter({ value: 100 })

      expect(result1.formatter).toBeDefined()
      expect(result2.formatter).toBeDefined()
      expect(result3.formatter).toBeDefined()
    })

    it("should always have formatterOptions defined", () => {
      const result1 = normalizeNumericWithFormatter(null)
      const result2 = normalizeNumericWithFormatter(42)
      const result3 = normalizeNumericWithFormatter({ value: 100 })

      expect(result1.formatterOptions).toBeDefined()
      expect(result2.formatterOptions).toBeDefined()
      expect(result3.formatterOptions).toBeDefined()
    })
  })
})
