import type * as echarts from "echarts"

import { useRef, useState } from "react"
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
  projectAreaRange,
  resolveAreaSelection,
  useAreaSelection,
} from "../utils/useAreaSelection"

const POLYGON: [number, number][] = [
  [0, 0],
  [100, 0],
  [100, 100],
  [0, 100],
]

const RANGE_OFFSET = {
  offset: POLYGON,
  xyMinMax: [
    [0, 100],
    [0, 100],
  ] as [number, number][],
}

const BRUSH_AREA = {
  brushType: "polygon" as const,
  range: POLYGON,
  coordRange: POLYGON,
  panelId: "grid--0",
  __rangeOffset: RANGE_OFFSET,
}

const RETAINED_AREA = {
  brushType: "polygon" as const,
  coordRange: POLYGON,
  panelId: "grid--0",
  rangeOffset: RANGE_OFFSET,
}

const REPLAYED_AREA = {
  brushType: "polygon" as const,
  coordRange: POLYGON,
  panelId: "grid--0",
  __rangeOffset: RANGE_OFFSET,
}

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
  props:
    | F0DataChartBarProps
    | F0DataChartLineProps
    | F0DataChartHeatmapProps
    | F0DataChartScatterProps
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

  it("projects a retained polygon through the live grid and range offset", () => {
    const chart = {
      convertToPixel: vi.fn((_finder: unknown, [x, y]: [number, number]) => [
        40 + x * 3,
        20 + y * 2,
      ]),
    } as unknown as echarts.ECharts

    expect(
      projectAreaRange(chart, {
        brushType: "polygon",
        coordRange: POLYGON,
        rangeOffset: {
          offset: POLYGON.map(() => [5, 10]),
          xyMinMax: [
            [0, 100],
            [0, 100],
          ],
        },
      })
    ).toEqual([
      [25, 0],
      [325, 0],
      [325, 200],
      [25, 200],
    ])
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

  it("falls back to completed polygon geometry when ECharts omits bar indexes", () => {
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
    }
    const chart = chartDouble({ convertToPixel: () => [50, 50] })

    const selection = resolveAreaSelection(chart, props, null, POLYGON)

    expect(selection.points).toEqual([
      expect.objectContaining({
        seriesName: "Headcount",
        category: "Barcelona",
        value: 18,
      }),
    ])
    expect(chart.convertToPixel).toHaveBeenCalledWith(
      { seriesId: barMainSeriesId(0) },
      ["Barcelona", 18]
    )
  })

  it("uses horizontal bar coordinates and excludes hidden series in geometry fallback", () => {
    const props: F0DataChartBarProps = {
      type: "bar",
      orientation: "horizontal",
      categories: ["Barcelona"],
      series: [
        { name: "Visible", data: [18] },
        { name: "Hidden", data: [22] },
      ],
    }
    const chart = chartDouble({ selected: { Hidden: false } })

    const selection = resolveAreaSelection(chart, props, null, POLYGON)

    expect(selection.points.map((point) => point.seriesName)).toEqual([
      "Visible",
    ])
    expect(chart.convertToPixel).toHaveBeenCalledWith(
      { seriesId: barMainSeriesId(0) },
      [18, "Barcelona"]
    )
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

  it("falls back to scatter geometry when ECharts omits selected indexes", () => {
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
    const chart = chartDouble({ selected: { Hidden: false } })

    const selection = resolveAreaSelection(chart, props, null, POLYGON)

    expect(selection.points).toEqual([
      expect.objectContaining({ values: [8, 2], dataIndex: 0 }),
      expect.objectContaining({ category: "Roser", dataIndex: 1 }),
    ])
    expect(chart.convertToPixel).toHaveBeenCalledWith(
      { seriesIndex: 0 },
      [8, 2]
    )
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
            areas: [BRUSH_AREA],
            selected: [{ seriesId: barMainSeriesId(0), dataIndex: [0] }],
          },
        ],
      })
    )
    handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))

    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ totalPointCount: 1 }),
      RETAINED_AREA
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

    dispatchAction.mockClear()
    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        props={{
          type: "bar",
          categories: ["Barcelona"],
          series: [{ name: "Headcount", data: [18] }],
        }}
      />
    )
    expect(dispatchAction).toHaveBeenCalledWith({
      type: "takeGlobalCursor",
      key: "brush",
      brushOption: { brushType: false },
    })
    expect(dispatchAction).toHaveBeenCalledWith({ type: "brush", areas: [] })
  })

  it.each([
    {
      name: "line",
      props: {
        type: "line" as const,
        categories: ["2021", "2022"],
        series: [{ name: "Headcount", data: [3, 4] }],
      },
      totalPointCount: 2,
    },
    {
      name: "heatmap",
      props: {
        type: "heatmap" as const,
        xCategories: ["Barcelona"],
        yCategories: ["Female"],
        data: [[0, 0, 8] as [number, number, number]],
      },
      totalPointCount: 1,
    },
  ])(
    "completes a $name selection directly from brushEnd",
    ({ props: chartProps, totalPointCount }) => {
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
        convertToPixel: vi.fn(() => [50, 50]),
      } as unknown as echarts.ECharts
      const onSelect = vi.fn()
      const onSelectedAreaPositionChange = vi.fn()

      render(
        <AreaSelectionHarness
          chart={chart}
          props={{
            ...chartProps,
            areaSelection: {
              active: true,
              onSelect,
              onSelectedAreaPositionChange,
            },
          }}
        />
      )
      handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))

      expect(onSelect).toHaveBeenCalledOnce()
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({ totalPointCount }),
        RETAINED_AREA
      )
      expect(onSelectedAreaPositionChange).toHaveBeenCalledWith(POLYGON)
    }
  )

  it("ignores a completed brush without retained chart coordinates", () => {
    const handlers: Record<string, ((event: unknown) => void)[]> = {}
    const dispatchAction = vi.fn()
    const onSelect = vi.fn()
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
    dispatchAction.mockClear()

    handlers.brushEnd?.forEach((handler) =>
      handler({ areas: [{ ...BRUSH_AREA, coordRange: undefined }] })
    )

    expect(onSelect).not.toHaveBeenCalled()
    expect(dispatchAction).not.toHaveBeenCalled()
  })

  it("keeps a completed brush until the selected state is cleared", () => {
    const dispatchAction = vi.fn()
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction,
      setOption: vi.fn(),
      isDisposed: () => false,
    } as unknown as echarts.ECharts
    const onSelect = vi.fn()
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: { active: true, onSelect },
    }
    const view = render(<AreaSelectionHarness chart={chart} props={props} />)

    dispatchAction.mockClear()
    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        props={{
          ...props,
          areaSelection: {
            active: false,
            selected: true,
            selectedArea: RETAINED_AREA,
            onSelect,
          },
        }}
      />
    )

    expect(dispatchAction).toHaveBeenCalledWith({
      type: "brush",
      areas: [REPLAYED_AREA],
    })

    dispatchAction.mockClear()
    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        optionsRevision={2}
        props={{
          ...props,
          areaSelection: {
            active: false,
            selected: true,
            selectedArea: RETAINED_AREA,
            onSelect,
          },
        }}
      />
    )
    expect(dispatchAction).toHaveBeenCalledWith({
      type: "brush",
      areas: [REPLAYED_AREA],
    })

    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        props={{
          ...props,
          areaSelection: { active: false, selected: false, onSelect },
        }}
      />
    )

    expect(dispatchAction).toHaveBeenCalledWith({ type: "brush", areas: [] })
  })

  it("reports a null area position exactly once when selection is cleared", () => {
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction: vi.fn(),
      setOption: vi.fn(),
      isDisposed: () => false,
      convertToPixel: vi.fn(
        (_finder: unknown, point: [number, number]) => point
      ),
    } as unknown as echarts.ECharts
    const onSelectedAreaPositionChange = vi.fn()
    const onSelect = vi.fn()
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: {
        active: false,
        selected: true,
        selectedArea: RETAINED_AREA,
        onSelect,
        onSelectedAreaPositionChange,
      },
    }
    const view = render(<AreaSelectionHarness chart={chart} props={props} />)
    onSelectedAreaPositionChange.mockClear()

    view.rerender(
      <AreaSelectionHarness
        chart={chart}
        props={{
          ...props,
          areaSelection: {
            active: false,
            selected: false,
            onSelect,
            onSelectedAreaPositionChange,
          },
        }}
      />
    )

    expect(onSelectedAreaPositionChange).toHaveBeenCalledOnce()
    expect(onSelectedAreaPositionChange).toHaveBeenCalledWith(null)
  })

  it("reports the live replayed polygon after a chart layout update", () => {
    let layout = { left: 40, top: 20, xScale: 3, yScale: 2 }
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction: vi.fn(),
      setOption: vi.fn(),
      isDisposed: () => false,
      convertToPixel: vi.fn((_finder: unknown, [x, y]: [number, number]) => [
        layout.left + x * layout.xScale,
        layout.top + y * layout.yScale,
      ]),
    } as unknown as echarts.ECharts
    const onSelectedAreaPositionChange = vi.fn()
    const selectedArea = {
      brushType: "polygon" as const,
      coordRange: POLYGON,
      panelId: "grid--0",
    }
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: {
        active: false,
        selected: true,
        selectedArea,
        onSelect: vi.fn(),
        onSelectedAreaPositionChange,
      },
    }
    const view = render(
      <AreaSelectionHarness chart={chart} props={props} optionsRevision={1} />
    )

    expect(onSelectedAreaPositionChange).toHaveBeenLastCalledWith([
      [40, 20],
      [340, 20],
      [340, 220],
      [40, 220],
    ])

    layout = { left: 70, top: 35, xScale: 2, yScale: 1.5 }
    view.rerender(
      <AreaSelectionHarness chart={chart} props={props} optionsRevision={2} />
    )
    expect(onSelectedAreaPositionChange).toHaveBeenLastCalledWith([
      [70, 35],
      [270, 35],
      [270, 185],
      [70, 185],
    ])
  })

  it("does not re-report unchanged geometry through recreated host identities", () => {
    let layoutLeft = 40
    const chart = {
      on: vi.fn(),
      off: vi.fn(),
      dispatchAction: vi.fn(),
      setOption: vi.fn(),
      isDisposed: () => false,
      convertToPixel: vi.fn((_finder: unknown, [x, y]: [number, number]) => [
        layoutLeft + x,
        20 + y,
      ]),
    } as unknown as echarts.ECharts
    const onPosition = vi.fn()

    const StateUpdatingHarness = ({ revision }: { revision: number }) => {
      const chartRef = useRef(chart)
      const [range, setRange] = useState<[number, number][] | null>(null)
      useAreaSelection(
        chartRef,
        {
          type: "bar",
          categories: ["Barcelona"],
          series: [{ name: "Headcount", data: [18] }],
          areaSelection: {
            active: false,
            selected: true,
            selectedArea: {
              brushType: "polygon",
              coordRange: POLYGON,
              panelId: "grid--0",
            },
            onSelect: vi.fn(),
            onSelectedAreaPositionChange: (nextRange) => {
              onPosition(nextRange)
              setRange(nextRange)
            },
          },
        },
        { revision }
      )
      return <output>{range?.[0]?.join(",")}</output>
    }

    const view = render(<StateUpdatingHarness revision={1} />)
    expect(onPosition).toHaveBeenCalledOnce()

    layoutLeft = 70
    view.rerender(<StateUpdatingHarness revision={2} />)
    expect(onPosition).toHaveBeenCalledTimes(2)
    expect(onPosition).toHaveBeenLastCalledWith([
      [70, 20],
      [170, 20],
      [170, 120],
      [70, 120],
    ])
  })

  it("replays a selected brush when a chart remounts", () => {
    const firstDispatch = vi.fn()
    const secondDispatch = vi.fn()
    const makeChart = (dispatchAction: ReturnType<typeof vi.fn>) =>
      ({
        on: vi.fn(),
        off: vi.fn(),
        dispatchAction,
        setOption: vi.fn(),
        isDisposed: () => false,
      }) as unknown as echarts.ECharts
    const props: F0DataChartBarProps = {
      type: "bar",
      categories: ["Barcelona"],
      series: [{ name: "Headcount", data: [18] }],
      areaSelection: {
        active: false,
        selected: true,
        selectedArea: RETAINED_AREA,
        onSelect: vi.fn(),
      },
    }

    const first = render(
      <AreaSelectionHarness chart={makeChart(firstDispatch)} props={props} />
    )
    expect(firstDispatch).toHaveBeenCalledWith({
      type: "brush",
      areas: [REPLAYED_AREA],
    })
    first.unmount()

    render(
      <AreaSelectionHarness chart={makeChart(secondDispatch)} props={props} />
    )
    expect(secondDispatch).toHaveBeenCalledWith({
      type: "brush",
      areas: [REPLAYED_AREA],
    })
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
    handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))
    expect(dispatchAction).toHaveBeenCalledWith({
      type: "brush",
      areas: [BRUSH_AREA],
    })
    handlers.brushSelected?.forEach((handler) =>
      handler({
        batch: [
          {
            areas: [BRUSH_AREA],
            selected: [{ seriesId: barMainSeriesId(0), dataIndex: [0] }],
          },
        ],
      })
    )

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ totalPointCount: 1 }),
      RETAINED_AREA
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
                areas: [BRUSH_AREA],
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
        convertToPixel: () => [150, 150],
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
      handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))
      act(() => vi.runAllTimers())

      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({ totalPointCount: 1 }),
        RETAINED_AREA
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
        convertToPixel: () => [150, 150],
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
      handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))

      expect(onSelect).not.toHaveBeenCalled()
      act(() => vi.runAllTimers())
      expect(onSelect).toHaveBeenCalledTimes(1)
      expect(onSelect).toHaveBeenCalledWith(
        {
          source: "pointer",
          points: [],
          totalPointCount: 0,
        },
        RETAINED_AREA
      )
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

      handlers.brushEnd?.forEach((handler) => handler({ areas: [BRUSH_AREA] }))
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
