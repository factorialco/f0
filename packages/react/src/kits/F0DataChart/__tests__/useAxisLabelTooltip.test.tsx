import type * as echarts from "echarts"
import type { RefObject } from "react"

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook } from "@/testing/test-utils"

import { resolveChartTheme } from "../utils/theme"
import { useAxisLabelTooltip } from "../utils/useAxisLabelTooltip"

type ChartEventHandler = (params: Record<string, unknown>) => void

describe("useAxisLabelTooltip — axis titles", () => {
  const handlers = new Map<string, ChartEventHandler>()
  let container: HTMLDivElement
  let axis = {
    name: "Plantilla equivalente a tiempo completo",
    nameTruncate: { maxWidth: 80 },
  }
  let chart: echarts.ECharts

  beforeEach(() => {
    handlers.clear()
    axis = {
      name: "Plantilla equivalente a tiempo completo",
      nameTruncate: { maxWidth: 80 },
    }
    container = document.createElement("div")
    document.body.appendChild(container)

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      font: "",
      measureText: (text: string) => ({ width: text.length * 8 }),
    } as unknown as CanvasRenderingContext2D)

    chart = {
      getOption: () => ({ yAxis: [axis] }),
      on: vi.fn((event: string, handler: ChartEventHandler) => {
        handlers.set(event, handler)
      }),
      off: vi.fn(),
    } as unknown as echarts.ECharts
  })

  afterEach(() => {
    container.remove()
    vi.restoreAllMocks()
  })

  it("reveals only truncated full titles and cleans up its listeners", () => {
    const chartRef = { current: chart } as RefObject<echarts.ECharts | null>
    const containerRef = {
      current: container,
    } as RefObject<HTMLDivElement | null>
    const { unmount } = zeroRenderHook(() =>
      useAxisLabelTooltip(chartRef, containerRef, resolveChartTheme())
    )
    const mouseover = handlers.get("mouseover")
    const mouseout = handlers.get("mouseout")
    if (!mouseover || !mouseout) throw new Error("Chart listeners not attached")

    act(() => {
      mouseover({
        componentType: "yAxis",
        componentIndex: 0,
        targetType: "axisName",
        event: { offsetX: 12, offsetY: 16 },
      })
    })

    const overlay = Array.from(container.children).find(
      (element) => element.textContent === axis.name
    ) as HTMLDivElement | undefined
    expect(overlay).toBeDefined()
    expect(overlay).toHaveTextContent("Plantilla equivalente a tiempo completo")
    expect(overlay).toHaveStyle({ opacity: "1" })
    expect(container.dataset.axisHover).toBe("true")

    act(() => {
      mouseout({ componentType: "yAxis" })
    })
    expect(overlay).toHaveStyle({ opacity: "0" })
    expect(container.dataset.axisHover).toBe("false")

    axis = { name: "People", nameTruncate: { maxWidth: 200 } }
    act(() => {
      mouseover({
        componentType: "yAxis",
        componentIndex: 0,
        targetType: "axisName",
        event: { offsetX: 12, offsetY: 16 },
      })
    })
    expect(overlay).toHaveStyle({ opacity: "0" })

    unmount()
    expect(chart.off).toHaveBeenCalledWith("mouseover", mouseover)
    expect(chart.off).toHaveBeenCalledWith("mouseout", mouseout)
    expect(container).not.toContainElement(overlay ?? null)
    expect(container.dataset.axisHover).toBe("false")
  })
})
