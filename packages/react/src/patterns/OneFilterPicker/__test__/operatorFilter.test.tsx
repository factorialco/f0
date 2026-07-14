import { describe, expect, it } from "vitest"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import type { I18nContextType } from "@/lib/providers/i18n"

import { operatorFilter } from "../filterTypes/OperatorFilter"
import type { OperatorFilterOptions } from "../filterTypes/OperatorFilter"

const options: OperatorFilterOptions = {
  operators: [
    { value: "equals", label: "Is" },
    { value: "in", label: "Is one of", valueMode: "multiple" },
    { value: "between", label: "Between", valueMode: "range" },
    { value: "not_set", label: "Has no value", valueMode: "none" },
  ],
  valueType: "string",
}

const context = {
  schema: { label: "Country", options },
  i18n: { ...defaultTranslations, t: (key: string) => key } as I18nContextType,
}

describe("operatorFilter", () => {
  describe("isEmpty", () => {
    it("treats undefined as empty", () => {
      expect(operatorFilter.isEmpty(undefined, context)).toBe(true)
    })

    it("treats an unknown operator as empty", () => {
      expect(
        operatorFilter.isEmpty({ operator: "bogus", values: ["x"] }, context)
      ).toBe(true)
    })

    it("treats a valueless operator as active without values", () => {
      expect(
        operatorFilter.isEmpty({ operator: "not_set", values: [] }, context)
      ).toBe(false)
    })

    it("requires at least one value for single/multiple operators", () => {
      expect(
        operatorFilter.isEmpty({ operator: "equals", values: [] }, context)
      ).toBe(true)
      expect(
        operatorFilter.isEmpty({ operator: "equals", values: ["ES"] }, context)
      ).toBe(false)
      expect(
        operatorFilter.isEmpty(
          { operator: "in", values: ["ES", "FR"] },
          context
        )
      ).toBe(false)
    })

    it("requires exactly two values for range operators", () => {
      expect(
        operatorFilter.isEmpty({ operator: "between", values: [1] }, context)
      ).toBe(true)
      expect(
        operatorFilter.isEmpty({ operator: "between", values: [1, 5] }, context)
      ).toBe(false)
      expect(
        operatorFilter.isEmpty(
          { operator: "between", values: [1, 5, 9] },
          context
        )
      ).toBe(true)
    })
  })

  describe("chipLabel", () => {
    it("combines operator label and values", () => {
      expect(
        operatorFilter.chipLabel(
          { operator: "in", values: ["ES", "FR"] },
          context
        )
      ).toBe("Is one of ES, FR")
    })

    it("uses the operator label alone for valueless operators", () => {
      expect(
        operatorFilter.chipLabel({ operator: "not_set", values: [] }, context)
      ).toBe("Has no value")
    })

    it("returns empty for unknown operators and empty values", () => {
      expect(
        operatorFilter.chipLabel({ operator: "bogus", values: ["x"] }, context)
      ).toBe("")
      expect(operatorFilter.chipLabel(undefined, context)).toBe("")
    })
  })
})
