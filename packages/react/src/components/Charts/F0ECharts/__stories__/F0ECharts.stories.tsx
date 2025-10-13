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
        text: "F0ECharts",
      },
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
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
