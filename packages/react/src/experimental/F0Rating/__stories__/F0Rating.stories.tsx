import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Rating } from "../index"

const meta = {
  title: "F0Rating",
  component: F0Rating,
  tags: ["experimental"],
  args: {
    max: 5,
    value: 2,
    size: "md",
    ariaLabel: "Rating",
  },
} satisfies Meta<typeof F0Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
}

export const ReadOnly: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { readOnly: true, value: 4, ariaLabel: "Rating: 4 of 5" },
}

export const Disabled: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { disabled: true, value: 3 },
}

export const Empty: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  args: { value: null },
}

export const Sizes: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <F0Rating {...args} size="sm" />
      <F0Rating {...args} size="md" />
      <F0Rating {...args} size="lg" />
    </div>
  ),
}

const ControlledExample = () => {
  const [value, setValue] = useState<number | null>(2)
  return <F0Rating value={value} onChange={setValue} ariaLabel="Rating" />
}

export const Controlled: Story = {
  tags: ["!dev"],
  render: () => <ControlledExample />,
}
