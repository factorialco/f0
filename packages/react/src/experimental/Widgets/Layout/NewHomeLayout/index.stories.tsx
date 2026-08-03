import type { Meta, StoryObj } from "@storybook/react-vite"

import { NewHomeLayout, type HomeWidgetItem, type SlotRenderers } from "./index"

/* ----------------------------- main content ----------------------------- */

const Greeting = () => (
  <div className="rounded-xl bg-f1-background-secondary p-6">
    <div className="text-2xl font-semibold text-f1-foreground">
      Good afternoon, Saúl
    </div>
    <div className="text-f1-foreground-secondary">
      Tuesday, 3 August · Here's your day
    </div>
  </div>
)

const ClockInHero = () => (
  <div className="flex items-center justify-between rounded-xl border border-solid border-f1-border p-5">
    <div>
      <div className="text-f1-foreground-secondary text-sm">
        Currently working
      </div>
      <div className="text-3xl font-semibold tabular-nums text-f1-foreground">
        03:42:10
      </div>
    </div>
    <div className="rounded-lg bg-f1-background-critical-bold px-4 py-2 text-f1-foreground-inverse">
      Clock out
    </div>
  </div>
)

const AgentsQueue = () => (
  <div className="rounded-xl border border-solid border-f1-border p-4">
    <div className="mb-2 font-medium text-f1-foreground">
      Agents · suggested actions
    </div>
    {[
      "Approve 3 pending time-off requests",
      "Review draft engagement survey",
      "2 payslips need attention",
    ].map((t) => (
      <div
        key={t}
        className="flex items-center gap-2 py-1.5 text-f1-foreground"
      >
        <span className="text-f1-foreground-secondary">▶</span> {t}
      </div>
    ))}
  </div>
)

/* ------------------------------- widgets -------------------------------- */

const events: HomeWidgetItem = {
  id: "events",
  header: {
    title: "Events",
    count: 3,
    link: { title: "Calendar", onClick: () => {} },
  },
  slots: [
    {
      visualization: "list",
      params: {
        showAllItems: true,
        items: [
          { id: "1", title: "Design sync", description: "Today · 10:00" },
          { id: "2", title: "All hands", description: "Tomorrow · 16:00" },
          { id: "3", title: "Team offsite", description: "Fri · all day" },
        ],
      },
    },
  ],
}

const teamStatus: HomeWidgetItem = {
  id: "team-status",
  header: { title: "Team status" },
  slots: [
    {
      visualization: "status-rows",
      params: {
        rows: [
          {
            id: "missing",
            title: "Missing clock-in",
            subtitle: "1 person",
            alert: "critical",
            avatars: [{ firstName: "NT", lastName: "" }],
          },
          {
            id: "in",
            title: "Clocked in",
            subtitle: "4 people",
            alert: "positive",
            avatars: [
              { firstName: "Ada", lastName: "L" },
              { firstName: "Alan", lastName: "T" },
            ],
          },
          {
            id: "break",
            title: "On a break",
            subtitle: "2 people",
            alert: "warning",
            avatars: [{ firstName: "Grace", lastName: "H" }],
          },
        ],
      },
    },
  ],
}

const holidays: HomeWidgetItem = {
  id: "holidays",
  header: { title: "Away on holidays", subtitle: "Today" },
  fullHeight: true,
  slots: [
    {
      visualization: "indicators",
      params: { items: [{ label: "On holidays", content: "6" }] },
    },
    { visualization: "avatar-list", params: { count: 6 } },
  ],
}

const companyLinks: HomeWidgetItem = {
  id: "company-links",
  header: { title: "Company links" },
  slots: [
    {
      visualization: "list",
      params: {
        showAllItems: true,
        items: [
          { id: "handbook", title: "Employee handbook" },
          { id: "brand", title: "Brand assets" },
          { id: "it", title: "IT support" },
        ],
      },
    },
  ],
}

const openPositions: HomeWidgetItem = {
  id: "open-positions",
  header: { title: "Internal opportunities", count: 5 },
  slots: [
    {
      visualization: "list",
      params: {
        showAllItems: true,
        items: [
          { id: "bcn", title: "Barcelona", description: "3 open roles" },
          { id: "mad", title: "Madrid", description: "2 open roles" },
        ],
      },
    },
  ],
}

const todayInFactorial: HomeWidgetItem = {
  id: "today-in-factorial",
  header: { title: "Today at Factorial" },
  slots: [{ visualization: "carousel", params: { kind: "celebrations" } }],
}

const clockInWidget: HomeWidgetItem = {
  id: "clock-in",
  header: { title: "Attendance" },
  slots: [{ visualization: "clock-in", params: { variant: "tracker" } }],
}

/* --------------- bespoke / non-default slot renderers (app-side) --------------- */

const slotRenderers: SlotRenderers = {
  "clock-in": (params) => (
    <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
      {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer, owns its data`}
    </div>
  ),
  carousel: () => (
    <div className="flex gap-3">
      {["🎂 Ada — birthday", "🎉 Alan — 2y", "👋 Grace — 1st day"].map((c) => (
        <div
          key={c}
          className="rounded-lg border border-solid border-f1-border p-3 text-f1-foreground"
        >
          {c}
        </div>
      ))}
    </div>
  ),
  "avatar-list": (params) => (
    <div className="flex -space-x-2">
      {Array.from({ length: (params as { count: number }).count }, (_, i) => (
        <div
          key={i}
          className="h-7 w-7 rounded-full border-2 border-solid border-f1-background bg-f1-background-accent-bold"
        />
      ))}
    </div>
  ),
}

const meta = {
  title: "Widgets/Layout/NewHomeLayout",
  component: NewHomeLayout,
  tags: ["autodocs", "experimental"],
  args: { slotRenderers },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NewHomeLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { rightWidgets: [events, teamStatus, clockInWidget] },
}

/**
 * Maximum case — mirrors the custom-home prototype: a populated main column
 * (greeting header, clock-in hero, agents queue, plus board widgets) and a full
 * right rail. Standard slots use `defaultSlotRenderers`; bespoke ones
 * (clock-in, carousel, avatar-list) come from the story's `slotRenderers`.
 */
export const Maximum: Story = {
  args: {
    header: <Greeting />,
    children: (
      <div className="flex flex-col gap-4">
        <ClockInHero />
        <AgentsQueue />
      </div>
    ),
    leftWidgets: [events, todayInFactorial, openPositions],
    rightWidgets: [clockInWidget, teamStatus, holidays, companyLinks],
  },
}
