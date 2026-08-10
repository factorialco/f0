import type { Meta, StoryObj } from "@storybook/react-vite"

import { Comment, PalmTree } from "@/icons/app"
import { Skeleton } from "@/ui/skeleton"

import {
  homeSlot,
  listSlot,
  type HomeWidgetSlot,
  type SlotRenderers,
} from "../slotRenderers"
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
 * The slot stack both the loaded and the loading story draw — one is the other
 * with its items taken away (see {@link beforeItemsLand}).
 */
const teamSlots: HomeWidgetSlot[] = [
  homeSlot("indicators", {
    items: [
      { label: "On holidays", content: "6" },
      { label: "Remote", content: "3" },
    ],
  }),
  // Alert left + faces right: two-line rows (md glyphs), every row a link.
  listSlot(
    {
      left: "alert",
      right: "person-list",
      descriptionRequired: true,
      clickBehavior: "link",
    },
    [
      {
        id: "in",
        title: "Clocked in",
        description: "4 people",
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
        description: "2 people",
        alert: "warning",
        avatars: [{ firstName: "Grace", lastName: "Hopper" }],
        href: "/attendance/away",
      },
    ]
  ),
  // Icon left + counter right: one-line rows (sm glyphs).
  listSlot({ left: "icon", right: "counter", clickBehavior: "link" }, [
    {
      id: "bcn",
      title: "Barcelona",
      avatar: { icon: PalmTree },
      count: 3,
      href: "/positions/bcn",
    },
    {
      id: "mad",
      title: "Madrid",
      avatar: { icon: Comment },
      count: 2,
      href: "/positions/mad",
    },
  ]),
  // Person left with BOTH text voices: inline subtitle + second line (md).
  listSlot(
    {
      left: "person",
      subtitleRequired: true,
      descriptionRequired: true,
      clickBehavior: "link",
    },
    [
      {
        id: "ada",
        title: "Ada Lovelace",
        subtitle: "Engineering",
        description: "Out until Friday",
        avatar: { firstName: "Ada", lastName: "Lovelace" },
        href: "/employees/ada",
      },
    ]
  ),
  // Module left + sender right, with the unread dot: an inbox.
  listSlot(
    {
      left: "module",
      right: "person",
      descriptionRequired: true,
      clickBehavior: "link",
    },
    [
      {
        id: "deploy",
        title: "Deploy 2026.7.3 is live 🚀",
        description: "8:47",
        module: "communities",
        unread: true,
        rightAvatar: { firstName: "Leo", lastName: "Costa" },
        href: "/posts/1",
      },
      {
        id: "summer",
        title: "Summer office hours ☀️",
        description: "Jul 18",
        module: "communities",
        rightAvatar: { firstName: "Mia", lastName: "Ruiz" },
        href: "/posts/2",
      },
    ]
  ),
  // One-line rows over the remaining avatar kinds, one slot each.
  listSlot({ left: "team", subtitleRequired: true, clickBehavior: "link" }, [
    {
      id: "payroll",
      title: "Payroll",
      subtitle: "12 members",
      avatar: { name: "Payroll" },
      href: "/teams/payroll",
    },
  ]),
  listSlot({ left: "company", subtitleRequired: true, clickBehavior: "link" }, [
    {
      id: "office",
      title: "Barcelona office",
      subtitle: "18 people",
      avatar: { name: "Factorial" },
      href: "/offices/bcn",
    },
  ]),
  listSlot({ left: "file", descriptionRequired: true, clickBehavior: "link" }, [
    {
      id: "contract",
      title: "Contract.pdf",
      description: "Needs your signature",
      avatar: { file: { name: "contract.pdf", type: "application/pdf" } },
      href: "/documents/1",
    },
  ]),
  listSlot({ left: "flag", right: "counter", clickBehavior: "link" }, [
    {
      id: "es",
      title: "Spain",
      avatar: { flag: "es" },
      count: 24,
      href: "/offices/es",
    },
  ]),
  listSlot({ left: "emoji", subtitleRequired: true, clickBehavior: "link" }, [
    {
      id: "pto",
      title: "Time off",
      subtitle: "12 days left",
      avatar: { emoji: "🌴" },
      href: "/time-off",
    },
  ]),
  // No left, no right: plain text rows. An external href opens in a new
  // tab; relative ones stay in this one.
  listSlot({ clickBehavior: "link" }, [
    {
      id: "requests",
      title: "Review pending requests",
      href: "/requests",
    },
    {
      id: "help",
      title: "Help center",
      href: "https://help.factorial.co",
    },
  ]),
  // compact: true — the second line folds into a tooltip even under the
  // threshold (hover the row for it), and the glyph draws sm.
  listSlot(
    {
      left: "icon",
      descriptionRequired: true,
      compact: true,
      clickBehavior: "link",
    },
    [
      {
        id: "faq",
        title: "FAQs",
        description: "Answers to the most common questions",
        avatar: { icon: Comment },
        href: "/faq",
      },
    ]
  ),
  // maxVisibleItems: 3 of 7 rows show, the rest behind "View more (4)" at
  // the bottom (then "View less"). Expanded, the list passes
  // LIST_COMPACT_AFTER and auto-compacts — the second line folds into a
  // tooltip and the glyphs drop to sm.
  listSlot(
    {
      left: "person",
      descriptionRequired: true,
      clickBehavior: "link",
      maxVisibleItems: 3,
    },
    [
      "Ada Lovelace",
      "Alan Turing",
      "Grace Hopper",
      "Katherine Johnson",
      "Margaret Hamilton",
      "Annie Easley",
      "Mary Jackson",
    ].map((name, index) => ({
      id: String(index),
      title: name,
      description: `Joined in 20${10 + index}`,
      avatar: {
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
      },
      href: `/employees/${index}`,
    }))
  ),
  homeSlot("event-list", {
    events: [
      // A date range.
      {
        title: "Company holiday",
        subtitle: "2 days off",
        description: "Offices closed Thursday and Friday for the summer break.",
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
]

/**
 * Every DEFAULT slot, stacked in one widget with the dashed divider between
 * consecutive slots — and, across the `list` slots, every schema a list can
 * declare. A list's SCHEMA is declared once for the whole slot (its `left` and
 * `right` kinds, which text voices its rows carry, how rows respond to a
 * click) and every row follows it, so mixing kinds means mixing slots.
 * Sizing is prescriptive: two-line rows (a required description) draw `md`
 * glyphs, one-line rows `sm` — and past `LIST_COMPACT_AFTER` (6) visible rows
 * the second line folds into a tooltip and the whole list compacts to `sm`.
 * A list with `maxVisibleItems` folds the rest behind "View more (n)" /
 * "View less" at its bottom — the second-to-last list here shows both.
 */
export const AllSlots: Story = {
  args: {
    header: {
      title: "Team",
      count: 7,
      link: { title: "Open", onClick: () => {} },
    },
    slots: teamSlots,
  },
}

/**
 * A slot as it looks BEFORE its data arrives: same visualization, same static
 * config (a `list` keeps its schema — that's what shapes the placeholder), no
 * items yet, and `expectedItemsCount` set to however many are coming, taken
 * here from what the loaded slot holds.
 */
const beforeItemsLand = (slot: HomeWidgetSlot): HomeWidgetSlot => {
  const params = slot.params as { items?: unknown[]; events?: unknown[] }
  const items = params.items ?? params.events ?? []
  return {
    ...slot,
    expectedItemsCount: items.length,
    params: params.events
      ? { ...params, events: [] }
      : { ...params, items: [] },
  }
}

/**
 * The SAME widget as `AllSlots`, waiting on its data: `loading` swaps every
 * slot's content for that visualization's skeleton, keeping the frame, the
 * header and the seams — the card fills in rather than changing shape.
 *
 * Each placeholder is drawn from what the slot already knows. A `list`'s schema
 * decides whether its rows carry a left glyph (round for a person, square
 * otherwise), whether they trail something, and — through the same prescriptive
 * sizing the real rows use — whether they are one line or two. `maxVisibleItems`
 * caps the placeholder the way it caps the list. How MANY items each slot draws
 * is its own `expectedItemsCount`, so a widget declares its loading height
 * instead of guessing at one.
 */
export const AllLoadingSlots: Story = {
  args: {
    // No `count` in the header: the frame's chrome is real while the slots are
    // placeholders, so it should only say what is actually known yet.
    header: { title: "Team", link: { title: "Open", onClick: () => {} } },
    loading: true,
    slots: teamSlots.map(beforeItemsLand),
  },
}

const bespokeSlots: HomeWidgetSlot[] = [
  { visualization: "clock-in", params: { variant: "tracker" } },
  {
    visualization: "carousel",
    params: { kind: "celebrations" },
    expectedItemsCount: 3,
  },
  { visualization: "not-registered", params: {} },
]

/**
 * A bespoke renderer brings its OWN skeleton by declaring the entry as
 * `{ render, skeleton }` instead of a bare function — `clock-in` does.
 * `carousel` stays a bare function, so it falls back to the generic
 * placeholder while loading.
 */
const bespokeRenderers = {
  "clock-in": {
    render: (params: unknown) => (
      <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
        {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer, owns its data`}
      </div>
    ),
    skeleton: () => <Skeleton className="h-[52px] w-full rounded-md" />,
  },
  carousel: () => (
    // Focusable: a scrollable region whose content isn't must be keyboard
    // reachable (axe: scrollable-region-focusable).
    <div
      className="flex gap-3 overflow-x-auto"
      role="region"
      aria-label="Celebrations"
      tabIndex={0}
    >
      {["🎂 Ada — birthday", "🎉 Alan — 2y", "👋 Grace — 1st day"].map((c) => (
        <div
          key={c}
          className="shrink-0 rounded-lg border border-solid border-f1-border p-3 text-f1-foreground"
        >
          {c}
        </div>
      ))}
    </div>
  ),
} satisfies SlotRenderers

/**
 * The BESPOKE slots the Home uses (no default renderer ships for them — they
 * come from the `slotRenderers` prop, exactly as `NewHomeLayout` passes them):
 * `clock-in` and `carousel`. An unknown visualization without a renderer shows
 * the dashed fallback instead of crashing.
 */
export const BespokeAndFallback: Story = {
  args: {
    header: { title: "Attendance" },
    slots: bespokeSlots,
    slotRenderers: bespokeRenderers,
  },
}

/**
 * The same bespoke widget, loading. `clock-in` draws the skeleton it declared
 * beside its renderer; `carousel` and the unregistered visualization have none,
 * so they get the generic placeholder — `expectedItemsCount` bars — rather than
 * nothing or the dashed notice.
 */
export const BespokeLoadingSlots: Story = {
  args: {
    header: { title: "Attendance" },
    loading: true,
    slots: bespokeSlots,
    slotRenderers: bespokeRenderers,
  },
}
