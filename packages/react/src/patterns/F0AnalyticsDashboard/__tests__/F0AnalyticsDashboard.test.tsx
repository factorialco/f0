import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type { F0DataChartAreaSelectionConfig } from "@/kits/F0DataChart"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import {
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"

import type { DashboardChartItem, DashboardMetricItem } from "../types"

import { F0AnalyticsDashboard } from "../F0AnalyticsDashboard"

const AREA = {
  brushType: "polygon" as const,
  coordRange: [
    [0, 0],
    [100, 0],
    [100, 100],
  ] as [number, number][],
}

// Keep this dashboard integration test at the chart boundary: jsdom has no
// canvas context, while ChartItem's keyboard point surface is ordinary DOM.
vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: ({
      areaSelection,
    }: {
      areaSelection?: F0DataChartAreaSelectionConfig
    }) => (
      <div
        aria-label="Chart"
        role="img"
        data-area-selection-active={areaSelection?.active}
        data-area-selection-selected={areaSelection?.selected}
      >
        {areaSelection && (
          <>
            <button
              type="button"
              onClick={() =>
                areaSelection.onSelect(
                  {
                    source: "pointer",
                    totalPointCount: 1,
                    points: [
                      {
                        seriesName: "Headcount",
                        category: "Engineering",
                        value: 145,
                        values: [145],
                        series: [
                          { name: "Headcount", seriesIndex: 0, value: 145 },
                        ],
                        dataIndex: 0,
                        seriesIndex: 0,
                      },
                    ],
                  },
                  AREA
                )
              }
            >
              Finish drawing
            </button>
            <button
              type="button"
              onClick={() =>
                areaSelection.onSelect(
                  {
                    source: "pointer",
                    totalPointCount: 0,
                    points: [],
                  },
                  AREA
                )
              }
            >
              Finish empty drawing
            </button>
            <button type="button" onClick={areaSelection.onCancel}>
              Cancel drawing
            </button>
          </>
        )}
      </div>
    ),
  }
})

const filters = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "sales", label: "Sales" },
      ],
    },
  },
} as const satisfies FiltersDefinition

type DashboardFilters = FiltersState<typeof filters>

function getVisibleByText(text: string): HTMLElement {
  const matches = screen.getAllByText(text)
  return (
    matches.find((element) => !element.closest('[aria-hidden="true"]')) ??
    matches[0]
  )
}

function metricItem(
  fetchData: DashboardMetricItem<typeof filters>["fetchData"]
): DashboardMetricItem<typeof filters> {
  return {
    id: "headcount",
    title: "Headcount",
    type: "metric",
    fetchData,
  }
}

function chartItem(
  id = "headcount-chart",
  chart: DashboardChartItem["chart"] = { type: "bar" }
): DashboardChartItem {
  return {
    id,
    title: "Headcount by department",
    type: "chart",
    chart,
    fetchData: () =>
      Promise.resolve({
        categories: ["Engineering"],
        series: [{ name: "Headcount", data: [145] }],
      }),
  }
}

function QuoteProbe() {
  const { pendingQuote, setPendingQuote } = useAiChat()
  return (
    <div>
      <span data-testid="pending-quote">{pendingQuote?.text ?? ""}</span>
      <button type="button" onClick={() => setPendingQuote(null)}>
        Remove quote
      </button>
    </div>
  )
}

