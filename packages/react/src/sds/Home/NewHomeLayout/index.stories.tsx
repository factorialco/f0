import { useEffect, useRef, useState, type ReactNode } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { f0FormField } from "@/patterns/F0Form"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button } from "@/components/F0Button"
import { F0Card } from "@/components/F0Card"
import { F0Heading } from "@/components/F0Heading"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { One } from "@/icons/ai"
import {
  Building,
  Calendar,
  ChartVerticalBars,
  Check,
  ChevronRight,
  Clock,
  Comment,
  Envelope,
  ExternalLink,
  File,
  Globe,
  Home as HomeIcon,
  PalmTree,
  Pencil,
  Person,
  Receipt,
  Search,
  Settings,
  SolidPause,
  SolidPlay,
  Target,
  Timer,
} from "@/icons/app"
import { F0AiChatTextArea } from "@/kits/ai/F0AiChatTextArea"
import { type WelcomeScreenSuggestion } from "@/kits/ai/F0AiChat/types"
import { F0Box } from "@/lib/F0Box"

import {
  ClockInControls,
  type ClockInProject,
} from "../ClockIn/ClockInControls"
import { type ClockInStatus } from "../ClockIn/ClockInGraph"
import {
  fromParams,
  homeSlot,
  type HomeWidgetItem,
  type HomeWidgetRailAction,
  listSlot,
  resolveWidgetHeader,
  type SlotRenderers,
  widgetTitle,
} from "../slotRenderers"
import { type WidgetContainerSide } from "../WidgetContainer"
import { WidgetCatalog, type WidgetCatalogGroup } from "../WidgetCatalog"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { SidebarFooter } from "@/patterns/Navigation/Sidebar/Footer"
import * as SidebarFooterStories from "@/patterns/Navigation/Sidebar/Footer/index.stories"
import { SidebarHeader } from "@/patterns/Navigation/Sidebar/Header"
import * as SidebarHeaderStories from "@/patterns/Navigation/Sidebar/Header/index.stories"
import { Menu as SidebarMenu } from "@/patterns/Navigation/Sidebar/Menu"
import * as SidebarMenuStories from "@/patterns/Navigation/Sidebar/Menu/index.stories"

import { NewHomeLayout } from "./index"

/* =============================== main column =============================== */

/* --------------------------------- greeting -------------------------------- */

/** `xl` avatars — 56px, which is what the notch below is cut for. */
const GREETING_AVATAR_PX = 56
/** How far the person's avatar rides over the company's. */
const GREETING_AVATAR_OVERLAP_PX = 10
/**
 * The notch cut out of the leading avatar for the one overlapping it: a circle
 * centred on that avatar (its own centre, less the overlap) with 2px of air
 * around it, so the two read as a cluster rather than as one card on another.
 *
 * A MASK rather than a ring on the top avatar: the gap has to show whatever the
 * greeting is sitting on — here the page's own gradient — and a ring can only
 * paint a colour.
 */
const GREETING_NOTCH = {
  x: GREETING_AVATAR_PX - GREETING_AVATAR_OVERLAP_PX + GREETING_AVATAR_PX / 2,
  y: GREETING_AVATAR_PX / 2,
  r: GREETING_AVATAR_PX / 2 + 2,
}

/**
 * WHOSE HOME THIS IS: the company, and the person reading it, overlapped.
 *
 * Two `F0Avatar`s rather than an `F0AvatarList`, which is the component for a
 * cluster and would own both the overlap and the notch: it stops at `md` (32px),
 * and it takes ONE avatar `type` for the whole row — this pair is a company
 * square under a round person, at 56px. Give the list an `xl` size and per-item
 * types and this becomes one `F0AvatarList`.
 */
const GreetingAvatars = () => (
  <F0Box display="flex" flexDirection="row" alignItems="center">
    <div
      className="flex"
      style={{
        maskImage: `radial-gradient(circle at ${GREETING_NOTCH.x}px ${GREETING_NOTCH.y}px, transparent ${GREETING_NOTCH.r}px, #000 ${GREETING_NOTCH.r + 0.5}px)`,
      }}
    >
      <F0Avatar size="xl" avatar={{ type: "company", name: "Factorial" }} />
    </div>
    <div className="flex" style={{ marginLeft: -GREETING_AVATAR_OVERLAP_PX }}>
      <F0Avatar
        size="xl"
        avatar={{
          type: "person",
          firstName: "Hellen",
          lastName: "the HR",
          src: "https://i.pravatar.cc/120?img=45",
        }}
      />
    </div>
  </F0Box>
)

/**
 * The Ask-AI greeting: the company/person cluster over the welcome phrase.
 *
 * TWO HEADINGS, not one, in a wrapping row: each sentence wraps as a unit, so a
 * narrow column breaks between them rather than mid-question. `F0Text` cannot
 * carry this type — its variants stop at body copy — so the phrase is
 * `F0Heading`'s `heading-large` (22px/600), which is exactly the design's.
 */
const Greeting = () => (
  <F0Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    gap="md"
    paddingBottom="2xl"
  >
    <GreetingAvatars />
    <F0Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap="xs"
    >
      <F0Heading
        variant="heading-large"
        align="center"
        content="Good Morning, Hellen."
      />
      <F0Heading
        variant="heading-large"
        as="h2"
        align="center"
        content="What can I do for you?"
      />
    </F0Box>
  </F0Box>
)

/* --------------------------------- composer -------------------------------- */

const HOME_PLACEHOLDERS = [
  "Ask for time off, an expense, a payslip…",
  "Who's out of office this week?",
  "Draft my self-review from these bullet points…",
  "What's left of my leave this year?",
]

/**
 * The starter prompts, INSIDE the field (`welcomeScreenSuggestionsPlacement`):
 * on Home the composer is the page's own hero, so the suggestions belong in its
 * foot rather than standing above it as they do in the chat panel.
 */
