import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { z } from "zod"

import { DatePickerValue } from "@/components/F0DatePicker"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Form } from "../../../F0Form"
import { f0FormField, inferFieldType } from "../../../f0Schema"
import { isFieldRequired } from "../../schema"
import { getSchemaDefinition } from "../../../useSchemaDefinition"

const quarter2026Q2: DatePickerValue = {
  value: { from: new Date(2026, 3, 1), to: new Date(2026, 5, 30) },
  granularity: "quarter",
}

describe("period field — schema introspection", () => {
  it("infers the period field type from fieldType: 'period'", () => {
    const schema = z.custom<DatePickerValue>()
    const config = { label: "Goal period", fieldType: "period" } as const
    expect(inferFieldType(schema, config)).toBe("period")
  })

  it("creates a period field that propagates granularities/presets/min/max", () => {
    const minDate = new Date(2025, 0, 1)
    const maxDate = new Date(2027, 11, 31)
    const formSchema = z.object({
      goalPeriod: f0FormField(z.custom<DatePickerValue>(), {
        label: "Goal period",
        fieldType: "period",
        granularities: ["year", "halfyear", "quarter", "month", "range"],
        minDate,
        maxDate,
        displayFormat: "default",
        presets: [
          {
            label: "This year",
            granularity: "year",
            value: { from: new Date(2026, 0, 1), to: new Date(2026, 11, 31) },
          },
        ],
      }),
    })

    const definition = getSchemaDefinition(formSchema)
    const fieldItem = definition[0] as {
      type: "field"
      field: {
        type: string
        granularities?: string[]
        minDate?: Date
        maxDate?: Date
        presets?: unknown[]
        displayFormat?: string
        clearable?: boolean
      }
    }

    expect(fieldItem.field.type).toBe("period")
    expect(fieldItem.field.granularities).toEqual([
      "year",
      "halfyear",
      "quarter",
      "month",
      "range",
    ])
    expect(fieldItem.field.minDate).toBe(minDate)
    expect(fieldItem.field.maxDate).toBe(maxDate)
    expect(fieldItem.field.presets).toHaveLength(1)
    expect(fieldItem.field.displayFormat).toBe("default")
  })

  it("derives clearable from the optional schema", () => {
    const required = z.object({
      p: f0FormField(z.custom<DatePickerValue>(), {
        label: "P",
        fieldType: "period",
      }),
    })
    const optional = z.object({
      p: f0FormField(z.custom<DatePickerValue>().optional(), {
        label: "P",
        fieldType: "period",
      }),
    })

    const requiredField = (
      getSchemaDefinition(required)[0] as {
        field: { clearable?: boolean }
      }
    ).field
    const optionalField = (
      getSchemaDefinition(optional)[0] as {
        field: { clearable?: boolean }
      }
    ).field

    expect(requiredField.clearable).toBe(false)
    expect(optionalField.clearable).toBe(true)
  })

  it("marks a non-optional period as required", () => {
    expect(isFieldRequired(z.custom<DatePickerValue>(), "period")).toBe(true)
    expect(
      isFieldRequired(z.custom<DatePickerValue>().optional(), "period")
    ).toBe(false)
  })
})

describe("period field — rendering", () => {
  it("renders the label with a required asterisk for non-optional periods", () => {
    const formSchema = z.object({
      goalPeriod: f0FormField(z.custom<DatePickerValue>(), {
        label: "Goal period",
        fieldType: "period",
        granularities: ["year", "quarter"],
      }),
    })

    render(
      <F0Form
        name="period-required"
        schema={formSchema}
        defaultValues={{ goalPeriod: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText(/Goal period/)).toHaveTextContent("*")
  })

  it("omits the asterisk for optional periods", () => {
    const formSchema = z.object({
      goalPeriod: f0FormField(z.custom<DatePickerValue>().optional(), {
        label: "Goal period",
        fieldType: "period",
        granularities: ["year", "quarter"],
      }),
    })

    render(
      <F0Form
        name="period-optional"
        schema={formSchema}
        defaultValues={{ goalPeriod: undefined }}
        onSubmit={async () => ({ success: true })}
      />
    )

    expect(screen.getByText(/Goal period/)).not.toHaveTextContent("*")
  })

  it("preserves the full DatePickerValue (granularity + range) through submit", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      goalPeriod: f0FormField(z.custom<DatePickerValue>(), {
        label: "Goal period",
        fieldType: "period",
        granularities: ["year", "halfyear", "quarter", "month", "range"],
      }),
    })

    render(
      <F0Form
        name="period-roundtrip"
        schema={formSchema}
        defaultValues={{ goalPeriod: quarter2026Q2 }}
        onSubmit={onSubmit}
      />
    )

    await user.click(screen.getByText("Submit"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    // The value round-trips untouched: granularity and full range are kept,
    // unlike the `date` field which collapses the value to a single Date.
    const submitted = onSubmit.mock.calls[0][0] as {
      goalPeriod: DatePickerValue
    }
    expect(submitted.goalPeriod).toEqual(quarter2026Q2)
    expect(submitted.goalPeriod.granularity).toBe("quarter")
  })

  it("submits an optional period left empty", async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockResolvedValue({ success: true })

    const formSchema = z.object({
      goalPeriod: f0FormField(z.custom<DatePickerValue>().optional(), {
        label: "Goal period",
        fieldType: "period",
        granularities: ["year", "quarter"],
      }),
    })

    // null default exercises the `value ?? undefined` read path without crashing
    render(
      <F0Form
        name="period-empty"
        schema={formSchema}
        defaultValues={{ goalPeriod: null as unknown as DatePickerValue }}
        onSubmit={onSubmit}
      />
    )

    await user.click(screen.getByText("Submit"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    expect(onSubmit.mock.calls[0][0].goalPeriod ?? null).toBeNull()
  })
})
