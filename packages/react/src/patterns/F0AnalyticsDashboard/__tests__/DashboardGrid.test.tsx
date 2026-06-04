import { describe, expect, it } from "vitest"
import { zeroRender as render, waitFor } from "@/testing/test-utils"

import { DashboardGrid } from "../components/DashboardGrid/DashboardGrid"
import type { DashboardItem } from "../types"

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
})
