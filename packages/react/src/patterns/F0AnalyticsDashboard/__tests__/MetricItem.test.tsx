import { waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type { DashboardMetricItem } from "../types"

import { MetricItem } from "../components/MetricItem/MetricItem"

const containerSize = vi.hoisted(() => ({ width: 320, height: 0 }))

vi.mock("@/kits/F0DataChart/utils/useContainerSize", () => ({
  useContainerSize: () => containerSize,
}))

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

  it("keeps the value bottom-left when the body is exactly 220px tall", async () => {
    containerSize.height = 220

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(value.parentElement?.parentElement).toHaveClass("items-end")
    expect(value.parentElement?.parentElement).not.toHaveClass(
      "items-center",
      "justify-center"
    )
  })

  it("centers the value when the body grows beyond 220px", async () => {
    containerSize.height = 221

    render(<MetricItem item={metricItem()} filters={{}} />)

    const value = await screen.findByText("46,273")
    expect(value.parentElement?.parentElement).toHaveClass("items-center")
    expect(value.parentElement?.parentElement).not.toHaveClass("justify-center")
    expect(value.parentElement).toHaveClass("mx-auto")
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
})
