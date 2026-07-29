import { describe, expect, test } from "vitest"

import { Options, extractNumber } from "../extractNumber"

describe("extractNumber", () => {
  const integerOptions: Options = { maxDecimals: 0 }
  const decimalOptions: Options = { maxDecimals: 2 }

  describe("integer options", () => {
    test("empty string", () => {
      const input = ""
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: input,
        value: null,
      })
    })

    test("minus sign", () => {
      const input = "-"
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: input,
        value: null,
      })
    })

    test("zero", () => {
      const input = "0"
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: input,
        value: 0,
      })
    })

    test("integer", () => {
      const input = "123"
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: input,
        value: 123,
      })
    })

    test("leading 0", () => {
      expect(extractNumber("0123", integerOptions)).toEqual({
        formattedValue: "123",
        value: 123,
      })
    })

    test("leading negative 0", () => {
      expect(extractNumber("-0123", integerOptions)).toEqual({
        formattedValue: "-123",
        value: -123,
      })
    })

    test("negative integer", () => {
      const input = "-123"
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: input,
        value: -123,
      })
    })

    test("appended dot", () => {
      const input = "123."

      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: "123",
        value: 123,
      })
    })

    test("negative appended dot", () => {
      const input = "-123."
      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: "-123",
        value: -123,
      })
    })

    test("decimal number", () => {
      const input = "123.45"

      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: "123",
        value: 123,
      })
    })

    test("negative decimal number", () => {
      const input = "-123.456"

      expect(extractNumber(input, integerOptions)).toEqual({
        formattedValue: "-123",
        value: -123,
      })
    })

    test("appended letter", () => {
      expect(extractNumber("123a", integerOptions)).toBeNull()
    })

    test("prepended letter", () => {
      expect(extractNumber("a123", integerOptions)).toBeNull()
    })

    test("letter in the middle", () => {
      expect(extractNumber("1a23", integerOptions)).toBeNull()
    })
  })

  describe("decimal options", () => {
    test("empty string", () => {
      const input = ""
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: null,
      })
    })

    test("lone decimal", () => {
      const input = "."
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: null,
      })
    })

    test("minus sign", () => {
      const input = "-"
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: null,
      })
    })

    test("zero", () => {
      const input = "0"
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: 0,
      })
    })

    test("integer", () => {
      const input = "123"
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: 123,
      })
    })

    test("negative integer", () => {
      const input = "-123"
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: -123,
      })
    })

    test("appended dot", () => {
      const input = "123."

      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: 123,
      })
    })

    test("negative appended dot", () => {
      const input = "-123."
      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: -123,
      })
    })

    test("decimal number", () => {
      const input = "123.45"

      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: input,
        value: 123.45,
      })
    })

    test("Comma decimal number", () => {
      const input = "123,45"

      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: "123,45",
        value: 123.45,
      })
    })

    test("truncates decimal number", () => {
      expect(extractNumber("123.456", decimalOptions)).toEqual({
        formattedValue: "123.45",
        value: 123.45,
      })
    })

    test("doesn't truncate when no max decimals specified", () => {
      expect(extractNumber("123.456", {})).toEqual({
        formattedValue: "123.456",
        value: 123.456,
      })
    })

    test("negative decimal number", () => {
      const input = "-123.456"

      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: "-123.45",
        value: -123.45,
      })
    })

    test("no leading integer decimal number", () => {
      const input = "-.456"

      expect(extractNumber(input, decimalOptions)).toEqual({
        formattedValue: "-.45",
        value: -0.45,
      })
    })

    test("appended letter", () => {
      expect(extractNumber("123a", decimalOptions)).toBeNull()
    })

    test("prepended letter", () => {
      expect(extractNumber("a123", decimalOptions)).toBeNull()
    })

    test("letter in the middle", () => {
      expect(extractNumber("1a23", decimalOptions)).toBeNull()
    })
  })

  describe("with a locale", () => {
    describe("en-US (groups with a comma)", () => {
      const options: Options = { maxDecimals: 2, locale: "en-US" }

      test("reads a comma as a group separator", () => {
        expect(extractNumber("50,000", options)).toEqual({
          formattedValue: "50000",
          value: 50000,
        })
      })

      test("reads a dot as the decimal separator", () => {
        expect(extractNumber("50000.54", options)).toEqual({
          formattedValue: "50000.54",
          value: 50000.54,
        })
      })

      test("accepts a fully grouped value, as pasted", () => {
        expect(extractNumber("1,234,567.8", options)).toEqual({
          formattedValue: "1234567.8",
          value: 1234567.8,
        })
      })

      test("keeps trailing decimal zeros", () => {
        expect(extractNumber("50000.50", options)).toEqual({
          formattedValue: "50000.50",
          value: 50000.5,
        })
      })

      test("accepts a group separator in integer mode", () => {
        expect(
          extractNumber("50,000", { maxDecimals: 0, locale: "en-US" })
        ).toEqual({
          formattedValue: "50000",
          value: 50000,
        })
      })
    })

    describe("es-ES (groups with a dot)", () => {
      const options: Options = { maxDecimals: 2, locale: "es-ES" }

      test("reads a dot as a group separator", () => {
        expect(extractNumber("50.000", options)).toEqual({
          formattedValue: "50000",
          value: 50000,
        })
      })

      test("reads a comma as the decimal separator", () => {
        expect(extractNumber("50000,54", options)).toEqual({
          formattedValue: "50000,54",
          value: 50000.54,
        })
      })

      test("accepts a fully grouped value, as pasted", () => {
        expect(extractNumber("1.234.567,8", options)).toEqual({
          formattedValue: "1234567,8",
          value: 1234567.8,
        })
      })
    })

    describe("fr-FR (groups with a space)", () => {
      const options: Options = { maxDecimals: 2, locale: "fr-FR" }

      test("reads either key as the decimal separator", () => {
        // Neither `.` nor `,` groups in fr-FR, so a numeric keypad `.` still
        // reaches the comma the locale formats decimals with.
        expect(extractNumber("1234,5", options)).toEqual({
          formattedValue: "1234,5",
          value: 1234.5,
        })
        expect(extractNumber("1234.5", options)).toEqual({
          formattedValue: "1234,5",
          value: 1234.5,
        })
      })
    })

    test("rejects a second decimal separator", () => {
      expect(
        extractNumber("1.2.3", { maxDecimals: 2, locale: "en-US" })
      ).toBeNull()
      expect(
        extractNumber("1,2,3", { maxDecimals: 2, locale: "es-ES" })
      ).toBeNull()
    })

    test("keeps a partially typed value", () => {
      expect(extractNumber("", { locale: "en-US" })).toEqual({
        formattedValue: "",
        value: null,
      })
      expect(extractNumber("-", { locale: "en-US" })).toEqual({
        formattedValue: "-",
        value: null,
      })
      expect(extractNumber("17.", { maxDecimals: 2, locale: "en-US" })).toEqual(
        {
          formattedValue: "17.",
          value: 17,
        }
      )
      expect(extractNumber("17,", { maxDecimals: 2, locale: "es-ES" })).toEqual(
        {
          formattedValue: "17,",
          value: 17,
        }
      )
    })

    test("still truncates to maxDecimals", () => {
      expect(
        extractNumber("123.456", { maxDecimals: 2, locale: "en-US" })
      ).toEqual({
        formattedValue: "123.45",
        value: 123.45,
      })
    })
  })
})
