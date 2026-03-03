import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Compound",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders compound values composed of multiple segments (text, number, amount) separated by a custom delimiter. Each segment supports semantic tones.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const AmountComparisonWithTones: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Used / budget cap",
      render: () => ({
        type: "compound",
        value: {
          segments: [
            {
              type: "amount",
              value: 4000,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              tone: "critical",
            },
            {
              type: "amount",
              value: 1000,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              tone: "neutral",
            },
          ],
        },
      }),
    },
  },
}

export const MixedSegments: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Current / est. values",
      render: () => ({
        type: "compound",
        value: {
          segments: [
            {
              type: "text",
              value: "N/A",
              tone: "secondary",
            },
            {
              type: "number",
              value: -12.3,
              decimalPlaces: 1,
              units: "%",
              tone: "critical",
            },
            {
              type: "amount",
              value: 2500,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              tone: "positive",
            },
            {
              type: "text",
              value: "-",
              tone: "secondary",
            },
          ],
        },
      }),
    },
  },
}

export const WithPlaceholders: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Cost-to-date / est. cost",
      render: () => ({
        type: "compound",
        value: {
          segments: [
            {
              type: "amount",
              value: undefined,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              placeholder: "-",
            },
            {
              type: "amount",
              value: 1500,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
            {
              type: "number",
              value: undefined,
              units: "%",
              placeholder: "-",
            },
          ],
        },
      }),
    },
  },
}

export const WithCustomSeparator: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Current vs target",
      render: () => ({
        type: "compound",
        value: {
          separator: " | ",
          segments: [
            {
              type: "amount",
              value: 2800,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
            {
              type: "amount",
              value: 2000,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
            {
              type: "number",
              value: -40,
              units: "%",
              tone: "critical",
            },
          ],
        },
      }),
    },
  },
}
