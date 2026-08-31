import { memo } from "react"
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider, useF0ChatEmit } from "../providers/F0ChatProvider"
import {
  type F0ChatEvents,
  type F0ChatMessage,
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

// jsdom ships no `navigator.clipboard`, and the copy event now waits on the
// write to resolve — without a stub the optional chain short-circuits and
// nothing is reported.
const writeText = vi.fn<(text: string) => Promise<void>>()

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
  Object.assign(navigator, { clipboard: { writeText } })
})

beforeEach(() => {
  writeText.mockReset()
  writeText.mockResolvedValue(undefined)
})

const theirs: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "María José" },
  body: "Hello there",
  createdAt: new Date().toISOString(),
  isMine: false,
}

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
  messages: [theirs],
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

const renderChat = (
  runtime: F0ChatRuntime = makeRuntime(),
  events?: F0ChatEvents
) =>
  render(
    <F0ChatProvider runtime={runtime} events={events}>
      <F0Chat />
    </F0ChatProvider>
  )

/** Open the ellipsis menu on the only message in the transcript. */
const openMessageMenu = async () => {
  const menus = screen.getAllByRole("button", { name: /message actions/i })
  await userEvent.click(menus[0])
}

/**
 * Counts its own renders while consuming the emit context — the exact shape a
 * memoized transcript row has. Node-identity assertions cannot do this job:
 * React reuses host DOM nodes across re-renders, so `toBe(sameNode)` passes
 * even when every row re-rendered.
 */
const probeRenders = { count: 0 }
const EmitProbe = memo(function EmitProbe() {
  useF0ChatEmit()
  probeRenders.count++
  return null
})

describe("F0Chat events — render isolation", () => {
  beforeEach(() => {
    probeRenders.count = 0
  })

  it("does not re-render an emit consumer when the events object identity changes", () => {
    // Kills the mutant "put the emit value on F0ChatContext instead of its own
    // constant-identity context" — that context changes on every runtime rebuild.
    const runtime = makeRuntime()
    const { rerender } = render(
      <F0ChatProvider runtime={runtime} events={{ onMessageCopied: vi.fn() }}>
        <EmitProbe />
      </F0ChatProvider>
    )
    expect(probeRenders.count).toBe(1)

    // A fresh inline object every render is what a host rebuilding its runtime
    // on each transport event produces. It must not reach the tree.
    for (let i = 0; i < 5; i++) {
      rerender(
        <F0ChatProvider runtime={runtime} events={{ onMessageCopied: vi.fn() }}>
          <EmitProbe />
        </F0ChatProvider>
      )
    }

    expect(probeRenders.count).toBe(1)
  })

  it("does not re-render an emit consumer when the runtime churns", () => {
    // One brand-new runtime object per render — a websocket packet each.
    const events: F0ChatEvents = { onMessageCopied: vi.fn() }
    const { rerender } = render(
      <F0ChatProvider runtime={makeRuntime()} events={events}>
        <EmitProbe />
      </F0ChatProvider>
    )
    expect(probeRenders.count).toBe(1)

    for (let i = 0; i < 5; i++) {
      rerender(
        <F0ChatProvider runtime={makeRuntime()} events={events}>
          <EmitProbe />
        </F0ChatProvider>
      )
    }

    expect(probeRenders.count).toBe(1)
  })

  it("emits through the latest handler after the events object is replaced", async () => {
    const stale = vi.fn()
    const fresh = vi.fn()
    const runtime = makeRuntime()

    const { rerender } = render(
      <F0ChatProvider runtime={runtime} events={{ onMessageCopied: stale }}>
        <F0Chat />
      </F0ChatProvider>
    )
    rerender(
      <F0ChatProvider runtime={runtime} events={{ onMessageCopied: fresh }}>
        <F0Chat />
      </F0ChatProvider>
    )

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Copy$/i }))

    await waitFor(() => expect(fresh).toHaveBeenCalledWith({ messageId: "m1" }))
    expect(stale).not.toHaveBeenCalled()
  })

  it("works with no events prop at all", async () => {
    renderChat(makeRuntime())
    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Copy$/i }))
    expect(screen.getByText("Hello there")).toBeInTheDocument()
  })
})

