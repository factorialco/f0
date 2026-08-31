import { type ListItem, type VirtuosoHandle } from "react-virtuoso"
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  type Mock,
  vi,
} from "vitest"

import { act, zeroRenderHook as renderHook } from "@/testing/test-utils"

import { type ChatRow } from "../../utils/grouping"
import { topVisibleRowIndex, useChatVirtuoso } from "../useChatVirtuoso"

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

/** The two imperative scrolls the hook uses: deliberate jumps go through
 * `scrollToIndex`, absorbing in-place growth goes through `scrollBy` (which
 * doesn't arm Virtuoso's 1.2s retry loop). */
const stubVirtuosoHandle = (virtuosoRef: {
  current: VirtuosoHandle | null
}): { scrollToIndex: Mock; scrollBy: Mock } => {
  const scrollToIndex = vi.fn()
  const scrollBy = vi.fn()
  virtuosoRef.current = { scrollBy, scrollToIndex } as never
  return { scrollBy, scrollToIndex }
}

const attachScroller = (
  handleScrollerRef: (element: HTMLElement | Window | null) => void
) => {
  const scroller = document.createElement("div")
  let scrollHeight = 1000
  let scrollTop = 500
  let scrollWrites = 0
  const clientHeight = 500
  const metricReads = { scrollHeight: 0, scrollTop: 0, clientHeight: 0 }

  Object.defineProperties(scroller, {
    clientHeight: {
      configurable: true,
      get: () => {
        metricReads.clientHeight += 1
        return clientHeight
      },
    },
    scrollHeight: {
      configurable: true,
      get: () => {
        metricReads.scrollHeight += 1
        return scrollHeight
      },
    },
    scrollTop: {
      configurable: true,
      get: () => {
        metricReads.scrollTop += 1
        return scrollTop
      },
      set: (value: number) => {
        scrollWrites += 1
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
    getScrollWrites: () => scrollWrites,
    setScrollTop: (value: number) => {
      scroller.scrollTop = value
    },
    setScrollHeight: (height: number) => {
      scrollHeight = height
    },
    getMetricReads: () => ({ ...metricReads }),
  }
}

describe("useChatVirtuoso wheel takeover", () => {
  it("derives the top row from Virtuoso measurements with variable heights", () => {
    const items = [
      { index: 100, offset: 0, size: 40 },
      { index: 101, offset: 40, size: 120 },
      { index: 102, offset: 160, size: 24 },
    ]

    expect(topVisibleRowIndex(items, 0, 100)).toBe(0)
    expect(topVisibleRowIndex(items, 40, 100)).toBe(1)
    expect(topVisibleRowIndex(items, 159, 100)).toBe(1)
    expect(topVisibleRowIndex(items, 160, 100)).toBe(2)
    expect(topVisibleRowIndex(items, 184, 100)).toBeNull()
  })

  it("does not read DOM geometry in the scroll hot path", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)
    const geometrySpy = vi.spyOn(Element.prototype, "getBoundingClientRect")
    const selectorSpy = vi.spyOn(Element.prototype, "querySelectorAll")
    const readsBeforeScroll = viewport.getMetricReads()

    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    act(() =>
      result.current.handleItemsRendered([
        { index: 0, offset: 0, size: 48, data: undefined } as ListItem<ChatRow>,
      ])
    )
    act(() => frameCallbacks.shift()?.(16))

    expect(geometrySpy).not.toHaveBeenCalled()
    expect(selectorSpy).not.toHaveBeenCalled()
    expect(viewport.getMetricReads()).toEqual({
      scrollHeight: readsBeforeScroll.scrollHeight + 1,
      scrollTop: readsBeforeScroll.scrollTop + 1,
      clientHeight: readsBeforeScroll.clientHeight + 1,
    })
    geometrySpy.mockRestore()
    selectorSpy.mockRestore()
    act(() => result.current.handleScrollerRef(null))
  })

  it("keeps Virtuoso mounted while firstItemIndex retains a prepend anchor", () => {
    const row = (key: string): ChatRow => ({
      type: "separator",
      key,
      at: "2026-01-01T12:00:00.000Z",
      forId: key,
    })
    const initialRows = [row("old-1"), row("old-2")]
    const initialMessages = [{ id: "old-1" }, { id: "old-2" }]
    const { result, rerender } = renderHook(
      ({ messages, rows }: { messages: { id: string }[]; rows: ChatRow[] }) =>
        useChatVirtuoso({
          ...hookOptions(messages),
          rows,
          itemCount: rows.length,
        }),
      {
        initialProps: { messages: initialMessages, rows: initialRows },
      }
    )
    const firstItemIndex = result.current.firstItemIndex
    const listKey = result.current.listKey
    const initialLocation = result.current.initialLocation

    rerender({
      messages: [{ id: "new-1" }, { id: "new-2" }, ...initialMessages],
      rows: [row("new-1"), row("new-2"), ...initialRows],
    })

    expect(result.current.listKey).toBe(listKey)
    expect(result.current.firstItemIndex).toBe(firstItemIndex - 2)
    expect(result.current.initialLocation).toEqual(initialLocation)
  })

  it("does not pin again when stable media dispatches a load event", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)
    const image = document.createElement("img")
    viewport.scroller.append(image)
    const writesBeforeLoad = viewport.getScrollWrites()

    act(() => image.dispatchEvent(new Event("load")))

    expect(viewport.getScrollWrites()).toBe(writesBeforeLoad)
    act(() => result.current.handleScrollerRef(null))
  })

  it("keeps following paused after the first small upward scroll", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollBy } = stubVirtuosoHandle(result.current.virtuosoRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    expect(result.current.followOutput).not.toBe(false)
    scrollBy.mockClear()

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
    expect(scrollBy).not.toHaveBeenCalled()

    act(() => vi.advanceTimersByTime(200))
    viewport.setScrollHeight(1200)
    act(() => result.current.handleTotalListHeightChanged(1200))
    expect(viewport.getScrollTop()).toBe(470)
    expect(scrollBy).not.toHaveBeenCalled()

    viewport.setScrollTop(700)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    expect(result.current.followOutput).not.toBe(false)

    scrollBy.mockClear()
    const writesBeforeGrowth = viewport.getScrollWrites()
    viewport.setScrollHeight(1300)
    act(() => result.current.handleTotalListHeightChanged(1300))
    expect(viewport.getScrollTop()).toBe(700)
    expect(viewport.getScrollWrites()).toBe(writesBeforeGrowth)
    // Pre-growth distance (0) plus the 100px the list just grew — the same
    // landing point `scrollToIndex({ index: "LAST", align: "end" })` reached.
    expect(scrollBy).toHaveBeenCalledWith({ top: 100 })
    act(() => result.current.handleScrollerRef(null))
  })

  it("restores following when an upward wheel cannot leave the bottom", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollBy } = stubVirtuosoHandle(result.current.virtuosoRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
    })
    expect(result.current.followOutput).toBe(false)

    act(() => vi.advanceTimersByTime(200))
    expect(result.current.followOutput).not.toBe(false)

    scrollBy.mockClear()
    const writesBeforeGrowth = viewport.getScrollWrites()
    viewport.setScrollHeight(1100)
    act(() => result.current.handleTotalListHeightChanged(1100))
    expect(viewport.getScrollTop()).toBe(500)
    expect(viewport.getScrollWrites()).toBe(writesBeforeGrowth)
    expect(scrollBy).toHaveBeenCalledWith({ top: 100 })
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
    const { scrollToIndex } = stubVirtuosoHandle(result.current.virtuosoRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    scrollToIndex.mockClear()
    const writesBeforeJump = viewport.getScrollWrites()
    act(() => {
      viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY: -120 }))
      result.current.scrollToBottom()
    })

    expect(result.current.followOutput).not.toBe(false)
    expect(viewport.getScrollWrites()).toBe(writesBeforeJump)
    expect(scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "smooth",
    })
    act(() => result.current.handleScrollerRef(null))
  })

  it("jumps to bottom without animation when reduced motion is enabled", () => {
    const { result } = renderHook(() =>
      useChatVirtuoso({
        ...hookOptions([{ id: "message-1" }]),
        reducedMotion: true,
      })
    )
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollToIndex } = stubVirtuosoHandle(result.current.virtuosoRef)
    const writesBeforeJump = viewport.getScrollWrites()

    act(() => result.current.scrollToBottom())

    expect(viewport.getScrollWrites()).toBe(writesBeforeJump)
    expect(scrollToIndex).toHaveBeenCalledWith({
      index: "LAST",
      align: "end",
      behavior: "auto",
    })
    act(() => result.current.handleScrollerRef(null))
  })

  it("resumes and glides home when my message arrives inside the broad bottom band", () => {
    const initialMessages = [{ id: "message-1" }]
    const { result, rerender } = renderHook(
      ({ messages }) => useChatVirtuoso(hookOptions(messages)),
      { initialProps: { messages: initialMessages } }
    )
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollToIndex } = stubVirtuosoHandle(result.current.virtuosoRef)

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

  it("does not resume through a missing scroller, nor on the attach of its replacement", () => {
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

    // Attaching is NOT a measurement: Virtuoso hasn't positioned the list, so
    // the metrics read there describe nothing. Only a real scroll may resume.
    const nextViewport = attachScroller(result.current.handleScrollerRef)
    expect(result.current.followOutput).toBe(false)
    expect(vi.getTimerCount()).toBe(0)

    act(() => nextViewport.scroller.dispatchEvent(new Event("scroll")))
    expect(result.current.followOutput).not.toBe(false)
    act(() => result.current.handleScrollerRef(null))
  })

  it("prefetches the previous page before the top edge, once per attempt", () => {
    const loadOlder = vi.fn()
    const { result, rerender } = renderHook(
      ({ loadingOlder }: { loadingOlder: boolean }) =>
        useChatVirtuoso({
          ...hookOptions([{ id: "message-1" }]),
          hasMoreOlder: true,
          loadingOlder,
          loadOlder,
        }),
      { initialProps: { loadingOlder: false } }
    )
    // attachScroller starts at scrollTop 500 with clientHeight 500 — inside
    // the prefetch band.
    const viewport = attachScroller(result.current.handleScrollerRef)

    // Standing still inside the band is not a reason to pull history: on entry
    // the whole loaded window is usually under three viewports tall.
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    expect(loadOlder).not.toHaveBeenCalled()

    const scrollUpTo = (top: number) => {
      viewport.setScrollTop(top)
      act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
      act(() => frameCallbacks.shift()?.(0))
    }

    scrollUpTo(400)
    expect(loadOlder).toHaveBeenCalledTimes(1)

    // Latched: further scrolls don't stack requests for the same attempt.
    scrollUpTo(300)
    expect(loadOlder).toHaveBeenCalledTimes(1)
    act(() => result.current.handleStartReached())
    expect(loadOlder).toHaveBeenCalledTimes(1)

    // The host finishing the attempt (loadingOlder edge) re-arms the latch.
    rerender({ loadingOlder: true })
    rerender({ loadingOlder: false })
    scrollUpTo(200)
    expect(loadOlder).toHaveBeenCalledTimes(2)
    act(() => result.current.handleScrollerRef(null))
  })

  it("holds the prefetch until the transcript is revealed", () => {
    const loadOlder = vi.fn()
    const canPrefetchRef = { current: false }
    const { result } = renderHook(() =>
      useChatVirtuoso({
        ...hookOptions([{ id: "message-1" }]),
        hasMoreOlder: true,
        loadingOlder: false,
        loadOlder,
        canPrefetchRef,
      })
    )
    const viewport = attachScroller(result.current.handleScrollerRef)

    // `itemsRendered` fires at mount with no user scroll, and the entry window
    // is still provisional — a page landing here shifts the anchor.
    act(() => result.current.handleItemsRendered([]))
    act(() => frameCallbacks.shift()?.(0))
    expect(loadOlder).not.toHaveBeenCalled()

    canPrefetchRef.current = true
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    viewport.setScrollTop(400)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    expect(loadOlder).toHaveBeenCalledTimes(1)
    act(() => result.current.handleScrollerRef(null))
  })

  it("does not prefetch while far from the top or already loading", () => {
    const loadOlder = vi.fn()
    const { result } = renderHook(() =>
      useChatVirtuoso({
        ...hookOptions([{ id: "message-1" }]),
        hasMoreOlder: true,
        loadingOlder: true,
        loadOlder,
      })
    )
    const viewport = attachScroller(result.current.handleScrollerRef)

    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    expect(loadOlder).not.toHaveBeenCalled()
    act(() => result.current.handleScrollerRef(null))

    const farLoadOlder = vi.fn()
    const { result: farResult } = renderHook(() =>
      useChatVirtuoso({
        ...hookOptions([{ id: "message-1" }]),
        hasMoreOlder: true,
        loadOlder: farLoadOlder,
      })
    )
    const farViewport = attachScroller(farResult.current.handleScrollerRef)
    farViewport.setScrollHeight(5000)
    farViewport.setScrollTop(4000)

    act(() => farViewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    expect(farLoadOlder).not.toHaveBeenCalled()
    act(() => farResult.current.handleScrollerRef(null))
  })

  // Entering at the unread divider is the case the attach metrics used to
  // break: `scrollHeight ≈ clientHeight` and `scrollTop 0` read as "one pixel
  // from the bottom", and `itemsRendered` fires at mount with nothing else on
  // file — so the first rows measuring taller than their estimate looked like
  // in-place growth at the bottom and yanked the reader down.
  it("derives nothing from the attach metrics until a real scroll", () => {
    const loadOlder = vi.fn()
    const dividerRows: ChatRow[] = [
      { type: "divider", key: "unread-divider" },
      {
        type: "separator",
        key: "sep-message-1",
        at: "2026-01-01T12:00:00.000Z",
        forId: "message-1",
      },
    ]
    const { result } = renderHook(() =>
      useChatVirtuoso({
        ...hookOptions([{ id: "message-1" }]),
        rows: dividerRows,
        itemCount: dividerRows.length,
        hasMoreOlder: true,
        loadOlder,
      })
    )
    expect(result.current.initialLocation.index).toBe(0)
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollBy, scrollToIndex } = stubVirtuosoHandle(
      result.current.virtuosoRef
    )

    act(() => result.current.handleItemsRendered([]))
    act(() => frameCallbacks.shift()?.(0))

    // Every measured row grows the list while Virtuoso settles the entry.
    act(() => result.current.handleTotalListHeightChanged(4000))
    act(() => result.current.handleTotalListHeightChanged(5000))
    expect(scrollBy).not.toHaveBeenCalled()
    expect(scrollToIndex).not.toHaveBeenCalled()

    // Virtuoso's own entry scroll lands: real metrics now, but the reader
    // still hasn't moved, so nothing may pull history in either.
    viewport.setScrollHeight(5000)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    act(() => frameCallbacks.shift()?.(0))
    act(() => result.current.handleTotalListHeightChanged(6000))

    expect(scrollBy).not.toHaveBeenCalled()
    expect(scrollToIndex).not.toHaveBeenCalled()
    expect(loadOlder).not.toHaveBeenCalled()
    act(() => result.current.handleScrollerRef(null))
  })

  // Only a wheel used to count as taking over, so dragging the Radix scrollbar
  // (or Page Up / Home / the arrow keys, which produce no wheel at all) left
  // following armed and the next in-place growth pulled the reader back down.
  it("pauses following for an upward scroll that never fired a wheel", () => {
    const { result } = renderVirtuoso()
    const viewport = attachScroller(result.current.handleScrollerRef)
    const { scrollBy } = stubVirtuosoHandle(result.current.virtuosoRef)

    act(() => result.current.handleTotalListHeightChanged(1000))
    expect(result.current.followOutput).not.toBe(false)

    // A first real scroll replaces the attach's provisional metrics.
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    scrollBy.mockClear()

    viewport.setScrollTop(200)
    act(() => viewport.scroller.dispatchEvent(new Event("scroll")))
    expect(result.current.followOutput).toBe(false)

    viewport.setScrollHeight(1100)
    act(() => result.current.handleTotalListHeightChanged(1100))
    expect(scrollBy).not.toHaveBeenCalled()
    expect(viewport.getScrollTop()).toBe(200)
    act(() => result.current.handleScrollerRef(null))
  })

  it.each([0, 120])(
    "does not pause following for a %i downward/empty wheel delta",
    (deltaY) => {
      const { result } = renderVirtuoso()
      const viewport = attachScroller(result.current.handleScrollerRef)
      const { scrollBy } = stubVirtuosoHandle(result.current.virtuosoRef)

      act(() => result.current.handleTotalListHeightChanged(1000))
      scrollBy.mockClear()
      act(() => {
        viewport.scroller.dispatchEvent(new WheelEvent("wheel", { deltaY }))
      })

      expect(result.current.followOutput).not.toBe(false)
      viewport.setScrollHeight(1100)
      const writesBeforeGrowth = viewport.getScrollWrites()
      act(() => result.current.handleTotalListHeightChanged(1100))
      expect(viewport.getScrollTop()).toBe(500)
      expect(viewport.getScrollWrites()).toBe(writesBeforeGrowth)
      expect(scrollBy).toHaveBeenCalledWith({ top: 100 })
      expect(frameCallbacks).toHaveLength(0)
      act(() => result.current.handleScrollerRef(null))
    }
  )
})
