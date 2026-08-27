import { afterEach, describe, expect, it, vi } from "vitest"

import { ChartLine } from "@/icons/app"
import { AiChatStateProvider } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import {
  WIDGET_DRAG_START,
  type WidgetDragStartDetail,
} from "@/lib/dnd/widgetDragEvents"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  waitFor,
  within,
  zeroRender as render,
} from "@/testing/test-utils"

import type { DashboardItem, DashboardLocationItem } from "../types"

import { DashboardGrid } from "../components/DashboardGrid/DashboardGrid"

vi.mock("@/patterns/F0Map", () => ({
  f0MapDensityColors: { low: "red", medium: "red", high: "red" },
  f0MapDensityColorSteps: { low: 10, medium: 50, high: 70 },
  f0MapDensityPalette: {
    low: { color: "red", colorStep: 10 },
    medium: { color: "red", colorStep: 50 },
    high: { color: "red", colorStep: 70 },
  },
  f0MapStyles: {
    light: { version: 8, sources: {}, layers: [] },
    dark: { version: 8, sources: {}, layers: [] },
  },
  F0Map: () => <div>Map</div>,
}))

type ExpenseRecord = {
  employee: string
  category: string
  amount: number
}

const expenseTableVisualization = {
  type: "table",
  options: {
    columns: [
      { label: "Employee", render: (item: ExpenseRecord) => item.employee },
      { label: "Category", render: (item: ExpenseRecord) => item.category },
      { label: "Amount", render: (item: ExpenseRecord) => item.amount },
    ],
  },
}

function makeMetricItems(itemHeight: number): DashboardItem[] {
  return [
    {
      id: "headcount",
      type: "metric",
      title: "Headcount",
      itemHeight,
      fetchData: async () => ({ value: 42 }),
    },
    {
      id: "turnover",
      type: "metric",
      title: "Turnover",
      fetchData: async () => ({ value: 7 }),
    },
  ]
}

function makeCollectionItems(itemHeight: number): DashboardItem[] {
  return [
    {
      id: "expenses",
      type: "collection",
      title: "Expenses",
      itemHeight,
      visualizations: [expenseTableVisualization],
      createSource: () => ({
        dataAdapter: {
          fetchData: async () => ({ records: [], total: 0 }),
        },
      }),
    },
    {
      id: "category-totals",
      type: "collection",
      title: "Category totals",
      itemHeight: 480,
      visualizations: [expenseTableVisualization],
      createSource: () => ({
        dataAdapter: {
          fetchData: async () => ({ records: [], total: 0 }),
        },
      }),
    },
  ]
}

function makeLocationItem(
  overrides: Partial<DashboardLocationItem> = {}
): DashboardLocationItem {
  return {
    id: "locations",
    type: "location",
    title: "Activity by location",
    location: {
      summaryMetrics: [
        { id: "one", label: "One", icon: ChartLine },
        { id: "two", label: "Two", icon: ChartLine },
        { id: "three", label: "Three", icon: ChartLine },
      ],
      densityLabel: "Density",
      densityLowLabel: () => "Low",
      densityMediumLabel: () => "Medium",
      densityHighLabel: () => "High",
      timelineTitle: "Timeline",
      timelineAriaLabel: "Timeline data",
      mapAriaLabel: "Locations",
      selectLocationLabel: "Select a location",
      viewLocationDetailsLabel: (name) => `View ${name}`,
      closeLocationDetailsLabel: "Close details",
      noDataLabel: "No data",
      exportLabels: {
        location: "Location",
        density: "Density",
        details: "Details",
        item: "Item",
        description: "Description",
      },
    },
    fetchData: () => new Promise(() => {}),
    ...overrides,
  }
}

function getDashboardRowHeight(container: HTMLElement): string {
  const card = container.querySelector('[data-card-id="headcount"]')
  if (!(card instanceof HTMLElement)) {
    throw new Error("Expected dashboard item to be rendered")
  }

  const row = card.parentElement
  if (!(row instanceof HTMLElement)) {
    throw new Error("Expected dashboard row to be rendered")
  }

  return row.style.height
}

