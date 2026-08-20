import type * as echarts from "echarts"
import { useRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import type { F0DataChartPointClick } from "../types"

import { usePointClick } from "../utils/usePointClick"

/** Minimal stand-in for an ECharts instance: records handlers so tests can fire them. */
function makeChartStub() {
  const handlers: Record<string, ((params: unknown) => void)[]> = {}
  const dispatched: { type: string }[] = []
  let disposed = false
  return {
    handlers,
    dispatched,
    dispose: () => {
      disposed = true
    },
    instance: {
      on: (event: string, fn: (params: unknown) => void) => {
        handlers[event] = [...(handlers[event] ?? []), fn]
      },
      off: (event: string, fn: (params: unknown) => void) => {
        handlers[event] = (handlers[event] ?? []).filter((h) => h !== fn)
      },
      isDisposed: () => disposed,
      dispatchAction: (action: { type: string }) => {
        dispatched.push(action)
      },
    } as unknown as echarts.ECharts,
  }
}

/**
 * Stand-in for a line chart, which resolves clicks itself instead of being
 * handed a mark: the grid spans x 40–440 and y 20–220, categories sit every
 * 100px from x=40, and the value axis runs 0 at the bottom to 100 at the top.
 */
function makeLineChartStub(option: {
  series?: { name?: string; data?: unknown[] }[]
  xAxis?: { data?: unknown[] }[]
  legend?: { selected?: Record<string, boolean> }[]
}) {
  const zrHandlers: Record<string, ((ev: unknown) => void)[]> = {}
  const chartHandlers: Record<string, ((params: unknown) => void)[]> = {}
  const cursorStyles: string[] = []
  const dispatched: { type: string }[] = []
  let disposed = false
  return {
    zrHandlers,
    chartHandlers,
    cursorStyles,
    dispatched,
    dispose: () => {
      disposed = true
    },
    instance: {
      on: (event: string, fn: (params: unknown) => void) => {
        chartHandlers[event] = [...(chartHandlers[event] ?? []), fn]
      },
      off: (event: string, fn: (params: unknown) => void) => {
        chartHandlers[event] = (chartHandlers[event] ?? []).filter(
          (handler) => handler !== fn
        )
      },
      getZr: () => ({
        on: (event: string, fn: (ev: unknown) => void) => {
          zrHandlers[event] = [...(zrHandlers[event] ?? []), fn]
        },
        off: (event: string, fn: (ev: unknown) => void) => {
          zrHandlers[event] = (zrHandlers[event] ?? []).filter(
            (handler) => handler !== fn
          )
        },
        setCursorStyle: (cursor: string) => {
          cursorStyles.push(cursor)
        },
      }),
      containPixel: (_finder: string, [x, y]: [number, number]) =>
        x >= 40 && x <= 440 && y >= 20 && y <= 220,
      convertFromPixel: (_finder: unknown, [x, y]: [number, number]) => [
        (x - 40) / 100,
        (220 - y) / 2,
      ],
      getOption: () => option,
      isDisposed: () => disposed,
      dispatchAction: (action: { type: string }) => {
        dispatched.push(action)
      },
    } as unknown as echarts.ECharts,
  }
}

const Harness = ({
  chart,
  onPointClick,
  hitArea,
}: {
  chart: echarts.ECharts
  onPointClick?: (point: F0DataChartPointClick) => void
  hitArea?: "mark" | "plot"
}) => {
  const ref = useRef<echarts.ECharts | null>(chart)
  usePointClick(ref, onPointClick, hitArea)
  return null
}

const fire = (stub: ReturnType<typeof makeChartStub>, params: unknown) =>
  stub.handlers["click"]?.forEach((h) => h(params))

const clickPlot = (
  stub: ReturnType<typeof makeLineChartStub>,
  offsetX: number,
  offsetY: number,
  event?: unknown
) =>
  stub.zrHandlers.click?.forEach((handler) =>
    handler({ offsetX, offsetY, event })
  )

const hoverPlot = (
  stub: ReturnType<typeof makeLineChartStub>,
  offsetX: number,
  offsetY: number
) =>
  stub.zrHandlers.mousemove?.forEach((handler) => handler({ offsetX, offsetY }))

const leavePlot = (stub: ReturnType<typeof makeLineChartStub>) =>
  stub.zrHandlers.globalout?.forEach((handler) => handler({}))

const enterAxis = (stub: ReturnType<typeof makeLineChartStub>) =>
  stub.chartHandlers.mouseover?.forEach((handler) =>
    handler({ componentType: "xAxis" })
  )

const leaveAxis = (stub: ReturnType<typeof makeLineChartStub>) =>
  stub.chartHandlers.mouseout?.forEach((handler) =>
    handler({ componentType: "xAxis" })
  )

describe("usePointClick", () => {
  it("reports the clicked mark, normalised", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, {
      componentType: "series",
      seriesName: "Male",
      seriesIndex: 1,
      dataIndex: 0,
      name: "Barcelona office",
      value: 18,
      event: { event: { clientX: 420, clientY: 260 } },
    })

    expect(onPointClick).toHaveBeenCalledWith({
      source: "pointer",
      seriesName: "Male",
      category: "Barcelona office",
      value: 18,
      values: [18],
      // A mark is one series, so the list holds exactly it.
      series: [{ name: "Male", seriesIndex: 1, value: 18 }],
      dataIndex: 0,
      seriesIndex: 1,
      clientX: 420,
      clientY: 260,
    })
  })

  it("keeps both measures of a scatter point, not just the last", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, {
      componentType: "series",
      seriesName: "Engineering",
      seriesIndex: 0,
      dataIndex: 4,
      name: "Roser Nogué",
      value: [128000, 0.6],
    })

    // A scatter point *is* the relationship between its two measures, so
    // reporting only `value` would quote the tenure and drop the salary.
    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ value: 0.6, values: [128000, 0.6] })
    )
  })

  it("rejects a tuple when any measure is not finite", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, {
      componentType: "series",
      seriesName: "Engineering",
      value: [Number.NaN, 0.6],
    })

    expect(onPointClick).not.toHaveBeenCalled()
  })

  it.each([null, undefined, ""])(
    "rejects a tuple when an earlier measure is %s",
    (invalid) => {
      const stub = makeChartStub()
      const onPointClick = vi.fn()
      render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

      fire(stub, {
        componentType: "series",
        seriesName: "Engineering",
        value: [invalid, 0.6],
      })

      expect(onPointClick).not.toHaveBeenCalled()
    }
  )

  it("keeps the whole tuple of a heatmap cell", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    // `[xIndex, yIndex, value]` — here the last entry really is the measure.
    fire(stub, {
      componentType: "series",
      seriesName: "Office activity",
      value: [2, 4, 37],
    })

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ value: 37, values: [2, 4, 37] })
    )
  })

  it.each([
    {
      name: "radar",
      params: {
        componentType: "series",
        name: "Team A",
        value: [8, 7],
        dataIndex: 1,
        seriesIndex: 0,
      },
      expected: {
        seriesName: "",
        category: "Team A",
        value: 7,
        values: [8, 7],
        dataIndex: 1,
        seriesIndex: 0,
      },
    },
    {
      name: "gauge",
      params: {
        componentType: "series",
        name: "Goal",
        value: 72,
        dataIndex: 0,
        seriesIndex: 0,
      },
      expected: {
        seriesName: "",
        category: "Goal",
        value: 72,
        values: [72],
        dataIndex: 0,
        seriesIndex: 0,
      },
    },
  ])("normalizes $name item semantics", ({ params, expected }) => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, params)

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ source: "pointer", ...expected })
    )
  })

  it("dismisses the hover tooltip on a pick", () => {
    const stub = makeChartStub()
    render(<Harness chart={stub.instance} onPointClick={vi.fn()} />)

    // Otherwise the tooltip and whatever answers the click stack over one mark.
    fire(stub, { componentType: "series", seriesName: "Male", value: 18 })

    expect(stub.dispatched).toEqual([{ type: "hideTip" }])
  })

  it("leaves the tooltip alone when the click is not a pick", () => {
    const stub = makeChartStub()
    render(<Harness chart={stub.instance} onPointClick={vi.fn()} />)

    fire(stub, { componentType: "legend", name: "Male" })
    fire(stub, { componentType: "series", seriesName: "Male", value: null })

    expect(stub.dispatched).toEqual([])
  })

  it("takes the position from the touch on a touch device", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    // A TouchEvent has no `clientX` of its own — it lives on the touch. Without
    // reading it the popover would anchor to the viewport corner.
    fire(stub, {
      componentType: "series",
      seriesName: "Male",
      value: 18,
      event: { event: { changedTouches: [{ clientX: 120, clientY: 340 }] } },
    })

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ clientX: 120, clientY: 340 })
    )
  })

  it("falls back to 0,0 when the event carries no position", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, { componentType: "series", seriesName: "Male", value: 18 })

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ clientX: 0, clientY: 0 })
    )
  })

  it("ignores clicks that are not on a series", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    // Axis labels and legend entries raise `click` too, and carry no value.
    fire(stub, { componentType: "xAxis", value: "Barcelona office" })
    fire(stub, { componentType: "legend", name: "Male" })

    expect(onPointClick).not.toHaveBeenCalled()
  })

  it("ignores a series click with no usable value", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    // A gap in the data must not be quoted. `Number(null)` and `Number("")`
    // are both 0, so these would read as a real zero without an explicit guard.
    fire(stub, { componentType: "series", seriesName: "Male", value: null })
    fire(stub, {
      componentType: "series",
      seriesName: "Male",
      value: undefined,
    })
    fire(stub, { componentType: "series", seriesName: "Male", value: "" })
    fire(stub, { componentType: "series", seriesName: "Male", value: "n/a" })

    expect(onPointClick).not.toHaveBeenCalled()
  })

  it("still reports a genuine zero", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, {
      componentType: "series",
      seriesName: "Not specified",
      name: "Tokyo office",
      value: 0,
    })

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ value: 0 })
    )
  })

  it("does nothing when no handler is supplied", () => {
    const stub = makeChartStub()
    render(<Harness chart={stub.instance} />)

    // Binding still happens, so the listener must tolerate an absent handler.
    expect(() =>
      fire(stub, { componentType: "series", seriesName: "Male", value: 1 })
    ).not.toThrow()
  })

  it("detaches on unmount", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    const { unmount } = render(
      <Harness chart={stub.instance} onPointClick={onPointClick} />
    )

    unmount()

    expect(stub.handlers["click"]).toHaveLength(0)
    fire(stub, { componentType: "series", seriesName: "Male", value: 1 })
    expect(onPointClick).not.toHaveBeenCalled()
  })

  it("unmounts cleanly when the instance was already disposed", () => {
    const stub = makeChartStub()
    const { unmount } = render(
      <Harness chart={stub.instance} onPointClick={vi.fn()} />
    )

    // `off` throws on a disposed instance, so cleanup has to skip it. The
    // listener is left attached, which is harmless: a disposed chart emits
    // nothing. Only the absence of a throw is meaningful here.
    stub.dispose()
    expect(() => unmount()).not.toThrow()
  })
})

