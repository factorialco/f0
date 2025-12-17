import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { OneEllipsis } from "./OneEllipsis"

describe("OneEllipsis", () => {
  let resizeCallback: (() => void) | undefined

  beforeEach(() => {
    // Mock ResizeObserver - must be a class constructor for 'new ResizeObserver()' to work
    // This implementation captures the callback for testing purposes
    class MockResizeObserver {
      private callback: ResizeObserverCallback

      constructor(callback: ResizeObserverCallback) {
        this.callback = callback
        resizeCallback = () => {
          // Create a mock entry for the callback
          const mockEntry = {
            contentRect: {
              width: 0,
              height: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              x: 0,
              y: 0,
              toJSON: () => ({}),
            },
            target: document.body,
            borderBoxSize: [],
            contentBoxSize: [],
            devicePixelContentBoxSize: [],
          } as ResizeObserverEntry
          callback([mockEntry], this)
        }
      }

      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    window.ResizeObserver = MockResizeObserver as typeof ResizeObserver

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
        This is a very long text that should definitely overflow and show an
        ellipsis
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
        This is a very long text that should definitely overflow and show an
        ellipsis
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
