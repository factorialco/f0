import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0DataChartProps } from "../types"

import { F0DataChart } from "../index"
import { ChartDecorator, ResponsiveSnapshot } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Gauge",
  tags: ["autodocs"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

export const Default: Story = {
  args: {
    type: "gauge",
    value: 72,
    name: "Hiring Goal",
  },
}

export const CustomRange: Story = {
  args: {
    type: "gauge",
    value: 142,
    min: 0,
    max: 200,
    name: "Budget Used",
    valueFormatter: (v) => `${v}k €`,
  },
}

export const CustomColor: Story = {
  args: {
    type: "gauge",
    value: 88,
    name: "Completion",
    color: "viridian",
  },
}

export const WithFormatter: Story = {
  args: {
    type: "gauge",
    value: 67,
    name: "Engagement Rate",
    valueFormatter: (v) => `${v}%`,
  },
}

export const NoValue: Story = {
  args: {
    type: "gauge",
    value: 45,
    name: "Progress",
    showValue: false,
  },
}

// ---------------------------------------------------------------------------
// Responsive snapshot
// ---------------------------------------------------------------------------

const responsiveGaugeProps = (
  column: "low" | "normal" | "large"
): F0DataChartProps => ({
  type: "gauge",
  value: column === "low" ? 28 : column === "normal" ? 72 : 91,
  name: "Engagement",
  valueFormatter: (v) => `${v}%`,
})

export const ResponsiveSnapshotMatrix: Story = {
  decorators: [(Story) => <Story />],
  render: () => <ResponsiveSnapshot getProps={responsiveGaugeProps} />,
}

/**
 * No data — undefined `value` triggers the empty state. (A gauge with
 * `value: 0` is NOT empty — 0% is a legitimate state.)
 * See `F0DataChart/Empty states`.
 */
export const Empty: Story = {
  // Undefined value triggers the empty state — `value: 0` would NOT be empty
  // since 0% is a legitimate gauge state.
  args: { type: "gauge" },
}
