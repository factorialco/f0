import type { Meta, StoryObj } from "@storybook/react-vite"

import { Comment, PalmTree } from "@/icons/app"

import { SlotWidget } from "./index"

const meta = {
  title: "Home/SlotWidget",
  component: SlotWidget,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SlotWidget>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Every DEFAULT slot, stacked in one widget with the dashed divider between
 * consecutive slots: `indicators`, `avatar-list`, `status-rows`,
 * `simple-line-list`, `inbox-list` and `event-list` — and, within the row-based
 * slots, every case a row can take: an icon shorthand, EVERY avatar type
 * (person, team, company, file, flag, emoji), an `avatarSize` override, the
 * three text voices (title, inline subtitle, description), a count, an unread
 * dot, a trailing sender, trailing faces with a remaining count, and rows with
 * and without an `href` (with → chevron, without → inert).
 */
export const AllSlots: Story = {
  args: {
    header: {
      title: "Team",
      count: 7,
      link: { title: "Open", onClick: () => {} },
    },
    slots: [
      {
        visualization: "indicators",
        params: {
          items: [
            { label: "On holidays", content: "6" },
            { label: "Remote", content: "3" },
          ],
        },
      },
      {
        visualization: "avatar-list",
        params: {
          avatars: [
            { firstName: "Ada", lastName: "Lovelace" },
            { firstName: "Alan", lastName: "Turing" },
            { firstName: "Grace", lastName: "Hopper" },
          ],
          max: 3,
        },
      },
      {
        visualization: "status-rows",
        params: {
          rows: [
            // Alert glyph + trailing faces + remaining count, clickable.
            {
              id: "in",
              title: "Clocked in",
              subtitle: "4 people",
              alert: "positive",
              avatars: [
                { firstName: "Ada", lastName: "Lovelace" },
                { firstName: "Alan", lastName: "Turing" },
              ],
              remainingCount: 2,
              href: "/attendance",
            },
            // No `href` — an inert row, no chevron.
            {
              id: "away",
              title: "Away",
              subtitle: "2 people",
              alert: "warning",
              avatars: [{ firstName: "Grace", lastName: "Hopper" }],
            },
            // A data avatar instead of an alert, sized down.
            {
              id: "office",
              title: "Barcelona office",
              subtitle: "18 people",
              avatar: { type: "company", name: "Factorial" },
              avatarSize: "sm",
              href: "/offices/bcn",
            },
          ],
        },
      },
      {
        visualization: "simple-line-list",
        params: {
          showAllItems: true,
          items: [
            // Icon shorthand + count.
            {
              id: "icon",
              icon: PalmTree,
              title: "Barcelona",
              count: 3,
              href: "/positions/bcn",
            },
            // Person avatar, sized down, inline subtitle.
            {
              id: "person",
              avatar: {
                type: "person",
                firstName: "Ada",
                lastName: "Lovelace",
              },
              avatarSize: "sm",
              title: "Ada Lovelace",
              subtitle: "Engineering",
              href: "/employees/ada",
            },
            // Team avatar + description line.
            {
              id: "team",
              avatar: { type: "team", name: "Payroll" },
              title: "Payroll",
              description: "12 members",
              href: "/teams/payroll",
            },
            // File avatar, mid size.
            {
              id: "file",
              avatar: {
                type: "file",
                file: { name: "contract.pdf", type: "application/pdf" },
              },
              avatarSize: "md",
              title: "Contract.pdf",
              description: "Needs your signature",
              href: "/documents/1",
            },
            // Flag avatar + count.
            {
              id: "flag",
              avatar: { type: "flag", flag: "es" },
              title: "Spain",
              count: 24,
              href: "/offices/es",
            },
            // Emoji avatar with all three text voices at once.
            {
              id: "emoji",
              avatar: { type: "emoji", emoji: "🌴" },
              title: "Time off",
              subtitle: "12 days left",
              description: "Next: Aug 15",
              href: "/time-off",
            },
          ],
        },
      },
      {
        visualization: "inbox-list",
        params: {
          showAllItems: true,
          items: [
            // Module glyph + unread dot + trailing sender.
            {
              id: "1",
              module: "communities",
              title: "Deploy 2026.7.3 is live 🚀",
              subtitle: "8:47",
              unread: true,
              person: { firstName: "Leo", lastName: "Costa" },
              href: "/posts/1",
            },
            // A data avatar instead of a module, sized down.
            {
              id: "2",
              avatar: {
                type: "person",
                firstName: "Grace",
                lastName: "Hopper",
              },
              avatarSize: "md",
              title: "Welcome our new joiners 👋",
              subtitle: "Jul 18",
              href: "/posts/2",
            },
            // Icon avatar, no sender.
            {
              id: "3",
              avatar: { type: "icon", icon: Comment },
              title: "Summer office hours ☀️",
              subtitle: "Jul 12",
              href: "/posts/3",
            },
          ],
        },
      },
      {
        visualization: "event-list",
        params: {
          showAllItems: true,
          events: [
            // A date range.
            {
              title: "Company holiday",
              subtitle: "2 days off",
              description:
                "Offices closed Thursday and Friday for the summer break.",
              isPending: false,
              color: "#10B981",
              fromDate: new Date(2026, 6, 30),
              toDate: new Date(2026, 6, 31),
            },
            // A single day, still pending.
            {
              title: "Monthly all-hands",
              subtitle: "Q3 roadmap update",
              description: "Q3 roadmap and hiring update — bring questions.",
              isPending: true,
              color: "#6366F1",
              fromDate: new Date(2026, 7, 7),
            },
          ],
        },
      },
    ],
  },
}

/**
 * The BESPOKE slots the Home uses (no default renderer ships for them — they
 * come from the `slotRenderers` prop, exactly as `NewHomeLayout` passes them):
 * `clock-in` and `carousel`. An unknown visualization without a renderer shows
 * the dashed fallback instead of crashing.
 */
export const BespokeAndFallback: Story = {
  args: {
    header: { title: "Attendance" },
    slots: [
      { visualization: "clock-in", params: { variant: "tracker" } },
      { visualization: "carousel", params: { kind: "celebrations" } },
      { visualization: "not-registered", params: {} },
    ],
    slotRenderers: {
      "clock-in": (params) => (
        <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
          {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer, owns its data`}
        </div>
      ),
      carousel: () => (
        <div className="flex gap-3 overflow-x-auto">
          {["🎂 Ada — birthday", "🎉 Alan — 2y", "👋 Grace — 1st day"].map(
            (c) => (
              <div
                key={c}
                className="shrink-0 rounded-lg border border-solid border-f1-border p-3 text-f1-foreground"
              >
                {c}
              </div>
            )
          )}
        </div>
      ),
    },
  },
}
