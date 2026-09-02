import { describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import type { DashboardMetricData, DashboardMetricItem } from "../types"

import { F0AnalyticsDashboard } from "../F0AnalyticsDashboard"

const containerSize = vi.hoisted(() => ({ width: 320, height: 0 }))

vi.mock("@/kits/F0DataChart/utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

function metricItem(
  fetchData: DashboardMetricItem["fetchData"]
): DashboardMetricItem {
  return { id: "headcount", title: "Headcount", type: "metric", fetchData }
}

/** The widget card, which must survive a `dataKey` change untouched. */
function widgetCard(): HTMLElement {
  return screen.getByText("Headcount").closest("[class*='dashitem']")!
}

describe("F0AnalyticsDashboard comparison props", () => {
  it("refetches every item on a dataKey change without remounting the grid", async () => {
    const fetchData = vi
      .fn<DashboardMetricItem["fetchData"]>()
      .mockResolvedValueOnce({ value: 10 })
      .mockResolvedValueOnce({ value: 20 })

    const { rerender } = render(
      <F0AnalyticsDashboard items={[metricItem(fetchData)]} dataKey="none" />
    )

    await screen.findByText("10")
    const card = widgetCard()

    rerender(
      <F0AnalyticsDashboard
        items={[metricItem(fetchData)]}
        dataKey="previous_period"
      />
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))
    await screen.findByText("20")
    expect(widgetCard()).toBe(card)
  })

  it("keeps the previous value on screen, marked busy, until the new one arrives", async () => {
    let resolveSecond: ((data: DashboardMetricData) => void) | undefined
    const fetchData = vi
      .fn<DashboardMetricItem["fetchData"]>()
      .mockResolvedValueOnce({ value: 10 })
      .mockImplementationOnce(
        () =>
          new Promise<DashboardMetricData>((resolve) => {
            resolveSecond = resolve
          })
      )

    const { rerender } = render(
      <F0AnalyticsDashboard items={[metricItem(fetchData)]} dataKey="none" />
    )

    await screen.findByText("10")

    rerender(
      <F0AnalyticsDashboard
        items={[metricItem(fetchData)]}
        dataKey="previous_period"
      />
    )

    await waitFor(() =>
      expect(widgetCard()).toHaveAttribute("aria-busy", "true")
    )
    expect(screen.getByText("10")).toBeInTheDocument()

    resolveSecond?.({ value: 20 })

    await screen.findByText("20")
    expect(widgetCard()).not.toHaveAttribute("aria-busy")
  })

  it("does not refetch when dataKey is absent", async () => {
    const fetchData = vi.fn().mockResolvedValue({ value: 10 })

    const { rerender } = render(
      <F0AnalyticsDashboard items={[metricItem(fetchData)]} />
    )

    await screen.findByText("10")
    rerender(<F0AnalyticsDashboard items={[metricItem(fetchData)]} />)

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))
  })

  it("renders navigationActions in the header row", async () => {
    render(
      <F0AnalyticsDashboard
        items={[metricItem(() => Promise.resolve({ value: 10 }))]}
        navigationActions={<button type="button">Compare to</button>}
      />
    )

    expect(
      screen.getByRole("button", { name: "Compare to" })
    ).toBeInTheDocument()
  })

  it("renders no header row when navigationActions is absent", async () => {
    render(
      <F0AnalyticsDashboard
        items={[metricItem(() => Promise.resolve({ value: 10 }))]}
      />
    )

    await screen.findByText("10")
    expect(screen.queryByRole("button", { name: "Compare to" })).toBeNull()
  })
})
