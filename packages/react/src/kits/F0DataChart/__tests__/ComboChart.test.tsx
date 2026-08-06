import { screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
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
  name?: string
  axisLabel: { show: boolean; formatter?: (value: string | number) => string }
  splitLine?: { show?: boolean }
  splitNumber?: number
  min?: number
  max?: number
  interval?: number
}

type ChartOption = {
  xAxis: { axisLabel: { show: boolean } }
  yAxis: ValueAxis | ValueAxis[]
  series: Array<{
    name?: string
    type?: string
    yAxisIndex?: number
    data?: unknown[]
    stack?: string
    itemStyle?: { color?: string }
    areaStyle?: unknown
    smooth?: boolean
    step?: boolean | "start" | "middle" | "end"
    lineStyle?: { type?: "solid" | "dashed" | "dotted" }
    showSymbol?: boolean
    symbolSize?: number
    label?: {
      show?: boolean
      formatter?: (params: { value: number }) => string
    }
  }>
  tooltip: { formatter: (params: unknown) => string }
  legend?: { data?: string[] }
  aria?: { enabled?: boolean; label?: { description?: string } }
  grid: { left: number; right: number }
}

function getLatestOption(): ChartOption {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as ChartOption
}

function getValueAxes(option = getLatestOption()): ValueAxis[] {
  return Array.isArray(option.yAxis) ? option.yAxis : [option.yAxis]
}

