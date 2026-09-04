import {
  type ComponentProps,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

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
import { OneEmptyState } from "@/components/OneEmptyState/OneEmptyState"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { One } from "@/icons/ai"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
} from "@/kits/ai/F0AiChat/__stories__/_mock"
import ApplicationFrameStories from "@/patterns/ApplicationFrame/index.stories"
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
  Plus,
  Receipt,
  Search,
  Settings,
  SolidPause,
  SolidPlay,
  Target,
  Timer,
} from "@/icons/app"
import { defineStepByStepCoachmarkGuidance } from "@/experimental/Overlays/F0Coachmark"
import { F0AiChatTextArea } from "@/kits/ai/F0AiChatTextArea"
import { type WelcomeScreenSuggestion } from "@/kits/ai/F0AiChat/types"
import { F0Box } from "@/lib/F0Box"

import {
  ClockInControls,
  type ClockInProject,
} from "../ClockIn/ClockInControls"
import { type ClockInStatus } from "../ClockIn/ClockInGraph"
import {
  F0CommunityPostsCarousel,
  type CommunityPostSummary,
} from "../Communities/F0CommunityPostsCarousel"
import { CommunityPost } from "../Communities/Post/CommunityPost"
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
import { F0CarouselDialog } from "@/patterns/F0CarouselDialog"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { SidebarFooter } from "@/patterns/Navigation/Sidebar/Footer"
import * as SidebarFooterStories from "@/patterns/Navigation/Sidebar/Footer/index.stories"
import { SidebarHeader } from "@/patterns/Navigation/Sidebar/Header"
import * as SidebarHeaderStories from "@/patterns/Navigation/Sidebar/Header/index.stories"
import { Menu as SidebarMenu } from "@/patterns/Navigation/Sidebar/Menu"
import * as SidebarMenuStories from "@/patterns/Navigation/Sidebar/Menu/index.stories"

import { NewHomeLayout } from "./index"

/* ============================ guided walkthrough =========================== */

/**
 * THE FIRST-RUN WALKTHROUGH OF THIS HOME — three steps, each NAMING the element
 * it points at. `HOME_WALKTHROUGH.anchor(…)` marks those elements further down,
 * and the names are a union the compiler holds both halves to: renaming a step
 * is a type error at the anchor rather than a coachmark waiting for an element
 * that is never coming.
 *
 * The copy is the prototype's own (factorial-composer's `custom-home` Feed,
 * where this tour was designed), down to the third step having no description —
 * its title is the whole sentence.
 *
 * The third step points at something THE LAYOUT renders rather than this story,
 * so it names the handle directly: `data-add-widget="right"`, which the rail's
 * add control carries as a column AND as a collapsed strip — the step lands on
 * the same offer either way.
 *
 * The overlay comes with the walkthrough (`overlay` defaults to `true`): the
 * page is dimmed except the step's element, the pointer is shielded from it, and
 * a reader who keeps pressing past the panel gets out after five presses.
 */
