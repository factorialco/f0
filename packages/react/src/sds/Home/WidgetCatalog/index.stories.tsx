import type { Meta, StoryObj } from "@storybook/react-vite"

import { Calendar, Clock, PalmTree, Target } from "@/icons/app"

import { SlotWidget } from "../SlotWidget"
import { WidgetCatalog } from "./index"

const CATALOG = [
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
            visualization: "list",
            params: {
              showAllItems: true,
              items: [
                { id: "1", title: "Design sync", description: "Today · 10:00" },
                {
                  id: "2",
                  title: "All hands",
                  description: "Tomorrow · 16:00",
                },
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
