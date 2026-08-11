import { useState, type ReactNode } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0OneIcon } from "@/kits/ai/F0OneIcon"
import { F0Button } from "@/components/F0Button"
import { F0Card } from "@/components/F0Card"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { One } from "@/icons/ai"
import {
  Building,
  Calendar,
  ChevronRight,
  Clock,
  Comment,
  Envelope,
  ExternalLink,
  File,
  Globe,
  Home as HomeIcon,
  PalmTree,
  Person,
  Receipt,
  Target,
} from "@/icons/app"

import {
  ClockInControls,
  type ClockInProject,
} from "../ClockIn/ClockInControls"
import { SlotWidget } from "../SlotWidget"
import {
  homeSlot,
  type HomeWidgetItem,
  listSlot,
  type SlotRenderers,
} from "../slotRenderers"
import { type WidgetContainerSide } from "../WidgetContainer"
import { WidgetCatalog } from "../WidgetCatalog"
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

/**
 * The Ask-AI greeting: the One mark, the gradient welcome phrase, the muted
 * question. The gradient stops are F0's own welcome-phrase literals.
 */
const Greeting = () => (
  <div className="flex flex-col items-center gap-3 py-2">
    <F0OneIcon size="lg" />
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
          variant="outline"
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
  <Greeting key="greeting" />,
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
const ClockInTile = ({ loading }: { loading?: boolean }) => {
  const [locationId, setLocationId] = useState("remote")
  const [projectId, setProjectId] = useState<string | undefined>()

  return (
    <ClockInControls
      variant="horizontal-bar"
      loading={loading}
      labels={CLOCK_IN_LABELS}
      data={[]}
      trackedMinutes={0}
      remainingMinutes={8 * 60}
      locations={CLOCK_IN_LOCATIONS}
      locationId={locationId}
      onChangeLocationId={setLocationId}
      projects={CLOCK_IN_PROJECTS}
      projectId={projectId}
      onChangeProjectId={setProjectId}
      onClockIn={() => {}}
      onClockOut={() => {}}
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

/**
 * The rail as DATA — HomeWidgetItems with their catalog `icon`, so the layout
 * can collapse them to an avatar strip when it runs out of width. The bespoke
 * `clock-in` slot's renderer is passed once at the layout level.
 */
const RIGHT_WIDGETS: HomeWidgetItem[] = [
  {
    id: "clock-in",
    icon: Clock,
    // Pinned: you always want the clock, so edit mode leaves it alone.
    locked: true,
    header: {
      title: "Clock in",
      link: { title: "Go to Time tracking", onClick: () => {} },
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
      link: { title: "Go to Communications", onClick: () => {} },
    },
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
  {
    id: "events",
    icon: Calendar,
    header: {
      title: "Events",
      count: 8,
      link: { title: "Go to Calendar", onClick: () => {} },
    },
    slots: [
      homeSlot("event-list", { showAllItems: true, events: RAIL_EVENTS }),
    ],
  },
  // External navigation, both flavors: the header's link carries a real `url`
  // (an anchor, opened by the browser), and every row's `href` is an outside
  // website — link rows render as REAL anchors (via the app's LinkProvider),
  // so external URLs just work.
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
 * The catalog the picker offers. Every preview is the REAL widget — the same
 * `SlotWidget` render the rail makes — so what you preview is what gets added.
 */
const CATALOG = [
  ...RIGHT_WIDGETS.map((widget) => ({
    id: widget.id,
    title: widget.header?.title ?? widget.id,
    icon: widget.icon!,
    preview: (
      <SlotWidget
        header={widget.header}
        slots={widget.slots}
        slotRenderers={SLOT_RENDERERS}
      />
    ),
  })),
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
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "Sign the Q3 addendum", href: "/tasks/1" },
            { id: "2", title: "Review expense report", href: "/tasks/2" },
            { id: "3", title: "Approve time off", href: "/tasks/3" },
          ]),
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
  // The schema showcase: each of these leans on a different `list` schema —
  // what you preview here is exactly what the slot vocabulary can say.
  {
    id: "team",
    title: "Team",
    icon: Person,
    preview: (
      <SlotWidget
        header={{ title: "Team", count: 6 }}
        slots={[
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
        ]}
      />
    ),
  },
  {
    id: "people",
    title: "People",
    icon: Person,
    preview: (
      <SlotWidget
        header={{ title: "New joiners", count: 7 }}
        slots={[
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
        ]}
      />
    ),
  },
  {
    id: "documents",
    title: "Documents",
    icon: File,
    preview: (
      <SlotWidget
        header={{ title: "Documents" }}
        alert="2 documents need signing"
        action={{ label: "Sign now", onClick: () => {} }}
        slots={[
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
        ]}
      />
    ),
  },
  {
    id: "offices",
    title: "Offices",
    icon: Building,
    preview: (
      <SlotWidget
        header={{ title: "Offices" }}
        slots={[
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
        ]}
      />
    ),
  },
]

const Home = () => {
  const [open, setOpen] = useState(false)
  const [side, setSide] = useState<WidgetContainerSide>("main")
  const [rail, setRail] = useState(RIGHT_WIDGETS)
  return (
    <div className="h-full w-full p-6">
      <NewHomeLayout
        rightWidgets={rail}
        slotRenderers={SLOT_RENDERERS}
        editableWidgetContainers={["right"]}
        onRemoveWidget={(id) => setRail((w) => w.filter((x) => x.id !== id))}
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
        onAdd={() => setOpen(false)}
        previewWidth={side === "right" ? 396 : 768}
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
 * (`onClickAddNewWidget`), which opens the `WidgetCatalog` dialog; "Edit Home"
 * toggles the per-widget remove chrome.
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
