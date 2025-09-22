import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagDot } from "../"

const meta: Meta = {
  component: F0TagDot,
  title: "Tag/TagDot",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    color: "viridian",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDotTag: Story = {}

export const CustomColorDotTag: Story = {
  args: {
    color: undefined,
    customColor: "#f00",
  },
}
