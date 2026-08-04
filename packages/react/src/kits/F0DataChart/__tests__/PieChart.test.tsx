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
    legend?: { show?: boolean }
    series: Array<{
      label?: { show?: boolean }
      labelLine?: { show?: boolean }
      radius?: [string, string]
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

const pieProps = {
  type: "pie" as const,
  series: {
    name: "Headcount",
    data: [
      { name: "Engineering", value: 45 },
      { name: "Design", value: 18 },
      { name: "Product", value: 22 },
    ],
  },
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("PieChart — responsive breakpoints", () => {
  it("hides legend and outside labels at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...pieProps} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    expect(option.series[0].label?.show).toBe(false)
    expect(option.series[0].labelLine?.show).toBe(false)
  })

  it("shows legend but hides outside labels at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...pieProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.series[0].label?.show).toBe(false)
  })

  it("shows legend and outside labels at the large breakpoint", () => {
    containerSize.width = 720
    render(<F0DataChart {...pieProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.series[0].label?.show).toBe(true)
  })

  it("respects an explicit showLegend={false} even at lg", () => {
    containerSize.width = 720
    render(<F0DataChart {...pieProps} showLegend={false} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
  })
})

// The formatter runs inside ECharts on hover, so it only gets exercised by
// calling it with the params ECharts passes.
describe("PieChart — tooltip", () => {
  it("shows the slice, its value, its share and the whole", () => {
    render(<F0DataChart {...pieProps} />)

    const html = hover({
      name: "Engineering",
      value: 45,
      percent: 53.6,
      marker: '<span class="trusted-marker"></span>',
    })
    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("Engineering")
    expect(html).toContain((45).toLocaleString())
    expect(html).toContain("53.6%")
    expect(html).toContain("of total")
    expect(html).toContain((85).toLocaleString()) // 45 + 18 + 22
  })

  it("reads the slice value and the total the way the labels do", () => {
    render(<F0DataChart {...pieProps} valueFormatter={(v) => `${v} FTE`} />)

    const html = hover({ name: "Design", value: 18, percent: 21.2 })
    expect(html).toContain("18 FTE")
    expect(html).toContain("85 FTE") // the total row too
  })

  it("lets tooltipValueFormatter set both the slice value and the total", () => {
    render(
      <F0DataChart {...pieProps} tooltipValueFormatter={(v) => `${v} FTE`} />
    )

    const html = hover({ name: "Design", value: 18, percent: 21.2 })
    expect(html).toContain("18 FTE")
    expect(html).toContain("85 FTE") // the total row too
  })

  it("escapes the slice name and keeps a missing value at zero", () => {
    render(<F0DataChart {...pieProps} />)

    const html = hover({ name: "<script>x</script>" })
    expect(html).toContain("&lt;script&gt;")
    expect(html).not.toContain("<script>")
    expect(html).toContain((0).toLocaleString())
    expect(html).toContain("0.0%") // ECharts sent no percent
    expect(html).not.toContain("NaN")
  })
})
