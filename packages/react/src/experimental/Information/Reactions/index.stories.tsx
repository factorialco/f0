import type { Meta, StoryObj } from "@storybook/react-vite"
import { Reactions } from "./index"

const meta: Meta<typeof Reactions> = {
  component: Reactions,
  title: "Reactions",
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Reactions>

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
        users: [{ name: "John Doe" }, { name: "Jane Smith" }, { name: "Michael Johnson" }],
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

export const Empty: Story = {
  args: {
    items: [],
  },
}
