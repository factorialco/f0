import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { Download } from "@/icons/app"

import { F0CanvasCard } from "../F0CanvasCard"

describe("F0CanvasCard", () => {
  const openAction = {
    type: "open" as const,
    onOpen: vi.fn(),
    onClose: vi.fn(),
  }

  const defaultProps = {
    avatar: { type: "module" as const, module: "analytics" as const },
    title: "Test Dashboard",
    description: "A test description",
    isActive: false,
    action: openAction,
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

    render(
      <F0CanvasCard
        {...defaultProps}
        isActive={false}
        action={{ type: "open", onOpen, onClose: vi.fn() }}
      />
    )

    await user.click(screen.getByRole("button", { name: "Open" }))
    expect(onOpen).toHaveBeenCalled()
  })

  it("calls onClose when clicking Close button", async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(
      <F0CanvasCard
        {...defaultProps}
        isActive={true}
        action={{ type: "open", onOpen: vi.fn(), onClose }}
      />
    )

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

  it("renders file avatar with the file type label", () => {
    render(
      <F0CanvasCard
        {...defaultProps}
        avatar={{ type: "file", file: { name: "report.pdf", type: "pdf" } }}
      />
    )

    expect(screen.getByText("PDF")).toBeInTheDocument()
  })

  it("does not render description line when description is omitted", () => {
    render(
      <F0CanvasCard
        {...defaultProps}
        description={undefined}
        title="Only title"
      />
    )

    expect(screen.getByText("Only title")).toBeInTheDocument()
    expect(screen.queryByText("A test description")).not.toBeInTheDocument()
  })

  it("renders the custom action button with icon and label and calls onClick", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <F0CanvasCard
        {...defaultProps}
        action={{
          type: "custom",
          icon: Download,
          label: "Download",
          onClick,
        }}
      />
    )

    await user.click(screen.getByRole("button", { name: "Download" }))
    expect(onClick).toHaveBeenCalled()
  })

  it("does not make the card clickable when action is custom", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    const { container } = render(
      <F0CanvasCard
        {...defaultProps}
        action={{
          type: "custom",
          icon: Download,
          label: "Download",
          hideLabel: true,
          onClick,
        }}
      />
    )

    const card = container.firstElementChild as HTMLElement
    expect(card.className).not.toContain("cursor-pointer")

    await user.click(screen.getByText("Test Dashboard"))
    expect(onClick).not.toHaveBeenCalled()
  })

  it("hides the open button when action.showButton is false but keeps the card clickable", async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()

    const { container } = render(
      <F0CanvasCard
        {...defaultProps}
        isActive={false}
        action={{
          type: "open",
          onOpen,
          onClose: vi.fn(),
          showButton: false,
        }}
      />
    )

    expect(
      screen.queryByRole("button", { name: "Open" })
    ).not.toBeInTheDocument()

    const card = container.firstElementChild as HTMLElement
    expect(card.className).toContain("cursor-pointer")

    await user.click(card)
    expect(onOpen).toHaveBeenCalled()
  })
})
