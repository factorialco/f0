import { useEffect, useRef } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import type {
  F0DataChartAreaSelection,
  F0DataChartAreaSelectionConfig,
  F0DataChartPointClick,
  F0DataChartProps,
} from "@/kits/F0DataChart"

import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import type { PendingQuote } from "@/kits/ai/F0AiChat/types"
import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import type { DashboardChartItem } from "../types"
import type { F0AnalyticsDashboardPointClick } from "../types"

import {
  buildAreaQuoteText,
  buildAccessibleAreaSelectionActions,
  buildPointQuoteText,
  buildAccessibleChartPoints,
  buildChartProps,
  ChartItem,
  hasAccessibleChartPoint,
  resolveAreaSelectionClearPosition,
} from "../components/ChartItem/ChartItem"

const AREA_SELECTION: F0DataChartAreaSelection = {
  source: "pointer",
  totalPointCount: 2,
  points: [
    {
      seriesName: "Male",
      category: "Barcelona office",
      value: 18,
      values: [18],
      series: [{ name: "Male", seriesIndex: 0, value: 18 }],
      dataIndex: 0,
      seriesIndex: 0,
    },
    {
      seriesName: "Female",
      category: "Barcelona office",
      value: 22,
      values: [22],
      series: [{ name: "Female", seriesIndex: 1, value: 22 }],
      dataIndex: 0,
      seriesIndex: 1,
    },
  ],
}
const AREA = {
  brushType: "polygon" as const,
  coordRange: [
    [0, 0],
    [100, 0],
    [100, 100],
  ] as [number, number][],
}

/** The mark a click lands on, as `usePointClick` would report it. */
const POINT: F0DataChartPointClick = {
  source: "pointer",
  seriesName: "Male",
  category: "Barcelona office",
  value: 18,
  values: [18],
  series: [{ name: "Male", seriesIndex: 0, value: 18 }],
  dataIndex: 0,
  seriesIndex: 0,
  clientX: 400,
  clientY: 300,
}

// Standing in for the chart itself: jsdom can't render a canvas, and what
// matters here is only what ChartItem does with a reported mark.
vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: ({
      onPointClick,
      areaSelection,
    }: {
      onPointClick?: (point: F0DataChartPointClick) => void
      areaSelection?: F0DataChartAreaSelectionConfig
    }) => (
      <>
        <button type="button" onClick={() => onPointClick?.(POINT)}>
          mark
        </button>
        {areaSelection && (
          <div
            data-testid="area-selection"
            data-active={areaSelection.active}
            data-selected={areaSelection.selected}
          >
            <button
              type="button"
              onClick={() => areaSelection.onSelect(AREA_SELECTION, AREA)}
            >
              draw area
            </button>
            <button
              type="button"
              onClick={() =>
                areaSelection.onSelect(
                  {
                    source: "pointer",
                    points: [],
                    totalPointCount: 0,
                  },
                  AREA
                )
              }
            >
              draw empty area
            </button>
            <button type="button" onClick={areaSelection.onCancel}>
              cancel drawing
            </button>
          </div>
        )}
      </>
    ),
  }
})

const item: DashboardChartItem = {
  id: "headcount",
  title: "Headcount by workplace",
  type: "chart",
  chart: { type: "bar" },
  fetchData: () =>
    Promise.resolve({
      categories: ["Barcelona office"],
      series: [{ name: "Male", data: [18] }],
    }),
}

const filters = {}

const rebuildItem = (): DashboardChartItem => ({
  ...item,
  chart: { type: "bar" },
})

const pickAMark = async () => {
  await waitFor(() =>
    expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
  )
  await userEvent.click(screen.getByRole("button", { name: "mark" }))
  await userEvent.click(screen.getByRole("button", { name: "Ask One" }))
}

const ChatProbe = ({
  onCapture,
}: {
  onCapture?: (quote: PendingQuote | null) => void
} = {}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { pendingQuote, open, setFocusChatInputFunction } = useAiChat()

  useEffect(() => {
    setFocusChatInputFunction(() => inputRef.current?.focus())
    return () => setFocusChatInputFunction(null)
  }, [setFocusChatInputFunction])

  return (
    <>
      <span
        data-testid="probe"
        data-quote={pendingQuote?.text ?? ""}
        data-open={String(open)}
      />
      {onCapture && (
        <button type="button" onClick={() => onCapture(pendingQuote)}>
          Capture pending quote
        </button>
      )}
      <textarea ref={inputRef} aria-label="Chat question" />
      {onCapture && (
        <button type="button" onClick={() => onCapture(pendingQuote)}>
          Capture pending quote
        </button>
      )}
    </>
  )
}

