import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ValueDisplayRendererContext } from "../../renderers"
import { CompanyCell, CompanyCellValue } from "./company"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

const LONG_NAME = "Factorial AI handles the paperwork, you handle the people."

/** Makes the name measure wider than the cell it sits in. */
const overflowTheCell = () => {
  Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
    configurable: true,
    value: 200,
  })
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    value: 100,
  })
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

  it("lets the name shrink instead of overflowing its fixed-width container", () => {
    const args: CompanyCellValue = { name: "Factorial" }

    render(CompanyCell(args, defaultMeta))

    expect(screen.getByText("Factorial").closest("div")).toHaveClass(
      "min-w-0",
      "flex-1"
    )
  })

  describe("by default, with no line cap", () => {
    it("wraps the name in full rather than truncating it", () => {
      overflowTheCell()
      const args: CompanyCellValue = { name: LONG_NAME }

      render(CompanyCell(args, defaultMeta))

      const name = screen.getByTestId("one-ellipsis")
      expect(name).not.toHaveClass("text-ellipsis")
      expect(name).not.toHaveClass("whitespace-nowrap")
    })

    it("breaks a name too long to fit on one line of its own", () => {
      const args: CompanyCellValue = { name: LONG_NAME }

      render(CompanyCell(args, defaultMeta))

      expect(screen.getByTestId("one-ellipsis")).toHaveClass("break-words")
    })

    it("offers no tooltip, because nothing is hidden", async () => {
      overflowTheCell()
      const args: CompanyCellValue = { name: LONG_NAME }

      render(CompanyCell(args, defaultMeta))

      await userEvent.hover(screen.getByTestId("one-ellipsis"))

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })

    it("aligns the avatar with the name's first line", () => {
      const args: CompanyCellValue = { name: LONG_NAME }

      render(CompanyCell(args, defaultMeta))

      const row = screen.getByTestId("one-ellipsis").closest("div")
      expect(row).toHaveClass("items-start")
      expect(row).not.toHaveClass("items-center")
    })
  })

  describe("with a line cap", () => {
    it("wraps the name up to the requested number of lines", () => {
      const args: CompanyCellValue = { name: LONG_NAME, lines: 2 }

      render(CompanyCell(args, defaultMeta))

      const name = screen.getByTestId("one-ellipsis")
      expect(name).not.toHaveClass("whitespace-nowrap")
      expect(name).toHaveStyle({ WebkitLineClamp: "2" })
    })

    it("keeps the name on one truncated line when capped at one", () => {
      overflowTheCell()
      const args: CompanyCellValue = { name: LONG_NAME, lines: 1 }

      render(CompanyCell(args, defaultMeta))

      expect(screen.getByTestId("one-ellipsis")).toHaveClass(
        "whitespace-nowrap"
      )
    })

    it("shows a tooltip with the full name when a capped name overflows", async () => {
      overflowTheCell()
      const args: CompanyCellValue = { name: LONG_NAME, lines: 1 }

      render(CompanyCell(args, defaultMeta))

      await userEvent.hover(screen.getByTestId("one-ellipsis"))

      expect(
        await screen.findByRole("tooltip", { name: LONG_NAME })
      ).toBeInTheDocument()
    })

    it("centers the avatar against a name capped to a single line", () => {
      const args: CompanyCellValue = { name: LONG_NAME, lines: 1 }

      render(CompanyCell(args, defaultMeta))

      const row = screen.getByTestId("one-ellipsis").closest("div")
      expect(row).toHaveClass("items-center")
      expect(row).not.toHaveClass("items-start")
    })
  })
})
