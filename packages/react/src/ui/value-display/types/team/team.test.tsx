import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { TeamCell, TeamCellValue } from "./team"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
}

describe("TeamCell", () => {
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

  it("renders the team name", () => {
    const args: TeamCellValue = { name: "Engineering" }

    render(TeamCell(args, defaultMeta))

    expect(screen.getByText("Engineering")).toBeInTheDocument()
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

    const args: TeamCellValue = {
      name: "Engineering Department for International Product Operations",
    }

    render(TeamCell(args, defaultMeta))

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

    const args: TeamCellValue = {
      name: "Engineering Department for International Product Operations",
    }

    render(TeamCell(args, defaultMeta))

    await userEvent.hover(screen.getByTestId("one-ellipsis"))

    expect(
      await screen.findByRole("tooltip", {
        name: "Engineering Department for International Product Operations",
      })
    ).toBeInTheDocument()
  })

  it("lets the name shrink instead of overflowing its fixed-width container", () => {
    const args: TeamCellValue = { name: "Engineering" }

    render(TeamCell(args, defaultMeta))

    expect(screen.getByText("Engineering").closest("div")).toHaveClass(
      "min-w-0",
      "flex-1"
    )
  })
})