describe("ChartItem — asking about a mark", () => {
  beforeEach(() => localStorage.clear())

  it.each([
    { type: "bar" },
    { type: "line" },
    { type: "funnel" },
    { type: "pie" },
    { type: "radar" },
    { type: "gauge" },
    { type: "heatmap" },
    { type: "scatter" },
  ] satisfies DashboardChartConfig[])(
    "observes built-in point asks for $type charts",
    async (chart) => {
      const onAskAiTarget = vi.fn()
      render(
        <AiChatStateProvider enabled>
          <ChatProbe />
          <ChartItem
            item={{ ...item, chart }}
            filters={{}}
            onAskAiTarget={onAskAiTarget}
          />
        </AiChatStateProvider>
      )

      await pickAMark()

      expect(onAskAiTarget).toHaveBeenCalledWith({
        id: "headcount",
        title: "Headcount by workplace",
        point: POINT,
        quote: { text: expect.any(String) },
      })
    }
  )

  it("hands the host the mark, not a sentence built from it", async () => {
    const onAskAi = vi.fn(() =>
      screen.getByRole("button", { name: "Host chat" }).focus()
    )
    const onAskAiTarget = vi.fn()
    const onFullscreenChange = vi.fn()
    render(
      <AiChatStateProvider enabled>
        <button type="button" aria-label="Host chat" />
        <ChatProbe />
        <ChartItem
          item={item}
          filters={{}}
          onAskAi={onAskAi}
          onAskAiTarget={onAskAiTarget}
          isFullscreen
          onFullscreenChange={onFullscreenChange}
        />
      </AiChatStateProvider>
    )

    await pickAMark()

    // The raw point, so the host phrases it — it owns the copy and has the
    // formatters. `point` is what separates this from the ⋯ menu's ask.
    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      point: POINT,
    })
    expect(onAskAiTarget).not.toHaveBeenCalled()
    expect(screen.getByTestId("probe")).toHaveAttribute("data-quote", "")
    expect(screen.getByTestId("probe")).toHaveAttribute("data-open", "false")
    expect(
      screen.getByRole("textbox", { name: "Chat question" })
    ).not.toHaveFocus()
    expect(onFullscreenChange).not.toHaveBeenCalled()
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Host chat" })).toHaveFocus()
    )
  })

  it("offers the click with no chat mounted, once the host answers it", async () => {
    const onAskAi = vi.fn()
    render(<ChartItem item={item} filters={{}} onAskAi={onAskAi} />)

    // No AiChatStateProvider anywhere: without a handler the chart would be
    // inert, since nothing could answer the click.
    await pickAMark()

    expect(onAskAi).toHaveBeenCalledTimes(1)
  })

  it("clears a picked mark when its responder becomes unavailable", async () => {
    const onAskAi = vi.fn()
    const view = render(
      <ChartItem item={item} filters={{}} onAskAi={onAskAi} />
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    view.rerender(<ChartItem item={item} filters={{}} />)

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Ask One" })
      ).not.toBeInTheDocument()
    )
    expect(onAskAi).not.toHaveBeenCalled()
  })

  it("keeps a picked mark through an unrelated inline-config rerender", async () => {
    let revision = 0
    const onAskAi = vi.fn()
    const renderInlineItem = () => (
      <ChartItem
        item={rebuildItem()}
        filters={filters}
        onAskAi={(target) => onAskAi(revision, target)}
      />
    )
    const view = render(renderInlineItem())

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    revision = 1
    view.rerender(renderInlineItem())

    const pointAction = screen.getByRole("button", { name: "Ask One" })
    expect(pointAction).toBeInTheDocument()
    await userEvent.click(pointAction)
    expect(onAskAi).toHaveBeenCalledWith(
      1,
      expect.objectContaining({ point: POINT })
    )
  })

  it("keeps the keyboard point menu through an unrelated inline-config rerender", async () => {
    let revision = 0
    const onAskAi = vi.fn()
    const renderInlineItem = () => (
      <ChartItem
        item={rebuildItem()}
        filters={filters}
        onAskAi={(target) => onAskAi(revision, target)}
      />
    )
    const view = render(renderInlineItem())

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    const pointAction = await screen.findByRole("menuitem", {
      name: "Headcount by workplace — Barcelona office, Male: 18",
    })

    revision = 1
    view.rerender(renderInlineItem())

    expect(screen.getByRole("menu")).toBeInTheDocument()
    await userEvent.click(pointAction)
    expect(onAskAi).toHaveBeenCalledWith(
      1,
      expect.objectContaining({
        point: expect.objectContaining({ source: "keyboard" }),
      })
    )
  })

  it("does not expose point actions for a chart without a title", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={{ ...item, title: "   " }} filters={filters} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))

    expect(
      screen.queryByRole("button", { name: /Ask One/ })
    ).not.toBeInTheDocument()
  })

  it("preserves host-owned focus after keyboard point selection", async () => {
    let hostButton: HTMLButtonElement | null = null
    const onAskAi = vi.fn(() => hostButton?.focus())
    render(
      <>
        <button
          ref={(element) => {
            hostButton = element
          }}
          type="button"
          aria-label="Host chat"
        />
        <ChartItem item={item} filters={{}} onAskAi={onAskAi} />
      </>
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    await userEvent.click(
      await screen.findByRole("menuitem", {
        name: "Headcount by workplace — Barcelona office, Male: 18",
      })
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Host chat" })).toHaveFocus()
    )
    expect(onAskAi).toHaveBeenCalledWith(
      expect.objectContaining({
        point: expect.objectContaining({ source: "keyboard" }),
      })
    )
  })

  it("puts the visible mark in the built-in chat", async () => {
    const onAskAiTarget = vi.fn()
    const capturePendingQuote = vi.fn()
    const onFullscreenChange = vi.fn()

    render(
      <AiChatStateProvider enabled>
        <ChatProbe onCapture={capturePendingQuote} />
        <ChartItem
          item={item}
          filters={{}}
          isFullscreen
          onAskAiTarget={onAskAiTarget}
          onFullscreenChange={onFullscreenChange}
        />
      </AiChatStateProvider>
    )

    await pickAMark()

    expect(screen.getByTestId("probe")).toHaveAttribute(
      "data-quote",
      "Headcount by workplace — Barcelona office\nMale: 18"
    )
    expect(screen.getByTestId("probe")).toHaveAttribute("data-open", "true")
    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      point: POINT,
      quote: {
        text: "Headcount by workplace — Barcelona office\nMale: 18",
      },
    })
    expect(screen.getByRole("textbox", { name: "Chat question" })).toHaveFocus()
    await userEvent.click(
      screen.getByRole("button", { name: "Capture pending quote" })
    )
    expect(capturePendingQuote.mock.calls[0][0]).toBe(
      onAskAiTarget.mock.calls[0][0].quote
    )
    expect(onFullscreenChange).toHaveBeenCalledWith(false)
  })

  it("offers every mark through a keyboard-reachable menu", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChatProbe />
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")

    const point = await screen.findByRole("menuitem", {
      name: "Headcount by workplace — Barcelona office, Male: 18",
    })
    await userEvent.click(point)

    expect(screen.getByTestId("probe")).toHaveAttribute(
      "data-quote",
      "Headcount by workplace — Barcelona office\nMale: 18"
    )
    expect(screen.getByRole("textbox", { name: "Chat question" })).toHaveFocus()
  })

  it("returns focus to the point trigger when its keyboard menu closes", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    await screen.findByRole("menuitem", {
      name: "Headcount by workplace — Barcelona office, Male: 18",
    })

    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(trigger).toHaveFocus())
  })

  it("closes the keyboard point menu when refreshed data replaces its actions", async () => {
    let resolveRefresh:
      | ((value: {
          categories: string[]
          series: { name: string; data: number[] }[]
        }) => void)
      | undefined
    const fetchData = vi
      .fn()
      .mockResolvedValueOnce({
        categories: ["Barcelona office"],
        series: [{ name: "Male", data: [18] }],
      })
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveRefresh = resolve
          })
      )
    const refreshItem = { ...item, fetchData }
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem item={refreshItem} filters={{}} />
      </AiChatStateProvider>
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    expect(
      await screen.findByRole("menuitem", {
        name: "Headcount by workplace — Barcelona office, Male: 18",
      })
    ).toBeInTheDocument()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem item={refreshItem} filters={{ department: ["Design"] }} />
      </AiChatStateProvider>
    )
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))

    resolveRefresh?.({
      categories: ["Madrid office"],
      series: [{ name: "Female", data: [22] }],
    })

    await waitFor(() =>
      expect(screen.queryByRole("menu")).not.toBeInTheDocument()
    )
  })

  it("pages large point sets instead of mounting every menu item", async () => {
    const categories = Array.from(
      { length: 101 },
      (_, index) => `Team ${index}`
    )
    const largeItem: DashboardChartItem = {
      ...item,
      fetchData: () =>
        Promise.resolve({
          categories,
          series: [
            {
              name: "Headcount",
              data: categories.map((_, index) => index),
            },
          ],
        }),
    }
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={largeItem} filters={{}} />
      </AiChatStateProvider>
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by workplace",
    })
    trigger.focus()
    await userEvent.keyboard("{Enter}")

    expect(await screen.findAllByRole("menuitem")).toHaveLength(101)
    await userEvent.click(screen.getByRole("menuitem", { name: "Next" }))

    const lastPoint = await screen.findByRole("menuitem", {
      name: "Headcount by workplace — Team 100, Headcount: 100",
    })
    await waitFor(() => expect(lastPoint).toHaveFocus())
    expect(screen.getAllByRole("menuitem")).toHaveLength(2)
    expect(
      screen.getByRole("menuitem", { name: "Previous" })
    ).toBeInTheDocument()
  })

  it("returns focus to the keyboard point trigger after Escape", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    const pointAction = await screen.findByRole("button", { name: "Ask One" })
    await waitFor(() => expect(pointAction).toHaveFocus())

    await userEvent.keyboard("{Escape}")

    await waitFor(() =>
      expect(
        screen.getByRole("button", {
          name: "Ask One: Headcount by workplace",
        })
      ).toHaveFocus()
    )
  })

  it("dismisses a picked point when dashboard area selection starts", async () => {
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    await userEvent.click(await screen.findByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} areaSelectionMode="drawing" />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Ask One" })
      ).not.toBeInTheDocument()
    )
  })

  it("dismisses a picked point when another widget owns area selection", async () => {
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    await userEvent.click(await screen.findByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} areaSelectionMode="unavailable" />
      </AiChatStateProvider>
    )

    expect(
      screen.queryByRole("button", { name: "Ask One" })
    ).not.toBeInTheDocument()
  })

  it("returns focus to the keyboard point trigger after viewport movement", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    const pointAction = await screen.findByRole("button", { name: "Ask One" })
    await waitFor(() => expect(pointAction).toHaveFocus())

    window.dispatchEvent(new Event("resize"))

    await waitFor(() =>
      expect(
        screen.getByRole("button", {
          name: "Ask One: Headcount by workplace",
        })
      ).toHaveFocus()
    )
  })

  it("clears a picked mark when a filter refetch starts", async () => {
    let resolveRefresh:
      | ((value: {
          categories: string[]
          series: { name: string; data: number[] }[]
        }) => void)
      | undefined
    const fetchData = vi
      .fn()
      .mockResolvedValueOnce({
        categories: ["Barcelona office"],
        series: [{ name: "Male", data: [18] }],
      })
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveRefresh = resolve
          })
      )
    const refreshItem = { ...item, fetchData }
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem item={refreshItem} filters={{}} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem item={refreshItem} filters={{ department: ["Design"] }} />
      </AiChatStateProvider>
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Ask One" })
      ).not.toBeInTheDocument()
    )

    resolveRefresh?.({
      categories: ["Madrid office"],
      series: [{ name: "Female", data: [22] }],
    })
  })

  it("clears a picked mark when the chart transformation changes", async () => {
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={{}} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "mark" }))
    expect(
      await screen.findByRole("button", { name: "Ask One" })
    ).toBeInTheDocument()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem item={{ ...item, chart: { type: "line" } }} filters={{}} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Ask One" })
      ).not.toBeInTheDocument()
    )
  })
})

