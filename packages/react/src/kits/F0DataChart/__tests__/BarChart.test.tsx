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

type BarDataItem = number | { value: number; itemStyle?: BarItemStyle }
type BarItemStyle = { color?: string; borderRadius?: number | number[] }

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    legend?: { show?: boolean }
    xAxis: { axisLabel: { show: boolean } }
    yAxis: { axisLabel: { show: boolean } }
    series: { data: BarDataItem[]; itemStyle: BarItemStyle }[]
  }
}

/** Corner radii of every bar in a series, `undefined` for plain-number data */
function getBorderRadii(seriesIndex: number) {
  return getLatestOption().series[seriesIndex].data.map((item) =>
    typeof item === "number" ? undefined : item.itemStyle?.borderRadius
  )
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

describe("BarChart — corner rounding", () => {
  const categories = ["Jan", "Feb", "Mar"]

  it("keeps the radius on the series when every value is positive", () => {
    render(
      <F0DataChart
        type="bar"
        categories={categories}
        series={[{ name: "A", data: [1, 2, 3] }]}
      />
    )

    const option = getLatestOption()
    expect(option.series[0].data).toEqual([1, 2, 3])
    expect(option.series[0].itemStyle.borderRadius).toEqual([4, 4, 0, 0])
  })

  it("rounds negative vertical bars at the bottom, away from the zero line", () => {
    render(
      <F0DataChart
        type="bar"
        categories={categories}
        series={[{ name: "A", data: [5, -5, 0] }]}
      />
    )

    expect(getBorderRadii(0)).toEqual([
      [4, 4, 0, 0],
      [0, 0, 4, 4],
      [4, 4, 0, 0],
    ])
  })

  it("rounds negative horizontal bars on the left, away from the zero line", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={categories}
        series={[{ name: "A", data: [5, -5, 0] }]}
      />
    )

    expect(getBorderRadii(0)).toEqual([
      [0, 4, 4, 0],
      [4, 0, 0, 4],
      [0, 4, 4, 0],
    ])
  })

  it("keeps per-bar color overrides alongside the negative radius", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["Jan", "Feb"]}
        series={[
          {
            name: "A",
            data: [
              { value: 5, color: "malibu" },
              { value: -5, color: "red" },
            ],
          },
        ]}
      />
    )

    const [positive, negative] = getLatestOption().series[0].data
    if (typeof positive === "number" || typeof negative === "number") {
      throw new Error("expected data items with itemStyle")
    }
    expect(positive.itemStyle?.color).toBeDefined()
    expect(negative.itemStyle?.color).toBeDefined()
    expect(negative.itemStyle?.borderRadius).toEqual([0, 0, 4, 4])
  })

  it("rounds only the outer segment of each sign when stacked", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Jan"]}
        series={[
          { name: "A", data: [10] },
          { name: "B", data: [5] },
          { name: "C", data: [-3] },
          { name: "D", data: [-7] },
        ]}
      />
    )

    // A and C are sandwiched by B (positive) and D (negative) respectively
    expect(getBorderRadii(0)).toEqual([0])
    expect(getBorderRadii(1)).toEqual([[4, 4, 0, 0]])
    expect(getBorderRadii(2)).toEqual([0])
    expect(getBorderRadii(3)).toEqual([[0, 0, 4, 4]])
  })
})