const HOME_SUGGESTIONS: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [
      {
        title: "My hours this month",
        prompt:
          "Summarize the hours I have clocked this month against my contract, and flag any day that is missing a clock-out.",
      },
      {
        title: "Team leave next month",
        prompt: "Show who in my team is on leave next month, week by week.",
      },
    ],
  },
  {
    icon: Search,
    label: "Find",
    items: [
      {
        title: "Who's out of office this week?",
        prompt:
          "List everyone on time-off or sick leave between today and the end of the week.",
      },
      { title: "My last payslip", prompt: "Open my most recent payslip." },
    ],
  },
  {
    icon: Pencil,
    label: "Create",
    items: [
      {
        title: "Request time off",
        prompt: "Request time off for the last week of August.",
      },
      {
        title: "Draft my self-review",
        prompt:
          "Turn these bullet points into review-ready text for my self-review.",
      },
    ],
  },
]

/**
 * Home's composer: the chat's own field, with `padding="none"` so the gutter is
 * the greeting's rather than the chat panel's, and its suggestions in the
 * field's foot.
 *
 * `isWelcomeScreen` is what Home always is — there is no conversation here; a
 * submitted prompt is what opens the chat, which in a story is a logged payload.
 * The `xs` inset is the field's focus glow, which the main column would otherwise
 * clip against its own scrollport.
 */
const HomeComposer = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <F0Box padding="xs">
      <F0AiChatTextArea
        ref={ref}
        padding="none"
        isWelcomeScreen
        placeholders={HOME_PLACEHOLDERS}
        welcomeScreenSuggestions={HOME_SUGGESTIONS}
        welcomeScreenSuggestionsPlacement="inside"
        onSuggestionClick={(item) =>
          console.log("suggestion", item.prompt ?? item.title)
        }
        onSubmit={(payload) => console.log("submit", payload)}
      />
    </F0Box>
  )
}

/**
 * The greeting and the composer as ONE block of the main column: the composer is
 * the greeting's other half (it owns no gutter of its own), and the column's
 * stagger should bring them in together. It also keeps the block count where the
 * layout's `stackedPinsAfter` default expects it — greeting, then shortcuts.
 */
const HomeHero = () => (
  <F0Box display="flex" flexDirection="column">
    <Greeting />
    <HomeComposer />
  </F0Box>
)

const SHORTCUTS: Array<{ icon: IconType; title: string }> = [
  { icon: PalmTree, title: "Request Time Off" },
  { icon: Calendar, title: "Request Leave" },
  { icon: Receipt, title: "Add an Expense" },
  { icon: File, title: "View Last Payslip" },
]

/** Shortcuts as real F0Cards, icon through the card's own avatar slot. */
const ShortcutCards = () => (
  <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-4">
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
  <div className="flex cursor-pointer items-center gap-3 border-x-0 p-3 hover:bg-f1-background-tertiary">
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
    <div className="flex flex-col divide-y divide-solid divide-f1-border-secondary overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background">
      {rows.map((r) => (
        <FeedRow key={r.title} {...r} />
      ))}
    </div>
    {viewMore ? (
      <div className="flex justify-end pt-1">
        <F0Button
          variant="neutral"
          size="sm"
          label={`View more (${viewMore})`}
          onClick={() => {}}
        />
      </div>
    ) : null}
  </div>
)

// An ARRAY, not a fragment: the layout inserts pinned widgets BETWEEN these
// blocks when it stacks, and `Children.toArray` only sees seams in an array.
const mainColumnBlocks = () => [
  <HomeHero key="hero" />,
  <ShortcutCards key="shortcuts" />,
  <FeedSection
    key="needs-you"
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
  />,
  <FeedSection
    key="one-working"
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
  />,
]

/* ================================ side rail ================================ */

const CLOCK_IN_LABELS = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Take a break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
  searchProject: "Search projects",
  paid: "Paid",
  unpaid: "Unpaid",
}

const CLOCK_IN_LOCATIONS = [
  { id: "remote", name: "Remote", icon: HomeIcon },
  { id: "office", name: "Office", icon: Building },
]

/**
 * A real-sized book of work: 10 projects, 50 selectable subprojects. Past the
 * picker's 20-per-page window, so in the rail the project dropdown really pages
 * as you scroll and its search box has something to narrow.
 */
const CLOCK_IN_PROJECTS: ClockInProject[] = [
  {
    name: "Design system",
    parts: ["Components", "Tokens", "Documentation", "Icons", "Audits"],
  },
  {
    name: "Onboarding revamp",
    parts: ["Research", "Flows", "Copy", "Analytics", "Rollout"],
  },
  {
    name: "Payroll engine",
    parts: [
      "Calculations",
      "Filings",
      "Reconciliation",
      "Reporting",
      "Migrations",
    ],
  },
  {
    name: "Mobile app",
    parts: ["iOS", "Android", "Release train", "Crash triage", "Notifications"],
  },
  {
    name: "Recruitment",
    parts: ["Job board", "Pipelines", "Scorecards", "Referrals", "Offers"],
  },
  {
    name: "Data platform",
    parts: [
      "Ingestion",
      "Warehouse",
      "Dashboards",
      "Governance",
      "Experiments",
    ],
  },
  {
    name: "Billing",
    parts: ["Invoicing", "Dunning", "Taxes", "Plans", "Refunds"],
  },
  {
    name: "Customer support",
    parts: ["Inbox", "Macros", "Escalations", "Knowledge base", "Reporting"],
  },
  {
    name: "Security",
    parts: [
      "Access reviews",
      "Pen tests",
      "Incident drills",
      "Compliance",
      "Training",
    ],
  },
  {
    name: "Internal tooling",
    parts: ["Admin", "Feature flags", "Runbooks", "Alerting", "Cost control"],
  },
].map(({ name, parts }) => ({
  id: name.toLowerCase().replace(/ /g, "-"),
  name,
  subprojects: parts.map((part) => ({
    id: `${name}-${part}`.toLowerCase().replace(/ /g, "-"),
    name: part,
  })),
}))

