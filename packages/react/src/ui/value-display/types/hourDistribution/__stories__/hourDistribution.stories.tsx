import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const sampleDataPoints = [
  { date: "2025-12-01", value: 480 },
  { date: "2025-12-02", value: 540 },
  { date: "2025-12-03", value: 480 },
  { date: "2025-12-04", value: 420 },
  { date: "2025-12-05", value: 480 },
  { date: "2025-12-08", value: 360 },
  { date: "2025-12-09", value: 480 },
  { date: "2025-12-10", value: 510 },
  { date: "2025-12-11", value: 480 },
  { date: "2025-12-12", value: 240 },
]

const meta = {
  title: "Value Display/HourDistribution",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a compact bar chart of worked hours per day. Hover over each bar to see the date and hours worked. Used in OneDataCollection table columns for hour distribution.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const HourDistributionWithData: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Hour distribution",
      render: () => ({
        type: "hourDistribution",
        value: {
          dataPoints: sampleDataPoints,
        },
      }),
    },
  },
}

export const HourDistributionShortPeriod: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Hour distribution",
      render: () => ({
        type: "hourDistribution",
        value: {
          dataPoints: [
            { date: "2025-12-16", value: 480 },
            { date: "2025-12-17", value: 510 },
            { date: "2025-12-18", value: 0 },
          ],
        },
      }),
    },
  },
}

/** Two-tone: teal for overworked/balanced, orange/yellow for underworked (worked < planned). */
export const HourDistributionWithPlanned: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Hour distribution",
      render: () => ({
        type: "hourDistribution",
        value: {
          dataPoints: [
            { date: "2025-12-16", value: 480, plannedValue: 480 },
            { date: "2025-12-17", value: 360, plannedValue: 480 },
            { date: "2025-12-18", value: 540, plannedValue: 480 },
            { date: "2025-12-19", value: 480, plannedValue: 480 },
          ],
        },
      }),
    },
  },
}

export const HourDistributionEmpty: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Hour distribution",
      render: () => ({
        type: "hourDistribution",
        value: {
          dataPoints: [],
        },
      }),
    },
  },
}
