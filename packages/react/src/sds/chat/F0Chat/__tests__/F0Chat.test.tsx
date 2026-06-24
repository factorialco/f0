import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  userEvent,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatRuntime } from "../types"

// The transcript is virtualized with @tanstack/react-virtual, which windows the
// DOM based on the scroll viewport's measured size. jsdom has no layout (every
// rect is 0), so the real virtualizer renders nothing. Mock it to a pass-through
// that renders all rows — the windowing itself is exercised in Storybook.
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

  it("swaps the menu for the info panel when Info is clicked, with a back button", async () => {
    renderChat(makeRuntime())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    await userEvent.click(screen.getByRole("button", { name: /info/i }))
    // Menu is replaced in place by the info panel (Delivered row + Back button).
    expect(screen.getByText(/delivered/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: /^Reply$/i })
    ).not.toBeInTheDocument()
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

  it("shows a typing dots bubble in the transcript when the other side types", () => {
    renderChat(
      makeRuntime({ typingUsers: [{ id: "other", name: "María José" }] })
    )
    // Rendered as an incoming dots bubble (role=status), labelled for a11y.
    expect(screen.getByRole("status", { name: /writing/i })).toBeInTheDocument()
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

  it("shows the interpolated 'Read by N' count for my read message in a group", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
        },
        messages: [
          {
            id: "g-m1",
            author: { id: "me", name: "Me" },
            body: "Shipping today",
            createdAt: now,
            isMine: true,
            status: "read",
            readByCount: 3,
          },
        ],
      })
    )
    // i18n.t("chat.readBy.other", { count: 3 }) → "Read by 3".
    expect(screen.getByText(/read by 3/i)).toBeInTheDocument()
  })

  it("names the typing users in a group (interpolated label)", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
        },
        typingUsers: [
          { id: "u1", name: "Marcus" },
          { id: "u2", name: "Grace" },
        ],
      })
    )
    expect(
      screen.getByRole("status", { name: /marcus and grace are writing/i })
    ).toBeInTheDocument()
  })

  // --- In-conversation search ---------------------------------------------

  const searchableMessages: F0ChatMessage[] = [
    {
      id: "s1",
      author: { id: "other", name: "Alex" },
      body: "deploy started",
      createdAt: now,
      isMine: false,
    },
    {
      id: "s2",
      author: { id: "me", name: "Me" },
      body: "ok thanks",
      createdAt: now,
      isMine: true,
    },
    {
      id: "s3",
      author: { id: "other", name: "Alex" },
      body: "deploy finished",
      createdAt: now,
      isMine: false,
    },
  ]

  it("opens the header search bar and hides the identity actions", async () => {
    renderChat(makeRuntime())
    await userEvent.click(screen.getByRole("button", { name: /^search$/i }))
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    // The header Search button is replaced by the search bar.
    expect(
      screen.queryByRole("button", { name: /^search$/i })
    ).not.toBeInTheDocument()
  })

  // Generous timeouts: the query is debounced (200ms) + the search resolves
  // async, and these poll slowly under the full parallel suite (CPU contention).
  it("counts matches and navigates between them (newest first, wrapping)", async () => {
    renderChat(makeRuntime({ messages: searchableMessages }))
    await userEvent.click(screen.getByRole("button", { name: /^search$/i }))
    // Set the value in one shot — F0SearchInput is a controlled+debounced input,
    // so per-key typing can drop characters under heavy parallel-suite load.
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "deploy" },
    })
    // Two matches; lands on the newest (2/2).
    expect(
      await screen.findByText("2/2", undefined, { timeout: 8000 })
    ).toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: /^previous$/i }))
    expect(
      await screen.findByText("1/2", undefined, { timeout: 8000 })
    ).toBeInTheDocument()
    // Previous again wraps back to the newest.
    await userEvent.click(screen.getByRole("button", { name: /^previous$/i }))
    expect(
      await screen.findByText("2/2", undefined, { timeout: 8000 })
    ).toBeInTheDocument()
  }, 20000)

  it("shows 0/0 and disables navigation for an unmatched query", async () => {
    renderChat(makeRuntime({ messages: searchableMessages }))
    await userEvent.click(screen.getByRole("button", { name: /^search$/i }))
    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "zzzznope" },
    })
    expect(
      await screen.findByText("0/0", undefined, { timeout: 8000 })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /^next$/i })).toBeDisabled()
    expect(screen.getByRole("button", { name: /^previous$/i })).toBeDisabled()
  }, 20000)

  it("closes search with Escape and restores the header", async () => {
    renderChat(makeRuntime())
    await userEvent.click(screen.getByRole("button", { name: /^search$/i }))
    await userEvent.type(screen.getByRole("searchbox"), "{Escape}")
    expect(screen.queryByRole("searchbox")).not.toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /^search$/i })
    ).toBeInTheDocument()
  })
})