describe("F0Chat events — message actions", () => {
  it("reports a copy, which reaches the host no other way", async () => {
    const onMessageCopied = vi.fn()
    renderChat(makeRuntime(), { onMessageCopied })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Copy$/i }))

    await waitFor(() =>
      expect(onMessageCopied).toHaveBeenCalledWith({ messageId: "m1" })
    )
  })

  it("does NOT report a copy the clipboard refused", async () => {
    // Kills the mutant "emit next to writeText instead of on its resolution":
    // a non-secure origin or a lost focus rejects, and nothing was copied.
    const onMessageCopied = vi.fn()
    writeText.mockRejectedValue(new Error("NotAllowedError"))
    renderChat(makeRuntime(), { onMessageCopied })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Copy$/i }))

    await waitFor(() => expect(writeText).toHaveBeenCalled())
    expect(onMessageCopied).not.toHaveBeenCalled()
  })

  it("reports starting a reply", async () => {
    const onReplyStarted = vi.fn()
    renderChat(makeRuntime(), { onReplyStarted })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))

    expect(onReplyStarted).toHaveBeenCalledWith({ messageId: "m1" })
  })

  // The started events moved to the compose-target transition so the routes the
  // menu cannot see report too.
  it("reports starting a reply from a double-click", async () => {
    const onReplyStarted = vi.fn()
    renderChat(makeRuntime(), { onReplyStarted })

    await userEvent.dblClick(screen.getAllByTestId("chat-message-surface")[0])

    expect(onReplyStarted).toHaveBeenCalledWith({ messageId: "m1" })
  })

  it("reports starting an edit from the arrow-up shortcut", async () => {
    const onEditStarted = vi.fn()
    const mine: F0ChatMessage = {
      id: "m2",
      author: { id: "me", name: "Me" },
      body: "Hi back",
      createdAt: new Date().toISOString(),
      isMine: true,
    }
    renderChat(
      makeRuntime({
        messages: [theirs, mine],
        editMessage: vi.fn(),
        editWindowMs: 60_000,
      }),
      { onEditStarted }
    )

    await userEvent.click(screen.getByPlaceholderText(/write something here/i))
    await userEvent.keyboard("{ArrowUp}")

    expect(onEditStarted).toHaveBeenCalledWith({ messageId: "m2" })
  })

  it("reports viewing the info panel", async () => {
    const onMessageInfoViewed = vi.fn()
    renderChat(makeRuntime(), { onMessageInfoViewed })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /info/i }))

    expect(onMessageInfoViewed).toHaveBeenCalledWith({ messageId: "m1" })
  })
})

describe("F0Chat events — reactions", () => {
  it("distinguishes removing from adding, which toggleReaction cannot", async () => {
    const onReactionAdded = vi.fn()
    const onReactionRemoved = vi.fn()
    const toggleReaction = vi.fn()

    renderChat(
      makeRuntime({
        toggleReaction,
        messages: [
          {
            ...theirs,
            reactions: [{ emoji: "👍", count: 1, reactedByMe: true }],
          },
        ],
      }),
      { onReactionAdded, onReactionRemoved }
    )

    // 👍 is already mine, so the quick row's 👍 is a REMOVE. The runtime call
    // is byte-identical either way — only the event can say which happened.
    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: "👍" }))

    expect(toggleReaction).toHaveBeenCalledWith("m1", "👍")
    expect(onReactionRemoved).toHaveBeenCalledWith({
      messageId: "m1",
      emoji: "👍",
      source: "quickRow",
    })
    expect(onReactionAdded).not.toHaveBeenCalled()
  })

  it("reports which affordance produced the reaction", async () => {
    const onReactionAdded = vi.fn()
    renderChat(makeRuntime(), { onReactionAdded })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: "❤️" }))

    expect(onReactionAdded).toHaveBeenCalledWith({
      messageId: "m1",
      emoji: "❤️",
      source: "quickRow",
    })
  })
})

describe("F0Chat events — reply abandonment", () => {
  it("reports cancelling a reply from the chip", async () => {
    const onReplyCancelled = vi.fn()
    renderChat(makeRuntime(), { onReplyCancelled })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))
    await userEvent.click(screen.getByRole("button", { name: /remove quote/i }))

    await waitFor(() =>
      expect(onReplyCancelled).toHaveBeenCalledWith({ messageId: "m1" })
    )
  })

  it("does NOT report a cancellation when the reply is actually sent", async () => {
    const onReplyCancelled = vi.fn()
    const sendMessage = vi.fn()
    renderChat(makeRuntime({ sendMessage }), { onReplyCancelled })

    await openMessageMenu()
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))

    const textarea = screen.getByPlaceholderText("Write something here..")
    fireEvent.change(textarea, { target: { value: "sure" } })
    fireEvent.keyDown(textarea, { key: "Enter" })

    // Sending clears the reply target too. Counting that as abandonment would
    // make the metric meaningless.
    expect(sendMessage).toHaveBeenCalled()
    expect(onReplyCancelled).not.toHaveBeenCalled()
  })
})
