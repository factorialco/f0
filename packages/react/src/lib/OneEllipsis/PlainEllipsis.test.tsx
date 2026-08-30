import { createRef } from "react"

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { PlainEllipsis } from "./PlainEllipsis"

describe("PlainEllipsis", () => {
  let resizeCallbacks: (() => void)[]
  const disconnect = vi.fn()

  beforeEach(() => {
    resizeCallbacks = []
    class MockResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        resizeCallbacks.push(() => callback([], this))
      }

      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = disconnect
    }

    window.ResizeObserver = MockResizeObserver as typeof ResizeObserver
    vi.spyOn(window, "getComputedStyle").mockReturnValue({
      lineHeight: "20px",
    } as CSSStyleDeclaration)
  })

  afterEach(() => {
    delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    delete (HTMLElement.prototype as { scrollHeight?: number }).scrollHeight
    vi.restoreAllMocks()
    disconnect.mockReset()
  })

  it("renders markdown syntax as plain text", () => {
    render(<PlainEllipsis>**literal label**</PlainEllipsis>)

    expect(screen.getByText("**literal label**")).toBeInTheDocument()
    expect(screen.queryByRole("strong")).not.toBeInTheDocument()
  })

  it("keeps observing the same text element as overflow appears and clears", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const user = userEvent.setup()
    render(<PlainEllipsis>A label that overflows</PlainEllipsis>)
    const text = screen.getByTestId("one-ellipsis")

    await waitFor(() => {
      expect(text.className).toContain("pointer-events-auto")
    })
    expect(screen.getByTestId("one-ellipsis")).toBe(text)

    await user.hover(text)
    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "A label that overflows"
    )

    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 100,
    })
    act(() => resizeCallbacks.forEach((callback) => callback()))

    await waitFor(() => {
      expect(text.className).not.toContain("pointer-events-auto")
    })
    expect(screen.getByTestId("one-ellipsis")).toBe(text)
  })

  it("supports multiline overflow measurement", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
      configurable: true,
      value: 100,
    })

    render(<PlainEllipsis lines={2}>A multiline label</PlainEllipsis>)

    await waitFor(() => {
      expect(screen.getByTestId("one-ellipsis").className).toContain(
        "pointer-events-auto"
      )
    })
  })

  it("does not enable a tooltip when noTooltip is set", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const user = userEvent.setup()
    render(<PlainEllipsis noTooltip>Overflow without tooltip</PlainEllipsis>)

    await waitFor(() => {
      expect(screen.getByTestId("one-ellipsis").className).not.toContain(
        "pointer-events-auto"
      )
    })
    await user.hover(screen.getByTestId("one-ellipsis"))
    await expect(
      screen.findByRole("tooltip", undefined, { timeout: 500 })
    ).rejects.toThrow()
  })

  it("clears an existing overflow state when disabled", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 200,
    })
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 100,
    })

    const { rerender } = render(
      <PlainEllipsis>Overflow that becomes disabled</PlainEllipsis>
    )

    await waitFor(() => {
      expect(screen.getByTestId("one-ellipsis").className).toContain(
        "pointer-events-auto"
      )
    })

    rerender(
      <PlainEllipsis disabled>Overflow that becomes disabled</PlainEllipsis>
    )

    await waitFor(() => {
      expect(screen.getByTestId("one-ellipsis").className).not.toContain(
        "pointer-events-auto"
      )
    })
  })

  it("supports disabled truncation, custom tags, and forwarded refs", () => {
    const ref = createRef<HTMLElement>()

    render(
      <PlainEllipsis ref={ref} disabled tag="p">
        Unclamped paragraph
      </PlainEllipsis>
    )

    expect(ref.current).toBe(screen.getByTestId("one-ellipsis"))
    expect(ref.current?.tagName).toBe("P")
    expect(ref.current?.className).not.toContain("text-ellipsis")
  })

  it("disconnects its observer on unmount", () => {
    const { unmount } = render(<PlainEllipsis>Observed label</PlainEllipsis>)

    unmount()

    expect(disconnect).toHaveBeenCalledOnce()
  })
})
