import type { Meta, StoryObj } from "@storybook/react-vite"

import { useId, useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import type { FiltersState } from "@/patterns/OneFilterPicker/types"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { DashboardItem } from "../types"

import { F0AnalyticsDashboard } from "../index"
import {
  dashboardFilters,
  dashboardPresets,
  type DashboardFiltersType,
  mixedItems,
} from "./mockDataMixed"

const meta = {
  component: F0AnalyticsDashboard,
  title: "AnalyticsDashboard",
  tags: ["!autodocs", "experimental"],
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj

const emptyReportFilters = {} satisfies FiltersState<DashboardFiltersType>

const preAppliedReportFilters = {
  department: ["Engineering"],
} satisfies FiltersState<DashboardFiltersType>

const scalarReportFilterValues = {
  status: ["Active"],
  employeeSearch: "Alice",
  reviewDate: new Date("2026-01-15T12:00:00.000Z"),
  salaryExact: {
    mode: "single" as const,
    value: 85_000,
  },
} satisfies FiltersState<DashboardFiltersType>

const rangeAndMultipleReportFilterValues = {
  department: ["Engineering", "Product"],
  dateRange: {
    from: new Date("2026-01-01T12:00:00.000Z"),
    to: new Date("2026-03-31T12:00:00.000Z"),
  },
  salary: {
    mode: "range" as const,
    from: { value: 70_000, closed: true },
    to: { value: 120_000, closed: true },
  },
} satisfies FiltersState<DashboardFiltersType>

const supportedReportFilterValues = {
  ...scalarReportFilterValues,
  ...rangeAndMultipleReportFilterValues,
} satisfies FiltersState<DashboardFiltersType>

const reportFilterItems = mixedItems.slice(0, 1)

const ReportFilterState = ({
  value,
}: {
  value: FiltersState<DashboardFiltersType>
}) => {
  const labelId = useId()

  return (
    <section
      aria-labelledby={labelId}
      className="mb-4 rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary p-4 text-f1-foreground"
    >
      <p id={labelId} className="m-0 text-base font-semibold">
        Applied report filter state
      </p>
      <p className="mb-3 mt-1 text-sm text-f1-foreground-secondary">
        This parent-owned value changes only after Apply, Clear, chip removal,
        or a preset selection. Dismissing the picker keeps it unchanged.
      </p>
      <pre
        aria-atomic="true"
        aria-live="polite"
        className="m-0 overflow-auto rounded bg-f1-background p-3 text-xs"
        data-testid="applied-report-filter-state"
        role="status"
      >
        {JSON.stringify(value, null, 2)}
      </pre>
    </section>
  )
}

const ControlledDashboard = ({
  initialValue,
  items = mixedItems,
  enableExport,
}: {
  initialValue: FiltersState<DashboardFiltersType>
  items?: DashboardItem<DashboardFiltersType>[]
  enableExport?: boolean
}) => {
  const [filtersValue, setFiltersValue] =
    useState<FiltersState<DashboardFiltersType>>(initialValue)

  return (
    <>
      <ReportFilterState value={filtersValue} />
      <F0AnalyticsDashboard
        filters={dashboardFilters}
        filtersValue={filtersValue}
        onFiltersChange={setFiltersValue}
        presets={dashboardPresets}
        items={items}
        enableExport={enableExport}
      />
    </>
  )
}

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
 * Full dashboard with metrics, charts (bar, line, combo, pie, radar, gauge,
 * heatmap, funnel), and a paginated collection — all wired to shared filters.
 *
 * **Headcount vs Turnover Rate** is the combo tile: it exercises the dual-axis
 * chain end to end (skeleton → fetch → render → PNG/Excel export), and its
 * type menu offers only Table, because flattening two scales onto one axis
 * would hide the rate line along the baseline.
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
 * Dashboard with the global Excel export button enabled.
 */
export const WithExport: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "A controlled, pre-filtered report with the global Excel export control. The export receives the same applied report filter state as every dashboard item.",
      },
    },
  },
  render: () => (
    <ControlledDashboard initialValue={preAppliedReportFilters} enableExport />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByTestId("applied-report-filter-state")
    ).toHaveTextContent('"Engineering"')
    await expect(
      canvas.getByRole("button", { name: "Toggle dropdown menu" })
    ).toBeInTheDocument()
  },
}

