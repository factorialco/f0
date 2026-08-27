import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import {
  screen,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"
import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"
import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"

import { F0AnalyticsDashboard } from "../F0AnalyticsDashboard"
import type {
  DashboardChartItem,
  DashboardCustomItem,
  DashboardItem,
  DashboardMetricItem,
} from "../types"

// Keep this dashboard integration test at the map boundary: jsdom has no
// browser Worker, while location behavior has its own focused test suite.
vi.mock("@/patterns/F0Map", () => ({
  f0MapDensityColors: { low: "red", medium: "red", high: "red" },
  f0MapDensityColorSteps: { low: 10, medium: 50, high: 70 },
  f0MapStyles: {
    light: { version: 8, sources: {}, layers: [] },
    dark: { version: 8, sources: {}, layers: [] },
  },
  F0Map: () => <div aria-label="Map" role="img" />,
}))

// Keep this dashboard integration test at the chart boundary: jsdom has no
// canvas context, while ChartItem's keyboard point surface is ordinary DOM.
vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: () => <div aria-label="Chart" role="img" />,
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
  fetchData: DashboardChartItem<typeof filters>["fetchData"]
): DashboardChartItem<typeof filters> {
  return {
    id: "headcount-chart",
    title: "Headcount by department",
    type: "chart",
    chart: { type: "bar" },
    fetchData,
  }
}

function QuoteProbe() {
  const { pendingQuote } = useAiChat()
  return <span data-testid="pending-quote">{pendingQuote?.text ?? ""}</span>
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

describe("F0AnalyticsDashboard item filters", () => {
  it("keeps metric filters and fullscreen independent while preserving single-item and undefined opt-outs", () => {
    const headcount = metricItem(vi.fn().mockResolvedValue({ value: 42 }))
    const turnover: DashboardMetricItem<typeof filters> = {
      ...metricItem(vi.fn().mockResolvedValue({ value: 7 })),
      id: "turnover",
      title: "Turnover",
    }
    const resolver = vi.fn((item: DashboardItem<typeof filters>) =>
      item.id === "headcount"
        ? {
            filters: {
              employee: { type: "search" as const, label: "Employee" },
            },
            value: {},
            onChange: vi.fn(),
          }
        : undefined
    )

    const view = render(
      <F0AnalyticsDashboard
        items={[headcount, turnover]}
        itemFilters={resolver}
      />
    )

    const headcountCard = screen
      .getByText("Headcount")
      .closest("[class*='dashitem']") as HTMLElement
    const turnoverCard = screen
      .getByText("Turnover")
      .closest("[class*='dashitem']") as HTMLElement
    expect(
      within(headcountCard).getByRole("button", { name: "Filters" })
    ).toBeVisible()
    expect(
      within(turnoverCard).queryByRole("button", { name: "Filters" })
    ).toBeNull()
    expect(
      within(headcountCard).getByRole("button", { name: "Expand" })
    ).toBeVisible()
    expect(
      within(turnoverCard).getByRole("button", { name: "Expand" })
    ).toBeVisible()

    view.rerender(
      <F0AnalyticsDashboard items={[headcount]} itemFilters={resolver} />
    )
    expect(
      within(
        screen
          .getByText("Headcount")
          .closest("[class*='dashitem']") as HTMLElement
      ).getByRole("button", { name: "Filters" })
    ).toBeVisible()
    expect(screen.queryByRole("button", { name: "Expand" })).toBeNull()
    expect(resolver).toHaveBeenCalledWith(
      expect.objectContaining({ id: "headcount" })
    )
    expect(resolver).toHaveBeenCalledWith(
      expect.objectContaining({ id: "turnover" })
    )
  })

  it("keeps filters available when an existing fullscreen-capable chart is expanded", async () => {
    const user = userEvent.setup()
    const headcountChart = chartItem(
      vi.fn().mockResolvedValue({
        categories: ["Engineering"],
        series: [{ name: "Headcount", data: [42] }],
      })
    )
    const turnover = {
      ...metricItem(vi.fn().mockResolvedValue({ value: 7 })),
      id: "turnover",
      title: "Turnover",
    }
    const resolver = vi.fn((item: DashboardItem<typeof filters>) =>
      item.id === "headcount-chart"
        ? {
            filters: {
              employee: { type: "search" as const, label: "Employee" },
            },
            value: {},
            onChange: vi.fn(),
          }
        : undefined
    )

    render(
      <F0AnalyticsDashboard
        items={[headcountChart, turnover]}
        itemFilters={resolver}
      />
    )

    const chartCard = screen
      .getByText("Headcount by department")
      .closest("[class*='dashitem']") as HTMLElement
    expect(
      within(chartCard).getByRole("button", { name: "Filters" })
    ).toBeVisible()

    await user.click(within(chartCard).getByRole("button", { name: "Expand" }))

    await waitFor(() =>
      expect(screen.queryByText("Turnover")).not.toBeInTheDocument()
    )
    expect(
      within(
        screen
          .getByText("Headcount by department")
          .closest("[class*='dashitem']") as HTMLElement
      ).getByRole("button", { name: "Filters" })
    ).toBeVisible()
  })

  it("keeps metric refresh and Ask One observation active together", async () => {
    const user = userEvent.setup()
    const fetchData = vi.fn().mockResolvedValue({ value: 42 })
    const onItemFiltersChange = vi.fn()
    const onAskAiTarget = vi.fn()
    const item = metricItem(fetchData)
    const itemFilterDefinitions = {
      country: {
        type: "in" as const,
        label: "Country",
        options: {
          options: [{ value: "ES", label: "Spain" }],
        },
      },
    }

    const view = render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          items={[item]}
          itemFilters={() => ({
            filters: itemFilterDefinitions,
            value: {},
            onChange: onItemFiltersChange,
          })}
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))

    const card = screen
      .getByText("Headcount")
      .closest("[class*='dashitem']") as HTMLElement
    await user.click(within(card).getByRole("button", { name: "Filters" }))
    await user.click(await screen.findByRole("button", { name: "Country" }))
    await user.click(await screen.findByRole("checkbox", { name: "Spain" }))
    await user.click(screen.getByRole("button", { name: "Apply selection" }))
    await user.click(screen.getByRole("button", { name: "Apply filters" }))

    await waitFor(() =>
      expect(onItemFiltersChange).toHaveBeenCalledWith({ country: ["ES"] })
    )

    view.rerender(
      <AiChatStateProvider enabled>
        <QuoteProbe />
        <F0AnalyticsDashboard
          items={[item]}
          itemFilters={() => ({
            filters: itemFilterDefinitions,
            value: { country: ["ES"] },
            onChange: onItemFiltersChange,
          })}
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
    )

    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2))

    await user.click(
      within(card).getByRole("button", { name: "Other actions" })
    )
    await user.click(screen.getByRole("menuitem", { name: "Ask One" }))

    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount",
      title: "Headcount",
      quote: { text: "Headcount" },
    })
    expect(screen.getByTestId("pending-quote")).toHaveTextContent("Headcount")
  })
})

