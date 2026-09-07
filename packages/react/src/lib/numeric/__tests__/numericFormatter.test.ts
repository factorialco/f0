import { describe, expect, it } from "vitest"
import type { Numeric, NumericValue } from "../types"
import { numericFormatter } from "../utils/numericFormatter"

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
      expect(result).toBe("1,234,567.89")
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
      expect(result).toBe("1,234.56")
    })

    it("should respect custom locale", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value, { locale: "es-ES" })
      expect(result).toBe("1.234,56")
    })

    it("should handle different locales", () => {
      const value: NumericValue = { value: 1234.56 }
      const result = numericFormatter(value, { locale: "de-DE" })
      expect(result).toBe("1.234,56")
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
      expect(result).toBe("999,999,999.99")
    })

    it("should handle value_x100 with very small values", () => {
      const value: NumericValue = { value_x100: 1 }
      const result = numericFormatter(value)
      expect(result).toBe("0.01")
    })

    it("should handle value_x100 with very large values", () => {
      const value: NumericValue = { value_x100: 99999999999 }
      const result = numericFormatter(value)
      expect(result).toBe("999,999,999.99")
    })
  })

  describe("Numeric type - direct number values", () => {
    it("should format a direct number value", () => {
      const value: Numeric = 123.456
      const result = numericFormatter(value)
      expect(result).toBe("123.46")
    })

    it("should format a direct whole number", () => {
      const value: Numeric = 100
      const result = numericFormatter(value)
      expect(result).toBe("100")
    })

    it("should format a direct negative number", () => {
      const value: Numeric = -123.456
      const result = numericFormatter(value)
      expect(result).toBe("-123.46")
    })

    it("should format a direct number without units", () => {
      const value: Numeric = 123.45
      const result = numericFormatter(value)
      expect(result).toBe("123.45")
    })

    it("should format a direct number with custom decimal places", () => {
      const value: Numeric = 123.456789
      const result = numericFormatter(value, { decimalPlaces: 4 })
      expect(result).toBe("123.4568")
    })
  })

  describe("Numeric type - undefined and null values", () => {
    it("should return empty string for undefined", () => {
      const value: Numeric = undefined
      const result = numericFormatter(value)
      expect(result).toBe("")
    })

    it("should return empty string for null", () => {
      const value: Numeric = null
      const result = numericFormatter(value)
      expect(result).toBe("")
    })

    it("should return custom emptyPlaceholder for undefined", () => {
      const value: Numeric = undefined
      const result = numericFormatter(value, { emptyPlaceholder: "-" })
      expect(result).toBe("-")
    })

    it("should return custom emptyPlaceholder for null", () => {
      const value: Numeric = null
      const result = numericFormatter(value, { emptyPlaceholder: "N/A" })
      expect(result).toBe("N/A")
    })

    it("should return custom emptyPlaceholder with custom text", () => {
      const value: Numeric = null
      const result = numericFormatter(value, { emptyPlaceholder: "No data" })
      expect(result).toBe("No data")
    })
  })

  describe("hideUnits option", () => {
    it("should hide units when hideUnits is true", () => {
      const value: NumericValue = { value: 123.45, units: "€" }
      const result = numericFormatter(value, { hideUnits: true })
      expect(result).toBe("123.45")
    })

    it("should show units when hideUnits is false", () => {
      const value: NumericValue = { value: 123.45, units: "€" }
      const result = numericFormatter(value, { hideUnits: false })
      expect(result).toBe("123.45€")
    })

    it("should hide units even when unitsPosition is prepend", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFormatter(value, { hideUnits: true })
      expect(result).toBe("123.45")
    })

    it("should hide units with value_x100", () => {
      const value: NumericValue = {
        value_x100: 12345,
        units: "€",
      }
      const result = numericFormatter(value, { hideUnits: true })
      expect(result).toBe("123.45")
    })
  })

  describe("compact option", () => {
    it("should format with compact notation when compact is true", () => {
      const value: NumericValue = { value: 1234567 }
      const result = numericFormatter(value, {
        compact: true,
        decimalPlaces: 1,
      })
      expect(result).toBe("1.2M")
    })

    it("should format with standard notation when compact is false", () => {
      const value: NumericValue = { value: 1234567 }
      const result = numericFormatter(value, { compact: false })
      expect(result).toBe("1,234,567")
    })

    it("should format large numbers with compact notation", () => {
      const value: NumericValue = { value: 1000000 }
      const result = numericFormatter(value, { compact: true })
      expect(result).toBe("1M")
    })

    it("should format thousands with compact notation", () => {
      const value: NumericValue = { value: 5000 }
      const result = numericFormatter(value, { compact: true })
      expect(result).toBe("5K")
    })

    it("should format with compact notation and units", () => {
      const value: NumericValue = { value: 1234567, units: "€" }
      const result = numericFormatter(value, {
        compact: true,
        decimalPlaces: 1,
      })
      expect(result).toBe("1.2M€")
    })

    it("should format with compact notation and prepend units", () => {
      const value: NumericValue = {
        value: 1234567,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFormatter(value, {
        compact: true,
        decimalPlaces: 1,
      })
      expect(result).toBe("$1.2M")
    })

    it("should format value_x100 with compact notation", () => {
      const value: NumericValue = { value_x100: 123456700 }
      const result = numericFormatter(value, {
        compact: true,
        decimalPlaces: 1,
      })
      expect(result).toBe("1.2M")
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
      expect(result).toBe("1\u202f234,56")
    })

    it("should override both locale and decimal places", () => {
      const value: NumericValue = { value: 1234.567 }
      const result = numericFormatter(value, {
        locale: "es-ES",
        decimalPlaces: 1,
      })
      expect(result).toBe("1.234,6")
    })

    it("should combine multiple options", () => {
      const value: NumericValue = { value: 1234567.89, units: "€" }
      const result = numericFormatter(value, {
        compact: true,
        decimalPlaces: 1,
        hideUnits: false,
      })
      expect(result).toBe("1.2M€")
    })

    it("should combine compact with hideUnits", () => {
      const value: NumericValue = { value: 1234567, units: "$" }
      const result = numericFormatter(value, {
        compact: true,
        hideUnits: true,
        decimalPlaces: 1,
      })
      expect(result).toBe("1.2M")
    })
  })

  describe("edge case - valueToFormat undefined", () => {
    it("should return emptyPlaceholder when valueToFormat is undefined", () => {
      // This case occurs when isEmptyNumeric returns false but numericFinalValue returns undefined
      // This can happen with an invalid NumericValue object
      const value = { value: undefined } as NumericValue
      const result = numericFormatter(value)
      expect(result).toBe("")
    })

    it("should return custom emptyPlaceholder when valueToFormat is undefined", () => {
      const value = { value: undefined } as NumericValue
      const result = numericFormatter(value, { emptyPlaceholder: "N/A" })
      expect(result).toBe("N/A")
    })

    it("should handle value_x100 undefined case", () => {
      const value = { value_x100: undefined } as NumericValue
      const result = numericFormatter(value)
      expect(result).toBe("")
    })

    it("should handle value_x100 null case", () => {
      const value = { value_x100: null as unknown as undefined } as NumericValue
      const result = numericFormatter(value)
      expect(result).toBe("")
    })
  })

  describe("unitsSpaced option", () => {
    it("should add space before units when unitsSpaced is true and unitsPosition is prepend", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "$",
        unitsPosition: "prepend",
      }
      const result = numericFormatter(value, { unitsSpaced: true })
      expect(result).toBe("$ 123.45")
    })

    it("should add space after units when unitsSpaced is true and unitsPosition is append", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "€",
        unitsPosition: "append",
      }
      const result = numericFormatter(value, { unitsSpaced: true })
      expect(result).toBe("123.45 €")
    })

    it("should not add space when unitsSpaced is false", () => {
      const value: NumericValue = {
        value: 123.45,
        units: "€",
        unitsPosition: "append",
      }
      const result = numericFormatter(value, { unitsSpaced: false })
      expect(result).toBe("123.45€")
    })
  })

  describe("useGrouping option", () => {
    it("should use grouping when useGrouping is true", () => {
      const value: NumericValue = { value: 1234567.89 }
      const result = numericFormatter(value, { useGrouping: true })
      expect(result).toBe("1,234,567.89")
    })

    it("should not use grouping when useGrouping is false", () => {
      const value: NumericValue = { value: 1234567.89 }
      const result = numericFormatter(value, { useGrouping: false })
      expect(result).toBe("1234567.89")
    })
  })
})