/**
 * A consumer-controlled dashboard starting without applied report filters. The
 * play function commits the first filter from that empty state.
 */
export const ReportFiltersEmpty: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "The parent owns an empty filter state. Apply a filter and compare the chips, counter, dashboard results, and the state panel above the report.",
      },
    },
  },
  render: () => <ControlledDashboard initialValue={emptyReportFilters} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)
    const state = canvas.getByTestId("applied-report-filter-state")

    await expect(state).toHaveTextContent("{}")

    await userEvent.click(page.getByRole("button", { name: "Filters" }))
    await userEvent.click(
      await page.findByRole("checkbox", { name: "Engineering" })
    )
    await userEvent.click(page.getByRole("button", { name: "Apply filters" }))

    await waitFor(() =>
      expect(
        page.queryByRole("dialog", { name: "Filters" })
      ).not.toBeInTheDocument()
    )
    await expect(state).toHaveTextContent('"Engineering"')
    const trigger = await page.findByRole("button", {
      name: "Filters",
      description: "Active filters: Department",
    })
    await expect(within(trigger).getByText("1")).toBeInTheDocument()
  },
}

/**
 * The controlled commit lifecycle used by saved reports. Draft changes stay
 * inside the picker until Apply; committed changes flow back to the parent.
 */
export const ReportFiltersPreApplied: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "Starts with Department = Engineering. Change a draft and press Escape to verify rollback; use Apply, Clear, a chip remove button, or a preset to verify committed parent state.",
      },
    },
  },
  render: () => <ControlledDashboard initialValue={preAppliedReportFilters} />,
}

/**
 * Scalar report-filter values supported by F0: search text, a single selected
 * option, a single date, and a single number.
 */
export const ReportFilterScalarValues: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the scalar controlled value shapes together: search text, one selected option, a single date, and a single number.",
      },
    },
  },
  render: () => <ControlledDashboard initialValue={scalarReportFilterValues} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole("button", {
      name: "Filters",
      description:
        "Active filters: Status, Employee search, Review date, Exact salary",
    })

    await expect(within(trigger).getByText("4")).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: "Status: Active" })
    ).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: "Employee search: Alice" })
    ).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: /^Review date:/ })
    ).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: "Exact salary: = 85000" })
    ).toBeInTheDocument()
  },
}

/**
 * Collection and range report-filter values supported by F0: multiple selected
 * options, a date range, and a numeric range.
 */
export const ReportFilterRangeAndMultipleValues: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "Shows the collection and range controlled value shapes together: multiple selected options, a date range, and a numeric range.",
      },
    },
  },
  render: () => (
    <ControlledDashboard initialValue={rangeAndMultipleReportFilterValues} />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole("button", {
      name: "Filters",
      description: "Active filters: Department, Date range, Salary range",
    })

    await expect(within(trigger).getByText("3")).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", {
        name: "Department: Engineering +1",
      })
    ).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: /^Date range:/ })
    ).toBeInTheDocument()
    await expect(
      await canvas.findByRole("button", { name: /^Salary range:/ })
    ).toBeInTheDocument()
  },
}

/**
 * Interaction coverage for dismiss/rollback, Apply, chip/counter updates, and
 * controlled state restoration. Hidden from navigation because the play
 * function intentionally exercises the UI when the story loads.
 */
