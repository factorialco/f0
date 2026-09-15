import { describe, expect, it } from "vitest"
import { defaultTranslations } from "@/lib/providers/i18n"
import type { I18nContextType } from "@/lib/providers/i18n"
import type { F0Field } from "../../types"
import { formatFieldValue, isInlineFieldType } from "../formatFieldValue"

/**
 * The formatter only ever reads translations, so the defaults plus a `t` that
 * resolves against them is the whole context it needs.
 */
const i18n = {
  ...defaultTranslations,
  t: (key: string) =>
    key
      .split(".")
      .reduce<unknown>(
        (node, part) => (node as Record<string, unknown>)?.[part],
        defaultTranslations
      ) as string,
} as unknown as I18nContextType

const field = <T extends F0Field>(f: T) => f

describe("formatFieldValue", () => {
  describe("empty values", () => {
    const text = field({ id: "name", type: "text", label: "Name" } as F0Field)

    it.each([
      ["undefined", undefined],
      ["null", null],
      ["an empty string", ""],
      ["an empty array", []],
    ])("reads %s as the empty string", (_label, value) => {
      expect(formatFieldValue(text, value, i18n)).toBe("")
    })
  })

  describe("text", () => {
    const text = field({ id: "name", type: "text", label: "Name" } as F0Field)

    it("prints the value", () => {
      expect(formatFieldValue(text, "Ada Lovelace", i18n)).toBe("Ada Lovelace")
    })

    it("stringifies a non-string value rather than dropping it", () => {
      expect(formatFieldValue(text, 42, i18n)).toBe("42")
    })
  })

  describe("number", () => {
    const number = field({
      id: "salary",
      type: "number",
      label: "Salary",
    } as F0Field)

    it("groups thousands the way the resting input does", () => {
      expect(formatFieldValue(number, 1234567, i18n)).toBe("1,234,567")
    })

    it("honours the field's own locale over the row's", () => {
      const german = { ...number, locale: "de-DE" } as F0Field
      expect(formatFieldValue(german, 1234567, i18n, "en-US")).toBe("1.234.567")
    })

    it("falls back to the row's locale", () => {
      expect(formatFieldValue(number, 1234.5, i18n, "de-DE")).toBe("1.234,5")
    })

    it("caps decimals where the schema said to", () => {
      const integer = { ...number, maxDecimals: 0 } as F0Field
      expect(formatFieldValue(integer, 3.7, i18n)).toBe("4")
    })

    it("appends the units", () => {
      const percentage = { ...number, units: "%" } as F0Field
      expect(formatFieldValue(percentage, 12, i18n)).toBe("12 %")
    })

    it("reads a value that is not a number as nothing at all", () => {
      expect(formatFieldValue(number, "not a number", i18n)).toBe("")
    })

    it("keeps zero, which is a value and not an empty one", () => {
      expect(formatFieldValue(number, 0, i18n)).toBe("0")
    })
  })

  describe("date", () => {
    const date = field({ id: "start", type: "date", label: "Start" } as F0Field)

    it("reads the day in the reader's own locale", () => {
      expect(formatFieldValue(date, new Date(2025, 7, 1), i18n, "en-GB")).toBe(
        "01/08/2025"
      )
      expect(formatFieldValue(date, new Date(2025, 7, 1), i18n, "en-US")).toBe(
        "08/01/2025"
      )
      expect(formatFieldValue(date, new Date(2025, 7, 1), i18n, "de-DE")).toBe(
        "01.08.2025"
      )
    })

    it("leaves a coarser granularity to the calendar's own helper", () => {
      const monthly = { ...date, granularities: ["month"] } as F0Field
      expect(formatFieldValue(monthly, new Date(2025, 7, 1), i18n)).toContain(
        "2025"
      )
    })

    it("reads an invalid date as nothing", () => {
      expect(formatFieldValue(date, new Date("nonsense"), i18n)).toBe("")
    })

    it("reads a value that is not a date as nothing", () => {
      expect(formatFieldValue(date, "2025-08-01", i18n)).toBe("")
    })
  })

  describe("select", () => {
    const select = field({
      id: "contract",
      type: "select",
      label: "Contract",
      options: [
        { value: "full", label: "Full time" },
        { type: "separator" },
        { value: "part", label: "Part time", selectedLabel: "Part time (20h)" },
      ],
    } as F0Field)

    it("reads the option's label, not its value", () => {
      expect(formatFieldValue(select, "full", i18n)).toBe("Full time")
    })

    it("prefers the label written for the trigger", () => {
      expect(formatFieldValue(select, "part", i18n)).toBe("Part time (20h)")
    })

    it("joins a multiple selection", () => {
      expect(formatFieldValue(select, ["full", "part"], i18n)).toBe(
        "Full time, Part time (20h)"
      )
    })

    it("falls back to the raw value when no option matches", () => {
      expect(formatFieldValue(select, "freelance", i18n)).toBe("freelance")
    })

    it("refuses a source-backed select, whose labels it cannot reach", () => {
      const sourced = {
        id: "manager",
        type: "select",
        label: "Manager",
        source: {},
        mapOptions: () => ({ value: "a", label: "A" }),
      } as unknown as F0Field
      expect(() => formatFieldValue(sourced, "a", i18n)).toThrow(
        /source-backed select/
      )
    })
  })

  describe("checkbox and switch", () => {
    it.each(["checkbox", "switch"] as const)(
      "reads a %s as yes or no",
      (type) => {
        const boolField = { id: "remote", type, label: "Remote" } as F0Field
        expect(formatFieldValue(boolField, true, i18n)).toBe("Yes")
        expect(formatFieldValue(boolField, false, i18n)).toBe("No")
      }
    )
  })

  describe("unsupported types", () => {
    it("throws rather than guessing", () => {
      const file = { id: "cv", type: "file", label: "CV" } as F0Field
      expect(() => formatFieldValue(file, ["a.pdf"], i18n)).toThrow(
        /no inline text form/
      )
    })
  })
})

describe("isInlineFieldType", () => {
  it("names the types a row can read", () => {
    expect(isInlineFieldType("text")).toBe(true)
    expect(isInlineFieldType("select")).toBe(true)
    expect(isInlineFieldType("richtext")).toBe(false)
  })
})
