import {
  type ComponentType,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"
import { type ChatRow } from "../utils/grouping"

const virtuosoHarness = vi.hoisted(() => ({
  setScrolling: undefined as ((scrolling: boolean) => void) | undefined,
  setHeight: undefined as ((height: number) => void) | undefined,
  itemContentCalls: 0,
}))

type MockScrollerProps = HTMLAttributes<HTMLDivElement> & {
  context: {
    measureStripRef: { current: HTMLDivElement | null }
  }
}

type MockVirtuosoProps = {
  data?: ChatRow[]
  context: MockScrollerProps["context"]
  components?: {
    Scroller?: ComponentType<MockScrollerProps>
  }
  computeItemKey?: (index: number, row: ChatRow) => string | number
  itemContent: (
    index: number,
    row: ChatRow,
    context: MockScrollerProps["context"]
  ) => ReactNode
  isScrolling?: (scrolling: boolean) => void
  totalListHeightChanged?: (height: number) => void
}

vi.mock("react-virtuoso", () => ({
  Virtuoso: forwardRef(function MockVirtuoso(
    {
      data = [],
      context,
      components,
      computeItemKey,
      itemContent,
      isScrolling,
      totalListHeightChanged,
    }: MockVirtuosoProps,
    _ref
  ) {
    virtuosoHarness.setScrolling = isScrolling
    virtuosoHarness.setHeight = totalListHeightChanged

    const content = data.map((row, index) => {
      virtuosoHarness.itemContentCalls += 1
      return (
        <div key={computeItemKey?.(index, row) ?? index}>
          {itemContent(index, row, context)}
        </div>
      )
    })
    const Scroller = components?.Scroller

    return Scroller ? (
      <Scroller context={context}>{content}</Scroller>
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
  Element.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  vi.restoreAllMocks()
  virtuosoHarness.setScrolling = undefined
  virtuosoHarness.setHeight = undefined
  virtuosoHarness.itemContentCalls = 0
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

const makeRuntime = (messages: F0ChatMessage[]): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
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
  it("does not re-run itemContent when scroll activity toggles", () => {
    render(
      <F0ChatProvider runtime={makeRuntime([locationMessage("m1", 41.3894)])}>
        <F0Chat />
      </F0ChatProvider>
    )
    const callsAfterRender = virtuosoHarness.itemContentCalls

    act(() => virtuosoHarness.setScrolling?.(true))
    expect(virtuosoHarness.itemContentCalls).toBe(callsAfterRender)

    act(() => virtuosoHarness.setScrolling?.(false))
    expect(virtuosoHarness.itemContentCalls).toBe(callsAfterRender)
  })

  it("defers only new heavy previews while Virtuoso reports scrolling", async () => {
    const firstMessage = locationMessage("m1", 41.3894)
    const { container, rerender } = render(
      <F0ChatProvider runtime={makeRuntime([firstMessage])}>
        <F0Chat />
      </F0ChatProvider>
    )

    expect(await screen.findAllByTestId("chat-location-map")).toHaveLength(1)

    act(() => virtuosoHarness.setScrolling?.(true))
    rerender(
      <F0ChatProvider
        runtime={makeRuntime([firstMessage, locationMessage("m2", 41.4)])}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(screen.getAllByTestId("chat-location-attachment")).toHaveLength(2)
    const mountedMap = screen.getByTestId("chat-location-map")
    expect(mountedMap).toHaveAttribute("data-latitude", "41.3894")
    expect(
      container.querySelector(
        '[data-testid="chat-location-map"][data-latitude="41.4"]'
      )
    ).not.toBeInTheDocument()

    act(() => virtuosoHarness.setScrolling?.(false))

    await waitFor(() =>
      expect(screen.getAllByTestId("chat-location-map")).toHaveLength(2)
    )
  })

  it("writes the latest measure-strip height once per animation frame", () => {
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

    act(() => {
      virtuosoHarness.setHeight?.(100)
      virtuosoHarness.setHeight?.(200)
      virtuosoHarness.setHeight?.(300)
    })

    expect(heightSetter).not.toHaveBeenCalled()

    act(() => {
      frameCallbacks.splice(0).forEach((callback) => callback(0))
    })

    expect(heightSetter).toHaveBeenCalledOnce()
    expect(heightSetter).toHaveBeenCalledWith("300px")
  })
})
