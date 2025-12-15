import { granularityDefinitions } from "@/experimental/OneCalendar/granularities/index"
import { Meta, StoryObj } from "@storybook/react-vite"
import { addDays } from "date-fns"
import { ExampleComponent } from "../mockData"

const meta = {
  title: "Data Collection/Navigation Filters",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "<p>Navigation filters are filters that are used to filter the data in the collection but they are not the same as the filters. They are displayed in the top left of the collection. For example, a date navigator is a filter that allows you to filter the data by date, and using the arrow keys you can navigate through the dates.</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "day",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const WeekGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "week",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const MonthGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "month",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const YearGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "year",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
      },
    },
  },
}

export const RangeGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: {
          from: new Date(2025, 6, 30),
          to: addDays(new Date(2025, 6, 30), 3),
        },
        defaultGranularity: "range",
        granularity: ["range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
      },
    },
  },
}

export const NoGoToCurrent: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        granularity: "year",
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 1),
        hideGoToCurrent: true,
      },
    },
  },
}

export const MultipleGranularities: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        defaultGranularity: "day",
        granularity: ["day", "week", "month", "year", "range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
      },
    },
  },
}

export const WithPresets: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        defaultValue: new Date(2025, 6, 30),
        defaultGranularity: "day",
        granularity: ["day", "week", "month", "year", "range"],
        min: new Date(2025, 6, 30),
        max: addDays(new Date(2025, 6, 30), 100),
        presets: [
          {
            label: "Today",
            granularity: "day",
            value: granularityDefinitions.day.toRange(new Date(2025, 6, 30)),
          },
          {
            label: "Yesterday",
            granularity: "day",
            value: granularityDefinitions.day.toRange(addDays(new Date(2025, 6, 30), -1)),
          },
        ],
      },
    },
  },
}
