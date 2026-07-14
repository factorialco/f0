import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
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

const theirs: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "María José" },
  body: "Hello there",
  createdAt: new Date().toISOString(),
  isMine: false,
}

const mine = (
  status: F0ChatMessageStatus,
  overrides: Partial<F0ChatMessage> = {}
): F0ChatMessage => ({
  id: "m2",
  author: { id: "me", name: "Me" },
  body: "My message",
  createdAt: new Date().toISOString(),
  isMine: true,
  status,
  ...overrides,
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
  messages: [theirs, mine("sent")],
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

describe("stopTyping", () => {
  it("fires when the composer text is cleared", () => {
    const stopTyping = vi.fn()
    renderChat(makeRuntime({ stopTyping }))
    const textarea = screen.getByPlaceholderText("Write something here..")

    fireEvent.change(textarea, { target: { value: "hola" } })
    expect(stopTyping).not.toHaveBeenCalled()

    fireEvent.change(textarea, { target: { value: "" } })
    expect(stopTyping).toHaveBeenCalledTimes(1)
  })

  it("fires when the message is sent", () => {
    const stopTyping = vi.fn()
    const sendMessage = vi.fn()
    renderChat(makeRuntime({ stopTyping, sendMessage }))
    const textarea = screen.getByPlaceholderText("Write something here..")

    fireEvent.change(textarea, { target: { value: "hola" } })
    fireEvent.keyDown(textarea, { key: "Enter" })

    expect(sendMessage).toHaveBeenCalled()
    expect(stopTyping).toHaveBeenCalled()
  })
})

describe("connection states", () => {
  it("renders the transcript during offline/reconnecting (no banner)", () => {
    renderChat(makeRuntime({ status: "offline" }))
    expect(screen.getByText("Hello there")).toBeInTheDocument()

    renderChat(makeRuntime({ status: "reconnecting" }))
    expect(screen.getAllByText("Hello there").length).toBeGreaterThan(0)
  })

  it("falls back to the skeleton when reconnecting with nothing loaded", () => {
    renderChat(makeRuntime({ status: "reconnecting", messages: [] }))
    // Not the empty state (we can't know it's empty) and no transcript.
    expect(screen.queryByText("No messages yet")).not.toBeInTheDocument()
    expect(screen.queryByText("Hello there")).not.toBeInTheDocument()
  })

  it("offers a Retry action in the error state when the host can reconnect", () => {
    const reconnect = vi.fn()
    renderChat(makeRuntime({ status: "error", reconnect }))
    expect(
      screen.getByText("Couldn't load this conversation")
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: "Retry" }))
    expect(reconnect).toHaveBeenCalledTimes(1)
  })

  it("renders the error state without a Retry button when reconnect is absent", () => {
    renderChat(makeRuntime({ status: "error" }))
    expect(
      screen.getByText("Couldn't load this conversation")
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Retry" })
    ).not.toBeInTheDocument()
  })
})

describe("delivery states", () => {
  it("shows Delivered under the last own message when the backend reports it", () => {
    renderChat(makeRuntime({ messages: [theirs, mine("delivered")] }))
    expect(screen.getByText(/^Delivered/)).toBeInTheDocument()
  })

  it("shows Sending… in the footer from the very first frame (no empty beat)", () => {
    renderChat(makeRuntime({ messages: [theirs, mine("sending")] }))
    expect(screen.getByText("Sending…")).toBeInTheDocument()
  })

  it("appends the failureReason to the failed indicator's label", () => {
    renderChat(
      makeRuntime({
        messages: [
          theirs,
          mine("failed", { failureReason: "Message too long" }),
        ],
      })
    )
    expect(
      screen.getByRole("button", {
        name: /^Not sent · .* — Message too long$/,
      })
    ).toBeInTheDocument()
  })

  it("prefers deleteFailedMessage over deleteMessage for failed echoes", () => {
    const deleteMessage = vi.fn()
    const deleteFailedMessage = vi.fn()
    renderChat(
      makeRuntime({
        messages: [mine("failed")],
        deleteMessage,
        deleteFailedMessage,
      })
    )

    fireEvent.click(screen.getByRole("button", { name: /^Not sent · / }))
    fireEvent.click(screen.getByRole("button", { name: "Delete" }))

    expect(deleteFailedMessage).toHaveBeenCalledWith("m2")
    expect(deleteMessage).not.toHaveBeenCalled()
  })
})

