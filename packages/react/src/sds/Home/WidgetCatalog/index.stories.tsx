import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { Calendar, Clock, File, PalmTree, Receipt, Target } from "@/icons/app"
import { f0FormField } from "@/patterns/F0Form"

import {
  fromParams,
  homeSlot,
  listSlot,
  type HomeWidgetItem,
  type WidgetParams,
} from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import {
  WidgetCatalog,
  type WidgetCatalogGroup,
  type WidgetCatalogItem,
} from "./index"

/**
 * Beyond its header and slots, a widget may carry the `Widget` frame's own
 * chrome: a `status` tag OR an `alert` (never both — the type forbids it), an
 * `action` button, and `summaries`. These entries show each one.
 */
const CHROME_CATALOG = [
  {
    id: "payroll",
    title: "Payroll",
    icon: Receipt,
    preview: {
      id: "payroll",
      header: {
        title: "Payroll",
        subtitle: "June",
        count: 3,
        info: "Gross, before deductions.",
      },
      status: { text: "Approved", variant: "positive" as const },
      summaries: [
        { label: "Gross", value: "3,200", postfixUnit: "€" },
        { label: "Net", value: "2,480", postfixUnit: "€" },
      ],
      slots: [
        listSlot({ clickBehavior: "link" }, [
          { id: "1", title: "June payslip", href: "/payroll/june" },
        ]),
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
        listSlot({ clickBehavior: "link" }, [
          { id: "1", title: "Q3 addendum", href: "/docs/1" },
        ]),
      ],
    },
  },
]

const CATALOG: WidgetCatalogItem[] = [
  ...CHROME_CATALOG,
  {
    id: "time-off",
    title: "Time off",
    icon: PalmTree,
    preview: {
      id: "time-off",
      header: { title: "Time off" },
      slots: [
        homeSlot("indicators", {
          items: [{ label: "Days left", content: "12" }],
        }),
      ],
    },
  },
  {
    id: "events",
    title: "Events",
    icon: Calendar,
    // AN `event-list`, deliberately: its rows are the ones whose 8px
    // `EVENT_LIST_GAP` an approximated preview used to drop. Handed over as
    // data, the picker draws it through the same `SlotWidget` the rail does, so
    // this preview and the card on the page are one render.
    preview: {
      id: "events",
      header: { title: "Events", count: 2, info: "The next events this week." },
      slots: [
        homeSlot("event-list", {
          showAllItems: true,
          events: [
            {
              title: "Design sync",
              description: "Weekly, 30 min",
              color: "#5596F6",
              isPending: false,
              fromDate: new Date("2026-07-24T09:30:00"),
            },
            {
              title: "All hands",
              description: "Q3 roadmap update",
              color: "#10B881",
              isPending: false,
              fromDate: new Date("2026-07-30T16:00:00"),
            },
          ],
        }),
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
        homeSlot("indicators", {
          items: [{ label: "On track", content: "4/5" }],
        }),
      ],
    },
  },
  {
    // The ESCAPE HATCH, kept in the catalog so it stays exercised: a `ReactNode`
    // preview, for a widget the app draws its own way (`renderWidget`). Every
    // other entry here hands over the widget itself, which is the form that
    // cannot drift.
    id: "clock-in",
    title: "Clock in",
    icon: Clock,
    preview: (
      <SlotWidget
        header={{ title: "Clock in" }}
        slots={[
          homeSlot("indicators", {
            items: [{ label: "Worked today", content: "0:00" }],
          }),
        ]}
      />
    ),
  },
]

/**
 * THE DOMAINS, each headed by its module glyph. Labels are the app's own words —
 * f0's `modules` registry carries icons, not names.
 */
const GROUPS: WidgetCatalogGroup[] = [
  { id: "time", label: "Time & attendance", module: "time-tracking" },
  { id: "money", label: "Payroll", module: "compensations" },
  { id: "performance", label: "Performance", module: "goals" },
  { id: "docs", label: "Documents", module: "documents" },
]

/** Which domain each widget sits in. `events` has none on purpose: it lands in
 * the unheaded run after the groups. */
const DOMAIN: Record<string, string> = {
  "clock-in": "time",
  "time-off": "time",
  payroll: "money",
  goals: "performance",
  documents: "docs",
}

