import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0CanvasCard } from "../F0CanvasCard"

describe("F0CanvasCard", () => {
  const defaultProps = {
    module: "analytics" as const,
    title: "Test Dashboard",
    description: "A test description",
    onOpen: vi.fn(),
    onClose: vi.fn(),
    isActive: false,
  }

  it("renders title and description", () => {
    render(<F0CanvasCard {...defaultProps} />)

    expect(screen.getByText("Test Dashboard")).toBeInTheDocument()
    expect(screen.getByText("A test description")).toBeInTheDocument()
  })

  it("shows 'Open' button when not active", () => {
    render(<F0CanvasCard {...defaultProps} isActive={false} />)

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("shows 'Close' button when active", () => {
    render(<F0CanvasCard {...defaultProps} isActive={true} />)

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("calls onOpen when clicking Open button", async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()

    render(<F0CanvasCard {...defaultProps} onOpen={onOpen} isActive={false} />)

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(onOpen).toHaveBeenCalled()
  })

  it("calls onClose when clicking Close button", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<F0CanvasCard {...defaultProps} onClose={onClose} isActive={true} />)

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalled()
  })

  it("applies focus styles when active", () => {
    const { container } = render(
      <F0CanvasCard {...defaultProps} isActive={true} />
    )

    const card = container.firstElementChild as HTMLElement
    expect(card.className).toContain("border-f1-border-hover")
  })

  it("does not apply focus ring styles when inactive", () => {
    const { container } = render(
      <F0CanvasCard {...defaultProps} isActive={false} />
    )

    const card = container.firstElementChild as HTMLElement
    expect(card.className).not.toContain("ring-2")
  })
})
