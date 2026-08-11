import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import {
  Home as HomeIcon,
  Office as OfficeIcon,
  Suitcase as SuitcaseIcon,
} from "@/icons/app"

import {
  ClockInControls,
  type ClockInControlsProps,
  type ClockInLocation,
  type ClockInProject,
} from "./index"

const defaultLabels = {
  clockedOut: "Clocked out",
  clockedIn: "Clocked in",
  onBreak: "On a break",
  clockIn: "Clock in",
  clockOut: "Clock out",
  break: "Break",
  resume: "Resume",
  remainingTime: "Remaining time",
  overtime: "Overtime",
  selectLocation: "Select location",
  selectProject: "Select project",
  searchProject: "Search projects",
  paid: "Paid",
  unpaid: "Unpaid",
}

const meta: Meta<typeof ClockInControls> = {
  title: "Home/ClockInControls",
  component: ClockInControls,
  tags: ["autodocs", "experimental"],
  args: {
    labels: defaultLabels,
    locations: [
      {
        id: "1",
        name: "Home",
        icon: HomeIcon,
      },
      {
        id: "2",
        name: "Business Trip",
        icon: SuitcaseIcon,
      },
      {
        id: "3",
        name: "Office",
        icon: OfficeIcon,
      },
    ],
    locationId: "1",
  },
  render: (args) => (
    <div className="max-w-[350px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof ClockInControls>

/**
 * The days the stories run on, as DATA rather than as other stories' `args`:
 * `variant="horizontal-bar"` types the custom-render slots away, so spreading a
 * story's `Partial<ClockInControlsProps>` into it no longer typechecks — which is
 * the point of the union.
 */
const CLOCKED_IN_DAY: ClockInControlsProps["data"] = [
  {
    from: new Date("2024-03-20T09:02:00"),
    to: new Date("2024-03-20T12:23:00"),
    variant: "clocked-in",
  },
]

const BREAK_DAY: ClockInControlsProps["data"] = [
  {
    from: new Date("2024-03-20T09:02:00"),
    to: new Date("2024-03-20T12:00:00"),
    variant: "clocked-in",
  },
  {
    from: new Date("2024-03-20T12:00:00"),
    to: new Date("2024-03-20T12:34:00"),
    variant: "break",
    // Hovering a segment always gives its time range; `label` is what gets added
    // after it — so this reads "12:00 – 12:34 • Lunch break".
    label: "Lunch break",
  },
]

const OVERTIME_DAY: ClockInControlsProps["data"] = [
  {
    from: new Date("2024-03-20T09:02:00"),
    to: new Date("2024-03-20T12:00:00"),
    variant: "clocked-in",
    label: "Design system",
  },
  {
    from: new Date("2024-03-20T12:00:00"),
    to: new Date("2024-03-20T12:45:00"),
    variant: "break",
    label: "Lunch break",
  },
  {
    from: new Date("2024-03-20T12:45:00"),
    to: new Date("2024-03-20T18:17:00"),
    variant: "clocked-in",
    label: "Onboarding revamp",
  },
]

/**
 * A REAL-SIZED book of work: 10 projects, 50 selectable leaves. That is past the
 * picker's 20-per-page window, so the dropdown actually pages as you scroll and
 * the search box has something to narrow — which is the state to design against,
 * not a list of three.
 */
const MANY_PROJECTS: ClockInProject[] = [
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
 * THREE levels of location: type → city → work area. Selection is the leaf, the
 * chain above it heads its group, and "Business trip" has no levels below it, so
 * it is its own leaf.
 */
const NESTED_LOCATIONS: ClockInLocation[] = [
  {
    id: "office",
    name: "Office",
    icon: OfficeIcon,
    sublocations: [
      {
        id: "office-barcelona",
        name: "Barcelona",
        sublocations: [
          { id: "office-bcn-llucuna", name: "Llucuna A-3" },
          { id: "office-bcn-tanger", name: "Tànger 98" },
        ],
      },
      {
        id: "office-madrid",
        name: "Madrid",
        sublocations: [
          { id: "office-mad-castellana", name: "Castellana 200" },
          { id: "office-mad-atocha", name: "Atocha 4" },
        ],
      },
    ],
  },
  {
    id: "home",
    name: "Home",
    icon: HomeIcon,
    sublocations: [
      { id: "home-primary", name: "Primary address" },
      { id: "home-secondary", name: "Secondary address" },
    ],
  },
  { id: "trip", name: "Business trip", icon: SuitcaseIcon },
]

/** Two projects with subprojects and one without, to show both shapes. */
const PROJECTS: ClockInProject[] = [
  {
    id: "design-system",
    name: "Design system",
    subprojects: [
      { id: "ds-components", name: "Components" },
      { id: "ds-tokens", name: "Tokens" },
      { id: "ds-docs", name: "Documentation" },
    ],
  },
  {
    id: "onboarding",
    name: "Onboarding revamp",
    subprojects: [
      { id: "ob-research", name: "Research" },
      { id: "ob-flows", name: "Flows" },
    ],
  },
  { id: "internal", name: "Internal tooling" },
]

export const ClockedOut: Story = {
  args: {
    remainingMinutes: 8 * 60,
    data: [],
  },
}

export const ClockedIn: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: 4 * 60 + 39,
    data: CLOCKED_IN_DAY,
  },
}

export const NoGraphNorRemainingTime: Story = {
  args: {
    ...ClockedIn.args,
    canSeeGraph: false,
    canSeeRemainingTime: false,
  },
}

export const OnBreak: Story = {
  args: {
    remainingMinutes: 4 * 60 + 39,
    data: BREAK_DAY,
    breakTypeName: "Lunch break",
  },
}

export const WithOvertime: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: -17,
    data: OVERTIME_DAY,
  },
}

