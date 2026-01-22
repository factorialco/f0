import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Amount",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders monetary values with currency formatting. Supports custom currency symbols, positions, and decimal places.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AmountInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: (item) => ({
        type: "amount",
        value: item.amount,
      }),
    },
  },
}

export const AmountValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: (item) => ({
        type: "amount",
        value: { amount: item.amount },
      }),
    },
  },
}

export const AmountWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: { amount: undefined, placeholder: "Some placeholder" },
      }),
    },
  },
}

export const AmountWithCurrency: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: {
          amount: 1234.56789,
          currency: { symbol: "$", symbolPosition: "left", decimalPlaces: 2 },
        },
      }),
    },
  },
}

export const AmountWithCurrencyEuro: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: {
          amount: 1234.56789,
          currency: { symbol: "EUR", decimalPlaces: 2 },
        },
      }),
    },
  },
}