describe("F0AnalyticsDashboard report filters", () => {
  it("uses default filters in uncontrolled mode and refetches after Clear", async () => {
    const user = userEvent.setup()
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })
    const onFiltersChange = vi.fn()

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        onFiltersChange={onFiltersChange}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenLastCalledWith({
        department: ["engineering"],
      })
    )
    expect(fetchData).toHaveBeenCalledTimes(1)

    const trigger = screen.getByRole("button", {
      name: "Filters",
      description: "Active filters: Department",
    })
    expect(within(trigger).getByText("1")).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Clear" }))

    await waitFor(() => expect(fetchData).toHaveBeenLastCalledWith({}))
    expect(fetchData).toHaveBeenCalledTimes(2)
    expect(onFiltersChange).toHaveBeenCalledWith({})
    expect(screen.getByRole("button", { name: "Filters" })).toBeInTheDocument()
  })

  it("emits every controlled transition and waits for the value prop before updating", async () => {
    const user = userEvent.setup()
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })
    const onFiltersChange = vi.fn()
    const activeFilters: DashboardFilters = {
      department: ["engineering"],
    }

    const { rerender } = render(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={activeFilters}
        onFiltersChange={onFiltersChange}
        presets={[
          {
            label: "Sales only",
            filter: { department: ["sales"] },
          },
        ]}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))

    await user.click(
      screen.getByRole("button", {
        name: "Filters",
        description: "Active filters: Department",
      })
    )
    await user.click(screen.getByRole("checkbox", { name: "Sales" }))
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    expect(onFiltersChange).toHaveBeenLastCalledWith({
      department: ["engineering", "sales"],
    })
    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(
      screen.getByRole("button", { name: "Department: Engineering" })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Department: Engineering +1" })
    ).not.toBeInTheDocument()

    await user.click(
      await screen.findByRole("button", {
        name: "Close",
        description: "Department: Engineering",
      })
    )
    expect(onFiltersChange).toHaveBeenLastCalledWith({})
    expect(
      screen.getByRole("button", { name: "Department: Engineering" })
    ).toBeInTheDocument()

    await user.click(getVisibleByText("Sales only"))
    expect(onFiltersChange).toHaveBeenLastCalledWith({
      department: ["sales"],
    })
    expect(
      screen.getByRole("button", { name: "Department: Engineering" })
    ).toBeInTheDocument()

    rerender(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["sales"] }}
        onFiltersChange={onFiltersChange}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenLastCalledWith({ department: ["sales"] })
    )
    expect(fetchData).toHaveBeenCalledTimes(2)
    expect(
      await screen.findByRole("button", { name: "Department: Sales" })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Department: Engineering" })
    ).not.toBeInTheDocument()
  })

  it("prefers a controlled value over default filters", async () => {
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        filtersValue={{ department: ["sales"] }}
        items={[metricItem(fetchData)]}
      />
    )

    await waitFor(() =>
      expect(fetchData).toHaveBeenCalledWith({ department: ["sales"] })
    )
  })

  it("emits controlled changes for an empty dashboard", async () => {
    const user = userEvent.setup()
    const onFiltersChange = vi.fn()

    render(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["engineering"] }}
        onFiltersChange={onFiltersChange}
        items={[]}
      />
    )

    expect(
      await screen.findByRole("button", { name: "Department: Engineering" })
    ).toBeInTheDocument()
    await user.click(screen.getByRole("button", { name: "Clear" }))

    expect(onFiltersChange).toHaveBeenCalledWith({})
    expect(
      screen.getByRole("button", { name: "Department: Engineering" })
    ).toBeInTheDocument()
  })
})

