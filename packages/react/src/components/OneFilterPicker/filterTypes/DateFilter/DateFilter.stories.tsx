import type { Meta, StoryObj } from "@storybook/react-vite"
import { addDays } from "date-fns"
import { DateFilter } from "./DateFilter"

const meta = {
  title: "FilterPicker/Filters/DateFilter",
  component: DateFilter,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="border-f1-border-primary w-[300px] rounded-md border p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DateFilter>

export default meta

type Story = StoryObj<typeof DateFilter>

// Static options example
export const Default: Story = {
  args: {
    schema: {
      label: "Date",
      options: {
        mode: "single",
        view: "day",
      },
    },
    onChange: () => {},
  },
}

// With selected values
export const WithSelectedDate: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        mode: "single",
        view: "day",
      },
    },
    value: new Date(),
    onChange: () => {},
  },
}

// Only range
export const WithSelectedDateRange: Story = {
  args: {
    schema: {
      label: "Date",
      options: {
        mode: "range",
        view: "day",
      },
    },
    value: {
      from: new Date(),
      to: addDays(new Date(), 1),
    },
    onChange: () => {},
  },
}
