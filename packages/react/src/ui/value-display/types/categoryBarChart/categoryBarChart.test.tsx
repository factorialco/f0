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

  it("applies token color when color is provided", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [{ name: "Test", value: 10, color: "categorical-3" }],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const segment = container.querySelector('[role="img"][aria-label*="%"]')
    expect(segment).toBeInTheDocument()
    expect(segment?.getAttribute("style")).toContain("background-color")
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

  it("renders a skeleton instead of the dash while loading", () => {
    const args: CategoryBarChartCellValue = { dataPoints: [], loading: true }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
    expect(screen.queryByText("–")).not.toBeInTheDocument()
    expect(
      container.querySelector('[data-cell-type="categoryBarChart"]')
    ).toHaveAttribute("aria-busy", "true")
  })

  it("keeps the skeleton the same size as the loaded bar (h-2 w-full)", () => {
    const args: CategoryBarChartCellValue = { dataPoints: [], loading: true }

    render(CategoryBarChartCell(args, defaultMeta))

    expect(screen.getByTestId("skeleton")).toHaveClass("h-2", "w-full")
  })

  it("prioritises loading over available data points", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [{ name: "Office", value: 15 }],
      loading: true,
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
    expect(
      container.querySelector('[role="img"][aria-label*="%"]')
    ).not.toBeInTheDocument()
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
