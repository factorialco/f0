import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataChart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "Kits/F0DataChart/Line",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof F0DataChart>

export const Linear: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
    ],
    lineType: "linear",
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const Smooth: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Sessions",
        data: [3200, 4100, 3800, 5600, 5200, 6700],
      },
    ],
    lineType: "smooth",
    showArea: true,
  },
}

export const Step: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Headcount",
        data: [120, 120, 125, 125, 130, 138],
      },
    ],
    lineType: "step",
    showArea: true,
  },
}

export const NoFill: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Active users",
        data: [1800, 2400, 2100, 3200, 2900, 3600],
      },
    ],
    showArea: false,
  },
}

export const MultipleSeries: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Coffee",
        data: [120, 132, 101, 134, 90, 230],
      },
      {
        name: "Tea",
        data: [220, 182, 191, 234, 290, 330],
      },
      {
        name: "Cola",
        data: [150, 232, 201, 154, 190, 330],
      },
    ],
    showArea: false,
  },
}

export const MultipleSeriesWithDashed: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Actual",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
      {
        name: "Target",
        data: [5000, 5500, 6000, 6500, 7000, 7500],
        dashed: true,
      },
    ],
    showArea: false,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const CustomFormatters: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["January", "February", "March", "April", "May", "June"],
    series: [
      {
        name: "Profit",
        data: [
          4_000_000, 3_200_000, 5_000_000, 7_000_000, 4_500_000, 6_200_000,
        ],
      },
      {
        name: "Expenses",
        data: [
          2_800_000, 3_100_000, 2_500_000, 3_800_000, 2_900_000, 3_500_000,
        ],
      },
    ],
    showArea: false,
    valueFormatter: (v) => `${v / 1_000_000}M €`,
    categoryFormatter: (v) => v.slice(0, 3),
  },
}

export const WithDots: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    series: [
      {
        name: "Revenue",
        data: [4200, 5800, 5100, 7400, 6800, 8900],
      },
    ],
    showDots: true,
    showArea: true,
    valueFormatter: (v) => `${(v / 1000).toFixed(1)}k`,
  },
}

export const NoGrid: Story = {
  render: (args) => <F0DataChart {...args} />,
  args: {
    type: "line",
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [
      {
        name: "Tasks completed",
        data: [12, 19, 8, 15, 22],
      },
    ],
    showGrid: false,
    showLegend: false,
    showArea: true,
  },
}
