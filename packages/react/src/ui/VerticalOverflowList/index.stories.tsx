import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { VerticalOverflowList } from "./index"

const meta = {
  title: "Components/VerticalOverflowList",
  component: VerticalOverflowList,
  tags: ["autodocs", "internal"],
  argTypes: {
    items: {
      description: "The items to display in the list.",
    },
    renderListItem: {
      description: "What to render as a list item (items outside of the overflow list).",
    },
    className: {
      description: "Additional styling for the container.",
    },
    gap: {
      description: "The gap between items in pixels.",
    },
  },
  decorators: [
    (Story) => {
      const [containerSize, setContainerSize] = useState(220)
      return (
        <>
          <div className="w-[320px] gap-4">
            <div
              className="rounded border border-solid border-f1-border-secondary p-3"
              style={{ height: `${containerSize}px` }}
            >
              <Story />
            </div>
          </div>
          <div className="flex w-32 flex-col gap-1 pt-4">
            <label
              htmlFor="container-size"
              className="text-sm font-medium text-f1-foreground-secondary"
            >
              Test size
            </label>
            <input
              id="container-size"
              type="range"
              min="180"
              max="1000"
              value={containerSize}
              onChange={(e) => setContainerSize(Number(e.target.value))}
            />
          </div>
        </>
      )
    },
  ],
} satisfies Meta<typeof VerticalOverflowList>

export default meta
type Story = StoryObj<typeof meta>

// Define the task type
interface Task {
  id: number
  name: string
  status: string
  dueDate: string
}

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Complete project proposal",
        status: "Completed",
        dueDate: "2025-12-01",
      },
      {
        id: 2,
        name: "Review design mockups",
        status: "In progress",
        dueDate: "2025-12-05",
      },
      {
        id: 3,
        name: "Design proposal",
        status: "Pending",
        dueDate: "2025-12-10",
      },
      {
        id: 4,
        name: "Fix reported bugs",
        status: "Failed",
        dueDate: "2025-12-03",
      },
      {
        id: 5,
        name: "Prepare presentation",
        status: "Pending",
        dueDate: "2025-12-15",
      },
      {
        id: 6,
        name: "Client meeting",
        status: "Pending",
        dueDate: "2025-12-07",
      },
      {
        id: 7,
        name: "Team retrospective",
        status: "Pending",
        dueDate: "2025-12-20",
      },
    ],
    minSize: 20,
    renderListItem: (item) => {
      const task = item as Task
      return (
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-2 py-1">
          <span className="truncate font-medium">{task.name}</span>
        </div>
      )
    },
  },
  render: (args) => {
    return <VerticalOverflowList {...args} />
  },
}
