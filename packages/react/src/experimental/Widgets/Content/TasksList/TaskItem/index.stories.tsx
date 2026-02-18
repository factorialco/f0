import type { Meta, StoryObj } from "@storybook/react-vite"

import { TaskItem, TaskItemProps } from "./index"

const meta: Meta<TaskItemProps> = {
  title: "Profile/TaskItem",
  component: TaskItem,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<TaskItemProps>

export const InProgressPastDue: Story = {
  args: {
    task: {
      id: 1,
      text: "Connect to Slack",
      counter: 2,
      badge: {
        text: "Due Sep 10",
        isPastDue: true,
      },
    },
    status: "in-progress",
  },
}

export const InProgressNoPastDue: Story = {
  args: {
    task: {
      id: 1,
      text: "Connect to Slack",
      counter: 2,
      badge: {
        text: "Due Oct 2",
      },
    },
    status: "in-progress",
  },
}

export const TodoPastDue: Story = {
  args: {
    task: {
      id: 1,
      text: "Connect to Slack",
      counter: 2,
      badge: {
        text: "Due Sep 10",
        isPastDue: true,
      },
    },
    status: "todo",
  },
}

export const PressableTodoPastDue: Story = {
  args: {
    task: {
      id: 1,
      text: "Connect to Slack",
      counter: 2,
      badge: {
        text: "Due Sep 10",
        isPastDue: true,
      },
    },
    onClick: () => {},
    status: "todo",
  },
}
