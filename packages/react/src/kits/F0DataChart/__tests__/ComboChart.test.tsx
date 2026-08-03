import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

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

type ValueAxis = {
  axisLabel: { show: boolean; formatter?: (value: string | number) => string }
  splitLine?: { show?: boolean }
  splitNumber?: number
  min?: number
  max?: number
  interval?: number
}

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    xAxis: { axisLabel: { show: boolean } }
    yAxis: ValueAxis[]
    series: Array<{
      name?: string
      type?: string
      yAxisIndex?: number
      itemStyle?: { color?: string }
      label?: { show?: boolean }
    }>
    tooltip: { formatter: (params: unknown) => string }
    legend?: { data?: string[] }
  }
}

const comboProps = {
  type: "combo" as const,
  categories: ["Jan", "Feb", "Mar"],
  barSeries: [{ name: "Headcount", data: [120, 128, 131] }],
  lineSeries: [{ name: "Turnover rate", data: [4.1, 3.8, 5.2] }],
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("ComboChart — axis binding", () => {
  it("puts bars on the primary axis and lines on the secondary", () => {
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    const bars = option.series.filter((s) => s.type === "bar")
    const lines = option.series.filter((s) => s.type === "line")

    expect(bars).toHaveLength(1)
    expect(lines).toHaveLength(1)
    expect(bars[0].yAxisIndex).toBe(0)
    expect(lines[0].yAxisIndex).toBe(1)
  })

  it("renders exactly two value axes", () => {
    render(<F0DataChart {...comboProps} />)

    expect(getLatestOption().yAxis).toHaveLength(2)
  })

  it("draws grid lines from the primary axis only", () => {
    render(<F0DataChart {...comboProps} />)

    const [primary, secondary] = getLatestOption().yAxis
    expect(primary.splitLine?.show).toBe(true)
    expect(secondary.splitLine?.show).toBe(false)
  })

  it("pins both axes to the same tick count so every label lands on a grid line", () => {
    // splitNumber alone is a hint ECharts overrides for nicer rounding, which
    // left the two scales on different interval counts (measured in a real
    // browser). Explicit min/max/interval is what actually holds them together.
    render(<F0DataChart {...comboProps} valueAxisSplitNumber={4} />)

    const [primary, secondary] = getLatestOption().yAxis
    for (const axis of [primary, secondary]) {
      expect(axis.min).toBeDefined()
      expect(axis.max).toBeDefined()
      expect(axis.interval).toBeDefined()
      expect(axis.splitNumber).toBeUndefined()
    }
    const ticks = (axis: ValueAxis) =>
      Math.round((axis.max! - axis.min!) / axis.interval!)
    expect(ticks(primary)).toBe(4)
    expect(ticks(secondary)).toBe(4)
  })

  it("scales each axis to its own measure", () => {
    render(<F0DataChart {...comboProps} />)

    const [primary, secondary] = getLatestOption().yAxis
    // Headcount 120–131 vs a 3.8–5.2% rate: the two axes must not share a range.
    expect(primary.max).toBeGreaterThan(100)
    expect(secondary.max).toBeLessThan(100)
  })
})

describe("ComboChart — formatters", () => {
  it("formats each value axis with its own formatter", () => {
    render(
      <F0DataChart
        {...comboProps}
        valueFormatter={(v) => `${v} people`}
        secondaryValueFormatter={(v) => `${v}%`}
      />
    )

    const [primary, secondary] = getLatestOption().yAxis
    expect(primary.axisLabel.formatter?.(120)).toBe("120 people")
    expect(secondary.axisLabel.formatter?.(4)).toBe("4%")
  })

  it("falls back to valueFormatter on the secondary axis when none is given", () => {
    render(<F0DataChart {...comboProps} valueFormatter={(v) => `${v} u`} />)

    const [, secondary] = getLatestOption().yAxis
    expect(secondary.axisLabel.formatter?.(4)).toBe("4 u")
  })

  it("formats each tooltip row with the formatter of the axis it belongs to", () => {
    render(
      <F0DataChart
        {...comboProps}
        valueFormatter={(v) => `${v} people`}
        secondaryValueFormatter={(v) => `${v}%`}
      />
    )

    const html = getLatestOption().tooltip.formatter([
      { seriesName: "Headcount", seriesIndex: 0, value: 120, name: "Jan" },
      { seriesName: "Turnover rate", seriesIndex: 1, value: 4.1, name: "Jan" },
    ])

    expect(html).toContain("120 people")
    expect(html).toContain("4.1%")
  })

  it("keeps rows on the right formatter when a bar series expands into a target ghost", () => {
    // A bar series carrying targets produces two ECharts series, so the
    // bar/line boundary is no longer `barSeries.length`.
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[
          {
            name: "Headcount",
            data: [
              { value: 120, target: 140 },
              { value: 128, target: 140 },
              { value: 131, target: 140 },
            ],
          },
        ]}
        valueFormatter={(v) => `${v} people`}
        secondaryValueFormatter={(v) => `${v}%`}
      />
    )

    const option = getLatestOption()
    const lineIndex = option.series.findIndex((s) => s.type === "line")
    expect(lineIndex).toBe(2)

    const html = option.tooltip.formatter([
      { seriesName: "Headcount", seriesIndex: 0, value: 120, name: "Jan" },
      {
        seriesName: "Turnover rate",
        seriesIndex: lineIndex,
        value: 4.1,
        name: "Jan",
      },
    ])

    expect(html).toContain("120 people")
    expect(html).toContain("4.1%")
    expect(html).not.toContain("4.1 people")
  })

  it("escapes series names in the tooltip", () => {
    render(
      <F0DataChart
        {...comboProps}
        lineSeries={[{ name: "<img src=x>", data: [1, 2, 3] }]}
      />
    )

    const html = getLatestOption().tooltip.formatter([
      { seriesName: "<img src=x>", seriesIndex: 1, value: 1, name: "Jan" },
    ])

    expect(html).not.toContain("<img src=x>")
    expect(html).toContain("&lt;img")
  })
})

