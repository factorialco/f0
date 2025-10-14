import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0ECharts } from "../index"

const meta = {
  component: F0ECharts,
  title: "Charts/F0ECharts",
  tags: ["autodocs", "experimental", "internal"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A wrapper around ECharts for React that provides a simple line chart visualization. This is an experimental component.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-80 w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0ECharts>

export default meta
type Story = StoryObj<typeof F0ECharts>

export const Default: Story = {
  render: (args) => <F0ECharts {...args} />,
  args: {
    options: {
      title: {
        text: "Monthly Performance Review vs. Average",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Employee", "Average"],
      },
      xAxis: {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        type: "value",
        name: "Performance Score",
      },
      series: [
        {
          name: "Employee",
          type: "bar",
          data: [78, 82, 85, 80, 88, 90, 92, 89, 87, 91, 93, 95],
        },
        {
          name: "Average",
          type: "line",
          data: [80, 80, 81, 82, 83, 85, 86, 87, 86, 88, 89, 90],
          smooth: true,
          lineStyle: {
            type: "dashed",
          },
        },
      ],
    },
  },
}

export const WithCustomSize: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div className="h-64 w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
}

export const CompactSize: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div className="h-40 w-64">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "The chart works well in smaller containers too.",
      },
    },
  },
}
