import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Clock,
  Comment,
  Cross,
  Envelope,
  FileSigned,
  PalmTree,
  PersonPlus,
  Receipt,
  Sparkles,
} from "@/icons/app"
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
    // The rail's width by default (24rem ≈ the Home's 396px aside), because
    // that is where most of these widgets live. A story that wants the main
    // column's width says so with `parameters.widgetWidth` — see `NeedsYouWide`.
    (Story, context) => (
      <div
        style={{
          maxWidth: (context.parameters.widgetWidth as string) ?? "24rem",
        }}
      >
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
      link: { title: "Go to Team", onClick: () => {} },
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
    header: { title: "Team", link: { title: "Go to Team", onClick: () => {} } },
    loading: true,
    slots: teamSlots.map(beforeItemsLand),
  },
}

/**
 * A FEED — the densest thing a `list` draws, and the one every part of the
 * schema was built for. One slot, one schema, seven rows that do not look alike:
 *
 * - **`left: "icon"` with a `color` per row** — the tinted glyph says which
 *   KIND of thing the row is at a glance, without any of them reading as an
 *   alert (that's what `left: "alert"` is for).
 * - **`descriptionOptional`** — only some rows have a second line ("Due Today",
 *   the sender and the time). The glyphs stay `md` throughout, so the column of
 *   them lines up down the card whatever each row's height turns out to be.
 * - **`right: "person"`** — the rows that came from someone show who; the rest
 *   trail nothing.
 * - **row `actions`** — hover the first row (or Tab into the list): what you can
 *   DO to a row appears over its right-hand side, behind a fade. Per row, not
 *   per schema: the two AI prompts near the bottom offer nothing to act on. The
 *   first row and the contract row lead with a NAMED action ("Clock out",
 *   "Sign") and keep "Dismiss" as a glyph — a strip of labelled buttons would
 *   outweigh the row it belongs to.
 * - **`unread`** — the accent dot on the unopened message.
 *
 * The widget is 384px here, the width of the Home's rail. Widen the story and
 * the frame's title and footer button step up a size with it.
 */
export const NeedsYou: Story = {
  args: {
    header: { title: "Needs you", count: 7 },
    action: { label: "See all", onClick: () => {} },
    slots: [
      listSlot(
        {
          left: "icon",
          right: "person",
          rightOptional: true,
          descriptionOptional: true,
          clickBehavior: "link",
        },
        [
          {
            id: "clock-out",
            title: "You clocked in but never clocked out yesterday",
            avatar: { icon: Clock, color: "purple" },
            href: "/attendance",
            // The row's PRIMARY action says what it is — a clock glyph alone
            // would be a guess between "clock out" and "snooze" — and the one
            // beside it stays a glyph.
            actions: [
              {
                label: "Clock out",
                icon: Clock,
                showLabel: true,
                onClick: () => {},
              },
              { label: "Dismiss", icon: Cross, onClick: () => {} },
            ],
          },
          {
            id: "anniversary",
            title: "Ada Lovelace's 3rd work anniversary",
            description: "Due Today",
            avatar: { icon: PersonPlus, color: "barbie" },
            rightAvatar: { firstName: "Ada", lastName: "Lovelace" },
            href: "/employees/ada",
            // A MENU rather than one thing: "later" is a question, not an
            // answer. The strip stays up while the menu is, because reaching
            // the menu means leaving the row.
            actions: [
              {
                label: "Remind me later",
                icon: Clock,
                items: [
                  { type: "label", text: "Remind me" },
                  { label: "Later Today", onClick: () => {} },
                  { label: "Tomorrow", onClick: () => {} },
                  { label: "Next Monday", onClick: () => {} },
                ],
              },
              { label: "Dismiss", icon: Cross, onClick: () => {} },
            ],
          },
          {
            id: "welcome",
            title: "Welcome to the August onboarding cohort 🎉",
            description: "9:12 · Marie Curie",
            avatar: { icon: Envelope, color: "lilac" },
            unread: true,
            rightAvatar: { firstName: "Marie", lastName: "Curie" },
            href: "/inbox/1",
          },
          // No actions and nobody behind them: the two things the assistant
          // offers to do for you, which there is nothing to dismiss about.
          {
            id: "expense",
            title: "Snap a receipt and I'll file the expense",
            avatar: { icon: Receipt, color: "viridian" },
            href: "/expenses/new",
          },
          {
            id: "policy",
            title:
              "Ask a policy question and I'll answer it or raise it with HR",
            // A HEX rather than a palette name — what a row whose colour is
            // already data uses (a calendar's own colour, a module's brand).
            // It draws exactly like the named ones beside it.
            avatar: { icon: Sparkles, color: "#4F46E5" },
            href: "/assistant",
          },
          {
            id: "contract",
            title: "Sign your Q3 contract addendum",
            description: "Due Today",
            avatar: { icon: FileSigned, color: "malibu" },
            href: "/documents/1",
            // A text-only action: no glyph reads as "sign".
            actions: [
              { label: "Sign", showLabel: true, onClick: () => {} },
              { label: "Dismiss", icon: Cross, onClick: () => {} },
            ],
          },
          {
            id: "leave",
            title: "You have 5 days of leave expiring next month",
            avatar: { icon: PalmTree, color: "army" },
            href: "/time-off",
            actions: [{ label: "Dismiss", icon: Cross, onClick: () => {} }],
          },
        ]
      ),
    ],
  },
}

