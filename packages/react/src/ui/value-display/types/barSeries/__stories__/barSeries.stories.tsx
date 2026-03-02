import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const sampleDataPoints = [
  { label: "A", value: 40 },
  { label: "B", value: 60 },
  { label: "C", value: 30 },
  { label: "D", value: 80 },
  { label: "E", value: 0 },
]

const meta = {
  title: "Value Display/BarSeries",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Generic bar-series cell: row of vertical bars with optional secondary value (under/over/two-tone). Used as base for hourDistribution and other presets.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BarSeriesValues: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Bar series",
      render: () => ({
        type: "barSeries",
        value: {
          dataPoints: sampleDataPoints,
        },
      }),
    },
  },
}

export const BarSeriesWithSecondary: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Bar series (under/over)",
      render: () => ({
        type: "barSeries",
        value: {
          dataPoints: [
            { label: "Mon", value: 50, secondaryValue: 60 },
            { label: "Tue", value: 70, secondaryValue: 60 },
            { label: "Wed", value: 60, secondaryValue: 60 },
            { label: "Thu", value: 40, secondaryValue: 60 },
            { label: "Fri", value: 0, secondaryValue: 60 },
          ],
        },
      }),
    },
  },
}

export const BarSeriesEmpty: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Bar series",
      render: () => ({
        type: "barSeries",
        value: {
          dataPoints: [],
        },
      }),
    },
  },
}
