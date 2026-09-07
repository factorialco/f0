import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, fireEvent, zeroRender as render } from "@/testing/test-utils"

import { OneTable, TableBody, TableCell, TableRow } from "../../index"

let resizeCallback: ResizeObserverCallback | undefined

beforeEach(() => {
  class ResizeObserverMock {
    constructor(callback: ResizeObserverCallback) {
      resizeCallback = callback
    }

    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }

  vi.stubGlobal("ResizeObserver", ResizeObserverMock)
})

afterEach(() => {
  resizeCallback = undefined
  vi.unstubAllGlobals()
})

const renderTable = () =>
  render(
    <OneTable>
      <TableBody>
        <TableRow>
          <TableCell>Engineering</TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
  )

describe("OneTable scrolling", () => {
  it("only enters the tab order when its content overflows", () => {
    const { container } = renderTable()
    const scrollContainer = container.querySelector(".overflow-auto")
    if (!(scrollContainer instanceof HTMLElement)) {
      throw new Error("Expected the table scroll container")
    }

    expect(scrollContainer).not.toHaveAttribute("tabindex")

    Object.defineProperties(scrollContainer, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 200 },
    })
    act(() => resizeCallback?.([], {} as ResizeObserver))

    expect(scrollContainer).toHaveAttribute("tabindex", "0")

    Object.defineProperties(scrollContainer, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 100 },
      clientWidth: { configurable: true, value: 100 },
      scrollWidth: { configurable: true, value: 200 },
    })
    act(() => resizeCallback?.([], {} as ResizeObserver))

    expect(scrollContainer).toHaveAttribute("tabindex", "0")

    Object.defineProperties(scrollContainer, {
      scrollWidth: { configurable: true, value: 100 },
    })
    act(() => resizeCallback?.([], {} as ResizeObserver))

    expect(scrollContainer).not.toHaveAttribute("tabindex")
    expect(scrollContainer.className).toContain("focus-visible:ring")
  })

  it("measures overflow from scroll events when ResizeObserver is unavailable", () => {
    vi.stubGlobal("ResizeObserver", undefined)
    const { container } = renderTable()
    const scrollContainer = container.querySelector(".overflow-auto")
    if (!(scrollContainer instanceof HTMLElement)) {
      throw new Error("Expected the table scroll container")
    }

    Object.defineProperties(scrollContainer, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 200 },
    })
    fireEvent.scroll(scrollContainer)

    expect(scrollContainer).toHaveAttribute("tabindex", "0")
  })
})
