import { waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type { DashboardMetricItem } from "../types"

import { MetricItem } from "../components/MetricItem/MetricItem"

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
})
