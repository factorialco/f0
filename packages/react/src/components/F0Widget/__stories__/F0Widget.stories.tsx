import { DropdownItem } from "@/experimental/Navigation/Dropdown/internal"
import { Delete, Pencil, Upload } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { F0Widget } from "../"

const meta: Meta<typeof F0Widget> = {
  component: F0Widget,
  title: "Widget",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="h-60 w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof F0Widget>

const Slot = () => {
  return (
    <div className="flex h-full items-center justify-center rounded-sm border border-dashed border-f1-border-info-bold bg-f1-background-info p-4 text-f1-foreground-info">
      <p>Widget content goes here</p>
    </div>
  )
}

const sampleDropdownItems: DropdownItem[] = [
  { label: "Edit", icon: Pencil, onClick: fn() },
  { label: "Export", icon: Upload, onClick: fn() },
  { type: "separator" },
  { label: "Delete", icon: Delete, critical: true, onClick: fn() },
]

export const Default: Story = {
  args: {
    title: "Regular, non-interactive widget",
    children: <Slot />,
  },
}

export const Interactive: Story = {
  args: {
    title: "Interactive Widget",
    draggable: true,
    children: <Slot />,
  },
  render: (args) => {
    const [isDragging, setIsDragging] = useState(false)
    const handleDragStart = () => {
      setIsDragging(true)
    }
    const handleDragEnd = () => {
      setIsDragging(false)
    }
    return (
      <F0Widget
        isDragging={isDragging}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        {...args}
      />
    )
  },
}

export const WithAIButton: Story = {
  args: {
    title: "Widget with AI button",
    AIButton: fn(),
    children: <Slot />,
  },
}

export const WithDropdown: Story = {
  args: {
    title: "Widget with Dropdown",
    dropdown: sampleDropdownItems,
    children: <Slot />,
  },
}

export const Full: Story = {
  args: {
    title: "Fully Configured Widget with a long title",
    draggable: true,
    AIButton: fn(),
    dropdown: sampleDropdownItems,
    children: <Slot />,
  },
}

export const Selected: Story = {
  args: {
    title: "Selected Widget",
    selected: true,
    children: <Slot />,
  },
}

export const Skeleton: Story = {
  args: {
    title: "Skeleton Widget",
    children: <Slot />,
  },
  render: () => {
    return <F0Widget.Skeleton />
  },
}