/**
 * The rail's Clock in tile: F0's own `ClockInControls` in its `horizontal-bar`
 * variant — state + running total on one heading line, the day as a horizontal
 * bar, started/left below it, and the location selector + clock-in control on
 * the last line. This is the BESPOKE `clock-in` slot's renderer; the `Widget`
 * frame + header come from `SlotWidget`, like every other widget.
 *
 * ONE component covers both the content and the placeholder: `loading` draws the
 * tile's own skeleton, shaped like this variant, so the slot's `skeleton` is
 * this same render rather than a hand-built stand-in that has to be kept in
 * step with it.
 */
const ClockInTile = ({
  loading,
  day,
  onClockIn,
  onClockOut,
  onBreak,
}: {
  loading?: boolean
  /**
   * The day the tile is showing. `ClockInControls` reads its own status off the
   * LAST entry's `variant`, so the day is the state — see `clockInDay` below.
   */
  day?: ClockInDay
  onClockIn?: () => void
  onClockOut?: () => void
  onBreak?: () => void
}) => {
  const [locationId, setLocationId] = useState("remote")
  const [projectId, setProjectId] = useState<string | undefined>()

  return (
    <ClockInControls
      variant="horizontal-bar"
      loading={loading}
      labels={CLOCK_IN_LABELS}
      data={day?.data ?? []}
      trackedMinutes={day?.trackedMinutes ?? 0}
      remainingMinutes={8 * 60}
      locations={CLOCK_IN_LOCATIONS}
      locationId={locationId}
      onChangeLocationId={setLocationId}
      projects={CLOCK_IN_PROJECTS}
      projectId={projectId}
      onChangeProjectId={setProjectId}
      canShowBreakButton
      onClockIn={onClockIn ?? (() => {})}
      onClockOut={onClockOut ?? (() => {})}
      onBreak={onBreak}
    />
  )
}

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

const RAIL_EVENTS = [
  {
    title: "Sarah's birthday",
    subtitle: "Turns 30 🎉",
    description: "Sarah Nowak turns 30 — the team is signing a card.",
    isPending: false,
    color: "#F59E0B",
    fromDate: new Date(2026, 6, 24),
  },
  {
    title: "Company holiday",
    subtitle: "2 days off",
    description: "Offices closed Thursday and Friday for the summer break.",
    isPending: false,
    color: "#10B981",
    fromDate: new Date(2026, 6, 30),
    toDate: new Date(2026, 6, 31),
  },
  {
    title: "Team offsite",
    subtitle: "Costa Brava · not confirmed",
    description: "Two days in Costa Brava — waiting on final numbers.",
    isPending: false,
    color: "#14B8A6",
    fromDate: new Date(2026, 7, 3),
    toDate: new Date(2026, 7, 4),
  },
  {
    title: "Monthly all-hands",
    subtitle: "Q3 roadmap update",
    description: "Q3 roadmap and hiring update — bring questions.",
    isPending: false,
    color: "#6366F1",
    fromDate: new Date(2026, 7, 7),
  },
]

/* ===================== what makes a widget CONFIGURABLE ===================== */

/** What the teams field's datasource serves. */
type Team = { id: string; name: string; people: number }

const TEAMS: Team[] = [
  { id: "design", name: "Design", people: 8 },
  { id: "engineering", name: "Engineering", people: 42 },
  { id: "people", name: "People", people: 6 },
  { id: "sales", name: "Sales", people: 17 },
  { id: "support", name: "Support", people: 11 },
]

/**
 * A DATASOURCE, not a list of options: the field searches it, so the widget can
 * be pointed at things nobody could enumerate at build time (every team in the
 * company). The same definition any F0Form select takes.
 */
const teamsSource = createDataSourceDefinition<Team>({
  dataAdapter: {
    fetchData: async ({ search }) => {
      const needle = search?.toLowerCase()
      return {
        records: needle
          ? TEAMS.filter((team) => team.name.toLowerCase().includes(needle))
          : TEAMS,
      }
    },
  },
})

/**
 * The EVENTS widget's params, as a plain F0Form schema — params belong on the
 * widgets a Home already has, not on a widget invented to carry them.
 *
 * Every field type the dialog can draw is here: an enum (select), a
 * datasource-backed MULTI select, a number, a date and a datetime. REQUIRED vs
 * OPTIONAL is just zod: `period`, `teams` and `maxEvents` must be set — the
 * dialog won't save without them — while `since` and `digestAt` are `.optional()`
 * and can be left alone.
 */
const EVENTS_PARAMS = z.object({
  period: f0FormField(z.enum(["week", "month", "quarter"]), {
    label: "Period",
    options: [
      { value: "week", label: "This week" },
      { value: "month", label: "This month" },
      { value: "quarter", label: "This quarter" },
    ],
  }),
  teams: f0FormField(z.array(z.string()).min(1), {
    label: "Teams",
    placeholder: "Pick at least one team",
    showSearchBox: true,
    multiple: true,
    source: teamsSource,
    mapOptions: (team: Team) => ({
      value: team.id,
      label: team.name,
      description: `${team.people} people`,
    }),
  }),
  maxEvents: f0FormField(z.number().min(1).max(8), {
    label: "Events to show",
  }),
  since: f0FormField(z.date().optional(), {
    label: "Only after",
  }),
  digestAt: f0FormField(z.date().optional(), {
    label: "Send me a digest at",
    fieldType: "datetime",
  }),
})

type EventsParams = z.infer<typeof EVENTS_PARAMS>