/**
 * THE SAME WIDGET, given the main column's width instead of the rail's.
 *
 * Nothing about the slot changed — this is `NeedsYou`'s args in a wider box.
 * Past 480px everything the card sizes for itself steps up one: the **title**,
 * the **footer button**, each row's **leading glyph** (`md` → `lg`) and its
 * **trailing faces** (`sm` → `md`). The faces stay a step behind the glyph — who
 * a row is about is secondary to what it is.
 *
 * The TEXT doesn't grow: that is the content's scale, not the card's, and a feed
 * whose copy resized with its container would just be a different feed at every
 * width.
 *
 * Drag the story's boundary across 480px and it changes live — the card
 * measures itself, so a widget moved from the rail into the column grows on
 * the way.
 */
export const NeedsYouWide: Story = {
  args: NeedsYou.args,
  parameters: { widgetWidth: "40rem" },
}

/**
 * A SUBTITLE THAT CARRIES BAD NEWS. The subtitle is normally the muted half of
 * the title's line; a row whose subtitle is what has gone WRONG with it —
 * overdue, rejected, over budget — sets `subtitleCritical` and says it in red,
 * the leading dot included.
 *
 * Per row, like `unread`: lateness is a state of that row's data, so the first
 * row here reports it while the second one, with the same schema, still
 * murmurs "Due Friday". The titles are the same colour in both — a title says
 * what the row IS, not what's wrong with it.
 *
 * `subtitleOptional` is the other half of the story: the last row has nothing to
 * add, so it carries no subtitle and no stray separator. Unlike an optional
 * second line this changes no geometry — the subtitle shares the title's line,
 * so the glyph column and the row heights are those of an even list.
 *
 * Keep the red for what the reader has to act on: a list where every subtitle is
 * critical has said nothing.
 */
export const CriticalSubtitles: Story = {
  args: {
    header: { title: "Your tasks", count: 3 },
    action: { label: "See all", onClick: () => {} },
    slots: [
      listSlot(
        {
          left: "icon",
          subtitleOptional: true,
          clickBehavior: "link",
        },
        [
          {
            id: "expenses",
            title: "Expenses report",
            subtitle: "2 days overdue",
            subtitleCritical: true,
            avatar: { icon: Receipt, color: "viridian" },
            href: "/expenses",
          },
          {
            id: "review",
            title: "Performance review",
            subtitle: "Due Friday",
            avatar: { icon: Clock, color: "purple" },
            href: "/reviews",
          },
          {
            id: "onboarding",
            title: "Onboarding checklist",
            avatar: { icon: PersonPlus, color: "army" },
            href: "/onboarding",
          },
        ]
      ),
    ],
  },
}

