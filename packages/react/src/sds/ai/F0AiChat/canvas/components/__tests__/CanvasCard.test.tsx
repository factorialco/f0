import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { CanvasCard } from "../CanvasCard"

describe("CanvasCard", () => {
  const defaultProps = {
    module: "analytics" as const,
    title: "Test Dashboard",
    description: "A test description",
    onOpen: vi.fn(),
    onClose: vi.fn(),
    isActive: false,
  }

  it("renders title and description", () => {
    render(<CanvasCard {...defaultProps} />)

    expect(screen.getByText("Test Dashboard")).toBeInTheDocument()
    expect(screen.getByText("A test description")).toBeInTheDocument()
  })

  it("shows 'Open' button when not active", () => {
    render(<CanvasCard {...defaultProps} isActive={false} />)

    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument()
  })

  it("shows 'Close' button when active", () => {
    render(<CanvasCard {...defaultProps} isActive={true} />)

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument()
  })

  it("calls onOpen when clicking Open button", async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()

    render(<CanvasCard {...defaultProps} onOpen={onOpen} isActive={false} />)

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when clicking Close button", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<CanvasCard {...defaultProps} onClose={onClose} isActive={true} />)

    await user.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("applies focus ring styles when active", () => {
    const { container } = render(
      <CanvasCard {...defaultProps} isActive={true} />
    )

    const card = container.firstElementChild as HTMLElement
    expect(card.className).toContain("ring-2")
    expect(card.className).toContain("ring-f1-ring")
  })

  it("does not apply focus ring styles when inactive", () => {
    const { container } = render(
      <CanvasCard {...defaultProps} isActive={false} />
    )

    const card = container.firstElementChild as HTMLElement
    expect(card.className).not.toContain("ring-2")
  })
})
