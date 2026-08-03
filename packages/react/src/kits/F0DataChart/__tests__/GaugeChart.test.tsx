import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
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

function getLatestOption() {
  const call = setOptionMock.mock.calls.at(-1)
  if (!call) throw new Error("setOption was never called")
  return call[0] as {
    series: Array<{
      title?: { show?: boolean; fontSize?: number }
      detail?: { show?: boolean; fontSize?: number }
      progress?: { width?: number; itemStyle?: { color?: string } }
      axisLine?: { lineStyle?: { width?: number } }
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

const gaugeProps = {
  type: "gauge" as const,
  value: 72,
  name: "Engagement",
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("GaugeChart — responsive breakpoints", () => {
  it("hides the name and shrinks the ring at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...gaugeProps} />)

    const option = getLatestOption()
    expect(option.series[0].title?.show).toBe(false)
    expect(option.series[0].detail?.fontSize).toBe(18)
    expect(option.series[0].progress?.width).toBe(8)
  })

  it("uses medium typography at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...gaugeProps} />)

    const option = getLatestOption()
    expect(option.series[0].title?.show).toBe(true)
    expect(option.series[0].detail?.fontSize).toBe(24)
    expect(option.series[0].progress?.width).toBe(12)
  })

  it("uses large typography at the large breakpoint", () => {
    containerSize.width = 720
    render(<F0DataChart {...gaugeProps} />)

    const option = getLatestOption()
    expect(option.series[0].title?.show).toBe(true)
    expect(option.series[0].detail?.fontSize).toBe(32)
    expect(option.series[0].progress?.width).toBe(18)
  })
})

// The formatter runs inside ECharts on hover, so it only gets exercised by
// calling it with the params ECharts passes.
describe("GaugeChart — tooltip", () => {
  it("shows the name, the value and its share of the range", () => {
    render(<F0DataChart {...gaugeProps} min={0} max={200} />)

    const html = hover({ name: "Engagement", value: 72 })
    expect(html).toContain("Engagement")
    expect(html).toContain((72).toLocaleString())
    expect(html).toContain("36.0%")
    expect(html).toContain("of range")
  })

  it("marks the dot with the arc's own colour, not the palette entry", () => {
    render(<F0DataChart {...gaugeProps} color="viridian" />)

    const painted = getLatestOption().series[0].progress?.itemStyle?.color
    expect(painted).toBeTruthy()
    expect(hover({ name: "Engagement", value: 72 })).toContain(
      `background-color:${painted}`
    )
  })

  it("escapes the name and reads the value the way the ring does", () => {
    render(
      <F0DataChart
        {...gaugeProps}
        name="<script>x</script>"
        value={7200}
        max={10000}
        valueFormatter={(v) => `${v / 100}%`}
      />
    )

    const html = hover({ name: "<script>x</script>", value: 7200 })
    expect(html).toContain("72%")
    expect(html).toContain("&lt;script&gt;")
    expect(html).not.toContain("<script>")
  })

  it("lets tooltipValueFormatter set the tooltip number", () => {
    render(
      <F0DataChart
        {...gaugeProps}
        valueFormatter={(v) => `${v}%`}
        tooltipValueFormatter={(v) => `${v} of 100 points`}
      />
    )

    expect(hover({ name: "Engagement", value: 72 })).toContain(
      "72 of 100 points"
    )
  })

  it("survives a missing value and a zero-width range", () => {
    render(<F0DataChart {...gaugeProps} min={50} max={50} />)

    const html = hover({ name: "Engagement" })
    expect(html).toContain((0).toLocaleString())
    expect(html).not.toContain("of range") // no range to be a share of
    expect(html).not.toContain("NaN")
    expect(html).not.toContain("Infinity")
  })
})
