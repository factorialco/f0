import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import {
  CategoryBarChartCell,
  CategoryBarChartCellValue,
} from "./categoryBarChart"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("CategoryBarChartCell", () => {
  it("renders fallback dash when dataPoints is empty", () => {
    const args: CategoryBarChartCellValue = { dataPoints: [] }

    render(CategoryBarChartCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
    expect(screen.getByText("–").closest("[data-cell-type]")).toHaveAttribute(
      "data-cell-type",
      "categoryBarChart"
    )
  })

  it("renders fallback dash when dataPoints is undefined", () => {
    render(
      CategoryBarChartCell(
        { dataPoints: undefined as unknown as [] },
        defaultMeta
      )
    )

    expect(screen.getByText("–")).toBeInTheDocument()
  })

  it("renders segments for each data point", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Female", value: 12 },
        { name: "Male", value: 8 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="categoryBarChart"]')
    ).toBeInTheDocument()
    const segments =
      container.querySelectorAll('[role="img"][aria-label]') ?? []
    const segmentLabels = Array.from(segments)
      .map((s) => s.getAttribute("aria-label"))
      .filter((l) => l?.includes("%"))
    expect(segmentLabels.length).toBe(2)
  })

  it("renders fallback dash when total is zero", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "A", value: 0 },
        { name: "B", value: 0 },
      ],
    }

    render(CategoryBarChartCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
  })

  it("skips segments with zero value", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Has", value: 10 },
        { name: "Empty", value: 0 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBe(1)
  })

  it("formats percentage correctly in aria-label", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(
      container.querySelector('[aria-label="Office: 15 (75%)"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[aria-label="Remote: 5 (25%)"]')
    ).toBeInTheDocument()
  })
})
