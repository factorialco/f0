import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { CanvasCard } from "../CanvasCard"

const meta = {
  title: "AI/F0AiChat/Canvas/CanvasCard",
  component: CanvasCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CanvasCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    module: "analytics",
    title: "Headcount Overview",
    description: "Employee distribution by department",
    onOpen: fn(),
  },
}

export const LongTitle: Story = {
  args: {
    module: "analytics",
    title:
      "Quarterly Performance Review Dashboard with Detailed Metrics and Historical Trends",
    description:
      "A comprehensive view of team performance across all departments for Q1 2026",
    onOpen: fn(),
  },
}

export const DifferentModule: Story = {
  args: {
    module: "my_surveys",
    title: "Employee Satisfaction Survey",
    description: "Results from the latest pulse survey",
    onOpen: fn(),
  },
}
