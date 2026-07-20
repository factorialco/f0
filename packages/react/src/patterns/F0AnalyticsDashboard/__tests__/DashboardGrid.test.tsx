import { afterEach, describe, expect, it, vi } from "vitest"

import { fireEvent, zeroRender as render, waitFor } from "@/testing/test-utils"

import type { DashboardItem } from "../types"

import { DashboardGrid } from "../components/DashboardGrid/DashboardGrid"

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

  describe("row resize", () => {
    function getResizeHandle(container: HTMLElement): HTMLElement {
      const handle = container.querySelector(".group\\/resize")
      if (!(handle instanceof HTMLElement)) {
        throw new Error("Expected a resize handle to be rendered")
      }
      return handle
    }

    function dragResizeHandle(handle: HTMLElement, deltaY: number) {
      fireEvent.mouseDown(handle, { clientY: 500 })
      fireEvent.mouseMove(document, { clientY: 500 + deltaY })
      fireEvent.mouseUp(document, { clientY: 500 + deltaY })
    }

    it("shrinks a row when dragging the handle up", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      expect(getDashboardRowHeight(container)).toBe("200px")

      dragResizeHandle(getResizeHandle(container), -50)

      expect(getDashboardRowHeight(container)).toBe("150px")
    })

    it("shrinks a row back after growing it", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(144)} filters={{}} editMode />
      )

      dragResizeHandle(getResizeHandle(container), 100)
      expect(getDashboardRowHeight(container)).toBe("244px")

      dragResizeHandle(getResizeHandle(container), -100)
      expect(getDashboardRowHeight(container)).toBe("144px")
    })

    it("clamps shrinking to the per-type minimum height", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      // Metric rows have a 120px minimum
      dragResizeHandle(getResizeHandle(container), -500)

      expect(getDashboardRowHeight(container)).toBe("120px")
    })

    it("clamps shrinking to overflowing content height", () => {
      vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
        function getScrollHeight(this: HTMLElement) {
          if (this.dataset.cardId === "headcount") return 180
          return 0
        }
      )

      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      // Content genuinely overflows (scrollHeight 180 > clientHeight 0), so
      // the row cannot be dragged below 180px even though the metric type
      // minimum is 120px.
      dragResizeHandle(getResizeHandle(container), -500)

      expect(getDashboardRowHeight(container)).toBe("180px")
    })
  })
})
