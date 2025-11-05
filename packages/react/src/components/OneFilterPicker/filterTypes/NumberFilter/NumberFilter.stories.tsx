import type { Meta, StoryObj } from "@storybook/react-vite"
import { NumberFilter } from "./NumberFilter"

const meta = {
  title: "FilterPicker/Filters/NumberFilter",
  component: NumberFilter,
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
} satisfies Meta<typeof NumberFilter>

export default meta

type Story = StoryObj<typeof NumberFilter>

// Static options example
export const Default: Story = {
  args: {
    schema: {
      label: "Salary",
      options: {
        min: 0,
        max: 100000,
      },
    },
    onChange: () => {},
  },
}

// With selected values
export const WithSelectedValues: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        min: 0,
        max: 100000,
      },
    },
    value: [50000, 100000],
    onChange: () => {},
  },
}

// Only range
export const OnlyRange: Story = {
  args: {
    schema: {
      label: "Salary",
      options: {
        modes: ["range"],
        min: 0,
        max: 100000,
      },
    },
    value: undefined,
    onChange: () => {},
  },
}

// Only single
export const OnlySingle: Story = {
  args: {
    schema: {
      label: "Salary",
      options: {
        modes: ["single"],
      },
    },
  },
}