/** The pool `ItemChurn` adds from, cycled so the button never runs out. */
const CHURN_ITEMS = [
  { title: "You never clocked out yesterday", icon: Clock, color: "purple" },
  {
    title: "Sign your Q3 contract addendum",
    icon: FileSigned,
    color: "malibu",
  },
  {
    title: "Snap a receipt and I'll file it",
    icon: Receipt,
    color: "viridian",
  },
  { title: "5 days of leave expire next month", icon: PalmTree, color: "army" },
  { title: "Welcome to the August cohort 🎉", icon: Envelope, color: "lilac" },
] as const

/**
 * ITEMS COMING AND GOING — the playground for it. Three ways to change the list,
 * so every direction is one click away:
 *
 * - **"Add an item"** in the footer appends one,
 * - the widget's **⋯ menu** adds one at the TOP or removes the last,
 * - and each row's **✕** (hover it) removes that row.
 *
 * A widget's items change under the user while they are reading them, so a row
 * that vanished between two blinks would leave them wondering which one they
 * just lost. The leaving row fades, and its own height closes on a spring — so
 * the rows below it, the footer button and the card's bottom edge all move
 * CONTINUOUSLY rather than snapping to the new size in one frame.
 *
 * The same wrapper does it for every slot type (`event-list` too, and any
 * bespoke renderer that reaches for `HomeSlotItems`), and it does nothing at
 * all under `prefers-reduced-motion`.
 */
export const ItemChurn: Story = {
  // `render` owns the widget, but the story still has to satisfy
  // `SlotWidget`'s required props. These args are unused.
  args: { slots: [] },
  render: function ItemChurnStory() {
    // Rows by IDENTITY, not by index: the id is what tells the animation which
    // row is which between two renders, and reusing one would make an added row
    // read as an edit of whatever used to sit in that position.
    const [rows, setRows] = useState(() =>
      CHURN_ITEMS.slice(0, 3).map((item, index) => ({ ...item, id: index }))
    )
    const [nextId, setNextId] = useState(3)

    const addRow = (atTop: boolean) => {
      const item = CHURN_ITEMS[nextId % CHURN_ITEMS.length]
      const row = { ...item, id: nextId }
      setNextId((id) => id + 1)
      setRows((current) => (atTop ? [row, ...current] : [...current, row]))
    }

    return (
      <SlotWidget
        header={{ title: "Needs you", count: rows.length }}
        // The two moves a row cannot offer you: adding one, and adding it
        // somewhere other than the end — which is the case that shows the rows
        // below it gliding DOWN rather than the list redrawing.
        actions={[
          {
            label: "Add at the top",
            icon: Sparkles,
            onClick: () => addRow(true),
          },
          {
            label: "Remove the last",
            icon: Cross,
            onClick: () => setRows((current) => current.slice(0, -1)),
          },
        ]}
        action={{ label: "Add an item", onClick: () => addRow(false) }}
        slots={[
          listSlot(
            { left: "icon", clickBehavior: "link" },
            rows.map((row) => ({
              id: row.id,
              title: row.title,
              avatar: { icon: row.icon, color: row.color },
              href: `/${row.id}`,
              // Removing THE ONE YOU POINTED AT is the case worth watching: the
              // rows under it are the ones that have to close the gap.
              actions: [
                {
                  label: "Dismiss",
                  icon: Cross,
                  onClick: () =>
                    setRows((current) =>
                      current.filter((r) => r.id !== row.id)
                    ),
                },
              ],
            }))
          ),
        ]}
      />
    )
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
