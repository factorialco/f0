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

  describe("line clamping", () => {
    it("rejects asking for a line cap and no cap at once", () => {
      // @ts-expect-error `lines` and `full` are mutually exclusive
      const args: TeamCellValue = { name: "Team", lines: 2, full: true }

      expect(args).toBeDefined()
    })

    it("keeps the name on a single truncated line by default", () => {
      const args: TeamCellValue = {
        name: "Engineering Department for International Product Operations",
      }

      render(TeamCell(args, defaultMeta))

      expect(screen.getByTestId("one-ellipsis")).toHaveClass(
        "whitespace-nowrap"
      )
    })

    it("lets the name wrap up to the requested number of lines", () => {
      const args: TeamCellValue = {
        name: "Engineering Department for International Product Operations",
        lines: 2,
      }

      render(TeamCell(args, defaultMeta))

      const name = screen.getByTestId("one-ellipsis")
      expect(name).not.toHaveClass("whitespace-nowrap")
      expect(name).toHaveStyle({ WebkitLineClamp: "2" })
    })

    it("does not truncate at all when full is set", () => {
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
        full: true,
      }

      render(TeamCell(args, defaultMeta))

      const name = screen.getByTestId("one-ellipsis")
      expect(name).not.toHaveClass("text-ellipsis")
      expect(name).not.toHaveClass("whitespace-nowrap")
    })

    it("does not offer a tooltip when nothing is hidden", async () => {
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
        full: true,
      }

      render(TeamCell(args, defaultMeta))

      await userEvent.hover(screen.getByTestId("one-ellipsis"))

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })

    it("aligns the avatar with the first line when the name can wrap", () => {
      const args: TeamCellValue = {
        name: "Engineering Department for International Product Operations",
        full: true,
      }

      render(TeamCell(args, defaultMeta))

      const row = screen.getByTestId("one-ellipsis").closest("div")
      expect(row).toHaveClass("items-start")
      expect(row).not.toHaveClass("items-center")
    })

    it("centers the avatar against a name that stays on one line", () => {
      const args: TeamCellValue = { name: "Team" }

      render(TeamCell(args, defaultMeta))

      const row = screen.getByTestId("one-ellipsis").closest("div")
      expect(row).toHaveClass("items-center")
      expect(row).not.toHaveClass("items-start")
    })
  })
})
