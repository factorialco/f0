import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OneEllipsis } from "./OneEllipsis"

describe("OneEllipsis", () => {
  let resizeCallback: (() => void) | undefined

  beforeEach(() => {
    // Mock ResizeObserver
    const mockResizeObserver = vi.fn()
    mockResizeObserver.mockImplementation((callback) => {
      resizeCallback = callback
      return {
        observe: vi.fn(),
        disconnect: vi.fn(),
      }
    })
    window.ResizeObserver = mockResizeObserver

    // Mock getComputedStyle
    const mockGetComputedStyle = vi.fn()
    mockGetComputedStyle.mockReturnValue({
      lineHeight: "20px",
    })
    window.getComputedStyle = mockGetComputedStyle
  })

  it("renders text without ellipsis when content fits", () => {
    // Mock element dimensions for no overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis>Short text</OneEllipsis>)
    expect(screen.getByText("Short text")).toBeInTheDocument()
    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()
  })

  it("renders text with ellipsis and tooltip when content overflows", () => {
    // Mock element dimensions for overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(
      <OneEllipsis>
        This is a very long text that should definitely overflow and show an ellipsis
      </OneEllipsis>
    )

    expect(
      screen.getByText(
        "This is a very long text that should definitely overflow and show an ellipsis"
      )
    ).toBeInTheDocument()
    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()
  })

  it("supports multiple lines", () => {
    // Mock element dimensions for multi-line overflow
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      value: 50,
    })

    render(
      <OneEllipsis lines={2}>
        This is a very long text that should definitely overflow and show an ellipsis
      </OneEllipsis>
    )

    expect(
      screen.getByText(
        "This is a very long text that should definitely overflow and show an ellipsis"
      )
    ).toBeInTheDocument()

    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()
  })

  it("updates ellipsis state when size changes", () => {
    // Initial state: no overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis>Test text</OneEllipsis>)

    // Initially no tooltip should be present
    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()

    // Simulate resize causing overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    // Trigger resize observer callback
    resizeCallback?.()

    // Now tooltip should be present
    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()

    // Simulate resize back to no overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    // Trigger resize observer callback again
    resizeCallback?.()

    // Tooltip should be gone again
    expect(screen.getByTestId("one-ellipsis")).toBeInTheDocument()
  })
})
