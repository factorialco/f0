import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <F0AnalyticsDashboard
      filters={dashboardFilters}
      presets={dashboardPresets}
      items={mixedItems}
    />
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
// ─── Item filters ────────────────────────────────────────────────

const itemFilterIds = [
  "total-headcount",
  "headcount",
  "employee-table",
  "attrition-rate",
]

const itemFilterItems = itemFilterIds.flatMap((id, index) => {
  const item = mixedItems.find((candidate) => candidate.id === id)
  if (!item) return []

  return [
    {
      ...item,
      x: index < 3 ? index * 4 : 0,
      y: index < 3 ? 0 : 7,
      colSpan: 4,
      rowSpan: index < 3 ? 7 : 3,
      ...(id === "attrition-rate"
        ? { title: "No filters (undefined)", explanation: undefined }
        : {}),
    },
  ]
})

/**
 * Operator-based filter definitions, mimicking a cube/semantic catalog where
 * each field advertises the operators it supports.
 */
const itemFilterDefinitions = {
  country: {
    type: "operator" as const,
    label: "Country",
    options: {
      operators: [
        { value: "equals", label: "Is" },
        { value: "not_equals", label: "Is not" },
        { value: "in", label: "Is one of", valueMode: "multiple" as const },
        { value: "contains", label: "Contains" },
        { value: "set", label: "Has any value", valueMode: "none" as const },
        { value: "not_set", label: "Has no value", valueMode: "none" as const },
      ],
      valueType: "string" as const,
      suggestions: ["Spain", "France", "Germany"],
    },
  },
  headcount: {
    type: "operator" as const,
    label: "Headcount",
    options: {
      operators: [
        { value: "equals", label: "Equals" },
        { value: "gt", label: "Greater than" },
        { value: "lt", label: "Less than" },
        { value: "between", label: "Between", valueMode: "range" as const },
      ],
      valueType: "number" as const,
    },
  },
}

const onItemFiltersChange = fn()

const ItemFiltersDemo = ({
  initialValues = {},
}: {
  initialValues?: Record<
    string,
    { [key: string]: { operator: string; values: (string | number)[] } }
  >
}) => {
  const [valuesByItem, setValuesByItem] = useState(initialValues)

  return (
    <F0AnalyticsDashboard
      items={itemFilterItems}
      itemFilters={(item) => {
        if (item.id === "attrition-rate") return undefined
        return {
          filters: itemFilterDefinitions,
          value: valuesByItem[item.id] ?? {},
          onChange: (value) => {
            onItemFiltersChange(item.id, value)
            setValuesByItem((prev) => ({
              ...prev,
              [item.id]: value as (typeof initialValues)[string],
            }))
          },
        }
      }}
    />
  )
}

/**
 * Per-widget filters: each eligible widget header shows a filter icon
 * (between fullscreen and the three-dot menu) that opens a compact anchored
 * popover. The popover lists this widget's fields; drilling into a field
 * shows an operator selector plus the value inputs that operator needs
 * (single, multiple, range, or none). Applying emits `onChange` for that
 * widget only. The last metric returns `undefined`, so it has no filter icon.
 */
export const WithItemFilters: Story = {
  render: () => <ItemFiltersDemo />,
  play: async ({ canvasElement }) => {
    onItemFiltersChange.mockClear()
    const page = within(canvasElement.closest("body")!)

    const triggers = page.getAllByLabelText("Filters")
    // Three eligible widgets — the fourth resolver returns undefined.
    await expect(triggers).toHaveLength(3)

    await userEvent.click(triggers[0])
    await userEvent.click(await page.findByText("Country"))

    const input = await page.findByRole("textbox")
    await userEvent.type(input, "Spain")
    await userEvent.click(page.getByRole("button", { name: "Apply selection" }))
    await userEvent.click(page.getByRole("button", { name: "Apply filters" }))

    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith("total-headcount", {
        country: { operator: "equals", values: ["Spain"] },
      })
    )
    await expect(onItemFiltersChange).toHaveBeenCalledOnce()

    // The applied filter surfaces as a counter on this widget's trigger only.
    await waitFor(() => expect(triggers[0]).toHaveTextContent("1"))
    await expect(triggers[1]).not.toHaveTextContent("1")
  },
}

/**
 * A widget with a filter already applied: the header controls stay visible
 * (no hover needed) and the filter icon shows the applied-filter counter.
 * Dismissing the popover without applying keeps the value intact.
 */
export const ItemFiltersApplied: Story = {
  render: () => (
    <ItemFiltersDemo
      initialValues={{
        headcount: { country: { operator: "not_set", values: [] } },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)

    const triggers = page.getAllByLabelText("Filters")
    const filtered = triggers.find((trigger) =>
      trigger.textContent?.includes("1")
    )
    await expect(filtered).toBeDefined()

    // Open and dismiss without applying — the counter must not change.
    await userEvent.click(filtered!)
    await expect(await page.findByText("Country")).toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    await waitFor(() => expect(filtered).toHaveTextContent("1"))
  },
}
