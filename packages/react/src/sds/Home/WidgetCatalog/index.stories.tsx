import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar, Clock, File, PalmTree, Receipt, Target } from "@/icons/app"

import { homeSlot, listSlot } from "../slotRenderers"
import { SlotWidget } from "../SlotWidget"
import { WidgetCatalog, type WidgetCatalogGroup } from "./index"

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
    preview: (
      <SlotWidget
        header={{
          title: "Payroll",
          subtitle: "June",
          count: 3,
          info: "Gross, before deductions.",
        }}
        status={{ text: "Approved", variant: "positive" }}
        summaries={[
          { label: "Gross", value: "3,200", postfixUnit: "€" },
          { label: "Net", value: "2,480", postfixUnit: "€" },
        ]}
        slots={[
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "June payslip", href: "/payroll/june" },
          ]),
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
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "Q3 addendum", href: "/docs/1" },
          ]),
        ]}
      />
    ),
  },
]

const CATALOG = [
  ...CHROME_CATALOG,
  {
    id: "time-off",
    title: "Time off",
    icon: PalmTree,
    preview: (
      <SlotWidget
        header={{ title: "Time off" }}
        slots={[
          homeSlot("indicators", {
            items: [{ label: "Days left", content: "12" }],
          }),
        ]}
      />
    ),
  },
  {
    id: "events",
    title: "Events",
    icon: Calendar,
    preview: (
      <SlotWidget
        header={{ title: "Events", count: 2 }}
        slots={[
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "Design sync", href: "/calendar/1" },
            { id: "2", title: "All hands", href: "/calendar/2" },
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
          homeSlot("indicators", {
            items: [{ label: "On track", content: "4/5" }],
          }),
        ]}
      />
    ),
  },
  {
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
