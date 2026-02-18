import type { Meta, StoryObj } from "@storybook/react-vite"

import { PalmTree as PalmTreeIcon } from "@/icons/app"

import { ActivityItem } from "./index"

const meta: Meta<typeof ActivityItem> = {
  decorators: [
    (Story) => (
      <div className="w-[440px]">
        <Story />
      </div>
    ),
  ],
  component: ActivityItem,
  title: "Information/Activity/ActivityItem",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof ActivityItem>

export const Default: Story = {
  args: {
    title:
      "Your time off request for Summer Vacation (August 15-30, 2025) has been approved by the HR department",
    description:
      "René Galindo from Human Resources has reviewed and approved your time off request for 15 days of paid vacation. Your manager has been notified and your calendar has been updated accordingly. Please remember to set up your out-of-office message before leaving.",
    category: "Time off",
    icon: PalmTreeIcon,
    isUnread: true,
    createdAt: new Date("2025-05-06"),
  },
}

export const Skeleton: Story = {
  args: {},
  render: () => <ActivityItem.Skeleton />,
}