describe("ChartItem — asking about a drawn area", () => {
  it("reports exact area-selection availability and cleanup", async () => {
    const onAreaSelectionAvailabilityChange = vi.fn()
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem
          item={item}
          filters={filters}
          onAreaSelectionAvailabilityChange={onAreaSelectionAvailabilityChange}
        />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(onAreaSelectionAvailabilityChange).toHaveBeenCalledWith(
        item.id,
        true
      )
    )

    onAreaSelectionAvailabilityChange.mockClear()
    view.unmount()
    expect(onAreaSelectionAvailabilityChange).toHaveBeenCalledOnce()
    expect(onAreaSelectionAvailabilityChange).toHaveBeenCalledWith(
      item.id,
      false
    )
  })

  it("anchors the clear action beside the polygon edge", () => {
    expect(
      resolveAreaSelectionClearPosition(
        [
          [27, 76],
          [50, 50],
          [100, 40],
          [156, 76],
          [156, 118],
          [140, 156],
          [47, 156],
        ],
        200,
        190
      )
    ).toEqual({ left: 160, top: 85 })
  })

  it("flips the clear action around selections near a chart boundary", () => {
    expect(
      resolveAreaSelectionClearPosition(
        [
          [300, 12],
          [380, 12],
          [380, 60],
          [300, 60],
        ],
        400,
        240
      )
    ).toEqual({ left: 272, top: 24 })
  })

  it("uses an edge position when a selection spans most of one axis", () => {
    expect(
      resolveAreaSelectionClearPosition(
        [
          [20, 48],
          [380, 48],
          [380, 192],
          [20, 192],
        ],
        400,
        240
      )
    ).toEqual({ left: 188, top: 20 })
  })

  it("falls back to the chart anchor when no outside position fits", () => {
    expect(
      resolveAreaSelectionClearPosition(
        [
          [0, 0],
          [400, 0],
          [400, 240],
          [0, 240],
        ],
        400,
        240
      )
    ).toBeNull()
  })

  it("hands the host the bounded data selection", async () => {
    const onAskAi = vi.fn()
    const onAreaSelectionComplete = vi.fn()
    render(
      <ChartItem
        item={item}
        filters={{}}
        onAskAi={onAskAi}
        areaSelectionMode="drawing"
        onAreaSelectionComplete={onAreaSelectionComplete}
      />
    )

    expect(await screen.findByTestId("area-selection")).toHaveAttribute(
      "data-active",
      "true"
    )
    await userEvent.click(
      await screen.findByRole("button", { name: "draw area" })
    )

    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      selection: AREA_SELECTION,
    })
    expect(onAreaSelectionComplete).toHaveBeenCalledWith(
      "headcount",
      null,
      AREA
    )
  })

  it("offers a keyboard and single-pointer multi-select with the same host contract", async () => {
    const onAskAi = vi.fn()
    render(
      <ChartItem
        item={item}
        filters={{}}
        onAskAi={onAskAi}
        areaSelectionMode="drawing"
      />
    )

    const trigger = await screen.findByRole("button", {
      name: "Select chart values without drawing: Headcount by workplace",
    })
    expect(trigger.querySelector(".sr-only")).toHaveTextContent(
      "Select chart values without drawing: Headcount by workplace"
    )
    await userEvent.click(trigger)
    await userEvent.click(
      await screen.findByRole("menuitemcheckbox", {
        name: "Headcount by workplace — Barcelona office, Male: 18",
      })
    )
    await userEvent.click(
      screen.getByRole("menuitem", {
        name: "Ask One about selected values (1)",
      })
    )

    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      selection: {
        source: "control",
        totalPointCount: 1,
        points: [AREA_SELECTION.points[0]],
      },
    })
  })

  it("expands line categories into the same per-series area points as drawing", () => {
    expect(
      buildAccessibleAreaSelectionActions("Revenue", {
        type: "line",
        categories: ["Jan"],
        series: [
          { name: "Actual", data: [10] },
          { name: "Target", data: [12] },
        ],
      }).map(({ point }) => point)
    ).toEqual([
      expect.objectContaining({
        seriesName: "Actual",
        seriesIndex: 0,
        value: 10,
      }),
      expect.objectContaining({
        seriesName: "Target",
        seriesIndex: 1,
        value: 12,
      }),
    ])
  })

  it("hydrates a remounted retained selection before tracking later changes", async () => {
    const onAreaSelectionCancel = vi.fn()
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem
          item={item}
          filters={{}}
          areaSelectionMode="selected"
          selectedArea={AREA}
          onAreaSelectionCancel={onAreaSelectionCancel}
        />
      </AiChatStateProvider>
    )

    await screen.findByRole("button", { name: "mark" })
    expect(onAreaSelectionCancel).not.toHaveBeenCalled()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem
          item={{ ...item, chart: { type: "line" } }}
          filters={{}}
          areaSelectionMode="selected"
          selectedArea={AREA}
          onAreaSelectionCancel={onAreaSelectionCancel}
        />
      </AiChatStateProvider>
    )

    await waitFor(() => expect(onAreaSelectionCancel).toHaveBeenCalledOnce())
  })

  it("cancels a retained selection when bar orientation changes", async () => {
    const onAreaSelectionCancel = vi.fn()
    const view = render(
      <AiChatStateProvider enabled>
        <ChartItem
          item={item}
          filters={{}}
          areaSelectionMode="selected"
          selectedArea={AREA}
          onAreaSelectionCancel={onAreaSelectionCancel}
        />
      </AiChatStateProvider>
    )

    await screen.findByRole("button", { name: "mark" })
    expect(onAreaSelectionCancel).not.toHaveBeenCalled()

    view.rerender(
      <AiChatStateProvider enabled>
        <ChartItem
          item={{
            ...item,
            chart: { type: "bar", orientation: "horizontal" },
          }}
          filters={{}}
          areaSelectionMode="selected"
          selectedArea={AREA}
          onAreaSelectionCancel={onAreaSelectionCancel}
        />
      </AiChatStateProvider>
    )

    await waitFor(() => expect(onAreaSelectionCancel).toHaveBeenCalledOnce())
  })

  it("quotes selected values in the built-in composer without sending", async () => {
    const onAskAiTarget = vi.fn()
    const capturePendingQuote = vi.fn()
    const onAreaSelectionComplete = vi.fn()
    const onFullscreenChange = vi.fn()
    render(
      <AiChatStateProvider enabled>
        <ChatProbe onCapture={capturePendingQuote} />
        <ChartItem
          item={item}
          filters={{}}
          isFullscreen
          onAskAiTarget={onAskAiTarget}
          onFullscreenChange={onFullscreenChange}
          areaSelectionMode="drawing"
          onAreaSelectionComplete={onAreaSelectionComplete}
        />
      </AiChatStateProvider>
    )

    await userEvent.click(
      await screen.findByRole("button", { name: "draw area" })
    )

    expect(screen.getByTestId("probe")).toHaveAttribute(
      "data-quote",
      "Headcount by workplace — Selected chart area\nBarcelona office — Male: 18\nBarcelona office — Female: 22"
    )
    expect(screen.getByTestId("probe")).toHaveAttribute("data-open", "true")
    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount by workplace",
      selection: AREA_SELECTION,
      quote: {
        text: "Headcount by workplace — Selected chart area\nBarcelona office — Male: 18\nBarcelona office — Female: 22",
      },
    })
    const observedQuote = onAskAiTarget.mock.calls[0][0].quote
    expect(onAreaSelectionComplete).toHaveBeenCalledWith(
      "headcount",
      observedQuote,
      AREA
    )
    expect(screen.getByRole("textbox", { name: "Chat question" })).toHaveFocus()
    await userEvent.click(
      screen.getByRole("button", { name: "Capture pending quote" })
    )
    expect(capturePendingQuote.mock.calls[0][0]).toBe(observedQuote)
    expect(onFullscreenChange).toHaveBeenCalledWith(false)
  })

  it("keeps selection mode active when the drawing contains no points", async () => {
    const onAreaSelectionEmpty = vi.fn()
    render(
      <AiChatStateProvider enabled>
        <ChartItem
          item={item}
          filters={{}}
          areaSelectionMode="drawing"
          onAreaSelectionEmpty={onAreaSelectionEmpty}
        />
      </AiChatStateProvider>
    )

    await userEvent.click(
      await screen.findByRole("button", { name: "draw empty area" })
    )

    expect(onAreaSelectionEmpty).toHaveBeenCalledOnce()
    expect(screen.getByTestId("area-selection")).toHaveAttribute(
      "data-active",
      "true"
    )
  })

  it("forwards drawing cancellation to the dashboard", async () => {
    const onAreaSelectionCancel = vi.fn()
    render(
      <AiChatStateProvider enabled>
        <ChartItem
          item={item}
          filters={{}}
          areaSelectionMode="drawing"
          onAreaSelectionCancel={onAreaSelectionCancel}
        />
      </AiChatStateProvider>
    )

    await userEvent.click(
      await screen.findByRole("button", { name: "cancel drawing" })
    )

    expect(onAreaSelectionCancel).toHaveBeenCalledOnce()
  })

  it("bounds the composer quote independently from the selection payload", () => {
    const selection: F0DataChartAreaSelection = {
      ...AREA_SELECTION,
      points: Array.from({ length: 20 }, (_, index) => ({
        ...AREA_SELECTION.points[0],
        category: `Office ${index + 1}`,
        dataIndex: index,
      })),
      totalPointCount: 27,
    }

    expect(
      buildAreaQuoteText(
        item.title,
        {
          type: "bar",
          categories: [],
          series: [],
        },
        selection,
        {
          heading: "Selected chart area",
          more: "{{count}} more selected values",
        }
      )
    ).toContain("7 more selected values")
  })
})