const comboProps = {
  type: "combo" as const,
  primaryAxisLabel: "People",
  secondaryAxisLabel: "Percent",
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

    expect(getValueAxes()).toHaveLength(2)
  })

  it("names both axes so their series ownership is visible", () => {
    render(<F0DataChart {...comboProps} />)

    const [primary, secondary] = getValueAxes()
    expect(primary.name).toBe("People")
    expect(secondary.name).toBe("Percent")
  })

  it("falls back to localized defaults for blank axis labels", () => {
    render(
      <F0DataChart
        {...comboProps}
        primaryAxisLabel="  "
        secondaryAxisLabel=""
      />
    )

    const [primary, secondary] = getValueAxes()
    expect(primary.name).toBe("Primary measure")
    expect(secondary.name).toBe("Secondary measure")
    expect(getLatestOption().legend?.data).toEqual([
      "Headcount · Primary measure",
      "Turnover rate · Secondary measure",
    ])
  })

  it("uses provider translations for blank axis labels and ARIA", () => {
    const translations = {
      ...defaultTranslations,
      dataChart: {
        ...defaultTranslations.dataChart,
        comboAxis: {
          primaryMeasure: "Medida principal",
          secondaryMeasure: "Medida secundaria",
          target: "Objetivo",
        },
        comboAria: {
          ...defaultTranslations.dataChart.comboAria,
          primaryAxis: "Eje izquierdo, barras: {{axis}}",
          secondaryAxis: "Eje derecho, líneas: {{axis}}",
        },
      },
    }

    render(
      <I18nProvider translations={translations}>
        <F0DataChart
          {...comboProps}
          primaryAxisLabel=" "
          secondaryAxisLabel=""
        />
      </I18nProvider>
    )

    const [primary, secondary] = getValueAxes()
    expect(primary.name).toBe("Medida principal")
    expect(secondary.name).toBe("Medida secundaria")
    expect(getLatestOption().aria?.label?.description).toContain(
      "Eje izquierdo, barras: Medida principal"
    )
    expect(getLatestOption().aria?.label?.description).toContain(
      "Eje derecho, líneas: Medida secundaria"
    )
  })

  it("draws grid lines from the primary axis only", () => {
    render(<F0DataChart {...comboProps} />)

    const [primary, secondary] = getValueAxes()
    expect(primary.splitLine?.show).toBe(true)
    expect(secondary.splitLine?.show).toBe(false)
  })

  it("pins both axes to the same tick count so every label lands on a grid line", () => {
    // splitNumber alone is a hint ECharts overrides for nicer rounding, which
    // left the two scales on different interval counts (measured in a real
    // browser). Explicit min/max/interval is what actually holds them together.
    render(<F0DataChart {...comboProps} valueAxisSplitNumber={4} />)

    const [primary, secondary] = getValueAxes()
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

    const [primary, secondary] = getValueAxes()
    // Headcount 120–131 vs a 3.8–5.2% rate: the two axes must not share a range.
    expect(primary.max).toBeGreaterThan(100)
    expect(secondary.max).toBeLessThan(100)
  })

  it("includes rendered stack totals in the primary scale", () => {
    render(
      <F0DataChart
        {...comboProps}
        stacked
        barSeries={[
          { name: "Engineering", data: [48, 62] },
          { name: "Sales", data: [40, 50] },
          { name: "Support", data: [30, 30] },
        ]}
      />
    )

    expect(getValueAxes()[0].max).toBeGreaterThanOrEqual(142)
  })

  it("includes bar targets in the primary scale", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[{ name: "Headcount", data: [{ value: 10, target: 100 }] }]}
      />
    )

    expect(getValueAxes()[0].max).toBeGreaterThanOrEqual(100)
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

    const [primary, secondary] = getValueAxes()
    expect(primary.axisLabel.formatter?.(120)).toBe("120 people")
    expect(secondary.axisLabel.formatter?.(4)).toBe("4%")
  })

  it("falls back to valueFormatter on the secondary axis when none is given", () => {
    render(<F0DataChart {...comboProps} valueFormatter={(v) => `${v} u`} />)

    const [, secondary] = getValueAxes()
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

  it("uses the precise primary tooltip formatter without changing the axis", () => {
    render(
      <F0DataChart
        {...comboProps}
        valueFormatter={(value) => `${value}K`}
        tooltipValueFormatter={(value) => `${value.toLocaleString()} people`}
      />
    )

    const option = getLatestOption()
    expect(getValueAxes(option)[0].axisLabel.formatter?.(120)).toBe("120K")
    expect(
      option.tooltip.formatter([
        {
          seriesName: "Headcount · People",
          seriesIndex: 0,
          value: 120,
          name: "Jan",
        },
      ])
    ).toContain("120 people")
  })

  it("keeps the secondary formatter for a line-only partial state", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[]}
        valueFormatter={(value) => `${value} people`}
        tooltipValueFormatter={(value) => `${value.toFixed(2)} people`}
        secondaryValueFormatter={(value) => `${value}%`}
      />
    )

    const option = getLatestOption()
    expect(
      option.tooltip.formatter([
        {
          seriesName: "Turnover rate · Percent",
          seriesIndex: 0,
          value: 4.1,
          name: "Jan",
        },
      ])
    ).toContain("4.1%")
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

  it("shows bar targets and filters only the assembled ghost series", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[
          {
            name: "Revenue (target)",
            data: [{ value: 10, target: 20 }],
          },
        ]}
        valueFormatter={(value) => `${value} EUR`}
      />
    )

    const option = getLatestOption()
    const html = option.tooltip.formatter([
      {
        seriesName: "Revenue (target) · People",
        seriesIndex: 0,
        dataIndex: 0,
        value: 10,
        name: "Jan",
      },
      {
        seriesName: "Revenue (target) · People",
        seriesIndex: 1,
        dataIndex: 0,
        value: 10,
        name: "Jan",
      },
    ])

    expect(html).toContain("Revenue (target)")
    expect(html).toContain("10 EUR")
    expect(html).toContain("/ 20 EUR")
    expect(html).not.toContain("Revenue (target) · People (target)")
    expect(option.series.slice(0, 2).map((series) => series.name)).toEqual([
      "Revenue (target) · People",
      "Revenue (target) · People",
    ])
  })

  it("returns no tooltip for malformed or ghost-only payloads", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[{ name: "Headcount", data: [{ value: 10, target: 20 }] }]}
      />
    )

    const formatter = getLatestOption().tooltip.formatter
    expect(formatter(undefined)).toBe("")
    expect(formatter([{ seriesIndex: 1, value: 10 }])).toBe("")
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
      "Headcount · People",
      "Turnover rate · Percent",
    ])
  })

  it("keeps duplicate names distinct both across and within axes", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[
          { name: "Revenue", data: [10] },
          { name: "Revenue", data: [20] },
        ]}
        lineSeries={[{ name: "Revenue", data: [5] }]}
      />
    )

    expect(getLatestOption().legend?.data).toEqual([
      "Revenue · People (1)",
      "Revenue · People (2)",
      "Revenue · Percent",
    ])
    expect(getLatestOption().series.map((series) => series.name)).toEqual([
      "Revenue · People (1)",
      "Revenue · People (2)",
      "Revenue · Percent",
    ])
    const description = getLatestOption().aria?.label?.description ?? ""
    expect(description).toContain("Revenue · People (1)")
    expect(description).toContain("Revenue · People (2)")
    expect(description).toContain("Revenue · Percent")
  })

  it("keeps cross-axis identities unique when both axis labels match", () => {
    render(
      <F0DataChart
        {...comboProps}
        primaryAxisLabel="Amount"
        secondaryAxisLabel="Amount"
        barSeries={[{ name: "Revenue", data: [10] }]}
        lineSeries={[{ name: "Revenue", data: [5] }]}
      />
    )

    expect(getLatestOption().legend?.data).toEqual([
      "Revenue · Amount (1)",
      "Revenue · Amount (2)",
    ])
    expect(
      new Set(getLatestOption().series.map((series) => series.name)).size
    ).toBe(2)
  })

  it("hides value labels by default", () => {
    render(<F0DataChart {...comboProps} />)

    for (const series of getLatestOption().series) {
      expect(series.label?.show).toBe(false)
    }
  })

  it("applies global and per-series line appearance options", () => {
    render(
      <F0DataChart
        {...comboProps}
        lineType="smooth"
        showDots
        lineSeries={[
          { name: "Actual", data: [4.1, 3.8, 5.2] },
          {
            name: "Forecast",
            data: [4.3, 4.1, 4.8],
            lineType: "step",
            dashed: true,
          },
        ]}
      />
    )

    const lines = getLatestOption().series.filter(
      (series) => series.type === "line"
    )
    expect(lines[0]).toMatchObject({
      smooth: true,
      step: false,
      showSymbol: true,
      symbolSize: 6,
      lineStyle: { type: "solid" },
    })
    expect(lines[1]).toMatchObject({
      smooth: false,
      step: "end",
      showSymbol: true,
      symbolSize: 6,
      lineStyle: { type: "dashed" },
    })
  })

  it("renders formatted line labels without requiring visible dots", () => {
    render(
      <F0DataChart
        {...comboProps}
        showLabels
        secondaryValueFormatter={(value) => `${value}%`}
      />
    )

    const line = getLatestOption().series.find(
      (series) => series.type === "line"
    )
    expect(line?.label?.show).toBe(true)
    expect(line?.label?.formatter?.({ value: 4.1 })).toBe("4.1%")
    expect(line?.showSymbol).toBe(true)
    expect(line?.symbolSize).toBe(0)
  })

  it("reserves formatter-derived edge space for line-only labels", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[]}
        lineSeries={[{ name: "Turnover rate", data: [4.1, 5.2] }]}
        showLabels
        secondaryValueFormatter={(value) =>
          `Annualized turnover ${value.toFixed(2)} percent`
        }
      />
    )

    expect(getLatestOption().grid.left).toBeGreaterThan(24)
    expect(getLatestOption().grid.right).toBeGreaterThan(24)
  })

  it("never enables an area fill on combo lines at runtime", () => {
    render(
      <F0DataChart
        {...comboProps}
        lineSeries={[
          {
            name: "Turnover rate",
            data: [4.1, 3.8, 5.2],
            showArea: true,
          } as (typeof comboProps.lineSeries)[number] & { showArea: boolean },
        ]}
      />
    )

    const line = getLatestOption().series.find(
      (series) => series.type === "line"
    )
    expect(line?.areaStyle).toBeUndefined()
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
    expect(description).toContain("Left axis, bars: People")
    expect(description).toContain("Headcount · People: Jan: 120 people")
    expect(description).toContain("Right axis, lines: Percent")
    expect(description).toContain("Turnover rate · Percent: Jan: 4.1%")
  })

  it("uses the visible category formatter in the accessible description", () => {
    render(
      <F0DataChart
        {...comboProps}
        categoryFormatter={(category) => category.toUpperCase()}
      />
    )

    const description = getLatestOption().aria?.label?.description ?? ""
    expect(description).toContain("JAN: 120")
    expect(description).not.toContain("Jan: 120")
  })

  it("describes targets and caps both axes to ten series in total", () => {
    const bars = Array.from({ length: 8 }, (_, index) => ({
      name: `Bar ${index}`,
      data: [index === 0 ? { value: 10, target: 20 } : index],
    }))
    const lines = Array.from({ length: 8 }, (_, index) => ({
      name: `Line ${index}`,
      data: [index],
    }))

    render(
      <F0DataChart
        {...comboProps}
        barSeries={bars}
        lineSeries={lines}
        valueFormatter={(value) => `${value} people`}
      />
    )

    const description = getLatestOption().aria?.label?.description ?? ""
    expect(description).toContain("target 20 people")
    expect(description).toContain("Bar 4")
    expect(description).toContain("Line 4")
    expect(description).not.toContain("Bar 5:")
    expect(description).not.toContain("Line 5:")
    expect(description).toContain("6 more series.")
  })

  it("uses singular accessible overflow copy", () => {
    render(
      <F0DataChart
        {...comboProps}
        categories={Array.from({ length: 21 }, (_, index) => String(index))}
        barSeries={[
          {
            name: "Long",
            data: Array.from({ length: 21 }, (_, index) => index),
          },
          ...Array.from({ length: 10 }, (_, index) => ({
            name: `Extra ${index}`,
            data: [index],
          })),
        ]}
        lineSeries={[]}
      />
    )

    const description = getLatestOption().aria?.label?.description ?? ""
    expect(description).toContain("1 more value")
    expect(description).toContain("1 more series.")
    expect(description).not.toContain("1 more values")
  })

  it("omits placeholder series from the legend and accessible description", () => {
    render(
      <F0DataChart
        {...comboProps}
        barSeries={[
          { name: "Pending", data: [] },
          { name: "Loaded", data: [10] },
        ]}
      />
    )

    expect(getLatestOption().legend?.data).toEqual([
      "Loaded · People",
      "Turnover rate · Percent",
    ])
    expect(getLatestOption().aria?.label?.description).not.toContain("Pending")
    expect(getLatestOption().series.map((series) => series.name)).not.toContain(
      "Pending · People"
    )
  })
})

