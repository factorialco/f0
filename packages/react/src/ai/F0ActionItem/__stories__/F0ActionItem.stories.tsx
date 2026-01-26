import type { Meta, StoryObj } from "@storybook/react-vite"

import React, { useEffect } from "react"

import { F0ActionItem } from "../F0ActionItem"

const meta = {
  title: "AI/F0ActionItem",
  component: F0ActionItem,
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
} satisfies Meta<typeof F0ActionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <F0ActionItem {...args} />
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
      <F0ActionItem
        {...args}
        status={statuses[currentStatusIndex]}
        title="Cycling through all states"
      />
    )
  },
}
