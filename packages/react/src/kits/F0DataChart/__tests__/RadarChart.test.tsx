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
    radar: {
      axisName?: { show?: boolean; width?: number }
    }
    tooltip?: { formatter?: (params: unknown) => string }
  }
}

/** Run the tooltip formatter the way ECharts would on hover. */
function hover(params: unknown) {
  const formatter = getLatestOption().tooltip?.formatter
  if (!formatter) throw new Error("the chart built no tooltip formatter")
  return formatter(params)
}

const radarProps = {
  type: "radar" as const,
  indicators: [
    { name: "Performance" },
    { name: "Engagement" },
    { name: "Retention" },
  ],
  series: [{ name: "Team A", data: [85, 70, 90] }],
}

beforeEach(() => {
  setOptionMock.mockClear()
  containerSize.width = 800
  containerSize.height = 320
})

describe("RadarChart — responsive breakpoints", () => {
  it("hides legend and indicator names at the small breakpoint", () => {
    containerSize.width = 180
    render(<F0DataChart {...radarProps} />)

    const option = getLatestOption()
    expect(option.legend).toBeUndefined()
    expect(option.radar.axisName?.show).toBe(false)
  })

  it("shows legend and 56px indicator names at the medium breakpoint", () => {
    containerSize.width = 320
    render(<F0DataChart {...radarProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.radar.axisName?.width).toBe(56)
  })

  it("shows legend and 96px indicator names at the large breakpoint", () => {
    containerSize.width = 720
    render(<F0DataChart {...radarProps} />)

    const option = getLatestOption()
    expect(option.legend?.show).toBe(true)
    expect(option.radar.axisName?.width).toBe(96)
  })
})

// The formatter runs inside ECharts on hover, so it only gets exercised by
// calling it with the params ECharts passes.
describe("RadarChart — tooltip", () => {
  it("lists every indicator as a row under the series name", () => {
    render(<F0DataChart {...radarProps} />)

    const html = hover({
      name: "Team A",
      value: [85, 70, 90],
      marker: '<span class="trusted-marker"></span>',
    })
    expect(html).toContain('<span class="trusted-marker"></span>')
    expect(html).toContain("Team A")
    expect(html).toContain("Performance")
    expect(html).toContain("Engagement")
    expect(html).toContain("Retention")
    expect(html).toContain((85).toLocaleString())
    expect(html).toContain((70).toLocaleString())
    expect(html).toContain((90).toLocaleString())
    // A radar point carries every indicator at once — no single headline value.
    expect(html).not.toContain("font-size: 20px")
  })

  it("shows full numbers, not the compact vertex-label format", () => {
    render(
      <F0DataChart {...radarProps} valueFormatter={(v) => `${v / 100}x`} />
    )

    const html = hover({ name: "Team A", value: [8500, 70, 90] })
    expect(html).toContain((8500).toLocaleString())
    expect(html).not.toContain("85x") // that stays on the vertex label
  })

  it("lets tooltipValueFormatter set every indicator row", () => {
    render(
      <F0DataChart
        {...radarProps}
        tooltipValueFormatter={(v) => `${v} / 100`}
      />
    )

    const html = hover({ name: "Team A", value: [85, 70, 90] })
    expect(html).toContain("85 / 100")
    expect(html).toContain("70 / 100")
    expect(html).toContain("90 / 100")
  })

  it("escapes the series name and fills indicators the point omits", () => {
    render(
      <F0DataChart
        {...radarProps}
        series={[{ name: "<b>A</b>", data: [85] }]}
      />
    )

    const html = hover({ name: "<b>A</b>", value: [85] })
    expect(html).toContain("&lt;b&gt;A&lt;/b&gt;")
    expect(html).not.toContain("<b>")
    // Two indicators had no value: they read 0 rather than disappearing.
    expect(html).toContain("Retention")
    expect(html).not.toContain("undefined")
    expect(html).not.toContain("NaN")
  })
})
