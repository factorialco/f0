import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"
const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Pie",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const SimplePie: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      series: [
        {
          name: "Gender Distribution",
          type: "pie",
          radius: "60%",
          data: [
            { value: 234, name: "Male" },
            { value: 189, name: "Female" },
          ],
        },
      ],
    },
  },
}

export const DonutChart: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      series: [
        {
          name: "Employment Type",
          type: "pie",
          radius: ["60%", "40%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 378, name: "Full-time" },
            { value: 89, name: "Part-time" },
            { value: 45, name: "Contractor" },
          ],
        },
      ],
    },
  },
}

export const PieWithLabels: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      series: [
        {
          name: "Work Location",
          type: "pie",
          radius: "60%",
          center: ["50%", "50%"],
          data: [
            { value: 312, name: "Remote" },
            { value: 187, name: "Office" },
            { value: 92, name: "Hybrid" },
          ],
          label: {
            show: true,
            formatter: "{b}: {d}%",
          },
        },
      ],
    },
  },
}