const GROUPED_CATALOG = CATALOG.map((item) => ({
  ...item,
  group: DOMAIN[item.id],
  recommended: item.id === "clock-in" || item.id === "payroll",
}))

const meta = {
  title: "Home/WidgetCatalog",
  component: WidgetCatalog,
  tags: ["autodocs", "experimental"],
  args: {
    isOpen: true,
    onClose: () => {},
    onAdd: () => {},
    widgets: GROUPED_CATALOG,
    groups: GROUPS,
    previewWidth: 396,
  },
} satisfies Meta<typeof WidgetCatalog>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The "Add widget" picker: searchable icon + title rows on the left, a LIVE
 * preview of the selected widget on the right at the target column's width, and
 * the Add widget CTA in the footer.
 *
 * The rows are organised BY DOMAIN, each group headed by its module glyph, with
 * what this Home recommends lifted to the top. A widget in no domain (`events`
 * here) follows the groups without a heading of its own.
 */
export const Default: Story = {}

/**
 * Both are optional: with no `groups` and nothing `recommended`, the picker is the
 * flat list it has always been.
 */
export const Flat: Story = {
  args: { widgets: CATALOG, groups: undefined },
}

const EVENTS_PARAMS = z.object({
  period: f0FormField(z.enum(["week", "month"]), {
    label: "Period",
    options: [
      { value: "week", label: "This week" },
      { value: "month", label: "This month" },
    ],
  }),
  maxEvents: f0FormField(z.number().min(1).max(3), {
    label: "Events to show",
  }),
  onlyMine: f0FormField(z.boolean().optional(), {
    label: "Only the ones I'm invited to",
  }),
})

const EVENTS = [
  {
    title: "Design sync",
    description: "Weekly, 30 min",
    color: "#5596F6",
    isPending: false,
    fromDate: new Date("2026-07-24T09:30:00"),
  },
  {
    title: "All hands",
    description: "Q3 roadmap update",
    color: "#10B881",
    isPending: false,
    fromDate: new Date("2026-07-30T16:00:00"),
  },
  {
    title: "Team offsite",
    description: "Two days in Costa Brava",
    color: "#14B8A6",
    isPending: false,
    fromDate: new Date("2026-08-03T09:00:00"),
  },
]

const eventsWidget = (params: WidgetParams): HomeWidgetItem => {
  const {
    maxEvents = 2,
    period = "week",
    onlyMine,
  } = params as {
    maxEvents?: number
    period?: string
    onlyMine?: boolean
  }
  return {
    id: "events",
    header: {
      title: "Events",
      count: Math.min(maxEvents, EVENTS.length),
      info: fromParams(
        EVENTS_PARAMS,
        () =>
          `The next ${maxEvents} events ${period === "week" ? "this week" : "this month"}${onlyMine ? " you're invited to" : ""}.`
      ),
    },
    paramsSchema: EVENTS_PARAMS,
    params,
    slots: [
      homeSlot("event-list", {
        showAllItems: true,
        events: EVENTS.slice(0, maxEvents),
      }),
    ],
  }
}

const CONFIGURABLE_CATALOG: WidgetCatalogItem[] = GROUPED_CATALOG.map((item) =>
  item.id === "events"
    ? { ...item, preview: eventsWidget({ period: "week", maxEvents: 2 }) }
    : item.id === "goals"
      ? {
          ...item,
          paramsSchema: EVENTS_PARAMS,
          params: { period: "month", maxEvents: 3 },
          addWithDefaults: true,
        }
      : item
)

const TwoStepCatalog = () => {
  const [added, setAdded] = useState<string | null>(null)
  return (
    <>
      <WidgetCatalog
        isOpen
        onClose={() => {}}
        widgets={CONFIGURABLE_CATALOG}
        groups={GROUPS}
        rebuildPreview={(item, params) =>
          item.id === "events" ? eventsWidget(params) : item.preview
        }
        onAdd={(id, params) =>
          setAdded(`${id} ${params ? JSON.stringify(params) : "(no params)"}`)
        }
      />
      {added ? <p>{added}</p> : null}
    </>
  )
}

export const WithParams: Story = { render: () => <TwoStepCatalog /> }
