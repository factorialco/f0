import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0GraphExpander } from "../F0GraphExpander"

describe("F0GraphExpander", () => {
  it("renders with count", () => {
    render(<F0GraphExpander count={5} expanded={false} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("renders avatars (up to 3)", () => {
    const { container } = render(
      <F0GraphExpander
        avatars={[
          "https://example.com/a.jpg",
          "https://example.com/b.jpg",
          "https://example.com/c.jpg",
          "https://example.com/d.jpg",
        ]}
        count={4}
        expanded={false}
      />
    )
    const images = container.querySelectorAll("img")
    // Only 4 avatars max
    expect(images).toHaveLength(4)
  })

  it("calls onClick when clicked", () => {
    const onClick = vi.fn()
    render(<F0GraphExpander count={3} expanded={false} onClick={onClick} />)
    screen.getByRole("button").click()
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("calls onClick on keyboard Enter", async () => {
    const onClick = vi.fn()
    render(<F0GraphExpander count={3} expanded={false} onClick={onClick} />)
    const button = screen.getByRole("button")
    button.focus()
    await import("@testing-library/user-event").then(({ userEvent }) =>
      userEvent.setup().keyboard("{Enter}")
    )
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("has correct aria-expanded", () => {
    const { rerender } = render(<F0GraphExpander count={3} expanded={false} />)
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false")

    rerender(<F0GraphExpander count={3} expanded={true} />)
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true")
  })

  it("renders without avatars", () => {
    const { container } = render(<F0GraphExpander count={2} expanded={false} />)
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(container.querySelectorAll("img")).toHaveLength(0)
  })
})
