import type { Meta, StoryObj } from "@storybook/react-vite"
import { subDays } from "date-fns"
import MockDate from "mockdate"
import { CalendarView, DateRange } from "../../OneCalendar/types"
import { OneDatePicker } from "../OneDatePicker"
import { predefinedPresets } from "../presets"
import { DatePickerValue } from "../types"

const mockDate = new Date(2025, 6, 30)
const meta = {
  title: "DatePicker",
  component: OneDatePicker,
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
          "The `OneDatePicker` component is a date picker that allows the user to select a <strong>range of time</strong> (from a start datetime to an end datetime). With different granularities (day, week, month, quarter, halfyear, year, range). When the user select an item in a granularity is selecting that range of time, e.g. when the user select a day, the range start of the day (30/07/2025 00:00:00) to the end of the day (30/07/2025 23:59:59) is selected.",
          "The component allows you to define the available granularities for the user (if not defined the default ones is day).",
          "The component also allows you to define presets that will be displayed in the component. Check the presets section for more information.",
          "For each granularity the input selector will show a button to navigate to the current date in the granularity, you can hide that via props",
          "The component also allows you navigation arrows to allow user to navigate to the next or previous item in the granularity.",
          "Note the value and the default value are an object with the following shape: `{ value: { from: Date, to: Date }, granularity: GranularityDefinitionKey }`",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OneDatePicker>

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

export const Simple: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const WithCustomRange: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const HideGoToCurrent: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    hideGoToCurrent: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const WithDefaultDate: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    hideGoToCurrent: true,
    defaultValue: {
      value: { from: new Date(2025, 6, 30), to: new Date(2025, 6, 30) },
      granularity: "day",
    } as DatePickerValue,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const WithPresets: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter"],
    presets,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const WithMinMaxDates: Story = {
  args: {
    label: "Date",
    placeholder: "Select a date",
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
    granularities: ["day", "week", "month"],
    minDate: subDays(today, 30), // Can't select dates before 30 days ago
    maxDate: today, // Can't select dates after today
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}
