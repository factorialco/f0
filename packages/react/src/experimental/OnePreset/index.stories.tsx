import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { Preset } from "./index"

const meta = {
  component: Preset,
  title: "Preset",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    label: {
      description: "The label of the preset",
    },
    number: {
      description: "The number of the preset",
    },
  },
} satisfies Meta<typeof Preset>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label",
    number: 2,
    onClick: fn(),
    selected: false,
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false)

    return <Preset {...args} selected={isSelected} onClick={() => setIsSelected(!isSelected)} />
  },
}

export const NoNumber: Story = {
  args: {
    label: "Label",
    number: undefined,
    onClick: fn(),
    selected: false,
  },
  render: (args) => {
    const [isSelected, setIsSelected] = useState(false)

    return <Preset {...args} selected={isSelected} onClick={() => setIsSelected(!isSelected)} />
  },
}

export const NotInteractive: Story = {
  args: {
    label: "Label",
    number: 2,
  },
}
