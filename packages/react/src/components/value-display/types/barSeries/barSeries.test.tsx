import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { BarSeriesCell, BarSeriesCellValue } from "./barSeries"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("BarSeriesCell", () => {
  it("renders fallback dash when dataPoints is empty", () => {
    const args: BarSeriesCellValue = { dataPoints: [] }

    render(BarSeriesCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
    expect(screen.getByText("–").closest("[data-cell-type]")).toHaveAttribute(
      "data-cell-type",
      "barSeries"
    )
  })

  it("renders fallback dash when dataPoints is undefined", () => {
    render(
      BarSeriesCell({ dataPoints: undefined as unknown as [] }, defaultMeta)
    )

    expect(screen.getByText("–")).toBeInTheDocument()
  })

  it("renders bars with only value (no secondaryValue)", () => {
    const args: BarSeriesCellValue = {
      dataPoints: [
        { label: "A", value: 50 },
        { label: "B", value: 80 },
      ],
    }

    const { container } = render(BarSeriesCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="barSeries"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[aria-label="Bar series"]')
    ).toBeInTheDocument()
    const barSeriesEl = container.querySelector('[data-cell-type="barSeries"]')
    const bars = barSeriesEl?.querySelectorAll(':scope > * [role="img"]') ?? []
    expect(bars.length).toBe(2)
  })

  it("renders with secondaryValue (under/over semantics)", () => {
    const args: BarSeriesCellValue = {
      dataPoints: [
        { label: "Under", value: 30, secondaryValue: 60 },
        { label: "Over", value: 80, secondaryValue: 60 },
      ],
    }

    const { container } = render(BarSeriesCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="barSeries"]')
    ).toBeInTheDocument()
    const barSeriesEl = container.querySelector('[data-cell-type="barSeries"]')
    const bars = barSeriesEl?.querySelectorAll(':scope > * [role="img"]') ?? []
    expect(bars.length).toBe(2)
  })

  it("renders empty bar (value 0) with grey bottom border", () => {
    const args: BarSeriesCellValue = {
      dataPoints: [
        { label: "Has", value: 40 },
        { label: "Empty", value: 0 },
      ],
    }

    const { container } = render(BarSeriesCell(args, defaultMeta))

    const wrapper = container.querySelector('[data-cell-type="barSeries"]')
    expect(wrapper).toBeInTheDocument()
    const emptyBar = container.querySelector(".bg-f1-border-secondary")
    expect(emptyBar).toBeInTheDocument()
  })

  it("uses custom formatters in tooltip when provided", async () => {
    const args: BarSeriesCellValue = {
      dataPoints: [{ label: "x", value: 10 }],
      formatLabel: (l) => `Label: ${l}`,
      formatValue: (v) => `${v} units`,
    }

    const { container } = render(BarSeriesCell(args, defaultMeta))

    const bar = container.querySelector('[aria-label="Label: x – 10 units"]')
    expect(bar).toBeInTheDocument()
  })
})
