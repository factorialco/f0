import type { Meta, StoryObj } from "@storybook/react-vite"

import { Building, Coffee, Comment, Pin, Replace } from "../../../../icons/app"
import { CalendarEvent } from "./index"

const meta: Meta = {
  title: "Kits/Widgets/Content/CalendarEvent",
  component: CalendarEvent,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Overtime",
    title: "Shift name",
    subtitle: "Subtitle",
    description: "14:00 - 20:00",
    color: "orange",
    isPending: false,
    leftTags: [
      {
        label: "Break",
        description: "10:00 AM",
        icon: Coffee,
      },
      {
        label: "Extra info",
        description: "Some extra info about the shift",
        icon: Comment,
      },
      {
        label: "Office",
        description: "Pere IV Office",
        icon: Building,
      },
      {
        label: "Workplace",
        description: "Barcelona",
        icon: Pin,
      },
    ],
    rightTags: [
      {
        description: "This shift can be swapped",
        icon: Replace,
      },
    ],
    fromDate: new Date(2024, 6, 15),
    toDate: new Date(2024, 6, 22),
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const NoBackground: Story = {
  args: {
    noBackground: true,
  },
}

export const NoLeftTags: Story = {
  args: {
    leftTags: undefined,
  },
}

export const NoRightTags: Story = {
  args: {
    rightTags: undefined,
  },
}
