import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"

import { AlertCircle, Circle } from "../../../../icons/app"
import { IndicatorsList } from "./index"

const taskCategories = [
  {
    label: "Overdue",
    content: "1",
    icon: AlertCircle,
    color: "text-f1-icon-critical",
  },
  {
    label: "Due",
    content: "3",
    icon: Circle,
    color: "text-f1-icon",
  },
]

const meta = {
  title: "Widgets/Content/IndicatorsList",
  component: IndicatorsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    items: taskCategories,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<ComponentProps<typeof IndicatorsList>>

export default meta
type Story = StoryObj<typeof meta>

export const TwoElements: Story = {}

export const ThreeElements: Story = {
  args: {
    items: taskCategories.concat({
      label: "No due",
      content: "5",
      icon: Circle,
      color: "text-f1-icon-secondary",
    }),
  },
}

export const TwoLineLabel: Story = {
  args: {
    items: [
      ...taskCategories,
      {
        label: "The most urgent tasks",
        content: "55",
        icon: Circle,
        color: "text-f1-icon-secondary",
      },
    ],
  },
}
