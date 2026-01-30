import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import {
  HourDistributionCell,
  HourDistributionCellValue,
} from "./hourDistribution"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("HourDistributionCell", () => {
  it("renders fallback dash when dataPoints is empty", () => {
    const args: HourDistributionCellValue = { dataPoints: [] }

    render(HourDistributionCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
    expect(screen.getByText("–").closest("[data-cell-type]")).toHaveAttribute(
      "data-cell-type",
      "hourDistribution"
    )
  })

  it("renders bar series for one day with minutes only", () => {
    const args: HourDistributionCellValue = {
      dataPoints: [{ date: "2025-12-19", minutes: 480 }],
    }

    const { container } = render(HourDistributionCell(args, defaultMeta))

    const barSeriesWrapper = container.querySelector(
      '[data-cell-type="barSeries"]'
    )
    expect(barSeriesWrapper).toBeInTheDocument()
    const bar = container.querySelector('[role="img"][aria-label*="8h"]')
    expect(bar).toBeInTheDocument()
  })

  it("renders bar series with plannedMinutes (under/over)", () => {
    const args: HourDistributionCellValue = {
      dataPoints: [
        { date: "2025-12-16", minutes: 360, plannedMinutes: 480 },
        { date: "2025-12-17", minutes: 540, plannedMinutes: 480 },
      ],
    }

    const { container } = render(HourDistributionCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="barSeries"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[role="img"][aria-label*="6h"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[role="img"][aria-label*="9h"]')
    ).toBeInTheDocument()
  })

  it("renders empty day (0 minutes) with bar series empty bar", () => {
    const args: HourDistributionCellValue = {
      dataPoints: [{ date: "2025-12-18", minutes: 0 }],
    }

    const { container } = render(HourDistributionCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="barSeries"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[role="img"][aria-label*="0h"]')
    ).toBeInTheDocument()
  })
})
