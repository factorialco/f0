import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { F0GraphControls } from "../F0GraphControls"

const meta: Meta<typeof F0GraphControls> = {
  component: F0GraphControls,
  title: "Graph/F0GraphControls",
  tags: ["stable", "!autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neutral",
      values: [{ name: "neutral", value: "hsl(var(--neutral-5))" }],
    },
  },
  args: {
    onZoomIn: fn(),
    onZoomOut: fn(),
    onFitView: fn(),
  },
  decorators: [
    (Story) => (
      <div className="relative p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0GraphControls>

export default meta
type Story = StoryObj<typeof F0GraphControls>

export const Default: Story = {}

export const WithFindMe: Story = {
  args: {
    onFocusUser: fn(),
  },
}