describe("F0AnalyticsDashboard custom items", () => {
  it("renders host content in the standard item shell with applied filters", async () => {
    const user = userEvent.setup()
    const renderContent = vi.fn((currentFilters: DashboardFilters) => (
      <div>Mapped locations: {currentFilters.department?.join(", ")}</div>
    ))
    const item: DashboardCustomItem<typeof filters> = {
      id: "clock-activity",
      type: "custom",
      title: "Clock activity by location",
      description: "Last 30 days · Europe",
      explanation: "Clock events grouped by workplace.",
      renderContent,
    }

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        items={[item]}
      />
    )

    expect(
      screen.getByRole("heading", { name: "Clock activity by location" })
    ).toBeVisible()
    expect(screen.getByText("Last 30 days · Europe")).toBeVisible()
    expect(screen.getByText("Mapped locations: engineering")).toBeVisible()
    expect(renderContent).toHaveBeenLastCalledWith({
      department: ["engineering"],
    })

    await user.click(screen.getByRole("button", { name: "Other actions" }))
    expect(
      screen.getByRole("menuitem", {
        name: "Where does this data come from?",
      })
    ).toBeVisible()
  })

  it("withholds dashboard filters from an opted-out custom item", () => {
    const renderContent = vi.fn(() => <div>Custom content</div>)

    render(
      <F0AnalyticsDashboard
        filters={filters}
        defaultFilters={{ department: ["engineering"] }}
        items={[
          {
            id: "unfiltered-custom",
            type: "custom",
            title: "Global activity",
            useDashboardFilters: false,
            renderContent,
          },
        ]}
      />
    )

    expect(renderContent).toHaveBeenLastCalledWith({})
  })

  it("updates custom content when controlled dashboard filters change", () => {
    const filteredContent = vi.fn(() => <div>Filtered content</div>)
    const unfilteredContent = vi.fn(() => <div>Global content</div>)
    const items: DashboardCustomItem<typeof filters>[] = [
      {
        id: "filtered-custom",
        type: "custom",
        title: "Filtered activity",
        renderContent: filteredContent,
      },
      {
        id: "unfiltered-custom",
        type: "custom",
        title: "Global activity",
        useDashboardFilters: false,
        renderContent: unfilteredContent,
      },
    ]
    const { rerender } = render(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["engineering"] }}
        items={items}
      />
    )

    rerender(
      <F0AnalyticsDashboard
        filters={filters}
        filtersValue={{ department: ["product"] }}
        items={items}
      />
    )

    expect(filteredContent).toHaveBeenLastCalledWith({
      department: ["product"],
    })
    expect(unfilteredContent.mock.calls).not.toHaveLength(0)
    expect(
      unfilteredContent.mock.calls.every(
        ([value]) => Object.keys(value).length === 0
      )
    ).toBe(true)
  })
})

describe("F0AnalyticsDashboard Ask One", () => {
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

  it("passes a chart point through the public target observer and built-in chat", async () => {
    const user = userEvent.setup()
    const onAskAiTarget = vi.fn()

    render(
      <AiChatStateProvider enabled>
        <QuoteProbe />
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
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
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

    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "headcount-chart",
      title: "Headcount by department",
      point: expect.objectContaining({
        source: "keyboard",
        category: "Engineering",
        value: 145,
      }),
      quote: {
        text: "Headcount by department — Engineering\nHeadcount: 145",
      },
    })
    expect(screen.getByTestId("pending-quote")).toHaveTextContent(
      "Headcount by department — Engineering Headcount: 145"
    )
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
