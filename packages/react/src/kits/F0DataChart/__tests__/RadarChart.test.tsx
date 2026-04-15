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
  }
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
