import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

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

  afterEach(() => {
    // The mocked dimensions live on the prototype; drop them so a measurement
    // from one test never leaks into the next.
    delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    delete (HTMLElement.prototype as { scrollHeight?: number }).scrollHeight
    delete (HTMLElement.prototype as { clientHeight?: number }).clientHeight
    vi.useRealTimers()
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

  it("renders text with ellipsis and tooltip when content overflows", async () => {
    // Mock element dimensions for overflow
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const user = userEvent.setup()
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

    await user.hover(screen.getByTestId("one-ellipsis"))
    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "This is a very long text that should definitely overflow and show an ellipsis"
    )
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

    expect(screen.getByTestId("one-ellipsis").className).toContain(
      "pointer-events-auto"
    )
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
    act(() => resizeCallback?.())

    expect(screen.getByTestId("one-ellipsis").className).toContain(
      "pointer-events-auto"
    )

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
    act(() => resizeCallback?.())

    expect(screen.getByTestId("one-ellipsis").className).not.toContain(
      "pointer-events-auto"
    )
  })

  it("does not truncate or show a tooltip when disabled", () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis disabled>Unclamped text</OneEllipsis>)

    expect(screen.getByTestId("one-ellipsis").className).not.toContain(
      "text-ellipsis"
    )
    expect(screen.getByTestId("one-ellipsis").className).not.toContain(
      "pointer-events-auto"
    )
  })

  it("keeps the ellipsized text hoverable (pointer-events-auto) so its tooltip is reachable inside a pointer-events-none container", () => {
    // Content overflows -> ellipsis + tooltip.
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis>A long label that overflows its container</OneEllipsis>)

    // Table cells set `pointer-events: none`; the trigger must re-enable pointer
    // events on itself or the hover never reaches the tooltip.
    expect(screen.getByTestId("one-ellipsis").className).toContain(
      "pointer-events-auto"
    )
  })

  it("does not force pointer-events when the text fits, since there is no tooltip", () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis>Short</OneEllipsis>)

    expect(screen.getByTestId("one-ellipsis").className).not.toContain(
      "pointer-events-auto"
    )
  })

  it("re-measures after layout so text width-constrained only on a later pass still detects its ellipsis without a resize event", () => {
    vi.useFakeTimers()

    // Fits on the initial synchronous measure.
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    render(<OneEllipsis>Label constrained only after layout</OneEllipsis>)
    expect(screen.getByTestId("one-ellipsis").className).not.toContain(
      "pointer-events-auto"
    )

    // An ancestor width-constrains the text on a later layout pass (e.g. an
    // OverflowList inside a table cell) but the ResizeObserver does not fire.
    // The post-layout re-measure (rAF + timeout) must still catch it.
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    act(() => {
      vi.advanceTimersByTime(150)
    })

    expect(screen.getByTestId("one-ellipsis").className).toContain(
      "pointer-events-auto"
    )
  })
})
