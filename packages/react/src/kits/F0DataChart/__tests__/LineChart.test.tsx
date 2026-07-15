import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

import { stubChartContainerLayout } from "./stubChartContainerLayout"

stubChartContainerLayout()

// ---------------------------------------------------------------------------
// ECharts mock
//
// We can't render real canvases in jsdom, so we mock the `echarts` module and
// capture every `setOption` call. The shared `lastSetOption` ref is what the
// tests inspect to assert on the option object the line chart hook produced.
// ---------------------------------------------------------------------------

const setOptionMock = vi.fn()

vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: setOptionMock,
    resize: vi.fn(),
    dispose: vi.fn(),
    isDisposed: vi.fn(() => false),
    getDom: vi.fn(() => document.createElement("div")),
    on: vi.fn(),
    off: vi.fn(),
  })),
  use: vi.fn(),
  getInstanceByDom: vi.fn(),
  graphic: {
    LinearGradient: vi.fn(function LinearGradient(this: object) {
      return this
    }),
  },
}))

vi.mock("echarts/components", () => ({
  AriaComponent: {},
}))

// ---------------------------------------------------------------------------
// useContainerSize mock — lets each test pin a discrete container width so we
// can assert on each responsive breakpoint without depending on jsdom layout.
// ---------------------------------------------------------------------------

const containerSize = { width: 800, height: 320 }

vi.mock("../utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    series: Array<{ areaStyle?: unknown }>
    legend?: { show?: boolean }
    xAxis: { axisLabel: { show: boolean } }
    yAxis: { axisLabel: { show: boolean } }
  }
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("LineChart — area mode", () => {
  it("renders area fill when there is exactly one series", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb", "Mar"]}
        series={[{ name: "Revenue", data: [1, 2, 3] }]}
        showArea
      />
    )

    const option = getLatestOption()
    expect(option.series).toHaveLength(1)
    expect(option.series[0].areaStyle).toBeDefined()
  })

  it("forces area off for multiple series even when showArea=true", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb", "Mar"]}
        series={[
          { name: "A", data: [1, 2, 3] },
          { name: "B", data: [3, 2, 1] },
        ]}
        showArea
      />
    )

    const option = getLatestOption()
    expect(option.series).toHaveLength(2)
    for (const s of option.series) {
      expect(s.areaStyle).toBeUndefined()
    }
  })

  it("forces area off even when a per-series override sets showArea=true", () => {
    render(
      <F0DataChart
        type="line"
        categories={["Jan", "Feb"]}
        series={[
          { name: "A", data: [1, 2], showArea: true },
          { name: "B", data: [2, 1], showArea: true },
        ]}
        showArea={false}
      />
    )

    const option = getLatestOption()
    for (const s of option.series) {
      expect(s.areaStyle).toBeUndefined()
    }
  })
})

describe("LineChart — responsive breakpoints", () => {
  const minimalProps = {
    type: "line" as const,
    categories: ["Jan", "Feb", "Mar"],
    series: [{ name: "A", data: [1, 2, 3] }],
  }

  it("hides legend and both axes at the small breakpoint (< 220px)", () => {
    containerSize.width = 180
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(false)
  })

  it("shows legend and Y axis but hides X axis at the medium breakpoint (220–519px)", () => {
    containerSize.width = 320
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("shows legend and both axes at the large breakpoint (>= 520px)", () => {
    containerSize.width = 720
    render(<F0DataChart {...minimalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })
})
