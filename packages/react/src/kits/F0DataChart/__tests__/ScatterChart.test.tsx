import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import type { F0DataChartScatterProps } from "../types"

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
  type: string
  scale?: boolean
  axisLabel: { show: boolean }
  splitLine: { show: boolean }
}

type ScatterPoint = {
  name?: string
  value: [number, number]
  itemStyle?: { color?: string }
}

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    xAxis: ValueAxis
    yAxis: ValueAxis
    // `buildLegend` returns undefined rather than `{show: false}` when hidden.
    legend?: { show: boolean; data?: string[] }
    tooltip: { trigger: string; formatter: (params: unknown) => string }
    series: Array<{
      name: string
      type: string
      symbolSize: number
      data: ScatterPoint[]
      itemStyle?: { color?: string; opacity?: number }
    }>
  }
}

const scatterProps: F0DataChartScatterProps = {
  type: "scatter",
  series: [
    {
      name: "Engineering",
      data: [
        { x: 62000, y: 4.5, label: "Ana Ruiz" },
        { x: 78000, y: 7.2, label: "Marc Vidal" },
      ],
    },
  ],
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("ScatterChart — axes", () => {
  it("builds two value axes rather than a category axis", () => {
    render(<F0DataChart {...scatterProps} />)

    const { xAxis, yAxis } = getLatestOption()
    expect(xAxis.type).toBe("value")
    expect(yAxis.type).toBe("value")
  })

  it("fits both axes to the data range by default", () => {
    render(<F0DataChart {...scatterProps} />)

    const { xAxis, yAxis } = getLatestOption()
    expect(xAxis.scale).toBe(true)
    expect(yAxis.scale).toBe(true)
  })

  it("anchors both axes at zero when scaleAxes is off", () => {
    render(<F0DataChart {...scatterProps} scaleAxes={false} />)

    const { xAxis, yAxis } = getLatestOption()
    expect(xAxis.scale).toBe(false)
    expect(yAxis.scale).toBe(false)
  })

  it("tracks showGrid on both axes", () => {
    render(<F0DataChart {...scatterProps} showGrid={false} />)

    const { xAxis, yAxis } = getLatestOption()
    expect(xAxis.splitLine.show).toBe(false)
    expect(yAxis.splitLine.show).toBe(false)
  })
})

describe("ScatterChart — series", () => {
  it("emits one ECharts scatter series per F0 series, with distinct palette colors", () => {
    render(
      <F0DataChart
        {...scatterProps}
        series={[
          { name: "Engineering", data: [[1, 2]] },
          { name: "Sales", data: [[3, 4]] },
        ]}
      />
    )

    const { series } = getLatestOption()
    expect(series).toHaveLength(2)
    expect(series.map((s) => s.type)).toEqual(["scatter", "scatter"])
    expect(series[0]?.itemStyle?.color).not.toBe(series[1]?.itemStyle?.color)
  })

  it("converts tuple points to bare ECharts values", () => {
    render(
      <F0DataChart
        {...scatterProps}
        series={[{ name: "Engineering", data: [[62000, 4.5]] }]}
      />
    )

    const point = getLatestOption().series[0]?.data[0]
    expect(point?.value).toEqual([62000, 4.5])
    expect(point?.name).toBeUndefined()
  })

  it("carries a point label through as the ECharts item name", () => {
    render(<F0DataChart {...scatterProps} />)

    const point = getLatestOption().series[0]?.data[0]
    expect(point?.value).toEqual([62000, 4.5])
    expect(point?.name).toBe("Ana Ruiz")
  })

  it("applies pointSize as the symbol size", () => {
    render(<F0DataChart {...scatterProps} pointSize={14} />)

    expect(getLatestOption().series[0]?.symbolSize).toBe(14)
  })

  it("clamps a pointSize that would blank or flood the plot", () => {
    // Can arrive unvalidated from an agent-authored config.
    render(<F0DataChart {...scatterProps} pointSize={0} />)
    expect(getLatestOption().series[0]?.symbolSize).toBe(2)

    render(<F0DataChart {...scatterProps} pointSize={9000} />)
    expect(getLatestOption().series[0]?.symbolSize).toBe(48)
  })
})

describe("ScatterChart — legend", () => {
  it("hides the legend for a single series", () => {
    render(<F0DataChart {...scatterProps} />)

    expect(getLatestOption().legend).toBeUndefined()
  })

  it("shows the legend once the points are color-split", () => {
    render(
      <F0DataChart
        {...scatterProps}
        series={[
          { name: "Engineering", data: [[1, 2]] },
          { name: "Sales", data: [[3, 4]] },
        ]}
      />
    )

    const { legend } = getLatestOption()
    expect(legend?.show).toBe(true)
    expect(legend?.data).toEqual(["Engineering", "Sales"])
  })

  it("honours showLegend={false} even with multiple series", () => {
    render(
      <F0DataChart
        {...scatterProps}
        showLegend={false}
        series={[
          { name: "Engineering", data: [[1, 2]] },
          { name: "Sales", data: [[3, 4]] },
        ]}
      />
    )

    expect(getLatestOption().legend).toBeUndefined()
  })
})

describe("ScatterChart — tooltip", () => {
  it("titles the card with the point and subtitles it with the series", () => {
    render(<F0DataChart {...scatterProps} />)

    const html = getLatestOption().tooltip.formatter({
      marker: "<span></span>",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [62000, 4.5],
    })

    expect(getLatestOption().tooltip.trigger).toBe("item")
    expect(html).toContain("Ana Ruiz")
    expect(html).toContain("Engineering")
  })

  it("lists both coordinates as rows, labelled by the axis names", () => {
    render(
      <F0DataChart
        {...scatterProps}
        xAxisName="salary"
        yAxisName="tenure"
        xTooltipValueFormatter={(v) => `€${v.toLocaleString()}`}
        tooltipValueFormatter={(v) => `${v} yrs`}
      />
    )

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [62000, 4.5],
    })

    expect(html).toContain(`€${(62000).toLocaleString()}`)
    expect(html).toContain("salary")
    expect(html).toContain("4.5 yrs")
    expect(html).toContain("tenure")
  })

  it("renders both coordinates at headline size", () => {
    render(<F0DataChart {...scatterProps} xAxisName="salary" />)

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [62000, 4.5],
    })

    // Both rows opt into the large size, so the headline style appears twice.
    expect(html.match(/font-size: 20px/g)).toHaveLength(2)
  })

  it("shows full numbers rather than the compact axis format", () => {
    render(
      <F0DataChart
        {...scatterProps}
        xValueFormatter={(v) => `€${v / 1000}k`}
        valueFormatter={(v) => `${v} yrs`}
      />
    )

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [62000, 4.5],
    })

    expect(html).toContain((62000).toLocaleString())
    expect(html).not.toContain("€62k")
  })

  it("falls back to the series name as the title when a point has no label", () => {
    render(<F0DataChart {...scatterProps} />)

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "",
      seriesName: "Engineering",
      value: [1, 2],
    })

    expect(html).toContain("Engineering")
  })

  it("formats unformatted coordinates with locale separators", () => {
    render(<F0DataChart {...scatterProps} />)

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [62000, 4.5],
    })

    expect(html).toContain((62000).toLocaleString())
  })

  it("survives a malformed coordinate pair", () => {
    render(<F0DataChart {...scatterProps} />)

    // `scatterSeries` arrives as JSON from a fetch, so the TS types are not a
    // runtime guarantee — a short tuple must not throw from inside ECharts.
    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "Ana Ruiz",
      seriesName: "Engineering",
      value: [5] as unknown as [number, number],
    })

    expect(html).toContain("Ana Ruiz")
  })

  it("escapes labels coming from user data", () => {
    render(<F0DataChart {...scatterProps} />)

    const html = getLatestOption().tooltip.formatter({
      marker: "",
      name: "<script>alert(1)</script>",
      value: [1, 2],
    })

    expect(html).not.toContain("<script>")
  })
})

