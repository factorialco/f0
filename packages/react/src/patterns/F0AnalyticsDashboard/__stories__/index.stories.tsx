import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useRef, useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { Filter, Reset } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Dialog } from "@/patterns/F0Dialog"

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

const onDialogHandoff = fn()

const ItemActionDialogDemo = () => {
  const [activeItem, setActiveItem] = useState<DashboardItem | null>(null)
  const initialFocusRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const dialogWasOpenRef = useRef(false)

  useEffect(() => {
    if (!activeItem) {
      if (!dialogWasOpenRef.current) return
      dialogWasOpenRef.current = false

      let frame: number
      const restoreFocusAfterClose = () => {
        if (document.querySelector('[role="dialog"]')) {
          frame = window.requestAnimationFrame(restoreFocusAfterClose)
          return
        }

        returnFocusRef.current?.focus()
      }

      frame = window.requestAnimationFrame(restoreFocusAfterClose)
      return () => window.cancelAnimationFrame(frame)
    }

    dialogWasOpenRef.current = true

    const frame = window.requestAnimationFrame(() => {
      initialFocusRef.current?.focus()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [activeItem])

  return (
    <>
      <F0AnalyticsDashboard
        filters={dashboardFilters}
        presets={dashboardPresets}
        items={mixedItems}
        itemActions={(item) => [
          {
            id: `manage-filters-${item.id}`,
            label: "Manage filters",
            icon: Filter,
            onClick: () => {
              onDialogHandoff({
                menuPresent: document.querySelector('[role="menu"]') !== null,
                triggerLabel:
                  document.activeElement?.getAttribute("aria-label"),
              })
              if (document.activeElement instanceof HTMLElement) {
                returnFocusRef.current = document.activeElement
              }
              setActiveItem(item)
            },
          },
        ]}
      />
      <F0Dialog
        isOpen={activeItem !== null}
        onClose={() => setActiveItem(null)}
        title={activeItem ? `Manage ${activeItem.title}` : "Manage widget"}
      >
        <p className="text-base text-f1-foreground">
          Host workflow opened for {activeItem?.title} after the widget menu
          finished closing.
        </p>
        <F0Button
          ref={initialFocusRef}
          label="Close workflow"
          onClick={() => setActiveItem(null)}
        />
      </F0Dialog>
    </>
  )
}

/**
 * Host applications can add actions to every widget menu without putting
 * callbacks in the serializable dashboard item configuration. Open any
 * widget's three-dot menu to see the top-level action.
 */
export const WithItemActions: Story = {
  render: () => <ItemActionDialogDemo />,
  play: async ({ canvasElement }) => {
    onDialogHandoff.mockClear()
    const page = within(canvasElement.closest("body")!)
    const [firstTrigger] = page.getAllByLabelText("Other actions")

    firstTrigger.focus()
    await userEvent.keyboard("{Enter}")
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    await userEvent.keyboard("{Enter}")
    await userEvent.click(firstTrigger)

    await waitFor(() =>
      expect(onDialogHandoff).toHaveBeenCalledWith({
        menuPresent: false,
        triggerLabel: "Other actions",
      })
    )
    await expect(onDialogHandoff).toHaveBeenCalledOnce()
    const dialog = await page.findByRole("dialog")
    await expect(page.queryByRole("menu")).not.toBeInTheDocument()
    await expect(
      page.getByText(`Manage ${mixedItems[0].title}`)
    ).toBeInTheDocument()
    await expect(dialog).toBeInTheDocument()
    await waitFor(() =>
      expect(dialog.contains(document.activeElement)).toBe(true)
    )

    await userEvent.click(page.getByRole("button", { name: "Close workflow" }))
    await waitFor(() =>
      expect(page.queryByRole("dialog")).not.toBeInTheDocument()
    )
    await waitFor(() => expect(firstTrigger).toHaveFocus())
  },
}

const itemActionVariantIds = [
  "total-headcount",
  "headcount",
  "employee-table",
  "avg-salary",
  "attrition-rate",
]

const itemActionVariantItems = itemActionVariantIds.flatMap((id, index) => {
  const item = mixedItems.find((candidate) => candidate.id === id)
  if (!item) return []

  return [
    {
      ...item,
      x: index < 3 ? index * 4 : (index - 3) * 4,
      y: index < 3 ? 0 : 7,
      colSpan: 4,
      rowSpan: index < 3 ? 7 : 3,
      ...(["avg-salary", "attrition-rate"].includes(id)
        ? {
            title:
              id === "avg-salary"
                ? "No host actions (undefined)"
                : "No host actions (empty array)",
            explanation: undefined,
          }
        : {}),
    },
  ]
})

const onVariantAction = fn()

/**
 * Compares per-widget eligibility, icon and text-only actions, multiple
 * actions, critical emphasis, and coexistence with built-in explanation and
 * download controls. The final metrics intentionally return `undefined` and
 * an empty array, so neither has an action menu.
 */
export const ItemActionVariants: Story = {
  render: () => (
    <F0AnalyticsDashboard
      items={itemActionVariantItems}
      itemActions={(item) => {
        if (item.id === "total-headcount") {
          return [
            {
              id: "inspect-source",
              label: "Inspect source",
              onClick: () => onVariantAction(item.id, "inspect-source"),
            },
          ]
        }

        if (item.id === "headcount") {
          return [
            {
              id: "manage-filters",
              label: "Manage filters",
              icon: Filter,
              onClick: () => onVariantAction(item.id, "manage-filters"),
            },
          ]
        }

        if (item.id === "employee-table") {
          return [
            {
              id: "manage-filters",
              label: "Manage filters",
              icon: Filter,
              onClick: () => onVariantAction(item.id, "manage-filters"),
            },
            {
              id: "reset-widget",
              label: "Reset widget",
              icon: Reset,
              critical: true,
              onClick: () => onVariantAction(item.id, "reset-widget"),
            },
          ]
        }

        if (item.id === "attrition-rate") return []

        return undefined
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)

    const metricCard = canvasElement.querySelector(
      '[data-card-id="total-headcount"]'
    )
    const chartCard = canvasElement.querySelector('[data-card-id="headcount"]')
    const collectionCard = canvasElement.querySelector(
      '[data-card-id="employee-table"]'
    )
    const undefinedActionsCard = canvasElement.querySelector(
      '[data-card-id="avg-salary"]'
    )
    const emptyActionsCard = canvasElement.querySelector(
      '[data-card-id="attrition-rate"]'
    )

    if (
      !(metricCard instanceof HTMLElement) ||
      !(chartCard instanceof HTMLElement) ||
      !(collectionCard instanceof HTMLElement) ||
      !(undefinedActionsCard instanceof HTMLElement) ||
      !(emptyActionsCard instanceof HTMLElement)
    ) {
      throw new Error("Expected all item-action variant widgets to render")
    }

    await userEvent.click(within(metricCard).getByLabelText("Other actions"))
    await expect(page.getByText("Inspect source")).toBeInTheDocument()
    await expect(page.queryByText("Download")).not.toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    await waitFor(() =>
      expect(page.queryByRole("menu")).not.toBeInTheDocument()
    )

    await userEvent.click(within(chartCard).getByLabelText("Other actions"))
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    await expect(await page.findByText("Download")).toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    await waitFor(() =>
      expect(page.queryByRole("menu")).not.toBeInTheDocument()
    )

    await userEvent.click(
      within(collectionCard).getByLabelText("Other actions")
    )
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    const resetAction = page.getByRole("menuitem", { name: "Reset widget" })
    await expect(resetAction).toBeInTheDocument()
    await expect(resetAction).toHaveClass("text-f1-foreground-critical")
    await expect(page.getByText("Download")).toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    await waitFor(() =>
      expect(page.queryByRole("menu")).not.toBeInTheDocument()
    )

    await expect(
      within(undefinedActionsCard).queryByLabelText("Other actions")
    ).not.toBeInTheDocument()
    await expect(
      within(emptyActionsCard).queryByLabelText("Other actions")
    ).not.toBeInTheDocument()
  },
}

const combinedMenuItems = itemActionVariantItems.filter(
  (item) => item.id === "headcount"
)

/**
 * A single editable chart shows the complete menu composition: chart-type
 * controls, a host action, data explanation, downloads, and delete.
 */
export const ItemActionsWithBuiltInControls: Story = {
  render: () => (
    <F0AnalyticsDashboard
      items={combinedMenuItems}
      editMode
      onTransformChart={() => {}}
      itemActions={(item) => [
        {
          id: `manage-filters-${item.id}`,
          label: "Manage filters",
          icon: Filter,
          onClick: fn(),
        },
        {
          id: `reset-widget-${item.id}`,
          label: "Reset widget",
          icon: Reset,
          critical: true,
          onClick: fn(),
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)

    await userEvent.click(page.getByLabelText("Other actions"))
    await expect(page.getByText("Chart type")).toBeInTheDocument()
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    await expect(
      page.getByText("Where does this data come from?")
    ).toBeInTheDocument()
    await expect(await page.findByText("Download")).toBeInTheDocument()
    await expect(page.getByText("Delete")).toBeInTheDocument()
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

    await waitFor(() => expect(onErrorItemAction).toHaveBeenCalledOnce())
    await waitFor(() =>
      expect(page.queryByText("Manage filters")).not.toBeInTheDocument()
    )
  },
}

const loadingItem: DashboardItem = {
  id: "loading-growth",
  title: "Growth while loading",
  type: "chart",
  chart: { type: "line" },
  fetchData: () => new Promise<never>(() => {}),
}
const onLoadingItemAction = fn()

/**
 * Host actions remain available while the widget's data request is pending.
 */
export const ItemActionsInLoadingState: Story = {
  render: () => (
    <F0AnalyticsDashboard
      items={[loadingItem]}
      itemActions={() => [
        {
          id: "manage-filters",
          label: "Manage filters",
          icon: Filter,
          onClick: onLoadingItemAction,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const loadingRegion = canvasElement.querySelector('[aria-busy="true"]')

    if (!(loadingRegion instanceof HTMLElement)) {
      throw new Error("Expected the loading widget to render")
    }

    await expect(loadingRegion).toBeInTheDocument()
    await userEvent.click(page.getByLabelText("Other actions"))
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    await waitFor(() =>
      expect(page.queryByRole("menu")).not.toBeInTheDocument()
    )
  },
}

const fullscreenActionItems = mixedItems.filter((item) =>
  ["total-headcount", "avg-salary"].includes(item.id)
)

/**
 * Host actions are resolved again for the active widget after it enters
 * fullscreen.
 */
export const ItemActionsInFullscreen: Story = {
  render: () => (
    <F0AnalyticsDashboard
      items={fullscreenActionItems}
      itemActions={(item) => [
        {
          id: `manage-filters-${item.id}`,
          label: "Manage filters",
          icon: Filter,
          onClick: fn(),
        },
        {
          id: `reset-widget-${item.id}`,
          label: "Reset widget",
          icon: Reset,
          critical: true,
          onClick: fn(),
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const firstCard = canvasElement.querySelector(
      '[data-card-id="total-headcount"]'
    )

    if (!(firstCard instanceof HTMLElement)) {
      throw new Error("Expected the fullscreen widget to render")
    }

    await userEvent.click(within(firstCard).getByLabelText("Expand"))
    await expect(page.getByLabelText("Collapse")).toBeInTheDocument()
    await userEvent.click(page.getByLabelText("Other actions"))
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
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
        {
          id: `reset-widget-${item.id}`,
          label: "Reset widget",
          icon: Reset,
          critical: true,
          onClick: fn(),
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const page = within(canvasElement.closest("body")!)
    const chartCard = canvasElement.querySelector('[data-card-id="headcount"]')

    if (!(chartCard instanceof HTMLElement)) {
      throw new Error("Expected the snapshot chart to render")
    }

    await userEvent.click(within(chartCard).getByLabelText("Other actions"))
    await expect(page.getByText("Manage filters")).toBeInTheDocument()
    await expect(page.getByText("Reset widget")).toBeInTheDocument()
    await expect(await page.findByText("Download")).toBeInTheDocument()
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
