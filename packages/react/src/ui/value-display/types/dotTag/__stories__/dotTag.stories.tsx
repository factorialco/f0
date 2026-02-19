import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Dot Tag",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a colored dot indicator with a label. Used for status indicators or category markers with color coding.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const DotTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Dot Tag",
      render: (item) => ({
        type: "dotTag",
        value: {
          label: item.role,
          color: "viridian",
        },
      }),
    },
  },
}