const PERIOD_LABEL: Record<string, string> = {
  week: "this week",
  month: "this month",
  quarter: "this quarter",
}

const teamNames = (ids: string[] = []) =>
  ids.map((id) => TEAMS.find((team) => team.id === id)?.name ?? id).join(", ")

/**
 * The Events widget, BUILT FROM ITS PARAMS. Its `title` and `info` are functions
 * of them — the card names the teams it is showing, and its info side explains
 * what the list covers — while the slot's events are cut to `maxEvents` HERE, in
 * the app, which is the only place that knows where events come from.
 */
const eventsWidget = (params: EventsParams): HomeWidgetItem => {
  const shown = RAIL_EVENTS.slice(0, params.maxEvents)
  return {
    id: "events",
    icon: Calendar,
    paramsSchema: EVENTS_PARAMS,
    params,
    header: {
      title: fromParams(EVENTS_PARAMS, (p) =>
        p.teams?.length ? `Events · ${teamNames(p.teams)}` : "Events"
      ),
      info: fromParams(
        EVENTS_PARAMS,
        (p) =>
          `The next ${p.maxEvents ?? 0} events ${PERIOD_LABEL[p.period ?? "week"]} for ${teamNames(p.teams) || "no team"}${
            p.since ? `, from ${p.since.toLocaleDateString()} on` : ""
          }.`
      ),
      count: shown.length,
      // A `#` destination — a fragment on the page the app is already on. It
      // must NOT open a new tab (see `isExternalHref`).
      link: { title: "Go to Calendar", url: "/calendar#core.events" },
    },
    slots: [homeSlot("event-list", { showAllItems: true, events: shown })],
  }
}

/** The Events widget as a Home the user already set up would have it. */
const EVENTS_DEFAULTS: EventsParams = {
  period: "week",
  teams: ["design", "engineering"],
  maxEvents: 4,
  since: undefined,
  digestAt: undefined,
}

/**
 * The rail as DATA — HomeWidgetItems with their catalog `icon`, so the layout
 * can collapse them to an avatar strip when it runs out of width. The bespoke
 * `clock-in` slot's renderer is passed once at the layout level.
 */
const RIGHT_WIDGETS: HomeWidgetItem[] = [
  {
    id: "clock-in",
    icon: Clock,
    // Pinned: you always want the clock, so it can't be dragged or removed.
    locked: true,
    // A `url`, not an `onClick`: the footer control is then a REAL link — an
    // anchor you can middle-click and copy — and this one stays in the tab
    // (same host), which is what every in-app destination should do.
    header: {
      title: "Clock in",
      link: { title: "Go to Time tracking", url: "/time-tracking" },
    },
    slots: [{ visualization: "clock-in", params: {} }],
  },
  {
    id: "communications",
    icon: Envelope,
    // Badges the glyph in the collapsed rail: there are unread messages.
    hasUpdates: true,
    header: {
      title: "Communications",
      link: { title: "Go to Communications", url: "/communications" },
    },
    // THIS WIDGET'S OWN actions: they lead its three-dots menu, above the items
    // every widget carries (and above "Remove widget", behind its separator).
    actions: [
      { label: "Mark all as read", icon: Check, onClick: () => {} },
      { label: "Notification settings", icon: Settings, onClick: () => {} },
    ],
    slots: [
      listSlot(
        { left: "module", descriptionRequired: true, clickBehavior: "link" },
        COMMS.map((c, index) => ({
          id: String(index),
          module: "communities" as const,
          title: c.title,
          description: c.time,
          href: `/posts/${index}`,
        }))
      ),
    ],
  },
  // The CONFIGURABLE one: it declares a `paramsSchema`, so its three-dots menu
  // carries "Edit params" — and its title, its info and the events it lists all
  // follow what you set there.
  eventsWidget(EVENTS_DEFAULTS),
  // ANOTHER HOST, both flavors: the widget's link and every row's `href` point
  // off this site. These are the only links that open a new tab — the widgets
  // above navigate in place, fragment and all.
  {
    id: "resources",
    icon: Globe,
    header: {
      title: "Resources",
      link: { title: "Go to factorial.co", url: "https://factorial.co" },
    },
    slots: [
      // `compact` keeps the rows one-line even with 3 items — every row's
      // description lives in a tooltip instead (hover a row for it).
      listSlot(
        {
          left: "icon",
          descriptionRequired: true,
          compact: true,
          clickBehavior: "link",
        },
        [
          {
            id: "handbook",
            title: "Employee handbook",
            description: "Policies, benefits and how-tos",
            avatar: { icon: File },
            href: "https://factorial.co/employee-handbook",
          },
          {
            id: "mdn",
            title: "MDN Web Docs",
            description: "Reference for web platform APIs",
            avatar: { icon: Globe },
            href: "https://developer.mozilla.org",
          },
          {
            id: "status",
            title: "Factorial status page",
            description: "Live uptime and incident history",
            avatar: { icon: ExternalLink },
            href: "https://status.factorial.co",
          },
        ]
      ),
    ],
  },
]

/**
 * The bespoke slot renderers this Home supplies — only `clock-in` here; every
 * other slot the rail and the feed use is a kit default. It declares its own
 * `skeleton` beside its `render`, so the tile has a placeholder shaped like
 * itself while the rail loads — and both are the SAME component, told whether
 * its data has landed (`ClockInControls`' `loading`).
 */
const SLOT_RENDERERS: SlotRenderers = {
  "clock-in": {
    render: () => <ClockInTile />,
    skeleton: () => <ClockInTile loading />,
  },
}

/**
 * The rail's widgets BEFORE their data lands: same widgets, same slots (a
 * `list` keeps its schema — that's what shapes its placeholder rows), no items,
 * and each slot declaring how many are coming so the loading rail stands as
 * tall as the loaded one.
 */
