import type { Meta, StoryObj } from "@storybook/react-vite"
import { addMonths, subDays } from "date-fns"
import MockDate from "mockdate"
import { useState } from "react"
import { expect, fn, screen, userEvent, within } from "storybook/test"
import { getInputFieldArgs } from "@/components/F0InputField/__stories__/F0InputField.args"
import { GranularityDefinitionKey } from "@/components/OneCalendar/granularities"
import { DateRange } from "@/components/OneCalendar/types"
import { Placeholder } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Dialog } from "@/patterns/F0Dialog"
import { F0DatePicker } from ".."
import { predefinedPresets } from "../presets"
import { datepickerSizes, datePickerModes, DatePickerValue } from "../types"
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
          'On a record, a date usually reads as text and only becomes an input once someone edits it. That is `mode="read"`: the date renders as dd/MM/yyyy, hovering it (or tabbing to it) reveals the calendar, and activating that opens the picker on the date already set. Closing the picker puts the date back to text',
          "Who may do what is `canEdit` and `onRequestChange`. With `canEdit` the reader gets the calendar; without it, `onRequestChange` gives them a way to ask whoever administers the record, and with neither the date is just text. `disabled` reads the same way",
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
    mode: {
      description:
        "Whether the picker shows the input field or the date as text. In `read` mode `displayFormat` defaults to `default` (dd/MM/yyyy).",
      control: "inline-radio",
      options: datePickerModes,
      table: { type: { summary: '"edit" | "read"' } },
    },
    onModeChange: {
      description:
        "Called whenever the picker moves between reading and editing",
      control: "function",
      table: { type: { summary: "(mode: DatePickerMode) => void" } },
    },
    canEdit: {
      description:
        "Whether the reader may change the date. `false` drops the edit action in `read` mode.",
      control: "boolean",
    },
    onRequestChange: {
      description:
        "Asks whoever administers the record to change the date. Renders as an action in `read` mode, and only while `canEdit` is false.",
      control: "function",
      table: { type: { summary: "() => void" } },
    },
    emptyLabel: {
      description: "What `read` mode shows in place of an empty date",
      control: "text",
    },
    ...getInputFieldArgs(inputFieldInheritedProps),
    ...dataTestIdArgs,
  },
  tags: ["autodocs", "stable"],
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
    granularity: "day" as GranularityDefinitionKey,
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

export const InsideDialog: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Inside a dialog the month and year dropdowns portal their listbox into the dialog container, outside the calendar's popover — so the calendar has to stay open while one is used, or neither is pickable. The play function covers the composition; the dismissal it guards against only reproduces with real OS-level input, so it is verified manually rather than here.",
      },
    },
  },
  args: {
    label: "Effective date",
    placeholder: "Select a date",
  },
  render: (args) => (
    <F0Dialog
      isOpen
      title="Add employees"
      description="Pick when the assignment starts."
      onClose={fn()}
      primaryAction={{ label: "Save", onClick: fn() }}
    >
      <F0DatePicker {...args} />
    </F0Dialog>
  ),
  play: async ({ step }) => {
    const dialog = within(await screen.findByRole("dialog"))

    await step("open the calendar", async () => {
      await userEvent.click(dialog.getByRole("textbox"))
      await expect(await screen.findByRole("grid")).toBeInTheDocument()
    })

    // Stops at "the dropdown opens". Whether the calendar survives that — the
    // behaviour this composition exists for — cannot be asserted here: the test
    // runner drives synthetic events in a headless shell, where focus does not
    // move the way it does for a real click, and the calendar closes either way.
    await step("open the month dropdown", async () => {
      await userEvent.click(screen.getByRole("combobox", { name: /month/i }))
      await expect(await screen.findByRole("listbox")).toBeInTheDocument()
    })
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

export const OpensOnMinDate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "With no value selected, the calendar opens on the month of the nearest bound instead of today. Here `minDate` is two months ahead, so the picker opens on that month — handy for an end-date picker whose `minDate` is the already-selected start date.",
      },
    },
  },
  args: {
    label: "Date",
    placeholder: "Select a date",
    minDate: addMonths(today, 2),
    open: true,
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

/**
 * A date on a record reads as text until someone with permission edits it. This
 * is the HR admin / manager view of an employee's Seniority date: hovering the
 * value (or tabbing to it) reveals the calendar, and activating it opens the
 * picker on the date already set.
 */
export const ReadModeEditable: Story = {
  args: {
    label: "Seniority date",
    mode: "read",
    value: {
      value: { from: new Date(2018, 8, 1), to: new Date(2018, 8, 1) },
      granularity: "day",
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("the date reads as dd/MM/yyyy, not as an input", async () => {
      await expect(canvas.getByText("01/09/2018")).toBeVisible()
      await expect(canvas.queryByRole("textbox")).not.toBeInTheDocument()
    })

    await step("activating the value opens the calendar on it", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: "Edit Seniority date" })
      )
      await expect(canvas.getByRole("textbox")).toHaveValue("01/09/2018")
      await expect(await screen.findByRole("grid")).toBeInTheDocument()
      await expect(
        screen.getByRole("combobox", { name: /month/i })
      ).toHaveTextContent("September")
    })

    await step("dismissing it puts the date back to text", async () => {
      await userEvent.keyboard("{Escape}")
      await expect(
        await canvas.findByRole("button", { name: "Edit Seniority date" })
      ).toBeVisible()
    })
  },
}

