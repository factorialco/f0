import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { CompoundCell, CompoundCellValue } from "./compound"

const tableMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

const listMeta: ValueDisplayRendererContext = {
  visualization: "list",
}

describe("CompoundCell", () => {
  it("renders all segments with default separator", () => {
    const args: CompoundCellValue = {
      segments: [
        { type: "text", value: "A" },
        { type: "text", value: "B" },
        { type: "text", value: "C" },
      ],
    }

    const { container } = render(CompoundCell(args, tableMeta))
    const wrapper = container.querySelector('[data-cell-type="compound"]')

    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveTextContent("A / B / C")
  })

  it("renders custom separators", () => {
    const args: CompoundCellValue = {
      separator: " | ",
      segments: [
        { type: "text", value: "Current" },
        { type: "text", value: "Target" },
      ],
    }

    const { container } = render(CompoundCell(args, tableMeta))
    const wrapper = container.querySelector('[data-cell-type="compound"]')

    expect(wrapper).toHaveTextContent("Current | Target")
  })

  it("applies semantic tone classes per segment", () => {
    const args: CompoundCellValue = {
      segments: [
        { type: "text", value: "Positive", tone: "positive" },
        { type: "text", value: "Critical", tone: "critical" },
        { type: "text", value: "Neutral" },
      ],
    }

    render(CompoundCell(args, tableMeta))

    expect(screen.getByText("Positive")).toHaveClass(
      "text-f1-foreground-positive"
    )
    expect(screen.getByText("Critical")).toHaveClass(
      "text-f1-foreground-critical"
    )
    expect(screen.getByText("Neutral")).toHaveClass("text-f1-foreground")
  })

  it("formats number and amount segments", () => {
    const args: CompoundCellValue = {
      segments: [
        { type: "number", value: -12.345, decimalPlaces: 1, units: "%" },
        {
          type: "amount",
          value: 2500.4,
          currency: { symbol: "EUR", decimalPlaces: 0 },
        },
        {
          type: "amount",
          value: 99.5,
          currency: { symbol: "$", symbolPosition: "left", decimalPlaces: 1 },
        },
      ],
    }

    const { container } = render(CompoundCell(args, tableMeta))
    const wrapper = container.querySelector('[data-cell-type="compound"]')

    expect(wrapper).toHaveTextContent("-12.3% / 2500 EUR / $ 99.5")
  })

  it("renders placeholders and missing values as secondary by default", () => {
    const args: CompoundCellValue = {
      segments: [
        { type: "text", value: undefined, placeholder: "N/A" },
        { type: "number", value: undefined },
      ],
    }

    render(CompoundCell(args, tableMeta))

    expect(screen.getByText("N/A")).toHaveClass("text-f1-foreground-secondary")
    expect(screen.getByText("-")).toHaveClass("text-f1-foreground-secondary")
  })

  it("renders fallback when there are no segments", () => {
    const args: CompoundCellValue = {
      segments: [],
    }

    render(CompoundCell(args, tableMeta))

    const fallback = screen.getByText("-")
    expect(fallback).toHaveAttribute("data-cell-type", "compound")
  })

  it("keeps table right alignment and list natural flow", () => {
    const args: CompoundCellValue = {
      segments: [{ type: "text", value: "A" }],
    }

    const tableRender = render(CompoundCell(args, tableMeta))
    const tableWrapper = tableRender.container.querySelector(
      '[data-cell-type="compound"]'
    )
    expect(tableWrapper).toHaveClass("justify-end")

    tableRender.unmount()

    const listRender = render(CompoundCell(args, listMeta))
    const listWrapper = listRender.container.querySelector(
      '[data-cell-type="compound"]'
    )
    expect(listWrapper).not.toHaveClass("justify-end")
  })
})
