import type * as echarts from "echarts"
import { useRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { act, zeroRender as render } from "@/testing/test-utils"

import type {
  F0DataChartBarProps,
  F0DataChartHeatmapProps,
  F0DataChartLineProps,
  F0DataChartScatterProps,
} from "../types"
import {
  barMainSeriesId,
  barStackTotalSeriesId,
  barTargetSeriesId,
} from "../utils/seriesIds"
import {
  isPointInPolygon,
  resolveAreaSelection,
  useAreaSelection,
} from "../utils/useAreaSelection"

const POLYGON: [number, number][] = [
  [0, 0],
  [100, 0],
  [100, 100],
  [0, 100],
]

function chartDouble({
  convertToPixel = () => [50, 50],
  selected = {},
}: {
  convertToPixel?: () => [number, number]
  selected?: Record<string, boolean>
} = {}): echarts.ECharts {
  return {
    convertToPixel: vi.fn(convertToPixel),
    getOption: vi.fn(() => ({ legend: [{ selected }] })),
  } as unknown as echarts.ECharts
}

const AreaSelectionHarness = ({
  chart,
  props,
  optionsRevision = 1,
}: {
  chart: echarts.ECharts
  props: F0DataChartBarProps
  optionsRevision?: number
}) => {
  const chartRef = useRef(chart)
  useAreaSelection(chartRef, props, optionsRevision)
  return null
}

describe("chart area selection", () => {
  it("uses the completed polygon as the containment boundary", () => {
    expect(isPointInPolygon([50, 50], POLYGON)).toBe(true)
    expect(isPointInPolygon([150, 50], POLYGON)).toBe(false)
  })

  it("maps ECharts bar indexes back to real chart data", () => {
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona", "Madrid"],
      series: [{ name: "Headcount", data: [18, { value: 24 }] }],
    }
    const selection = resolveAreaSelection(
      chartDouble(),
      props,
      {
        batch: [
          {
            selected: [
              {
                seriesId: barMainSeriesId(0),
                seriesIndex: 0,
                dataIndex: [1],
              },
            ],
          },
        ],
      },
      POLYGON
    )

    expect(selection).toEqual({
      source: "pointer",
      totalPointCount: 1,
      points: [
        {
          seriesName: "Headcount",
          category: "Madrid",
          value: 24,
          values: [24],
          series: [{ name: "Headcount", seriesIndex: 0, value: 24 }],
          dataIndex: 1,
          seriesIndex: 0,
        },
      ],
    })
  })

  it("ignores generated bar series and keeps exact source-series indexes", () => {
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [
        { name: "Headcount", data: [{ value: 18, target: 20 }] },
        { name: "Open roles", data: [4] },
      ],
    }

    const selection = resolveAreaSelection(
      chartDouble(),
      props,
      {
        batch: [
          {
            selected: [
              { seriesId: barMainSeriesId(0), dataIndex: [0] },
              { seriesId: barTargetSeriesId(0), dataIndex: [0] },
              { seriesId: barMainSeriesId(1), dataIndex: [0] },
              { seriesId: barStackTotalSeriesId, dataIndex: [0] },
            ],
          },
        ],
      },
      POLYGON
    )

    expect(selection.points.map((point) => point.seriesName)).toEqual([
      "Headcount",
      "Open roles",
    ])
  })

  it("resolves line points through public chart coordinates", () => {
    const props: F0DataChartLineProps = {
      type: "line",
      categories: ["Jan", "Feb"],
      series: [{ name: "Revenue", data: [10, 20] }],
    }
    const chart = chartDouble({
      convertToPixel: () => [50, 50],
    })

    expect(
      resolveAreaSelection(chart, props, null, POLYGON).points
    ).toHaveLength(2)
    expect(chart.convertToPixel).toHaveBeenCalledWith({ seriesIndex: 0 }, [
      "Jan",
      10,
    ])
  })

  it("does not include a line hidden by the live legend", () => {
    const props: F0DataChartLineProps = {
      type: "line",
      categories: ["Jan"],
      series: [
        { name: "Visible", data: [10] },
        { name: "Hidden", data: [20] },
      ],
    }

    const selection = resolveAreaSelection(
      chartDouble({ selected: { Hidden: false } }),
      props,
      null,
      POLYGON
    )

    expect(selection.points.map((point) => point.seriesName)).toEqual([
      "Visible",
    ])
  })

  it("maps heatmap cells and bounds dense payloads", () => {
    const data = Array.from(
      { length: 120 },
      (_, index) => [index, 0, index] as [number, number, number]
    )
    const props: F0DataChartHeatmapProps = {
      type: "heatmap",
      xCategories: data.map((_, index) => String(index)),
      yCategories: ["Morning"],
      data,
    }

    const selection = resolveAreaSelection(chartDouble(), props, null, POLYGON)

    expect(selection.totalPointCount).toBe(120)
    expect(selection.points).toHaveLength(100)
    expect(selection.points[0]?.values).toEqual([0, 0, 0])
  })

  it("maps, orders, and filters scatter selections", () => {
    const props: F0DataChartScatterProps = {
      type: "scatter",
      series: [
        {
          name: "Visible",
          data: [[8, 2], { x: 3, y: 4, label: "Roser" }],
        },
        { name: "Hidden", data: [[1, 9]] },
      ],
    }

    const selection = resolveAreaSelection(
      chartDouble({ selected: { Hidden: false } }),
      props,
      {
        batch: [
          {
            selected: [
              { seriesIndex: 1, dataIndex: [0] },
              { seriesIndex: 0, dataIndex: [1, 0] },
            ],
          },
        ],
      },
      POLYGON
    )

    expect(selection.points).toEqual([
      expect.objectContaining({
        category: "",
        values: [8, 2],
        dataIndex: 0,
        seriesIndex: 0,
      }),
      expect.objectContaining({
        category: "Roser",
        values: [3, 4],
        dataIndex: 1,
        seriesIndex: 0,
      }),
    ])
  })

  it("controls the ECharts brush lifecycle and supports Escape", () => {
    const handlers: Record<string, ((event: unknown) => void)[]> = {}
    const dispatchAction = vi.fn()
    const setOption = vi.fn()
    const chart = {
      on: (event: string, handler: (value: unknown) => void) => {
        handlers[event] = [...(handlers[event] ?? []), handler]
      },
      off: vi.fn(),
      dispatchAction,
      setOption,
      isDisposed: () => false,
      getOption: () => ({ legend: [] }),
    } as unknown as echarts.ECharts
    const onSelect = vi.fn()
    const onCancel = vi.fn()
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: { active: true, onSelect, onCancel },
    }

    const view = render(<AreaSelectionHarness chart={chart} props={props} />)

    expect(setOption).toHaveBeenCalledWith(
      expect.objectContaining({ brush: expect.any(Object) })
    )
    expect(dispatchAction).toHaveBeenCalledWith({
      type: "takeGlobalCursor",
      key: "brush",
      brushOption: { brushType: "polygon" },
    })

    handlers.brushSelected?.forEach((handler) =>
      handler({
        batch: [
          {
            areas: [{ brushType: "polygon", range: POLYGON }],
            selected: [{ seriesId: barMainSeriesId(0), dataIndex: [0] }],
          },
        ],
      })
    )
    handlers.brushEnd?.forEach((handler) =>
      handler({ areas: [{ brushType: "polygon", range: POLYGON }] })
    )

    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ totalPointCount: 1 })
    )

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
    expect(onCancel).toHaveBeenCalledTimes(1)

    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        props={{
          ...props,
          areaSelection: { active: false, onSelect, onCancel },
        }}
      />
    )
    expect(dispatchAction).toHaveBeenCalledWith({ type: "brush", areas: [] })
  })

  it("waits for a matching selection event when brushEnd arrives first", () => {
    const handlers: Record<string, ((event: unknown) => void)[]> = {}
    const dispatchAction = vi.fn()
    const chart = {
      on: (event: string, handler: (value: unknown) => void) => {
        handlers[event] = [...(handlers[event] ?? []), handler]
      },
      off: vi.fn(),
      dispatchAction,
      setOption: vi.fn(),
      isDisposed: () => false,
      getOption: () => ({ legend: [] }),
    } as unknown as echarts.ECharts
    const onSelect = vi.fn()
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: { active: true, onSelect },
    }

    render(<AreaSelectionHarness chart={chart} props={props} />)
    handlers.brushEnd?.forEach((handler) =>
      handler({ areas: [{ brushType: "polygon", range: POLYGON }] })
    )
    expect(dispatchAction).toHaveBeenCalledWith({
      type: "brush",
      areas: [{ brushType: "polygon", range: POLYGON }],
    })
    handlers.brushSelected?.forEach((handler) =>
      handler({
        batch: [
          {
            areas: [{ brushType: "polygon", range: POLYGON }],
            selected: [{ seriesId: barMainSeriesId(0), dataIndex: [0] }],
          },
        ],
      })
    )

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ totalPointCount: 1 })
    )
  })

  it("completes once when the replayed brush selects synchronously", () => {
    vi.useFakeTimers()
    try {
      const handlers: Record<string, ((event: unknown) => void)[]> = {}
      const dispatchAction = vi.fn((action: { type?: string }) => {
        if (action.type !== "brush") return
        handlers.brushSelected?.forEach((handler) =>
          handler({
            batch: [
              {
                areas: [{ brushType: "polygon", range: POLYGON }],
                selected: [{ seriesId: barMainSeriesId(0), dataIndex: [0] }],
              },
            ],
          })
        )
      })
      const chart = {
        on: (event: string, handler: (value: unknown) => void) => {
          handlers[event] = [...(handlers[event] ?? []), handler]
        },
        off: vi.fn(),
        dispatchAction,
        setOption: vi.fn(),
        isDisposed: () => false,
        getOption: () => ({ legend: [] }),
      } as unknown as echarts.ECharts
      const onSelect = vi.fn()

      render(
        <AreaSelectionHarness
          chart={chart}
          props={{
            type: "bar",
            categories: ["Barcelona"],
            series: [{ name: "Headcount", data: [18] }],
            areaSelection: { active: true, onSelect },
          }}
        />
      )
      handlers.brushEnd?.forEach((handler) =>
        handler({ areas: [{ brushType: "polygon", range: POLYGON }] })
      )
      act(() => vi.runAllTimers())

      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({ totalPointCount: 1 })
      )
    } finally {
      vi.useRealTimers()
    }
  })

  it("reports an honest empty result when the completed brush has no selection event", () => {
    vi.useFakeTimers()
    try {
      const handlers: Record<string, ((event: unknown) => void)[]> = {}
      const chart = {
        on: (event: string, handler: (value: unknown) => void) => {
          handlers[event] = [...(handlers[event] ?? []), handler]
        },
        off: vi.fn(),
        dispatchAction: vi.fn(),
        setOption: vi.fn(),
        isDisposed: () => false,
        getOption: () => ({ legend: [] }),
      } as unknown as echarts.ECharts
      const onSelect = vi.fn()

      render(
        <AreaSelectionHarness
          chart={chart}
          props={{
            type: "bar",
            categories: ["Barcelona"],
            series: [{ name: "Headcount", data: [18] }],
            areaSelection: { active: true, onSelect },
          }}
        />
      )
      handlers.brushEnd?.forEach((handler) =>
        handler({ areas: [{ brushType: "polygon", range: POLYGON }] })
      )

      expect(onSelect).not.toHaveBeenCalled()
      act(() => vi.runAllTimers())
      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith({
        source: "pointer",
        points: [],
        totalPointCount: 0,
      })
    } finally {
      vi.useRealTimers()
    }
  })

  it("does not deliver a pending selection after the mode is deactivated", () => {
    vi.useFakeTimers()
    try {
      const handlers: Record<string, ((event: unknown) => void)[]> = {}
      const chart = {
        on: (event: string, handler: (value: unknown) => void) => {
          handlers[event] = [...(handlers[event] ?? []), handler]
        },
        off: vi.fn(),
        dispatchAction: vi.fn(),
        setOption: vi.fn(),
        isDisposed: () => false,
        getOption: () => ({ legend: [] }),
      } as unknown as echarts.ECharts
      const onSelect = vi.fn()
      const activeProps: F0DataChartBarProps = {
        type: "bar",
        categories: ["Barcelona"],
        series: [{ name: "Headcount", data: [18] }],
        areaSelection: { active: true, onSelect },
      }
      const view = render(
        <AreaSelectionHarness chart={chart} props={activeProps} />
      )

      handlers.brushEnd?.forEach((handler) =>
        handler({ areas: [{ brushType: "polygon", range: POLYGON }] })
      )
      view.rerender(
        <AreaSelectionHarness
          chart={chart}
          props={{
            ...activeProps,
            areaSelection: { active: false, onSelect },
          }}
        />
      )
      act(() => vi.runAllTimers())

      expect(onSelect).not.toHaveBeenCalled()
    } finally {
      vi.useRealTimers()
    }
  })

  it("reapplies active brush state after base chart options change", () => {
    const setOption = vi.fn()
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction: vi.fn(),
      setOption,
      isDisposed: () => false,
    } as unknown as echarts.ECharts
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: { active: true, onSelect: vi.fn() },
    }

    const view = render(
      <AreaSelectionHarness chart={chart} props={props} optionsRevision={1} />
    )
    view.rerender(
      <AreaSelectionHarness chart={chart} props={props} optionsRevision={2} />
    )

    expect(setOption).toHaveBeenCalledTimes(2)
  })

  it("does not detach listeners from a disposed chart", () => {
    let disposed = false
    const off = vi.fn(() => {
      if (disposed) throw new Error("disposed")
    })
    const chart = {
      on: vi.fn(),
      off,
      dispatchAction: vi.fn(),
      setOption: vi.fn(),
      isDisposed: () => disposed,
    } as unknown as echarts.ECharts
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: { active: true, onSelect: vi.fn() },
    }

    const view = render(<AreaSelectionHarness chart={chart} props={props} />)
    disposed = true

    expect(() => view.unmount()).not.toThrow()
    expect(off).not.toHaveBeenCalled()
  })

  it("does not touch ECharts brush state until a consumer opts in", () => {
    const dispatchAction = vi.fn()
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction,
    } as unknown as echarts.ECharts

    render(
      <AreaSelectionHarness
        chart={chart}
        props={{
          type: "bar",
          categories: ["Barcelona"],
          series: [{ name: "Headcount", data: [18] }],
        }}
      />
    )

    expect(dispatchAction).not.toHaveBeenCalled()
  })
})
