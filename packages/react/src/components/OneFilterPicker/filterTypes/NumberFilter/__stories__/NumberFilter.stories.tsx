import type { Meta, StoryObj } from "@storybook/react-vite"
import { NumberFilter } from "../NumberFilter"

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
      label: "Department",
      options: {
        min: 0,
        max: 100,
      },
    },
    onChange: () => {},
  },
}

export const SingleWithSelectedValues: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        min: 0,
        max: 100,
      },
    },
    value: {
      mode: "single",
      value: 100,
    },
    onChange: () => {},
  },
}

export const RangeWithSelectedValues: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        min: 0,
        max: 100,
      },
    },
    value: {
      mode: "range",
      from: {
        value: 0,
        strict: true,
      },
      to: {
        value: 100,
        strict: true,
      },
    },
    onChange: () => {},
  },
}

export const RangeWithStrictToggle: Story = {
  args: {
    schema: {
      label: "Department",
      options: {
        min: 0,
        max: 100,
        strictToggle: true,
      },
    },
    onChange: () => {},
  },
}
