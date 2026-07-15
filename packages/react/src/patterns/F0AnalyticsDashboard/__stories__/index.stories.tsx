import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type {
  DashboardItem,
  DashboardItemFiltersConfig,
  DashboardItemFiltersState,
} from "../types"

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
  active: {
    type: "operator" as const,
    label: "Active",
    options: {
      operators: [
        { value: "equals", label: "Is" },
        { value: "not_equals", label: "Is not" },
      ],
      valueType: "boolean" as const,
    },
  },
}

const onItemFiltersChange = fn()

type ItemFilterDefinitions = typeof itemFilterDefinitions
type ItemFilterState = DashboardItemFiltersState<ItemFilterDefinitions>
type ItemFilterStatesByItem = Record<string, ItemFilterState>

const ItemFiltersDemo = ({
  initialValues = {},
  items = itemFilterItems,
}: {
  initialValues?: ItemFilterStatesByItem
  items?: DashboardItem<typeof dashboardFilters>[]
}) => {
  const [valuesByItem, setValuesByItem] =
    useState<ItemFilterStatesByItem>(initialValues)

  return (
    <F0AnalyticsDashboard
      items={items}
      itemFilters={(item) => {
        if (item.id === "attrition-rate") return undefined
        const config: DashboardItemFiltersConfig<ItemFilterDefinitions> = {
          filters: itemFilterDefinitions,
          value: valuesByItem[item.id] ?? {},
          onChange: (value) => {
            onItemFiltersChange(item.id, value)
            setValuesByItem((prev) => ({
              ...prev,
              [item.id]: value,
            }))
          },
        }
        return config
      }}
    />
  )
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <ItemFiltersDemo
      items={mixedItems}
      initialValues={{
        headcount: { country: { operator: "not_set", values: [] } },
        "employee-table": {
          country: { operator: "in", values: ["ES", "FR"] },
        },
      }}
    />
  ),
}

/**
 * Per-widget filters, routed per widget type:
 *
 * - **Metric and chart** widgets get a filter icon in the header (between
 *   fullscreen and the three-dot menu) opening a compact anchored popover:
 *   a list of this widget's fields, then per-field an operator selector plus
 *   the value inputs that operator needs (single, multiple, range, or none).
 * - The **collection (table)** widget surfaces the same filters as the
 *   table's own toolbar picker — the button next to search/settings — with
 *   applied-filter chips, exactly like tables elsewhere in the product.
 *
 * Applying emits `onChange` for that widget only. The last metric's resolver
 * returns `undefined`, so it has no filter control at all.
 */
