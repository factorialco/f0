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

const Harness = ({
  chart,
  onPointClick,
}: {
  chart: echarts.ECharts
  onPointClick?: (point: F0DataChartPointClick) => void
}) => {
  const ref = useRef<echarts.ECharts | null>(chart)
  usePointClick(ref, onPointClick)
  return null
}

const fire = (stub: ReturnType<typeof makeChartStub>, params: unknown) =>
  stub.handlers["click"]?.forEach((h) => h(params))

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
      seriesName: "Male",
      category: "Barcelona office",
      value: 18,
      dataIndex: 0,
      seriesIndex: 1,
      clientX: 420,
      clientY: 260,
    })
  })

  it("takes the measure from the last entry of a tuple value (scatter)", () => {
    const stub = makeChartStub()
    const onPointClick = vi.fn()
    render(<Harness chart={stub.instance} onPointClick={onPointClick} />)

    fire(stub, {
      componentType: "series",
      seriesName: "Salary vs tenure",
      seriesIndex: 0,
      dataIndex: 4,
      name: "",
      value: [3, 52000],
    })

    expect(onPointClick).toHaveBeenCalledWith(
      expect.objectContaining({ value: 52000, category: "" })
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
