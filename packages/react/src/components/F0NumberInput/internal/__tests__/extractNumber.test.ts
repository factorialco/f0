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
})
