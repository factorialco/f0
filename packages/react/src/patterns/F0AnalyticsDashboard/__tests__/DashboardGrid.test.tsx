import { userEvent } from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import {
  zeroRender as render,
  screen,
  waitFor,
  within,
} from "@/testing/test-utils"

import { DashboardGrid } from "../components/DashboardGrid/DashboardGrid"
import type { DashboardItem } from "../types"

type ExpenseRecord = {
  employee: string
  category: string
  amount: number
}

const expenseTableVisualization = {
  type: "table",
  options: {
    columns: [
      { label: "Employee", render: (item: ExpenseRecord) => item.employee },
      { label: "Category", render: (item: ExpenseRecord) => item.category },
      { label: "Amount", render: (item: ExpenseRecord) => item.amount },
    ],
  },
}

function makeMetricItems(itemHeight: number): DashboardItem[] {
  return [
    {
      id: "headcount",
      type: "metric",
      title: "Headcount",
      itemHeight,
      fetchData: async () => ({ value: 42 }),
    },
    {
      id: "turnover",
      type: "metric",
      title: "Turnover",
      fetchData: async () => ({ value: 7 }),
    },
  ]
}

function makeCollectionItems(itemHeight: number): DashboardItem[] {
  return [
    {
      id: "expenses",
      type: "collection",
      title: "Expenses",
      itemHeight,
      visualizations: [expenseTableVisualization],
      createSource: () => ({
        dataAdapter: {
          fetchData: async () => ({ records: [], total: 0 }),
        },
      }),
    },
    {
      id: "category-totals",
      type: "collection",
      title: "Category totals",
      itemHeight: 480,
      visualizations: [expenseTableVisualization],
      createSource: () => ({
        dataAdapter: {
          fetchData: async () => ({ records: [], total: 0 }),
        },
      }),
    },
  ]
}

function getDashboardRowHeight(container: HTMLElement): string {
  const card = container.querySelector('[data-card-id="headcount"]')
  if (!(card instanceof HTMLElement)) {
    throw new Error("Expected dashboard item to be rendered")
  }

  const row = card.parentElement
  if (!(row instanceof HTMLElement)) {
    throw new Error("Expected dashboard row to be rendered")
  }

  return row.style.height
}

describe("DashboardGrid", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("recomputes row height when itemHeight changes for existing items", async () => {
    const { container, rerender } = render(
      <DashboardGrid items={makeMetricItems(144)} filters={{}} />
    )

    expect(getDashboardRowHeight(container)).toBe("144px")

    rerender(<DashboardGrid items={makeMetricItems(288)} filters={{}} />)

    await waitFor(() => {
      expect(getDashboardRowHeight(container)).toBe("288px")
    })
  })

  it("renders and invokes host actions for metric, chart, and collection items", async () => {
    const onAction = vi.fn()
    const itemActions = vi.fn((item: DashboardItem) => [
      {
        id: `manage-${item.id}`,
        label: `Manage ${item.id}`,
        onClick: () => onAction(item.id),
      },
    ])
    const items: DashboardItem[] = [
      {
        id: "headcount",
        type: "metric",
        title: "Headcount",
        fetchData: async () => ({ value: 42 }),
      },
      {
        id: "growth",
        type: "chart",
        title: "Growth",
        chart: { type: "line" },
        fetchData: () => new Promise(() => {}),
      },
      {
        id: "expenses",
        type: "collection",
        title: "Expenses",
        visualizations: [expenseTableVisualization],
        createSource: () => ({
          dataAdapter: {
            fetchData: async () => ({ records: [], total: 0 }),
          },
        }),
      },
    ]

    render(
      <DashboardGrid items={items} filters={{}} itemActions={itemActions} />
    )

    expect(new Set(itemActions.mock.calls.map(([item]) => item.id))).toEqual(
      new Set(["headcount", "growth", "expenses"])
    )

    for (const item of items) {
      const card = document.querySelector(`[data-card-id="${item.id}"]`)
      if (!(card instanceof HTMLElement)) {
        throw new Error(`Expected ${item.id} dashboard item to be rendered`)
      }

      await userEvent.click(within(card).getByLabelText("Other actions"))
      await userEvent.click(screen.getByText(`Manage ${item.id}`))
    }

    expect(onAction.mock.calls).toEqual([
      ["headcount"],
      ["growth"],
      ["expenses"],
    ])
  })

  it("keeps host actions available after a metric enters fullscreen", async () => {
    const onAction = vi.fn()
    render(
      <DashboardGrid
        items={makeMetricItems(144)}
        filters={{}}
        itemActions={(item) => [
          {
            id: `manage-${item.id}`,
            label: `Manage ${item.id}`,
            onClick: () => onAction(item.id),
          },
        ]}
      />
    )

    const card = document.querySelector('[data-card-id="headcount"]')
    if (!(card instanceof HTMLElement)) {
      throw new Error("Expected headcount dashboard item to be rendered")
    }

    await userEvent.click(within(card).getByLabelText("Expand"))
    await userEvent.click(screen.getByLabelText("Other actions"))
    await userEvent.click(screen.getByText("Manage headcount"))

    expect(onAction).toHaveBeenCalledWith("headcount")
  })

  it("renders host actions for a single-item dashboard", async () => {
    const onAction = vi.fn()
    const [item] = makeMetricItems(144)

    render(
      <DashboardGrid
        items={[item]}
        filters={{}}
        itemActions={() => [
          {
            id: "manage-headcount",
            label: "Manage headcount",
            onClick: onAction,
          },
        ]}
      />
    )

    await userEvent.click(screen.getByLabelText("Other actions"))
    await userEvent.click(screen.getByText("Manage headcount"))

    expect(onAction).toHaveBeenCalledOnce()
  })

  it("recomputes collection row height when itemHeight changes after data loads", async () => {
    const { container, rerender } = render(
      <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
    )

    const collectionCard = container.querySelector('[data-card-id="expenses"]')
    if (!(collectionCard instanceof HTMLElement)) {
      throw new Error("Expected collection item to be rendered")
    }

    const collectionRow = collectionCard.parentElement
    if (!(collectionRow instanceof HTMLElement)) {
      throw new Error("Expected collection row to be rendered")
    }

    expect(collectionRow.style.height).toBe("480px")

    rerender(<DashboardGrid items={makeCollectionItems(960)} filters={{}} />)

    await waitFor(() => {
      expect(collectionRow.style.height).toBe("960px")
    })
  })

  it("grows a row when loaded content is taller than the configured itemHeight", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
      function getScrollHeight(this: HTMLElement) {
        if (this.dataset.cardId === "expenses") return 960
        return 0
      }
    )

    const { container } = render(
      <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
    )

    const collectionCard = container.querySelector('[data-card-id="expenses"]')
    if (!(collectionCard instanceof HTMLElement)) {
      throw new Error("Expected collection item to be rendered")
    }

    const collectionRow = collectionCard.parentElement
    if (!(collectionRow instanceof HTMLElement)) {
      throw new Error("Expected collection row to be rendered")
    }

    await waitFor(() => {
      expect(collectionRow.style.height).toBe("960px")
    })
  })
})
