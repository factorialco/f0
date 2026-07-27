import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0StarRating } from "../index"

const meta = {
  title: "F0StarRating",
  component: F0StarRating,
  tags: ["experimental"],
  args: {
    max: 5,
    value: 3,
    size: "md",
    ariaLabel: "Rating",
  },
} satisfies Meta<typeof F0StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
}

export const Empty: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { value: null },
}

export const ReadOnlyAverage: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { readOnly: true, value: 4.3, ariaLabel: "Average rating: 4.3 of 5" },
}

export const AllowHalf: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { allowHalf: true, value: 3.5 },
}

export const Disabled: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { disabled: true, value: 2 },
}

export const Sizes: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <F0StarRating {...args} size="sm" />
      <F0StarRating {...args} size="md" />
      <F0StarRating {...args} size="lg" />
    </div>
  ),
}

const ControlledExample = () => {
  const [value, setValue] = useState<number | null>(3)
  return (
    <F0StarRating value={value} onChange={setValue} allowHalf ariaLabel="Rating" />
  )
}

export const Controlled: Story = {
  tags: ["!dev"],
  render: () => <ControlledExample />,
}
