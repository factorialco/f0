import { Ai } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagRaw } from "../"

const meta: Meta = {
  component: F0TagRaw,
  title: "Tag/TagRaw",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Label",
    icon: Ai,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRawTag: Story = {}

export const NoIconTag: Story = {
  args: {
    icon: undefined,
  },
}

export const IconTag: Story = {
  args: {
    text: undefined,
  },
}