describe("F0AnalyticsDashboard Ask One", () => {
  it("shows one dashboard draw action only when a compatible chart exists", async () => {
    const { rerender } = render(
      <F0AnalyticsDashboard
        items={[
          metricItem(vi.fn().mockResolvedValue({ value: 42 })),
          chartItem("pie", { type: "pie" }),
        ]}
        onAskAi={vi.fn()}
      />
    )

    expect(
      screen.queryByRole("button", { name: "Draw to ask One" })
    ).not.toBeInTheDocument()

    rerender(
      <F0AnalyticsDashboard
        items={[chartItem("bar"), chartItem("line", { type: "line" })]}
        onAskAi={vi.fn()}
      />
    )

    expect(
      await screen.findAllByRole("button", {
        name: "Draw to ask One",
      })
    ).toHaveLength(1)
  })

  it("hides the draw action when a compatible chart has no drawable surface", async () => {
    const emptyItem: DashboardChartItem = {
      ...chartItem(),
      fetchData: () => Promise.resolve({ categories: [], series: [] }),
    }
    render(<F0AnalyticsDashboard items={[emptyItem]} onAskAi={vi.fn()} />)

    await screen.findByRole("img", { name: "Chart" })
    expect(
      screen.queryByRole("button", { name: "Draw to ask One" })
    ).not.toBeInTheDocument()
  })

  it("hides the draw action when a compatible chart has no semantic title", async () => {
    render(
      <F0AnalyticsDashboard
        items={[{ ...chartItem(), title: "   " }]}
        onAskAi={vi.fn()}
      />
    )

    await screen.findByRole("img", { name: "Chart" })
    expect(
      screen.queryByRole("button", { name: "Draw to ask One" })
    ).not.toBeInTheDocument()
  })

  it("hides the draw action when a compatible chart is in an error state", async () => {
    const errorItem: DashboardChartItem = {
      ...chartItem(),
      id: "error-chart",
      fetchData: () => Promise.reject(new Error("Unavailable")),
    }
    render(<F0AnalyticsDashboard items={[errorItem]} onAskAi={vi.fn()} />)

    await screen.findByText("Error loading data")
    expect(
      screen.queryByRole("button", { name: "Draw to ask One" })
    ).not.toBeInTheDocument()
  })

  it("hides the draw action while a compatible item is shown as a table", async () => {
    const user = userEvent.setup()
    render(
      <F0AnalyticsDashboard
        items={[chartItem()]}
        onAskAi={vi.fn()}
        onTransformChart={vi.fn()}
      />
    )

    await screen.findByRole("button", { name: "Draw to ask One" })
    await user.click(screen.getByRole("button", { name: "Other actions" }))
    await user.click(screen.getByRole("radio", { name: "Table" }))

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Draw to ask One" })
      ).not.toBeInTheDocument()
    )
  })

  it("does not advertise a heatmap whose unpadded chart surface is narrow", async () => {
    const clientWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "clientWidth"
    )
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get() {
        return (this as HTMLElement).hasAttribute(
          "data-dashboard-chart-surface"
        )
          ? 188
          : 224
      },
    })

    try {
      const heatmapItem: DashboardChartItem = {
        ...chartItem("heatmap", { type: "heatmap" }),
        fetchData: () =>
          Promise.resolve({
            xCategories: ["Monday"],
            yCategories: ["Morning"],
            data: [[0, 0, 12]],
          }),
      }
      render(<F0AnalyticsDashboard items={[heatmapItem]} onAskAi={vi.fn()} />)

      await screen.findByRole("img", { name: "Chart" })
      const surface = document.querySelector(
        "[data-dashboard-chart-surface]"
      ) as HTMLElement
      const paddedContainer = surface.parentElement as HTMLElement

      expect(paddedContainer.clientWidth).toBe(224)
      expect(surface.clientWidth).toBe(188)
      expect(
        screen.queryByRole("button", { name: "Draw to ask One" })
      ).not.toBeInTheDocument()
    } finally {
      if (clientWidth) {
        Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidth)
      } else {
        delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
      }
    }
  })

  it("advertises a heatmap after its wide chart surface mounts", async () => {
    const clientWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "clientWidth"
    )
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get() {
        return (this as HTMLElement).hasAttribute(
          "data-dashboard-chart-surface"
        )
          ? 520
          : 552
      },
    })

    try {
      const heatmapItem: DashboardChartItem = {
        ...chartItem("heatmap", { type: "heatmap" }),
        fetchData: () =>
          Promise.resolve({
            xCategories: ["Monday"],
            yCategories: ["Morning"],
            data: [[0, 0, 12]],
          }),
      }
      render(<F0AnalyticsDashboard items={[heatmapItem]} onAskAi={vi.fn()} />)

      expect(
        await screen.findByRole("button", {
          name: "Draw to ask One",
        })
      ).toBeInTheDocument()
    } finally {
      if (clientWidth) {
        Object.defineProperty(HTMLElement.prototype, "clientWidth", clientWidth)
      } else {
        delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
      }
    }
  })

  it("moves drawing guidance to the dashboard and blocks incompatible widgets", async () => {
    const user = userEvent.setup()
    render(
      <F0AnalyticsDashboard
        items={[
          chartItem(),
          metricItem(vi.fn().mockResolvedValue({ value: 42 })),
        ]}
        onAskAi={vi.fn()}
      />
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )

    expect(screen.getByRole("status")).toHaveTextContent(
      "Draw around data in one chart. Unavailable widgets are dimmed. Press Esc to cancel."
    )
    expect(
      document.querySelector("[data-dashboard-area-selection-status]")
    ).toHaveClass("absolute", "left-1/2", "rounded-full", "pointer-events-none")
    expect(
      screen.getByText("Drawing isn't available for this widget")
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Cancel selection" })
    ).toBeInTheDocument()
    const unavailableContent = screen
      .getByText("Drawing isn't available for this widget")
      .closest("[data-dashboard-item-frame]")
      ?.querySelector("[data-dashboard-item-content]")
    expect(unavailableContent).toHaveAttribute("inert")
    expect(unavailableContent).toHaveAttribute("aria-hidden", "true")
    expect(screen.queryByText("Choose data points")).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Cancel selection" }))

    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
    expect(
      screen.queryByText("Drawing isn't available for this widget")
    ).not.toBeInTheDocument()
  })

  it("keeps drawing active and announces an empty area", async () => {
    const user = userEvent.setup()
    render(<F0AnalyticsDashboard items={[chartItem()]} onAskAi={vi.fn()} />)

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(
      screen.getByRole("button", { name: "Finish empty drawing" })
    )

    expect(screen.getByRole("status")).toHaveTextContent(
      "No data points selected. Draw around at least one point."
    )
    expect(
      screen.getByRole("button", { name: "Cancel selection" })
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-active",
      "true"
    )
  })

  it("returns to idle after a host handles the completed area", async () => {
    const user = userEvent.setup()
    const onAskAi = vi.fn()
    render(<F0AnalyticsDashboard items={[chartItem()]} onAskAi={onAskAi} />)

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    expect(onAskAi).toHaveBeenCalledWith(
      expect.objectContaining({
        id: "headcount-chart",
        selection: expect.objectContaining({ totalPointCount: 1 }),
      })
    )
    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-active",
      "false"
    )
  })

  it("retains one completed area until its composer quote is removed", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    expect(screen.getByTestId("pending-quote")).toHaveTextContent(
      "Headcount by department — Selected chart area"
    )
    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
    const selectedChart = screen
      .getByRole("img", { name: "Chart" })
      .closest('[data-dashboard-area-selection-mode="selected"]')
    expect(selectedChart).not.toBeNull()
    expect(
      within(selectedChart as HTMLElement).getByRole("button", {
        name: "Clear selection",
      })
    ).toHaveAttribute("data-dashboard-area-selection-clear")
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "true"
    )

    await user.click(
      within(selectedChart as HTMLElement).getByRole("button", {
        name: "Clear selection",
      })
    )

    expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Draw to ask One" })
      ).toHaveFocus()
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    await user.click(screen.getByRole("button", { name: "Remove quote" }))

    expect(
      await screen.findByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )
  })

  it("retains and observes a built-in no-drag selection without polygon geometry", async () => {
    const user = userEvent.setup()
    const onAskAiTarget = vi.fn()
    render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          items={[chartItem()]}
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(
      screen.getByRole("button", {
        name: "Select chart values without drawing: Headcount by department",
      })
    )
    await user.click(
      await screen.findByRole("menuitemcheckbox", {
        name: "Headcount by department — Engineering, Headcount: 145",
      })
    )
    await user.click(
      screen.getByRole("menuitem", {
        name: "Ask One about selected values (1)",
      })
    )

    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount-chart",
      title: "Headcount by department",
      selection: expect.objectContaining({
        source: "control",
        totalPointCount: 1,
      }),
      quote: {
        text: "Headcount by department — Selected chart area\nEngineering — Headcount: 145",
      },
    })
    expect(screen.getByTestId("pending-quote")).toHaveTextContent(
      "Headcount by department — Selected chart area"
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "true"
    )
    expect(
      screen.getByRole("button", { name: "Clear selection" })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "Remove quote" }))
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Clear selection" })
      ).not.toBeInTheDocument()
    )
  })

  it("replaces a retained area when the dashboard action starts another drawing", async () => {
    const user = userEvent.setup()
    render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    expect(screen.getByTestId("pending-quote")).not.toBeEmptyDOMElement()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "true"
    )

    await user.click(screen.getByRole("button", { name: "Draw to ask One" }))

    expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    expect(
      screen.getByRole("button", { name: "Cancel selection" })
    ).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-active",
      "true"
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )
  })

  it("does not let floating guidance obscure a focused chart action", async () => {
    const user = userEvent.setup()
    render(<F0AnalyticsDashboard items={[chartItem()]} onAskAi={vi.fn()} />)

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    expect(
      document.querySelector("[data-dashboard-area-selection-status]")
    ).toBeInTheDocument()

    screen.getByRole("button", { name: "Other actions" }).focus()

    await waitFor(() =>
      expect(
        document.querySelector("[data-dashboard-area-selection-status]")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByRole("button", { name: "Other actions" })).toHaveFocus()
    expect(screen.getByRole("status")).toHaveTextContent(
      "Draw around data in one chart"
    )
  })

  it("moves focus to a stable dashboard action when cancellation removes the selector", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <F0AnalyticsDashboard items={[chartItem()]} onAskAi={vi.fn()} />
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    rerender(
      <F0AnalyticsDashboard
        items={[chartItem("headcount-chart", { type: "pie" })]}
        onAskAi={vi.fn()}
      />
    )
    await user.click(screen.getByRole("button", { name: "Cancel selection" }))

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Draw to ask One" })
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Other actions" })
      ).toHaveFocus()
    )
  })

  it("clears a retained area and restores focus when its chart becomes incompatible", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))
    rerender(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          items={[chartItem("headcount-chart", { type: "pie" })]}
        />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Clear selection" })
      ).not.toBeInTheDocument()
    )
    expect(screen.getByTestId("pending-quote")).toHaveTextContent("")

    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Draw to ask One" })
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Other actions" })
      ).toHaveFocus()
    )
  })

  it("clears a completed selection when the dashboard resets", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} resetKey={0} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    rerender(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} resetKey={1} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    )
    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
  })

  it("clears a completed selection when report or navigation filters change", async () => {
    const user = userEvent.setup()
    const initialFilters: DashboardFilters = {
      department: ["engineering"],
    }
    const { rerender } = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          filters={filters}
          filtersValue={initialFilters}
          items={[chartItem()]}
          navigationFilters={{
            date: {
              type: "date-navigator",
              defaultValue: new Date("2026-08-24T12:00:00.000Z"),
              granularity: ["day"],
            },
          }}
        />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    rerender(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          filters={filters}
          filtersValue={{ department: ["sales"] }}
          items={[chartItem()]}
          navigationFilters={{
            date: {
              type: "date-navigator",
              defaultValue: new Date("2026-08-24T12:00:00.000Z"),
              granularity: ["day"],
            },
          }}
        />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))
    await user.click(screen.getByRole("button", { name: "Next" }))

    await waitFor(() =>
      expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )
  })

  it("clears a completed selection when its responder becomes unavailable", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    rerender(
      <AiChatStateProvider enabled={false}>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    )
    expect(
      screen.queryByRole("button", { name: "Draw to ask One" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )
  })

  it("clears a completed selection when its chart is removed", async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem()]} />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Draw to ask One" })
    )
    await user.click(screen.getByRole("button", { name: "Finish drawing" }))

    rerender(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard items={[chartItem("replacement-chart")]} />
      </AiChatStateProvider>
    )

    await waitFor(() =>
      expect(screen.getByTestId("pending-quote")).toBeEmptyDOMElement()
    )
    expect(screen.getByRole("img", { name: "Chart" })).toHaveAttribute(
      "data-area-selection-selected",
      "false"
    )
    expect(
      screen.getByRole("button", { name: "Draw to ask One" })
    ).toBeInTheDocument()
  })

  it("passes the public host handler through to a rendered widget", async () => {
    const user = userEvent.setup()
    const onAskAi = vi.fn()

    render(
      <F0AnalyticsDashboard
        items={[metricItem(vi.fn().mockResolvedValue({ value: 42 }))]}
        onAskAi={onAskAi}
      />
    )

    await user.click(
      await screen.findByRole("button", { name: "Other actions" })
    )
    await user.click(screen.getByRole("menuitem", { name: "Ask One" }))

    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount",
    })
  })

  it("passes the public target observer without replacing built-in chat behavior", async () => {
    const user = userEvent.setup()
    const onAskAiTarget = vi.fn()

    render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          items={[metricItem(vi.fn().mockResolvedValue({ value: 42 }))]}
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
    )

    await user.click(
      await screen.findByRole("button", { name: "Other actions" })
    )
    await user.click(screen.getByRole("menuitem", { name: "Ask One" }))

    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount",
      quote: { text: "Headcount" },
    })
    expect(screen.getByTestId("pending-quote")).toHaveTextContent("Headcount")
  })

  it("passes a keyboard-selected chart point through the public handler", async () => {
    const user = userEvent.setup()
    const onAskAi = vi.fn()

    render(
      <F0AnalyticsDashboard
        items={[
          {
            id: "headcount-chart",
            title: "Headcount by department",
            type: "chart",
            chart: { type: "bar" },
            fetchData: () =>
              Promise.resolve({
                categories: ["Engineering"],
                series: [{ name: "Headcount", data: [145] }],
              }),
          },
        ]}
        onAskAi={onAskAi}
      />
    )

    const trigger = await screen.findByRole("button", {
      name: "Ask One: Headcount by department",
    })
    trigger.focus()
    await user.keyboard("{Enter}")
    await user.click(
      await screen.findByRole("menuitem", {
        name: "Headcount by department — Engineering, Headcount: 145",
      })
    )

    expect(onAskAi).toHaveBeenCalledWith({
      id: "headcount-chart",
      title: "Headcount by department",
      point: {
        source: "keyboard",
        seriesName: "Headcount",
        category: "Engineering",
        value: 145,
        values: [145],
        series: [{ name: "Headcount", seriesIndex: 0, value: 145 }],
        dataIndex: 0,
        seriesIndex: 0,
        clientX: 0,
        clientY: 0,
      },
    })
  })
})

