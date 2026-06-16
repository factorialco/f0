import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { CategoryBarCell, CategoryBarValue } from "./categoryBar"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("CategoryBarCell", () => {
  it("renders fallback dash when items is empty", () => {
    const args: CategoryBarValue = { items: [] }

    render(CategoryBarCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
    expect(screen.getByText("–")).toHaveAttribute(
      "data-cell-type",
      "categoryBar"
    )
  })

  it("renders fallback dash when all values are zero", () => {
    const args: CategoryBarValue = {
      items: [
        { label: "A", value: 0 },
        { label: "B", value: 0 },
      ],
    }

    render(CategoryBarCell(args, defaultMeta))

    expect(screen.getByText("–")).toBeInTheDocument()
  })

  it("renders one segment per non-zero item", () => {
    const args: CategoryBarValue = {
      items: [
        { label: "Female", value: 20 },
        { label: "Male", value: 55 },
        { label: "Non-binary", value: 25 },
      ],
    }

    const { container } = render(CategoryBarCell(args, defaultMeta))

    expect(
      container.querySelector('[data-cell-type="categoryBar"]')
    ).toBeInTheDocument()
    const segments = container.querySelectorAll('[role="img"]')
    expect(segments.length).toBe(3)
  })

  it("uses each segment label as its accessible title", () => {
    const args: CategoryBarValue = {
      items: [{ label: "Female", value: 100 }],
    }

    const { container } = render(CategoryBarCell(args, defaultMeta))

    expect(
      container.querySelector('[role="img"][title="Female"]')
    ).toBeInTheDocument()
  })

  it("renders a legend when legend is true", () => {
    const args: CategoryBarValue = {
      legend: true,
      items: [
        { label: "Female", value: 20 },
        { label: "Male", value: 80 },
      ],
    }

    render(CategoryBarCell(args, defaultMeta))

    expect(screen.getByRole("list")).toBeInTheDocument()
    expect(screen.getAllByRole("listitem").length).toBe(2)
  })
})
