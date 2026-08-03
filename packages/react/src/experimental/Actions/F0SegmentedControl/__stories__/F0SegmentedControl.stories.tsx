import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { Calendar, List, Table } from "@/icons/app"

import { F0SegmentedControl } from "../F0SegmentedControl"

const meta = {
  title: "F0SegmentedControl",
  component: F0SegmentedControl,
  tags: ["autodocs", "experimental"],
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

export const Default: Story = {
  parameters: withSnapshot({}),
}

export const WithIcons: Story = {
  parameters: withSnapshot({}),
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
  parameters: withSnapshot({}),
  args: {
    fullWidth: true,
  },
}

export const Disabled: Story = {
  parameters: withSnapshot({}),
  args: {
    disabled: true,
  },
}

export const WithDisabledItem: Story = {
  parameters: withSnapshot({}),
  args: {
    items: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week", disabled: true },
      { value: "month", label: "Month" },
    ],
  },
}

const ControlledExample = () => {
  const [value, setValue] = useState("week")
  return (
    <F0SegmentedControl
      items={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
      ]}
      value={value}
      onChange={setValue}
    />
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}
