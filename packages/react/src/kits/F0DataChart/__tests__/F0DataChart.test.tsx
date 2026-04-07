import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

// Mock ECharts — canvas rendering is not testable in jsdom
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

describe("F0DataChart", () => {
  it("renders a bar chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="bar"
        categories={["Q1", "Q2"]}
        series={[{ name: "Revenue", data: [100, 200] }]}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a line chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb"]}
        series={[{ name: "Trend", data: [10, 20] }]}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a funnel chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="funnel"
        series={{
          name: "Pipeline",
          data: [
            { value: 100, name: "Stage 1" },
            { value: 50, name: "Stage 2" },
          ],
        }}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a pie chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="pie"
        series={{
          name: "Distribution",
          data: [
            { value: 60, name: "A" },
            { value: 40, name: "B" },
          ],
        }}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a radar chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="radar"
        indicators={[{ name: "Speed" }, { name: "Power" }]}
        series={[{ name: "Player", data: [80, 60] }]}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a gauge chart without crashing", () => {
    const { container } = render(<F0DataChart type="gauge" value={75} />)
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders a heatmap chart without crashing", () => {
    const { container } = render(
      <F0DataChart
        type="heatmap"
        xCategories={["Mon", "Tue"]}
        yCategories={["AM", "PM"]}
        data={[
          [0, 0, 5],
          [1, 1, 10],
        ]}
      />
    )
    expect(container.querySelector("div")).toBeInTheDocument()
  })

  it("renders funnel labels with point names", () => {
    const { container } = render(
      <F0DataChart
        type="funnel"
        showLabels={true}
        series={{
          name: "Pipeline",
          data: [
            { value: 100, name: "Applied" },
            { value: 50, name: "Hired" },
          ],
        }}
      />
    )
    expect(container.textContent).toContain("Applied")
    expect(container.textContent).toContain("Hired")
  })

  it("renders funnel conversion percentages when enabled", () => {
    const { container } = render(
      <F0DataChart
        type="funnel"
        showConversion={true}
        series={{
          name: "Pipeline",
          data: [
            { value: 100, name: "Applied" },
            { value: 50, name: "Hired" },
          ],
        }}
      />
    )
    expect(container.textContent).toContain("50.0%")
  })
})
