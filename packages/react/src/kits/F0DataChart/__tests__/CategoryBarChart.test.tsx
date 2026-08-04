import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

// Mock ECharts — pulled in transitively by the canvas variants
vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn(),
    getDom: vi.fn(() => document.createElement("div")),
  })),
  use: vi.fn(),
  getInstanceByDom: vi.fn(),
  graphic: {
    LinearGradient: vi.fn(),
  },
}))

vi.mock("echarts/components", () => ({
  AriaComponent: {},
}))

const data = [
  { name: "Engineering", value: 60 },
  { name: "Sales", value: 30 },
  { name: "Design", value: 10 },
]

describe("CategoryBarChart", () => {
  it("renders one segment per data point with proportional widths", () => {
    render(<F0DataChart type="categoryBar" data={data} />)

    const segments = screen.getAllByRole("img")
    expect(segments).toHaveLength(3)
    // Segment width lives on the tooltip trigger wrapping the segment
    expect(segments[0].closest("[style*='width']")).toHaveStyle({
      width: "60%",
    })
  })

  it("skips zero-value segments entirely", () => {
    render(
      <F0DataChart
        type="categoryBar"
        data={[
          { name: "Active", value: 90 },
          { name: "Invited", value: 0 },
          { name: "Suspended", value: 10 },
        ]}
      />
    )

    const segments = screen.getAllByRole("img")
    expect(segments).toHaveLength(2)
    expect(
      segments.find((s) => s.getAttribute("title") === "Invited")
    ).toBeUndefined()
  })

  it("shows the legend by default", () => {
    render(<F0DataChart type="categoryBar" data={data} />)

    const legendItems = screen.getAllByRole("listitem")
    expect(legendItems).toHaveLength(3)
    expect(legendItems[0]).toHaveTextContent("Engineering")
  })

  it("hides the legend with showLegend: false", () => {
    render(<F0DataChart type="categoryBar" data={data} showLegend={false} />)

    expect(screen.queryByRole("list")).not.toBeInTheDocument()
  })

  it("applies a custom color token to a segment", () => {
    render(
      <F0DataChart
        type="categoryBar"
        data={[{ name: "Approved", value: 100, color: "viridian" }]}
      />
    )

    const [segment] = screen.getAllByRole("img")
    // resolveChartColorToken resolves to a concrete hex — assert it's set
    expect(segment.style.backgroundColor).not.toBe("")
  })

  it("renders the empty state for an empty data array", () => {
    render(<F0DataChart type="categoryBar" data={[]} />)

    expect(screen.queryAllByRole("img")).toHaveLength(0)
    expect(screen.getByText("No data available")).toBeInTheDocument()
  })

  it("renders the empty state for an all-zero dataset", () => {
    render(
      <F0DataChart
        type="categoryBar"
        data={[
          { name: "A", value: 0 },
          { name: "B", value: 0 },
        ]}
      />
    )

    expect(screen.getByText("No data available")).toBeInTheDocument()
  })
})
