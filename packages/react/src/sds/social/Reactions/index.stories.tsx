import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { getEmojiLabel } from "@/lib/emojis"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Reactions } from "./index"

const meta = {
  component: Reactions,
  title: "Reactions",
  tags: ["!autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Reactions>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onInteraction: () => {
      console.log("interaction")
    },
    items: [
      {
        emoji: "👍",
        initialCount: 14,
        hasReacted: true,
        users: [
          { name: "John Doe" },
          { name: "Jane Smith" },
          { name: "Michael Johnson" },
          { name: "Emily Davis" },
          { name: "William Taylor" },
          { name: "Sarah Lee" },
          { name: "James Brown" },
          { name: "Jessica Martin" },
          { name: "Robert Garcia" },
          { name: "Lisa Harris" },
          { name: "Richard White" },
          { name: "Amy Lewis" },
          { name: "Charles Hall" },
          { name: "Helen Walker" },
        ],
      },
      {
        emoji: "🍆",
        initialCount: 8,
        users: [
          { name: "John Doe" },
          { name: "Jane Smith" },
          { name: "Michael Johnson" },
          { name: "Emily Davis" },
          { name: "William Taylor" },
          { name: "Sarah Lee" },
          { name: "James Brown" },
          { name: "Jessica Martin" },
        ],
      },
      {
        emoji: "🎉",
        initialCount: 3,
        hasReacted: true,
        users: [
          { name: "John Doe" },
          { name: "Jane Smith" },
          { name: "Michael Johnson" },
        ],
      },
      {
        emoji: "🚀",
        initialCount: 5,
        users: [
          { name: "John Doe" },
          { name: "Jane Smith" },
          { name: "Michael Johnson" },
          { name: "Emily Davis" },
          { name: "William Taylor" },
        ],
      },
    ],
  },
}

export const Snapshot: Story = {
  args: Default.args,
  parameters: withSnapshot({}),
}

export const LazyUsers: Story = {
  tags: ["f0chat-receipts"],
  args: {
    items: [
      {
        emoji: "🎉",
        initialCount: 3,
        loadUsers: async () => [
          { name: "Grace Liang" },
          { name: "Marcus Bennett" },
          { name: "Sam Okafor" },
        ],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const reaction = within(canvasElement).getByRole("button", {
      name: `${getEmojiLabel("🎉")}: 3`,
    })

    reaction.focus()

    const tooltips = await page.findAllByText(
      "Grace Liang, Marcus Bennett, Sam Okafor"
    )
    const tooltipId = reaction.getAttribute("aria-describedby")
    const visibleTooltip = tooltipId
      ? canvasElement.ownerDocument.getElementById(tooltipId)
      : null
    await expect(tooltips.length).toBeGreaterThan(0)
    await expect(tooltipId).toBeTruthy()
    await expect(visibleTooltip).toHaveTextContent(
      "Grace Liang, Marcus Bennett, Sam Okafor"
    )
  },
}

export const Empty: Story = {
  args: {
    items: [],
  },
}
