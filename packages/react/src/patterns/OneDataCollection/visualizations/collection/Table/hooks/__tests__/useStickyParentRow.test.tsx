import { act, renderHook, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useStickyParentRow } from "../useStickyParentRow"

class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

const mockRect = (top: number, height = 0): DOMRect => {
  return {
    x: 0,
    y: top,
    width: 0,
    height,
    top,
    right: 0,
    bottom: top + height,
    left: 0,
    toJSON: () => ({}),
  } as DOMRect
}

describe("useStickyParentRow", () => {
  const originalResizeObserver = globalThis.ResizeObserver
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame
  const originalCancelAnimationFrame = globalThis.cancelAnimationFrame

  beforeEach(() => {
    vi.stubGlobal("ResizeObserver", ResizeObserverMock)
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0)
      return 1
    })
    vi.stubGlobal("cancelAnimationFrame", vi.fn())
  })

  afterEach(() => {
    vi.stubGlobal("ResizeObserver", originalResizeObserver)
    vi.stubGlobal("requestAnimationFrame", originalRequestAnimationFrame)
    vi.stubGlobal("cancelAnimationFrame", originalCancelAnimationFrame)
    document.body.innerHTML = ""
  })

  it("keeps sticky until sentinel crosses sticky bottom and then unsticks", async () => {
    const scrollContainer = document.createElement("div")
    scrollContainer.style.overflow = "auto"
    scrollContainer.style.overflowY = "auto"

    const table = document.createElement("table")
    const tbody = document.createElement("tbody")
    const parentRow = document.createElement("tr")
    const sentinelRowHigh = document.createElement("td")
    const sentinelRowLow = document.createElement("td")

    tbody.appendChild(parentRow)
    table.appendChild(tbody)
    scrollContainer.appendChild(table)
    document.body.appendChild(scrollContainer)

    vi.spyOn(window, "getComputedStyle").mockImplementation((element) => {
      const isScrollContainer = element === scrollContainer

      return {
        overflow: isScrollContainer ? "auto" : "visible",
        overflowY: isScrollContainer ? "auto" : "visible",
      } as CSSStyleDeclaration
    })

    vi.spyOn(scrollContainer, "getBoundingClientRect").mockImplementation(() =>
      mockRect(0, 300)
    )
    vi.spyOn(parentRow, "getBoundingClientRect").mockImplementation(() =>
      mockRect(40, 48)
    )
    vi.spyOn(parentRow, "offsetHeight", "get").mockReturnValue(48)
    vi.spyOn(sentinelRowHigh, "getBoundingClientRect").mockImplementation(() =>
      mockRect(120, 0)
    )
    vi.spyOn(sentinelRowLow, "getBoundingClientRect").mockImplementation(() =>
      mockRect(20, 0)
    )

    const parentRowRef = { current: parentRow }
    const sentinelRefHigh = { current: sentinelRowHigh as HTMLElement }
    const sentinelRefLow = { current: sentinelRowLow as HTMLElement }

    const { result, rerender } = renderHook(
      ({ sentinelRef }: { sentinelRef: { current: HTMLElement | null } }) =>
        useStickyParentRow(true, parentRowRef, sentinelRef),
      {
        initialProps: { sentinelRef: sentinelRefHigh },
      }
    )

    await waitFor(() => {
      expect(result.current.isSticky).toBe(true)
    })

    act(() => {
      rerender({ sentinelRef: sentinelRefLow })
    })

    await waitFor(() => {
      expect(result.current.isSticky).toBe(false)
    })
  })
})
