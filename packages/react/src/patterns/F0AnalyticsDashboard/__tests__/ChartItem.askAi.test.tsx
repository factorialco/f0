import { useEffect, useRef } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import type { F0DataChartPointClick } from "@/kits/F0DataChart"
import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"

import type { DashboardChartConfig, DashboardChartItem } from "../types"

import {
  buildPointQuoteText,
  buildChartProps,
  ChartItem,
} from "../components/ChartItem/ChartItem"

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
    }: {
      onPointClick?: (point: F0DataChartPointClick) => void
    }) => (
      <button type="button" onClick={() => onPointClick?.(POINT)}>
        mark
      </button>
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
  onCapture?: (quote: ReturnType<typeof useAiChat>["pendingQuote"]) => void
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

  it("does not anchor an action to a mark on a chart without a title", async () => {
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

  it("keeps the chart clear until a mark is picked", async () => {
    render(
      <AiChatStateProvider enabled>
        <ChartItem item={item} filters={filters} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "mark" })).toBeInTheDocument()
    )

    // The action is anchored to the click and nowhere else: no standing
    // trigger sits over the widget waiting to be revealed by a stray focus.
    expect(
      screen.queryByRole("button", { name: /Ask One/ })
    ).not.toBeInTheDocument()
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

    expect(
      buildPointQuoteText(item.title, transformed, {
        ...POINT,
        seriesName: "",
        category: "Team A",
        value: 7,
        values: [8, 7],
        series: [{ name: "", seriesIndex: 0, value: 7 }],
      })
        .split("\n")
        .join(", ")
    ).toBe("Headcount by workplace — Team A, Performance: 8, Engagement: 7")
  })
})
