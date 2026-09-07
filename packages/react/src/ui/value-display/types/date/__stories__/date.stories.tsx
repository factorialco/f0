import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Date",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders formatted dates. Supports both direct Date objects and objects with placeholder states.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const DateInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: item.date,
      }),
    },
  },
}

export const DateValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: { date: item.date },
      }),
    },
  },
}

export const DateWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: () => ({
        type: "date",
        value: { date: undefined, placeholder: "Some placeholder" },
      }),
    },
  },
}
