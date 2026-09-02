import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import { ICON_ONLY_TOOLTIP_DELAY_MS } from "@/experimental/Overlays/Tooltip"
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

export const IconOnly: Story = {
  parameters: withSnapshot({}),
  args: {
    items: [
      { value: "list", label: "List", icon: List },
      { value: "table", label: "Table", icon: Table },
      { value: "calendar", label: "Calendar", icon: Calendar },
    ],
    value: "list",
    hideLabels: true,
    ariaLabel: "View",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const segment = canvas.getByRole("radio", { name: "Table" })

    await step("the label is still the segment's accessible name", async () => {
      await expect(segment).toBeInTheDocument()
    })

    await step("resting the pointer on a segment names it", async () => {
      await userEvent.hover(segment)
      // The bubble is portalled, so it lands outside the story canvas.
      const body = within(canvasElement.closest("body")!)
      await waitFor(
        async () =>
          await expect(body.getByRole("tooltip")).toHaveTextContent("Table"),
        { timeout: ICON_ONLY_TOOLTIP_DELAY_MS * 2 }
      )
    })
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
