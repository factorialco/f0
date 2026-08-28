import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { EmojiPicker } from "../index"

const meta = {
  title: "Internals/EmojiPicker",
  component: EmojiPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "F0's emoji picker: the reader's own system glyphs, F0 tokens, no",
          "shadow DOM. The panel only — callers own the popover around it.",
          "",
          "Emoji this machine cannot draw are filtered out rather than shown as",
          "tofu boxes, so the grid you see here depends on your OS. Pass",
          "`emojiVersion` to pin it.",
        ].join(" "),
      },
    },
  },
  argTypes: {
    emojiVersion: {
      control: { type: "number" },
      description:
        "Highest Emoji release to offer. Defaults to what the OS draws.",
    },
  },
} satisfies Meta<typeof EmojiPicker>

export default meta
type Story = StoryObj<typeof meta>

const Harness = ({ emojiVersion }: { emojiVersion?: number }) => {
  const [picked, setPicked] = useState<string[]>([])
  return (
    <div className="flex flex-col items-center gap-4">
      <EmojiPicker
        emojiVersion={emojiVersion}
        onSelect={(emoji) => setPicked((all) => [...all, emoji])}
      />
      <p className="min-h-6 font-emoji text-2xl leading-none">
        {picked.join(" ")}
      </p>
    </div>
  )
}

export const Default: Story = {
  args: { onSelect: () => {} },
  render: () => <Harness />,
}

/** What a machine stuck on Emoji 13 sees: no melting face, no shaking face. */
export const OlderPlatform: Story = {
  args: { onSelect: () => {} },
  render: () => <Harness emojiVersion={13} />,
}
