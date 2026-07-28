import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest"

import { getEmojiLabel } from "@/lib/emojis"
import {
  act,
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { formatClock } from "../utils/natural-time"
import {
  type F0ChatMessage,
  type F0ChatMessageStatus,
  type F0ChatRuntime,
} from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

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

  it("dims the bubble and surfaces the alert on a LIVE sending→failed flip", () => {
    // The flip drives the animated transition (bubble dim + alert pop) — this
    // asserts the end state; motion resolves instantly under skipAnimations.
    const { rerender } = renderChat(
      makeRuntime({ messages: [mine("sending")] })
    )
    expect(screen.queryByRole("button", { name: notSent })).toBeNull()
    rerender(
      <F0ChatProvider runtime={makeRuntime({ messages: [mine("failed")] })}>
        <F0Chat />
      </F0ChatProvider>
    )
    expect(screen.getByRole("button", { name: notSent })).toBeInTheDocument()
    expect(screen.getByText("My message").closest(".opacity-60")).not.toBeNull()
  })
})

describe("live content transitions", () => {
  const reaction = (emoji: string, count = 1) => ({
    emoji,
    count,
    reactedByMe: false,
    users: [],
  })
  const withReactions = (
    reactions: F0ChatMessage["reactions"]
  ): F0ChatMessage => ({ ...mine("sent"), reactions })

  it("adds and removes reaction pills as reactions change", async () => {
    const { rerender } = renderChat(
      makeRuntime({ messages: [withReactions([reaction("👍")])] })
    )
    expect(
      screen.getByRole("button", { name: getEmojiLabel("👍") })
    ).toBeInTheDocument()

    // A second emoji pops in next to the first.
    rerender(
      <F0ChatProvider
        runtime={makeRuntime({
          messages: [withReactions([reaction("👍"), reaction("❤️")])],
        })}
      >
        <F0Chat />
      </F0ChatProvider>
    )
    expect(
      screen.getByRole("button", { name: getEmojiLabel("❤️") })
    ).toBeInTheDocument()

    // Removing one leaves the other (the exit resolves instantly in tests).
    rerender(
      <F0ChatProvider
        runtime={makeRuntime({ messages: [withReactions([reaction("❤️")])] })}
      >
        <F0Chat />
      </F0ChatProvider>
    )
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: getEmojiLabel("👍") })
      ).not.toBeInTheDocument()
    )
    expect(
      screen.getByRole("button", { name: getEmojiLabel("❤️") })
    ).toBeInTheDocument()
  })

  it("crossfades a live delete into the tombstone", () => {
    const { rerender } = renderChat(makeRuntime())
    expect(screen.getByText("My message")).toBeInTheDocument()
    rerender(
      <F0ChatProvider
        runtime={makeRuntime({
          messages: [{ ...mine("sent"), deleted: true }],
        })}
      >
        <F0Chat />
      </F0ChatProvider>
    )
    expect(screen.getByText("Message deleted")).toBeInTheDocument()
    expect(screen.queryByText("My message")).not.toBeInTheDocument()
  })

  it("renders a freshly appended system row (animated entry branch)", () => {
    const base = makeRuntime()
    const { rerender } = renderChat(base)
    rerender(
      <F0ChatProvider
        runtime={{
          ...base,
          messages: [
            ...base.messages,
            {
              type: "system",
              id: "s1",
              createdAt: new Date().toISOString(),
              body: "María José left the group",
            },
          ],
        }}
      >
        <F0Chat />
      </F0ChatProvider>
    )
    expect(screen.getByText("María José left the group")).toBeInTheDocument()
  })
})

describe("typing dots", () => {
  it("waves the three dots with the typing keyframe", () => {
    renderChat(
      makeRuntime({ typingUsers: [{ id: "other", name: "María José" }] })
    )
    const bubble = screen.getByRole("status")
    expect(bubble.querySelectorAll(".animate-typing-dot")).toHaveLength(3)
  })
})
