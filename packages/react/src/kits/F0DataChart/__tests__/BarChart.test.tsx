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
import { resolveChartTheme } from "../utils/theme"

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
    grid?: { right?: number | string }
    xAxis: {
      axisLabel: { show: boolean; interval?: number }
      splitNumber?: number
      inverse?: boolean
    }
    yAxis: {
      axisLabel: { show: boolean; interval?: number }
      splitNumber?: number
      inverse?: boolean
    }
    aria?: {
      enabled?: boolean
      label?: { enabled?: boolean; description?: string }
    }
    series: { data: BarDataItem[]; itemStyle: BarItemStyle }[]
  }
}

type LabelLayoutParams = {
  rect: { width: number; height: number }
  labelRect: { x?: number; width: number; height: number }
  dataIndex: number
}

function getMainSeries() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return (
    call[0] as {
      series: {
        data?: {
          label?: { color?: string }
          emphasis?: { label?: { color?: string } }
        }[]
        label?: {
          position?: string
          color?: string
          fontSize?: number
          formatter?: (params: { value: number }) => string
        }
        itemStyle?: { borderColor?: string; borderWidth?: number }
        emphasis?: {
          label?: { color?: string; show?: boolean }
          focus?: string
        }
        blur?: {
          itemStyle?: { opacity?: number }
          label?: { opacity?: number }
        }
        labelLayout?: (p: LabelLayoutParams) => { fontSize?: number }
      }[]
    }
  ).series
}

/** Root-level animation keys that drive the hover blur cross-fade */
function getAnimationOptions() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    animation?: boolean
    animationDuration?: number
    animationDurationUpdate?: number
    stateAnimation?: { duration?: number; easing?: string }
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

  it("rounds the true outer segment of an all-positive stack, even when the last series is 0 for that category", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Q1", "Q2"]}
        series={[
          { name: "Hires", data: [10, 8] },
          { name: "Internal moves", data: [5, 4] },
          { name: "Exits", data: [3, 0] },
        ]}
      />
    )

    // Q1: "Exits" (last series) is the outer segment → rounded, others flat
    // Q2: "Exits" is 0, so "Internal moves" is the true outer segment
    expect(getBorderRadii(0)).toEqual([0, 0])
    expect(getBorderRadii(1)).toEqual([0, [4, 4, 0, 0]])
    expect(getBorderRadii(2)).toEqual([[4, 4, 0, 0], 0])
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

  it("centers labels inside the segment with contrast-safe text when stacked", () => {
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
    // Palette teal is a mid-tone fill → white text
    expect(series?.label?.color).toBe("#ffffff")
    expect(series?.emphasis?.label?.color).toBe("#ffffff")
  })

  it("reserves right grid space only when horizontal labels sit beside the bar", () => {
    // Non-stacked horizontal: labels render beside the bar end → 60px reserved
    render(
      <F0DataChart
        {...base}
        orientation="horizontal"
        series={[{ name: "X", data: [1, 2] }]}
      />
    )
    expect(getLatestOption().grid?.right).toBe(60)

    // Stacked horizontal: labels render inside segments → keep the full width
    render(
      <F0DataChart
        {...base}
        orientation="horizontal"
        stacked
        series={[
          { name: "X", data: [1, 2] },
          { name: "Y", data: [3, 4] },
        ]}
      />
    )
    expect(getLatestOption().grid?.right).toBe(4)
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

  it("applies the configured font size and value formatter to labels", () => {
    render(
      <F0DataChart
        {...base}
        series={[{ name: "X", data: [1500, 2300] }]}
        labelFontSize={13}
        valueFormatter={(value) => `${value / 1000}K`}
      />
    )

    const label = getMainSeries()[0]?.label
    expect(label?.fontSize).toBe(13)
    expect(label?.formatter?.({ value: 1500 })).toBe("1.5K")
  })

  it("uses the documented 11px label size by default", () => {
    render(<F0DataChart {...base} series={[{ name: "X", data: [1, 2] }]} />)

    expect(getMainSeries()[0]?.label?.fontSize).toBe(11)
  })

  it("keeps inside labels white on every fill, including light ones", () => {
    render(
      <F0DataChart
        {...base}
        stacked
        series={[
          {
            name: "X",
            data: [
              { value: 1, color: "indigo" },
              { value: 2, color: "yellow" },
            ],
          },
        ]}
      />
    )

    const mainSeries = getMainSeries()[0]
    // A per-bar colour override no longer carries its own label colour: the
    // series-level white applies to dark indigo and light yellow alike.
    expect(mainSeries?.label?.color).toBe("#ffffff")
    expect(mainSeries?.emphasis?.label?.color).toBe("#ffffff")
    expect(mainSeries?.data?.[1]?.label).toBeUndefined()
  })
})