describe("ComboChart — series appearance", () => {
  it("continues the palette for line series so bars and lines differ in colour", () => {
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    const barColor = option.series.find((s) => s.type === "bar")?.itemStyle
      ?.color
    const lineColor = option.series.find((s) => s.type === "line")?.itemStyle
      ?.color

    expect(barColor).toBeDefined()
    expect(lineColor).toBeDefined()
    expect(lineColor).not.toBe(barColor)
  })

  it("omits ghost target series from the legend", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[{ name: "Headcount", data: [{ value: 120, target: 140 }] }]}
      />
    )

    expect(getLatestOption().legend?.data).toEqual([
      "Headcount",
      "Turnover rate",
    ])
  })

  it("hides value labels by default", () => {
    render(<F0DataChart {...comboProps} />)

    for (const series of getLatestOption().series) {
      expect(series.label?.show).toBe(false)
    }
  })
})

describe("ComboChart — accessibility", () => {
  it("describes both series lists, each with its own axis formatter", () => {
    render(
      <F0DataChart
        {...comboProps}
        valueFormatter={(v) => `${v} people`}
        secondaryValueFormatter={(v) => `${v}%`}
      />
    )

    const option = setOptionMock.mock.calls.at(-1)?.[0] as {
      aria?: { enabled?: boolean; label?: { description?: string } }
    }
    expect(option.aria?.enabled).toBe(true)
    const description = option.aria?.label?.description ?? ""
    expect(description).toContain("Headcount: Jan: 120 people")
    expect(description).toContain("Turnover rate: Jan: 4.1%")
  })
})

describe("ComboChart — responsive breakpoints", () => {
  it("hides both axes and the legend at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis[0].axisLabel.show).toBe(false)
    expect(option.yAxis[1].axisLabel.show).toBe(false)
    expect(option.legend).toBeUndefined()
  })

  it("shows both value axes but no category axis at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(option.yAxis[0].axisLabel.show).toBe(true)
    expect(option.yAxis[1].axisLabel.show).toBe(true)
  })

  it("shows every axis at the large breakpoint", () => {
    containerSize.width = 720
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis[0].axisLabel.show).toBe(true)
    expect(option.yAxis[1].axisLabel.show).toBe(true)
  })
})

describe("ComboChart — empty state", () => {
  it("renders the empty state when neither axis has data", () => {
    render(
      <F0DataChart
        type="combo"
        categories={[]}
        barSeries={[]}
        lineSeries={[]}
      />
    )

    expect(setOptionMock).not.toHaveBeenCalled()
    expect(screen.getByText("No data available")).toBeInTheDocument()
  })

  it("renders the chart when only one axis has data", () => {
    render(
      <F0DataChart
        type="combo"
        categories={["Jan", "Feb"]}
        barSeries={[{ name: "Headcount", data: [1, 2] }]}
        lineSeries={[]}
      />
    )

    expect(setOptionMock).toHaveBeenCalled()
  })
})
