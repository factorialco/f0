import type { Meta, StoryObj } from "@storybook/react-vite"

import { subDays } from "date-fns"
import { useState } from "react"

import { CalendarView, DateRange } from "@/experimental/OneCalendar/types"

import { DatePickerPopup, DatePickerPopupProps } from "../DatePickerPopup"
import { predefinedPresets } from "../presets"
import { DatePickerValue } from "../types"

const ExampleComponent = (props: Omit<DatePickerPopupProps, "children">) => {
  const [value, setValue] = useState<DatePickerValue | undefined>(undefined)
  const [open, setOpen] = useState(false)

  return (
    <DatePickerPopup
      {...props}
      onSelect={setValue}
      value={value}
      open={open}
      onOpenChange={setOpen}
    >
      Click me {JSON.stringify(value)}
    </DatePickerPopup>
  )
}

const meta = {
  title: "Components/DatePickerPopup",
  component: ExampleComponent,
  parameters: {
    docs: {
      description: {
        component: [
          "The `DatePickerPopup` component is an internal component to render the date selection popup used in other components like date navigator or date input. It allows the user to select a <strong>range of time</strong> (from a start datetime to an end datetime). With different granularities (day, week, month, quarter, halfyear, year, range). When the user select an item in a granularity is selecting that range of time, e.g. when the user select a day, the range start of the day (30/07/2025 00:00:00) to the end of the day (30/07/2025 23:59:59) is selected.",
          "The component allows you to define the available granularities for the user (if not defined the default ones is day).",
          "The component also allows you to define presets that will be displayed in the component. Check the presets section for more information.",
          "Note the value and the default value are an object with the following shape: `{ value: { from: Date, to: Date }, granularity: GranularityDefinitionKey }`",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

const today = new Date(2025, 6, 30)
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
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
    // granularities: ["day", "week", "month"],
  },
}

export const MonthGranularity: Story = {
  args: {
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["month"],
  },
}

export const MultipleGranularities: Story = {
  args: {
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter", "halfyear", "year"],
  },
}

export const WithCustomRange: Story = {
  args: {
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: [
      "day",
      "week",
      "month",
      "quarter",
      "halfyear",
      "year",
      "range",
    ],
  },
}

export const HideGoToCurrent: Story = {
  args: {
    hideGoToCurrent: true,
  },
}

export const WithDefaultDate: Story = {
  args: {
    hideGoToCurrent: true,
    defaultValue: {
      value: { from: new Date(2025, 6, 30), to: new Date(2025, 6, 30) },
      granularity: "month",
    } as DatePickerValue,
    granularities: ["month"],
  },
}

export const WithPresets: Story = {
  args: {
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter"],
    presets,
  },
}

export const WeekView: Story = {
  args: {
    defaultValue: {
      granularity: "week",
    } as DatePickerValue,
    granularities: ["week"],
  },
}

export const QuarterView: Story = {
  args: {
    defaultValue: {
      granularity: "quarter",
    } as DatePickerValue,
    granularities: ["quarter"],
  },
}

export const HalfYearView: Story = {
  args: {
    defaultValue: {
      granularity: "halfyear",
    } as DatePickerValue,
    granularities: ["halfyear"],
  },
}

export const YearView: Story = {
  args: {
    defaultValue: {
      granularity: "year",
    } as DatePickerValue,
    granularities: ["year"],
  },
}

export const WithMinMaxDates: Story = {
  args: {
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
    granularities: ["day", "week", "month"],
    minDate: subDays(today, 30), // Can't select dates before 30 days ago
    maxDate: today, // Can't select dates after today
  },
}
