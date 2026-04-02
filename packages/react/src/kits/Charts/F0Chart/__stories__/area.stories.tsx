import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"
const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Area",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const Default: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Total headcount"],
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
      },
      series: [
        {
          name: "Total headcount",
          type: "line",
          data: [170, 200, 256, 301, 345, 308],
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
      ],
    },
  },
}

export const DashedArea: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Actual headcount", "Projected headcount"],
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
      },
      series: [
        {
          name: "Actual headcount",
          type: "line",
          data: [170, 200, 256, 301, 345, 308],
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
        {
          name: "Projected headcount",
          type: "line",
          data: [220, 245, 270, 295, 320, 345],
          smooth: true,
          lineStyle: {
            type: "dashed",
          },
          areaStyle: { opacity: 0.2 },
        },
      ],
    },
  },
}

export const MultipleAreas: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      legend: {
        data: ["Design", "Product", "Engineering"],
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
      },
      series: [
        {
          name: "Design",
          type: "line",
          data: [12, 14, 16, 18, 20, 19],
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
        {
          name: "Product",
          type: "line",
          data: [28, 32, 36, 41, 58, 50],
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
        {
          name: "Engineering",
          type: "line",
          data: [65, 72, 78, 95, 102, 98],
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
      ],
    },
  },
}
