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

  it("renders a system item as a centered row with person tags and no delivery footer", () => {
    renderChat(
      makeRuntime({
        messages: [
          ...messages,
          {
            type: "system",
            id: "s1",
            createdAt: now,
            system: {
              event: "member.added",
              members: [{ id: "ana", name: "Ana García" }],
            },
          },
        ],
      })
    )
    // The sentence renders with the @name chip splitting the text nodes…
    expect(
      screen.getByText(
        (_, element) =>
          element?.tagName === "SPAN" &&
          element.textContent === "@Ana García was added to the group"
      )
    ).toBeInTheDocument()
    // …and the delivery footer is gone: a trailing system row means the last
    // ITEM isn't a user message.
    expect(screen.queryByText(/^Read/)).not.toBeInTheDocument()
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
    // Removing the quote collapses the chip away (exit resolves instantly
    // under skipAnimations) — the composer returns to its resting state.
    await userEvent.click(screen.getByRole("button", { name: /remove quote/i }))
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: /remove quote/i })
      ).not.toBeInTheDocument()
    )
  })

  it("edits my message from its actions menu, prefilling the composer", async () => {
    const editMessage = vi.fn()
    renderChat(makeRuntime({ editMessage, editWindowMs: 60_000 }))
    // m2 (the second message) is mine.
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    await userEvent.click(screen.getByRole("button", { name: /^Edit$/i }))
    // The composer is prefilled with the message body and shows the editing chip.
    const input = screen.getByPlaceholderText(/write something here/i)
    expect(input).toHaveValue("Hi back")
    expect(screen.getByText(/editing/i)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /cancel edit/i })
    ).toBeInTheDocument()
    // Amend and save → editMessage fires with the message id and new body.
    await userEvent.type(input, " again")
    await userEvent.click(screen.getByRole("button", { name: /^Save$/i }))
    expect(editMessage).toHaveBeenCalledWith(
      "m2",
      expect.objectContaining({ body: "Hi back again" })
    )
  })

  it("cancels an edit, clearing the composer", async () => {
    renderChat(makeRuntime({ editMessage: vi.fn(), editWindowMs: 60_000 }))
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    await userEvent.click(screen.getByRole("button", { name: /^Edit$/i }))
    const input = screen.getByPlaceholderText(/write something here/i)
    expect(input).toHaveValue("Hi back")
    await userEvent.click(screen.getByRole("button", { name: /cancel edit/i }))
    expect(input).toHaveValue("")
    expect(screen.queryByText(/editing/i)).not.toBeInTheDocument()
  })

  it("offers no Edit action when the host doesn't provide editMessage", async () => {
    renderChat(makeRuntime())
    const menus = screen.getAllByRole("button", { name: /message actions/i })
    await userEvent.click(menus[1])
    expect(
      screen.queryByRole("button", { name: /^Edit$/i })
    ).not.toBeInTheDocument()
  })

  it("hides Edit once a message is older than the edit window", async () => {
    const old = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    renderChat(
      makeRuntime({
        editMessage: vi.fn(),
        editWindowMs: 5 * 60 * 1000,
        messages: [
          {
            id: "m-old",
            author: { id: "me", name: "Me" },
            body: "old one",
            createdAt: old,
            isMine: true,
            status: "read",
          },
        ],
      })
    )
    await userEvent.click(
      screen.getByRole("button", { name: /message actions/i })
    )
    expect(
      screen.queryByRole("button", { name: /^Edit$/i })
    ).not.toBeInTheDocument()
  })

  it("renders the muted 'edited' marker on an edited message", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "e1",
            author: { id: "me", name: "Me" },
            body: "fixed a typo",
            createdAt: now,
            isMine: true,
            status: "read",
            editedAt: now,
          },
        ],
      })
    )
    expect(screen.getByText("edited")).toBeInTheDocument()
  })

  it("shows 'edited' on an edited attachment-only message (no text bubble)", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "a-edit",
            author: { id: "me", name: "Me" },
            body: "",
            createdAt: now,
            isMine: true,
            status: "read",
            editedAt: now,
            attachments: [
              { kind: "image", url: "blob:img", name: "photo.png" },
            ],
          },
        ],
      })
    )
    expect(screen.getByText("edited")).toBeInTheDocument()
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

  it("shows an emoji picker button in the composer", () => {
    renderChat(makeRuntime())
    expect(
      screen.getByRole("button", { name: /add emoji/i })
    ).toBeInTheDocument()
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
                // Not previewable — documents (pdf/sheet/docx/text) get the
                // snapshot card instead (ChatPdfAttachment.test).
                kind: "file",
                url: "blob:doc",
                name: "deck.pptx",
                mimeType: "application/vnd.ms-powerpoint",
              },
            ],
          },
        ],
      })
    )
    expect(screen.getByRole("img", { name: /photo\.png/i })).toBeInTheDocument()
    expect(screen.getByText("deck.pptx")).toBeInTheDocument()
  })

  it("previews uploaded images as square thumbnails and other files as chips", async () => {
    // The pdf uploads first — images must still render grouped at the front.
    const uploadFiles = vi.fn().mockResolvedValue([
      {
        kind: "file",
        url: "blob:doc",
        name: "report.pdf",
        mimeType: "application/pdf",
      },
      { kind: "image", url: "blob:img", name: "photo.png" },
    ])
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!
    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["doc"], "report.pdf", { type: "application/pdf" }),
          new File(["img"], "photo.png", { type: "image/png" }),
        ],
      },
    })
    // The image resolves to an inline square preview, the pdf to a file chip.
    const preview = await screen.findByRole("img", { name: /photo\.png/i })
    expect(preview).toHaveAttribute("src", "blob:img")
    const chip = screen.getByText("report.pdf")
    // The image preview comes before the file chip despite uploading second.
    expect(
      preview.compareDocumentPosition(chip) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    // Each pending attachment carries its own remove action.
    const removeButtons = screen.getAllByRole("button", { name: /^remove$/i })
    expect(removeButtons).toHaveLength(2)
    await userEvent.click(removeButtons[0])
    expect(
      screen.queryByRole("img", { name: /photo\.png/i })
    ).not.toBeInTheDocument()
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

  // Search now lives behind the header overflow (ellipsis) menu: open it, then
  // click the Search item. The dropdown defers the action ~200ms (a radix close
  // workaround), so wait for the search bar to appear.
  const openHeaderSearch = async () => {
    await userEvent.click(screen.getByRole("button", { name: /^options$/i }))
    await userEvent.click(
      await screen.findByRole("menuitem", { name: /^search$/i })
    )
    await screen.findByRole("searchbox")
  }

  it("opens the header search bar and hides the identity actions", async () => {
    renderChat(makeRuntime())
    await openHeaderSearch()
    expect(screen.getByRole("searchbox")).toBeInTheDocument()
    // The header (with its overflow menu) is replaced by the search bar.
    expect(
      screen.queryByRole("button", { name: /^options$/i })
    ).not.toBeInTheDocument()
  })

  // Generous timeouts: the query is debounced (200ms) + the search resolves
  // async, and these poll slowly under the full parallel suite (CPU contention).
  it("counts matches and navigates between them (newest first, wrapping)", async () => {
    renderChat(makeRuntime({ messages: searchableMessages }))
    await openHeaderSearch()
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
    await openHeaderSearch()
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
    await openHeaderSearch()
    await userEvent.type(screen.getByRole("searchbox"), "{Escape}")
    expect(screen.queryByRole("searchbox")).not.toBeInTheDocument()
    // The header (overflow menu) is restored.
    expect(
      screen.getByRole("button", { name: /^options$/i })
    ).toBeInTheDocument()
  })
})
