import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

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

const now = new Date().toISOString()

const theirs: F0ChatMessage = {
  id: "m1",
  author: { id: "other", name: "María José" },
  body: "Hello there",
  createdAt: now,
  isMine: false,
}

const mine: F0ChatMessage = {
  id: "m2",
  author: { id: "me", name: "Me" },
  body: "Hi back",
  createdAt: now,
  isMine: true,
  status: "read",
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
    presence: "online",
  },
  status: "ready",
  messages: [theirs, mine],
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

/** A runtime where editing is allowed, so the shortcut has something to find. */
const editable = (overrides: Partial<F0ChatRuntime> = {}) =>
  makeRuntime({ editMessage: vi.fn(), editWindowMs: 60_000, ...overrides })

const renderChat = (runtime: F0ChatRuntime) =>
  render(
    <F0ChatProvider runtime={runtime}>
      <F0Chat />
    </F0ChatProvider>
  )

const composer = () => screen.getByPlaceholderText(/write something here/i)

const pressArrowUp = async () => {
  await userEvent.click(composer())
  await userEvent.keyboard("{ArrowUp}")
}

describe("F0Chat arrow-up editing", () => {
  it("reopens my last message for editing from an empty composer", async () => {
    renderChat(editable())
    await pressArrowUp()

    expect(composer()).toHaveValue("Hi back")
    expect(
      screen.getByRole("button", { name: /cancel edit/i })
    ).toBeInTheDocument()
  })

  it("saves the reopened message through editMessage", async () => {
    const editMessage = vi.fn()
    renderChat(editable({ editMessage }))
    await pressArrowUp()

    await userEvent.type(composer(), " again")
    await userEvent.click(screen.getByRole("button", { name: /^Save$/i }))

    expect(editMessage).toHaveBeenCalledWith(
      "m2",
      expect.objectContaining({ body: "Hi back again" })
    )
  })

  it("leaves arrow-up alone once the composer has text", async () => {
    renderChat(editable())
    await userEvent.type(composer(), "draft")
    await userEvent.keyboard("{ArrowUp}")

    expect(composer()).toHaveValue("draft")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("leaves arrow-up alone while a reply quote is pending", async () => {
    renderChat(editable())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[0])
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))
    await pressArrowUp()

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("does nothing when the host provides no editMessage", async () => {
    renderChat(makeRuntime())
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("never reopens someone else's message", async () => {
    // Only their message is left, and a moderator capability would let the menu
    // edit it — the shortcut must still find nothing.
    renderChat(
      editable({
        messages: [theirs],
        capabilities: { canEditMessage: () => true },
      })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("skips a message that can no longer be edited and takes the previous one", async () => {
    const older: F0ChatMessage = { ...mine, id: "m0", body: "Older of mine" }
    renderChat(
      editable({
        messages: [older, mine],
        capabilities: { canEditMessage: (message) => message.id !== "m2" },
      })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("Older of mine")
  })

  it("is not offered once my last message is past the edit window", async () => {
    const old = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    renderChat(
      editable({ messages: [{ ...mine, createdAt: old }], editWindowMs: 5000 })
    )
    await pressArrowUp()

    expect(composer()).toHaveValue("")
  })
})

describe("F0Chat double-click reply", () => {
  it("quotes someone else's message and focuses the composer", async () => {
    renderChat(makeRuntime())
    await userEvent.dblClick(screen.getByText("Hello there"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    await waitFor(() => expect(composer()).toHaveFocus())
  })

  it("quotes my own message too", async () => {
    renderChat(makeRuntime())
    await userEvent.dblClick(screen.getByText("Hi back"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  it("replaces an edit in progress with the quote", async () => {
    renderChat(editable())
    await pressArrowUp()
    expect(composer()).toHaveValue("Hi back")

    await userEvent.dblClick(screen.getByText("Hello there"))

    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /cancel edit/i })
    ).not.toBeInTheDocument()
  })

  it("ignores a double-click on a deleted message", async () => {
    renderChat(makeRuntime({ messages: [{ ...theirs, deleted: true }, mine] }))
    await userEvent.dblClick(screen.getByText(/message deleted/i))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })

  it("leaves an interactive attachment to its own action", async () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            ...theirs,
            body: "",
            attachments: [
              {
                kind: "image",
                url: "https://example.test/a.png",
                name: "a.png",
              },
            ],
          },
        ],
      })
    )
    await userEvent.dblClick(screen.getByTestId("chat-image-attachment"))

    expect(
      screen.queryByRole("button", { name: /remove quote/i })
    ).not.toBeInTheDocument()
  })
})
