import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Percentage",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a percentage value with a circular chart visualization. Supports custom labels and placeholder states.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const PercentageInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: 42,
      }),
    },
  },
}

export const PercentageValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: { percentage: 50 },
      }),
    },
  },
}

export const PercentageWithLabel: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: {
          percentage: 75,
          label: "324 out of 432",
        },
      }),
    },
  },
}

export const PercentageWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: {
          percentage: undefined,
          placeholder: "There is no data yet",
        },
      }),
    },
  },
}