describe("ComboChart — responsive breakpoints", () => {
  it("hides both axes and the legend at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(getValueAxes(option)[0].axisLabel.show).toBe(false)
    expect(getValueAxes(option)[1].axisLabel.show).toBe(false)
    expect(option.legend).toBeUndefined()
    expect(getValueAxes(option)[0].name).toBeUndefined()
    expect(getValueAxes(option)[1].name).toBeUndefined()
  })

  it("shows both value axes but no category axis at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(false)
    expect(getValueAxes(option)[0].axisLabel.show).toBe(true)
    expect(getValueAxes(option)[1].axisLabel.show).toBe(true)
  })

  it("shows every axis at the large breakpoint", () => {
    containerSize.width = 720
    render(<F0DataChart {...comboProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(getValueAxes(option)[0].axisLabel.show).toBe(true)
    expect(getValueAxes(option)[1].axisLabel.show).toBe(true)
  })
})

describe("ComboChart — empty state", () => {
  it("renders the empty state when neither axis has data", () => {
    render(
      <F0DataChart
        type="combo"
        primaryAxisLabel="Primary measure"
        secondaryAxisLabel="Secondary measure"
        categories={[]}
        barSeries={[]}
        lineSeries={[]}
      />
    )

    expect(setOptionMock).not.toHaveBeenCalled()
    expect(screen.getByText("No data available")).toBeInTheDocument()
  })

  it("renders one real value axis when only bars are available", () => {
    render(
      <F0DataChart
        type="combo"
        primaryAxisLabel="People"
        secondaryAxisLabel="Turnover rate"
        categories={["Jan", "Feb"]}
        barSeries={[{ name: "Headcount", data: [1, 2] }]}
        lineSeries={[]}
      />
    )

    const option = getLatestOption()
    expect(Array.isArray(option.yAxis)).toBe(false)
    expect(getValueAxes(option)).toHaveLength(1)
    expect(option.series.every((series) => series.yAxisIndex === 0)).toBe(true)
    expect(option.aria?.label?.description).toContain("Left axis, bars: People")
  })

  it("renders one line-formatted value axis when only lines are available", () => {
    render(
      <F0DataChart
        type="combo"
        primaryAxisLabel="People"
        secondaryAxisLabel="Rate"
        categories={["Jan", "Feb"]}
        barSeries={[]}
        lineSeries={[{ name: "Rate", data: [4, 5] }]}
        valueFormatter={(value) => `${value} people`}
        secondaryValueFormatter={(value) => `${value}%`}
      />
    )

    const option = getLatestOption()
    expect(Array.isArray(option.yAxis)).toBe(false)
    expect(getValueAxes(option)[0].axisLabel.formatter?.(4)).toBe("4%")
    expect(option.series.every((series) => series.yAxisIndex === 0)).toBe(true)
    expect(option.aria?.label?.description).toContain("Left axis, lines: Rate")
    expect(option.aria?.label?.description).not.toContain("Right axis")
  })
})
