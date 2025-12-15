import { granularityDefinitions } from "@/experimental/OneCalendar"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { subDays } from "date-fns"
import { useState } from "react"
import { expect, within } from "storybook/test"
import { CalendarView, DateRange } from "../../OneCalendar/types"
import { OneDateNavigator } from "../OneDateNavigator"
import { predefinedPresets } from "../presets"
import { DatePickerValue } from "../types"

const meta = {
  title: "DateNavigator",
  component: OneDateNavigator,
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
  argTypes: {
    defaultValue: {
      description:
        "⚠️ Deprecated. Use the `value` prop instead. The initial value of the date picker. ",
      table: {
        type: {
          summary: "DatePickerValue | undefined",
          detail:
            "type DatePickerValue = { value: {from: Date, to: Date}, granularity: GranularityDefinitionKey }",
        },
      },
    },
    hideGoToCurrent: {
      description:
        "Whether to hide the go to current button (Today, This week, This month, This quarter, This half year, This year, ...)",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    hideNavigation: {
      description: "Whether to hide the navigation arrows",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    granularities: {
      description: "The granularities that the user can select",
      table: {
        type: {
          summary: "GranularityDefinitionKey[]",
        },
      },
    },
    presets: {
      description:
        "The presets to display in the date picker. A preset is a predefined date rande e.g Yesterday, Last 7 days, Last month, etc.",
      table: {
        type: {
          summary: "DatePreset[]",
          detail:
            "type DatePreset = { label: string, granularity: GranularityDefinitionKey, value: DateRange }",
        },
      },
    },
    value: {
      description: "The value of the date picker",
      table: {
        type: {
          summary: "DatePickerValue | undefined",
          detail:
            "type DatePickerValue = { value: {from: Date, to: Date}, granularity: GranularityDefinitionKey }",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
      control: {
        type: "object",
        value: {
          granularity: "day",
          value: {
            from: new Date(),
            to: new Date(),
          },
        },
      },
    },
    onSelect: {
      description: "The callback function that is called when the user selects a value",
      table: {
        type: {
          summary: "function",
        },
        detail: "function(value: DatePickerValue | undefined) => void",
      },
    },
    compareTo: {
      description: "The compare to options to display in the date picker",
      table: {
        type: {
          summary: "DatePickerCompareTo",
        },
      },
    },
    defaultCompareTo: {
      description: "The default compare to value",
      table: {
        type: {
          summary: "CompareToDefKey",
        },
      },
    },
    onCompareToChange: {
      description: "The callback function that is called when the user selects a compare to value",
      table: {
        type: {
          summary: "function",
        },
        detail: "function(compareTo: DateRangeComplete | DateRangeComplete[] | undefined) => void",
      },
    },
    minDate: {
      description: "The minimum date that the user can select",
      table: {
        type: {
          summary: "Date",
        },
      },
    },
    maxDate: {
      description: "The maximum date that the user can select",
      table: {
        type: {
          summary: "Date",
        },
      },
    },
    disabled: {
      description: "Whether the date picker is disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    open: {
      description: "Whether the date picker is open",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    onOpenChange: {
      description:
        "The callback function that is called when the user opens or closes the date picker",
      table: {
        type: {
          summary: "function",
        },
        detail: "function(open: boolean) => void",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OneDateNavigator>

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
    granularities: ["day", "week", "month", "quarter", "halfyear", "year", "range"],
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Ensure the default value is rendered
    const trigger = canvas.getByText("Jul 2025")
    expect(trigger).toBeInTheDocument()
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

export const WithPresetsHideNavigation: Story = {
  args: {
    defaultValue: {
      granularity: "month",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter", "range"],
    presets,
    hideNavigation: true,
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

export const WithCompareTo: Story = {
  args: {
    defaultValue: {
      value: granularityDefinitions.day.toRange(new Date()),
      granularity: "day",
    } as DatePickerValue,
    granularities: ["day", "week", "month"],
    minDate: subDays(today, 30), // Can't select dates before 30 days ago
    //maxDate: today, // Can't select dates after today
    onCompareToChange(compareTo) {
      console.log("compareTo:", compareTo)
    },
    compareTo: {
      day: [
        {
          label: "Yesterday",
          value: () =>
            granularityDefinitions.day.add(granularityDefinitions.day.toRange(new Date()), -1),
        },
        {
          label: "Previous Day",
          value: { delta: -1, units: "day" },
        },
        {
          label: "Previous Week",
          value: { delta: -7, units: "day" },
        },
      ],
      week: [
        {
          label: "Previous Week",
          value: { delta: -1, units: "week" },
        },
        {
          label: "Previous 2 Week",
          value: (value) => [
            granularityDefinitions.week.add(granularityDefinitions.week.toRange(value), -2),
            granularityDefinitions.week.add(granularityDefinitions.week.toRange(value), -1),
          ],
        },
      ],
      month: [
        {
          label: "Previous Month",
          value: { delta: -1, units: "month" },
        },
      ],
    },
  },
}

export const ChangeValueFromOutside: Story = {
  args: {
    defaultValue: {
      granularity: "day",
    } as DatePickerValue,
    granularities: ["day", "week", "month", "quarter"],
  },
  render: (args) => {
    const [value, setValue] = useState<DatePickerValue | undefined>(args.defaultValue)
    return (
      <>
        <OneDateNavigator {...args} value={value} onSelect={(value) => setValue(value)} />
        <div className="mt-4">
          <button
            onClick={() =>
              setValue({
                granularity: "day",
                value: granularityDefinitions.day.toRange(new Date()),
              })
            }
          >
            Set Today
          </button>

          <button
            onClick={() =>
              setValue({
                granularity: "month",
                value: granularityDefinitions.month.toRange(new Date()),
              })
            }
          >
            Set Granularity to Month
          </button>
        </div>
      </>
    )
  },
}

export const WithDefaultCompareTo: Story = {
  args: {
    ...WithCompareTo.args,
    defaultCompareTo: "1",
  },
}
