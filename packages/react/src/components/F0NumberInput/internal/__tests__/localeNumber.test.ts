import { describe, expect, test } from "vitest"

import {
  getNumberSeparators,
  isDecimalSeparator,
  stripGroupSeparators,
  toEditableString,
  withGroupSeparators,
} from "../localeNumber"

describe("getNumberSeparators", () => {
  test("resolves the separators of each locale", () => {
    expect(getNumberSeparators("en-US")).toEqual({ group: ",", decimal: "." })
    expect(getNumberSeparators("es-ES")).toEqual({ group: ".", decimal: "," })
    expect(getNumberSeparators("fr-FR").decimal).toBe(",")
    expect(getNumberSeparators("fr-FR").group).toMatch(/\s/)
  })
})

describe("isDecimalSeparator", () => {
  test("excludes the character the locale groups with", () => {
    expect(isDecimalSeparator(".", "en-US")).toBe(true)
    expect(isDecimalSeparator(",", "en-US")).toBe(false)

    expect(isDecimalSeparator(",", "es-ES")).toBe(true)
    expect(isDecimalSeparator(".", "es-ES")).toBe(false)
  })

  test("accepts both keys when the locale groups with neither", () => {
    expect(isDecimalSeparator(".", "fr-FR")).toBe(true)
    expect(isDecimalSeparator(",", "fr-FR")).toBe(true)
  })

  test("rejects characters that separate nothing", () => {
    expect(isDecimalSeparator("5", "en-US")).toBe(false)
    expect(isDecimalSeparator("-", "en-US")).toBe(false)
  })
})

describe("stripGroupSeparators", () => {
  test("drops the locale's group separator", () => {
    expect(stripGroupSeparators("1,234,567.8", "en-US")).toBe("1234567.8")
    expect(stripGroupSeparators("1.234.567,8", "es-ES")).toBe("1234567,8")
  })

  test("keeps the locale's decimal separator", () => {
    expect(stripGroupSeparators("50000.5", "en-US")).toBe("50000.5")
    expect(stripGroupSeparators("50000,5", "es-ES")).toBe("50000,5")
  })

  test("drops any whitespace when the locale groups with a space", () => {
    expect(stripGroupSeparators("1\u202f234\u202f567,8", "fr-FR")).toBe(
      "1234567,8"
    )
    expect(stripGroupSeparators("1 234 567,8", "fr-FR")).toBe("1234567,8")
  })
})

describe("toEditableString", () => {
  test("renders the number ungrouped with the locale's decimal separator", () => {
    expect(toEditableString(1234567.8, "en-US")).toBe("1234567.8")
    expect(toEditableString(1234567.8, "es-ES")).toBe("1234567,8")
  })

  test("keeps every decimal the value carries when maxDecimals is unset", () => {
    expect(toEditableString(1.23456, "en-US")).toBe("1.23456")
  })

  test("caps the decimals at maxDecimals", () => {
    expect(toEditableString(1.23456, "en-US", 2)).toBe("1.23")
    expect(toEditableString(1.5, "en-US", 0)).toBe("2")
  })

  test("handles negative values and zero", () => {
    expect(toEditableString(-1234.5, "en-US")).toBe("-1234.5")
    expect(toEditableString(0, "en-US")).toBe("0")
  })
})

describe("withGroupSeparators", () => {
  test("groups the integer part", () => {
    expect(withGroupSeparators("50000", "en-US")).toBe("50,000")
    expect(withGroupSeparators("50000", "es-ES")).toBe("50.000")
    expect(withGroupSeparators("-1234567", "en-US")).toBe("-1,234,567")
  })

  test("follows the locale's own grouping rules", () => {
    expect(withGroupSeparators("1234567", "en-IN")).toBe("12,34,567")
  })

  test("leaves the decimals exactly as typed", () => {
    expect(withGroupSeparators("50000.50", "en-US")).toBe("50,000.50")
    expect(withGroupSeparators("50000.123456", "en-US")).toBe("50,000.123456")
    expect(withGroupSeparators("50000,50", "es-ES")).toBe("50.000,50")
  })

  test("keeps a dangling decimal separator", () => {
    expect(withGroupSeparators("50000.", "en-US")).toBe("50,000.")
    expect(withGroupSeparators("50000,", "es-ES")).toBe("50.000,")
  })

  test("returns input with nothing to group untouched", () => {
    expect(withGroupSeparators("", "en-US")).toBe("")
    expect(withGroupSeparators("-", "en-US")).toBe("-")
    expect(withGroupSeparators(".45", "en-US")).toBe(".45")
  })

  test("keeps long integer parts exact", () => {
    expect(withGroupSeparators("12345678901234567890", "en-US")).toBe(
      "12,345,678,901,234,567,890"
    )
  })
})
