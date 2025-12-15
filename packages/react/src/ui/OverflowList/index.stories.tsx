import type { Meta, StoryObj } from "@storybook/react-vite"
import { motion } from "motion/react"
import { useState } from "react"
import { F0Icon } from "../../components/F0Icon"
import { Counter } from "../../experimental/Information/Counter"
import { Preset } from "../../experimental/OnePreset"
import { ChevronDown } from "../../icons/app"
import { OverflowList } from "./index"

const meta = {
  title: "Components/OverflowList",
  component: OverflowList,
  tags: ["autodocs", "internal"],
  argTypes: {
    items: {
      description: "The items to display in the list.",
    },
    renderListItem: {
      description: "What to render as a list item (items outside of the overflow list).",
    },
    renderDropdownItem: {
      description: "What to render as a dropdown item (items inside of the overflow list).",
    },
    renderOverflowIndicator: {
      description:
        "What to render as the overflow indicator. If not provided, the default overflow indicator will be displayed.",
    },
    className: {
      description: "Additional styling for the container.",
    },
    gap: {
      description: "The gap between items in pixels. Can be negative.",
    },
    max: {
      description:
        "The maximum number of items to display. If not provided, the maximum number of items will be auto-calculated. ",
    },
  },
  decorators: [
    (Story) => {
      const [containerWidth, setContainerWidth] = useState(640)
      return (
        <>
          <div className="w-full gap-4">
            <div
              className="rounded border border-solid border-f1-border-secondary p-3"
              style={{ width: `${containerWidth}px` }}
            >
              <Story />
            </div>
          </div>
          <div className="flex w-32 flex-col gap-1 pt-4">
            <label
              htmlFor="container-width"
              className="text-sm font-medium text-f1-foreground-secondary"
            >
              Test width
            </label>
            <input
              id="container-width"
              type="range"
              min="180"
              max="1000"
              value={containerWidth}
              onChange={(e) => setContainerWidth(Number(e.target.value))}
            />
          </div>
        </>
      )
    },
  ],
} satisfies Meta<typeof OverflowList>

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
    renderListItem: (item) => {
      const task = item as Task
      return (
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-2 py-1">
          <span className="truncate font-medium">{task.name}</span>
        </div>
      )
    },
    renderDropdownItem: (item) => {
      const task = item as Task
      return (
        <div className="flex flex-col p-2">
          <span className="font-medium">{task.name}</span>
          <div className="flex justify-between text-sm font-medium text-f1-foreground-secondary">
            <span>{task.status}</span>
            <span>Due: {task.dueDate}</span>
          </div>
        </div>
      )
    },
    gap: 8,
  },
  render: (args) => {
    return (
      <div className="w-full">
        <OverflowList {...args} />
      </div>
    )
  },
}

interface PresetItem {
  id: number
  name: string
  number?: number
}

export const Presets: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "Draft",
        number: 10,
      },
      {
        id: 2,
        name: "Pending",
        number: 4,
      },
      {
        id: 3,
        name: "Ordered",
        number: 8,
      },
      {
        id: 4,
        name: "Partial",
        number: 12,
      },
      {
        id: 5,
        name: "Recieved",
        number: 21,
      },
      {
        id: 6,
        name: "Closed",
        number: 15,
      },
      {
        id: 7,
        name: "Deleted",
        number: 3,
      },
    ],
    renderListItem: (item) => {
      const preset = item as PresetItem
      return <Preset label={preset.name} number={preset.number} />
    },
    renderDropdownItem: (item) => {
      const preset = item as PresetItem
      return (
        <div className="flex justify-between rounded p-2 transition-colors hover:cursor-pointer hover:bg-f1-background-hover">
          <span className="font-medium">{preset.name}</span>
          {preset.number && <Counter value={preset.number} type="default" />}
        </div>
      )
    },
    gap: 8,
  },
  render: (args) => {
    return (
      <div className="w-full">
        <OverflowList {...args} />
      </div>
    )
  },
}

export const WithCustomOverflowIndicator: Story = {
  args: {
    ...Presets.args,
    renderOverflowIndicator: (count, isOpen) => (
      <div className="flex items-center gap-1 rounded-sm bg-f1-background-selected px-2 py-1.5 font-medium text-f1-foreground-selected">
        <span>{count}</span>
        <motion.div
          className="flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-selected text-f1-icon-selected"
          animate={{ rotate: isOpen ? 360 : 90 }}
        >
          <F0Icon icon={ChevronDown} size="xs" />
        </motion.div>
      </div>
    ),
  },
}