describe("buildPointQuoteText", () => {
  it("keeps and independently formats both scatter measures", () => {
    expect(
      buildPointQuoteText(
        item.title,
        {
          type: "scatter",
          series: [],
          xAxisName: "salary",
          yAxisName: "tenure",
          xTooltipValueFormatter: (value) => `€${value.toLocaleString("en")}`,
          tooltipValueFormatter: (value) => `${value} yrs`,
        },
        {
          ...POINT,
          seriesName: "Engineering",
          category: "Roser Nogué",
          value: 0.6,
          values: [128000, 0.6],
          series: [{ name: "Engineering", seriesIndex: 0, value: 0.6 }],
        }
      )
    ).toBe(
      "Headcount by workplace — Roser Nogué\nEngineering\nsalary: €128,000\ntenure: 0.6 yrs"
    )
  })

  it("keeps every visible line series at the picked category", () => {
    expect(
      buildPointQuoteText(
        item.title,
        {
          type: "line",
          categories: ["Feb"],
          series: [],
          categoryFormatter: (category) => category.toUpperCase(),
          tooltipValueFormatter: (value) => `${value}%`,
        },
        {
          ...POINT,
          category: "Feb",
          value: 30,
          values: [30],
          series: [
            { name: "Headcount", seriesIndex: 0, value: 30 },
            { name: "Attrition", seriesIndex: 1, value: 8 },
          ],
        }
      )
    ).toBe("Headcount by workplace — FEB\nHeadcount: 30%\nAttrition: 8%")
  })

  it("names every radar indicator carried by the point", () => {
    expect(
      buildPointQuoteText(
        item.title,
        {
          type: "radar",
          indicators: [{ name: "Performance" }, { name: "Engagement" }],
          series: [],
          tooltipValueFormatter: (value) => `${value}/10`,
        },
        {
          ...POINT,
          seriesName: "Team A",
          category: "Team A",
          value: 7,
          values: [8, 7],
        }
      )
    ).toBe(
      "Headcount by workplace — Team A\nPerformance: 8/10\nEngagement: 7/10"
    )
  })

  it("resolves heatmap tuple indexes to the visible row and column", () => {
    expect(
      buildPointQuoteText(
        item.title,
        {
          type: "heatmap",
          xCategories: ["09:00", "10:00"],
          yCategories: ["Monday", "Tuesday"],
          data: [],
          tooltipValueFormatter: (value) => `${value} people`,
        },
        {
          ...POINT,
          seriesName: "",
          category: "",
          value: 37,
          values: [1, 0, 37],
        }
      )
    ).toBe("Headcount by workplace — Monday — 10:00\n37 people")
  })

  it("uses the same localized-number fallback as the tooltip", () => {
    expect(
      buildPointQuoteText(
        item.title,
        { type: "gauge", value: 128000 },
        { ...POINT, seriesName: "", category: "", value: 128000 }
      )
    ).toBe(`Headcount by workplace\n${(128000).toLocaleString()}`)
  })

  it("quotes every indicator synthesized by a chart transformation", () => {
    const transformed = buildChartProps(
      { ...item, chart: { type: "radar" } },
      {
        categories: ["Performance", "Engagement"],
        series: [{ name: "Team A", data: [8, 7] }],
      }
    )
    expect(transformed.type).toBe("radar")
    if (transformed.type !== "radar") throw new Error("Expected radar props")

    const [point] = buildAccessibleChartPoints(transformed)
    expect(
      point &&
        buildPointQuoteText(item.title, transformed, point.point)
          .split("\n")
          .join(", ")
    ).toBe("Headcount by workplace — Team A, Performance: 8, Engagement: 7")
  })
})

