import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRender as render, screen } from "@/testing/test-utils"

import { useComposerOverlayLayout } from "../useComposerOverlayLayout"
import { CHAT_COMPOSER_HEIGHT_PROPERTY } from "../../utils/chat-layout"

let resizeCallback: ResizeObserverCallback | undefined
const observe = vi.fn()
const disconnect = vi.fn()

const ComposerLayoutHarness = ({ enabled }: { enabled: boolean }) => {
  const { shellRef, composerOverlayRef } = useComposerOverlayLayout(enabled)

  return (
    <div ref={shellRef} data-testid="shell">
      {enabled && <div ref={composerOverlayRef}>Composer</div>}
    </div>
  )
}

describe("useComposerOverlayLayout", () => {
  beforeEach(() => {
    resizeCallback = undefined
    observe.mockClear()
    disconnect.mockClear()
    vi.stubGlobal(
      "ResizeObserver",
      class ResizeObserverMock {
        constructor(callback: ResizeObserverCallback) {
          resizeCallback = callback
        }

        observe = observe
        unobserve = vi.fn()
        disconnect = disconnect
      }
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it("publishes the rounded composer height without a React state update", () => {
    render(<ComposerLayoutHarness enabled />)

    act(() => {
      resizeCallback?.(
        [
          {
            borderBoxSize: [{ blockSize: 127.2, inlineSize: 480 }],
          } as unknown as ResizeObserverEntry,
        ],
        {} as ResizeObserver
      )
    })

    expect(observe).toHaveBeenCalledWith(screen.getByText("Composer"))
    expect(
      screen
        .getByTestId("shell")
        .style.getPropertyValue(CHAT_COMPOSER_HEIGHT_PROPERTY)
    ).toBe("128px")
  })

  it("removes the reserved composer height when sending is disabled", () => {
    const { rerender } = render(<ComposerLayoutHarness enabled />)

    act(() => {
      resizeCallback?.(
        [
          {
            borderBoxSize: [{ blockSize: 96, inlineSize: 480 }],
          } as unknown as ResizeObserverEntry,
        ],
        {} as ResizeObserver
      )
    })
    rerender(<ComposerLayoutHarness enabled={false} />)

    expect(disconnect).toHaveBeenCalled()
    expect(
      screen
        .getByTestId("shell")
        .style.getPropertyValue(CHAT_COMPOSER_HEIGHT_PROPERTY)
    ).toBe("0px")
  })

  it("falls back to a synchronous measurement without ResizeObserver", () => {
    vi.stubGlobal("ResizeObserver", undefined)
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      bottom: 96,
      height: 96,
      left: 0,
      right: 480,
      top: 0,
      width: 480,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    })

    render(<ComposerLayoutHarness enabled />)

    expect(
      screen
        .getByTestId("shell")
        .style.getPropertyValue(CHAT_COMPOSER_HEIGHT_PROPERTY)
    ).toBe("96px")
  })
})