const LOADING_RIGHT_WIDGETS: HomeWidgetItem[] = RIGHT_WIDGETS.map((widget) => ({
  ...widget,
  loading: true,
  slots: widget.slots.map((slot) => {
    const params = slot.params as { items?: unknown[]; events?: unknown[] }
    const items = params.items ?? params.events
    return {
      ...slot,
      expectedItemsCount: items?.length,
      params: params.events
        ? { ...params, events: [] }
        : { ...params, items: [] },
    }
  }),
}))

/* ============================ add-widget catalog ============================ */

/**
 * The catalog the picker offers. Every preview is the WIDGET ITSELF, handed over
 * as data — the picker draws it through the same `SlotWidget` the rail uses, so
 * what you preview is what gets added, down to the spacing.
 */
const CATALOG_ITEMS = [
  ...RIGHT_WIDGETS.map((widget) => ({
    id: widget.id,
    // `widgetTitle` rather than the header's own: a configurable widget's title
    // can be a function of its params, and a catalog row needs the text.
    title: widgetTitle(widget),
    icon: widget.icon!,
    // The rail's own widget, unchanged. Its `info` comes with it.
    preview: widget,
  })),
  {
    id: "time-off",
    title: "Time off",
    icon: PalmTree,
    preview: {
      id: "time-off",
      header: { title: "Time off" },
      slots: [
        {
          visualization: "indicators",
          params: { items: [{ label: "Days left", content: "12" }] },
        },
      ],
    },
  },
  {
    id: "tasks",
    title: "Tasks",
    icon: File,
    preview: {
      id: "tasks",
      header: { title: "Tasks", count: 3 },
      slots: [
        listSlot({ clickBehavior: "link" }, [
          { id: "1", title: "Sign the Q3 addendum", href: "/tasks/1" },
          { id: "2", title: "Review expense report", href: "/tasks/2" },
          { id: "3", title: "Approve time off", href: "/tasks/3" },
        ]),
      ],
    },
  },
  {
    id: "goals",
    title: "Goals",
    icon: Target,
    preview: {
      id: "goals",
      header: { title: "Goals" },
      slots: [
        {
          visualization: "indicators",
          params: { items: [{ label: "On track", content: "4/5" }] },
        },
      ],
    },
  },
  // The schema showcase: each of these leans on a different `list` schema —
  // what you preview here is exactly what the slot vocabulary can say.
  {
    id: "team",
    title: "Team",
    icon: Person,
    preview: {
      id: "team",
      header: { title: "Team", count: 6 },
      slots: [
        // Alert left + the people themselves trailing: two-line rows (md).
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
      ],
    },
  },
  {
    id: "people",
    title: "People",
    icon: Person,
    preview: {
      id: "people",
      header: { title: "New joiners", count: 7 },
      slots: [
        // maxVisibleItems: 3 of 7 rows, the rest behind "View more (4)".
        listSlot(
          {
            left: "person",
            subtitleRequired: true,
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
            subtitle: "Engineering",
            avatar: {
              firstName: name.split(" ")[0],
              lastName: name.split(" ")[1],
            },
            href: `/employees/${index}`,
          }))
        ),
      ],
    },
  },
  {
    id: "documents",
    title: "Documents",
    icon: File,
    preview: {
      id: "documents",
      header: { title: "Documents" },
      alert: "2 documents need signing",
      action: { label: "Sign now", onClick: () => {} },
      slots: [
        // File avatars, two-line rows (md).
        listSlot(
          { left: "file", descriptionRequired: true, clickBehavior: "link" },
          [
            {
              id: "1",
              title: "Q3 addendum.pdf",
              description: "Needs your signature",
              avatar: {
                file: { name: "q3-addendum.pdf", type: "application/pdf" },
              },
              href: "/documents/1",
            },
            {
              id: "2",
              title: "Remote policy.pdf",
              description: "Needs your signature",
              avatar: {
                file: { name: "remote-policy.pdf", type: "application/pdf" },
              },
              href: "/documents/2",
            },
          ]
        ),
      ],
    },
  },
  {
    id: "offices",
    title: "Offices",
    icon: Building,
    preview: {
      id: "offices",
      header: { title: "Offices" },
      slots: [
        // Flag left + counter right: one-line rows (sm).
        listSlot({ left: "flag", right: "counter", clickBehavior: "link" }, [
          {
            id: "es",
            title: "Spain",
            avatar: { flag: "es" },
            count: 24,
            href: "/offices/es",
          },
          {
            id: "pt",
            title: "Portugal",
            avatar: { flag: "pt" },
            count: 9,
            href: "/offices/pt",
          },
        ]),
      ],
    },
  },
]

/**
 * THE PICKER’S DOMAINS, in the order it shows them, each headed by its module’s
 * glyph. The labels are the app’s words: f0’s `modules` registry carries icons,
 * not names.
 */
const CATALOG_GROUPS: WidgetCatalogGroup[] = [
  { id: "time", label: "Time & attendance", module: "time-tracking" },
  { id: "comms", label: "Communication", module: "communities" },
  { id: "calendar", label: "Calendar", module: "calendar" },
  { id: "performance", label: "Performance", module: "goals" },
  { id: "org", label: "Organization", module: "employees" },
  { id: "docs", label: "Documents", module: "documents" },
]

/** Which domain each widget belongs to. `resources` deliberately has none — it
 * lands in the unheaded run after the groups, which is what a widget that fits
 * no domain should do. */
const CATALOG_DOMAIN: Record<string, string> = {
  "clock-in": "time",
  "time-off": "time",
  communications: "comms",
  events: "calendar",
  goals: "performance",
  tasks: "performance",
  team: "org",
  people: "org",
  offices: "org",
  documents: "docs",
}

/** What this Home suggests first. Optional: drop it and the section is gone. */
const RECOMMENDED_IDS = new Set(["clock-in", "events"])

