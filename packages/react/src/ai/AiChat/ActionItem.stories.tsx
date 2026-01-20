import type { Meta, StoryObj } from "@storybook/react-vite"
import React, { useEffect } from "react"
import { ActionItem } from "./ActionItem"

const meta = {
  title: "Experimental/AiChat/ActionItem",
  component: ActionItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Processing request",
    status: "executing",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title text displayed next to the status icon",
    },
    status: {
      control: "select",
      options: ["inProgress", "executing", "completed"],
      description: "Current status of the action item",
    },
  },
} satisfies Meta<typeof ActionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <ActionItem {...args} />
  },
}

export const InfiniteStatusCycling: Story = {
  render: (args) => {
    const statuses = ["inProgress", "executing", "completed"] as const
    const [currentStatusIndex, setCurrentStatusIndex] = React.useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentStatusIndex((prevIndex) => (prevIndex + 1) % statuses.length)
      }, 1000)

      return () => clearInterval(interval)
    }, [statuses.length])

    return (
      <ActionItem
        {...args}
        status={statuses[currentStatusIndex]}
        title="Cycling through all states"
      />
    )
  },
}