describe("ScatterChart — responsive breakpoints", () => {
  it("drops both axes and the legend at the small breakpoint", () => {
    containerSize.width = 180
    render(
      <F0DataChart
        {...scatterProps}
        series={[
          { name: "Engineering", data: [[1, 2]] },
          { name: "Sales", data: [[3, 4]] },
        ]}
      />
    )

    const { xAxis, yAxis, legend } = getLatestOption()
    expect(xAxis.axisLabel.show).toBe(false)
    expect(yAxis.axisLabel.show).toBe(false)
    expect(legend).toBeUndefined()
  })

  it("shows both axes from the medium breakpoint up", () => {
    containerSize.width = 400
    render(<F0DataChart {...scatterProps} />)

    const { xAxis, yAxis } = getLatestOption()
    expect(xAxis.axisLabel.show).toBe(true)
    expect(yAxis.axisLabel.show).toBe(true)
  })
})

describe("ScatterChart — empty state", () => {
  it("renders the empty state when there are no series", () => {
    render(<F0DataChart {...scatterProps} series={[]} />)

    expect(setOptionMock).not.toHaveBeenCalled()
  })

  it("renders the empty state when every series has no points", () => {
    render(
      <F0DataChart {...scatterProps} series={[{ name: "Empty", data: [] }]} />
    )

    expect(setOptionMock).not.toHaveBeenCalled()
  })

  it("treats a point at the origin as real data", () => {
    render(
      <F0DataChart
        {...scatterProps}
        series={[{ name: "Zero", data: [[0, 0]] }]}
      />
    )

    expect(setOptionMock).toHaveBeenCalled()
  })
})