const HOME_WALKTHROUGH = defineStepByStepCoachmarkGuidance({
  id: "new-home-walkthrough",
  // Longer than the 2s default, for Storybook rather than for Home: the rail's
  // add control only exists once the layout has measured its own columns, and a
  // canvas that is still compiling its story takes several times longer to get
  // there than the app does. Without this the story regularly opens as a
  // two-step walkthrough — correct behaviour (see `lookForTargetsMs`), wrong
  // demonstration.
  lookForTargetsMs: 5000,
  steps: [
    {
      element: "ask-one",
      title: "Let One do it for you",
      description:
        "Ask One to analyse, find information, process expenses, or request holidays; and focus on making decisions.",
      side: "bottom",
      // THE ONE STEP THAT TAKES FOCUS: the field is the step, so the caret
      // starts in it and it wears its own focus glow — the reader can begin
      // typing the question the panel is describing. Every other step leaves
      // focus on the panel, where it is announced.
      focusTarget: true,
    },
    {
      element: "needs-you",
      title: "Important things come first",
      description:
        "View and complete all the updates and tasks that require your attention at a glance.",
      side: "bottom",
    },
    {
      // No description: the title is the whole sentence.
      targetElement: '[data-add-widget="right"]',
      title: "Customise the Home by adding, reordering, and removing widgets",
      side: "left",
    },
  ],
  // ONE CALLBACK FOR THE WHOLE OUTCOME — what an app would send to analytics:
  // which way out the reader took, how far they got, and how many times they
  // pressed past the panel on the way. `completed` / `dismissed` / `skipped`,
  // plus `unavailable` for the run where nothing it points at was on the page.
  onEnd: ({ reason, step, totalSteps, outsidePresses }) =>
    console.log(
      `walkthrough: ${reason} at ${step}/${totalSteps} (${outsidePresses} presses outside)`
    ),
})

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
    {/* The walkthrough's first step points at THE FIELD, not at the whole
        block: the composer is what the step is about, and the greeting above it
        is context the reader already has. The anchor goes on this wrapper
        rather than inside `HomeComposer` so it takes the field's own focus-glow
        inset with it — the lit region ends where the glow does. */}
    <div {...HOME_WALKTHROUGH.anchor("ask-one")}>
      <HomeComposer />
    </div>
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
//
// The "Needs you" block is WRAPPED so the walkthrough can point at it: the
// wrapper is what carries the anchor, since the block's own root is not a DOM
// element this file can put an attribute on (the composer's own anchor is
// inside `HomeHero`, on the field). A bare `div` in a flex column changes
// nothing about how it draws — and an anchor is inert markup, so every story
// keeps the same blocks whether or not the walkthrough ever runs.
const mainColumnBlocks = () => [
  <HomeHero key="hero" />,
  <ShortcutCards key="shortcuts" />,
  <div key="needs-you" {...HOME_WALKTHROUGH.anchor("needs-you")}>
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
  </div>,
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

/** The carousel's arrows — the only words its chrome has. */
const COMMUNITY_CAROUSEL_LABELS = {
  previous: "Previous posts",
  next: "More posts",
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
  {
    id: "expenses",
    icon: Receipt,
    header: {
      title: "Expenses",
      info: "Receipts you submitted and what each one is waiting on.",
      link: { title: "Go to Expenses", url: "/expenses" },
    },
    slots: [
      {
        visualization: "empty-state",
        params: {
          emoji: "🧾",
          title: "No expenses yet",
          description:
            "Submit a receipt and it shows up here with whatever it is waiting on.",
          actions: [
            {
              label: "Upload your first receipt",
              icon: Plus,
              onClick: () => {},
            },
            {
              label: "Learn how expenses work",
              variant: "outline",
              icon: ExternalLink,
              onClick: () => {},
            },
          ],
        } satisfies EmptyStateParams,
      },
    ],
  },
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
 * The bespoke slot renderers this Home supplies — `clock-in` for the rail and
 * `community-posts` for the main column; every other slot the two use is a kit
 * default. Each declares its own `skeleton` beside its `render`, so a tile has a
 * placeholder shaped like ITSELF while the column loads — and in both cases the
 * two are the SAME component, told whether its data has landed.
 */
const SLOT_RENDERERS: SlotRenderers = {
  "empty-state": (params) => (
    <OneEmptyState {...(params as EmptyStateParams)} />
  ),
  "clock-in": {
    render: () => <ClockInTile />,
    skeleton: () => <ClockInTile loading />,
  },
  "community-posts": {
    render: (params, ctx) => (
      <F0CommunityPostsCarousel
        posts={postsForScope((ctx.selection ?? "all") as CommunityScope).map(
          (post) => ({
            ...post,
            onClick: () => (params as CommunityPostsParams).onOpenPost(post.id),
          })
        )}
        labels={COMMUNITY_CAROUSEL_LABELS}
      />
    ),
    // The skeleton draws as many tiles as the slot said were coming, so the
    // loading card is the height of the loaded one.
    skeleton: (_, { expectedItemsCount }) => (
      <F0CommunityPostsCarousel
        posts={[]}
        labels={COMMUNITY_CAROUSEL_LABELS}
        loading
        expectedItemsCount={expectedItemsCount}
      />
    ),
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
    if (!items) return slot
    return {
      ...slot,
      expectedItemsCount: items.length,
      params: params.events
        ? { ...params, events: [] }
        : { ...params, items: [] },
    }
  }),
}))