describe("usePointClick — plot hit area (line charts)", () => {
  const lineOption = {
    xAxis: [{ data: ["Jan", "Feb", "Mar", "Apr", "May"] }],
    series: [
      { name: "Headcount", data: [10, 30, 50, 70, 90] },
      { name: "Attrition", data: [5, 8, null, 12, 15] },
    ],
  }

  const renderLine = (
    stub: ReturnType<typeof makeLineChartStub>,
    onPointClick = vi.fn()
  ) => {
    render(
      <Harness
        chart={stub.instance}
        onPointClick={onPointClick}
        hitArea="plot"
      />
    )
    return onPointClick
  }

  it("answers a click that misses the line entirely", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    // x=140 is "Feb"; y=164 reads as 28 on the value axis — well off the line
    // at 30, which is the whole point: a line is too thin to ask for a hit.
    clickPlot(stub, 140, 164)

    expect(onPointClick).toHaveBeenCalledWith({
      source: "pointer",
      seriesName: "Headcount",
      category: "Feb",
      value: 30,
      values: [30],
      series: [
        { name: "Headcount", seriesIndex: 0, value: 30 },
        { name: "Attrition", seriesIndex: 1, value: 8 },
      ],
      dataIndex: 1,
      seriesIndex: 0,
      clientX: 0,
      clientY: 0,
    })
  })

  it("reports every series at the category, in configured order", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    // The tooltip here is axis-triggered: hovering "Feb" lists both series.
    // A click covers the same column, so it answers with the same rows —
    // wherever in the column it landed.
    clickPlot(stub, 140, 30)
    clickPlot(stub, 140, 210)

    const columns = onPointClick.mock.calls.map(([p]) => p.series)
    expect(columns[0]).toEqual(columns[1])
    expect(columns[0]).toEqual([
      { name: "Headcount", seriesIndex: 0, value: 30 },
      { name: "Attrition", seriesIndex: 1, value: 8 },
    ])
  })

  it("still names the nearest series as the headline", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    // Same column, opposite ends: the list is identical, the headline is not.
    clickPlot(stub, 140, 30) // high — near Headcount
    clickPlot(stub, 140, 210) // low — near Attrition

    expect(
      onPointClick.mock.calls.map(([p]) => [p.seriesName, p.value])
    ).toEqual([
      ["Headcount", 30],
      ["Attrition", 8],
    ])
  })

  it("picks the series the click was aimed at, not the first one", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    // Same category, but low — nearer Attrition (8) than Headcount (30).
    clickPlot(stub, 140, 208)

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ seriesName: "Attrition", value: 8 })
    )
  })

  it("skips a series with a gap at that category", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    // "Mar" is null for Attrition. Aiming low there must not quote the gap as
    // a zero — and the gap must not appear as a row either, since the tooltip
    // doesn't show one.
    clickPlot(stub, 240, 208)

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({
        seriesName: "Headcount",
        value: 50,
        series: [{ name: "Headcount", seriesIndex: 0, value: 50 }],
      })
    )
  })

  it("ignores a series the legend has switched off", () => {
    const stub = makeLineChartStub({
      ...lineOption,
      legend: [{ selected: { Headcount: false, Attrition: true } }],
    })
    const onPointClick = renderLine(stub)

    // Aimed at where Headcount would be, but it isn't on screen — so it is
    // neither the headline nor a row.
    clickPlot(stub, 140, 164)

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({
        seriesName: "Attrition",
        series: [{ name: "Attrition", seriesIndex: 1, value: 8 }],
      })
    )
  })

  it("rounds to the nearest category", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    clickPlot(stub, 189, 100) // 1.49 → Feb
    clickPlot(stub, 191, 100) // 1.51 → Mar

    expect(onPointClick.mock.calls.map(([p]) => p.category)).toEqual([
      "Feb",
      "Mar",
    ])
  })

  it("ignores clicks outside the plot area", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    clickPlot(stub, 10, 100) // left of the grid, over the axis labels
    clickPlot(stub, 200, 260) // below the grid, over the legend

    expect(onPointClick).not.toHaveBeenCalled()
  })

  it("adds a pointer cursor inside the plot without overriding native targets", () => {
    const stub = makeLineChartStub(lineOption)
    renderLine(stub)

    hoverPlot(stub, 140, 100)
    hoverPlot(stub, 10, 100)
    hoverPlot(stub, 200, 260)

    expect(stub.cursorStyles).toEqual(["pointer"])
  })

  it("keeps the default cursor when the plot has no click handler", () => {
    const stub = makeLineChartStub(lineOption)
    render(<Harness chart={stub.instance} hitArea="plot" />)

    hoverPlot(stub, 140, 100)

    expect(stub.cursorStyles).toEqual([])
  })

  it("restores the default cursor after leaving the chart", () => {
    const stub = makeLineChartStub(lineOption)
    renderLine(stub)

    hoverPlot(stub, 140, 100)
    leavePlot(stub)

    expect(stub.cursorStyles).toEqual(["pointer", "default"])
  })

  it("keeps axis labels default without overriding the legend", () => {
    const stub = makeLineChartStub(lineOption)
    renderLine(stub)

    enterAxis(stub)
    hoverPlot(stub, 10, 100)
    hoverPlot(stub, 10, 100)
    leaveAxis(stub)
    hoverPlot(stub, 200, 260)

    expect(stub.cursorStyles).toEqual(["default", "default", "default"])
  })

  it("stays quiet when no series has a value at that category", () => {
    const stub = makeLineChartStub({
      xAxis: [{ data: ["Jan"] }],
      series: [{ name: "Headcount", data: [null] }],
    })
    const onPointClick = renderLine(stub)

    clickPlot(stub, 40, 100)

    expect(onPointClick).not.toHaveBeenCalled()
  })

  it("carries the click position, from the touch when there is one", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = renderLine(stub)

    clickPlot(stub, 140, 164, { clientX: 500, clientY: 300 })
    clickPlot(stub, 140, 164, {
      changedTouches: [{ clientX: 120, clientY: 340 }],
    })

    expect(
      onPointClick.mock.calls.map(([p]) => [p.clientX, p.clientY])
    ).toEqual([
      [500, 300],
      [120, 340],
    ])
  })

  it("dismisses the hover tooltip on a pick, and only on a pick", () => {
    const stub = makeLineChartStub(lineOption)
    renderLine(stub)

    clickPlot(stub, 10, 100) // outside the plot — no pick
    expect(stub.dispatched).toEqual([])

    clickPlot(stub, 140, 164)
    expect(stub.dispatched).toEqual([{ type: "hideTip" }])
  })

  it("detaches on unmount", () => {
    const stub = makeLineChartStub(lineOption)
    const onPointClick = vi.fn()
    const { unmount } = render(
      <Harness
        chart={stub.instance}
        onPointClick={onPointClick}
        hitArea="plot"
      />
    )

    unmount()

    expect(Object.values(stub.zrHandlers).flat()).toHaveLength(0)
    expect(Object.values(stub.chartHandlers).flat()).toHaveLength(0)
    expect(stub.cursorStyles.at(-1)).toBe("default")
    clickPlot(stub, 140, 164)
    expect(onPointClick).not.toHaveBeenCalled()
  })
})
