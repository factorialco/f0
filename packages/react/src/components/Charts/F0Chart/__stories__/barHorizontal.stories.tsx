import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"
const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Bar Horizontal",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const Default: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    showLegend: false,
    options: {
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return `${value} hires`
          },
        },
      },
      yAxis: {
        type: "category",
        data: [
          "Thomas Anderson",
          "Isabella Garcia",
          "Alexander Lee",
          "Sophie Davis",
          "David Brown",
          "Olivia Martinez",
          "James Wilson",
          "Emma Thompson",
          "Michael Chen",
          "Sarah Johnson",
        ],
      },
      series: [
        {
          name: "Successful hires",
          type: "bar",
          data: [12, 14, 15, 16, 18, 19, 21, 23, 25, 28],
          label: {
            show: true,
            position: "right",
          },
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
        data: ["Junior hires", "Senior hires"],
      },
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return `${value} hires`
          },
        },
      },
      yAxis: {
        type: "category",
        data: [
          "Thomas Anderson",
          "Isabella Garcia",
          "Alexander Lee",
          "Sophie Davis",
          "David Brown",
          "Olivia Martinez",
          "James Wilson",
          "Emma Thompson",
          "Michael Chen",
          "Sarah Johnson",
        ],
      },
      series: [
        {
          name: "Junior hires",
          type: "bar",
          data: [7, 8, 8, 9, 10, 11, 12, 14, 15, 18],
        },
        {
          name: "Senior hires",
          type: "bar",
          data: [5, 6, 7, 7, 8, 8, 9, 9, 10, 10],
        },
      ],
    },
  },
}
