import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { useNavigation } from "@/lib/linkHandler"

import { F0Link } from ".."

vi.mock("@/lib/linkHandler", async () => {
  const module = await import("../__mocks__/linkHandler")
  return module
})

describe("F0Link", () => {
  it("renders children correctly", () => {
    render(<F0Link href="/test">Click me</F0Link>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("applies link variant by default", () => {
    render(<F0Link href="/test">Click me</F0Link>)
    expect(screen.getByRole("link")).toHaveClass("underline")
  })

  it("shows external link icon when target is _blank", () => {
    render(
      <F0Link href="https://example.com" target="_blank">
        External Link
      </F0Link>
    )
    expect(screen.getByRole("link").querySelector("svg")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    render(
      <F0Link href="/test" className="custom-class">
        Click me
      </F0Link>
    )
    expect(screen.getByRole("link")).toHaveClass("custom-class")
  })

  it("applies active state when isActive returns true", () => {
    const { isActive } = vi.mocked(useNavigation)()
    vi.mocked(isActive).mockReturnValue(true)

    render(<F0Link href="/test">Click me</F0Link>)
    expect(screen.getByRole("link")).toHaveAttribute("aria-current", "page")
  })

  it("forwards ref correctly", () => {
    const ref = { current: null }
    render(
      <F0Link href="/test" ref={ref}>
        Click me
      </F0Link>
    )
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
  })

  it("passes href correctly", () => {
    render(<F0Link href="/test">Click me</F0Link>)
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test")
  })
})
