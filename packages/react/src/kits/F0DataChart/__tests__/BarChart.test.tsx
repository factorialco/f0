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
    xAxis: { axisLabel: { show: boolean }; inverse?: boolean }
    yAxis: { axisLabel: { show: boolean }; inverse?: boolean }
  }
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

  it("inverts the category axis on horizontal bars so rows read top-to-bottom in data order", () => {
    render(<F0DataChart {...verticalProps} orientation="horizontal" />)

    const option = getLatestOption()
    expect(option.yAxis.inverse).toBe(true)
    expect(option.xAxis.inverse).toBeUndefined()
  })

  it("does not invert any axis on vertical bars", () => {
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    expect(option.xAxis.inverse).toBeUndefined()
    expect(option.yAxis.inverse).toBeUndefined()
  })
})
