import type { Meta, StoryObj } from "@storybook/react"
import { EmojiAvatar } from "."

const meta: Meta<typeof EmojiAvatar> = {
  component: EmojiAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    emoji: "🍑",
    size: "md",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof EmojiAvatar>

export const Default: Story = {}
