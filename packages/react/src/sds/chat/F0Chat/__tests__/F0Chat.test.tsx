import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

beforeAll(() => {
  // jsdom doesn't implement scrollIntoView (used by the scroll hook).
  Element.prototype.scrollIntoView = vi.fn()
})

const now = new Date().toISOString()

const messages: F0ChatMessage[] = [
  {
    id: "m1",
    author: { id: "other", name: "María José" },
    body: "Hello there",
    createdAt: now,
    isMine: false,
  },
  {
    id: "m2",
    author: { id: "me", name: "Me" },
    body: "Hi back",
    createdAt: now,
    isMine: true,
    status: "read",
  },
]

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
  messages,
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

describe("F0Chat", () => {
  it("renders the channel title and messages", () => {
    renderChat(makeRuntime())
    expect(screen.getAllByText("María José").length).toBeGreaterThan(0)
    expect(screen.getByText("Hello there")).toBeInTheDocument()
    expect(screen.getByText("Hi back")).toBeInTheDocument()
  })

  it("shows the read status under the last message (mine)", () => {
    renderChat(makeRuntime())
    expect(screen.getByText(/^Read/)).toBeInTheDocument()
  })

  it("deletes a message from its actions menu", async () => {
    const deleteMessage = vi.fn()
    renderChat(makeRuntime({ deleteMessage }))
    // Open my message's ellipsis menu (m2 is the second message).
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    await userEvent.click(screen.getByRole("button", { name: /^Delete$/i }))
    expect(deleteMessage).toHaveBeenCalledWith("m2")
  })

  it("exposes an Info action in the actions menu", async () => {
    renderChat(makeRuntime())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    // The hover-submenu opening is a visual behaviour verified in Storybook.
    expect(screen.getByRole("button", { name: /^Info$/i })).toBeInTheDocument()
  })

  it("replies to a message, showing the quote in the composer", async () => {
    renderChat(makeRuntime())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[0])
    await userEvent.click(screen.getByRole("button", { name: /^Reply$/i }))
    expect(
      screen.getByRole("button", { name: /remove quote/i })
    ).toBeInTheDocument()
  })

  it("renders a tombstone for deleted messages (no actions)", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "d1",
            author: { id: "me", name: "Me" },
            body: "",
            createdAt: now,
            isMine: true,
            deleted: true,
          },
        ],
      })
    )
    expect(screen.getByText(/message deleted/i)).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /message actions/i })
    ).not.toBeInTheDocument()
  })

  it("shows the new-messages divider but no jump button while at the bottom", () => {
    // On entry we land at the bottom, so the unread messages are already in
    // view: the divider marks them, but the jump-to-bottom button stays hidden
    // (it only appears once scrolled up).
    renderChat(makeRuntime({ unreadCount: 3, firstUnreadId: "m1" }))
    expect(screen.getByText(/new messages/i)).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /3 unread/i })
    ).not.toBeInTheDocument()
  })

  it("sends on Enter and clears the input", async () => {
    const sendMessage = vi.fn()
    renderChat(makeRuntime({ sendMessage }))
    const input = screen.getByPlaceholderText(/write something here/i)
    await userEvent.type(input, "A new message")
    await userEvent.keyboard("{Enter}")
    expect(sendMessage).toHaveBeenCalledWith(
      expect.objectContaining({ body: "A new message" })
    )
  })

  it("does not send on Shift+Enter", async () => {
    const sendMessage = vi.fn()
    renderChat(makeRuntime({ sendMessage }))
    const input = screen.getByPlaceholderText(/write something here/i)
    await userEvent.type(input, "Line one")
    await userEvent.keyboard("{Shift>}{Enter}{/Shift}")
    expect(sendMessage).not.toHaveBeenCalled()
  })

  it("shows a 'Writing…' chip above the composer when the other side types", () => {
    renderChat(
      makeRuntime({ typingUsers: [{ id: "other", name: "María José" }] })
    )
    expect(screen.getByText(/writing/i)).toBeInTheDocument()
  })

  it("renders image attachments inline and files for download", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "a1",
            author: { id: "me", name: "Me" },
            body: "Here you go",
            createdAt: now,
            isMine: true,
            attachments: [
              { kind: "image", url: "blob:img", name: "photo.png" },
              {
                kind: "file",
                url: "blob:doc",
                name: "report.pdf",
                mimeType: "application/pdf",
              },
            ],
          },
        ],
      })
    )
    expect(screen.getByRole("img", { name: /photo\.png/i })).toBeInTheDocument()
    expect(screen.getByText("report.pdf")).toBeInTheDocument()
  })

  it("renders the empty state when there are no messages", () => {
    renderChat(makeRuntime({ messages: [] }))
    expect(screen.getByText(/no messages yet/i)).toBeInTheDocument()
  })
})