describe("BarChart — stacked segment polish", () => {
  const base = {
    type: "bar" as const,
    categories: ["A", "B"],
    series: [
      { name: "X", data: [1, 2] },
      { name: "Y", data: [3, 4] },
    ],
  }

  /** The chart resolves its own light-mode theme in jsdom (no `.dark` ancestor). */
  const themeBackground = resolveChartTheme(null).colors.background

  it("separates stacked segments with a hairline in the theme background", () => {
    render(<F0DataChart {...base} stacked />)

    const itemStyle = getMainSeries()[0]?.itemStyle
    expect(itemStyle?.borderColor).toBe(themeBackground)
    // Both neighbours stroke the shared edge and the strokes overlap, so 0.5
    // renders as a ~0.5px separation rather than 1px.
    expect(itemStyle?.borderWidth).toBe(0.5)
  })

  it("leaves non-stacked bars without a separator border", () => {
    render(<F0DataChart {...base} />)

    const itemStyle = getMainSeries()[0]?.itemStyle
    expect(itemStyle?.borderColor).toBeUndefined()
    expect(itemStyle?.borderWidth).toBeUndefined()
  })

  it("isolates the hovered series and fades the rest to 40%", () => {
    render(<F0DataChart {...base} stacked />)

    const series = getMainSeries()
    for (const entry of series) {
      expect(entry?.emphasis?.focus).toBe("series")
      expect(entry?.blur?.itemStyle?.opacity).toBe(0.4)
      expect(entry?.blur?.label?.opacity).toBe(0.4)
    }
  })

  it("does not blur or focus when the bars are not stacked", () => {
    render(<F0DataChart {...base} />)

    const mainSeries = getMainSeries()[0]
    expect(mainSeries?.emphasis?.focus).toBeUndefined()
    expect(mainSeries?.blur).toBeUndefined()
  })

  it("fades the target ghost with its stack instead of the echarts default", () => {
    render(
      <F0DataChart
        {...base}
        stacked
        series={[{ name: "X", data: [{ value: 1, target: 5 }] }]}
        categories={["A"]}
      />
    )

    // [main, target] — the ghost is a separate series, so `focus: "series"`
    // blurs it too; it must dim to the same 40%.
    const target = getMainSeries()[1]
    expect(target?.blur?.itemStyle?.opacity).toBe(0.4)
  })

  it("runs the blur cross-fade without animating entrance or updates", () => {
    render(<F0DataChart {...base} stacked />)

    const options = getAnimationOptions()
    // The engine must be on for state transitions, but entrance and update
    // animations stay at zero so only the blur fade is visible.
    expect(options.animation).toBe(true)
    expect(options.animationDuration).toBe(0)
    expect(options.animationDurationUpdate).toBe(0)
    expect(options.stateAnimation).toEqual({
      duration: 500,
      easing: "cubicOut",
    })
  })

  it("defers to consumer-provided animation options", () => {
    render(
      <F0DataChart
        {...base}
        stacked
        echartsOptions={{
          animationDuration: 900,
          stateAnimation: { duration: 120, easing: "linear" },
        }}
      />
    )

    const options = getAnimationOptions()
    expect(options.animationDuration).toBe(900)
    expect(options.stateAnimation).toEqual({
      duration: 120,
      easing: "linear",
    })
    // Untouched keys still get their stacked defaults.
    expect(options.animation).toBe(true)
    expect(options.animationDurationUpdate).toBe(0)
  })

  it("leaves non-stacked charts' animation options alone", () => {
    render(<F0DataChart {...base} />)

    const options = getAnimationOptions()
    expect(options.stateAnimation).toBeUndefined()
  })
})

