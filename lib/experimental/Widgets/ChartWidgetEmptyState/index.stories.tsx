import type { Meta, StoryObj } from "@storybook/react"

import { Add } from "@/icons/app"
import { ChartWidgetEmptyState } from "."

const meta: Meta<typeof ChartWidgetEmptyState> = {
  title: "Widgets/EmptyState",
  component: ChartWidgetEmptyState,
  tags: ["autodocs", "experimental"],
  args: {
    title: "Performance",
    content: "See how Hugo's performance evolved over time",
    buttonLabel: "Try it for free",
    buttonAction: () => {},
    type: "bar-chart",
  },
  decorators: [
    (Story) => (
      <div className="w-[386px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const PerformanceEmptyState: Story = {}

export const SalaryEmptyState: Story = {
  args: {
    title: "Salary",
    content: "See how Hugo’s salary evolved over time",
    buttonLabel: "Add info",
    buttonIcon: Add,
    buttonAction: () => {},
    type: "line-chart",
  },
}
