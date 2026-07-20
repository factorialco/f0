import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import {
  act,
  fireEvent,
  zeroRender as render,
  screen,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { formatClock } from "../utils/natural-time"
import {
  type F0ChatMessage,
  type F0ChatMessageStatus,
  type F0ChatRuntime,
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

const mine = (status: F0ChatMessageStatus): F0ChatMessage => ({
  id: "m2",
  author: { id: "me", name: "Me" },
  body: "My message",
  createdAt: new Date().toISOString(),
  isMine: true,
  status,
})

const makeRuntime = (
  overrides: Partial<F0ChatRuntime> = {}
): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
  },
  status: "ready",
  messages: [
    {
      id: "m1",
      author: { id: "other", name: "María José" },
      body: "Hello there",
      createdAt: new Date().toISOString(),
      isMine: false,
    },
    mine("sent"),
  ],
  typingUsers: [],
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
  ...overrides,
})

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

describe("sending clock", () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it("stays hidden for fast sends and reveals after the 500ms delay", () => {
    const message = mine("sending")
    renderChat(makeRuntime({ messages: [message] }))
    const clock = screen.getByTestId("chat-sending-clock")
    const sendTime = formatClock(new Date(message.createdAt))
    expect(clock).toHaveAttribute("aria-hidden", "true")
    expect(clock.className).toContain("opacity-0")

    // Still hidden below the threshold (fast sends never see it) — the button
    // isn't even mounted, so it can't be an invisible focus target.
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(clock).toHaveAttribute("aria-hidden", "true")
    expect(
      screen.queryByRole("button", { name: sendTime })
    ).not.toBeInTheDocument()

    // ...revealed once the send has been in flight for half a second.
    act(() => {
      vi.advanceTimersByTime(150)
    })
    expect(clock).toHaveAttribute("aria-hidden", "false")
    expect(clock.className).toContain("opacity-100")
  })

  it("reveals an action-less button whose tooltip is the send time", () => {
    const message = mine("sending")
    renderChat(makeRuntime({ messages: [message] }))
    act(() => {
      vi.advanceTimersByTime(600)
    })

    // hideLabel makes the send time the button's accessible name and tooltip.
    const sendTime = formatClock(new Date(message.createdAt))
    const clockButton = screen.getByRole("button", { name: sendTime })
    // It carries no action: clicking opens nothing and calls nothing.
    fireEvent.click(clockButton)
    expect(screen.queryByRole("button", { name: "Retry" })).toBeNull()
  })

  it("renders no clock for settled messages", () => {
    renderChat(makeRuntime({ messages: [mine("sent")] }))
    expect(screen.queryByTestId("chat-sending-clock")).not.toBeInTheDocument()
  })

  it("offers no actions while the message is in flight", () => {
    renderChat(makeRuntime({ messages: [mine("sending")] }))
    expect(
      screen.queryByRole("button", { name: "Message actions" })
    ).not.toBeInTheDocument()
  })
})

describe("failed message", () => {
  // The indicator's label is "Not sent · <send time>".
  const notSent = /^Not sent · /

  it("shows the critical indicator without hover and dims the bubble", () => {
    renderChat(makeRuntime({ messages: [mine("failed")] }))
    expect(screen.getByRole("button", { name: notSent })).toBeInTheDocument()
    expect(screen.getByText("My message").closest(".opacity-60")).not.toBeNull()
  })

  it("labels the indicator with the send time", () => {
    const message = mine("failed")
    renderChat(makeRuntime({ messages: [message] }))
    const label = `Not sent · ${formatClock(new Date(message.createdAt))}`
    expect(screen.getByRole("button", { name: label })).toBeInTheDocument()
  })

  it("opens a reduced Retry/Delete menu from the indicator", () => {
    const retryMessage = vi.fn()
    renderChat(makeRuntime({ messages: [mine("failed")], retryMessage }))

    fireEvent.click(screen.getByRole("button", { name: notSent }))

    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument()
    // The full menu never leaks into the failed state.
    expect(
      screen.queryByRole("button", { name: "Reply" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Copy" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Info" })
    ).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: "Retry" }))
    expect(retryMessage).toHaveBeenCalledWith("m2")
  })

  it("deletes the failed echo via the reduced menu", () => {
    const deleteMessage = vi.fn()
    renderChat(makeRuntime({ messages: [mine("failed")], deleteMessage }))
    fireEvent.click(screen.getByRole("button", { name: notSent }))
    fireEvent.click(screen.getByRole("button", { name: "Delete" }))
    expect(deleteMessage).toHaveBeenCalledWith("m2")
  })

  it("replaces the hover ellipsis with the alert (single affordance)", () => {
    renderChat(makeRuntime({ messages: [mine("failed")] }))
    // The failed alert IS the actions trigger — no separate ellipsis rendered.
    expect(
      screen.queryByRole("button", { name: "Message actions" })
    ).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: notSent })).toBeInTheDocument()
  })

  it("shows no footer text under a failed last message", () => {
    renderChat(makeRuntime({ messages: [mine("failed")] }))
    expect(
      screen.queryByText("Couldn't load this conversation")
    ).not.toBeInTheDocument()
    expect(screen.queryByText(/^Sent/)).not.toBeInTheDocument()
  })
})