describe("buildAccessibleChartPoints", () => {
  const keyboardPosition = {
    source: "keyboard" as const,
    clientX: 0,
    clientY: 0,
  }

  const cases: Array<{
    name: string
    chart: F0DataChartProps
    expected: F0AnalyticsDashboardPointClick[]
  }> = [
    {
      name: "finite bar marks",
      chart: {
        type: "bar",
        categories: ["Engineering"],
        series: [{ name: "Headcount", data: [145] }],
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "Headcount",
          category: "Engineering",
          value: 145,
          values: [145],
          series: [{ name: "Headcount", seriesIndex: 0, value: 145 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "line categories with their complete finite series column",
      chart: {
        type: "line",
        categories: ["Jan", "Feb"],
        series: [
          { name: "Headcount", data: [30, { value: 31 }] },
          { name: "Attrition", data: [8, Number.NaN] },
        ],
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "Headcount",
          category: "Jan",
          value: 30,
          values: [30],
          series: [
            { name: "Headcount", seriesIndex: 0, value: 30 },
            { name: "Attrition", seriesIndex: 1, value: 8 },
          ],
          dataIndex: 0,
          seriesIndex: 0,
        },
        {
          ...keyboardPosition,
          seriesName: "Headcount",
          category: "Feb",
          value: 31,
          values: [31],
          series: [{ name: "Headcount", seriesIndex: 0, value: 31 }],
          dataIndex: 1,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "finite funnel stages",
      chart: {
        type: "funnel",
        series: {
          name: "Candidates",
          data: [
            { name: "Applied", value: 100 },
            { name: "Hired", value: Number.NaN },
          ],
        },
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "Candidates",
          category: "Applied",
          value: 100,
          values: [100],
          series: [{ name: "Candidates", seriesIndex: 0, value: 100 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "finite visible pie segments",
      chart: {
        type: "pie",
        series: {
          name: "Headcount",
          data: [
            { name: "Engineering", value: 60 },
            { name: "Sales", value: Number.POSITIVE_INFINITY },
          ],
        },
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "Headcount",
          category: "Engineering",
          value: 60,
          values: [60],
          series: [{ name: "Headcount", seriesIndex: 0, value: 60 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "the gauge datum using ECharts item semantics",
      chart: { type: "gauge", name: "Goal", value: 72 },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "",
          category: "Goal",
          value: 72,
          values: [72],
          series: [{ name: "", seriesIndex: 0, value: 72 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "complete finite radar series",
      chart: {
        type: "radar",
        indicators: [{ name: "Performance" }, { name: "Engagement" }],
        series: [{ name: "Team A", data: [8, 7] }],
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "",
          category: "Team A",
          value: 7,
          values: [8, 7],
          series: [{ name: "", seriesIndex: 0, value: 7 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "finite heatmap tuples with their axis indexes",
      chart: {
        type: "heatmap",
        xCategories: ["09:00", "10:00"],
        yCategories: ["Monday"],
        data: [
          [1, 0, 37],
          [Number.NaN, 0, 9],
        ],
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "",
          category: "",
          value: 37,
          values: [1, 0, 37],
          series: [{ name: "", seriesIndex: 0, value: 37 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
    {
      name: "finite scatter tuples with their point identity",
      chart: {
        type: "scatter",
        series: [
          {
            name: "Engineering",
            data: [
              { x: 128000, y: 0.6, label: "Roser Nogué" },
              { x: Number.NaN, y: 1, label: "Broken" },
            ],
          },
        ],
      },
      expected: [
        {
          ...keyboardPosition,
          seriesName: "Engineering",
          category: "Roser Nogué",
          value: 0.6,
          values: [128000, 0.6],
          series: [{ name: "Engineering", seriesIndex: 0, value: 0.6 }],
          dataIndex: 0,
          seriesIndex: 0,
        },
      ],
    },
  ]

  it.each(cases)("synthesizes $name", ({ chart, expected }) => {
    expect(buildAccessibleChartPoints(chart).map(({ point }) => point)).toEqual(
      expected
    )
  })

  it("keeps keyboard points aligned with the live legend selection", () => {
    const chart: F0DataChartProps = {
      type: "bar",
      categories: ["Engineering"],
      series: [
        { name: "Women", data: [70] },
        { name: "Men", data: [75] },
      ],
    }

    expect(
      buildAccessibleChartPoints(chart, { Women: false }).map(
        ({ point }) => point.seriesName
      )
    ).toEqual(["Men"])

    expect(
      buildAccessibleChartPoints(
        {
          type: "funnel",
          series: {
            name: "Candidates",
            data: [
              { name: "Applied", value: 100 },
              { name: "Hired", value: 20 },
            ],
          },
        },
        { Applied: false }
      ).map(({ point }) => point.category)
    ).toEqual(["Hired"])
  })

  it.each([
    { type: "gauge", value: Number.NaN } as const,
    {
      type: "radar",
      indicators: [{ name: "Performance" }],
      series: [{ name: "Team A", data: [Number.NaN] }],
    } as const,
    {
      type: "heatmap",
      xCategories: ["09:00"],
      yCategories: ["Monday"],
      data: [[0, 0] as unknown as [number, number, number]],
    } as const,
  ])("does not expose malformed $type data", (chart) => {
    expect(buildAccessibleChartPoints(chart)).toEqual([])
    expect(hasAccessibleChartPoint(chart)).toBe(false)
  })
})
