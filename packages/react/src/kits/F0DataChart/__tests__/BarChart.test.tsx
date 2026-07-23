import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"
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

type LabelLayoutParams = {
  rect: { width: number; height: number }
  labelRect: { width: number; height: number }
  dataIndex: number
}

function getMainSeries() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return (
    call[0] as {
      series: {
        label?: { position?: string; color?: string }
        emphasis?: { label?: { color?: string; show?: boolean } }
        labelLayout?: (p: LabelLayoutParams) => { fontSize?: number }
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

// ---------------------------------------------------------------------------
// hideOverflowingLabels — drop a category's value labels when the widest value
// won't fit the bar.
// ---------------------------------------------------------------------------

describe("BarChart — hideOverflowingLabels", () => {
  // jsdom has no canvas; return a deterministic width so the measurer is stable.
  beforeAll(() => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      measureText: (text: string) => ({ width: text.length * 8 }),
    } as unknown as CanvasRenderingContext2D)
  })
  afterAll(() => {
    vi.restoreAllMocks()
  })

  const base = {
    type: "bar" as const,
    categories: ["Jan", "Feb", "Mar"],
    series: [{ name: "A", data: [1, 2, 3] }],
    showLabels: true,
  }

  it("attaches a labelLayout by default (feature is on), and not when opted out", () => {
    render(<F0DataChart {...base} />)
    expect(typeof getMainSeries()[0]?.labelLayout).toBe("function")
    render(<F0DataChart {...base} hideOverflowingLabels={false} />)
    expect(getMainSeries()[0]?.labelLayout).toBeUndefined()
  })

  it("hides a column's labels only when the widest value doesn't fit the bar", () => {
    render(<F0DataChart {...base} hideOverflowingLabels />)
    const labelLayout = getMainSeries()[0]?.labelLayout
    expect(typeof labelLayout).toBe("function")

    // Single-digit values measure to ~8px; outside labels use 0 padding.
    const params = (barWidth: number): LabelLayoutParams => ({
      rect: { width: barWidth, height: 100 },
      labelRect: { width: 8, height: 12 },
      dataIndex: 0,
    })
    expect(labelLayout?.(params(100))).toEqual({}) // fits → keep
    expect(labelLayout?.(params(5))).toEqual({ fontSize: 0 }) // too narrow → hide
  })

  // Category "A" has a narrow value ("1") and "B" a wide one ("12345" ≈ 40px).
  const mixed = {
    type: "bar" as const,
    categories: ["A", "B"],
    series: [{ name: "S", data: [1, 12345] }],
    showLabels: true,
  }
  const columnA = {
    rect: { width: 30, height: 100 },
    labelRect: { width: 8, height: 12 },
    dataIndex: 0,
  }

  it("per-column (hideAllLabelsOnOverflow=false): keeps A's label even though B overflows", () => {
    render(
      <F0DataChart
        {...mixed}
        hideOverflowingLabels
        hideAllLabelsOnOverflow={false}
      />
    )
    expect(getMainSeries()[0]?.labelLayout?.(columnA)).toEqual({})
  })

  it("hideAllLabelsOnOverflow: B's horizontal overflow hides A's label too", () => {
    render(
      <F0DataChart {...mixed} hideOverflowingLabels hideAllLabelsOnOverflow />
    )
    expect(getMainSeries()[0]?.labelLayout?.(columnA)).toEqual({ fontSize: 0 })
  })

  it("horizontal stacked: hides a label only when it's wider than its own segment", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        stacked
        categories={["Row"]}
        series={[
          { name: "A", data: [100] },
          { name: "B", data: [100] },
        ]}
        showLabels
        hideOverflowingLabels
      />
    )
    const labelLayout = getMainSeries()[0]?.labelLayout
    // Tall segment so height never limits — this checks the per-segment WIDTH.
    const seg = (segWidth: number, labelWidth: number): LabelLayoutParams => ({
      rect: { width: segWidth, height: 100 },
      labelRect: { width: labelWidth, height: 12 },
      dataIndex: 0,
    })
    expect(labelLayout?.(seg(120, 27))).toEqual({}) // fits its segment
    expect(labelLayout?.(seg(20, 27))).toEqual({ fontSize: 0 }) // wider → hide
  })

  it("defaults fit padding to 12 inside a stacked segment (override lowers it)", () => {
    // A 100px label in a 120px segment fits only if per-side padding ≤ 10px, so
    // it's hidden at the 12px stacked default but shown once padding drops to 0.
    const seg: LabelLayoutParams = {
      rect: { width: 120, height: 100 },
      labelRect: { width: 100, height: 12 },
      dataIndex: 0,
    }
    const props = {
      type: "bar" as const,
      orientation: "horizontal" as const,
      stacked: true,
      categories: ["Row"],
      series: [
        { name: "A", data: [100] },
        { name: "B", data: [100] },
      ],
      showLabels: true,
    }
    render(<F0DataChart {...props} hideOverflowingLabels />)
    expect(getMainSeries()[0]?.labelLayout?.(seg)).toEqual({ fontSize: 0 }) // 12px default
    render(<F0DataChart {...props} hideOverflowingLabels labelFitPadding={0} />)
    expect(getMainSeries()[0]?.labelLayout?.(seg)).toEqual({}) // overridden to 0
  })

  it("defaults fit padding to 0 for labels outside the bar", () => {
    // "100" measures 24px; a 24px bar fits exactly only at 0 padding.
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [100] }]}
        showLabels
        hideOverflowingLabels
      />
    )
    const exact: LabelLayoutParams = {
      rect: { width: 24, height: 100 },
      labelRect: { width: 24, height: 12 },
      dataIndex: 0,
    }
    expect(getMainSeries()[0]?.labelLayout?.(exact)).toEqual({}) // 0px default → fits
  })
})

// ---------------------------------------------------------------------------
// tooltipValueFormatter — the tooltip can show precise values while the
// axis/labels stay compact.
// ---------------------------------------------------------------------------

describe("BarChart — tooltipValueFormatter", () => {
  function getTooltipFormatter() {
    const call = setOptionMock.mock.calls.at(-1)
    if (!call) throw new Error("setOption was never called")
    return (call[0] as { tooltip?: { formatter?: (p: unknown) => string } })
      .tooltip?.formatter
  }

  it("formats tooltip values independently of the compact axis/label formatter", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [107505] }]}
        valueFormatter={(v) => `${Math.round(v / 1000)}K`}
        tooltipValueFormatter={(v) => v.toLocaleString("en-US")}
      />
    )
    const html = getTooltipFormatter()?.([
      { axisValueLabel: "A", seriesName: "S", value: 107505, marker: "" },
    ])
    expect(html).toContain("107,505") // precise, grouped
    expect(html).not.toContain("K") // not the compact form
  })

  it("falls back to valueFormatter when no tooltipValueFormatter is given", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [107505] }]}
        valueFormatter={(v) => `${Math.round(v / 1000)}K`}
      />
    )
    const html = getTooltipFormatter()?.([
      { axisValueLabel: "A", seriesName: "S", value: 107505, marker: "" },
    ])
    expect(html).toContain("108K")
  })
})
