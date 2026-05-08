import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { Calendar, List, Table } from "@/icons/app"

import { F0SegmentedControl } from "../F0SegmentedControl"

const meta = {
  title: "Components/F0SegmentedControl",
  component: F0SegmentedControl,
  tags: ["autodocs"],
  args: {
    items: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" },
    ],
    value: "day",
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof F0SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcons: Story = {
  args: {
    items: [
      { value: "list", label: "List", icon: List },
      { value: "table", label: "Table", icon: Table },
      { value: "calendar", label: "Calendar", icon: Calendar },
    ],
    value: "list",
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithDisabledItem: Story = {
  args: {
    items: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week", disabled: true },
      { value: "month", label: "Month" },
    ],
  },
}

export const Controlled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("week")
    return <F0SegmentedControl {...args} value={value} onChange={setValue} />
  },
  args: {
    items: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" },
    ],
  },
}
