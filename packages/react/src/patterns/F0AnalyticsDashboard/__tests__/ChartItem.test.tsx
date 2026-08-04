import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import type { DashboardChartData, DashboardChartItem } from "../types"

import { ChartItem } from "../components/ChartItem/ChartItem"

// Canvas rendering is not testable in jsdom — the empty-state and table paths
// under test render before ECharts is ever touched.
vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn(),
    getDom: vi.fn(() => document.createElement("div")),
    on: vi.fn(),
    off: vi.fn(),
  })),
  use: vi.fn(),
  getInstanceByDom: vi.fn(),
  graphic: { LinearGradient: vi.fn() },
}))

vi.mock("echarts/components", () => ({ AriaComponent: {} }))

/**
 * The div ECharts mounts into — its presence is the signal that a chart, and
 * not the empty state or the fallback table, is what got rendered.
 */
function chartCanvasHost(container: HTMLElement) {
  return container.querySelector("[data-axis-hover]")
}

const barData: DashboardChartData = {
  categories: ["Engineering", "Design"],
  series: [{ name: "Headcount", data: [12, 4] }],
}

function chartItem(
  overrides: Partial<DashboardChartItem> = {}
): DashboardChartItem {
  return {
    id: "headcount-by-team",
    type: "chart",
    title: "Headcount by team",
    chart: { type: "bar" },
    fetchData: () => Promise.resolve(barData),
    ...overrides,
  }
}

describe("ChartItem empty states", () => {
  it("shows the default copy when the item resolves without data", async () => {
    render(
      <ChartItem
        item={chartItem({
          fetchData: () =>
            Promise.resolve(undefined as unknown as DashboardChartData),
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No data available")).toBeInTheDocument()
    expect(
      screen.getByText("Try a different date or fewer filters")
    ).toBeInTheDocument()
  })

  it("prefers the per-item copy when the item resolves without data", async () => {
    render(
      <ChartItem
        item={chartItem({
          fetchData: () =>
            Promise.resolve(undefined as unknown as DashboardChartData),
          emptyState: {
            title: "No headcount yet",
            description: "Hire someone to see this chart.",
          },
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No headcount yet")).toBeInTheDocument()
    expect(
      screen.getByText("Hire someone to see this chart.")
    ).toBeInTheDocument()
    expect(screen.queryByText("No data available")).not.toBeInTheDocument()
  })

  it("prefers the per-item copy for the in-chart empty state too", async () => {
    // Data resolves, but with no points — `F0DataChart` renders the empty
    // state itself here, so the override has to reach it through chartProps.
    render(
      <ChartItem
        item={chartItem({
          fetchData: () => Promise.resolve({ categories: [], series: [] }),
          emptyState: { title: "No headcount yet" },
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No headcount yet")).toBeInTheDocument()
  })

  it("honours the per-item render escape hatch", async () => {
    render(
      <ChartItem
        item={chartItem({
          fetchData: () => Promise.resolve({ categories: [], series: [] }),
          emptyState: { render: () => <div>Nothing to see</div> },
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("Nothing to see")).toBeInTheDocument()
  })
})

describe("ChartItem chart → table fallback", () => {
  /** A heatmap is the one target the adapter cannot build from 1D series. */
  const unbuildableItem = (overrides: Partial<DashboardChartItem> = {}) =>
    chartItem({ chart: { type: "heatmap" }, ...overrides })

  it("falls back to the table when the requested chart cannot be built", async () => {
    render(<ChartItem item={unbuildableItem()} filters={{}} />)

    // The tabular view of the same data, rendered instead of an empty frame.
    expect(await screen.findByText("Engineering")).toBeInTheDocument()
    expect(screen.getByText("Design")).toBeInTheDocument()
    expect(screen.queryByText("No data available")).not.toBeInTheDocument()
  })

  it("keeps the empty state for genuinely empty data", async () => {
    render(
      <ChartItem
        item={unbuildableItem({
          fetchData: () => Promise.resolve({ categories: [], series: [] }),
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No data available")).toBeInTheDocument()
  })

  it("keeps the empty state when the data has categories but no points", async () => {
    render(
      <ChartItem
        item={unbuildableItem({
          fetchData: () =>
            Promise.resolve({
              categories: ["Engineering"],
              series: [{ name: "Headcount", data: [] }],
            }),
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No data available")).toBeInTheDocument()
    expect(screen.queryByText("Engineering")).not.toBeInTheDocument()
  })

  it("does not fall back for a chart that renders fine", async () => {
    const { container } = render(<ChartItem item={chartItem()} filters={{}} />)

    await waitFor(() => expect(chartCanvasHost(container)).toBeInTheDocument())
    expect(screen.queryByText("Engineering")).not.toBeInTheDocument()
  })

  it("stays on the chart when the consumer disables empty handling", async () => {
    const { container } = render(
      <ChartItem
        item={unbuildableItem({ emptyState: { disabled: true } })}
        filters={{}}
      />
    )

    await waitFor(() => expect(chartCanvasHost(container)).toBeInTheDocument())
    expect(screen.queryByText("Engineering")).not.toBeInTheDocument()
  })

  it("lets the user switch back to a chart from the fallback table", async () => {
    const user = userEvent.setup()
    const onTransformChart = vi.fn()

    render(
      <ChartItem
        item={unbuildableItem()}
        filters={{}}
        onTransformChart={onTransformChart}
      />
    )

    await screen.findByText("Engineering")
    await user.click(screen.getByLabelText("Other actions"))
    await user.click(await screen.findByRole("radio", { name: "Line" }))

    expect(onTransformChart).toHaveBeenCalledWith(
      "headcount-by-team",
      "line",
      undefined
    )
    await waitFor(() =>
      expect(screen.queryByText("Engineering")).not.toBeInTheDocument()
    )
  })
})
