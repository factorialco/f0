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
    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBe(2)
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

  it("applies a base-color token when color is provided", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [{ name: "Test", value: 10, color: "viridian" }],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segment = container.querySelector('[role="img"][aria-label*="%"]')
    expect(segment).toBeInTheDocument()
    expect(segment?.getAttribute("style")).toContain("background-color")
  })

  it("supports the location base-color tokens (viridian / yellow / barbie)", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Work from home", value: 5, color: "viridian" },
        { name: "Office", value: 3, color: "yellow" },
        { name: "Business trip", value: 2, color: "barbie" },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBe(3)
    segments.forEach((segment) => {
      expect(segment.getAttribute("style")).toContain("background-color")
    })
  })

  it("still supports legacy kits/Charts tokens (categorical-* / feedback-*)", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "A", value: 5, color: "categorical-3" },
        { name: "B", value: 3, color: "feedback-positive" },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBe(2)
    // legacy tokens resolve to a CSS var
    expect(segments[0]?.getAttribute("style")).toContain(
      "--chart-categorical-3"
    )
    expect(segments[1]?.getAttribute("style")).toContain(
      "--chart-feedback-positive"
    )
  })

  it("still renders segments when hideTooltip is true", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [{ name: "Visible", value: 10 }],
      hideTooltip: true,
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(
      container.querySelector('[role="img"][aria-label*="%"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-cell-type="categoryBarChart"]')
    ).toBeInTheDocument()
  })

  it("enables pointer events on segments so the tooltip works inside a clickable table cell", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Female", value: 12 },
        { name: "Male", value: 8 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBeGreaterThan(0)
    segments.forEach((segment) => {
      expect(segment).toHaveClass("pointer-events-auto")
    })
  })

  it("handles duplicate names with unique keys", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Other", value: 5 },
        { name: "Other", value: 3 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segments = container.querySelectorAll('[role="img"][aria-label*="%"]')
    expect(segments.length).toBe(2)
  })
})
