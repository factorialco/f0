import { describe, expect, it } from "vitest"
import { zeroRender as render, waitFor } from "@/testing/test-utils"

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
})