describe("DashboardGrid", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("treats a location item as a built-in two-slot dashboard item", () => {
    const items: DashboardItem[] = [
      makeLocationItem(),
      {
        id: "comparison",
        type: "chart",
        title: "Comparison",
        chart: { type: "bar" },
        fetchData: async () => ({ categories: [], series: [] }),
      },
      {
        id: "headcount",
        type: "metric",
        title: "Headcount",
        fetchData: async () => ({ value: 42 }),
      },
    ]

    const { container } = render(<DashboardGrid items={items} filters={{}} />)
    const rows = container.querySelectorAll<HTMLElement>("[data-dashboard-row]")

    expect(rows).toHaveLength(2)
    expect(rows[0]).toHaveStyle({ height: "700px" })
    expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(2)
    expect(
      rows[0].querySelector('[data-card-id="locations"]')
    ).toBeInTheDocument()
    expect(
      rows[0].querySelector('[data-card-id="comparison"]')
    ).toBeInTheDocument()
    expect(
      rows[1].querySelector('[data-card-id="headcount"]')
    ).toBeInTheDocument()
  })

  it("gives custom items a full-width dashboard row and designer controls", () => {
    const items: DashboardItem[] = [
      {
        id: "clock-activity",
        type: "custom",
        title: "Clock activity by location",
        renderContent: () => <div>Map content</div>,
      },
      {
        id: "headcount",
        type: "metric",
        title: "Headcount",
        fetchData: async () => ({ value: 42 }),
      },
    ]

    const { container } = render(
      <DashboardGrid items={items} filters={{}} editMode />
    )
    const rows = container.querySelectorAll<HTMLElement>("[data-dashboard-row]")

    expect(rows).toHaveLength(2)
    expect(rows[0]).toHaveStyle({ height: "700px" })
    expect(
      rows[0].querySelector('[data-card-id="clock-activity"]')
    ).toHaveTextContent("Map content")
    expect(
      container.querySelectorAll('[aria-label="Drag to reorder"]')
    ).toHaveLength(2)
  })

  it("lets a responsive custom item share a row with exactly one peer", () => {
    const items: DashboardItem[] = [
      {
        id: "clock-activity",
        type: "custom",
        title: "Clock activity by location",
        allowRowSharing: true,
        renderContent: () => <div>Map content</div>,
      },
      {
        id: "clock-events",
        type: "chart",
        title: "Clock events by workplace",
        chart: { type: "bar" },
        fetchData: async () => ({ categories: [], series: [] }),
      },
      {
        id: "headcount",
        type: "metric",
        title: "Headcount",
        fetchData: async () => ({ value: 42 }),
      },
    ]

    const { container } = render(<DashboardGrid items={items} filters={{}} />)
    const rows = container.querySelectorAll<HTMLElement>("[data-dashboard-row]")

    expect(rows).toHaveLength(2)
    expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(2)
    expect(
      rows[0].querySelector('[data-card-id="clock-activity"]')
    ).toBeInTheDocument()
    expect(
      rows[0].querySelector('[data-card-id="clock-events"]')
    ).toBeInTheDocument()
    expect(
      rows[1].querySelector('[data-card-id="headcount"]')
    ).toBeInTheDocument()
  })

  it("stacks a shared custom row before its item width becomes unusable", async () => {
    const originalResizeObserver = Object.getOwnPropertyDescriptor(
      globalThis,
      "ResizeObserver"
    )
    const observations: Array<{
      callback: ResizeObserverCallback
      observer: ResizeObserver
      target?: Element
    }> = []

    class TestResizeObserver {
      private readonly observation: (typeof observations)[number]

      constructor(callback: ResizeObserverCallback) {
        this.observation = {
          callback,
          observer: this as unknown as ResizeObserver,
        }
        observations.push(this.observation)
      }

      observe = (target: Element) => {
        this.observation.target = target
      }
      unobserve = () => {}
      disconnect = () => {}
    }

    Object.defineProperty(globalThis, "ResizeObserver", {
      configurable: true,
      value: TestResizeObserver,
    })

    try {
      const items: DashboardItem[] = [
        {
          id: "clock-activity",
          type: "custom",
          title: "Clock activity by location",
          allowRowSharing: true,
          minItemWidth: 720,
          renderContent: () => <div>Map content</div>,
        },
        {
          id: "headcount",
          type: "metric",
          title: "Headcount",
          fetchData: async () => ({ value: 42 }),
        },
      ]
      const { container } = render(
        <DashboardGrid items={items} filters={{}} editMode />
      )
      const gridObservation = observations.find((observation) =>
        observation.target?.querySelector("[data-dashboard-row]")
      )
      if (!gridObservation?.target) {
        throw new Error("Expected the dashboard resize observation")
      }
      const notifyWidth = (width: number) => {
        act(() => {
          gridObservation.callback(
            [
              {
                target: gridObservation.target as Element,
                contentRect: { width },
              } as ResizeObserverEntry,
            ],
            gridObservation.observer
          )
        })
      }

      notifyWidth(1200)
      await waitFor(() =>
        expect(
          container.querySelectorAll<HTMLElement>("[data-dashboard-row]")
        ).toHaveLength(2)
      )
      expect(
        container.querySelectorAll('[aria-label="Drag to reorder"]')
      ).toHaveLength(0)

      notifyWidth(1600)
      await waitFor(() =>
        expect(
          container.querySelectorAll<HTMLElement>("[data-dashboard-row]")
        ).toHaveLength(1)
      )
      expect(
        container.querySelectorAll('[aria-label="Drag to reorder"]')
      ).toHaveLength(2)
    } finally {
      if (originalResizeObserver) {
        Object.defineProperty(
          globalThis,
          "ResizeObserver",
          originalResizeObserver
        )
      } else {
        Reflect.deleteProperty(globalThis, "ResizeObserver")
      }
    }
  })

  it("expands one widget into the bounded grid and restores its peers", async () => {
    const { container } = render(
      <div style={{ height: 720 }}>
        <DashboardGrid items={makeMetricItems(240)} filters={{}} editMode />
      </div>
    )
    const expand = container.querySelector<HTMLButtonElement>(
      '[data-card-id="headcount"] button[aria-label="Expand"]'
    )
    if (!expand) throw new Error("Expected the fullscreen control")

    expand.focus()
    fireEvent.click(expand)

    await waitFor(() => {
      expect(document.activeElement).toHaveAttribute("aria-label", "Collapse")
      expect(
        container.querySelector('[data-card-id="turnover"]')
      ).not.toBeInTheDocument()
    })
    const collapse = container.querySelector<HTMLButtonElement>(
      'button[aria-label="Collapse"]'
    )
    if (!collapse) throw new Error("Expected the collapse control")

    fireEvent.click(collapse)

    await waitFor(() => {
      expect(document.activeElement).toHaveAttribute("aria-label", "Expand")
      expect(container.querySelectorAll("[data-card-id]")).toHaveLength(2)
      expect(
        container.querySelector('[data-card-id="turnover"]')
      ).toBeInTheDocument()
    })
  })

  it("repairs saved layouts that place another item beside a full-row custom item", () => {
    const items: DashboardItem[] = [
      {
        id: "clock-activity",
        type: "custom",
        title: "Clock activity by location",
        x: 0,
        y: 0,
        itemHeight: 480,
        minItemHeight: 624,
        renderContent: () => <div>Map content</div>,
      },
      {
        id: "headcount",
        type: "metric",
        title: "Headcount",
        x: 6,
        y: 0,
        fetchData: async () => ({ value: 42 }),
      },
    ]

    const { container } = render(<DashboardGrid items={items} filters={{}} />)
    const rows = container.querySelectorAll<HTMLElement>("[data-dashboard-row]")

    expect(rows).toHaveLength(2)
    expect(rows[0]).toHaveStyle({ height: "624px" })
    expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(1)
    expect(rows[1].querySelectorAll("[data-card-id]")).toHaveLength(1)
  })

  it("restores a saved paired row for a responsive custom item", () => {
    const items: DashboardItem[] = [
      {
        id: "clock-activity",
        type: "custom",
        title: "Clock activity by location",
        allowRowSharing: true,
        x: 0,
        y: 0,
        itemHeight: 700,
        renderContent: () => <div>Map content</div>,
      },
      {
        id: "clock-events",
        type: "chart",
        title: "Clock events by workplace",
        x: 6,
        y: 0,
        itemHeight: 700,
        chart: { type: "bar" },
        fetchData: async () => ({ categories: [], series: [] }),
      },
    ]

    const { container } = render(<DashboardGrid items={items} filters={{}} />)
    const rows = container.querySelectorAll<HTMLElement>("[data-dashboard-row]")

    expect(rows).toHaveLength(1)
    expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(2)
    expect(rows[0]).toHaveStyle({ height: "700px" })
  })

  it("recomputes row height when itemHeight changes for existing items", async () => {
    const { container, rerender } = render(
      <DashboardGrid items={makeMetricItems(144)} filters={{}} />
    )

    expect(getDashboardRowHeight(container)).toBe("144px")

    rerender(<DashboardGrid items={makeMetricItems(288)} filters={{}} />)

    await waitFor(() => {
      expect(getDashboardRowHeight(container)).toBe("288px")
    })
  })

  it("recomputes collection row height when itemHeight changes after data loads", async () => {
    const { container, rerender } = render(
      <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
    )

    const collectionCard = container.querySelector('[data-card-id="expenses"]')
    if (!(collectionCard instanceof HTMLElement)) {
      throw new Error("Expected collection item to be rendered")
    }

    const collectionRow = collectionCard.parentElement
    if (!(collectionRow instanceof HTMLElement)) {
      throw new Error("Expected collection row to be rendered")
    }

    expect(collectionRow.style.height).toBe("480px")

    rerender(<DashboardGrid items={makeCollectionItems(960)} filters={{}} />)

    await waitFor(() => {
      expect(collectionRow.style.height).toBe("960px")
    })
  })

  it("grows a row when loaded content is taller than the configured itemHeight", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
      function getScrollHeight(this: HTMLElement) {
        if (this.dataset.cardId === "expenses") return 960
        return 0
      }
    )

    const { container } = render(
      <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
    )

    const collectionCard = container.querySelector('[data-card-id="expenses"]')
    if (!(collectionCard instanceof HTMLElement)) {
      throw new Error("Expected collection item to be rendered")
    }

    const collectionRow = collectionCard.parentElement
    if (!(collectionRow instanceof HTMLElement)) {
      throw new Error("Expected collection row to be rendered")
    }

    await waitFor(() => {
      expect(collectionRow.style.height).toBe("960px")
    })
  })

  it("forwards a collection widget's built-in Ask One target", async () => {
    const onAskAiTarget = vi.fn()
    const { container } = render(
      <AiChatStateProvider enabled>
        <DashboardGrid
          items={makeCollectionItems(480)}
          filters={{}}
          onAskAiTarget={onAskAiTarget}
        />
      </AiChatStateProvider>
    )
    const card = container.querySelector('[data-card-id="expenses"]')
    if (!(card instanceof HTMLElement)) {
      throw new Error("Expected collection item to be rendered")
    }

    await userEvent.click(
      within(card).getByRole("button", { name: "Other actions" })
    )
    await userEvent.click(
      await screen.findByRole("menuitem", { name: "Ask One" })
    )

    expect(onAskAiTarget).toHaveBeenCalledWith({
      id: "expenses",
      title: "Expenses",
      quote: { text: "Expenses" },
    })
  })

  describe("row resize", () => {
    function getResizeHandle(container: HTMLElement): HTMLElement {
      const handle = container.querySelector(".group\\/resize")
      if (!(handle instanceof HTMLElement)) {
        throw new Error("Expected a resize handle to be rendered")
      }
      return handle
    }

    function dragResizeHandle(handle: HTMLElement, deltaY: number) {
      fireEvent.mouseDown(handle, { clientY: 500 })
      fireEvent.mouseMove(document, { clientY: 500 + deltaY })
      fireEvent.mouseUp(document, { clientY: 500 + deltaY })
    }

    it("shrinks a row when dragging the handle up", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      expect(getDashboardRowHeight(container)).toBe("200px")

      dragResizeHandle(getResizeHandle(container), -50)

      expect(getDashboardRowHeight(container)).toBe("150px")
    })

    it("resizes a row with the keyboard and emits the layout", () => {
      const onLayoutChange = vi.fn()
      const { container } = render(
        <DashboardGrid
          items={makeMetricItems(200)}
          filters={{}}
          editMode
          onLayoutChange={onLayoutChange}
        />
      )

      const handle = getResizeHandle(container)
      expect(handle).toHaveAttribute("role", "separator")
      fireEvent.keyDown(handle, { key: "ArrowDown" })

      expect(getDashboardRowHeight(container)).toBe("224px")
      expect(onLayoutChange).toHaveBeenLastCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ id: "headcount", itemHeight: 224 }),
        ])
      )
    })

    it("resizes a row with one-click decrease and increase controls", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )
      const decrease = container.querySelector("[data-dashboard-row-decrease]")
      const increase = container.querySelector("[data-dashboard-row-increase]")
      if (
        !(decrease instanceof HTMLButtonElement) ||
        !(increase instanceof HTMLButtonElement)
      ) {
        throw new Error("Expected click resize controls")
      }

      fireEvent.click(decrease)
      expect(getDashboardRowHeight(container)).toBe("176px")

      fireEvent.click(increase)
      expect(getDashboardRowHeight(container)).toBe("200px")
    })

    it("does not shrink a restored row that is already above the resize cap", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(2000)} filters={{}} editMode />
      )
      const handle = getResizeHandle(container)

      fireEvent.keyDown(handle, { key: "ArrowDown" })

      expect(getDashboardRowHeight(container)).toBe("2000px")
      expect(handle).toHaveAttribute("aria-valuemax", "2000")
    })

    it("shrinks a row back after growing it", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(144)} filters={{}} editMode />
      )

      dragResizeHandle(getResizeHandle(container), 100)
      expect(getDashboardRowHeight(container)).toBe("244px")

      dragResizeHandle(getResizeHandle(container), -100)
      expect(getDashboardRowHeight(container)).toBe("144px")
    })

    it("clamps shrinking to the per-type minimum height", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      // Metric rows have a 120px minimum
      dragResizeHandle(getResizeHandle(container), -500)

      expect(getDashboardRowHeight(container)).toBe("120px")
    })

    it("clamps a custom row to its item-specific minimum height", () => {
      const items: DashboardItem[] = [
        {
          id: "clock-activity",
          type: "custom",
          title: "Clock activity by location",
          itemHeight: 700,
          minItemHeight: 624,
          renderContent: () => <div>Map content</div>,
        },
        {
          id: "headcount",
          type: "metric",
          title: "Headcount",
          fetchData: async () => ({ value: 42 }),
        },
      ]
      const { container } = render(
        <DashboardGrid items={items} filters={{}} editMode />
      )

      dragResizeHandle(getResizeHandle(container), -500)

      const row = container.querySelector<HTMLElement>("[data-dashboard-row]")
      expect(row).toHaveStyle({ height: "624px" })
    })

    it("clamps shrinking to overflowing content height", () => {
      vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
        function getScrollHeight(this: HTMLElement) {
          if (this.dataset.cardId === "headcount") return 180
          return 0
        }
      )

      const { container } = render(
        <DashboardGrid items={makeMetricItems(200)} filters={{}} editMode />
      )

      // Content genuinely overflows (scrollHeight 180 > clientHeight 0), so
      // the row cannot be dragged below 180px even though the metric type
      // minimum is 120px.
      dragResizeHandle(getResizeHandle(container), -500)

      expect(getDashboardRowHeight(container)).toBe("180px")
    })

    it("clamps shrinking a collection row to its table content height", () => {
      vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
        function getScrollHeight(this: HTMLElement) {
          if (this.dataset.cardId === "expenses") return 460
          return 0
        }
      )

      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )

      // The table's content needs 460px — dragging far up must stop there,
      // not at the 300px collection type minimum.
      dragResizeHandle(getResizeHandle(container), -400)

      const collectionCard = container.querySelector(
        '[data-card-id="expenses"]'
      )
      const collectionRow = collectionCard?.parentElement
      if (!(collectionRow instanceof HTMLElement)) {
        throw new Error("Expected collection row to be rendered")
      }
      expect(collectionRow.style.height).toBe("460px")
    })
  })

  describe("content overflow containment", () => {
    it("clips vertical overflow on collection rows so a too-short row can never paint over the next one", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
      )

      const collectionCard = container.querySelector(
        '[data-card-id="expenses"]'
      )
      const collectionRow = collectionCard?.parentElement
      if (!(collectionRow instanceof HTMLElement)) {
        throw new Error("Expected collection row to be rendered")
      }
      expect(collectionRow.style.overflowY).toBe("clip")
    })

    it("does not clip rows without collections", () => {
      const { container } = render(
        <DashboardGrid items={makeMetricItems(144)} filters={{}} />
      )

      const metricCard = container.querySelector('[data-card-id="headcount"]')
      const metricRow = metricCard?.parentElement
      if (!(metricRow instanceof HTMLElement)) {
        throw new Error("Expected metric row to be rendered")
      }
      expect(metricRow.style.overflowY).toBe("")
    })

    it("measures and grows without requestAnimationFrame (hidden tabs, effect churn)", async () => {
      vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockImplementation(
        function getScrollHeight(this: HTMLElement) {
          if (this.dataset.cardId === "expenses") return 960
          return 0
        }
      )
      // Simulate an environment where rAF never fires (backgrounded tab).
      vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 0)

      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
      )

      const collectionCard = container.querySelector(
        '[data-card-id="expenses"]'
      )
      const collectionRow = collectionCard?.parentElement
      if (!(collectionRow instanceof HTMLElement)) {
        throw new Error("Expected collection row to be rendered")
      }
      await waitFor(() => {
        expect(collectionRow.style.height).toBe("960px")
      })
    })
  })

  describe("pointer drag", () => {
    function rowOrder(container: HTMLElement): string[] {
      return Array.from(
        container.querySelectorAll<HTMLElement>("[data-dashboard-row]")
      ).map((row) =>
        Array.from(row.querySelectorAll<HTMLElement>("[data-card-id]"))
          .map((c) => c.dataset.cardId)
          .join("+")
      )
    }

    it("uses a plain (non-native-draggable) grip so the gesture never depends on native HTML5 drag", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      const card = container.querySelector('[data-card-id="expenses"]')
      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(card instanceof HTMLElement) || !(grip instanceof HTMLElement)) {
        throw new Error("Expected card and grip to be rendered")
      }
      // Nothing relies on native drag: neither the card nor the grip is
      // `draggable`. The grip drives a pointer gesture instead.
      expect(card.getAttribute("draggable")).toBeNull()
      expect(grip.getAttribute("draggable")).toBeNull()
    })

    it("announces the exact target observer to the chat drop path", () => {
      const onAskAiTarget = vi.fn()
      const onStart = vi.fn<(event: Event) => void>()
      window.addEventListener(WIDGET_DRAG_START, onStart)

      try {
        const { container } = render(
          <DashboardGrid
            items={makeCollectionItems(480)}
            filters={{}}
            editMode
            onAskAiTarget={onAskAiTarget}
          />
        )
        const grip = container.querySelector('[aria-label="Drag to reorder"]')
        if (!(grip instanceof HTMLElement)) {
          throw new Error("Expected a grip to be rendered")
        }

        fireEvent.pointerDown(grip, { button: 0 })
        fireEvent(
          document,
          new MouseEvent("pointermove", {
            clientX: 10,
            clientY: 10,
            bubbles: true,
          })
        )

        expect(onStart).toHaveBeenCalledTimes(1)
        const event = onStart.mock
          .calls[0][0] as CustomEvent<WidgetDragStartDetail>
        expect(event.detail).toEqual({
          id: "expenses",
          title: "Expenses",
          onAskAi: undefined,
          onAskAiTarget,
        })

        fireEvent(
          document,
          new MouseEvent("pointerup", {
            clientX: 10,
            clientY: 10,
            bubbles: true,
          })
        )
      } finally {
        window.removeEventListener(WIDGET_DRAG_START, onStart)
      }
    })

    it("reorders a widget via a pointerdown-on-grip → move → up gesture (no native drag)", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      expect(rowOrder(container)).toEqual(["expenses", "category-totals"])

      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLElement)) {
        throw new Error("Expected a grip to be rendered")
      }

      // Grab the first widget's grip, then drive the document-level gesture.
      // jsdom's synthetic PointerEvent drops clientX/Y, so dispatch native
      // MouseEvents (which carry them) for the move/up. jsdom rects are all
      // 0, so any clientY > 0 lands in the bottom third of the last row →
      // "insert after the last row".
      fireEvent.pointerDown(grip, { button: 0 })
      fireEvent(
        document,
        new MouseEvent("pointermove", {
          clientX: 0,
          clientY: 100,
          bubbles: true,
        })
      )
      fireEvent(
        document,
        new MouseEvent("pointerup", {
          clientX: 0,
          clientY: 100,
          bubbles: true,
        })
      )

      expect(rowOrder(container)).toEqual(["category-totals", "expenses"])
    })

    it("reorders a widget with arrow keys, preserves focus, and emits the layout", async () => {
      const onLayoutChange = vi.fn()
      const { container } = render(
        <DashboardGrid
          items={makeCollectionItems(480)}
          filters={{}}
          editMode
          onLayoutChange={onLayoutChange}
        />
      )
      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLButtonElement)) {
        throw new Error("Expected an operable reorder button")
      }

      fireEvent.keyDown(grip, { key: "ArrowDown" })

      expect(rowOrder(container)).toEqual(["category-totals", "expenses"])
      expect(onLayoutChange).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ id: "expenses", y: 10 }),
        ])
      )
      await waitFor(() =>
        expect(document.activeElement).toHaveAttribute(
          "data-reorder-id",
          "expenses"
        )
      )
      expect(container).toHaveTextContent("Move down: Expenses.")
    })

    it("reorders with one-click controls and preserves full-row packing", () => {
      const items: DashboardItem[] = [
        {
          id: "clock-activity",
          type: "custom",
          title: "Clock activity by location",
          renderContent: () => <div>Map content</div>,
        },
        ...makeMetricItems(144),
      ]
      const { container } = render(
        <DashboardGrid items={items} filters={{}} editMode />
      )
      const moveLater = container.querySelector(
        '[aria-label="Move down: Clock activity by location"]'
      )
      if (!(moveLater instanceof HTMLButtonElement)) {
        throw new Error("Expected a click reorder control")
      }

      fireEvent.click(moveLater)

      expect(rowOrder(container)).toEqual([
        "headcount",
        "clock-activity",
        "turnover",
      ])
      expect(rowOrder(container).every((row) => !row.includes("+"))).toBe(true)
    })

    it("keeps a full-row custom item isolated during pointer drag", () => {
      const items: DashboardItem[] = [
        {
          id: "clock-activity",
          type: "custom",
          title: "Clock activity by location",
          renderContent: () => <div>Map content</div>,
        },
        {
          id: "headcount",
          type: "metric",
          title: "Headcount",
          fetchData: async () => ({ value: 42 }),
        },
      ]
      const { container } = render(
        <DashboardGrid items={items} filters={{}} editMode />
      )
      const rows = container.querySelectorAll<HTMLElement>(
        "[data-dashboard-row]"
      )
      rows[0].getBoundingClientRect = () =>
        ({ top: 0, bottom: 300, height: 300 }) as DOMRect
      rows[1].getBoundingClientRect = () =>
        ({ top: 312, bottom: 456, height: 144 }) as DOMRect
      const grips = container.querySelectorAll<HTMLElement>(
        '[aria-label="Drag to reorder"]'
      )

      fireEvent.pointerDown(grips[1], { button: 0 })
      fireEvent(
        document,
        new MouseEvent("pointermove", {
          clientX: 500,
          clientY: 150,
          bubbles: true,
        })
      )
      fireEvent(
        document,
        new MouseEvent("pointerup", {
          clientX: 500,
          clientY: 150,
          bubbles: true,
        })
      )

      expect(rowOrder(container)).toEqual(["clock-activity", "headcount"])
    })

    it("does not reorder when the gesture ends over the AI chat drop zone", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      expect(rowOrder(container)).toEqual(["expenses", "category-totals"])

      // Stand in for the chat panel. jsdom reports every rect as 0, so the
      // zone has to report a real one for the containment check to mean
      // anything — that zeroed default is also why the reorder test above is
      // unaffected by this guard.
      const chat = document.createElement("div")
      chat.setAttribute("data-ai-chat-dropzone", "")
      chat.getBoundingClientRect = () =>
        ({ left: 400, right: 800, top: 0, bottom: 600 }) as unknown as DOMRect
      document.body.appendChild(chat)

      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLElement)) {
        throw new Error("Expected a grip to be rendered")
      }

      fireEvent.pointerDown(grip, { button: 0 })
      fireEvent(
        document,
        new MouseEvent("pointermove", {
          clientX: 500,
          clientY: 100,
          bubbles: true,
        })
      )
      fireEvent(
        document,
        new MouseEvent("pointerup", {
          clientX: 500,
          clientY: 100,
          bubbles: true,
        })
      )

      expect(rowOrder(container)).toEqual(["expenses", "category-totals"])
      chat.remove()
    })

    it("does not reorder when the gesture ends over a later AI chat drop zone", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      expect(rowOrder(container)).toEqual(["expenses", "category-totals"])

      const firstChat = document.createElement("div")
      firstChat.setAttribute("data-ai-chat-dropzone", "")
      firstChat.getBoundingClientRect = () =>
        ({ left: 800, right: 1000, top: 0, bottom: 600 }) as unknown as DOMRect
      document.body.appendChild(firstChat)

      const secondChat = document.createElement("div")
      secondChat.setAttribute("data-ai-chat-dropzone", "")
      secondChat.getBoundingClientRect = () =>
        ({ left: 400, right: 700, top: 0, bottom: 600 }) as unknown as DOMRect
      document.body.appendChild(secondChat)

      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLElement)) {
        throw new Error("Expected a grip to be rendered")
      }

      try {
        fireEvent.pointerDown(grip, { button: 0 })
        fireEvent(
          document,
          new MouseEvent("pointermove", {
            clientX: 500,
            clientY: 100,
            bubbles: true,
          })
        )
        fireEvent(
          document,
          new MouseEvent("pointerup", {
            clientX: 500,
            clientY: 100,
            bubbles: true,
          })
        )

        expect(rowOrder(container)).toEqual(["expenses", "category-totals"])
      } finally {
        firstChat.remove()
        secondChat.remove()
      }
    })

    it("uses the release position when the last move still pointed at the grid", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      const chat = document.createElement("div")
      chat.setAttribute("data-ai-chat-dropzone", "")
      chat.getBoundingClientRect = () =>
        ({ left: 400, right: 800, top: 0, bottom: 600 }) as unknown as DOMRect
      document.body.appendChild(chat)

      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLElement)) {
        throw new Error("Expected a grip to be rendered")
      }

      try {
        fireEvent.pointerDown(grip, { button: 0 })
        // Cache a real grid target first.
        fireEvent(
          document,
          new MouseEvent("pointermove", {
            clientX: 0,
            clientY: 100,
            bubbles: true,
          })
        )
        // No final pointermove reaches the document before release in chat.
        fireEvent(
          document,
          new MouseEvent("pointerup", {
            clientX: 500,
            clientY: 100,
            bubbles: true,
          })
        )

        expect(rowOrder(container)).toEqual(["expenses", "category-totals"])
      } finally {
        chat.remove()
      }
    })

    it("rechecks chat eligibility on release before suppressing the reorder", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} editMode />
      )
      const chat = document.createElement("div")
      chat.setAttribute("data-ai-chat-dropzone", "")
      chat.getBoundingClientRect = () =>
        ({ left: 400, right: 800, top: 0, bottom: 600 }) as unknown as DOMRect
      document.body.appendChild(chat)

      const grip = container.querySelector('[aria-label="Drag to reorder"]')
      if (!(grip instanceof HTMLElement)) {
        throw new Error("Expected a grip to be rendered")
      }

      try {
        fireEvent.pointerDown(grip, { button: 0, clientX: 0, clientY: 0 })
        fireEvent(
          document,
          new MouseEvent("pointermove", {
            clientX: 10,
            clientY: 0,
            bubbles: true,
          })
        )

        // The chat can become ineligible mid-gesture (clarifying, closing, or
        // switching surfaces). Its stale pointerdown snapshot must not swallow
        // a release that now belongs to the grid.
        chat.removeAttribute("data-ai-chat-dropzone")
        fireEvent(
          document,
          new MouseEvent("pointerup", {
            clientX: 500,
            clientY: 100,
            bubbles: true,
          })
        )

        expect(rowOrder(container)).toEqual(["category-totals", "expenses"])
      } finally {
        chat.remove()
      }
    })

    describe("announcing the drag", () => {
      const listen = () => {
        const started: (string | undefined)[] = []
        let ended = 0
        const onStart = (e: Event) =>
          started.push((e as CustomEvent<{ title?: string }>).detail?.title)
        const onEnd = () => {
          ended += 1
        }
        window.addEventListener("f0:widget-drag-start", onStart)
        window.addEventListener("f0:widget-drag-end", onEnd)
        return {
          started,
          endCount: () => ended,
          stop: () => {
            window.removeEventListener("f0:widget-drag-start", onStart)
            window.removeEventListener("f0:widget-drag-end", onEnd)
          },
        }
      }

      const grabFirstGrip = (container: HTMLElement) => {
        const grip = container.querySelector('[aria-label="Drag to reorder"]')
        if (!(grip instanceof HTMLElement)) {
          throw new Error("Expected a grip to be rendered")
        }
        fireEvent.pointerDown(grip, { button: 0, clientX: 0, clientY: 0 })
        fireEvent(
          document,
          new MouseEvent("pointermove", {
            clientX: 10,
            clientY: 0,
            bubbles: true,
          })
        )
      }

      it("does not announce a drag for a plain grip click", () => {
        const { container } = render(
          <DashboardGrid
            items={makeCollectionItems(480)}
            filters={{}}
            editMode
          />
        )
        const events = listen()
        const grip = container.querySelector('[aria-label="Drag to reorder"]')
        if (!(grip instanceof HTMLElement)) {
          throw new Error("Expected a grip to be rendered")
        }

        try {
          fireEvent.pointerDown(grip, { button: 0, clientX: 0, clientY: 0 })
          fireEvent(
            document,
            new MouseEvent("pointerup", {
              clientX: 0,
              clientY: 0,
              bubbles: true,
            })
          )

          expect(events.started).toEqual([])
          expect(events.endCount()).toBe(0)
          expect(rowOrder(container)).toEqual(["expenses", "category-totals"])
        } finally {
          events.stop()
        }
      })

      it("stays quiet for a widget with no title", () => {
        const items = makeCollectionItems(480).map((item) => ({
          ...item,
          title: "",
        }))
        const { container } = render(
          <DashboardGrid items={items} filters={{}} editMode />
        )
        const events = listen()

        try {
          grabFirstGrip(container)
          // The title is the quote. Announcing an empty one invites a drop
          // that could only do nothing.
          expect(events.started).toEqual([])
        } finally {
          events.stop()
        }
      })

      it("announces the widget identity and host-owned Ask One action", () => {
        const onAskAi = vi.fn()
        const details: Array<{
          id: string
          title: string
          onAskAi?: typeof onAskAi
        }> = []
        const onStart = (event: Event) => {
          details.push(
            (
              event as CustomEvent<{
                id: string
                title: string
                onAskAi?: typeof onAskAi
              }>
            ).detail
          )
        }
        window.addEventListener("f0:widget-drag-start", onStart)
        const { container } = render(
          <DashboardGrid
            items={makeCollectionItems(480)}
            filters={{}}
            editMode
            onAskAi={onAskAi}
          />
        )

        try {
          grabFirstGrip(container)
          expect(details).toEqual([
            { id: "expenses", title: "Expenses", onAskAi },
          ])
          fireEvent(
            document,
            new MouseEvent("pointercancel", { bubbles: true })
          )
        } finally {
          window.removeEventListener("f0:widget-drag-start", onStart)
        }
      })

      it("retracts the invitation when the pointer is cancelled", () => {
        const { container } = render(
          <DashboardGrid
            items={makeCollectionItems(480)}
            filters={{}}
            editMode
          />
        )
        const events = listen()

        try {
          grabFirstGrip(container)
          expect(events.started).toEqual(["Expenses"])

          // No `pointerup` follows a cancel, so without handling it the chat
          // would keep a full-panel drop overlay up for good.
          fireEvent(
            document,
            new MouseEvent("pointercancel", { bubbles: true })
          )

          expect(events.endCount()).toBe(1)
          // A cancelled gesture is not a drop: the order must not change.
          expect(rowOrder(container)).toEqual(["expenses", "category-totals"])
        } finally {
          events.stop()
        }
      })

      it("retracts the invitation when the grid unmounts mid-drag", () => {
        const { container, unmount } = render(
          <DashboardGrid
            items={makeCollectionItems(480)}
            filters={{}}
            editMode
          />
        )
        const events = listen()

        try {
          grabFirstGrip(container)
          unmount()

          // Otherwise the announcement outlives the grid that made it.
          expect(events.endCount()).toBe(1)
        } finally {
          events.stop()
        }
      })
    })

    it("renders no grip when not in edit mode", () => {
      const { container } = render(
        <DashboardGrid items={makeCollectionItems(480)} filters={{}} />
      )
      expect(
        container.querySelector('[aria-label="Drag to reorder"]')
      ).toBeNull()
    })
  })
})
