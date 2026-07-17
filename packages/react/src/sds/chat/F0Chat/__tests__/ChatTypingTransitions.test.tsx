import { act } from "@testing-library/react"
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import {
  type F0ChatMessage,
  type F0ChatRuntime,
  type F0ChatUser,
} from "../types"

// Pass-through virtualizer (jsdom has no layout) — same as F0Chat.test.tsx.
vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: ({ count }: { count: number }) => {
    const ROW = 40
    const items = Array.from({ length: count }, (_, index) => ({
      index,
      key: index,
      start: index * ROW,
      size: ROW,
      end: index * ROW + ROW,
    }))
    return {
      getVirtualItems: () => items,
      getTotalSize: () => count * ROW,
      measureElement: () => {},
      scrollToIndex: () => {},
      scrollToOffset: () => {},
      getOffsetForIndex: (index: number) => [index * ROW, "start"],
      getVirtualItemForOffset: (offset: number) =>
        items[
          Math.min(items.length - 1, Math.max(0, Math.floor(offset / ROW)))
        ],
      scrollOffset: 0,
      measure: () => {},
    }
  },
}))

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

const MARIA: F0ChatUser = { id: "other", name: "María José" }
const OTTO: F0ChatUser = { id: "otto", name: "Otto" }

const HELLO: F0ChatMessage = {
  id: "m1",
  author: MARIA,
  body: "Hello there",
  createdAt: new Date().toISOString(),
  isMine: false,
}

const makeRuntime = (
  typingUsers: F0ChatUser[],
  messages: F0ChatMessage[] = [HELLO],
  channelType: "dm" | "group" = "dm"
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: channelType,
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
  },
  status: "ready",
  messages,
  typingUsers,
  hasMoreOlder: false,
  loadingOlder: false,
  unreadCount: 0,
  firstUnreadId: null,
  sendMessage: vi.fn(),
  retryMessage: vi.fn(),
  loadOlder: vi.fn(),
  toggleReaction: vi.fn(),
  deleteMessage: vi.fn(),
  onInputActivity: vi.fn(),
  markRead: vi.fn(),
})

const chatFor = (
  typingUsers: F0ChatUser[],
  messages?: F0ChatMessage[],
  channelType?: "dm" | "group"
) => (
  <F0ChatProvider runtime={makeRuntime(typingUsers, messages, channelType)}>
    <F0Chat />
  </F0ChatProvider>
)

const replyFrom = (author: F0ChatUser, body: string): F0ChatMessage => ({
  id: "m2",
  author,
  body,
  createdAt: new Date().toISOString(),
  isMine: false,
})

describe("typing indicator transitions", () => {
  it("holds the bubble through the exit window, then removes it", () => {
    const { rerender } = render(chatFor([MARIA]))
    expect(screen.getByRole("status")).toBeInTheDocument()

    // The writer pauses: the row is NOT dropped immediately (it fades out).
    rerender(chatFor([]))
    expect(screen.getByRole("status")).toBeInTheDocument()

    // After the exit window the row is gone.
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
  })

  it("keeps the same bubble when typing resumes within the window", () => {
    const { rerender } = render(chatFor([MARIA]))
    const bubble = screen.getByRole("status")

    rerender(chatFor([]))
    act(() => {
      vi.advanceTimersByTime(100)
    })
    // Resumed before the window closed: the very same node survives (no
    // pop-out/pop-in remount), and it stays past the original deadline.
    rerender(chatFor([MARIA]))
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(screen.getByRole("status")).toBe(bubble)
  })

  it("replaces the dots with the typer's message in the same commit", () => {
    const { rerender } = render(chatFor([MARIA]))
    expect(screen.getByRole("status")).toBeInTheDocument()

    // Same tick: typing clears AND the typer's message lands together — the
    // bubble must replace the dots immediately, no hysteresis ghost.
    rerender(chatFor([], [HELLO, replyFrom(MARIA, "On my way!")]))
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByText("On my way!")).toBeInTheDocument()
  })

  it("cancels an in-flight leaving fade when the typer's message lands", () => {
    const { rerender } = render(chatFor([MARIA]))

    // typing_stop arrives first (staggered, real backends): the leaving fade
    // starts and the dots are still held...
    rerender(chatFor([]))
    expect(screen.getByRole("status")).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(100)
    })
    // ...then the message lands within the window: swap immediately.
    rerender(chatFor([], [HELLO, replyFrom(MARIA, "On my way!")]))
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByText("On my way!")).toBeInTheDocument()
  })

  it("hides the dots when the message lands BEFORE the typing_stop (Stream order)", () => {
    const { rerender } = render(chatFor([MARIA]))
    expect(screen.getByRole("status")).toBeInTheDocument()

    // Stream delivers message.new first — MARIA is still in typingUsers when
    // her bubble lands. Her dots must be suppressed immediately, not ghost
    // under the new message until the stop packet arrives.
    rerender(chatFor([MARIA], [HELLO, replyFrom(MARIA, "On my way!")]))
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByText("On my way!")).toBeInTheDocument()

    // The typing_stop finally lands: still no dots, no flash.
    rerender(chatFor([], [HELLO, replyFrom(MARIA, "On my way!")]))
    expect(screen.queryByRole("status")).not.toBeInTheDocument()

    // A NEW typing_start after the stop shows the dots again.
    rerender(chatFor([MARIA], [HELLO, replyFrom(MARIA, "On my way!")]))
    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("keeps the dots when someone ELSE's message lands while typing (group)", () => {
    const { rerender } = render(chatFor([MARIA], [HELLO], "group"))
    expect(screen.getByRole("status")).toBeInTheDocument()

    // Otto's message arrives while María is still typing — her dots stay.
    rerender(chatFor([MARIA], [HELLO, replyFrom(OTTO, "Hey all")], "group"))
    expect(screen.getByRole("status")).toBeInTheDocument()
    expect(screen.getByText("Hey all")).toBeInTheDocument()
  })
})