/* ---------------------------- communities widget --------------------------- */

/**
 * THE MAIN COLUMN'S WIDGET, and the reason this one is not a `list` slot: a post
 * preview is a title, four lines of the post and its author, which needs a tile
 * rather than a row — and two tiles side by side needs the main column's 712px.
 * The catalog offers it for `main` only (`areas`), so it can never be dropped
 * into the 396px rail where it would be a single cramped card.
 */
const COMMUNITY_POSTS: CommunityPostSummary[] = [
  {
    id: "h2-planning",
    title: "How we're changing planning for H2",
    description: [
      "<p>We're changing how planning works for the second half, and this note is the whole of it — there is no deck to read afterwards.</p>",
      "<p><strong>What stays the same.</strong> Teams still own their roadmaps, still commit to outcomes rather than output, and still publish a weekly update. Nobody is being asked to re-plan work already underway.</p>",
      "<p><strong>What changes.</strong> The quarterly planning week is gone. In its place, each team writes a one-pager per initiative and we review them asynchronously over three days.</p>",
    ].join(""),
    author: {
      firstName: "Yusuf",
      lastName: "Adeyemi",
      avatarUrl: "/avatars/person01.jpg",
    },
    createdAt: new Date(2026, 6, 16),
    counters: { visits: "742 visits", comments: "23 comments" },
  },
  {
    id: "nordics-pilot",
    title: "Hana closed the Nordics pilot",
    description: [
      "<p>Six weeks of evenings on top of her own reviews and a landing page nobody asked for, and the Nordics pilot is signed.</p>",
      "<p>Hana ran the whole thing end to end while covering for two people on leave. Give her a clap.</p>",
    ].join(""),
    author: {
      firstName: "Hana",
      lastName: "Tanaka",
      avatarUrl: "/avatars/person04.jpg",
    },
    createdAt: new Date(2026, 6, 15),
    counters: { visits: "164 visits", comments: "11 comments" },
  },
  {
    id: "office-move",
    title: "The Barcelona office moves in September",
    // A COVER, and only some posts have one: the tile with a picture and the
    // tile without sit in the same row, at the same height.
    imageUrl: "/landscape01.jpg",
    description: [
      "<p>We outgrew the second floor about a year ago and have been pretending otherwise ever since. From 7 September we are two streets over, on Pau Claris.</p>",
      "<p>Desks, monitors and the good coffee machine all come with us. Bikes get a proper room this time.</p>",
    ].join(""),
    author: {
      firstName: "Marta",
      lastName: "Soler",
      avatarUrl: "/avatars/person06.jpg",
    },
    createdAt: new Date(2026, 6, 11),
    counters: { visits: "1,208 visits", comments: "47 comments" },
  },
  {
    id: "handbook",
    title: "The handbook is now the source of truth",
    description: [
      "<p>Every policy that used to live in a pinned message, a PDF or somebody's head is now in the handbook, and the handbook is now the thing we change when a policy changes.</p>",
      "<p>If you find something that contradicts it, the handbook is right and the other thing is out of date — tell us and we'll delete it.</p>",
    ].join(""),
    author: {
      firstName: "Leo",
      lastName: "Costa",
      avatarUrl: "/avatars/person08.jpg",
    },
    createdAt: new Date(2026, 6, 8),
    counters: { visits: "512 visits", comments: "9 comments" },
  },
  {
    id: "office-hours",
    title: "Summer office hours ☀️",
    imageUrl: "/landscape03.jpg",
    description:
      "<p>Through August we finish at 15:00 on Fridays. Nothing to request and nothing to log — the calendar already knows.</p>",
    author: {
      firstName: "Ana",
      lastName: "Prat",
      avatarUrl: "/avatars/person02.jpg",
    },
    createdAt: new Date(2026, 6, 2),
    counters: { visits: "980 visits", comments: "16 comments" },
  },
]

