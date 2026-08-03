import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { useChatVirtuoso } from "../useChatVirtuoso"

let frameCallbacks: FrameRequestCallback[]

beforeEach(() => {
  vi.useFakeTimers()
  frameCallbacks = []
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    frameCallbacks.push(callback)
    return frameCallbacks.length
  })
})

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

const renderVirtuoso = () =>
  renderHook(() =>
    useChatVirtuoso({
      rows: [],
      indexById: new Map<string, number>(),
      itemCount: 1,
      messages: [{ id: "message-1" }],
      hasMoreOlder: false,
      loadingOlder: false,
      loadOlder: vi.fn(),
      hasMoreNewer: false,
      loadingNewer: false,
      conversationKey: "conversation-1",
      reducedMotion: false,
    })
  )

const hookOptions = (messages: { id: string; isMine?: boolean }[]) => ({
  rows: [],
  indexById: new Map<string, number>(),
  itemCount: messages.length,
  messages,
  hasMoreOlder: false,
  loadingOlder: false,
  loadOlder: vi.fn(),
  hasMoreNewer: false,
  loadingNewer: false,
  conversationKey: "conversation-1",
  reducedMotion: false,
})

const attachScroller = (
  handleScrollerRef: (element: HTMLElement | Window | null) => void
) => {
  const scroller = document.createElement("div")
  let scrollHeight = 1000
  let scrollTop = 500
  const clientHeight = 500

  Object.defineProperties(scroller, {
    clientHeight: { configurable: true, get: () => clientHeight },
    scrollHeight: { configurable: true, get: () => scrollHeight },
    scrollTop: {
      configurable: true,
      get: () => scrollTop,
      set: (value: number) => {
        scrollTop = Math.min(
          Math.max(0, value),
          Math.max(0, scrollHeight - clientHeight)
        )
      },
    },
  })

  act(() => handleScrollerRef(scroller))

  return {
    scroller,
    getScrollTop: () => scrollTop,
    setScrollTop: (value: number) => {
      scroller.scrollTop = value
    },
    setScrollHeight: (height: number) => {
      scrollHeight = height
    },
  }
}

describe("useChatVirtuoso wheel takeover", () => {
  it("keeps following paused after the first small upward scroll", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    expect(result.current.followOutput).not.toBe(false)

    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
    })
    expect(result.current.followOutput).toBe(false)

    viewport.setScrollTop(470)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    expect(viewport.getScrollTop()).toBe(470)

    viewport.setScrollHeight(1100)
    act(() => result.current.handleTotalListHeightChanged(1100))
    expect(viewport.getScrollTop()).toBe(470)

    act(() => vi.advanceTimersByTime(200))
    viewport.setScrollHeight(1200)
    act(() => result.current.handleTotalListHeightChanged(1200))
    expect(viewport.getScrollTop()).toBe(470)

    viewport.setScrollTop(700)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    expect(result.current.followOutput).not.toBe(false)

    viewport.setScrollHeight(1300)
    act(() => result.current.handleTotalListHeightChanged(1300))
    expect(viewport.getScrollTop()).toBe(800)
    act(() => result.current.handleScrollerRef(null))
  })

  it("restores following when an upward wheel cannot leave the bottom", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
    })
    expect(result.current.followOutput).toBe(false)

    act(() => vi.advanceTimersByTime(200))
    expect(result.current.followOutput).not.toBe(false)

    viewport.setScrollHeight(1100)
    act(() => result.current.handleTotalListHeightChanged(1100))
    expect(viewport.getScrollTop()).toBe(600)
    act(() => result.current.handleScrollerRef(null))
  })

  it("does not trust the broad at-bottom callback until the true edge", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
      viewport.setScrollTop(470)
      viewport.scroller.dispatchEvent(new Event("scroll"))
      result.current.handleAtBottomChange(true)
    })
    expect(result.current.followOutput).toBe(false)

    act(() => {
      viewport.setScrollTop(500)
      result.current.handleAtBottomChange(true)
    })
    expect(result.current.followOutput).not.toBe(false)
    act(() => result.current.handleScrollerRef(null))
  })

  it("keeps touch takeover paused until touchend reaches the true bottom", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    act(() => viewport.scroller.dispatchEvent(new TouchEvent("touchmove")))
    expect(result.current.followOutput).toBe(false)

    act(() => {
      viewport.setScrollTop(470)
      viewport.scroller.dispatchEvent(new TouchEvent("touchend"))
    })
    expect(result.current.followOutput).toBe(false)

    act(() => {
      viewport.setScrollTop(500)
      viewport.scroller.dispatchEvent(new TouchEvent("touchend"))
    })
    expect(result.current.followOutput).not.toBe(false)
    act(() => result.current.handleScrollerRef(null))
  })

  it("resumes following for an explicit jump to bottom", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
      result.current.scrollToBottom()
    })

    expect(result.current.followOutput).not.toBe(false)
    act(() => result.current.handleScrollerRef(null))
  })

  it("resumes and glides home when my message arrives inside the broad bottom band", () => {
    const initialMessages = [{ id: "message-1" }]
    const { result, rerender } = renderHook(
      ({ messages }) => useChatVirtuoso(hookOptions(messages)),
      { initialProps: { messages: initialMessages } }
    )
    const viewport = attachScroller(result.current.handleScrollerRef)
    const scrollToIndex = vi.fn()
    result.current.virtuosoRef.current = { scrollToIndex } as never

    act(() => {
      result.current.handleTotalListHeightChanged(1000)
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
      viewport.setScrollTop(470)
      viewport.scroller.dispatchEvent(new Event("scroll"))
    })
    expect(result.current.followOutput).toBe(false)

    rerender({
      messages: [...initialMessages, { id: "message-2", isMine: true }],
    })

    expect(result.current.followOutput).not.toBe(false)
    expect(scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    act(() => result.current.handleScrollerRef(null))
  })

  it("does not resume through a missing scroller and rechecks its replacement", () => {
    const { result } = renderVirtuoso()
    const firstViewport = attachScroller(result.current.handleScrollerRef)

    act(() => {
      result.current.handleTotalListHeightChanged(1000)
      firstViewport.scroller.dispatchEvent(
        new WheelEvent("wheel", { deltaY: -120 })
      )
      firstViewport.setScrollTop(470)
      firstViewport.scroller.dispatchEvent(new Event("scroll"))
      result.current.handleScrollerRef(null)
      result.current.handleAtBottomChange(true)
    })
    expect(result.current.followOutput).toBe(false)

    attachScroller(result.current.handleScrollerRef)
    expect(result.current.followOutput).not.toBe(false)
    expect(vi.getTimerCount()).toBe(0)
    act(() => result.current.handleScrollerRef(null))
  })

  it.each([0, 120])(
    "does not pause following for a %i downward/empty wheel delta",
    (deltaY) => {
      const { result } = renderVirtuoso()
      const viewport = attachScroller(result.current.handleScrollerRef)

      act(() => result.current.handleTotalListHeightChanged(1000))
      act(() => {
        viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY }))
      })

      expect(result.current.followOutput).not.toBe(false)
      viewport.setScrollHeight(1100)
      act(() => result.current.handleTotalListHeightChanged(1100))
      expect(viewport.getScrollTop()).toBe(600)
      expect(frameCallbacks).toHaveLength(0)
      act(() => result.current.handleScrollerRef(null))
    }
  )
})
