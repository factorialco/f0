import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

import { Reactions } from "./index"

const meta: Meta<typeof Reactions> = {
  component: Reactions,
  title: "Social/Reactions",
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
          { name: fakePeople.noor.fullName },
          { name: fakePeople.hana.fullName },
          { name: fakePeople.caleb.fullName },
          { name: fakePeople.yuki.fullName },
          { name: fakePeople.sofia.fullName },
          { name: fakePeople.ravi.fullName },
          { name: fakePeople.greta.fullName },
          { name: fakePeople.iris.fullName },
          { name: fakePeople.aaron.fullName },
          { name: fakePeople.nadia.fullName },
          { name: fakePeople.linus.fullName },
          { name: fakePeople.camila.fullName },
          { name: fakePeople.theo.fullName },
          { name: fakePeople.eva.fullName },
        ],
      },
      {
        emoji: "🍆",
        initialCount: 8,
        users: [
          { name: fakePeople.noor.fullName },
          { name: fakePeople.hana.fullName },
          { name: fakePeople.caleb.fullName },
          { name: fakePeople.yuki.fullName },
          { name: fakePeople.sofia.fullName },
          { name: fakePeople.ravi.fullName },
          { name: fakePeople.greta.fullName },
          { name: fakePeople.iris.fullName },
        ],
      },
      {
        emoji: "🎉",
        initialCount: 3,
        hasReacted: true,
        users: [
          { name: fakePeople.noor.fullName },
          { name: fakePeople.hana.fullName },
          { name: fakePeople.caleb.fullName },
        ],
      },
      {
        emoji: "🚀",
        initialCount: 5,
        users: [
          { name: fakePeople.noor.fullName },
          { name: fakePeople.hana.fullName },
          { name: fakePeople.caleb.fullName },
          { name: fakePeople.yuki.fullName },
          { name: fakePeople.sofia.fullName },
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
