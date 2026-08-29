import { act } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useContainerSize } from "../utils/useContainerSize"

let resizeCallback: ResizeObserverCallback
const observeElement = vi.fn()
const disconnectObserver = vi.fn()

beforeEach(() => {
  observeElement.mockClear()
  disconnectObserver.mockClear()
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: ResizeObserverCallback) {
        resizeCallback = callback
      }

      observe = observeElement
      disconnect = disconnectObserver
    }
  )
})

afterEach(() => vi.unstubAllGlobals())

describe("useContainerSize", () => {
  it("disconnects, resets, and reconnects when observation is disabled", () => {
    const element = document.createElement("div")
    Object.defineProperties(element, {
      clientWidth: { configurable: true, value: 320 },
      clientHeight: { configurable: true, value: 180 },
    })
    const ref = { current: element }
    const view = renderHook(
      ({ enabled }: { enabled: boolean }) => useContainerSize(ref, enabled),
      { initialProps: { enabled: true } }
    )

    expect(view.result.current).toEqual({ width: 320, height: 180 })
    expect(observeElement).toHaveBeenCalledWith(element)

    act(() => {
      resizeCallback(
        [
          {
            target: element,
            contentRect: { width: 480, height: 240 },
          } as ResizeObserverEntry,
        ],
        {} as ResizeObserver
      )
    })
    expect(view.result.current).toEqual({ width: 480, height: 240 })

    view.rerender({ enabled: false })
    expect(disconnectObserver).toHaveBeenCalledOnce()
    expect(view.result.current).toEqual({ width: 0, height: 0 })

    view.rerender({ enabled: true })
    expect(observeElement).toHaveBeenCalledTimes(2)
    expect(view.result.current).toEqual({ width: 320, height: 180 })

    view.unmount()
    expect(disconnectObserver).toHaveBeenCalledTimes(2)
  })
})