/**
 * WHICH POSTS the widget is showing. A widget-scoped filter, so it belongs in the
 * widget's header rather than in its menu: the menu is for things you DO to a
 * card, and this is part of what the card currently IS — the trigger reads
 * "Celebrations" once you pick it, the way a select does.
 */
const COMMUNITY_SCOPES = [
  { value: "all", label: "All communications" },
  { value: "announcements", label: "Company announcements" },
  { value: "celebrations", label: "Celebrations" },
  { value: "talent", label: "Talent spaces" },
  { value: "claps", label: "Claps" },
] as const

type CommunityScope = (typeof COMMUNITY_SCOPES)[number]["value"]

/** Which posts each scope covers — the app's own filter, not the widget's. */
const postsForScope = (scope: CommunityScope): CommunityPostSummary[] => {
  if (scope === "all") return COMMUNITY_POSTS
  if (scope === "celebrations" || scope === "claps")
    return COMMUNITY_POSTS.filter((post) => post.id === "nordics-pilot")
  if (scope === "announcements")
    return COMMUNITY_POSTS.filter((post) =>
      ["h2-planning", "office-move", "handbook"].includes(post.id)
    )
  return COMMUNITY_POSTS.filter((post) => post.id === "office-hours")
}

/**
 * ONE POST, as the dialog shows it — the whole thing rather than the tile's
 * five-line preview.
 *
 * It is `CommunityPost`, the component the Communities feed itself is built
 * from: the same author line, the same unclamped body, the same media, reactions
 * and counters. The tile is a preview of a post; this is the post, and there is
 * no reason for the two to be different components.
 */
const CommunityPostDetail = ({ post }: { post: CommunityPostSummary }) => (
  <CommunityPost
    id={post.id}
    // The dialog's header carries the title, so the post doesn't repeat it.
    hideTitle
    // Opened, not skimmed: the body is what the reader came for, so it is shown
    // whole rather than clamped with nothing behind the clamp.
    noDescriptionClamp
    author={post.author}
    group={{ title: "All company", onClick: () => {} }}
    createdAt={post.createdAt}
    title={post.title}
    description={post.description}
    mediaUrl={post.imageUrl}
    counters={{
      views: post.counters?.visits,
      comments: post.counters?.comments ?? "",
    }}
    // No `onClick`: the post is already open. In the feed the card is a way in
    // and wears the affordances to say so; here there is nowhere further to go.
    inLabel="in"
    comment={{ label: "Comment", onClick: () => {} }}
  />
)

/**
 * The Communities widget as DATA, built for the scope it is currently showing.
 *
 * Its two controls sit in the header AS DATA — `headerActions` for "New post",
 * the one thing you can do from the card without leaving the page, and
 * `headerSelect` for the SCOPE SWITCHER. Neither is a React node: the card draws
 * them both as ghosts (this row sits beside the widget's own title, and a filled
 * button there reads as the card's subject rather than as something you press),
 * and it KEEPS the scope, handing it to the slots as `ctx.selection`.
 *
 * Which is why this widget is built from no scope of its own. The story still
 * hears about it — `onChange` mirrors it into state — but only because its
 * carousel DIALOG walks the same set of posts; the card itself needs nobody to
 * hold the value. The way OUT of the widget is still the title ("Go to
 * Communities"), and the three-dots menu is still the column's.
 */
