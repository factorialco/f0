import {
  type ComponentType,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import { type ItemProps, type ListItem } from "react-virtuoso"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRender as render, screen } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"
import { type ChatRow } from "../utils/grouping"

const virtuosoHarness = vi.hoisted(() => ({
  setHeight: undefined as ((height: number) => void) | undefined,
  itemContentCalls: 0,
  rootClassName: undefined as string | undefined,
  firstItemIndex: undefined as number | undefined,
  itemCount: 0,
  itemsRendered: undefined as
    | ((items: ListItem<ChatRow>[]) => void)
    | undefined,
  viewport: undefined as HTMLDivElement | undefined,
  revealList: undefined as (() => void) | undefined,
  increaseViewportBy: undefined as { top: number; bottom: number } | undefined,
  minOverscanItemCount: undefined as
    | { top: number; bottom: number }
    | undefined,
  skipAnimationFrameInResizeObserver: false,
}))

type MockScrollerProps = HTMLAttributes<HTMLDivElement> & {
  context: {
    measureStripRef: { current: HTMLDivElement | null }
    onListVisibilityChange: (visible: boolean) => void
  }
}

type MockVirtuosoProps = {
  data?: ChatRow[]
  context: MockScrollerProps["context"]
  components?: {
    Scroller?: ComponentType<MockScrollerProps>
    List?: ComponentType<
      HTMLAttributes<HTMLDivElement> & {
        context: MockScrollerProps["context"]
        "data-testid": string
      }
    >
    Item?: ComponentType<
      ItemProps<ChatRow> & { context: MockScrollerProps["context"] }
    >
  }
  computeItemKey?: (index: number, row: ChatRow) => string | number
  itemContent: (
    index: number,
    row: ChatRow,
    context: MockScrollerProps["context"]
  ) => ReactNode
  totalListHeightChanged?: (height: number) => void
  itemsRendered?: (items: ListItem<ChatRow>[]) => void
  firstItemIndex?: number
  scrollerRef?: (element: HTMLElement | Window | null) => void
  className?: string
  increaseViewportBy?: { top: number; bottom: number }
  minOverscanItemCount?: { top: number; bottom: number }
  skipAnimationFrameInResizeObserver?: boolean
}

vi.mock("react-virtuoso", () => ({
  Virtuoso: forwardRef(function MockVirtuoso(
    {
      data = [],
      context,
      components,
      computeItemKey,
      itemContent,
      totalListHeightChanged,
      itemsRendered,
      firstItemIndex,
      scrollerRef,
      className,
      increaseViewportBy,
      minOverscanItemCount,
      skipAnimationFrameInResizeObserver,
    }: MockVirtuosoProps,
    _ref
  ) {
    virtuosoHarness.setHeight = totalListHeightChanged
    virtuosoHarness.rootClassName = className
    virtuosoHarness.firstItemIndex = firstItemIndex
    virtuosoHarness.itemCount = data.length
    virtuosoHarness.itemsRendered = itemsRendered
    virtuosoHarness.increaseViewportBy = increaseViewportBy
    virtuosoHarness.minOverscanItemCount = minOverscanItemCount
    virtuosoHarness.skipAnimationFrameInResizeObserver = Boolean(
      skipAnimationFrameInResizeObserver
    )
    const [listVisible, setListVisible] = useState(false)
    virtuosoHarness.revealList = () => setListVisible(true)

    const viewportRef = useRef<HTMLDivElement | null>(null)
    if (viewportRef.current == null) {
      const viewport = document.createElement("div")
      let scrollTop = 0
      Object.defineProperties(viewport, {
        clientHeight: { configurable: true, get: () => 500 },
        scrollHeight: { configurable: true, get: () => 1000 },
        scrollTop: {
          configurable: true,
          get: () => scrollTop,
          set: (value: number) => {
            scrollTop = value
          },
        },
      })
      viewportRef.current = viewport
    }
    virtuosoHarness.viewport = viewportRef.current
    useEffect(() => {
      scrollerRef?.(viewportRef.current)
      return () => scrollerRef?.(null)
    }, [scrollerRef])

    const Item = components?.Item
    const content = data.map((row, index) => {
      virtuosoHarness.itemContentCalls += 1
      const rendered = (
        <div key={computeItemKey?.(index, row) ?? index}>
          {itemContent(index, row, context)}
        </div>
      )
      return Item ? (
        <Item
          key={computeItemKey?.(index, row) ?? index}
          item={row}
          context={context}
          data-index={index}
          data-item-index={index}
          data-known-size={48}
          style={{ overflowAnchor: "none" }}
        >
          {rendered}
        </Item>
      ) : (
        rendered
      )
    })
    const Scroller = components?.Scroller
    const List = components?.List
    const list = List ? (
      <List
        context={context}
        data-testid="virtuoso-item-list"
        style={{ visibility: listVisible ? "visible" : "hidden" }}
      >
        {content}
      </List>
    ) : (
      content
    )

    return Scroller ? (
      <Scroller context={context} className={className}>
        {list}
      </Scroller>
    ) : (
      <div>{content}</div>
    )
  }),
}))

