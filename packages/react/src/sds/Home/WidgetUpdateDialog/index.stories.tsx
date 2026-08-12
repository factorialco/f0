import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { f0FormField } from "@/patterns/F0Form"

import { fromParams, homeSlot, type WidgetParams } from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import { WidgetUpdateDialog } from "./index"

/** What the teams field's datasource serves. */
type Team = { id: string; name: string; people: number }

const TEAMS: Team[] = [
  { id: "design", name: "Design", people: 8 },
  { id: "engineering", name: "Engineering", people: 42 },
  { id: "people", name: "People", people: 6 },
  { id: "sales", name: "Sales", people: 17 },
]

/**
 * A DATASOURCE rather than a fixed list of options: the field searches it, so a
 * widget can be pointed at things nobody could enumerate at build time.
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
 * The params of the Events widget, as an F0Form schema: an enum (select), a
 * datasource-backed MULTI select, a number, a date and a datetime. What is
 * REQUIRED is just what zod says — `since` and `digestAt` are `.optional()`, the
 * rest are not, and the dialog cannot be saved until they are filled.
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
  since: f0FormField(z.date().optional(), { label: "Only after" }),
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
 * REAL events, not placeholders: a preview is only worth looking at if the widget
 * in it looks like the one you will get — the coloured spine, the two lines, the
 * date chip an `event-list` row draws.
 */
const EVENTS = [
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

/** The widget the dialog previews — the SAME render the rail would make. */
const eventsPreview = (params: EventsParams) => (
  <SlotWidget
    params={params}
    header={{
      title: fromParams(EVENTS_PARAMS, (p) =>
        p.teams?.length ? `Events · ${teamNames(p.teams)}` : "Events"
      ),
      count: Math.min(params.maxEvents ?? 0, EVENTS.length),
      link: { title: "Go to Calendar", url: "/calendar#core.events" },
    }}
    slots={[
      homeSlot("event-list", {
        showAllItems: true,
        events: EVENTS.slice(0, params.maxEvents),
      }),
    ]}
  />
)

const DEFAULTS: EventsParams = {
  period: "week",
  teams: ["design"],
  maxEvents: 3,
  since: undefined,
  digestAt: undefined,
}

/**
 * The dialog SAVES, so a story that only logs would never show what saving does.
 * This keeps the params it is given and hands them straight back, which is what
 * an app does with them.
 */
const ConfigurableWidget = () => {
  const [params, setParams] = useState<EventsParams>(DEFAULTS)
  return (
    <WidgetUpdateDialog
      isOpen
      onClose={() => {}}
      schema={EVENTS_PARAMS}
      params={params}
      info={fromParams(
        EVENTS_PARAMS,
        (p) =>
          `The next ${p.maxEvents ?? 0} events ${PERIOD_LABEL[p.period ?? "week"]} for ${teamNames(p.teams) || "no team"}.`
      )}
      renderPreview={(next) => eventsPreview(next as EventsParams)}
      onSave={(next) => setParams(next as EventsParams)}
    />
  )
}

const meta = {
  title: "Home/WidgetUpdateDialog",
  component: WidgetUpdateDialog,
  tags: ["autodocs", "experimental"],
  args: {
    isOpen: true,
    onClose: () => {},
    schema: EVENTS_PARAMS,
    params: DEFAULTS as WidgetParams,
    renderPreview: (params) => eventsPreview(params as EventsParams),
    onSave: () => {},
    previewWidth: 396,
  },
} satisfies Meta<typeof WidgetUpdateDialog>

export default meta
type Story = StoryObj<typeof meta>

/**
 * "Edit params" — the twin of `WidgetCatalog`: the same `xl` dialog, the widget's
 * own params as FIELDS on the left, a live preview of it on the right at the
 * width its column will give it, and its info line underneath.
 *
 * Nothing here is hand-built. The fields are the widget's `paramsSchema` handed to
 * `F0Form`, so a `z.date()` gets a date picker, a `z.enum()` a select, and a
 * datasource-backed field a searchable (here multi) select. The preview follows
 * every VALID edit — an invalid form keeps the last good one — and nothing reaches
 * the widget until Save.
 */
export const Default: Story = { render: () => <ConfigurableWidget /> }

/**
 * A widget being configured for the FIRST time: the params it must have are
 * empty, so the fields show what is required and Save refuses until they are
 * filled (the schema is the only place that says so).
 */
export const NothingSetYet: Story = {
  args: { params: {} },
}
