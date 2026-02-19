import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Number",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders numeric values with optional units, decimal places, and placeholder states. Right-aligned in table view.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const NumberInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employee ID",
      render: (item) => ({
        type: "number",
        value: Number(item.id),
      }),
    },
  },
}

export const NumberValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employee ID",
      render: (item) => ({
        type: "number",
        value: { number: Number(item.id) },
      }),
    },
  },
}

export const NumberValueInputAsObjectWithDecimals: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Value",
      render: () => ({
        type: "number",
        value: { number: 1234.56789, decimalPlaces: 0 },
      }),
    },
  },
}

export const NumberValueInputAsObjectWithUnits: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Speed",
      render: () => ({
        type: "number",
        value: { number: 82, units: "km/h", decimalPlaces: 2 },
      }),
    },
  },
}

export const NumberWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: () => ({
        type: "number",
        value: {
          number: undefined,
          placeholder: "Some placeholder",
        },
      }),
    },
  },
}
