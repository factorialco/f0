import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0OneIcon } from "../F0OneIcon"

const meta: Meta<typeof F0OneIcon> = {
  title: "AI/F0OneIcon",
  component: F0OneIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Size of the icon",
    },
    spin: {
      control: "boolean",
      description: "Whether the icon should spin",
    },
    hover: {
      control: "boolean",
      description: "Whether the icon is in hover state",
    },
    background: {
      control: "color",
      description: "Background color override",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "md",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <F0OneIcon size="xs" />
      <F0OneIcon size="sm" />
      <F0OneIcon size="md" />
      <F0OneIcon size="lg" />
    </div>
  ),
}

export const Spinning: Story = {
  args: {
    spin: true,
    size: "lg",
  },
}

export const Hover: Story = {
  args: {
    hover: true,
    size: "lg",
  },
}

export const WithBackground: Story = {
  args: {
    background: "white",
    size: "lg",
  },
}