export const OvertimeOnly: Story = {
  args: {
    ...WithOvertime.args,
    trackedMinutes: 6 * 60 + 21,
    remainingMinutes: -9 * 60,
  },
}

export const Collapsed: Story = {
  render: (args) => (
    <div className="max-w-[300px]">
      <ClockInControls {...args} />
    </div>
  ),
}

export const WithNoLocationOrProject: Story = {
  args: {
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: 4 * 60 + 39,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:23:00"),
        variant: "clocked-in",
      },
    ],
    locationId: undefined,
  },
}

export const ClockedOutWithSomeTime: Story = {
  args: {
    trackedMinutes: 2 * 60 + 40,
    remainingMinutes: 320,
    data: [
      {
        from: new Date("2024-03-20T09:02:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-in",
      },
      {
        from: new Date("2024-03-20T12:00:00"),
        to: new Date("2024-03-20T12:00:00"),
        variant: "clocked-out",
      },
    ],
  },
}

export const WithBreakTypes: Story = {
  args: {
    ...ClockedIn.args,
    breakTypes: [
      {
        id: "1",
        name: "Break name",
        duration: "1h",
        description: "This is a description",
        isPaid: true,
      },
      {
        id: "2",
        name: "Break name with very very very long name here",
        duration: "30 min",
        description: "Semi-fixed",
        isPaid: false,
      },
      {
        id: "3",
        name: "Break name",
        duration: "1h",
        description: "Fixed",
        isPaid: true,
      },
    ],
    onChangeBreakTypeId: () => {},
  },
}

export const WithOneBreakType: Story = {
  args: {
    ...ClockedIn.args,
    breakTypes: [
      {
        id: "1",
        name: "Break name",
        duration: "1h",
        description: "This is a description",
        isPaid: true,
      },
    ],
  },
}

export const WithDisabledSelectors: Story = {
  args: {
    ...ClockedOut.args,
    locationSelectorDisabled: true,
  },
}

export const WithHiddenLocationAndProject: Story = {
  args: {
    ...ClockedOut.args,
    canShowLocation: false,
  },
}

/**
 * `variant="horizontal-bar"` — the Home-widget arrangement from the custom-home
 * prototype. Four full-width rows, each pinning its two halves to the tile's
 * ends: status + running total on one line, the day as a horizontal bar, when it
 * started and what is left of it, then the location and the controls. The day,
 * the state machine and the controls are the SAME as in `default` — only their
 * placement changes — so it fits a narrow rail where the 160px ring can't.
 *
 * This variant also OWNS its two pickers: `locationSelectorElement` and
 * `projectSelectorElement` are typed away, and it renders `locations` as an
 * `F0ButtonDropdown` and `projects` as an `F0Select` instead.
 */
export const HorizontalBar: Story = {
  args: {
    variant: "horizontal-bar",
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: 4 * 60 + 39,
    data: CLOCKED_IN_DAY,
  },
}

/**
 * Clocked out is when the pickers are live: the location as an
 * `F0ButtonDropdown`, the projects as an `F0Select` whose group headers are the
 * parent projects and whose options are their subprojects — selection is always
 * a leaf. `Internal tooling` has no subprojects, so it stands as its own option.
 */
export const HorizontalBarClockedOut: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    projects: PROJECTS,
    projectId: "ds-tokens",
    onChangeProjectId: () => {},
  },
}

