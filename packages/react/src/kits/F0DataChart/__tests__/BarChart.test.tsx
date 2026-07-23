import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

// ---------------------------------------------------------------------------
// Same ECharts mock + container size mock as LineChart.test.tsx so the two
// suites assert on the live `setOption` payload at each breakpoint.
// ---------------------------------------------------------------------------

const setOptionMock = vi.fn()

vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: setOptionMock,
    resize: vi.fn(),
    dispose: vi.fn(),
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

const containerSize = { width: 800, height: 320 }

vi.mock("../utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    legend?: { show?: boolean }
    xAxis: { axisLabel: { show: boolean } }
    yAxis: { axisLabel: { show: boolean } }
  }
}

function getMainSeries() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return (
    call[0] as {
      series: {
        label?: { position?: string; color?: string }
        emphasis?: { label?: { color?: string; show?: boolean } }
      }[]
    }
  ).series
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("BarChart — responsive breakpoints", () => {
  const verticalProps = {
    type: "bar" as const,
    categories: ["Jan", "Feb", "Mar"],
    series: [{ name: "A", data: [1, 2, 3] }],
  }

  it("hides legend and both axes at the small breakpoint (< 220px)", () => {
    containerSize.width = 180
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    // Vertical bars: X = category axis, Y = value axis. Both should be hidden.
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(false)
  })

  it("shows legend and the value axis but hides the category axis at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    // X = category (hidden at md), Y = value (shown at md)
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("shows legend and both axes at the large breakpoint (>= 520px)", () => {
    containerSize.width = 720
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("respects orientation: in horizontal bars the category axis lives on Y", () => {
    containerSize.width = 320 // medium breakpoint → category axis hidden
    render(<F0DataChart {...verticalProps} orientation="horizontal" />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    // Horizontal bars: X = value axis (shown at md), Y = category axis (hidden at md)
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// Label placement — stacked bars center the value inside each segment (white);
// single/grouped bars keep it outside the bar in the neutral colour.
// ---------------------------------------------------------------------------

describe("BarChart — label placement", () => {
  const base = {
    type: "bar" as const,
    categories: ["A", "B"],
    showLabels: true,
  }

  it("centers labels inside the segment and paints them white when stacked", () => {
    render(
      <F0DataChart
        {...base}
        stacked
        series={[
          { name: "X", data: [1, 2] },
          { name: "Y", data: [3, 4] },
        ]}
      />
    )
    const series = getMainSeries()[0]
    expect(series?.label?.position).toBe("inside")
    expect(series?.label?.color).toBe("rgba(255, 255, 255, 0.85)")
    // Full white on hover.
    expect(series?.emphasis?.label?.color).toBe("#ffffff")
  })

  it("places labels above the bar in the neutral colour when not stacked", () => {
    render(<F0DataChart {...base} series={[{ name: "X", data: [1, 2] }]} />)
    const label = getMainSeries()[0]?.label
    expect(label?.position).toBe("top")
    expect(label?.color).not.toBe("rgba(255, 255, 255, 0.85)")
  })

  it("does not reveal labels on hover for stacked bars when showLabels is off", () => {
    // showLabels defaults to false — the emphasis (hover) state must not turn
    // labels on, otherwise numbers would flash in on hover.
    render(
      <F0DataChart
        type="bar"
        categories={["A", "B"]}
        stacked
        series={[
          { name: "X", data: [1, 2] },
          { name: "Y", data: [3, 4] },
        ]}
      />
    )
    expect(getMainSeries()[0]?.emphasis?.label?.show).not.toBe(true)
  })
})
