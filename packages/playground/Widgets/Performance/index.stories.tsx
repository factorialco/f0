import type { Meta, StoryObj } from "@storybook/react"

import { PerformanceInsight } from "./index"

const meta: Meta = {
  component: PerformanceInsight,
  parameters: {
    tags: ["autodocs"],
  },
  args: {
    title: "Performance",
    performanceValue: "3,5",
    comment: "Meets expectations",
    url: "/performance",
    data: [
      { label: "Q1 24", values: { performance: 1.2 } },
      { label: "Q2 24", values: { performance: 1.5 } },
      { label: "Q3 24", values: { performance: 2.7 } },
      { label: "Q4 24", values: { performance: 3.1 } },
      { label: "Q1 25", values: { performance: 3.9 } },
      { label: "Q2 25", values: { performance: 4.3 } },
      { label: "Q3 25", values: { performance: 4.5 } },
    ],
    name: "Hugo",
    link: "/performance",
    hasAccess: true,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Empty: Story = {
  args: {
    hasAccess: false,
  },
}
