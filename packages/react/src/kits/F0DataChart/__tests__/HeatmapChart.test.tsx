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

type SeriesItemStyle = {
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
}

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    xAxis: { axisLabel: { show: boolean }; axisLine: { show: boolean } }
    yAxis: { axisLabel: { show: boolean }; axisLine: { show: boolean } }
    visualMap?: { show?: boolean }
    series: Array<{
      label?: { show?: boolean }
      itemStyle?: SeriesItemStyle
    }>
    tooltip?: { formatter?: (params: unknown) => string }
  }
}

/** Run the tooltip formatter the way ECharts would on hover. */
function hover(params: unknown) {
  const formatter = getLatestOption().tooltip?.formatter
  if (!formatter) throw new Error("the chart built no tooltip formatter")
  return formatter(params)
}

const heatmapProps = {
  type: "heatmap" as const,
  xCategories: ["Mon", "Tue", "Wed"],
  yCategories: ["Morning", "Afternoon"],
  data: [
    [0, 0, 5],
    [1, 0, 8],
    [2, 0, 3],
    [0, 1, 9],
    [1, 1, 4],
    [2, 1, 6],
  ] as [number, number, number][],
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("HeatmapChart — responsive breakpoints", () => {
  it("renders the 'Not supported' placeholder at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...heatmapProps} />)

    expect(
      screen.getByText("Heatmap not supported at this size")
    ).toBeInTheDocument()
  })

  it("shows only the X axis at the medium breakpoint (220–519px)", () => {
    containerSize.width = 320
    render(<F0DataChart {...heatmapProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(false)
    expect(option.visualMap?.show).toBe(false)
  })

  it("shows both axes at the large breakpoint (>= 520px)", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLabel.show).toBe(true)
    expect(option.yAxis.axisLabel.show).toBe(true)
    expect(option.visualMap?.show).toBe(false)
  })
})

describe("HeatmapChart — cell appearance", () => {
  it("hides inline value labels by default (tooltip-only reveal)", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const option = getLatestOption()
    expect(option.series[0].label?.show).toBe(false)
  })

  it("shows inline value labels when showLabels is true", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} showLabels />)

    const option = getLatestOption()
    expect(option.series[0].label?.show).toBe(true)
  })

  it("draws background-coloured borders to fake the cell gap", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const option = getLatestOption()
    expect(option.series[0].itemStyle?.borderWidth).toBeGreaterThanOrEqual(2)
    // Border colour matches the chart background so the cells visually
    // separate. The exact hex depends on the resolved theme.
    expect(option.series[0].itemStyle?.borderColor).toEqual(expect.any(String))
  })

  it("hides the X and Y axis lines (only labels are shown)", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const option = getLatestOption()
    expect(option.xAxis.axisLine.show).toBe(false)
    expect(option.yAxis.axisLine.show).toBe(false)
  })
})

// The formatter runs inside ECharts on hover, so it only gets exercised by
// calling it with the params ECharts passes.
describe("HeatmapChart — tooltip", () => {
  it("names both dimensions of the hovered cell and shows its value", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const html = hover({
      value: [1, 1, 4],
      marker: '<span class="trusted-marker"></span>',
    })
    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("Afternoon") // y category
    expect(html).toContain("Tue") // x category
    expect(html).toContain((4).toLocaleString())
  })

  it("escapes category names and ignores the in-cell label format", () => {
    containerSize.width = 720
    render(
      <F0DataChart
        {...heatmapProps}
        xCategories={["<script>x</script>", "Tue", "Wed"]}
        showLabels
        valueFormatter={(v) => `${v}h`}
      />
    )

    const html = hover({ value: [0, 0, 5] })
    expect(html).toContain((5).toLocaleString())
    expect(html).not.toContain("5h") // that stays inside the cell
    expect(html).toContain("&lt;script&gt;")
    expect(html).not.toContain("<script>")
  })

  it("lets tooltipValueFormatter set the tooltip number", () => {
    containerSize.width = 720
    render(
      <F0DataChart
        {...heatmapProps}
        showLabels
        tooltipValueFormatter={(v) => `${v} hours`}
      />
    )

    expect(hover({ value: [1, 1, 4] })).toContain("4 hours")
  })

  it("survives a cell params object with no value tuple", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const html = hover({})
    // Falls back to the first cell of the grid at zero rather than throwing.
    expect(html).toContain("Morning")
    expect(html).toContain("Mon")
    expect(html).toContain((0).toLocaleString())
    expect(html).not.toContain("undefined")
  })

  it("leaves the title empty when the index is outside the categories", () => {
    containerSize.width = 720
    render(<F0DataChart {...heatmapProps} />)

    const html = hover({ value: [9, 9, 2] })
    expect(html).toContain((2).toLocaleString())
    expect(html).not.toContain("undefined")
  })
})
