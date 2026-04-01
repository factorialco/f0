import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Chart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0Chart,
  title: "Charts/F0Chart/Funnel",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0Chart>

export default meta
type Story = StoryObj<typeof F0Chart>

export const Funnel: Story = {
  render: (args) => <F0Chart {...args} />,
  args: {
    options: {
      title: {
        text: "Recruitment Pipeline",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "funnel",
          data: [
            { value: 1200, name: "Applications" },
            { value: 850, name: "Phone Screen" },
            { value: 420, name: "First Interview" },
            { value: 180, name: "Technical Test" },
            { value: 95, name: "Final Interview" },
            { value: 62, name: "Offer" },
            { value: 48, name: "Hired" },
          ],
        },
      ],
    },
  },
}