/**
 * The same field seen by the employee it belongs to. They cannot set the date,
 * so the calendar is replaced by a request that goes to whoever administers the
 * record.
 */
export const ReadModeRequestChange: Story = {
  args: {
    label: "Seniority date",
    mode: "read",
    canEdit: false,
    onRequestChange: fn(),
    value: {
      value: { from: new Date(2018, 8, 1), to: new Date(2018, 8, 1) },
      granularity: "day",
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("there is nothing to edit", async () => {
      await expect(
        canvas.queryByRole("button", { name: "Edit Seniority date" })
      ).not.toBeInTheDocument()
    })

    await step("the change is requested from the keyboard", async () => {
      // A pointer reveals the action by hovering the row; a keyboard reveals it
      // by reaching it, which is the path assertable here — CSS `:hover` is a
      // native browser state that synthetic pointer events never enter.
      await userEvent.tab()

      const request = canvas.getByRole("button", {
        name: "Request a change to Seniority date",
      })
      await expect(request).toHaveFocus()

      await userEvent.click(request)
      await expect(args.onRequestChange).toHaveBeenCalledOnce()
    })
  },
}

/**
 * A date nobody on this screen can change — an employee's contract start date,
 * which lives on the contract. It reads as text with no affordances at all,
 * which is also what `disabled` gives you in `read` mode.
 */
export const ReadModeLocked: Story = {
  args: {
    label: "Contract start date",
    mode: "read",
    canEdit: false,
    value: {
      value: { from: new Date(2021, 3, 12), to: new Date(2021, 3, 12) },
      granularity: "day",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("12/04/2021")).toBeVisible()
    await expect(canvas.queryAllByRole("button")).toHaveLength(0)
  },
}

/** With no date set, `read` mode falls back to `emptyLabel`. */
export const ReadModeEmpty: Story = {
  args: {
    label: "Seniority date",
    mode: "read",
    emptyLabel: "no date",
    value: undefined,
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
    const readValue: DatePickerValue = {
      value: { from: new Date(2018, 8, 1), to: new Date(2018, 8, 1) },
      granularity: "day",
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
      { ...base, mode: "read" as const, value: readValue },
      {
        ...base,
        mode: "read" as const,
        value: readValue,
        canEdit: false,
        onRequestChange: fn(),
      },
      { ...base, mode: "read" as const, value: readValue, canEdit: false },
      {
        ...base,
        mode: "read" as const,
        value: undefined,
        emptyLabel: "no date",
      },
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
