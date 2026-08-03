import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { avatarEmojiSizes, F0AvatarEmoji } from "../F0AvatarEmoji"

const meta = {
  component: F0AvatarEmoji,
  title: "Avatars/AvatarEmoji",
  tags: ["stable", "!autodocs"],
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
    size: "lg",
  },
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component: ["An avatar component that displays an emoji."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
} satisfies Meta<typeof F0AvatarEmoji>

export default meta

type Story = StoryObj<typeof F0AvatarEmoji>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Unlike the other avatars, this one does not render through BaseAvatar, so
    // nothing here is aria-hidden and nothing is labelled either (meta.args
    // passes only `emoji` and `size`). The reachable handle is the twemoji
    // <img>, whose alt falls back to the emoji itself (src/lib/emojis.tsx:50).
    await expect(canvas.getByRole("img", { name: "🍑" })).toBeInTheDocument()
  },
}

/**
 * The four sizes this component accepts, narrower than the shared `xs`–`2xl`
 * avatar scale: `sm`, `md`, `lg` and `xl`.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row items-end gap-2">
      {avatarEmojiSizes.map((size) => (
        <F0AvatarEmoji key={size} size={size} emoji="🍑" />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The supported scale is narrower than the shared avatar scale
    // (xs–2xl in internal/BaseAvatar/types.ts): only these four render.
    await expect(canvas.getAllByRole("img", { name: "🍑" })).toHaveLength(
      avatarEmojiSizes.length
    )
  },
}

/**
 * Anything that is not a single code point (optionally plus U+FE0F) is replaced
 * with 🤔 before it reaches the DOM — junk input and legitimate multi-code-point
 * emoji alike.
 */
export const InvalidEmoji: Story = {
  args: { emoji: "not-an-emoji" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // "not-an-emoji" fails the single-code-point regex, so the component swaps
    // in 🤔 before rendering. getByRole is unique-or-throw, so this also pins
    // "exactly one image, and its alt is the fallback, not the input".
    await expect(canvas.getByRole("img")).toHaveAttribute("alt", "🤔")
  },
}

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
