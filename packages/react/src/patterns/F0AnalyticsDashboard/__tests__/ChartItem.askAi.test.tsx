import { describe, expect, it, vi } from "vitest"

import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import type { F0DataChartPointClick } from "@/kits/F0DataChart"

import type { DashboardChartItem } from "../types"

import { ChartItem } from "../components/ChartItem/ChartItem"

/** The mark a click lands on, as `usePointClick` would report it. */
const POINT: F0DataChartPointClick = {
  seriesName: "Male",
  category: "Barcelona office",
  value: 18,
  values: [18],
  series: [{ name: "Male", seriesIndex: 0, value: 18 }],
  dataIndex: 0,
  seriesIndex: 0,
  clientX: 400,
  clientY: 300,
}

// Standing in for the chart itself: jsdom can't render a canvas, and what
// matters here is only what ChartItem does with a reported mark.
vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: ({
      onPointClick,
    }: {
      onPointClick?: (point: F0DataChartPointClick) => void
    }) => (
      <button type="button" onClick={() => onPointClick?.(POINT)}>
        mark
      </button>
    ),
  }
})

const item: DashboardChartItem = {
  id: "headcount",
  title: "Headcount by workplace",
  type: "chart",
  chart: { type: "bar" },
  fetchData: () =>
    Promise.resolve({
      categories: ["Barcelona office"],
      series: [{ name: "Male", data: [18] }],
    }),
}

const pickAMark = async () => {
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
  )
  await userEvent.click(screen.getByRole("button", { name: "mark" }))
  await userEvent.click(screen.getByRole("button", { name: "Ask One" }))
}

describe("ChartItem — asking about a mark", () => {
  it("hands the host the mark, not a sentence built from it", async () => {
    const onAskAi = vi.fn()
    render(<ChartItem item={item} filters={{}} onAskAi={onAskAi} />)

    await pickAMark()

    // The raw point, so the host phrases it — it owns the copy and has the
    // formatters. `point` is what separates this from the ⋯ menu's ask.
    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      point: POINT,
    })
  })

  it("offers the click with no chat mounted, once the host answers it", async () => {
    const onAskAi = vi.fn()
    render(<ChartItem item={item} filters={{}} onAskAi={onAskAi} />)

    // No AiChatStateProvider anywhere: without a handler the chart would be
    // inert, since nothing could answer the click.
    await pickAMark()

    expect(onAskAi).toHaveBeenCalledTimes(1)
  })
})
