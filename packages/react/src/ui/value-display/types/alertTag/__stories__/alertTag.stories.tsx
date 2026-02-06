import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Alert Tag",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders an alert tag with different levels to indicate alert states on items in data collections.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AlertTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Alert Tag",
      render: () => ({
        type: "alertTag",
        value: {
          level: "critical",
          label: "Critical",
        },
      }),
    },
  },
}
