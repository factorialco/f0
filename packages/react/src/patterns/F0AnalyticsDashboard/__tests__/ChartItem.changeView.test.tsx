import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import type { F0DataChartProps } from "@/kits/F0DataChart"

import type { DashboardChartData, DashboardChartItem } from "../types"

import { ChartItem } from "../components/ChartItem/ChartItem"

// jsdom has no canvas; what the chart was asked to draw is what matters here.
vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: (props: F0DataChartProps) => (
      <div role="img" aria-label="Chart">
        {props.type === "bar" ? props.categories.join(" | ") : props.type}
      </div>
    ),
  }
})

const data: DashboardChartData = {
  categories: ["Sales", "Operations", "Legal"],
  series: [{ name: "This period", data: [58, 61, 4] }],
}

const comparison: DashboardChartData["categoryComparison"] = {
  byCategory: {
    Sales: { direction: "up", label: "+4", delta: 4 },
    Operations: { direction: "down", label: "−9", delta: 9 },
  },
  added: ["Legal"],
  removed: ["Support"],
}

const item = (chartData: DashboardChartData): DashboardChartItem => ({
  id: "headcount",
  title: "Headcount by department",
  type: "chart",
  chart: { type: "bar" },
  fetchData: () => Promise.resolve(chartData),
})

const openMenu = () => userEvent.click(screen.getByLabelText("Other actions"))

describe("ChartItem — change view", () => {
  it("offers no change view without a comparison", async () => {
    render(<ChartItem item={item(data)} filters={{}} />)

    await screen.findByLabelText("Chart")
    await openMenu()
    expect(screen.queryByText("Show change")).toBeNull()
  })

  it("swaps the values for ranked deltas and back from the menu", async () => {
    render(
      <ChartItem
        item={item({ ...data, categoryComparison: comparison })}
        filters={{}}
      />
    )

    expect(await screen.findByLabelText("Chart")).toHaveTextContent(
      "Sales | Operations | Legal"
    )
    expect(
      screen.getByText("1 up · 1 down · 1 new · 1 gone")
    ).toBeInTheDocument()

    await openMenu()
    await userEvent.click(screen.getByText("Show change"))
    expect(screen.getByLabelText("Chart")).toHaveTextContent(
      "Legal (New) | Operations | Sales | Support (Gone)"
    )

    await openMenu()
    await userEvent.click(screen.getByText("Show values"))
    expect(screen.getByLabelText("Chart")).toHaveTextContent(
      "Sales | Operations | Legal"
    )
  })
})
