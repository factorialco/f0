import { describe, expect, it } from "vitest"
import { numericFormatter } from "../numericFormatter"
import type { NumericValue } from "../types"

describe("numericFormatter", () => {
  describe("basic number formatting", () => {
    it("should format a simple number value", () => {
      const value: NumericValue = { value: 123.456 }
      const result = numericFormatter(value)
      expect(result).toBe("123.46")
    })

    it("should format a whole number", () => {
      const value: NumericValue = { value: 100 }
      const result = numericFormatter(value)
      expect(result).toBe("100")
    })

    it("should format zero", () => {
      const value: NumericValue = { value: 0 }
      const result = numericFormatter(value)
      expect(result).toBe("0")
    })

    it("should format negative numbers", () => {
      const value: NumericValue = { value: -123.456 }
      const result = numericFormatter(value)
      expect(result).toBe("-123.46")
    })

    it("should format large numbers", () => {
      const value: NumericValue = { value: 1234567.89 }
      const result = numericFormatter(value)
      expect(result).toBe("1234567.89")
    })
  })

  describe("value_x100 formatting", () => {
    it("should format value_x100 correctly", () => {
      const value: NumericValue = { value_x100: 12345 }
      const result = numericFormatter(value)
      expect(result).toBe("123.45")
    })

    it("should format value_x100 with zero", () => {
      const value: NumericValue = { value_x100: 0 }
      const result = numericFormatter(value)
      expect(result).toBe("0")
    })

    it("should format negative value_x100", () => {
      const value: NumericValue = { value_x100: -12345 }
      const result = numericFormatter(value)
      expect(result).toBe("-123.45")
    })

    it("should format value_x100 with single digit", () => {
      const value: NumericValue = { value_x100: 5 }
      const result = numericFormatter(value)
      expect(result).toBe("0.05")
    })
  })

  describe("decimal places", () => {
    it("should use default decimal places (2)", () => {
      const value: NumericValue = { value: 123.456789 }
      const result = numericFormatter(value)
      expect(result).toBe("123.46")
    })

    it("should respect custom decimal places", () => {
      const value: NumericValue = { value: 123.456789 }
      const result = numericFormatter(value, { decimalPlaces: 4 })
      expect(result).toBe("123.4568")
    })

    it("should handle zero decimal places", () => {
      const value: NumericValue = { value: 123.456 }
      const result = numericFormatter(value, { decimalPlaces: 0 })
      expect(result).toBe("123")
    })

    it("should round correctly with custom decimal places", () => {
      const value: NumericValue = { value: 123.999 }
      const result = numericFormatter(value, { decimalPlaces: 2 })
      expect(result).toBe("124")
    })

    it("should handle value_x100 with custom decimal places", () => {
      const value: NumericValue = { value_x100: 12345 }
      const result = numericFormatter(value, { decimalPlaces: 1 })
      expect(result).toBe("123.5")
    })
  })

  describe("locale formatting", () => {
    it("should use default locale (en-US)", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value)
      expect(result).toBe("1234.56")
    })

    it("should respect custom locale", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value, { locale: "es-ES" })
      expect(result).toBe("1234,56")
    })

    it("should handle different locales", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value, { locale: "de-DE" })
      expect(result).toBe("1234,56")
    })
  })

  describe("units", () => {
    it("should append units by default", () => {
      const value: NumericValue = { value: 123.45, units: "€" }
      const result = numericFormatter(value)
      expect(result).toBe("123.45€")
    })

    it("should prepend units when unitsPosition is prepend", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFormatter(value)
      expect(result).toBe("$123.45")
    })

    it("should append units when unitsPosition is append", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "kg",
        unitsPosition: "append",
      }
      const result = numericFormatter(value)
      expect(result).toBe("123.45kg")
    })

    it("should handle units with value_x100", () => {
      const value: NumericValue = {
        value_x100: 12345,
        units: "€",
      }
      const result = numericFormatter(value)
      expect(result).toBe("123.45€")
    })

    it("should handle units with value_x100 and prepend position", () => {
      const value: NumericValue = {
        value_x100: 12345,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFormatter(value)
      expect(result).toBe("$123.45")
    })

    it("should handle empty string units", () => {
      const value: NumericValue = { value: 123.45, units: "" }
      const result = numericFormatter(value)
      expect(result).toBe("123.45")
    })

    it("should handle units with custom decimal places", () => {
      const value: NumericValue = {
        value: 123.456,
        units: "%",
        unitsPosition: "append",
      }
      const result = numericFormatter(value, { decimalPlaces: 1 })
      expect(result).toBe("123.5%")
    })
  })

  describe("edge cases", () => {
    it("should handle very small numbers", () => {
      const value: NumericValue = { value: 0.001 }
      const result = numericFormatter(value)
      expect(result).toBe("0")
    })

    it("should handle very small numbers with more decimal places", () => {
      const value: NumericValue = { value: 0.001 }
      const result = numericFormatter(value, { decimalPlaces: 4 })
      expect(result).toBe("0.001")
    })

    it("should handle very large numbers", () => {
      const value: NumericValue = { value: 999999999.99 }
      const result = numericFormatter(value)
      expect(result).toBe("999999999.99")
    })

    it("should handle value_x100 with very small values", () => {
      const value: NumericValue = { value_x100: 1 }
      const result = numericFormatter(value)
      expect(result).toBe("0.01")
    })

    it("should handle value_x100 with very large values", () => {
      const value: NumericValue = { value_x100: 99999999999 }
      const result = numericFormatter(value)
      expect(result).toBe("999999999.99")
    })
  })

  describe("options merging", () => {
    it("should merge options with defaults", () => {
      const value: NumericValue = { value: 123.456 }
      const result = numericFormatter(value, { decimalPlaces: 1 })
      expect(result).toBe("123.5")
    })

    it("should override default locale", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value, { locale: "fr-FR" })
      expect(result).toBe("1234,56")
    })

    it("should override both locale and decimal places", () => {
      const value: NumericValue = { value: 1234.567 }
      const result = numericFormatter(value, {
        locale: "es-ES",
        decimalPlaces: 1,
      })
      expect(result).toBe("1234,6")
    })
  })
})