export const WithItemFilters: Story = {
  render: () => <ItemFiltersDemo />,
  play: async ({ canvasElement }) => {
    onItemFiltersChange.mockClear()
    const page = within(canvasElement.closest("body")!)

    const widgetOf = (title: string) =>
      page.getByText(title).closest("[class*='dashitem']") as HTMLElement

    // Header icons appear on the metric and the chart. The collection routes
    // its filters through the table toolbar instead, and the fourth widget's
    // resolver returns undefined so it gets no control at all.
    const metricTrigger = within(widgetOf("Total Headcount")).getByLabelText(
      "Filters"
    )
    const chartTrigger = within(
      widgetOf("Headcount by Department")
    ).getByLabelText("Filters")
    const tableTrigger = within(widgetOf("Employee Directory")).getByRole(
      "button",
      { name: "Filters" }
    )
    const openFilterDialog = async (trigger: HTMLElement) => {
      await userEvent.click(trigger)
      await waitFor(() => expect(trigger).toHaveAttribute("aria-controls"))
      const dialogId = trigger.getAttribute("aria-controls")
      const dialog = dialogId
        ? canvasElement.ownerDocument.getElementById(dialogId)
        : null
      if (!dialog) throw new Error("The item filter dialog did not open")
      return within(dialog)
    }
    await expect(
      within(widgetOf("No filters (undefined)")).queryByLabelText("Filters")
    ).toBeNull()

    // — Metric: header icon → compact popover → drill in → apply —
    let metricDialog = await openFilterDialog(metricTrigger)
    await userEvent.click(metricDialog.getByRole("button", { name: "Country" }))

    const input = await metricDialog.findByRole("textbox")
    await userEvent.type(input, "Spain")
    await userEvent.click(
      metricDialog.getByRole("button", { name: "Apply selection" })
    )
    await userEvent.click(
      metricDialog.getByRole("button", { name: "Apply filters" })
    )

    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith("total-headcount", {
        country: { operator: "equals", values: ["Spain"] },
      })
    )
    await expect(onItemFiltersChange).toHaveBeenCalledOnce()

    // The applied filter surfaces as a counter on this widget's trigger only.
    await waitFor(() => expect(metricTrigger).toHaveTextContent("1"))
    await expect(chartTrigger).not.toHaveTextContent("1")

    // — Reopen: the operator select must render its options after a previous
    // popover session (regression guard: the dropdown used to collapse when
    // the popover was modal) —
    metricDialog = await openFilterDialog(metricTrigger)
    await userEvent.click(metricDialog.getByRole("button", { name: "Country" }))
    const operatorTrigger = await metricDialog.findByRole("combobox")
    await userEvent.click(operatorTrigger)
    await userEvent.click(
      await page.findByRole("option", { name: "Is one of" })
    )
    // Switching to a multiple-value operator swaps the form to the values
    // input with the comma hint.
    await expect(
      await metricDialog.findByText("Separate multiple values with commas")
    ).toBeInTheDocument()
    const valuesInput = await metricDialog.findByRole("textbox")
    await userEvent.type(valuesInput, "Spain, France")
    await userEvent.click(
      metricDialog.getByRole("button", { name: "Apply selection" })
    )
    await userEvent.click(
      metricDialog.getByRole("button", { name: "Apply filters" })
    )
    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith("total-headcount", {
        country: { operator: "in", values: ["Spain", "France"] },
      })
    )

    // — Chart: the same header flow remains isolated to the chart widget —
    onItemFiltersChange.mockClear()
    const chartDialog = await openFilterDialog(chartTrigger)
    await userEvent.click(chartDialog.getByRole("button", { name: "Country" }))
    await userEvent.type(await chartDialog.findByRole("textbox"), "France")
    await userEvent.click(
      chartDialog.getByRole("button", { name: "Apply selection" })
    )
    await userEvent.click(
      chartDialog.getByRole("button", { name: "Apply filters" })
    )
    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith("headcount", {
        country: { operator: "equals", values: ["France"] },
      })
    )
    await expect(onItemFiltersChange).toHaveBeenCalledOnce()
    await waitFor(() => expect(chartTrigger).toHaveTextContent("1"))
    await expect(metricTrigger).toHaveTextContent("1")

    // — Collection: native toolbar picker (next to search/settings) —
    onItemFiltersChange.mockClear()
    const tableDialog = await openFilterDialog(tableTrigger)
    const tableInput = await tableDialog.findByRole("textbox")
    await userEvent.type(tableInput, "Germany")
    await userEvent.click(
      tableDialog.getByRole("button", { name: "Apply filters" })
    )

    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith("employee-table", {
        country: { operator: "equals", values: ["Germany"] },
      })
    )

    // The applied filter renders as a chip in the table toolbar.
    await expect(
      await within(widgetOf("Employee Directory")).findByText(/Is Germany/)
    ).toBeInTheDocument()
  },
}

/**
 * Interaction coverage for the remaining operator value modes: numeric range,
 * boolean enum, and a valueless condition. Each apply keeps the other active
 * conditions and emits one controlled state for the selected widget.
 */
