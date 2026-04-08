import { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Count",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a count aggregation value with a type label prefix. Used for displaying count totals in data collection summary rows.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CountType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employees",
      render: () => ({
        type: "count",
        value: { label: "42" },
      }),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText("42")).toBeInTheDocument()
  },
}
