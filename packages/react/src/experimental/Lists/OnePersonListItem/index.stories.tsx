import type { Meta, StoryObj } from "@storybook/react-vite"

import avatar from "@storybook-static/avatars/person03.jpg"
import { fn } from "storybook/test"

import { Check, Placeholder } from "../../../icons/app"
import { OnePersonListItem } from "./index"

const meta = {
  title: "List/OnePersonListItem",
  component: OnePersonListItem,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof OnePersonListItem>

export default meta
type Story = StoryObj<typeof OnePersonListItem>

export const Default: Story = {
  args: {
    person: {
      firstName: "John",
      lastName: "Smith",
      avatarUrl: avatar,
      avatarBadge: {
        icon: Check,
        type: "positive",
      },
    },
    info: "Manager: Agustín García",
    description: "Software Engineer",
    withPointerCursor: true,
    rightTag: {
      text: "Parental leave",
      color: "army",
    },
  },
}

export const WithActions: Story = {
  args: {
    person: {
      firstName: "Sarah",
      lastName: "Johnson",
      avatarUrl: avatar,
    },
    description: "Product Designer",
    actions: {
      primary: {
        icon: Placeholder,
        label: "Message",
        onClick: fn(),
      },
      secondary: {
        icon: Placeholder,
        onClick: fn(),
      },
    },
  },
}

export const WithTags: Story = {
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar,
    },
    bottomTags: [
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
      { text: "Label", icon: Placeholder },
    ],
  },
}

export const Minimal: Story = {
  args: {
    person: {
      firstName: "Emma",
      lastName: "Wilson",
      avatarUrl: avatar,
    },
    description: "Software Engineer",
  },
}

export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <OnePersonListItem.Skeleton />,
}
