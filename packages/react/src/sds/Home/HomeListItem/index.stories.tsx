import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Dialog } from "@/components/dialog-alike/F0Dialog"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Comment, Money, PalmTree } from "@/icons/app"

import { ListIconGlyph } from "../slotRenderers"

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
    href: "#",
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
        href="#"
      />
      <HomeListItem
        avatar={{ type: "team", name: "Payroll" }}
        title="Team"
        description="Payroll"
        href="#"
      />
      <HomeListItem
        avatar={{ type: "company", name: "Factorial" }}
        title="Company"
        description="Factorial"
        href="#"
      />
      <HomeListItem
        avatar={{ type: "flag", flag: "ES" }}
        title="Flag"
        description="Spain"
        href="#"
      />
      <HomeListItem
        avatar={{ type: "emoji", emoji: "🌴" }}
        title="Emoji"
        description="Time off"
        href="#"
      />
      <HomeListItem
        avatar={{ type: "icon", icon: Comment }}
        title="Icon"
        description="Ask HR"
        href="#"
      />
    </div>
  ),
}

/**
 * Rows rendered OUTSIDE a widget, in a dialog: the Home feed summarises several
 * tasks in one row ("Approve 16 expenses"), and opening it lists the tasks it
 * stands for. The rows have to match the ones the `list` slot drew in the
 * widget, which is why the row is public — a slot can't reach in here.
 */
export const InsideADialog: Story = {
  args: { title: "unused" },
  parameters: { docs: { story: { height: "420px" } } },
  render: () => (
    <F0Dialog isOpen onClose={() => {}} title="Approve 16 expenses">
      <div className="flex flex-col">
        <HomeListItem
          description="Overdue · 12 Aug 2026 · Client dinner"
          left={<ListIconGlyph icon={Money} color="flubber" />}
          href="#"
          showChevron
          title="Review Ada Lovelace's expense request"
        />
        <HomeListItem
          description="Overdue · 12 Aug 2026 · Taxi to airport"
          left={<ListIconGlyph icon={Money} color="flubber" />}
          href="#"
          showChevron
          title="Review Grace Hopper's expense request"
        />
        <HomeListItem
          description="Due tomorrow · 18 Aug 2026"
          href="#"
          left={<ListIconGlyph icon={PalmTree} color="viridian" />}
          showChevron
          title="Review Alan Turing's time off request"
        />
        <HomeListItem
          description="Due tomorrow · 18 Aug 2026"
          href="#"
          left={<ListIconGlyph icon={Comment} color="lilac" />}
          showChevron
          title="Answer the engagement survey"
        />
      </div>
    </F0Dialog>
  ),
}
