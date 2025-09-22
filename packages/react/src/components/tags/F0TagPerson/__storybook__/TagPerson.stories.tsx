import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagPerson } from "../"

const meta: Meta = {
  component: F0TagPerson,
  title: "Tag/TagPerson",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Saul Dominguez",
    avatarUrl: "/avatars/person05.jpg",
    onClick: () => {},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPersonTag: Story = {}