export const ItemFilterValueVariants: Story = {
  render: () => <ItemFiltersDemo />,
  play: async ({ canvasElement, step }) => {
    onItemFiltersChange.mockClear()
    const page = within(canvasElement.closest("body")!)
    const metric = page
      .getByText("Total Headcount")
      .closest("[class*='dashitem']") as HTMLElement
    const trigger = within(metric).getByRole("button", { name: "Filters" })
    const openFilterDialog = async () => {
      await userEvent.click(trigger)
      await waitFor(() => expect(trigger).toHaveAttribute("aria-controls"))
      const dialogId = trigger.getAttribute("aria-controls")
      const dialog = dialogId
        ? canvasElement.ownerDocument.getElementById(dialogId)
        : null
      if (!dialog) throw new Error("The item filter dialog did not open")
      return within(dialog)
    }

    await step("Apply a numeric range", async () => {
      const dialog = await openFilterDialog()
      await userEvent.click(dialog.getByRole("button", { name: "Headcount" }))
      await userEvent.click(dialog.getByRole("combobox", { name: "Condition" }))
      await userEvent.click(
        await page.findByRole("option", { name: "Between" })
      )
      await userEvent.type(dialog.getByRole("textbox", { name: "From" }), "10")
      await userEvent.type(dialog.getByRole("textbox", { name: "To" }), "20")
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply selection" })
      )
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply filters" })
      )

      await waitFor(() =>
        expect(onItemFiltersChange).toHaveBeenLastCalledWith(
          "total-headcount",
          { headcount: { operator: "between", values: [10, 20] } }
        )
      )
    })

    await step("Apply a boolean value", async () => {
      const dialog = await openFilterDialog()
      await userEvent.click(dialog.getByRole("button", { name: "Active" }))
      await userEvent.click(dialog.getByRole("combobox", { name: "Value" }))
      await userEvent.click(await page.findByRole("option", { name: "False" }))
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply selection" })
      )
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply filters" })
      )

      await waitFor(() =>
        expect(onItemFiltersChange).toHaveBeenLastCalledWith(
          "total-headcount",
          {
            headcount: { operator: "between", values: [10, 20] },
            active: { operator: "equals", values: [false] },
          }
        )
      )
    })

    await step("Apply a valueless condition", async () => {
      const dialog = await openFilterDialog()
      await userEvent.click(dialog.getByRole("button", { name: "Country" }))
      await userEvent.click(dialog.getByRole("combobox", { name: "Condition" }))
      await userEvent.click(
        await page.findByRole("option", { name: "Has no value" })
      )
      await expect(
        dialog.getByText("This condition doesn't need a value")
      ).toBeInTheDocument()
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply selection" })
      )
      await userEvent.click(
        dialog.getByRole("button", { name: "Apply filters" })
      )

      await waitFor(() =>
        expect(onItemFiltersChange).toHaveBeenLastCalledWith(
          "total-headcount",
          {
            headcount: { operator: "between", values: [10, 20] },
            active: { operator: "equals", values: [false] },
            country: { operator: "not_set", values: [] },
          }
        )
      )
    })
  },
}

/**
 * Widgets with filters already applied: the chart's header controls stay
 * visible (no hover needed) and its filter icon shows the applied-filter
 * counter; the table shows its applied filter as a toolbar chip. Dismissing
 * the popover without applying keeps the value intact.
 */
export const ItemFiltersApplied: Story = {
  render: () => (
    <ItemFiltersDemo
      initialValues={{
        headcount: { country: { operator: "not_set", values: [] } },
        "employee-table": {
          country: { operator: "in", values: ["ES", "FR"] },
        },
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    onItemFiltersChange.mockClear()
    const page = within(canvasElement.closest("body")!)
    const chart = page
      .getByText("Headcount by Department")
      .closest("[class*='dashitem']") as HTMLElement
    const filtered = within(chart).getByRole("button", {
      name: "Active filters: Country",
    })
    await expect(filtered).toHaveTextContent("1")

    // The table's pre-applied filter renders as a toolbar chip.
    await expect(await page.findByText(/Is one of ES, FR/)).toBeInTheDocument()

    // Open and dismiss without applying — the counter must not change.
    await userEvent.click(filtered)
    await waitFor(() => expect(filtered).toHaveAttribute("aria-controls"))
    const dialogId = filtered.getAttribute("aria-controls")
    const popover = dialogId
      ? canvasElement.ownerDocument.getElementById(dialogId)
      : null
    if (!popover) throw new Error("The item filter dialog did not open")
    const dialog = within(popover)
    await userEvent.click(dialog.getByRole("button", { name: "Country" }))
    await expect(
      dialog.getByRole("combobox", { name: "Condition" })
    ).toHaveTextContent("Has no value")
    await userEvent.keyboard("{Escape}")
    await waitFor(() => expect(filtered).toHaveTextContent("1"))
    await expect(onItemFiltersChange).not.toHaveBeenCalled()

    await userEvent.click(filtered)
    const reopenedId = filtered.getAttribute("aria-controls")
    const reopened = reopenedId
      ? canvasElement.ownerDocument.getElementById(reopenedId)
      : null
    if (!reopened) throw new Error("The item filter dialog did not reopen")
    const reopenedDialog = within(reopened)
    await userEvent.click(
      reopenedDialog.getByRole("button", { name: "Country" })
    )
    await expect(
      reopenedDialog.getByRole("combobox", { name: "Condition" })
    ).toHaveTextContent("Has no value")
    await userEvent.keyboard("{Escape}")
  },
}
