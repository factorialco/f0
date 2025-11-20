import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

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