export const ReportFilterCommitLifecycle: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <ControlledDashboard
      initialValue={preAppliedReportFilters}
      items={reportFilterItems}
    />
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)
    const state = canvas.getByTestId("applied-report-filter-state")
    const waitForFilterDialogToClose = () =>
      waitFor(() =>
        expect(
          page.queryByRole("dialog", { name: "Filters" })
        ).not.toBeInTheDocument()
      )

    await step("Dismiss rolls a draft change back", async () => {
      await userEvent.click(
        page.getByRole("button", {
          name: "Filters",
          description: "Active filters: Department",
        })
      )
      await userEvent.click(
        await page.findByRole("checkbox", { name: "Product" })
      )
      await userEvent.keyboard("{Escape}")

      await waitForFilterDialogToClose()

      await expect(state).toHaveTextContent('"Engineering"')
      await expect(state).not.toHaveTextContent('"Product"')
    })

    await step("Apply commits and updates the filter counter", async () => {
      await userEvent.click(
        await page.findByRole("button", {
          name: "Filters",
          description: "Active filters: Department",
        })
      )
      await userEvent.click(
        await page.findByRole("checkbox", { name: "Product" })
      )
      await userEvent.click(page.getByRole("button", { name: "Apply filters" }))

      await waitForFilterDialogToClose()
      await waitFor(() => expect(state).toHaveTextContent('"Product"'))
      const trigger = await page.findByRole("button", {
        name: "Filters",
        description: "Active filters: Department",
      })
      await expect(within(trigger).getByText("1")).toBeInTheDocument()
    })

    await step("Clear and presets commit controlled changes", async () => {
      await userEvent.click(await page.findByRole("button", { name: "Clear" }))
      await waitFor(() => expect(state).toHaveTextContent("{}"))

      await userEvent.click(
        page.getByRole("checkbox", { name: "Product Team" })
      )
      await waitFor(() => expect(state).toHaveTextContent('"Product"'))
    })

    await step("Chip removal clears the committed filter", async () => {
      await userEvent.click(
        page.getByRole("button", {
          name: "Filters",
          description: "Active filters: Department",
        })
      )
      await userEvent.click(
        await page.findByRole("checkbox", { name: "Engineering" })
      )
      await userEvent.click(page.getByRole("button", { name: "Apply filters" }))
      await waitForFilterDialogToClose()
      await waitFor(() => expect(state).toHaveTextContent('"Engineering"'))

      await userEvent.click(
        await page.findByRole("button", {
          name: "Close",
          description: /^Department:/,
        })
      )
      await waitFor(() => expect(state).toHaveTextContent("{}"))
      await expect(
        page.getByRole("button", { name: "Filters" })
      ).toBeInTheDocument()
    })

    await step("The initial state can be restored", async () => {
      await userEvent.click(
        page.getByRole("checkbox", { name: "Engineering Team" })
      )
      await waitFor(() => expect(state).toHaveTextContent('"Engineering"'))
    })
  },
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
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-8">
      <ControlledDashboard initialValue={supportedReportFilterValues} />
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
    title: "Amount by month",
    description: "Total spend by month.",
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
    title: "Amount by status",
    description: "Total spend by status.",
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
    title: "Top employees",
    description: "Employees with the highest total spend.",
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
 * Every chart returns no data: each tile shows a faded skeleton of its chart
 * variant with the default "No data available" / "Try a different date or fewer
 * filters" message instead of bare axes.
 */
export const EmptyDashboard: Story = {
  tags: ["no-sidebar"],
  parameters: {
    docs: {
      description: {
        story:
          "A controlled, pre-filtered report whose charts return no data. Report filters remain available and committed changes still update the parent-owned state.",
      },
    },
  },
  render: () => (
    <ControlledDashboard
      initialValue={preAppliedReportFilters}
      items={emptyItems}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByRole("button", {
        name: "Filters",
        description: "Active filters: Department",
      })
    ).toBeInTheDocument()
    await expect(await canvas.findAllByText("No data available")).toHaveLength(
      emptyItems.length
    )
  },
}
