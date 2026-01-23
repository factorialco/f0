import type { Meta, StoryObj } from "@storybook/react-vite"

import Lightbulb from "@/icons/app/Lightbulb"
import Search from "@/icons/app/Search"

import { F0AiCollapsibleMessage } from "../F0AiCollapsibleMessage"

const meta: Meta<typeof F0AiCollapsibleMessage> = {
  title: "AI/F0AiCollapsibleMessage",
  component: F0AiCollapsibleMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Lightbulb,
    title: "Thoughts",
    children: (
      <div className="flex flex-col gap-2">
        <p>This is the collapsible content.</p>
        <p>Click the trigger to expand/collapse.</p>
      </div>
    ),
  },
}

export const WithSearchIcon: Story = {
  args: {
    icon: Search,
    title: "Resources",
    children: (
      <div className="flex flex-col gap-2 rounded-lg border border-solid border-f1-border-secondary p-2">
        <div className="px-2 py-1">Resource 1</div>
        <div className="px-2 py-1">Resource 2</div>
        <div className="px-2 py-1">Resource 3</div>
      </div>
    ),
  },
}
