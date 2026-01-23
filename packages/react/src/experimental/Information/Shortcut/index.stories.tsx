import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"

import { Shortcut } from "./index"

const meta = {
  component: Shortcut,
  title: "Shortcut",
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-Components?node-id=172-2793",
    },
  },
  tags: ["autodocs", "experimental"],
  args: {
    keys: ["cmd", "k"],
  } satisfies ComponentProps<typeof Shortcut>,
} satisfies Meta<typeof Shortcut>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleKeys: Story = {
  args: {
    keys: ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A"],
  },
  decorators: [
    (Story) => (
      <div className="w-32">
        <Story />
      </div>
    ),
  ],
}

export const InverseVariant: Story = {
  args: {
    keys: ["cmd", "K"],
    variant: "inverse",
  },
  decorators: [
    (Story) => (
      <div className="bg-f1-background-inverse p-4">
        <Story />
      </div>
    ),
  ],
}