vi.mock("../components/LocationMap", () => ({
  default: ({ latitude }: { latitude: number }) => (
    <div data-testid="chat-location-map" data-latitude={latitude} />
  ),
}))

let frameCallbacks: FrameRequestCallback[]

beforeEach(() => {
  frameCallbacks = []
  vi.spyOn(globalThis, "requestAnimationFrame").mockImplementation(
    (callback: FrameRequestCallback) => {
      frameCallbacks.push(callback)
      return frameCallbacks.length
    }
  )
  vi.spyOn(globalThis, "cancelAnimationFrame").mockImplementation(() => {})
  vi.stubGlobal(
    "requestIdleCallback",
    (callback: IdleRequestCallback): number =>
      window.setTimeout(
        () =>
          callback({
            didTimeout: false,
            timeRemaining: () => 10,
          }),
        0
      )
  )
  vi.stubGlobal("cancelIdleCallback", (handle: number) =>
    window.clearTimeout(handle)
  )
  vi.stubGlobal(
    "IntersectionObserver",
    class VisibleIntersectionObserver {
      private readonly callback: IntersectionObserverCallback

      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }

      observe = (target: Element) => {
        this.callback(
          [{ target, isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        )
      }

      unobserve() {}
      disconnect() {}
    }
  )
  Element.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  virtuosoHarness.setHeight = undefined
  virtuosoHarness.itemContentCalls = 0
  virtuosoHarness.rootClassName = undefined
  virtuosoHarness.firstItemIndex = undefined
  virtuosoHarness.itemCount = 0
  virtuosoHarness.itemsRendered = undefined
  virtuosoHarness.viewport = undefined
  virtuosoHarness.revealList = undefined
  virtuosoHarness.increaseViewportBy = undefined
  virtuosoHarness.minOverscanItemCount = undefined
  virtuosoHarness.skipAnimationFrameInResizeObserver = false
})

const now = new Date().toISOString()

const locationMessage = (id: string, latitude: number): F0ChatMessage => ({
  id,
  author: { id: "other", name: "Ana" },
  body: `Location ${id}`,
  createdAt: now,
  isMine: false,
  attachments: [
    {
      kind: "location",
      latitude,
      longitude: 2.1607,
      name: `Place ${id}`,
    },
  ],
})

const makeRuntime = (
  messages: F0ChatMessage[],
  channelId = "c1"
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: channelId,
    type: "dm",
    title: "Ana",
    avatar: { type: "person", firstName: "Ana", lastName: "García" },
  },
  status: "ready",
  messages,
  typingUsers: [],
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  loadOlder: vi.fn(),
  markRead: vi.fn(),
})

