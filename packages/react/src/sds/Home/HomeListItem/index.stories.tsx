import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Comment } from "@/icons/app"

import { HomeListItem } from "./index"

const meta = {
  title: "Home/HomeListItem",
  component: HomeListItem,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HomeListItem>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The base row: any avatar left, three text voices, anything right. The `list`
 * slot builds these from its schema — prefer that over composing rows by hand.
 */
export const Default: Story = {
  args: {
    avatar: { type: "person", firstName: "Ada", lastName: "Lovelace" },
    avatarSize: "md",
    title: "Ada Lovelace",
    subtitle: "Engineering",
    description: "Requested 3 days off",
    right: <F0TagStatus text="Pending" variant="warning" />,
    onClick: () => {},
  },
}

/**
 * The left slot takes EVERY avatar type F0Avatar knows, as plain data — person,
 * team, company, flag, emoji, icon — so a slot's params stay serializable.
 */
export const AvatarTypes: Story = {
  args: { title: "unused" },
  render: () => (
    <div className="flex flex-col">
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        title="Person"
        description="Ada Lovelace"
        onClick={() => {}}
      />
      <HomeListItem
        avatar={{ type: "team", name: "Payroll" }}
        title="Team"
        description="Payroll"
        onClick={() => {}}
      />
      <HomeListItem
        avatar={{ type: "company", name: "Factorial" }}
        title="Company"
        description="Factorial"
        onClick={() => {}}
      />
      <HomeListItem
        avatar={{ type: "flag", flag: "ES" }}
        title="Flag"
        description="Spain"
        onClick={() => {}}
      />
      <HomeListItem
        avatar={{ type: "emoji", emoji: "🌴" }}
        title="Emoji"
        description="Time off"
        onClick={() => {}}
      />
      <HomeListItem
        avatar={{ type: "icon", icon: Comment }}
        title="Icon"
        description="Ask HR"
        onClick={() => {}}
      />
    </div>
  ),
}
