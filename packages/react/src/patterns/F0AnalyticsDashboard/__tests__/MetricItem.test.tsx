import { waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"
import { MetricItem, MetricValue } from "../components/MetricItem/MetricItem"
import type { DashboardMetricItem } from "../types"

const containerSize = vi.hoisted(() => ({ width: 320, height: 0 }))

vi.mock("@/kits/F0DataChart/utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

/**
 * The scrolling body of the widget, found by the property under test rather
 * than by walking a fixed number of parents — the markup inside it changes
 * when a metric carries a comparison.
 */
const metricBox = (value: HTMLElement) => value.closest(".overflow-auto")

const metricItem = (
  overrides: Partial<DashboardMetricItem> = {}
): DashboardMetricItem => ({
  id: "avg-salary",
  type: "metric",
  title: "Average salary",
  fetchData: () => Promise.resolve({ value: 46272.72 }),
  ...overrides,
})

describe("MetricItem", () => {
  beforeEach(() => {
    containerSize.width = 320
    containerSize.height = 0
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("formats with the built-in preset when no valueFormatter is given", async () => {
    render(
      <MetricItem
        item={metricItem({ format: { type: "currency", currency: "EUR" } })}
        filters={{}}
      />
    )

    await waitFor(() => expect(screen.getByText("€46,273")).toBeInTheDocument())
  })

  it("prefers valueFormatter over format presets", async () => {
    render(
      <MetricItem
        item={metricItem({
          format: { type: "currency", currency: "EUR" },
          valueFormatter: (value) =>
            new Intl.NumberFormat("ca", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(value),
        })}
        filters={{}}
      />
    )

    await waitFor(() =>
      expect(screen.getByText("46.273 €")).toBeInTheDocument()
    )
  })

  describe("comparison", () => {
    it("states the reference figure under the value, in the same units", async () => {
      render(
        <MetricItem
          item={metricItem({
            format: { type: "percent" },
            decimals: 1,
            fetchData: () =>
              Promise.resolve({
                value: 16.4,
                comparison: { value: 13.5, label: "Peer median" },
              }),
          })}
          filters={{}}
        />
      )

      await waitFor(() => expect(screen.getByText("16.4%")).toBeInTheDocument())
      expect(screen.getByText("Peer median 13.5%")).toBeInTheDocument()
    })

    it("formats it with the consumer's own formatter, like the value", async () => {
      render(
        <MetricItem
          item={metricItem({
            valueFormatter: (value) => `${value.toFixed(1)} pp`,
            fetchData: () =>
              Promise.resolve({
                value: 16.4,
                comparison: { value: 13.5, label: "Peers" },
              }),
          })}
          filters={{}}
        />
      )

      await waitFor(() =>
        expect(screen.getByText("16.4 pp")).toBeInTheDocument()
      )
      expect(screen.getByText("Peers 13.5 pp")).toBeInTheDocument()
    })

    // A comparison is a different quantity from this metric's own past, so it
    // must never borrow the trend arrow: an arrow would say the number moved.
    it("draws no trend arrow for it", async () => {
      const { container } = render(
        <MetricItem
          item={metricItem({
            fetchData: () =>
              Promise.resolve({
                value: 16.4,
                comparison: { value: 13.5, label: "Peer median" },
              }),
          })}
          filters={{}}
        />
      )

      await waitFor(() =>
        expect(screen.getByText("Peer median 14")).toBeInTheDocument()
      )
      expect(container.querySelectorAll("svg")).toHaveLength(0)
    })

    it("shows both when a metric carries a comparison and a previous value", async () => {
      render(
        <MetricItem
          item={metricItem({
            fetchData: () =>
              Promise.resolve({
                value: 100,
                previousValue: 80,
                comparison: { value: 90, label: "Peer median" },
              }),
          })}
          filters={{}}
        />
      )

      await waitFor(() => expect(screen.getByText("100")).toBeInTheDocument())
      expect(screen.getByText("25.0%")).toBeInTheDocument()
      expect(screen.getByText("Peer median 90")).toBeInTheDocument()
    })

    it("renders nothing extra when a metric carries none", async () => {
      render(<MetricItem item={metricItem()} filters={{}} />)

      await waitFor(() =>
        expect(screen.getByText("46,273")).toBeInTheDocument()
      )
      expect(screen.queryByText(/Peer/)).not.toBeInTheDocument()
    })
  })

  it("keeps the value bottom-left when the body is exactly 220px tall", async () => {
    containerSize.height = 220

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(metricBox(value)).toHaveClass("items-end")
    expect(metricBox(value)).not.toHaveClass("items-center", "justify-center")
  })

  it("centers the value when the body grows beyond 220px", async () => {
    containerSize.height = 221

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(metricBox(value)).toHaveClass("items-center")
    expect(metricBox(value)).not.toHaveClass("justify-center")
    // The centering lives on the box that holds the value, whatever is
    // stacked inside it.
    expect(value.closest(".mx-auto")).not.toBeNull()
  })

  it.each([
    {
      value: 123,
      previousValue: 100,
      direction: "+23.0%",
    },
    {
      value: 77,
      previousValue: 100,
      direction: "−23.0%",
    },
  ])(
    "announces trend direction as $direction",
    async ({ value, previousValue, direction }) => {
      render(
        <MetricItem
          item={metricItem({
            fetchData: () => Promise.resolve({ value, previousValue }),
          })}
          filters={{}}
        />
      )

      expect(await screen.findByText(direction)).toBeInTheDocument()
    }
  )

  it("makes an overflowing metric keyboard-scrollable", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(500)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(200)

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(metricBox(value)).toHaveAttribute("tabindex", "0")
  })

  it("keeps a metric that fits out of the tab order", async () => {
    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(metricBox(value)).not.toHaveAttribute("tabindex")
  })

  it("makes a vertically overflowing metric keyboard-scrollable", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "scrollHeight", "get").mockReturnValue(300)
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(200)

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(metricBox(value)).toHaveAttribute("tabindex", "0")
  })

  it("rechecks overflow when a trend changes without changing the value", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(
      function (this: HTMLElement) {
        return this.textContent?.includes("+100.0%") ? 500 : 200
      }
    )
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(320)

    const { rerender } = render(<MetricValue value="100" />)

    const value = await screen.findByText("100")
    const container = metricBox(value)
    expect(container).not.toHaveAttribute("tabindex")

    rerender(
      <MetricValue value="100" trend={{ percent: 100, direction: "up" }} />
    )

    await screen.findByText("+100.0%")
    const currentContainer = metricBox(screen.getByText("100"))
    expect(currentContainer).toBe(container)
    await waitFor(() =>
      expect(currentContainer).toHaveAttribute("tabindex", "0")
    )
  })

  it("rechecks overflow when the same metric is resized", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(500)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(
      () => containerSize.width
    )
    containerSize.width = 600

    const { rerender } = render(<MetricValue value="100" />)

    const container = metricBox(screen.getByText("100"))
    expect(container).not.toHaveAttribute("tabindex")

    containerSize.width = 320
    rerender(<MetricValue value="100" />)
    await waitFor(() => expect(container).toHaveAttribute("tabindex", "0"))

    containerSize.width = 600
    rerender(<MetricValue value="100" />)
    await waitFor(() => expect(container).not.toHaveAttribute("tabindex"))
  })
})