describe("chat scrolling performance wiring", () => {
  it("configures synchronous resize reporting and premeasurement buffers", () => {
    const { container } = render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )

    expect(virtuosoHarness.increaseViewportBy).toEqual({
      top: 1200,
      bottom: 200,
    })
    expect(virtuosoHarness.minOverscanItemCount).toEqual({
      top: 6,
      bottom: 3,
    })
    expect(virtuosoHarness.skipAnimationFrameInResizeObserver).toBe(true)

    const viewport = container.querySelector<HTMLElement>(
      "[data-radix-scroll-area-viewport]"
    )
    const strip = container.querySelector<HTMLElement>(
      'div.w-0[aria-hidden="true"]'
    )
    expect(viewport?.style.overflowAnchor).toBe("none")
    expect(strip?.style.overflowAnchor).toBe("none")
    const item = container.querySelector<HTMLElement>(
      "[data-chat-virtuoso-item]"
    )
    expect(item).toHaveClass("flow-root", "min-h-px")
    expect(item).toHaveAttribute("data-item-index", "0")
    expect(item).not.toHaveAttribute("context")
    expect(item?.style.overflowAnchor).toBe("none")
  })

  it("does not add reduced-motion subscriptions per transcript row", () => {
    const addEventListener = vi.fn()
    const removeEventListener = vi.fn()
    const addListener = vi.fn()
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: false,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addEventListener,
      removeEventListener,
      addListener,
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })

    const { rerender } = render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )
    const subscriptionsAfterFirstRow = addListener.mock.calls.length

    rerender(
      <F0ChatProvider
        runtime={makeRuntime([
          locationMessage("m1", 41.3894),
          ...Array.from({ length: 20 }, (_, index) =>
            locationMessage(`extra-${index}`, 41.4 + index)
          ),
        ])}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(subscriptionsAfterFirstRow).toBeGreaterThan(0)
    expect(addListener).toHaveBeenCalledTimes(subscriptionsAfterFirstRow)
    expect(addEventListener).not.toHaveBeenCalled()
  })

  it("contains horizontal overflow when F0Chat renders without ApplicationFrame", () => {
    const { container } = render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )

    expect(container.firstElementChild).toHaveClass("overflow-x-hidden")
  })

  it("keeps Virtuoso's provisional window hidden until layout is stable", () => {
    render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )

    expect(virtuosoHarness.rootClassName).toContain("opacity-0")

    act(() => {
      virtuosoHarness.revealList?.()
    })
    act(() => {
      for (let frame = 0; frame < 10; frame++) {
        frameCallbacks.shift()?.(frame * 16)
      }
    })
    expect(virtuosoHarness.rootClassName).toContain("opacity-100")
  })

  it("keeps heavy previews as placeholders before transcript readiness", () => {
    render(
      <F0ChatProvider
        runtime={makeRuntime([
          locationMessage("m1", 41.3894),
          locationMessage("m2", 41.4),
        ])}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(screen.queryByTestId("chat-location-map")).not.toBeInTheDocument()
    expect(screen.getAllByTestId("skeleton")).toHaveLength(2)
  })

  it("coalesces a burst of measure-strip corrections before paint", async () => {
    const { container } = render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )
    const strip = container.querySelector<HTMLElement>(
      'div.w-0[aria-hidden="true"]'
    )
    expect(strip).not.toBeNull()

    let writtenHeight = ""
    const heightSetter = vi.fn((height: string) => {
      writtenHeight = height
    })
    Object.defineProperty(strip!.style, "height", {
      configurable: true,
      get: () => writtenHeight,
      set: heightSetter,
    })

    await act(async () => {
      virtuosoHarness.setHeight?.(100)
      virtuosoHarness.setHeight?.(200)
      virtuosoHarness.setHeight?.(300)
      await Promise.resolve()
    })

    expect(heightSetter).toHaveBeenCalledOnce()
    expect(heightSetter).toHaveBeenCalledWith("300px")
  })
})
