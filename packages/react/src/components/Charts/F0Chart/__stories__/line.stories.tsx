import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"
const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Line",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const LineChart: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Time to hire"],
      },
      xAxis: {
        type: "category",
        data: ["January", "February", "March", "April", "May", "June"],
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return String(value).slice(0, 3)
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return `${value} days`
          },
        },
      },
      series: [
        {
          name: "Time to hire",
          type: "line",
          data: [24, 17, 25, 27, 10, 26],
          smooth: false,
        },
      ],
    },
  },
}

export const MultipleLines: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Junior", "Mid", "Senior"],
      },
      xAxis: {
        type: "category",
        data: ["January", "February", "March", "April", "May", "June"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number, _index: number) => {
            return `${value} days`
          },
        },
      },
      series: [
        {
          name: "Junior",
          type: "line",
          data: [18, 15, 28, 16, 14, 20],
          smooth: false,
        },
        {
          name: "Mid",
          type: "line",
          data: [28, 25, 30, 26, 24, 24],
          smooth: false,
        },
        {
          name: "Senior",
          type: "line",
          data: [45, 42, 55, 40, 38, 44],
          smooth: false,
        },
      ],
    },
  },
}
