import {
  afterAll,
  afterEach,
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
import { MD_MAX_WIDTH, SM_MAX_WIDTH } from "../utils/responsive"
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

/** Drive `useReducedMotion()` — the setup default has no query matching. */
const setReducedMotion = (matches: boolean) =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: matches && query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

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

  it("shows legend and both axes at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    // Bars keep their categories wherever they keep any chrome — X = category,
    // Y = value. Crowding is handled by the smart axis layout, not by hiding.
    expect(option.xAxis.axisLabel.show).toBe(true)
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

  it("keeps the category axis on horizontal bars at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...verticalProps} orientation="horizontal" />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    // Horizontal bars: X = value axis, Y = category axis. Both orientations
    // keep their categories at md; dropping them would leave a stack of
    // anonymous bars the value axis can't explain.
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("still hides the category axis on horizontal bars at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...verticalProps} orientation="horizontal" />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(false)
  })

  it("still hides the category axis on vertical bars at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...verticalProps} />)

    const option = getLatestOption()
    // `sm` is the only size that drops the categories, in either orientation.
    expect(option.xAxis.axisLabel.show).toBe(false)
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

// ---------------------------------------------------------------------------
// Bars deviate from the shared matrix: both orientations keep the category axis
// at `md`, where every other chart family hides it (see
// `resolveResponsiveDisplay`). That deviation costs plot area — horizontal
// labels take `min(80, width * 0.2)` of the width, vertical ones a row of
// height — so these pin the exact width the behavior changes at, one pixel
// either side of both band edges. A breakpoint tweak that moves the flip has to
// fail here rather than quietly reflow every bar chart in a chat card.
// ---------------------------------------------------------------------------

describe("BarChart — category axis at the breakpoint boundaries", () => {
  const props = {
    type: "bar" as const,
    categories: ["Jan", "Feb", "Mar"],
    series: [{ name: "A", data: [1, 2, 3] }],
  }

  /** Category-axis visibility at `width`. Horizontal keeps categories on Y. */
  function categoryAxisShownAt(
    width: number,
    orientation: "vertical" | "horizontal"
  ) {
    containerSize.width = width
    render(<F0DataChart {...props} orientation={orientation} />)
    const option = getLatestOption()
    return orientation === "vertical"
      ? option.xAxis.axisLabel.show
      : option.yAxis.axisLabel.show
  }

  for (const orientation of ["horizontal", "vertical"] as const) {
    it(`hides the ${orientation} category axis at the last sm width (219px)`, () => {
      expect(categoryAxisShownAt(SM_MAX_WIDTH - 1, orientation)).toBe(false)
    })

    it(`shows the ${orientation} category axis from the first md width (220px)`, () => {
      expect(categoryAxisShownAt(SM_MAX_WIDTH, orientation)).toBe(true)
    })

    it(`keeps the ${orientation} category axis across the md → lg edge (519/520px)`, () => {
      // Already visible at md, so crossing into lg must not toggle anything.
      expect(categoryAxisShownAt(MD_MAX_WIDTH - 1, orientation)).toBe(true)
      expect(categoryAxisShownAt(MD_MAX_WIDTH, orientation)).toBe(true)
    })
  }
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

    // Stacked horizontal: segment labels sit inside their own segments, and a
    // category mixing signs gets no total either → keep the full width.
    render(
      <F0DataChart
        {...base}
        orientation="horizontal"
        stacked
        series={[
          { name: "X", data: [1, 2] },
          { name: "Y", data: [-3, 4] },
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

  /**
   * Nothing in the jsdom tree paints a background, so the container lookup
   * falls back to the light-mode page token.
   */
  const themeBackground = resolveChartTheme(null).colors.background

  it("separates stacked segments with a hairline in the theme background", () => {
    render(<F0DataChart {...base} stacked />)

    const itemStyle = getMainSeries()[0]?.itemStyle
    expect(itemStyle?.borderColor).toBe(themeBackground)
    // Both neighbours stroke the shared edge and canvas strokes are centered on
    // it, so the two cover the same band rather than adding up: 0.5 reads as a
    // hairline, not a 1px gap.
    expect(itemStyle?.borderWidth).toBe(0.5)
  })

  it("paints the separator in the nearest surface colour, not the page colour", () => {
    render(
      <div style={{ backgroundColor: "rgb(1, 2, 3)" }}>
        <F0DataChart {...base} stacked />
      </div>
    )

    // A chart on a tinted card / modal must blend into that surface.
    expect(getMainSeries()[0]?.itemStyle?.borderColor).toBe("rgb(1, 2, 3)")
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

  describe("reduced motion", () => {
    afterEach(() => {
      // Restore the setup default (motion allowed) for the rest of the suite.
      setReducedMotion(false)
    })

    it("drops the cross-fade to zero duration", () => {
      setReducedMotion(true)
      render(<F0DataChart {...base} stacked />)

      // The highlight itself stays — hovering still isolates the series, it
      // just arrives instantly instead of fading.
      expect(getAnimationOptions().stateAnimation?.duration).toBe(0)
      expect(getMainSeries()[0]?.emphasis?.focus).toBe("series")
      expect(getMainSeries()[0]?.blur?.itemStyle?.opacity).toBe(0.4)
    })

    it("overrides a consumer-provided cross-fade duration", () => {
      setReducedMotion(true)
      render(
        <F0DataChart
          {...base}
          stacked
          echartsOptions={{
            stateAnimation: { duration: 120, easing: "linear" },
          }}
        />
      )

      // The preference is the user's, so it wins over the consumer's duration.
      expect(getAnimationOptions().stateAnimation).toEqual({
        duration: 0,
        easing: "linear",
      })
    })
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

  it("defaults fit padding to 6 inside a stacked segment (override lowers it)", () => {
    // A 100px label in a 110px segment fits only if per-side padding ≤ 5px, so
    // it's hidden at the 6px stacked default but shown once padding drops to 0.
    const seg: LabelLayoutParams = {
      rect: { width: 110, height: 100 },
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
// Item tooltip — bar charts describe the hovered bar/segment: precise value,
// change vs. the previous category, and (multi-series) share of the total.
// ---------------------------------------------------------------------------

describe("BarChart — item tooltip", () => {
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
    const html = getTooltipFormatter()?.({
      name: "A",
      seriesName: "S",
      value: 107505,
      dataIndex: 0,
    })
    expect(html).toContain("107,505") // precise, grouped
    expect(html).not.toContain("K") // not the compact form
    expect(getLatestOption().aria?.enabled).toBe(true)
    expect(getLatestOption().aria?.label?.description).toContain("107,505")
  })

  // The tooltip reads the number the way the axis does, so a unit written by
  // `valueFormatter` (a currency, a "%") is not silently dropped on hover.
  it("falls back to the axis formatter when no tooltipValueFormatter is given", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [107505.8632] }]}
        valueFormatter={(v) =>
          `€${v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
      />
    )
    const html = getTooltipFormatter()?.({
      name: "A",
      seriesName: "S",
      value: 107505.8632,
      dataIndex: 0,
    })
    expect(html).toContain("€107,505.86")
    expect(html).not.toContain("107505.8632") // no raw float precision
  })

  it("formats and escapes values in target tooltips, and hides ghost series", () => {
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

    const formatter = getTooltipFormatter()
    const html = formatter?.({
      name: "<script>category</script>",
      seriesName: "<strong>Revenue</strong>",
      value: 107505,
      dataIndex: 0,
      marker: '<span class="trusted-marker"></span>',
    })

    // ECharts' own coloured dot is trusted HTML and survives unescaped.
    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("&lt;script&gt;category&lt;/script&gt;")
    expect(html).toContain("&lt;strong&gt;Revenue&lt;/strong&gt;")
    expect(html).toContain("&lt;em&gt;107,505&lt;/em&gt;")
    expect(html).toContain("&lt;em&gt;125,000&lt;/em&gt;") // target row
    expect(html).not.toContain("<script>")
    // Hovering the ghost gradient bar renders no tooltip.
    expect(
      formatter?.({
        seriesName: "<strong>Revenue</strong> (target)",
        value: 17495,
        dataIndex: 0,
      })
    ).toBe("")
  })

  it("shows share of total only for multi-series charts", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A", "B"]}
        series={[
          { name: "S1", data: [30, 10] },
          { name: "S2", data: [70, 90] },
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "A",
      seriesName: "S1",
      value: 30,
      dataIndex: 0,
    })
    expect(html).toContain("30.0%")
    expect(html).toContain("of total")
    expect(html).toContain((100).toLocaleString())
  })

  it("hides share of total for single-series charts", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [100] }]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "A",
      seriesName: "S",
      value: 100,
      dataIndex: 0,
    })
    expect(html).not.toContain("of total")
    expect(html).not.toContain("total<")
  })

  // A stacked chart mixing gains with losses has no total its parts add up
  // to: the net sum is smaller than the segments it is made of, so a share of
  // it can exceed 100% (or blow up entirely near cancellation).
  it("omits share and total when the category mixes positive and negative values", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Q1", "Q2"]}
        series={[
          { name: "Hires", data: [24, 18] },
          { name: "Internal moves", data: [6, 4] },
          { name: "Voluntary exits", data: [-8, -12] },
          { name: "Involuntary exits", data: [-3, -2] },
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "Q1",
      seriesName: "Hires",
      value: 24,
      dataIndex: 0,
    })
    // 24 / (24 + 6 - 8 - 3) would have read 126.3%, and the misleading net
    // total goes with it — both rows carry the word "total".
    expect(html).toContain((24).toLocaleString())
    expect(html).not.toContain("total")
    expect(html).not.toContain("126.3%")
    expect(html).not.toContain((19).toLocaleString())
  })

  it("omits share and total when positive and negative series cancel out", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Q1"]}
        series={[
          { name: "Hires", data: [1000] },
          { name: "Exits", data: [-999.9] },
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "Q1",
      seriesName: "Hires",
      value: 1000,
      dataIndex: 0,
    })
    // A net of 0.1 would have turned 1000 into 1,000,000% of total.
    expect(html).not.toContain("total")
    expect(html).not.toContain("%</strong>")
  })

  it("keeps share and total when every series is negative", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Q1"]}
        series={[
          { name: "Voluntary exits", data: [-8] },
          { name: "Involuntary exits", data: [-2] },
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "Q1",
      seriesName: "Voluntary exits",
      value: -8,
      dataIndex: 0,
    })
    // Both sides share a sign, so the ratio still reads as a positive share.
    expect(html).toContain("80.0%")
    expect(html).toContain("of total")
    expect(html).toContain((-10).toLocaleString())
  })

  it("treats a series that runs short of the categories as zero there", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["A", "B"]}
        series={[
          { name: "S1", data: [30, 40] },
          { name: "S2", data: [70] }, // no value for "B"
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "B",
      seriesName: "S1",
      value: 40,
      dataIndex: 1,
    })
    expect(html).toContain("100.0%")
    expect(html).not.toContain("NaN")
  })

  it("omits the share but keeps the total when every value is zero", () => {
    render(
      <F0DataChart
        type="bar"
        stacked
        categories={["Q1"]}
        series={[
          { name: "Hires", data: [0] },
          { name: "Exits", data: [0] },
        ]}
      />
    )
    const html = getTooltipFormatter()?.({
      name: "Q1",
      seriesName: "Hires",
      value: 0,
      dataIndex: 0,
    })
    // No division by zero, and "0 total" is still true.
    expect(html).not.toContain("of total")
    expect(html).not.toContain("Infinity")
    expect(html).not.toContain("NaN")
    expect(html).toContain("total")
  })

  it("never compares a bar with the previous category — that is a line-chart concept", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["A", "B"]}
        series={[{ name: "S", data: [100, 125] }]}
      />
    )
    const formatter = getTooltipFormatter()
    expect(
      formatter?.({ name: "B", seriesName: "S", value: 125, dataIndex: 1 })
    ).not.toContain("from previous")
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

  it("lets a caller's own echartsOptions.tooltip win over the built-in one", () => {
    const ownFormatter = () => "custom tooltip"
    render(
      <F0DataChart
        type="bar"
        categories={["A"]}
        series={[{ name: "S", data: [1] }]}
        echartsOptions={{
          tooltip: { trigger: "axis", formatter: ownFormatter },
        }}
      />
    )

    const tooltip = getTooltipFormatter()
    expect(tooltip).toBe(ownFormatter)
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

describe("BarChart — stacked totals (horizontal)", () => {
  const stackedProps = {
    type: "bar" as const,
    orientation: "horizontal" as const,
    stacked: true,
    showLabels: true,
    categories: ["Madrid", "Berlin"],
    series: [
      { name: "Women", data: [3, 10] },
      { name: "Men", data: [4, 20] },
    ],
  }

  /** The zero-value ghost carrying the total label, if it was added at all. */
  function getTotalSeries() {
    return getMainSeries().find(
      (s) => (s as { name?: string }).name === "__stackTotal"
    )
  }

  it("appends a zero-value ghost whose label reads the category total", () => {
    render(<F0DataChart {...stackedProps} />)

    const total = getTotalSeries()
    expect(total).toBeDefined()
    // Adds no length to the bar — it exists only to carry the label.
    expect((total as { data: number[] }).data).toEqual([0, 0])
    expect(total?.label?.position).toBe("right")
    expect(total?.label?.formatter?.({ dataIndex: 0 } as never)).toBe("7")
    expect(total?.label?.formatter?.({ dataIndex: 1 } as never)).toBe("30")
  })

  it("keeps the ghost out of the legend", () => {
    render(<F0DataChart {...stackedProps} />)

    const legend = getLatestOption().legend as { data?: string[] } | undefined
    expect(legend?.data).toEqual(["Women", "Men"])
  })

  it("reserves room on the right for the total, which stacked bars otherwise skip", () => {
    render(<F0DataChart {...stackedProps} />)
    expect(getLatestOption().grid?.right).toBe(60)

    setOptionMock.mockClear()
    render(<F0DataChart {...stackedProps} showLabels={false} />)
    expect(getLatestOption().grid?.right).not.toBe(60)
  })

  it("formats the total with the chart's value formatter", () => {
    render(<F0DataChart {...stackedProps} valueFormatter={(v) => `${v} ppl`} />)

    expect(
      getTotalSeries()?.label?.formatter?.({ dataIndex: 1 } as never)
    ).toBe("30 ppl")
  })

  it("drops a total that would run past the container edge", () => {
    render(<F0DataChart {...stackedProps} />)
    const layout = getTotalSeries()?.labelLayout

    expect(
      layout?.({
        rect: { width: 0, height: 16 },
        labelRect: { x: 700, width: 40, height: 12 },
        dataIndex: 0,
      })
    ).toEqual({})
    expect(
      layout?.({
        rect: { width: 0, height: 16 },
        labelRect: { x: 790, width: 40, height: 12 },
        dataIndex: 0,
      })
    ).toEqual({ fontSize: 0 })
  })

  it("skips the total for a single series, whose total is the bar itself", () => {
    render(
      <F0DataChart
        {...stackedProps}
        series={[{ name: "All", data: [3, 10] }]}
      />
    )
    expect(getTotalSeries()).toBeUndefined()
  })

  it("skips the total when a category mixes signs", () => {
    render(
      <F0DataChart
        {...stackedProps}
        series={[
          { name: "Joiners", data: [3, 10] },
          { name: "Leavers", data: [-4, 2] },
        ]}
      />
    )
    expect(getTotalSeries()).toBeUndefined()
  })

  it("leaves vertical stacks alone — the value axis already gives the number", () => {
    render(<F0DataChart {...stackedProps} orientation="vertical" />)
    expect(getTotalSeries()).toBeUndefined()
  })

  it("skips the total when labels are off", () => {
    render(<F0DataChart {...stackedProps} showLabels={false} />)
    expect(getTotalSeries()).toBeUndefined()
  })
})

describe("BarChart — value axis vs. bar labels", () => {
  const horizontal = {
    type: "bar" as const,
    orientation: "horizontal" as const,
    categories: ["Madrid", "Berlin"],
    series: [{ name: "Headcount", data: [3, 10] }],
  }

  it("drops the value ticks when every horizontal bar carries its number", () => {
    render(<F0DataChart {...horizontal} showLabels />)

    const option = getLatestOption()
    // Horizontal: X is the value axis, Y the categories.
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis.axisLabel.show).toBe(true)
  })

  it("keeps the grid lines the ticks were read against", () => {
    render(<F0DataChart {...horizontal} showLabels />)

    const xAxis = getLatestOption().xAxis as unknown as {
      splitLine?: { show?: boolean }
    }
    expect(xAxis.splitLine?.show).toBe(true)
  })

  it("keeps the value ticks when the bars are unlabelled", () => {
    render(<F0DataChart {...horizontal} />)
    expect(getLatestOption().xAxis.axisLabel.show).toBe(true)
  })

  it("leaves a vertical chart's value axis alone — its labels sit clear of it", () => {
    render(<F0DataChart {...horizontal} orientation="vertical" showLabels />)
    // Vertical: Y is the value axis.
    expect(getLatestOption().yAxis.axisLabel.show).toBe(true)
  })
})

describe("BarChart — horizontal band geometry", () => {
  function getGaps() {
    const series = getMainSeries()[0] as unknown as {
      barGap?: string
      barCategoryGap?: string
    }
    return series
  }

  it("separates grouped categories by more than the bars inside them", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Madrid", "Berlin"]}
        series={[
          { name: "A", data: [1, 2] },
          { name: "B", data: [3, 4] },
          { name: "C", data: [5, 6] },
        ]}
      />
    )

    // 3 bars at 16px + 2 interior gaps of 8px + a 24px category gap = 88px band.
    // barGap is a share of one bar (8/16), barCategoryGap a share of the band
    // (24/88) — the pair ECharts needs to draw 8px inside and 24px between.
    const { barGap, barCategoryGap } = getGaps()
    expect(barGap).toBe("50.0%")
    expect(barCategoryGap).toBe("27.3%")
  })

  it("keeps a single-bar category compact — nothing to distinguish it from", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Madrid", "Berlin"]}
        series={[{ name: "A", data: [1, 2] }]}
      />
    )

    // One 16px bar + an 8px gap = 24px band, so the gap is a third of it.
    expect(getGaps().barCategoryGap).toBe("33.3%")
  })

  it("treats a stacked chart as one bar per category", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        stacked
        categories={["Madrid", "Berlin"]}
        series={[
          { name: "A", data: [1, 2] },
          { name: "B", data: [3, 4] },
        ]}
      />
    )

    expect(getGaps().barCategoryGap).toBe("33.3%")
  })

  it("leaves vertical charts on the ECharts defaults", () => {
    render(
      <F0DataChart
        type="bar"
        categories={["Madrid", "Berlin"]}
        series={[
          { name: "A", data: [1, 2] },
          { name: "B", data: [3, 4] },
        ]}
      />
    )

    expect(getGaps().barGap).toBeUndefined()
    expect(getGaps().barCategoryGap).toBeUndefined()
  })
})

describe("BarChart — headroom for labels above columns", () => {
  const vertical = {
    type: "bar" as const,
    categories: ["Sep", "Oct"],
    series: [{ name: "Salary", data: [59_000, 60_000] }],
  }

  function getGridTop() {
    return (getLatestOption().grid as { top?: number } | undefined)?.top
  }

  it("reserves room above the columns so a full-height bar's label isn't clipped", () => {
    render(<F0DataChart {...vertical} />)
    const bare = getGridTop()

    render(<F0DataChart {...vertical} showLabels />)
    // 11px label → ceil(11 * 1.4) + 5 = 21px on top of the base padding.
    expect(getGridTop()).toBe((bare ?? 0) + 21)
  })

  it("scales the headroom with the label font size", () => {
    render(<F0DataChart {...vertical} showLabels />)
    const atDefault = getGridTop() ?? 0

    render(<F0DataChart {...vertical} showLabels labelFontSize={20} />)
    expect(getGridTop()).toBeGreaterThan(atDefault)
  })

  it("adds no headroom for stacked columns, whose labels sit inside", () => {
    render(<F0DataChart {...vertical} />)
    const bare = getGridTop()

    render(
      <F0DataChart
        {...vertical}
        stacked
        showLabels
        series={[
          { name: "A", data: [1, 2] },
          { name: "B", data: [3, 4] },
        ]}
      />
    )
    expect(getGridTop()).toBe(bare)
  })

  it("adds no headroom for horizontal bars, which reserve width instead", () => {
    render(<F0DataChart {...vertical} orientation="horizontal" />)
    const bare = getGridTop()

    render(<F0DataChart {...vertical} orientation="horizontal" showLabels />)
    expect(getGridTop()).toBe(bare)
  })

  it("leaves a caller's own grid.top alone", () => {
    render(
      <F0DataChart
        {...vertical}
        showLabels
        echartsOptions={{ grid: { top: 2 } }}
      />
    )
    expect(getGridTop()).toBe(2)
  })
})

describe("BarChart — category label width", () => {
  // jsdom has no canvas, so `measureTextWidth` falls back to 8px per character:
  // every expectation below is (longest label length × 8) + 4px of slack, or the
  // container-derived cap where that is smaller.
  const long = "A very long workplace name indeed" // 33 chars → 268
  const short = "Berlin" // 6 chars → 52

  const horizontal = (categories: string[]) => ({
    type: "bar" as const,
    orientation: "horizontal" as const,
    categories,
    series: [{ name: "Headcount", data: categories.map((_, i) => i + 1) }],
  })

  function getCategoryLabelWidth() {
    // Horizontal charts put categories on the Y axis.
    return (
      getLatestOption().yAxis as unknown as {
        axisLabel?: { width?: number }
      }
    ).axisLabel?.width
  }

  it("gives the axis exactly what its longest name needs when that fits", () => {
    containerSize.width = 800
    render(<F0DataChart {...horizontal([short, "Madrid"])} />)
    // Well under the 160 cap, so the bars keep the rest of the width.
    expect(getCategoryLabelWidth()).toBe(52)
  })

  it("measures the longest name, not the first or the last", () => {
    containerSize.width = 800
    render(<F0DataChart {...horizontal([short, "Rio de Janeiro", "Oslo"])} />)
    expect(getCategoryLabelWidth()).toBe("Rio de Janeiro".length * 8 + 4)
  })

  it("clamps to a share of the container on a narrow chart", () => {
    containerSize.width = 300
    render(<F0DataChart {...horizontal([long, short])} />)
    // 0.3 × 300 = 90, so this name truncates rather than taking 268px.
    expect(getCategoryLabelWidth()).toBe(90)
  })

  it("gives a long name its full width when the chart is wide enough", () => {
    containerSize.width = 1400
    render(<F0DataChart {...horizontal([long, short])} />)
    // 268 needed, 400 allowed — shown whole rather than truncated to a stub.
    expect(getCategoryLabelWidth()).toBe(long.length * 8 + 4)
  })

  it("clamps to the absolute cap on a wide chart", () => {
    containerSize.width = 1400
    const veryLong = "Barcelona Poblenou innovation campus, building four"
    render(<F0DataChart {...horizontal([veryLong, short])} />)
    // 0.3 × 1400 = 420 would allow it and the name needs 404, but the absolute
    // cap is the tighter of the three.
    expect(getCategoryLabelWidth()).toBe(400)
  })

  it("measures the formatted label, since that is what gets drawn", () => {
    containerSize.width = 800
    render(
      <F0DataChart
        {...horizontal([short, "Madrid"])}
        categoryFormatter={(value) => `Office: ${value}`}
      />
    )
    expect(getCategoryLabelWidth()).toBe("Office: Madrid".length * 8 + 4)
  })
})

describe("BarChart — value axis extent", () => {
  const horizontal = {
    type: "bar" as const,
    orientation: "horizontal" as const,
    categories: ["Madrid", "Berlin"],
    series: [{ name: "Headcount", data: [62, 106] }],
  }

  function getValueAxisMax() {
    // Horizontal: X is the value axis.
    return (getLatestOption().xAxis as unknown as { max?: number }).max
  }

  it("pins the maximum just past the longest bar when the ticks are hidden", () => {
    render(<F0DataChart {...horizontal} showLabels />)
    // 106 × 1.05 — instead of ECharts rounding up to 150.
    expect(getValueAxisMax()).toBeCloseTo(111.3, 5)
  })

  it("leaves ECharts to round when the ticks are the reader's scale", () => {
    render(<F0DataChart {...horizontal} />)
    expect(getValueAxisMax()).toBeUndefined()
  })

  it("measures a stacked category by its total, not its largest part", () => {
    render(
      <F0DataChart
        {...horizontal}
        stacked
        showLabels
        series={[
          { name: "A", data: [10, 40] },
          { name: "B", data: [20, 30] },
        ]}
      />
    )
    // Berlin totals 70; the largest single part is 40.
    expect(getValueAxisMax()).toBeCloseTo(73.5, 5)
  })

  it("counts a target ghost as part of its bar's extent", () => {
    render(
      <F0DataChart
        {...horizontal}
        showLabels
        series={[{ name: "A", data: [{ value: 60, target: 200 }, 50] }]}
      />
    )
    expect(getValueAxisMax()).toBeCloseTo(210, 5)
  })

  it("leaves the axis alone for negative-only data", () => {
    render(
      <F0DataChart
        {...horizontal}
        showLabels
        series={[{ name: "A", data: [-10, -40] }]}
      />
    )
    expect(getValueAxisMax()).toBeUndefined()
  })

  it("leaves vertical charts to their rounded axis", () => {
    render(<F0DataChart {...horizontal} orientation="vertical" showLabels />)
    expect(
      (getLatestOption().yAxis as unknown as { max?: number }).max
    ).toBeUndefined()
  })
})

describe("BarChart — category label gutter padding", () => {
  function getGridLeft() {
    return (getLatestOption().grid as { left?: number } | undefined)?.left
  }

  it("pads the gutter past what ECharts reserves, in proportion to the labels", () => {
    containerSize.width = 800
    // Vertical: no measured category width, so no padding — the baseline.
    render(
      <F0DataChart
        type="bar"
        categories={["Berlin"]}
        series={[{ name: "A", data: [1] }]}
      />
    )
    const base = getGridLeft() ?? 0

    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Berlin"]}
        series={[{ name: "A", data: [1] }]}
      />
    )
    // 6 chars → 48 + 4 slack = 52 wide; 8% of that, rounded up, is 5.
    expect(getGridLeft()).toBe(base + 5)
  })

  it("pads more for longer names, which overflow by more", () => {
    containerSize.width = 800
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Berlin"]}
        series={[{ name: "A", data: [1] }]}
      />
    )
    const shortPad = getGridLeft() ?? 0

    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["A considerably longer workplace name"]}
        series={[{ name: "A", data: [1] }]}
      />
    )
    expect(getGridLeft()).toBeGreaterThan(shortPad)
  })

  it("leaves a caller's own grid.left alone", () => {
    render(
      <F0DataChart
        type="bar"
        orientation="horizontal"
        categories={["Berlin"]}
        series={[{ name: "A", data: [1] }]}
        echartsOptions={{ grid: { left: 0 } }}
      />
    )
    expect(getGridLeft()).toBe(0)
  })
})
