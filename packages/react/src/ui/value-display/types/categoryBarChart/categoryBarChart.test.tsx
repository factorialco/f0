import { fireEvent, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

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

  it("uses a single tooltip trigger for the whole bar, not one per segment", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 10 },
        { name: "Hybrid", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    // Radix marks its trigger with data-state; there must be exactly one for
    // the whole bar so hovering any segment (or the gaps) opens the same tooltip
    expect(container.querySelectorAll("[data-state]").length).toBe(1)
  })

  it("lists every segment in the tooltip, not only the hovered one", async () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 10 },
        { name: "Hybrid", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const trigger = container.querySelector("[data-state]") as HTMLElement
    fireEvent.focus(trigger)

    const content = await waitFor(() => {
      const el = document.querySelector(
        "[data-radix-popper-content-wrapper] [data-state]"
      )
      expect(el).toBeInTheDocument()
      return el as HTMLElement
    })

    // Radix appends a visually-hidden copy of the content (a <span>) for screen
    // readers, so read the visible rows only — one <div> per segment.
    const rows = Array.from(content.children)
      .filter((child) => child.tagName === "DIV")
      .map((row) =>
        Array.from(row.querySelectorAll("span")).map((span) => span.textContent)
      )

    expect(rows).toEqual([
      ["Office", "15 (50%)"],
      ["Remote", "10 (33.3%)"],
      ["Hybrid", "5 (16.7%)"],
    ])
  })

  it("does not open a tooltip when hideTooltip is true", async () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 5 },
      ],
      hideTooltip: true,
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const trigger = container.querySelector("[data-state]") as HTMLElement
    fireEvent.focus(trigger)

    // Wait for the trigger to actually reach the open state before asserting no
    // content rendered — asserting absence immediately would pass even if the
    // tooltip opened a moment later.
    await waitFor(() => {
      expect(trigger.getAttribute("data-state")).not.toBe("closed")
    })
    expect(
      document.querySelector("[data-radix-popper-content-wrapper]")
    ).toBeNull()
  })

  it("dims every row except the segment under the pointer", async () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 10 },
        { name: "Hybrid", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    const trigger = container.querySelector("[data-state]") as HTMLElement
    fireEvent.focus(trigger)

    const content = await waitFor(() => {
      const el = document.querySelector(
        "[data-radix-popper-content-wrapper] [data-state]"
      )
      expect(el).toBeInTheDocument()
      return el as HTMLElement
    })

    const rowOpacities = () =>
      Array.from(content.children)
        .filter((child) => child.tagName === "DIV")
        .map((row) => row.className.includes("opacity-50"))

    // Opened by focus: no segment is under the pointer, so no row is dimmed
    expect(rowOpacities()).toEqual([false, false, false])

    const segments = container.querySelectorAll(
      '[role="img"][aria-label*="%"]'
    ) as NodeListOf<HTMLElement>
    fireEvent.mouseEnter(segments[1])

    await waitFor(() => {
      expect(rowOpacities()).toEqual([true, false, true])
    })

    fireEvent.mouseLeave(
      container.querySelector(".flex.h-2") as unknown as HTMLElement
    )

    await waitFor(() => {
      expect(rowOpacities()).toEqual([false, false, false])
    })
  })

  it("enlarges the hover target beyond the bar inside a table cell", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [{ name: "Office", value: 15 }],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    // The bar is 8px in a line-height-tall wrapper, but the table cell around it
    // is roughly a row high. Padding grows the hit box and the matching negative
    // margin keeps the layout box — and the bar's alignment — unchanged.
    const trigger = container.querySelector(
      '[data-cell-type="categoryBarChart"]'
    ) as HTMLElement
    expect(trigger).toHaveClass("box-content", "py-2.5", "-my-2.5")
  })

  it("keeps the whole cell hoverable, not just the segments", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    // The trigger is the cell wrapper, so it needs pointer events re-enabled
    // too — OneTable renders cell content inside a pointer-events-none wrapper.
    expect(
      container.querySelector('[data-cell-type="categoryBarChart"]')
    ).toHaveClass("pointer-events-auto")
  })

  it("keeps the bar as a single tab stop instead of one per segment", () => {
    const args: CategoryBarChartCellValue = {
      dataPoints: [
        { name: "Office", value: 15 },
        { name: "Remote", value: 10 },
        { name: "Hybrid", value: 5 },
      ],
    }

    const { container } = render(CategoryBarChartCell(args, defaultMeta))

    expect(container.querySelectorAll('[tabindex="0"]').length).toBe(1)
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
