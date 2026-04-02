import type { Meta, StoryObj } from "@storybook/react-vite"

import { Weekdays } from "./index"

const meta: Meta = {
  title: "Kits/Widgets/Content/Weekdays",
  component: Weekdays,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    activatedDays: [0, 3, 1, 4],
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomDays: Story = {
  args: {
    daysOfTheWeek: ["M", "T", "W", "T", "F", "S", "S"],
    activatedDays: [1, 5],
  },
}
