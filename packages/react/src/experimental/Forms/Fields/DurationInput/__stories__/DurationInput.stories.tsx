import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { DurationInput } from "../index"

const meta = {
  title: "Input/Duration",
  component: DurationInput,
  tags: ["autodocs", "experimental"],
  args: {
    label: "Duration",
    disabled: false,
  },
} satisfies Meta<typeof DurationInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props) => {
    const [value, setValue] = useState<number | null>(125)

    return <DurationInput {...props} value={value} onChange={setValue} />
  },
}

export const Empty: Story = {
  render: (props) => {
    const [value, setValue] = useState<number | null>(null)

    return <DurationInput {...props} value={value} onChange={setValue} />
  },
}

export const Error: Story = {
  args: {
    error: "Duration is required",
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(45)

    return <DurationInput {...props} value={value} onChange={setValue} />
  },
}

export const Readonly: Story = {
  args: {
    readonly: true,
    value: 90,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 90,
  },
}