const CATALOG = CATALOG_ITEMS.map((item) => ({
  ...item,
  group: CATALOG_DOMAIN[item.id],
  recommended: RECOMMENDED_IDS.has(item.id),
}))

const Home = () => {
  const [open, setOpen] = useState(false)
  const [side, setSide] = useState<WidgetContainerSide>("main")
  // The configurable widget's params live with the app, next to the rail's
  // order: both are things the user set and the app persists.
  const [eventsParams, setEventsParams] = useState(EVENTS_DEFAULTS)
  const [rail, setRail] = useState(RIGHT_WIDGETS)
  // The widget is REBUILT from its params — that is the app's half of the deal:
  // the layout resolves what the params merely say (title, info), while the
  // slots' data can only come from here.
  const railWidgets = rail.map((widget) =>
    widget.id === "events" ? eventsWidget(eventsParams) : widget
  )
  return (
    <div className="h-full w-full p-6">
      <NewHomeLayout
        rightWidgets={railWidgets}
        slotRenderers={SLOT_RENDERERS}
        editableWidgetContainers={["right"]}
        onRemoveWidget={(id) => setRail((w) => w.filter((x) => x.id !== id))}
        onChangeWidgetParams={(id, params) => {
          if (id === "events") setEventsParams(params as EventsParams)
        }}
        // The preview rebuilds the widget the same way the rail does, so the
        // dialog shows the events the params will really produce — not just the
        // title following along. It hands back the WIDGET; the layout draws it
        // through the same `SlotWidget` the rail uses.
        rebuildWidget={(widget, params) =>
          widget.id === "events" ? eventsWidget(params as EventsParams) : widget
        }
        onReorderWidgets={(_, ids) =>
          setRail((w) => ids.flatMap((id) => w.filter((x) => x.id === id)))
        }
        onClickAddNewWidget={(s) => {
          setSide(s)
          setOpen(true)
        }}
      >
        {mainColumnBlocks()}
      </NewHomeLayout>
      <WidgetCatalog
        isOpen={open}
        onClose={() => setOpen(false)}
        widgets={CATALOG}
        groups={CATALOG_GROUPS}
        onAdd={() => setOpen(false)}
        previewWidth={side === "right" ? 396 : 768}
        // The same map the layout gets — a preview drawn without it would show
        // "No renderer for slot …" for every bespoke visualization.
        slotRenderers={SLOT_RENDERERS}
      />
    </div>
  )
}

/**
 * The page-level strip the app puts above EVERYTHING — the frame's own `banner`
 * row, over the sidebar and the content both, exactly where the
 * "You are seeing X's company view" bar lives in production. Only the height
 * probe below asks for it (`parameters.frameBanner`).
 */
const FrameBanner = () => (
  <div className="flex h-12 flex-row items-center justify-between gap-4 bg-f1-background-info px-4 text-f1-foreground">
    <span>You are seeing Factorial&apos;s company view.</span>
    <span className="flex flex-row items-center gap-1.5 font-medium">
      Factorial Professionals
      <F0Icon icon={ExternalLink} size="sm" />
    </span>
  </div>
)

const meta = {
  title: "Home/NewHomeLayout",
  component: NewHomeLayout,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "fullscreen", docsFullWidth: true },
  decorators: [
    (Story, { parameters }) => (
      <ApplicationFrame
        // The frame's top row, outside the layout entirely: it takes real height
        // off the content area, which is what the height probe is testing.
        banner={parameters.frameBanner ? <FrameBanner /> : undefined}
        sidebar={
          <Sidebar
            header={<SidebarHeader {...SidebarHeaderStories.Default.args} />}
            body={<SidebarMenu {...SidebarMenuStories.Default.args} />}
            footer={<SidebarFooter {...SidebarFooterStories.Default.args} />}
          />
        }
      >
        <Story />
      </ApplicationFrame>
    ),
  ],
} satisfies Meta<typeof NewHomeLayout>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The redesigned Home, mirroring the custom-home prototype's Feed page (v2):
 * a centered reading-column main (Ask-AI greeting, shortcut F0Cards, the ranked
 * "Needs you" / "One working for you" feed) next to a fixed 396px rail (Clock in,
 * Communications, Events — every widget wrapped in the f0 `Widget` frame), no
 * divider between columns. Both columns end in "+ Add widget"
 * (`onClickAddNewWidget`), which opens the `WidgetCatalog` dialog.
 *
 * THERE IS NO EDIT MODE. A widget is removed from the three-dots menu in its own
 * header and moved by dragging the card itself (no handle glyph — the grab
 * cursor is the affordance), at any time; the clock is `locked`, so it offers
 * neither. Each widget's way out sits in its FOOTER as a named button ("Go to
 * Calendar"), since the header's top-right is the menu's.
 */
export const Default: Story = {
  render: () => <Home />,
}

/**
 * A HEIGHT PROBE, not a layout to copy: the same Home with a 48px banner in the
 * frame's own top row — the production "company view" strip — above the sidebar
 * and the content both, entirely outside `NewHomeLayout`.
 *
 * That banner takes its 48px off the content area, so the layout has that much
 * LESS room than in `Default`. Nothing about the page should move: the banner
 * stays put, the sidebar still ends at the window's bottom edge, and the
 * layout's two columns absorb the loss by scrolling a little more inside
 * themselves.
 *
 * If instead the layout keeps sizing itself to the WINDOW rather than to the box
 * it was given, it overshoots by the banner's height, and you can see it: the
 * page starts scrolling as a whole, and the rail's bottom widget, the
 * "+ Add widget" placeholder and the bottom gutter fall past the window's edge.
 */
export const BannerAboveLayout: Story = {
  parameters: { frameBanner: true },
  render: () => <Home />,
}

