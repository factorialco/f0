import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataChart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "F0DataChart/Gauge",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof meta>

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
