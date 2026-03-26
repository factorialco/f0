import { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Cell, mockItem } from "../../../__stories__/shared"
import { CompoundCellValue } from "../compound"

const meta = {
  title: "Value Display/Compound",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders compound values composed of multiple segments (text, number, amount, percentage) separated by a custom delimiter. Each segment supports semantic tones.",
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
              type: "percentage",
              value: -12.3,
              decimalPlaces: 1,
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
              type: "percentage",
              value: undefined,
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
          separator: "|",
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
              type: "percentage",
              value: -40,
              tone: "critical",
            },
          ],
        },
      }),
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    item: mockItem,
    property: {
      label: "Compound",
      render: () => ({
        type: "compound",
        value: {
          segments: [{ type: "text", value: "Snapshot" }],
        },
      }),
    },
  },
  render: () => {
    const variants: Array<{
      title: string
      value: CompoundCellValue
    }> = [
      {
        title: "Tones",
        value: {
          segments: [
            {
              type: "amount" as const,
              value: 700,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              tone: "critical" as const,
            },
            {
              type: "amount" as const,
              value: 500,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
          ],
        },
      },
      {
        title: "Mixed segments",
        value: {
          segments: [
            {
              type: "text" as const,
              value: "Tracked",
              tone: "secondary" as const,
            },
            {
              type: "number" as const,
              value: 20,
              units: "h",
            },
            {
              type: "percentage" as const,
              value: -12.3,
              decimalPlaces: 1,
              tone: "critical" as const,
            },
            {
              type: "amount" as const,
              value: 2500,
              currency: {
                symbol: "$",
                symbolPosition: "left",
                decimalPlaces: 0,
              },
              tone: "positive" as const,
            },
          ],
        },
      },
      {
        title: "Placeholders and missing",
        value: {
          segments: [
            {
              type: "text" as const,
              value: undefined,
              placeholder: "N/A",
            },
            {
              type: "amount" as const,
              value: undefined,
              currency: { symbol: "EUR", decimalPlaces: 0 },
              placeholder: "-",
            },
            {
              type: "percentage" as const,
              value: undefined,
              placeholder: "No margin",
            },
          ],
        },
      },
      {
        title: "Custom separator",
        value: {
          separator: " | ",
          segments: [
            {
              type: "amount" as const,
              value: 2800,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
            {
              type: "amount" as const,
              value: 2000,
              currency: { symbol: "EUR", decimalPlaces: 0 },
            },
            {
              type: "percentage" as const,
              value: -40,
              tone: "critical" as const,
            },
          ],
        },
      },
    ]

    return (
      <div className="flex max-w-xl flex-col gap-4">
        {variants.map((variant) => (
          <div key={variant.title} className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-f1-foreground-secondary">
              {variant.title}
            </h4>
            <Cell
              item={mockItem}
              property={{
                label: variant.title,
                render: () => ({
                  type: "compound",
                  value: variant.value,
                }),
              }}
            />
          </div>
        ))}
      </div>
    )
  },
}
