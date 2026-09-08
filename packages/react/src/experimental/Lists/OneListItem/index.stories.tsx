import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, within } from "storybook/test"

import { Building, Check, Placeholder } from "../../../icons/app"
import { OneListItem } from "./index"

const meta = {
  title: "List/OneListItem",
  component: OneListItem,
  tags: ["autodocs", "experimental"],
  parameters: {
    docs: {
      description: {
        component:
          "A row in a list of things: leading avatar, title, inline facts, a status dot and up to two actions. Takes any `AvatarVariant`, so the same row serves workplaces, teams, companies, files or documents. `OnePersonListItem` is this component with a person's name pre-composed.",
      },
    },
  },
} satisfies Meta<typeof OneListItem>

export default meta
type Story = StoryObj<typeof OneListItem>

/** A workplace: the case the person-specific row could not serve. */
export const Default: Story = {
  args: {
    avatar: { type: "icon", icon: Building },
    title: "Barcelona HQ",
    description: "Carrer de Bailèn 36",
    withPointerCursor: true,
  },
}

/**
 * Metadata uses `F0Card`'s shape and renderers: a leading icon whose tooltip is
 * the field's label, then the value drawn by the shared value-display renderer.
 */
export const WithMetadata: Story = {
  args: {
    avatar: { type: "icon", icon: Building },
    title: "Barcelona HQ",
    description: "Carrer de Bailèn 36",
    metadata: [
      {
        icon: Placeholder,
        property: { type: "text", label: "People", value: "128 people" },
      },
      {
        icon: Placeholder,
        property: { type: "text", label: "Work areas", value: "4 work areas" },
      },
    ],
    actions: {
      primary: { label: "View profile", onClick: fn() },
    },
  },
}

export const WithTeamAvatar: Story = {
  args: {
    avatar: { type: "team", name: "Design Systems" },
    title: "Design Systems",
    description: "12 members",
  },
}

export const WithCompanyAvatar: Story = {
  args: {
    avatar: { type: "company", name: "Acme Corp" },
    title: "Acme Corp",
    bottomTags: [{ text: "Customer" }, { text: "Since 2021" }],
  },
}

export const WithPersonAvatar: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "John",
      lastName: "Smith",
      badge: { icon: Check, type: "positive" },
    },
    title: "John Smith",
    description: "Software Engineer",
    info: "Manager: Agustín García",
  },
}

export const WithActions: Story = {
  args: {
    avatar: { type: "icon", icon: Building },
    title: "Madrid",
    description: "Calle de Alcalá 20",
    actions: {
      primary: { icon: Placeholder, label: "Open", onClick: fn() },
      secondary: { icon: Placeholder, label: "More", onClick: fn() },
    },
  },
}

export const WithTags: Story = {
  args: {
    avatar: { type: "icon", icon: Building },
    title: "Lisbon",
    bottomTags: [
      { text: "Hybrid", icon: Placeholder },
      { text: "24 desks", icon: Placeholder },
      { text: "WEZ", icon: Placeholder },
    ],
  },
}

/** No avatar: a plain row of titles. */
export const WithoutAvatar: Story = {
  args: {
    title: "Q3 headcount plan.pdf",
    description: "Updated 2 days ago",
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
  args: { title: "" },
  render: () => <OneListItem.Skeleton />,
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "list-item-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("list-item-test-id")).toBeInTheDocument()
  },
}
