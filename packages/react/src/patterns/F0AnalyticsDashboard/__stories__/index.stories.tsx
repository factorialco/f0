import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { DashboardItem } from "../types"

import { F0AnalyticsDashboard } from "../index"
import { dashboardFilters, dashboardPresets, mixedItems } from "./mockDataMixed"

const meta = {
  component: F0AnalyticsDashboard,
  title: "AnalyticsDashboard",
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj

const InteractiveDashboard = ({ editMode }: { editMode?: boolean }) => {
  const [items, setItems] = useState<DashboardItem[]>(mixedItems)

  return (
    <F0AnalyticsDashboard
      navigationFilters={{
        date: {
          type: "date-navigator",
          defaultValue: new Date(),
          granularity: ["week", "day", "range"],
        },
      }}
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={items}
      editMode={editMode}
      onTransformChart={(itemId, newType, orientation) => {
        setItems((prev) =>
          prev.map((item) => {
            if (item.id !== itemId || item.type !== "chart") return item
            return {
              ...item,
              chart: {
                ...item.chart,
                type: newType,
                ...(newType === "bar"
                  ? { orientation: orientation ?? "vertical" }
                  : {}),
              },
            } as typeof item
          })
        )
      }}
    />
  )
}

/**
 * Full dashboard with metrics, charts (bar, line, pie, radar, gauge, heatmap,
 * funnel), and a paginated collection — all wired to shared filters.
 *
 * Three items in `mixedItems` carry an `explanation` field — try the
 * three-dot menu on **Total Headcount**, **Headcount by Department**, and
 * the **Employee Directory** collection to see the new "Where does this data
 * come from?" entry that opens a markdown-rendered dialog.
 */
export const MixedDashboard: Story = {
  render: () => <InteractiveDashboard editMode />,
}

/**
 * Dashboard with the global export button enabled (PDF / Excel).
 */
export const WithExport: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
      enableExport
    />
  ),
}

const metricHeightItems: DashboardItem<typeof dashboardFilters>[] = [
  {
    id: "compact-metric",
    title: "Compact KPI — 144px",
    description: "The value stays aligned to the bottom-left.",
    type: "metric",
    colSpan: 4,
    x: 0,
    y: 0,
    itemHeight: 144,
    format: { type: "currency", currency: "EUR" },
    fetchData: async () => ({ value: 1_234_567 }),
  },
  {
    id: "tall-metric",
    title: "Tall KPI — 336px",
    description: "A positive trend centers once the body exceeds 220px.",
    type: "metric",
    colSpan: 4,
    x: 0,
    y: 3,
    itemHeight: 336,
    format: { type: "currency", currency: "EUR" },
    fetchData: async () => ({ value: 1_234_567, previousValue: 1_000_000 }),
  },
  {
    id: "tall-decrease",
    title: "Tall KPI with decrease",
    description: "Direction remains explicit beyond its icon and color.",
    type: "metric",
    colSpan: 4,
    x: 4,
    y: 3,
    itemHeight: 336,
    format: { type: "percent" },
    decimals: 1,
    fetchData: async () => ({ value: 76.5, previousValue: 100 }),
  },
  {
    id: "tall-long-value",
    title: "Tall KPI with a long value",
    description: "Overflow starts at the left edge and remains scrollable.",
    type: "metric",
    colSpan: 4,
    x: 8,
    y: 3,
    itemHeight: 336,
    valueFormatter: () => "€123,456,789,012,345,678,901,234,567,890",
    fetchData: async () => ({ value: 123_456_789 }),
  },
]

/** KPI height, trend-direction, and long-value overflow variants. */
export const MetricHeightVariants: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      items={metricHeightItems}
    />
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-8">
      <F0AnalyticsDashboard
        filters={dashboardFilters}
        presets={dashboardPresets}
        items={mixedItems}
      />
      <F0AnalyticsDashboard
        filters={dashboardFilters}
        items={metricHeightItems}
      />
    </div>
  ),
}

// ---------------------------------------------------------------------------
// Empty-state coverage
// ---------------------------------------------------------------------------

const emptyItems: DashboardItem<typeof dashboardFilters>[] = [
  {
    id: "empty-bar",
    title: "Importe por mes",
    description: "Evolución del gasto total por mes.",
    type: "chart",
    colSpan: 6,
    x: 0,
    y: 0,
    rowSpan: 6,
    chart: { type: "bar" },
    fetchData: async () => ({ categories: [], series: [] }),
  },
  {
    id: "empty-line",
    title: "Importe por estado",
    description: "Gasto total por estado.",
    type: "chart",
    colSpan: 6,
    x: 6,
    y: 0,
    rowSpan: 6,
    chart: { type: "line" },
    fetchData: async () => ({ categories: [], series: [] }),
  },
  {
    id: "empty-horizontal",
    title: "Top empleados",
    description: "Empleados con más gasto total.",
    type: "chart",
    colSpan: 12,
    x: 0,
    y: 6,
    rowSpan: 6,
    chart: { type: "bar", orientation: "horizontal" },
    fetchData: async () => ({ categories: [], series: [] }),
  },
]

/**
 * Mirrors the bug case in the screenshot: every chart returns no data.
 * Each tile shows a faded skeleton of its chart variant with the default
 * "No data available" / "Try a different date or fewer filters" message —
 * instead of bare axes.
 */
export const EmptyDashboard: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={emptyItems}
    />
  ),
}