describe("capabilities", () => {
  it("hides the composer entirely on read-only channels (canSend: false)", () => {
    renderChat(makeRuntime({ capabilities: { canSend: false } }))
    expect(
      screen.queryByPlaceholderText("Write something here..")
    ).not.toBeInTheDocument()
  })

  it("disables attaching when canUpload is false even with uploadFiles present", () => {
    renderChat(
      makeRuntime({
        uploadFiles: vi.fn(),
        capabilities: { canUpload: false },
      })
    )
    expect(screen.getByRole("button", { name: "Attach file" })).toBeDisabled()
  })

  it("hides the reaction affordances when canReact is false", () => {
    renderChat(makeRuntime({ capabilities: { canReact: false } }))

    fireEvent.click(
      screen.getAllByRole("button", { name: "Message actions" })[0]
    )

    // Quick-reaction row gone; the rest of the menu still works.
    expect(screen.queryByRole("button", { name: "👍" })).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Reply" })).toBeInTheDocument()
  })

  it("lets canDeleteMessage allow deleting someone else's message (moderation)", () => {
    const deleteMessage = vi.fn()
    renderChat(
      makeRuntime({
        deleteMessage,
        capabilities: { canDeleteMessage: () => true },
      })
    )

    fireEvent.click(
      screen.getAllByRole("button", { name: "Message actions" })[0]
    )
    fireEvent.click(screen.getByRole("button", { name: "Delete" }))
    expect(deleteMessage).toHaveBeenCalledWith("m1")
  })

  it("keeps the default policy without capabilities: no Delete on others' messages", () => {
    renderChat(makeRuntime())
    fireEvent.click(
      screen.getAllByRole("button", { name: "Message actions" })[0]
    )
    expect(
      screen.queryByRole("button", { name: "Delete" })
    ).not.toBeInTheDocument()
  })

  it("lets canEditMessage override the own-message edit policy", () => {
    renderChat(
      makeRuntime({
        editMessage: vi.fn(),
        capabilities: { canEditMessage: (message) => !message.isMine },
      })
    )
    // First trigger belongs to the OTHER person's message.
    fireEvent.click(
      screen.getAllByRole("button", { name: "Message actions" })[0]
    )
    expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument()
  })
})

describe("header actions", () => {
  it("no longer auto-renders Mute/Pin from the runtime toggles — hosts pass headerActions", async () => {
    renderChat(makeRuntime({ toggleMute: vi.fn(), togglePin: vi.fn() }))
    await userEvent.click(screen.getByRole("button", { name: "Options" }))
    // Search is the only built-in action.
    expect(await screen.findByText("Search")).toBeInTheDocument()
    expect(screen.queryByText("Mute")).not.toBeInTheDocument()
    expect(screen.queryByText("Pin")).not.toBeInTheDocument()
  })

  it("surfaces a host action in the menu and fires its callback with the channel", async () => {
    const onClick = vi.fn()
    const runtime = makeRuntime()
    render(
      <F0ChatProvider runtime={runtime}>
        <F0Chat headerActions={[{ id: "mute", label: "Mute", onClick }]} />
      </F0ChatProvider>
    )
    await userEvent.click(screen.getByRole("button", { name: "Options" }))
    await userEvent.click(await screen.findByRole("menuitem", { name: "Mute" }))
    // The Dropdown defers item onClick by 200ms (radix animation workaround).
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
    expect(onClick).toHaveBeenCalledWith(runtime.channel)
  })

  it("filters actions by channelTypes — a group-only action never shows in a DM", async () => {
    render(
      <F0ChatProvider runtime={makeRuntime()}>
        <F0Chat
          headerActions={[
            {
              id: "edit",
              label: "Edit group",
              channelTypes: ["group"],
              onClick: vi.fn(),
            },
          ]}
        />
      </F0ChatProvider>
    )
    await userEvent.click(screen.getByRole("button", { name: "Options" }))
    expect(await screen.findByText("Search")).toBeInTheDocument()
    expect(screen.queryByText("Edit group")).not.toBeInTheDocument()
  })

  it("resolves the function form per channel — per-channel permissions", () => {
    const headerActions = vi.fn(() => [])
    const runtime = makeRuntime()
    render(
      <F0ChatProvider runtime={runtime}>
        <F0Chat headerActions={headerActions} />
      </F0ChatProvider>
    )
    expect(headerActions).toHaveBeenCalledWith(runtime.channel)
  })
})