describe("BarChart — value axis grid density", () => {
  const base = {
    type: "bar" as const,
    categories: ["A", "B"],
    series: [{ name: "X", data: [10, 20] }],
    valueAxisSplitNumber: 5,
  }

  it("applies the split count to Y for vertical bars", () => {
    render(<F0DataChart {...base} />)
    expect(getLatestOption().yAxis.splitNumber).toBe(5)
  })

  it("applies the split count to X for horizontal bars", () => {
    render(<F0DataChart {...base} orientation="horizontal" />)
    expect(getLatestOption().xAxis.splitNumber).toBe(5)
  })

  it("uses two value-axis segments by default", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A", "B"]}
        series={[{ name: "X", data: [10, 20] }]}
      />
    )
    expect(getLatestOption().yAxis.splitNumber).toBe(2)
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

  it("vertical stacked: hides a label that is taller than its segment", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Column"]}
        series={[
          { name: "A", data: [100] },
          { name: "B", data: [100] },
        ]}
        showLabels
      />
    )
    const labelLayout = getMainSeries()[0]?.labelLayout
    expect(
      labelLayout?.({
        rect: { width: 100, height: 20 },
        labelRect: { width: 20, height: 24 },
        dataIndex: 0,
      })
    ).toEqual({ fontSize: 0 })
  })

  it("horizontal non-stacked: hides labels that are too tall or cross the container edge", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Row"]}
        series={[{ name: "A", data: [100] }]}
        showLabels
        hideAllLabelsOnOverflow={false}
      />
    )
    const labelLayout = getMainSeries()[0]?.labelLayout

    expect(
      labelLayout?.({
        rect: { width: 100, height: 10 },
        labelRect: { x: 100, width: 20, height: 12 },
        dataIndex: 0,
      })
    ).toEqual({ fontSize: 0 })
    expect(
      labelLayout?.({
        rect: { width: 100, height: 24 },
        labelRect: { x: 790, width: 20, height: 12 },
        dataIndex: 0,
      })
    ).toEqual({ fontSize: 0 })
  })

  it("horizontal non-stacked: defaults to hiding every label when the widest exceeds the right allowance", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Row"]}
        series={[{ name: "A", data: [123456789012] }]}
        showLabels
      />
    )
    const labelLayout = getMainSeries()[0]?.labelLayout

    expect(
      labelLayout?.({
        rect: { width: 100, height: 24 },
        labelRect: { x: 100, width: 96, height: 12 },
        dataIndex: 0,
      })
    ).toEqual({ fontSize: 0 })
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
    expect(getLatestOption().aria?.enabled).toBe(true)
    expect(getLatestOption().aria?.label?.description).toContain("107,505")
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

  it("formats and escapes actual and target values in target tooltips", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["<script>category</script>"]}
        series={[
          {
            name: "<strong>Revenue</strong>",
            data: [{ value: 107505, target: 125000 }],
          },
        ]}
        tooltipValueFormatter={(value) =>
          `<em>${value.toLocaleString("en-US")}</em>`
        }
      />
    )

    const html = getTooltipFormatter()?.([
      {
        axisValueLabel: "<script>category</script>",
        seriesName: "<strong>Revenue</strong>",
        value: 107505,
        dataIndex: 0,
        marker: '<span class="trusted-marker"></span>',
      },
    ])

    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("&lt;script&gt;category&lt;/script&gt;")
    expect(html).toContain("&lt;strong&gt;Revenue&lt;/strong&gt;")
    expect(html).toContain("&lt;em&gt;107,505&lt;/em&gt;")
    expect(html).toContain("&lt;em&gt;125,000&lt;/em&gt;")
    expect(html).not.toContain("<script>")
  })

  it("escapes the ordinary tooltip while preserving ECharts marker HTML", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["<script>category</script>"]}
        series={[{ name: "<strong>Revenue</strong>", data: [107505] }]}
        tooltipValueFormatter={(value) =>
          `<em>${value.toLocaleString("en-US")}</em>`
        }
      />
    )

    const html = getTooltipFormatter()?.([
      {
        axisValueLabel: "<script>category</script>",
        seriesName: "<strong>Revenue</strong>",
        value: 107505,
        marker: '<span class="trusted-marker"></span>',
      },
    ])

    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("&lt;script&gt;category&lt;/script&gt;")
    expect(html).toContain("&lt;strong&gt;Revenue&lt;/strong&gt;")
    expect(html).toContain("&lt;em&gt;107,505&lt;/em&gt;")
    expect(html).not.toContain("<script>")
  })

  it("bounds the accessible description for large datasets", () => {
    const categories = Array.from(
      { length: 25 },
      (_, index) => `Category ${index + 1}`
    )
    render(
      <F0DataChart
        type="bar"
        categories={categories}
        series={[
          {
            name: "Revenue",
            data: categories.map((_, index) => index + 1),
          },
        ]}
      />
    )

    const description = getLatestOption().aria?.label?.description
    expect(description).toContain("Category 20: 20")
    expect(description).toContain("5 more values")
    expect(description).not.toContain("Category 21")
  })
})

describe("BarChart — horizontal category density", () => {
  it("keeps all 12 category labels at a representative chart height", () => {
    containerSize.height = 360
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={Array.from(
          { length: 12 },
          (_, index) => `Row ${index + 1}`
        )}
        series={[
          {
            name: "Headcount",
            data: Array.from({ length: 12 }, (_, index) => index + 1),
          },
        ]}
      />
    )

    expect(getLatestOption().yAxis.axisLabel.interval ?? 0).toBe(0)
  })
})
