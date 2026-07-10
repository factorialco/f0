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
    legend?: { show?: boolean }
    series: Array<{
      label?: { show?: boolean }
      labelLine?: { show?: boolean }
      radius?: [string, string]
    }>
  }
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
