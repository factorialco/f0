import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"
const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Bar",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const SingleBar: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    showLegend: false,
    options: {
      xAxis: {
        type: "category",
        data: [
          "Marketing",
          "Sales",
          "Engineering",
          "Product",
          "Design",
          "Finance",
          "Legal",
        ],
      },
      yAxis: {
        type: "value",
        name: "Headcount",
      },
      series: [
        {
          name: "Headcount",
          type: "bar",
          data: [8, 100, 56, 32, 16, 12, 5],
        },
      ],
    },
  },
}

export const MultipleBars: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Headcount", "Open positions", "Turnovers"],
      },
      xAxis: {
        type: "category",
        data: ["New York", "London", "Barcelona", "Berlin", "Remote"],
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return String(value)
          },
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Headcount",
          type: "bar",
          data: [145, 89, 67, 90, 96],
        },
        {
          name: "Open positions",
          type: "bar",
          data: [12, 8, 40, 30, 22],
        },
        {
          name: "Turnovers",
          type: "bar",
          data: [8, 19, 4, 3, 2],
        },
      ],
    },
  },
}

export const StackedBars: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Profit", "Losses"],
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return `${value} €`
          },
        },
      },
      series: [
        {
          name: "Profit",
          type: "bar",
          stack: "total",
          data: [4000, 3200, 5000, 7000, 4500],
        },
        {
          name: "Losses",
          type: "bar",
          stack: "total",
          data: [-1200, -800, -3000, -1000, -1500],
        },
      ],
    },
  },
}
