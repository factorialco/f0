import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { Filter } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { DashboardItem } from "../types"

import { F0AnalyticsDashboard } from "../index"
import { dashboardFilters, dashboardPresets, mixedItems } from "./mockDataMixed"

const meta = {
  component: F0AnalyticsDashboard,
  title: "AnalyticsDashboard",
  tags: ["!autodocs", "experimental"],
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

const onItemAction = fn()

/**
 * Host applications can add actions to every widget menu without putting
 * callbacks in the serializable dashboard item configuration. Open any
 * widget's three-dot menu to see the top-level action.
 */
export const WithItemActions: Story = {
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
      itemActions={(item) => [
        {
          id: `manage-filters-${item.id}`,
          label: "Manage filters",
          icon: Filter,
          onClick: () => onItemAction(item.id),
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const [firstTrigger] = page.getAllByLabelText("Other actions")

    await userEvent.click(firstTrigger)
    await userEvent.click(page.getByText("Manage filters"))

    await expect(onItemAction).toHaveBeenCalledWith(mixedItems[0].id)
    await waitFor(() =>
      expect(page.queryByText("Manage filters")).not.toBeInTheDocument()
    )
  },
}

const errorItem: DashboardItem = {
  id: "failed-headcount",
  title: "Headcount",
  type: "metric",
  fetchData: async () => {
    throw new Error("Could not load this widget")
  },
}
const onErrorItemAction = fn()

/**
 * Host actions stay available when a widget's data request fails so recovery
 * actions cannot be hidden by the error they are meant to fix.
 */
export const ItemActionsInErrorState: Story = {
  render: () => (
    <F0AnalyticsDashboard
      items={[errorItem]}
      itemActions={() => [
        {
          id: "manage-filters",
          label: "Manage filters",
          icon: Filter,
          onClick: onErrorItemAction,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)

    await expect(
      await page.findByText("Could not load this widget")
    ).toBeInTheDocument()
    await userEvent.click(page.getByLabelText("Other actions"))
    await userEvent.click(page.getByText("Manage filters"))

    await expect(onErrorItemAction).toHaveBeenCalledOnce()
    await waitFor(() =>
      expect(page.queryByText("Manage filters")).not.toBeInTheDocument()
    )
  },
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
      itemActions={(item) => [
        {
          id: `manage-filters-${item.id}`,
          label: "Manage filters",
          icon: Filter,
          onClick: fn(),
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const [firstTrigger] = page.getAllByLabelText("Other actions")
    await userEvent.click(firstTrigger)
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
  },
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
