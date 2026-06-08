import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Delta",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a single delta value with an icon indicating the direction of change. Used for displaying changes or differences in data collections.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const DeltaType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Delta",
      render: (item) => ({
        type: "delta",
        value: item.positiveDelta,
      }),
    },
  },
}

export const NegativeDeltaType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Delta",
      render: (item) => ({
        type: "delta",
        value: item.negativeDelta,
      }),
    },
  },
}