describe("F0AnalyticsDashboard — unrenderable chart config", () => {
  // A host app that maps a wire chart type it has no case for yields
  // `undefined`. Every type switch here lacks a default, so without a guard
  // that would throw and take the whole dashboard down with it.
  it("contains an unknown chart type as one item's error state", async () => {
    const fetchData = vi.fn().mockResolvedValue({
      categories: ["A"],
      series: [{ name: "s", data: [1] }],
    })

    render(
      <F0AnalyticsDashboard
        filters={filters}
        items={[
          {
            id: "broken",
            title: "Broken widget",
            type: "chart",
            // What a host app hands over when its mapper has no case.
            chart: undefined as never,
            fetchData,
          },
          metricItem(vi.fn().mockResolvedValue({ value: 42 })),
        ]}
      />
    )

    // The bad widget degrades to the shared error state…
    await waitFor(() =>
      expect(getVisibleByText("Error loading data")).toBeInTheDocument()
    )
    // …and its neighbour still renders.
    expect(getVisibleByText("Headcount")).toBeInTheDocument()
  })

  it("does not offer Retry for a condition refetching cannot fix", async () => {
    render(
      <F0AnalyticsDashboard
        filters={filters}
        items={[
          {
            id: "broken",
            title: "Broken widget",
            type: "chart",
            chart: undefined as never,
            fetchData: vi.fn().mockResolvedValue({}),
          },
        ]}
      />
    )

    await waitFor(() =>
      expect(getVisibleByText("Error loading data")).toBeInTheDocument()
    )
    expect(screen.queryByRole("button", { name: "Retry" })).toBeNull()
  })

  it("states the condition once, not as both title and description", async () => {
    // The error state has no dedicated string for this condition, so nothing
    // should land in the description slot — reusing the title there would
    // render it twice. `getVisibleByText` picks the first match and would
    // happily pass on that, so assert the count directly instead.
    render(
      <F0AnalyticsDashboard
        filters={filters}
        items={[
          {
            id: "broken",
            title: "Broken widget",
            type: "chart",
            chart: undefined as never,
            fetchData: vi.fn().mockResolvedValue({}),
          },
        ]}
      />
    )

    await waitFor(() =>
      expect(screen.getAllByText("Error loading data")).toHaveLength(1)
    )
  })
})
