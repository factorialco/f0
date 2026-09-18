import type { Meta, StoryObj } from "@storybook/react"

import { TasksInsight } from "./index"

const meta: Meta = {
  component: TasksInsight,
  parameters: {
    tags: ["autodocs"],
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[388px]">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Tasks",
    data: {
      inProgressTasks: ["Migrate to new CRM"],
      todoTasks: [
        "Connect to Slack",
        "Write changelog",
        "Product review",
        "Final conclusions",
      ],
      overdueLabel: "Overdue",
      overdueTasksCount: 1,
      dueLabel: "Due",
      dueTasksCount: 3,
      noDueLabel: "No due",
      noDueTasksCount: 8,
      buttonLabel: "+16 tasks",
      linkUrl: "/tasks",
      linkTitle: "Tasks",
      handleNavigate: () => {},
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoMoreTasks: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      buttonLabel: undefined,
    },
  },
}

export const EmptyState: Story = {
  args: {
    data: {
      ...meta?.args?.data,
      inProgressTasks: [],
      todoTasks: [],
      buttonLabel: undefined,
      overdueTasks: 0,
      dueTasksCount: 0,
      noDueTasksCount: 0,
    },
  },
}