/**
 * 50 selectable leaves across 10 projects — past the picker's 20-per-page window.
 * Open it and the dropdown pages as you scroll; type in the search box and it
 * narrows against BOTH the subproject and its parent ("design" keeps everything
 * under Design system).
 */
export const HorizontalBarWithManyProjects: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    projects: MANY_PROJECTS,
    onChangeProjectId: () => {},
  },
}

/**
 * `locationRequired={false}` / `projectRequired={false}` — the two pickers then
 * offer a clear affordance and report the empty string once cleared. Both default
 * to required, which is the behaviour before there was any way to clear.
 */
export const HorizontalBarWithOptionalPickers: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    projects: MANY_PROJECTS,
    projectId: "design-system-tokens",
    onChangeProjectId: () => {},
    locationRequired: false,
    projectRequired: false,
  },
}

/**
 * Locations nested three deep (type → city → work area) beside projects nested
 * two. Both pickers group by the chain above the leaf — "Office · Barcelona"
 * heads its work areas — and the trigger carries the whole path, since out there
 * "Llucuna A-3" on its own says little. Searching "Barcelona" finds its areas
 * even though none of them is named that.
 */
export const HorizontalBarWithNestedLocations: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    locations: NESTED_LOCATIONS,
    locationId: "office-bcn-llucuna",
    projects: MANY_PROJECTS,
    onChangeProjectId: () => {},
  },
}

/** With a flat project list there are no group headers to draw. */
export const HorizontalBarWithFlatProjects: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    projects: [
      { id: "internal", name: "Internal tooling" },
      { id: "support", name: "Customer support" },
    ],
    onChangeProjectId: () => {},
  },
}

/** On a break the bar carries the break segment, and the tag names it. */
export const HorizontalBarOnBreak: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 4 * 60 + 39,
    data: BREAK_DAY,
    breakTypeName: "Lunch break",
  },
}

/** Overtime paints past the target in the warning colour, as the ring does. */
export const HorizontalBarWithOvertime: Story = {
  args: {
    variant: "horizontal-bar",
    trackedMinutes: 4 * 60 + 21,
    remainingMinutes: -17,
    data: OVERTIME_DAY,
  },
}

/**
 * On a break INSIDE your hours: resuming leads, clocking out is the icon-only
 * outline beside it. This is `onBreakPromote`'s default while time is left.
 */
export const HorizontalBarOnBreakPromotingResume: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 4 * 60 + 39,
    data: BREAK_DAY,
    breakTypeName: "Lunch break",
  },
}

/**
 * On a break PAST your hours: the day is done, so clocking out leads instead —
 * the same swap `onBreakPromote="clock-out"` pins explicitly.
 */
export const HorizontalBarOnBreakInOvertime: Story = {
  args: {
    variant: "horizontal-bar",
    trackedMinutes: 8 * 60 + 12,
    remainingMinutes: -17,
    data: BREAK_DAY,
    breakTypeName: "Lunch break",
  },
}

/**
 * A long break name next to "On a break": it truncates, and hovering it shows the
 * whole thing — `OneEllipsis` only mounts that tooltip when the text really clips.
 */
export const HorizontalBarWithLongBreakTypeName: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 4 * 60 + 39,
    data: BREAK_DAY,
    breakTypeName: "Lunch break — canteen, second shift",
    onBreakPromote: "resume",
  },
}

/**
 * `loading` draws a placeholder shaped like the chosen variant — the same rows
 * at the same heights — so the tile fills in with its data instead of changing
 * shape under it.
 */
export const Loading: Story = {
  args: {
    ...ClockedIn.args,
    loading: true,
  },
}

/**
 * Same args as {@link HorizontalBarWithManyProjects}, only waiting: the
 * placeholder holds the same four rows AND a line for each picker that is
 * actually coming, so nothing shifts when the day lands.
 */
export const LoadingHorizontalBar: Story = {
  args: {
    variant: "horizontal-bar",
    remainingMinutes: 8 * 60,
    data: [],
    projects: MANY_PROJECTS,
    onChangeProjectId: () => {},
    loading: true,
  },
}

export const WithCustomLocationSelector: Story = {
  args: {
    remainingMinutes: 8 * 60,
    data: [],
    // A custom control is the `default` variant's offer only — `horizontal-bar`
    // renders its own pickers, and types this slot away.
    variant: "default",
    // When `locationSelectorElement` is provided it replaces the built-in flat
    // location select, letting the consumer render its own control — e.g. a
    // drill-in selector (location → workplace → work area).
    locationSelectorElement: (
      <F0TagRaw text="Office · Barcelona · Llucuna A-3" icon={OfficeIcon} />
    ),
  },
}
