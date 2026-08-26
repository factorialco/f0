import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { CompanyCell, CompanyCellValue } from "./company"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("CompanyCell", () => {
  beforeEach(() => {
    class MockResizeObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    window.ResizeObserver = MockResizeObserver as typeof ResizeObserver
  })

  afterEach(() => {
    delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
  })

  it("renders the company name", () => {
    const args: CompanyCellValue = { name: "Factorial" }

    render(CompanyCell(args, defaultMeta))

    expect(screen.getByText("Factorial")).toBeInTheDocument()
  })

  it("truncates a name wider than the cell instead of clipping it mid-character", () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const args: CompanyCellValue = {
      name: "Factorial AI handles the paperwork, you handle the people.",
    }

    render(CompanyCell(args, defaultMeta))

    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()
  })

  it("shows a tooltip with the full name when it overflows", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const args: CompanyCellValue = {
      name: "Factorial AI handles the paperwork, you handle the people.",
    }

    render(CompanyCell(args, defaultMeta))

    await userEvent.hover(screen.getByTestId("one-ellipsis"))

    expect(
      await screen.findByRole("tooltip", {
        name: "Factorial AI handles the paperwork, you handle the people.",
      })
    ).toBeInTheDocument()
  })

  it("lets the name shrink instead of overflowing its fixed-width container", () => {
    const args: CompanyCellValue = { name: "Factorial" }

    render(CompanyCell(args, defaultMeta))

    expect(screen.getByText("Factorial").closest("div")).toHaveClass(
      "min-w-0",
      "flex-1"
    )
  })
})
