import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { TasksList, TasksListProps } from "./index"

const meta: Meta<TasksListProps> = {
  title: "Profile/TasksList",
  component: TasksList,
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
type Story = StoryObj<TasksListProps>

export const Default: Story = {
  args: {
    tasks: {
      inProgress: [{ id: 1, text: "Migrate to new CRM" }],
      todo: [
        { id: 2, text: "Connect to Slack" },
        { id: 3, text: "Write changelog" },
        { id: 4, text: "Product review" },
        { id: 5, text: "Final conclusions" },
      ],
    },
  },
}

export const WithLabels: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          id: 1,
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
        },
        { id: 2, text: "Connect to Slack" },
      ],
      todo: [
        { id: 3, text: "Write changelog", badge: { text: "Due Oct 2" } },
        { id: 4, text: "Product review", badge: { text: "Due Oct 21" } },
        { id: 5, text: "Final conclusions", badge: { text: "Due Nov 2" } },
      ],
    },
  },
}

export const WithCounters: Story = {
  args: {
    onClickTask: fn(),
    hideIcons: true,
    tasks: {
      inProgress: [
        {
          id: 1,
          text: "Migrate to new CRM",
          badge: { text: "Due Sep 10", isPastDue: true },
          counter: 2,
        },
        { id: 2, text: "Connect to Slack" },
      ],
      todo: [
        {
          id: 1,
          text: "Write changelog",
          badge: { text: "Due Oct 2" },
          counter: 4,
        },
        {
          id: 2,
          text: "Product review",
          badge: { text: "Due Oct 21" },
          counter: 1,
        },
        {
          id: 3,
          text: "Final conclusions",
          badge: { text: "Due Nov 2" },
          counter: 7,
        },
      ],
    },
  },
}

export const WithLongTaskTitles: Story = {
  args: {
    tasks: {
      inProgress: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem accumsan ipsum malesuada maximus id vitae libero. Maecenas iaculis felis id massa elementum tristique.",
        },
      ],
      todo: [
        {
          id: 2,
          text: "Nam et dapibus lorem. Sed tristique, metus iaculis viverra accumsan, urna purus auctor purus, quis tempor risus augue nec dui.",
        },
        {
          id: 3,
          text: "Quisque tellus orci, tincidunt auctor imperdiet ac, molestie non nisl. Aliquam scelerisque lacus turpis, et tempor erat volutpat et.",
        },
      ],
    },
  },
}

export const EmptyState: Story = {
  args: {
    emptyMessage: "No tasks assigned",
    tasks: {
      inProgress: [],
      todo: [],
    },
  },
}
