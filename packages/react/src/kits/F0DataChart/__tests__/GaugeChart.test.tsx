import { beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { F0DataChart } from "../F0DataChart"

import { stubChartContainerLayout } from "./stubChartContainerLayout"

stubChartContainerLayout()

const setOptionMock = vi.fn()

vi.mock("echarts", () => ({
  init: vi.fn(() => ({
    setOption: setOptionMock,
    resize: vi.fn(),
    dispose: vi.fn(),
    isDisposed: vi.fn(() => false),
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
      progress?: { width?: number }
      axisLine?: { lineStyle?: { width?: number } }
    }>
  }
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
