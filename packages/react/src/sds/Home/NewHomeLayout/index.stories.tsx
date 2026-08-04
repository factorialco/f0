import { useState, type ReactNode } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { F0Card } from "@/components/F0Card"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { One } from "@/icons/ai"
import {
  Add,
  Calendar,
  ChevronRight,
  Clock,
  Comment,
  Envelope,
  File,
  PalmTree,
  Pencil,
  Receipt,
  SolidPlay,
  Target,
} from "@/icons/app"

import { CalendarEventList } from "@/experimental/Widgets/Content/CalendarEventList"
import { Widget } from "@/experimental/Widgets/Widget"
import { SlotWidget } from "../SlotWidget"
import { WidgetCatalog } from "../WidgetCatalog"
import { NewHomeLayout } from "./index"

/* =============================== main column =============================== */

/**
 * The Ask-AI greeting on one line: avatar, the gradient welcome phrase, the muted
 * question. The gradient stops are F0's own welcome-phrase literals.
 */
const Greeting = () => (
  <div className="flex flex-col items-center gap-3 py-2">
    <F0AvatarPerson firstName="Hellen" lastName="R" size="lg" />
    <p className="m-0 text-2xl font-semibold">
      <span
        style={{
          backgroundImage:
            "linear-gradient(to right, #E55619, #E51943, #A1ADE5)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Good Morning, Hellen.
      </span>{" "}
      <span className="text-f1-foreground-secondary">
        What can I do for you?
      </span>
    </p>
  </div>
)

const SHORTCUTS: Array<{ icon: IconType; title: string }> = [
  { icon: PalmTree, title: "Request Time Off" },
  { icon: Calendar, title: "Request Leave" },
  { icon: Receipt, title: "Add an Expense" },
  { icon: File, title: "View Last Payslip" },
]

/** Shortcuts as real F0Cards, icon through the card's own avatar slot. */
const ShortcutCards = () => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
    {SHORTCUTS.map((s) => (
      <F0Card
        key={s.title}
        title={s.title}
        avatar={{ type: "icon", icon: s.icon }}
        onClick={() => {}}
        fullHeight
      />
    ))}
  </div>
)

type FeedRowProps = {
  icon: IconType
  title: string
  subtitle?: string
  unread?: boolean
  tag?: ReactNode
}

/** One feed row: domain glyph, title + subtitle, optional tag, chevron. */
const FeedRow = ({ icon, title, subtitle, unread, tag }: FeedRowProps) => (
  <div className="flex cursor-pointer items-center gap-3 p-3 hover:bg-f1-background-tertiary">
    <div className="relative shrink-0">
      <F0AvatarIcon icon={icon} size="lg" />
      {unread ? (
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold" />
      ) : null}
    </div>
    <div className="min-w-0 flex-1">
      <div className="truncate font-medium text-f1-foreground">{title}</div>
      {subtitle ? (
        <div className="truncate text-base text-f1-foreground-secondary">
          {subtitle}
        </div>
      ) : null}
    </div>
    {tag}
    <F0Icon icon={ChevronRight} size="sm" color="secondary" />
  </div>
)

const FeedSection = ({
  label,
  rows,
  viewMore,
}: {
  label?: string
  rows: FeedRowProps[]
  viewMore?: number
}) => (
  <div className="flex flex-col gap-2">
    {label ? (
      <h3 className="m-0 text-lg font-semibold text-f1-foreground-secondary">
        {label}
      </h3>
    ) : null}
    <div className="flex flex-col divide-y divide-solid divide-f1-border-secondary overflow-hidden rounded-xl border border-solid border-f1-border">
      {rows.map((r) => (
        <FeedRow key={r.title} {...r} />
      ))}
    </div>
    {viewMore ? (
      <div className="flex justify-end pt-1">
        <F0Button
          variant="outline"
          size="sm"
          label={`View more (${viewMore})`}
          onClick={() => {}}
        />
      </div>
    ) : null}
  </div>
)

const MainColumn = () => (
  <>
    <Greeting />
    <ShortcutCards />
    <FeedSection
      label="Needs you"
      viewMore={12}
      rows={[
        {
          icon: PalmTree,
          title: "Request time off",
          subtitle: "You have 5 days of leave expiring next month.",
        },
        {
          icon: Clock,
          title: "Missing clock-out",
          subtitle: "You clocked in but never clocked out yesterday.",
        },
        {
          icon: Receipt,
          title: "Submit an expense",
          subtitle: "Snap a receipt and I'll file the expense.",
        },
        {
          icon: Comment,
          title: "Ask HR anything",
          subtitle: "Get a policy answer, or have it raised with HR.",
        },
        {
          icon: Target,
          title: "Draft my self-review",
          subtitle: "Turn your bullet points into review-ready text.",
        },
        { icon: File, title: "Contract to sign", subtitle: "Q3 addendum" },
      ]}
    />
    <FeedSection
      label="One working for you"
      rows={[
        {
          icon: One,
          unread: true,
          title: "Parental leave policy",
          subtitle: "Answer ready with sources",
          tag: <F0TagStatus text="Answer ready" variant="positive" />,
        },
      ]}
    />
  </>
)

/* ================================ side rail ================================ */

/**
 * The prototype's Clock in tile, verbatim composition: state + running total on
 * one heading line, the day as a progress bar, started/left below it, and the
 * location selector + brand clock-in control on the last line — inside the f0
 * `Widget` frame (the only allowed widget wrapper).
 */
const ClockInCard = () => (
  <Widget
    fullHeight
    header={{
      title: "Clock in",
      link: { title: "Time tracking", onClick: () => {} },
    }}
  >
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <span className="text-xl font-semibold text-f1-foreground">
          Clocked out
        </span>
        <span className="text-xl font-semibold tabular-nums text-f1-foreground">
          0:00
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-f1-background-secondary" />
      <div className="flex justify-between text-base text-f1-foreground-secondary">
        <span>15:54</span>
        <span>8h 00m left</span>
      </div>
      <div className="flex items-center justify-between pt-1">
        <F0ButtonDropdown
          mode="dropdown"
          trigger="Remote"
          items={[
            { label: "Remote", value: "remote" },
            { label: "Office", value: "office" },
          ]}
          onClick={() => {}}
        />
        <F0Button label="Clock in" icon={SolidPlay} onClick={() => {}} />
      </div>
    </div>
  </Widget>
)

const COMMS = [
  {
    title: "Welcome to the August onboarding",
    time: "9:12",
    unread: true,
    who: ["Maya", "Ortiz"],
  },
  {
    title: "Deploy 2026.7.3 is live 🚀",
    time: "8:47",
    unread: true,
    who: ["Leo", "Costa"],
  },
  {
    title: "10,000 customers and counting",
    time: "Yesterday",
    unread: false,
    who: ["Ana", "Prat"],
  },
  {
    title: "Q3 self-reviews due Friday",
    time: "Jul 21",
    unread: true,
    who: ["Jon", "Vidal"],
  },
  {
    title: "Summer office hours ☀️",
    time: "Jul 18",
    unread: false,
    who: ["Mar", "Soler"],
  },
]

const CommunicationsCard = () => (
  <Widget
    header={{
      title: "Communications",
      link: { title: "Open", onClick: () => {} },
    }}
  >
    <div className="flex flex-col">
      {COMMS.map((c) => (
        <div
          key={c.title}
          className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-f1-background-tertiary"
        >
          <div className="relative shrink-0">
            <F0AvatarIcon icon={Envelope} size="md" />
            {c.unread ? (
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-f1-background-accent-bold" />
            ) : null}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-f1-foreground">{c.title}</div>
            <div className="text-base text-f1-foreground-secondary">
              {c.time}
            </div>
          </div>
          <F0AvatarPerson firstName={c.who[0]} lastName={c.who[1]} size="sm" />
        </div>
      ))}
    </div>
  </Widget>
)

/** Events through f0's own CalendarEventList — color band + date avatars. */
const EventsCard = () => (
  <Widget
    header={{
      title: "Events",
      count: 8,
      link: { title: "Calendar", onClick: () => {} },
    }}
  >
    <CalendarEventList
      showAllItems
      events={[
        {
          title: "Sarah's birthday",
          subtitle: "Turns 30 🎉",
          description: "",
          isPending: false,
          color: "#F59E0B",
          fromDate: new Date(2026, 6, 24),
        },
        {
          title: "Company holiday",
          subtitle: "2 days off",
          description: "",
          isPending: false,
          color: "#10B981",
          fromDate: new Date(2026, 6, 30),
          toDate: new Date(2026, 6, 31),
        },
        {
          title: "Team offsite",
          subtitle: "Costa Brava · not confirmed",
          description: "",
          isPending: false,
          color: "#14B8A6",
          fromDate: new Date(2026, 7, 3),
          toDate: new Date(2026, 7, 4),
        },
        {
          title: "Monthly all-hands",
          subtitle: "Q3 roadmap update",
          description: "",
          isPending: false,
          color: "#6366F1",
          fromDate: new Date(2026, 7, 7),
        },
      ]}
    />
  </Widget>
)

const Rail = () => (
  <>
    <ClockInCard />
    <CommunicationsCard />
    <EventsCard />
  </>
)

/* ============================ add-widget catalog ============================ */

/**
 * The catalog the picker offers. Every preview is the REAL widget — the same
 * node the rail renders — so what you preview is what gets added.
 */
const CATALOG = [
  { id: "clock-in", title: "Clock in", icon: Clock, preview: <ClockInCard /> },
  {
    id: "comms",
    title: "Communications",
    icon: Envelope,
    preview: <CommunicationsCard />,
  },
  { id: "events", title: "Events", icon: Calendar, preview: <EventsCard /> },
  {
    id: "time-off",
    title: "Time off",
    icon: PalmTree,
    preview: (
      <SlotWidget
        header={{ title: "Time off" }}
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "Days left", content: "12" }] },
          },
        ]}
      />
    ),
  },
  {
    id: "tasks",
    title: "Tasks",
    icon: File,
    preview: (
      <SlotWidget
        header={{ title: "Tasks", count: 3 }}
        slots={[
          {
            visualization: "list",
            params: {
              showAllItems: true,
              items: [
                { id: "1", title: "Sign the Q3 addendum" },
                { id: "2", title: "Review expense report" },
                { id: "3", title: "Approve time off" },
              ],
            },
          },
        ]}
      />
    ),
  },
  {
    id: "goals",
    title: "Goals",
    icon: Target,
    preview: (
      <SlotWidget
        header={{ title: "Goals" }}
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "On track", content: "4/5" }] },
          },
        ]}
      />
    ),
  },
]