/**
 * The same Home while the rail waits on its data. A widget declares
 * `loading: true` and every one of its slots draws that visualization's
 * SKELETON instead of its content — the frame, the header and the seams stay,
 * so the card fills in rather than changing shape.
 *
 * How many placeholder items a slot draws is its own `expectedItemsCount`
 * (Communications expects 5 rows, Events 4), which is what keeps the loading
 * rail as tall as the loaded one. `clock-in` is bespoke, so its renderer brings
 * its own skeleton — `ClockInControls` with `loading`, which draws a placeholder
 * shaped like its `horizontal-bar` variant. See `SLOT_RENDERERS` above.
 *
 * The main column is freeform content rather than widgets, so it isn't part of
 * this: only what the layout renders as widgets has a loading state.
 */
export const Loading: Story = {
  render: () => (
    <div className="h-full w-full p-6">
      <NewHomeLayout
        rightWidgets={LOADING_RIGHT_WIDGETS}
        slotRenderers={SLOT_RENDERERS}
      >
        {mainColumnBlocks()}
      </NewHomeLayout>
    </div>
  ),
}

/* ============================= glyph actions ============================= */

/**
 * HOURS AND MINUTES, as a glyph shows them: `7:04`. Seconds are what a stopwatch
 * counts; a working day is read in hours, and the blinking separator is what says
 * it is running — not a digit changing sixty times a minute.
 */
