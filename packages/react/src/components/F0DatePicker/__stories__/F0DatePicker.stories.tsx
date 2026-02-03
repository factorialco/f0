import type { Meta, StoryObj } from "@storybook/react-vite"

import { subDays } from "date-fns"
import MockDate from "mockdate"
import { useState } from "react"
import { expect, fn, within } from "storybook/test"

import { Placeholder } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"
import { getInputFieldArgs } from "@/ui/InputField/__stories__/InputField.args"

import {
  CalendarView,
  DateRange,
} from "../../../experimental/OneCalendar/types"
import { F0DatePicker } from "../F0DatePicker"
import { predefinedPresets } from "../presets"
import { datepickerSizes, DatePickerValue } from "../types"
import { inputFieldInheritedProps } from "../types.internal"

const mockDate = new Date(2025, 6, 30)
const meta = {
  title: "DatePicker",
  component: F0DatePicker,
  async beforeEach() {
    MockDate.set(mockDate)

    // 👇 Reset the Date after each story
    return () => {
      MockDate.reset()
    }
  },
  parameters: {
    docs: {
      description: {
        component: [
          "The `F0DatePicker` component is a date picker that allows the user to select a <strong>range of time</strong> (from a start datetime to an end datetime). With different granularities (day, week, month, quarter, halfyear, year, range). When the user select an item in a granularity is selecting that range of time, e.g. when the user select a day, the range start of the day (30/07/2025 00:00:00) to the end of the day (30/07/2025 23:59:59) is selected.",
          "The component allows you to define the available granularities for the user (if not defined the default ones is day).",
          "The component also allows you to define presets that will be displayed in the component. Check the presets section for more information.",
          "For each granularity the input selector will show a button to navigate to the current date in the granularity, you can hide that via props",
          "The component also allows you navigation arrows to allow user to navigate to the next or previous item in the granularity.",
          "Note the value and defaultValue are objects with the following shape: `{ value: { from: Date, to: Date }, granularity: GranularityDefinitionKey }`",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    value: {
      description:
        "The value of the date picker. You can pass a Date, a string, or a DatePickerValue object. If you pass a Date, it will be converted to a DatePickerValue object with the granularity 'day'.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "DatePickerValue | Date | string | undefined",
          detail:
            "type DatePickerValue = { value: {from: Date, to: Date}, granularity: GranularityDefinitionKey }",
        },
      },
    },
    granularities: {
      description: "The granularities that the user can select",
      table: {
        type: {
          summary: "GranularityDefinitionKey[]",
          detail:
            "type GranularityDefinitionKey = 'day' | 'week' | 'month' | 'quarter' | 'halfyear' | 'year' | 'range'",
        },
      },
    },
    onChange: {
      description: "The function to call when the value changes",
      control: "function",
      table: {
        type: {
          summary:
            "(value: DatePickerValue | undefined, stringValue: string | undefined) => void",
        },
      },
    },
    open: {
      description: "Whether the date picker is open",
      control: "boolean",
    },
    onOpenChange: {
      description:
        "The function to call when the date picker is opened or closed",
      control: "function",
      table: {
        type: {
          summary: "(open: boolean) => void",
        },
      },
    },
    ...getInputFieldArgs(inputFieldInheritedProps),
    ...dataTestIdArgs,
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, { args, parameters }) => {
      const width = parameters?.width || "300px"
      const [value, setValue] = useState<DatePickerValue | undefined>(
        args?.value as DatePickerValue
      )

      const [valueSimple, setValueSimple] = useState<string | undefined>()

      return (
        <div style={{ width }}>
          <Story
            args={{
              ...args,
              value: args?.value,
              onChange: (value, simple) => {
                setValue(value)
                setValueSimple(simple)
              },
            }}
          />
          <div className="text-gray-500 mt-10 text-sm">
            <p>Value: {JSON.stringify(value, null, 2)}</p>
            <p>Value Simple: {valueSimple}</p>
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0DatePicker>

export default meta
type Story = StoryObj<typeof meta>

const today = mockDate
const presets = [
  predefinedPresets.today,
  predefinedPresets.lastWeek,
  predefinedPresets.lastMonth,
  predefinedPresets.thisMonth,
  predefinedPresets.lastQuarter,
  predefinedPresets.lastYear,
  {
    label: "Last 7 days",
    granularity: "day" as CalendarView,
    value: {
      from: subDays(today, 7),
      to: today,
    } as DateRange,
  },
]

export const Default: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
  },
}

export const WithDataTestId: Story = {
  args: {
    label: "DatePicker with Test ID",
    placeholder: "Select a date",
    dataTestId: "my-test-date-picker",
  } as Story["args"] & { dataTestId: string },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-date-picker")).toBeInTheDocument()
  },
}

export const WithValueWithMonthGranularity: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    value: {
      value: {
        from: subDays(today, 7),
        to: today,
      },
      granularity: "month",
    },
  },
}

export const WithValueWithWeekGranularity: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    value: {
      value: {
        from: subDays(today, 7),
        to: today,
      },
      granularity: "week",
    },
  },
}

export const WithValueWithRangeGranularity: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    value: {
      value: {
        from: subDays(today, 7),
        to: today,
      },
      granularity: "range",
    },
  },
}

export const WithMultipleGranularities: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    granularities: ["day", "week", "month", "quarter"],
  },
}

export const WithPresets: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    value: {
      value: undefined,
      granularity: "month",
    },
    granularities: ["day", "week", "month", "quarter"],
    presets,
  },
}

export const WithMinMaxDates: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    value: {
      value: {
        from: today,
        to: today,
      },
      granularity: "day",
    },
    granularities: ["day", "week", "month"],
    minDate: subDays(today, 30), // Can't select dates before 30 days ago
    maxDate: today, // Can't select dates after today
  },
}

export const WithError: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    error: true,
  },
}

export const WithWarning: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    status: {
      type: "warning" as const,
      message: "Warning message",
    },
  },
}

export const WithInfo: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    status: {
      type: "info" as const,
      message: "Info message",
    },
  },
}

export const WithHint: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    hint: "Hint message",
  },
}

export const WithClearable: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    clearable: true,
  },
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({ width: "100%" })),
  args: {
    label: "Label text here",
  },
  render: () => {
    const base = {
      clearable: true,
      labelIcon: Placeholder,
      label: "Label text here",
    }
    const snapshotVariants: (Record<string, unknown> & typeof base)[] = [
      { ...base },
      { ...base, disabled: true },
      { ...base, readonly: true },
      { ...base, required: true },
      { ...base, hideLabel: true },

      { ...base, error: true },
      { ...base, status: { type: "error" as const, message: "Error message" } },
      {
        ...base,
        status: { type: "warning" as const, message: "Warning message" },
      },
      { ...base, status: { type: "info" as const, message: "Info message" } },
      { ...base, hint: "Hint message" },
      { ...base, open: true },
    ]
    return (
      <div className="flex flex-col gap-4">
        {datepickerSizes.map((size) => (
          <section key={size}>
            <h4 className="mb-3 text-lg font-semibold">Size: {size}</h4>
            <div className="flex flex-col gap-4">
              <F0DatePicker
                size={size}
                label="Label text here"
                onChange={fn()}
              />
              {snapshotVariants.map((variant, index) => (
                <div
                  key={`${size}-${index}`}
                  className={variant.open ? "mb-[400px]" : ""}
                >
                  <p className="mb-3 text-sm">
                    Variant: {JSON.stringify(variant)}
                  </p>
                  <div style={{ width: "300px" }}>
                    <F0DatePicker size={size} {...variant} onChange={fn()} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  },
}