const Home = () => {
  const [open, setOpen] = useState(false)
  const [side, setSide] = useState<"right" | "center">("center")
  const [editing, setEditing] = useState(false)
  return (
    <div className="p-6">
      <NewHomeLayout
        aside={<Rail />}
        editing={editing}
        onRemoveWidget={() => {}}
        onClickAddNewWidget={(s) => {
          setSide(s)
          setOpen(true)
        }}
      >
        <MainColumn />
      </NewHomeLayout>
      <div className="flex justify-center pt-4">
        <F0Button
          variant="outline"
          icon={editing ? Add : Pencil}
          label={editing ? "Done" : "Edit Home"}
          onClick={() => setEditing((e) => !e)}
        />
      </div>
      <WidgetCatalog
        isOpen={open}
        onClose={() => setOpen(false)}
        widgets={CATALOG}
        onAdd={() => setOpen(false)}
        previewWidth={side === "right" ? 396 : 768}
      />
    </div>
  )
}

const meta = {
  title: "Home/NewHomeLayout",
  component: NewHomeLayout,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NewHomeLayout>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The redesigned Home, mirroring the custom-home prototype's Feed page (v2):
 * a centered reading-column main (Ask-AI greeting, shortcut F0Cards, the ranked
 * "Needs you" / "One working for you" feed) next to a fixed 396px rail (Clock in,
 * Communications, Events — every widget wrapped in the f0 `Widget` frame), no
 * divider between columns. Both columns end in "+ Add widget"
 * (`onClickAddNewWidget`), which opens the `WidgetCatalog` dialog; "Edit Home"
 * toggles the per-widget remove chrome.
 */
export const Default: Story = {
  render: () => <Home />,
}
