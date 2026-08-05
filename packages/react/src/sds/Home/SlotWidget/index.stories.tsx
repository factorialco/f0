import type { Meta, StoryObj } from "@storybook/react-vite"

import { Comment, PalmTree } from "@/icons/app"

import { homeSlot } from "../slotRenderers"
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
 * consecutive slots — and, across the row-based slots, every case a slot can
 * take. Rows are CONSISTENT within a slot: the slot declares its `left` kind
 * once (an icon, any avatar type, a module glyph, an alert — or none) and every
 * row draws it, so mixing kinds needs mixing slots, exactly as shown here.
 * Also on display: `avatarSize`, the three text voices (title, inline
 * subtitle, description), counts, the unread dot, a trailing sender, trailing
 * faces with a remaining count, and rows with and without an `href`
 * (with → chevron, without → inert).
 */
export const AllSlots: Story = {
  args: {
    header: {
      title: "Team",
      count: 7,
      link: { title: "Open", onClick: () => {} },
    },
    slots: [
      homeSlot("indicators", {
        items: [
          { label: "On holidays", content: "6" },
          { label: "Remote", content: "3" },
        ],
      }),
      homeSlot("avatar-list", {
        avatars: [
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
        ],
        max: 3,
      }),
      // status-rows, alert left: faces + remaining count; the away row has no
      // `href`, so it draws no chevron and stays inert.
      homeSlot("status-rows", {
        left: "alert",
        rows: [
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
          {
            id: "away",
            title: "Away",
            subtitle: "2 people",
            alert: "warning",
            avatars: [{ firstName: "Grace", lastName: "Hopper" }],
          },
        ],
      }),
      // status-rows, company left, sized down.
      homeSlot("status-rows", {
        left: "company",
        avatarSize: "sm",
        rows: [
          {
            id: "office",
            title: "Barcelona office",
            subtitle: "18 people",
            avatar: { name: "Factorial" },
            href: "/offices/bcn",
          },
        ],
      }),
      // simple-line-list, icon left, trailing counts.
      homeSlot("simple-line-list", {
        left: "icon",
        items: [
          {
            id: "bcn",
            avatar: { icon: PalmTree },
            title: "Barcelona",
            count: 3,
            href: "/positions/bcn",
          },
          {
            id: "mad",
            avatar: { icon: Comment },
            title: "Madrid",
            count: 2,
            href: "/positions/mad",
          },
        ],
      }),
      // simple-line-list, person left, sized down; the two secondary voices.
      homeSlot("simple-line-list", {
        left: "person",
        avatarSize: "sm",
        items: [
          {
            id: "ada",
            avatar: { firstName: "Ada", lastName: "Lovelace" },
            title: "Ada Lovelace",
            subtitle: "Engineering",
            href: "/employees/ada",
          },
          {
            id: "grace",
            avatar: { firstName: "Grace", lastName: "Hopper" },
            title: "Grace Hopper",
            description: "Out until Friday",
            href: "/employees/grace",
          },
        ],
      }),
      // simple-line-list, team left.
      homeSlot("simple-line-list", {
        left: "team",
        items: [
          {
            id: "payroll",
            avatar: { name: "Payroll" },
            title: "Payroll",
            description: "12 members",
            href: "/teams/payroll",
          },
        ],
      }),
      // simple-line-list, file left, mid size.
      homeSlot("simple-line-list", {
        left: "file",
        avatarSize: "md",
        items: [
          {
            id: "contract",
            avatar: { file: { name: "contract.pdf", type: "application/pdf" } },
            title: "Contract.pdf",
            description: "Needs your signature",
            href: "/documents/1",
          },
        ],
      }),
      // simple-line-list, flag left.
      homeSlot("simple-line-list", {
        left: "flag",
        items: [
          {
            id: "es",
            avatar: { flag: "es" },
            title: "Spain",
            count: 24,
            href: "/offices/es",
          },
        ],
      }),
      // simple-line-list, emoji left, all three text voices at once.
      homeSlot("simple-line-list", {
        left: "emoji",
        items: [
          {
            id: "pto",
            avatar: { emoji: "🌴" },
            title: "Time off",
            subtitle: "12 days left",
            description: "Next: Aug 15",
            href: "/time-off",
          },
        ],
      }),
      // simple-line-list with NO left at all: plain text rows.
      homeSlot("simple-line-list", {
        items: [
          {
            id: "requests",
            title: "Review pending requests",
            count: 5,
            href: "/requests",
          },
        ],
      }),
      // inbox-list, module left: the unread dot and a trailing sender.
      homeSlot("inbox-list", {
        left: "module",
        items: [
          {
            id: "deploy",
            module: "communities",
            title: "Deploy 2026.7.3 is live 🚀",
            subtitle: "8:47",
            unread: true,
            person: { firstName: "Leo", lastName: "Costa" },
            href: "/posts/1",
          },
          {
            id: "summer",
            module: "communities",
            title: "Summer office hours ☀️",
            subtitle: "Jul 18",
            href: "/posts/2",
          },
        ],
      }),
      // inbox-list, person left, sized down.
      homeSlot("inbox-list", {
        left: "person",
        avatarSize: "md",
        items: [
          {
            id: "joiners",
            avatar: { firstName: "Grace", lastName: "Hopper" },
            title: "Welcome our new joiners 👋",
            subtitle: "Jul 12",
            href: "/posts/3",
          },
        ],
      }),
      homeSlot("event-list", {
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
      }),
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
