import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { avatarEmojiSizes, F0AvatarEmoji } from "../F0AvatarEmoji"

const meta: Meta<typeof F0AvatarEmoji> = {
  component: F0AvatarEmoji,
  title: "Avatars/AvatarEmoji",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes(["size", "aria-label", "aria-labelledby"]),
    size: {
      control: "select",
      options: avatarEmojiSizes,
      description: "The size of the avatar",
    },
  },
  args: {
    emoji: "🍑",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays an emoji."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
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

type Story = StoryObj<typeof F0AvatarEmoji>

export const Default: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <div className="flex flex-row gap-2">
        <h4 className="text-lg font-semibold">Valid Emoji</h4>
        {avatarEmojiSizes.map((size) => (
          <F0AvatarEmoji key={size} size={size} emoji="🍑" />
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <h4 className="text-lg font-semibold">Invalid Emoji</h4>
        {avatarEmojiSizes.map((size) => (
          <F0AvatarEmoji key={size} size={size} emoji="�" />
        ))}
      </div>
    </div>
  ),
}
