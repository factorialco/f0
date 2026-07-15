import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import type { I18nContextType } from "@/lib/providers/i18n"
import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import { operatorFilter } from "../filterTypes/OperatorFilter"
import type { OperatorFilterOptions } from "../filterTypes/OperatorFilter"
import { OperatorFilter } from "../filterTypes/OperatorFilter/OperatorFilter"

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

    it("localizes boolean values in the applied chip", () => {
      const localizedContext = {
        ...context,
        schema: {
          label: "Active",
          options: {
            operators: [{ value: "equals", label: "Es" }],
            valueType: "boolean" as const,
            copy: { trueLabel: "Sí", falseLabel: "No" },
          },
        },
      }

      expect(
        operatorFilter.chipLabel(
          { operator: "equals", values: [false] },
          localizedContext
        )
      ).toBe("Es No")
    })

    it("returns empty for unknown operators and empty values", () => {
      expect(
        operatorFilter.chipLabel({ operator: "bogus", values: ["x"] }, context)
      ).toBe("")
      expect(operatorFilter.chipLabel(undefined, context)).toBe("")
    })
  })

  describe("form", () => {
    const renderFilter = (
      filterOptions: OperatorFilterOptions,
      value?: { operator: string; values: (string | number | boolean)[] }
    ) => {
      const onChange = vi.fn()
      const view = render(
        <OperatorFilter
          schema={{ label: "Country", options: filterOptions }}
          value={value}
          onChange={onChange}
        />
      )

      return { ...view, onChange }
    }

    it("renders every fixed operator option without virtualization", async () => {
      const user = userEvent.setup()
      renderFilter(options)

      await user.click(screen.getByRole("combobox", { name: "Condition" }))

      expect(screen.getAllByRole("option")).toHaveLength(4)
      expect(screen.getByRole("option", { name: "Is" })).toBeInTheDocument()
      expect(
        screen.getByRole("option", { name: "Is one of" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("option", { name: "Between" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("option", { name: "Has no value" })
      ).toBeInTheDocument()
    })

    it("switches to multiple values and trims empty entries", async () => {
      const user = userEvent.setup()
      const { onChange } = renderFilter(options, {
        operator: "equals",
        values: [],
      })

      await user.click(screen.getByRole("combobox", { name: "Condition" }))
      await user.click(screen.getByRole("option", { name: "Is one of" }))
      expect(screen.getByRole("combobox", { name: "Condition" })).toHaveFocus()
      expect(
        screen.getByRole("textbox", { name: "Values" })
      ).toHaveAccessibleDescription("Separate multiple values with commas")
      await user.type(
        screen.getByRole("textbox", { name: "Values" }),
        " ES, , FR "
      )

      expect(onChange).toHaveBeenLastCalledWith({
        operator: "in",
        values: ["ES", "FR"],
      })
    })

    it("does not collapse a To-only range value into From", async () => {
      const user = userEvent.setup()
      const filterOptions: OperatorFilterOptions = {
        operators: [{ value: "between", label: "Between", valueMode: "range" }],
        valueType: "number",
      }
      const { onChange, rerender } = renderFilter(filterOptions)

      await user.type(screen.getByRole("textbox", { name: "To" }), "20")
      expect(onChange).toHaveBeenLastCalledWith({
        operator: "between",
        values: [],
      })

      rerender(
        <OperatorFilter
          key="reopened"
          schema={{ label: "Headcount", options: filterOptions }}
          value={{ operator: "between", values: [] }}
          onChange={onChange}
        />
      )

      expect(screen.getByRole("textbox", { name: "From" })).toHaveValue("")
      expect(screen.getByRole("textbox", { name: "To" })).toHaveValue("")
    })

    it("coerces a complete numeric range and uses example copy", async () => {
      const user = userEvent.setup()
      const { onChange } = renderFilter(
        {
          operators: [
            { value: "between", label: "Between", valueMode: "range" },
          ],
          valueType: "number",
        },
        { operator: "between", values: [] }
      )

      const from = screen.getByRole("textbox", { name: "From" })
      const to = screen.getByRole("textbox", { name: "To" })
      expect(screen.getAllByText("e.g. 42")).toHaveLength(2)

      await user.type(from, "10")
      await user.type(to, "20")

      expect(onChange).toHaveBeenLastCalledWith({
        operator: "between",
        values: [10, 20],
      })
    })

    it("drops invalid numeric input instead of emitting untrusted text", async () => {
      const user = userEvent.setup()
      const { onChange } = renderFilter({
        operators: [{ value: "equals", label: "Equals" }],
        valueType: "number",
      })

      await user.type(screen.getByRole("textbox", { name: "Value" }), "abc")

      expect(onChange).toHaveBeenLastCalledWith({
        operator: "equals",
        values: [],
      })
    })

    it("uses a static labelled select for boolean values", async () => {
      const user = userEvent.setup()
      const { onChange } = renderFilter({
        operators: [{ value: "equals", label: "Is" }],
        valueType: "boolean",
      })

      await user.click(screen.getByRole("combobox", { name: "Value" }))
      await user.click(screen.getByRole("option", { name: "False" }))

      expect(onChange).toHaveBeenLastCalledWith({
        operator: "equals",
        values: [false],
      })
    })

    it("uses consumer-provided localized copy", () => {
      renderFilter({
        operators: [{ value: "equals", label: "Es" }],
        copy: {
          operatorLabel: "Condición",
          valueLabel: "Valor",
        },
      })

      expect(
        screen.getByRole("combobox", { name: "Condición" })
      ).toBeInTheDocument()
      expect(screen.getByRole("textbox", { name: "Valor" })).toBeInTheDocument()
    })

    it("renders valueless conditions without an input", () => {
      renderFilter(
        {
          operators: [
            { value: "not_set", label: "Has no value", valueMode: "none" },
          ],
        },
        { operator: "not_set", values: [] }
      )

      expect(
        screen.getByText("This condition doesn't need a value")
      ).toBeInTheDocument()
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("seeds a first valueless operator so it can be applied", async () => {
      const { onChange } = renderFilter({
        operators: [
          { value: "not_set", label: "Has no value", valueMode: "none" },
        ],
      })

      await waitFor(() =>
        expect(onChange).toHaveBeenCalledWith({
          operator: "not_set",
          values: [],
        })
      )
    })

    it("renders a deliberate empty state for an empty operator catalog", () => {
      renderFilter({ operators: [] })

      expect(screen.getByRole("status")).toHaveTextContent(
        "No conditions available"
      )
      expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
    })

    it("resynchronizes the form when the controlled value changes", () => {
      const onChange = vi.fn()
      const { rerender } = render(
        <OperatorFilter
          schema={{ label: "Country", options }}
          value={{ operator: "equals", values: ["ES"] }}
          onChange={onChange}
        />
      )

      expect(screen.getByRole("textbox", { name: "Value" })).toHaveValue("ES")

      rerender(
        <OperatorFilter
          schema={{ label: "Country", options }}
          value={{ operator: "in", values: ["FR", "DE"] }}
          onChange={onChange}
        />
      )

      expect(screen.getByRole("textbox", { name: "Values" })).toHaveValue(
        "FR, DE"
      )
    })
  })
})