const communitiesWidget = ({
  scope,
  onChangeScope,
  onNewPost,
  onOpenPost,
}: {
  scope: CommunityScope
  onChangeScope: (scope: CommunityScope) => void
  onNewPost: () => void
  /** A tile opens the post IN PLACE — see `F0CarouselDialog` below. */
  onOpenPost: (id: string) => void
}): HomeWidgetItem =>
  ({
    id: "communities",
    icon: Comment,
    hasUpdates: true,
    header: {
      title: "Communities",
      info: "The latest posts from the spaces you follow.",
      link: { title: "Go to Communities", url: "/communities" },
    },
    headerActions: [{ icon: Plus, label: "New Post", onClick: onNewPost }],
    headerSelect: {
      tooltip: "Show",
      value: scope,
      options: COMMUNITY_SCOPES.map((option) => ({ ...option })),
      onChange: (value) => onChangeScope(value as CommunityScope),
    },
    actions: [
      { label: "Mark all as read", icon: Check, onClick: () => {} },
      { label: "Notification settings", icon: Settings, onClick: () => {} },
    ],
    // A BESPOKE visualization: its renderer is in `SLOT_RENDERERS`, beside
    // `clock-in`'s. A plain literal rather than `homeSlot`, since the built-in
    // vocabulary knows nothing about it.
    slots: [
      {
        visualization: "community-posts",
        // NO POSTS HERE. Which ones to draw is the scope the card is showing,
        // and the card hands that to the renderer (`ctx.selection`) — so the
        // slot carries only what the renderer cannot work out for itself.
        params: {
          // No `href`: a post opens OVER the Home rather than navigating away
          // from it, so the feed you were reading is still behind the dialog and
          // still where you left it.
          onOpenPost,
        },
      },
    ],
  })

interface EmptyStateParams {
  emoji: string
  title: string
  description: string
  actions: [OneEmptyStateAction, OneEmptyStateAction]
}

type OneEmptyStateAction = NonNullable<
  ComponentProps<typeof OneEmptyState>["actions"]
>[number]

/** What the bespoke `community-posts` slot carries — which posts is `ctx`'s. */
interface CommunityPostsParams {
  onOpenPost: (id: string) => void
}

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
  {
    // THE MAIN-COLUMN-ONLY ONE. Its preview is the widget itself, controls and
    // all, so the picker shows the scope switcher and the New post button
    // exactly where the card will wear them.
    id: "communities",
    title: "Communities",
    icon: Comment,
    preview: communitiesWidget({
      scope: "all",
      onChangeScope: () => {},
      onNewPost: () => {},
      onOpenPost: () => {},
    }),
  },
]

/**
 * WHICH COLUMN each widget may go in. Only the two that genuinely can't travel
 * say anything: a carousel of post tiles needs the main column's width, and the
 * clock-in tile is built for the rail's. Everything else is listed nowhere here
 * and is therefore offered in both — which is what most widgets should be.
 */
const CATALOG_AREAS: Record<string, WidgetContainerSide[]> = {
  communities: ["main"],
  "clock-in": ["right"],
}

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
  communities: "comms",
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
  areas: CATALOG_AREAS[item.id],
}))