const hhmm = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`
}

/** What `ClockInControls` needs to draw the day — and to know which state it is in. */
type ClockInDay = {
  data: { from: Date; to: Date; variant: ClockInStatus }[]
  trackedMinutes: number
}

/**
 * THE DAY as the three states leave it. `ClockInControls` derives its status from
 * the LAST entry's variant, so "on a break" is a worked stretch followed by a break
 * stretch — the tile then says "On a break" on its own, with no status prop to keep
 * in step with the rail.
 *
 * The clock started `worked + onBreak` seconds ago, so the two readings and the bar
 * describe the same day.
 */
const clockInDay = (
  status: ClockInStatus,
  worked: number,
  onBreak: number,
  now: Date
): ClockInDay => {
  const at = (secondsAgo: number) => new Date(now.getTime() - secondsAgo * 1000)
  const trackedMinutes = Math.floor(worked / 60)

  if (status === "clocked-out") return { data: [], trackedMinutes: 0 }
  if (status === "clocked-in")
    return {
      data: [{ from: at(worked), to: now, variant: "clocked-in" }],
      trackedMinutes,
    }
  return {
    data: [
      { from: at(worked + onBreak), to: at(onBreak), variant: "clocked-in" },
      { from: at(onBreak), to: now, variant: "break" },
    ],
    trackedMinutes,
  }
}

/**
 * THE RAIL'S ONE-CLICK STATE, as time tracking uses it: the clock's glyph is the
 * clock's button, and the day decides which button that is. Click the glyph — or
 * the tile's own controls, which drive the same state — to move between all three.
 *
 * Each state has its own COLOUR, and it is the colour the TILE already uses for
 * it — `CLOCK_IN_COLORS`, the same values its status dot pulses and its bar is
 * drawn in. One word (`tone`) paints the pill and the button together, so the
 * rail says which state you are in before you have read the number, and says it
 * in the same green the card does.
 *
 * - **Clocked out.** The dark slab (`neutral`), holding what the day came to, with
 *   the accent play button on it. Nothing is running, so nothing blinks.
 * - **Clocked in.** A `positive` pill — `--positive-50`, the tile's own green —
 *   with the running total in HOURS AND MINUTES, its separator blinking once a
 *   second the way a clock does (`ticking`), and "Take a break" as a plain chip at
 *   the end of it. The face turns over on the same second (`flashing`), between
 *   the timer and the break it offers.
 * - **On a break.** A `promote` pill — `--promote-50`, the tile's amber — counting
 *   the BREAK, and the button FLASHES between the timer icon and the play
 *   triangle: the colour says paused, the flash asks you to do something about it.
 *
 * Hover any of them and the card floats out as ever — the pill gives its width
 * back while it does, since the card says all of it in full, and the button it
 * leaves behind is the same button it always was.
 *
 * Every reading is HOURS AND MINUTES on a real clock, so they change once a
 * minute. What says "this is running" second to second is the blink, not a digit.
 */
const ClockGlyphActionHome = () => {
  const [status, setStatus] = useState<ClockInStatus>("clocked-in")
  /** Seconds worked today, and seconds into the CURRENT break. */
  const [worked, setWorked] = useState((7 * 60 + 12) * 60)
  const [onBreak, setOnBreak] = useState(0)

  // The story's own clock, whichever counter the state says is running — REAL
  // TIME, a second a second. It is kept in seconds so the day's bar and the
  // tile's total stay in step with the pill, but nothing ever shows them: the
  // glyph is read in hours and minutes, and a figure that moved every second in
  // the corner of the page would be a stopwatch, not a day. In the real Home
  // this is all the app's; the rail only draws the string it is handed.
  useEffect(() => {
    if (status === "clocked-out") return
    const tick = setInterval(() => {
      if (status === "clocked-in") setWorked((seconds) => seconds + 1)
      else setOnBreak((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(tick)
  }, [status])

  const railAction: HomeWidgetRailAction =
    status === "clocked-in"
      ? {
          icon: SolidPause,
          label: "Take a break",
          text: hhmm(worked),
          // THE SAME GREEN THE TILE PULSES: `positive` is `--positive-50`, which
          // is exactly what `CLOCK_IN_COLORS["clocked-in"]` paints the status dot
          // and the day's bar. The glyph and the card are one state, so they are
          // one colour.
          tone: "positive",
          ticking: true,
          // Ticking as well as counting: the icon turns over between the timer
          // and what the button does, so a running day says so twice — the
          // separator's blink and the face's turn, on the same second.
          flashing: true,
          onClick: () => {
            setOnBreak(0)
            setStatus("break")
          },
        }
      : status === "break"
        ? {
            icon: SolidPlay,
            label: "Resume",
            text: hhmm(onBreak),
            // …and the same amber, `--promote-50`, that the tile pulses on a
            // break (`CLOCK_IN_COLORS.break`) — not `warning`, which is a
            // different yellow and would say something the tile isn't saying.
            tone: "promote",
            ticking: true,
            flashing: true,
            onClick: () => setStatus("clocked-in"),
          }
        : {
            icon: SolidPlay,
            label: "Clock in",
            // STILL A READING, on the dark slab: what the day came to so far. The
            // clock has stopped, so nothing blinks — the tone is what says the
            // difference between a total that is still moving and one that isn't.
            text: hhmm(worked),
            tone: "neutral",
            onClick: () => setStatus("clocked-in"),
          }

  const [clock, ...rest] = RIGHT_WIDGETS
  const day = clockInDay(status, worked, onBreak, new Date())
  // `Timer`, not the catalog's plain `Clock`: this icon is the OTHER FACE of the
  // flash, so it is read a second at a time next to a running total — a stopwatch
  // says which clock is meant, where a wall clock would just say "time".
  const rail: HomeWidgetItem[] = [
    { ...clock, icon: Timer, railAction },
    ...rest,
  ]

  return (
    // Capped BELOW what two columns need (712 + 16 + 396), so the rail is in its
    // collapsed strip — the only presentation that draws glyphs at all.
    <div className="mx-auto h-full w-full max-w-[1000px] p-6">
      <NewHomeLayout
        rightWidgets={rail}
        // The tile and the glyph are the SAME state: clocking in from the card
        // grows the pill in the rail, and vice versa.
        slotRenderers={{
          "clock-in": {
            render: () => (
              <ClockInTile
                day={day}
                onClockIn={() => setStatus("clocked-in")}
                onClockOut={() => setStatus("clocked-out")}
                onBreak={() => {
                  setOnBreak(0)
                  setStatus("break")
                }}
              />
            ),
            skeleton: () => <ClockInTile loading />,
          },
        }}
      >
        {mainColumnBlocks()}
      </NewHomeLayout>
    </div>
  )
}

export const GlyphAction: Story = {
  // A story with a clock in it: every snapshot of it would differ from the last.
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => <ClockGlyphActionHome />,
}

/* ============================== virtualization ============================== */

/**
 * `count` widgets, cycling the rail's real ones so every card is a card with data
 * in it, each numbered so you can see where in the column you are. The clock is
 * left out: it is `locked`, and a hundred pinned widgets is not a column anyone
 * is arranging.
 */
const manyWidgets = (count: number): HomeWidgetItem[] => {
  const source = RIGHT_WIDGETS.filter((widget) => !widget.locked)
  return Array.from({ length: count }, (_, index) => {
    const widget = source[index % source.length]
    return {
      ...widget,
      id: `${widget.id}-${index}`,
      header: {
        ...resolveWidgetHeader(widget.header, widget.params),
        title: `${index + 1}. ${widgetTitle(widget)}`,
      },
      // One configurable widget per column is the point; a hundred dialogs is
      // not.
      paramsSchema: undefined,
      params: undefined,
    } as HomeWidgetItem
  })
}

/**
 * HOW MANY WIDGET CARDS ARE IN THE DOM right now, watched rather than counted
 * once: it is the number the story exists to show, and scrolling is what changes
 * it.
 */
const MountedCount = ({ of }: { of: number }) => {
  const [mounted, setMounted] = useState(0)
  const [root, setRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const page = root?.ownerDocument.body
    if (!page) return
    const read = () =>
      setMounted(page.querySelectorAll("[data-widget-id]").length)
    read()
    const observer = new MutationObserver(read)
    observer.observe(page, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [root])

  return (
    <div
      ref={setRoot}
      className="pointer-events-none fixed bottom-4 right-4 z-50 rounded-lg bg-f1-background-inverse px-3 py-2 font-medium text-f1-foreground-inverse"
    >
      {mounted} of {of} widgets in the DOM
    </div>
  )
}

/**
 * A HOME WITH MORE WIDGETS THAN A SCREEN — 60 in the main column, 40 in the rail
 * — with both sides VIRTUALIZED (`virtualizedWidgetContainers`). Only the cards
 * you can see are in the DOM: the badge in the corner counts them, and scrolling
 * either column keeps the number where it is while the widget numbers climb.
 *
 * Everything else about the column is unchanged. The full height is held open, so
 * both scrollbars describe all 100 widgets; dragging still reorders (only the
 * cards in view get out of the way as you go); and the rail still collapses into
 * its strip, which is where virtualization stands aside — a floating panel is one
 * card in a box of its own, not a column.
 *
 * Off by default, and worth leaving off for a Home of a dozen widgets: a widget
 * that scrolls out is UNMOUNTED, and what it had loaded, timed or animated starts
 * again when it comes back.
 */
export const ManyWidgets: Story = {
  render: () => {
    const left = manyWidgets(60)
    const right = manyWidgets(40)
    return (
      <div className="h-full w-full p-6">
        <NewHomeLayout
          leftWidgets={left}
          rightWidgets={right}
          slotRenderers={SLOT_RENDERERS}
          virtualizedWidgetContainers={["main", "right"]}
          onRemoveWidget={() => {}}
          onReorderWidgets={() => {}}
        >
          {/* The main column's freeform content, above the widgets and scrolling
              in the same box — which is what the placed cards have to be offset
              past. */}
          {mainColumnBlocks()}
        </NewHomeLayout>
        <MountedCount of={left.length + right.length} />
      </div>
    )
  },
}
