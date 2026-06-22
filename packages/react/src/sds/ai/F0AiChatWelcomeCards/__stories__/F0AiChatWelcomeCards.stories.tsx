import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { File, Marketplace } from "@/icons/app"

import { F0AiChatWelcomeCards } from ".."
import type { F0AiChatWelcomeCard } from ".."

const meta = {
  component: F0AiChatWelcomeCards,
  title: "AI/F0AiChatWelcomeCards",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[560px] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiChatWelcomeCards>

export default meta
type Story = StoryObj<typeof F0AiChatWelcomeCards>

const cards: F0AiChatWelcomeCard[] = [
  {
    icon: File,
    title: "Empty survey",
    description: "Start from scratch",
    message: "Create an empty survey.",
  },
  {
    icon: Marketplace,
    title: "Templates",
    description: "Browse pre-made surveys",
    onClick: fn(),
  },
]

export const Default: Story = {
  args: {
    cards,
    onSelect: fn(),
  },
}
