import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0BarChart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0BarChart,
  title: "Charts/F0BarChart",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0BarChart>

export default meta
type Story = StoryObj<typeof F0BarChart>

export const Default: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [
      {
        name: "Revenue",
        data: [
          9_200_000, 10_800_000, 8_100_000, 5_400_000, 3_200_000, 2_400_000,
        ],
      },
    ],
    showLegend: true,
    valueFormatter: (v) => `${(v / 1_000_000).toFixed(1)}M`,
  },
}

export const MultipleSeries: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["New York", "London", "Barcelona", "Berlin", "Remote"],
    series: [
      {
        name: "Headcount",
        data: [145, 89, 67, 90, 96],
      },
      {
        name: "Open positions",
        data: [12, 8, 40, 30, 22],
      },
      {
        name: "Turnovers",
        data: [8, 19, 4, 3, 2],
      },
    ],
  },
}

export const WithTargets: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [
      {
        name: "Revenue",
        data: [
          { value: 9_200_000, target: 12_000_000 },
          { value: 10_800_000, target: 12_000_000 },
          { value: 8_100_000, target: 12_000_000 },
          { value: 5_400_000, target: 12_000_000 },
          { value: 3_200_000, target: 12_000_000 },
          { value: 2_400_000, target: 12_000_000 },
        ],
      },
    ],
    showLegend: false,
    valueFormatter: (v) => `${(v / 1_000_000).toFixed(1)}M`,
  },
}

export const MultipleSeriesWithTargets: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["Q1", "Q2", "Q3", "Q4"],
    series: [
      {
        name: "Sales",
        data: [
          { value: 4000, target: 6000 },
          { value: 5200, target: 6000 },
          { value: 3800, target: 6000 },
          { value: 5800, target: 6000 },
        ],
      },
      {
        name: "Marketing",
        data: [
          { value: 2000, target: 3500 },
          { value: 3100, target: 3500 },
          { value: 2800, target: 3500 },
          { value: 3400, target: 3500 },
        ],
      },
    ],
    valueFormatter: (v) => `${v} €`,
  },
}

export const Horizontal: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    orientation: "horizontal",
    categories: [
      "Sarah Johnson",
      "Michael Chen",
      "Emma Thompson",
      "James Wilson",
      "Olivia Martinez",
      "David Brown",
    ],
    series: [
      {
        name: "Successful hires",
        data: [28, 25, 23, 21, 19, 18],
      },
    ],
    showLegend: false,
    showLabels: true,
    valueFormatter: (v) => `${v} hires`,
  },
}

export const HorizontalWithTargets: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    orientation: "horizontal",
    categories: [
      "Sarah Johnson",
      "Michael Chen",
      "Emma Thompson",
      "James Wilson",
      "Olivia Martinez",
    ],
    series: [
      {
        name: "Completed",
        data: [
          { value: 28, target: 35 },
          { value: 25, target: 35 },
          { value: 23, target: 35 },
          { value: 21, target: 35 },
          { value: 19, target: 35 },
        ],
      },
    ],
    showLegend: false,
    valueFormatter: (v) => `${v} tasks`,
  },
}

export const CustomFormatters: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["January", "February", "March", "April", "May", "June"],
    series: [
      {
        name: "Profit",
        data: [4000, 3200, 5000, 7000, 4500, 6200],
      },
      {
        name: "Expenses",
        data: [2800, 3100, 2500, 3800, 2900, 3500],
      },
    ],
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

export const NoGrid: Story = {
  render: (args) => <F0BarChart {...args} />,
  args: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Tasks completed",
        data: [12, 19, 8, 15, 22],
      },
    ],
    showGrid: false,
    showLabels: true,
    showLegend: false,
  },
}
