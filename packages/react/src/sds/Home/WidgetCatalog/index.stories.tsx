import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar, Clock, File, PalmTree, Receipt, Target } from "@/icons/app"

import { SlotWidget } from "../SlotWidget"
import { WidgetCatalog } from "./index"

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
          {
            visualization: "simple-line-list",
            params: {
              showAllItems: true,
              items: [
                { id: "1", title: "June payslip", href: "/payroll/june" },
              ],
            },
          },
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
          {
            visualization: "simple-line-list",
            params: {
              showAllItems: true,
              items: [{ id: "1", title: "Q3 addendum", href: "/docs/1" }],
            },
          },
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
          {
            visualization: "indicators",
            params: { items: [{ label: "Days left", content: "12" }] },
          },
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
          {
            visualization: "simple-line-list",
            params: {
              showAllItems: true,
              items: [
                { id: "1", title: "Design sync", href: "/calendar/1" },
                { id: "2", title: "All hands", href: "/calendar/2" },
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
  {
    id: "clock-in",
    title: "Clock in",
    icon: Clock,
    preview: (
      <SlotWidget
        header={{ title: "Clock in" }}
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "Worked today", content: "0:00" }] },
          },
        ]}
      />
    ),
  },
]

const meta = {
  title: "Home/WidgetCatalog",
  component: WidgetCatalog,
  tags: ["autodocs", "experimental"],
  args: {
    isOpen: true,
    onClose: () => {},
    onAdd: () => {},
    widgets: CATALOG,
    previewWidth: 396,
  },
} satisfies Meta<typeof WidgetCatalog>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The "Add widget" picker: searchable icon + title rows on the left, a LIVE
 * preview of the selected widget on the right at the target column's width,
 * and the Add widget CTA in the footer.
 */
export const Default: Story = {}