const Home = ({ mainFootnote }: { mainFootnote?: string }) => {
  const [open, setOpen] = useState(false)
  const [side, setSide] = useState<WidgetContainerSide>("main")
  // The configurable widget's params live with the app, next to the rail's
  // order: both are things the user set and the app persists.
  const [eventsParams, setEventsParams] = useState(EVENTS_DEFAULTS)
  const [rail, setRail] = useState(RIGHT_WIDGETS)
  // THE MAIN COLUMN'S WIDGETS, as an order of their own: the two columns are two
  // lists, and a widget added to one has nothing to do with the other.
  const [mainIds, setMainIds] = useState(["communities"])
  // What the Communities widget is showing — its own state, alongside the rail's
  // order and the Events widget's params. Everything a user set, in one place.
  const [scope, setScope] = useState<CommunityScope>("all")
  // WHICH POST IS OPEN, if any. It lives out here rather than in the dialog for
  // the reason the dialog is controlled at all: the feed already knows which post
  // you clicked, and a second copy of that inside the dialog is a second answer
  // to one question.
  const [openPostId, setOpenPostId] = useState<string | null>(null)
  // The widget is REBUILT from its params — that is the app's half of the deal:
  // the layout resolves what the params merely say (title, info), while the
  // slots' data can only come from here.
  const railWidgets = rail.map((widget) =>
    widget.id === "events" ? eventsWidget(eventsParams) : widget
  )
  // The dialog walks the posts the widget is currently SHOWING — the same list,
  // in the same order. Switch the scope and the walk follows it, because there is
  // only one list.
  const openablePosts = postsForScope(scope)
  const mainWidgets = mainIds.flatMap((id) =>
    id === "communities"
      ? [
          communitiesWidget({
            scope,
            onChangeScope: setScope,
            onNewPost: () => {},
            onOpenPost: setOpenPostId,
          }),
        ]
      : []
  )
  return (
    <div className="h-full w-full p-6">
      <NewHomeLayout
        leftWidgets={mainWidgets}
        rightWidgets={railWidgets}
        slotRenderers={SLOT_RENDERERS}
        editableWidgetContainers={["main", "right"]}
        onRemoveWidget={(id) => {
          setRail((w) => w.filter((x) => x.id !== id))
          setMainIds((ids) => ids.filter((x) => x !== id))
        }}
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
        onReorderWidgets={(reorderedSide, ids) => {
          if (reorderedSide === "main") setMainIds(ids)
          else setRail((w) => ids.flatMap((id) => w.filter((x) => x.id === id)))
        }}
        onClickAddNewWidget={(s) => {
          setSide(s)
          setOpen(true)
        }}
        mainFootnote={mainFootnote}
      >
        {mainColumnBlocks()}
      </NewHomeLayout>
      <WidgetCatalog
        isOpen={open}
        onClose={() => setOpen(false)}
        widgets={CATALOG}
        groups={CATALOG_GROUPS}
        onAdd={(id, params) => {
          if (id === "events" && params) setEventsParams(params as EventsParams)
          // The picker only offers what the column can hold, so "which column"
          // is already decided — it is the side it was opened for.
          if (side === "main" && !mainIds.includes(id))
            setMainIds((ids) => [...ids, id])
          setOpen(false)
        }}
        rebuildPreview={(item, params) =>
          item.id === "events"
            ? eventsWidget(params as EventsParams)
            : item.preview
        }
        // ONE LIST, TWO COLUMNS. The side the layout handed back is passed
        // straight through: the picker then drops the widgets that column can't
        // hold (Communities is `main`-only, Clock in is rail-only) and previews
        // at that column's width — no second catalog, and no `previewWidth`
        // ternary that has to be kept in step with the layout's own columns.
        area={side}
        // The same map the layout gets — a preview drawn without it would show
        // "No renderer for slot …" for every bespoke visualization.
        slotRenderers={SLOT_RENDERERS}
      />
      {/* A post opened from the carousel, and every other post one arrow away.
          The tile you clicked and the page the dialog opens on are the same
          state, so it can only ever open on what you clicked. */}
      <F0CarouselDialog
        isOpen={openPostId !== null}
        onClose={() => setOpenPostId(null)}
        width="lg"
        items={openablePosts.map((post) => ({
          id: post.id,
          title: post.title,
          content: <CommunityPostDetail post={post} />,
        }))}
        currentId={openPostId ?? ""}
        onNavigate={setOpenPostId}
        labels={{ previous: "Previous post", next: "Next post" }}
        // The post brings its own padding; a second gutter from the frame just
        // holds its cover off an edge it wants.
        disableContentPadding
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
      // The AI chat's own mock runtime, exactly as `ApplicationFrame`'s stories
      // wire it: the panel the One switch opens has to hold A CHAT, and its
      // header, transcript and composer are slots the app fills.
      <MockAiChatRuntimeProvider>
        <ApplicationFrame
          // The frame's top row, outside the layout entirely: it takes real height
          // off the content area, which is what the height probe is testing.
          banner={parameters.frameBanner ? <FrameBanner /> : undefined}
          // The One switch in the layout's top-right draws NOTHING unless the
          // frame's AI chat is enabled — same as `DaytimePage`'s story. THE ONE
          // THING IT OPENS is this chat: no panel content is ever pushed here,
          // so the switch has nothing else to swap with.
          ai={{
            // THE SAME CHAT the frame's own story gives `HomeLayout` — its
            // args, not a second configuration that can drift from them — with
            // the mock header/transcript/composer filling the panel's slots.
            ...ApplicationFrameStories.args.ai,
            chatHeader: <MockConnectedChatHeader />,
            chatMessages: <MockConnectedMessagesContainer />,
            chatInput: <MockConnectedChatInput />,
          }}
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
      </MockAiChatRuntimeProvider>
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
 * A NOTE AT THE FOOT OF THE COLUMN, which is not a widget: `mainFootnote` puts
 * one sentence under every main-column widget and above the "+ Add widget"
 * placeholder — Home's last word rather than content.
 *
 * IT IS A STRING, and the only markdown in it is the inline link
 * `[label](href)`. f0 draws it: centered, secondary, one paragraph. Nothing
 * about how it looks is the caller's to pass, which is the point — the foot of
 * the column is a sentence everywhere, not a place a Home can grow a second
 * layout in.
 *
 * It has no card, cannot be dragged, removed or reordered, and stays at the foot
 * of the column however the widgets above it are arranged. It arrives on the
 * same stagger they do, one beat after the last of them.
 *
 * `children` is still the other end of the same column: freeform content ABOVE
 * the widgets, where a Home really does compose its own blocks.
 */
export const MainFootnote: Story = {
  render: () => (
    <Home mainFootnote="You are viewing Factorial's new home, if you want you can [go back to the old home.](/home?legacy=1)" />
  ),
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

/* =========================== guided walkthrough =========================== */

/**
 * The same Home, walked through: `HOME_WALKTHROUGH.start()` on mount, and a
 * control to see it again — a walkthrough is over once it is finished or
 * skipped, and reloading the story is a poor way to review it.
 */
const GuidedHome = () => {
  // A first-run tour is not something the reader asks for, so it starts with the
  // page. `stop()` on the way out, or the walkthrough would outlive the story
  // it is describing — Storybook keeps the coachmark store between stories.
  useEffect(() => {
    HOME_WALKTHROUGH.start()
    return () => HOME_WALKTHROUGH.stop()
  }, [])

  return (
    <>
      <Home />
      {/* Under the shield (`z-[1249]`) on purpose: while the walkthrough is up
          this is part of the page, dimmed and unpressable like everything else
          in it. */}
      <div className="fixed bottom-6 left-6">
        <F0Button
          variant="outline"
          label="Restart the walkthrough"
          onClick={() => {
            HOME_WALKTHROUGH.start()
          }}
        />
      </div>
    </>
  )
}

/**
 * A THREE-STEP WALKTHROUGH of this Home, declared with
 * `defineStepByStepCoachmarkGuidance` (see `HOME_WALKTHROUGH` at the top of this
 * file): the composer block, then the "Needs you" list, then the rail's own
 * add-widget control.
 *
 * WHAT THE WALKTHROUGH DOES BEYOND POINTING:
 * - the page is dimmed except the step's element, which stays lit at full
 *   strength — the hole is the real element, not a copy of it;
 * - a shield (`data-f0-coachmark-blocker`) swallows every press on the page, the
 *   lit element included, so the only way on is the panel's own button;
 * - a press that went nowhere makes the panel WIGGLE, which is the panel
 *   answering for it;
 * - five of those and the walkthrough gives up (`skipAfterOutsideClicks`) and
 *   reports a dismissal: a reader pressing past it five times is telling us they
 *   want out, and the way out cannot be the button they are ignoring.
 *
 * The first two steps name elements this file anchors (`anchor("ask-one")`,
 * `anchor("needs-you")`); the third points at `[data-add-widget="right"]`, the
 * handle the LAYOUT puts on the rail's add control — as a column and as a
 * collapsed strip, so a narrow window walks the same three steps.
 */
export const GuidedWalkthrough: Story = {
  render: () => <GuidedHome />,
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
