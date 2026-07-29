import { beforeAll, describe, expect, it, vi } from "vitest"

import { getEmojiLabel } from "@/lib/emojis"
import {
  act,
  fireEvent,
  zeroRender as render,
  zeroRenderHook as renderHook,
  screen,
  userEvent,
  waitFor,
  within,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { resolveMockReactionUsers } from "../mocks/MockChatApp"
import {
  groupReadersFor,
  initialConvState,
  ME,
  SEED_BY_ID,
  SEEDS,
} from "../mocks/mockSeeds"
import { useMockChatStore } from "../mocks/useMockChatApp"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import {
  isUserMessage,
  type F0ChatAttachment,
  type F0ChatMessage,
  type F0ChatRuntime,
} from "../types"
import { formatClock } from "../utils/natural-time"

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
    const status = screen.getByRole("status")
    expect(status).toHaveTextContent(`Read · ${formatClock(new Date(now))}`)
    expect(status).toHaveAttribute("aria-live", "polite")
    expect(status).toHaveAttribute("aria-atomic", "true")
  })

  it("shows sent with the time until a direct message is read", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "sent-message",
            author: { id: "me", name: "Me" },
            body: "Waiting for the receipt",
            createdAt: now,
            isMine: true,
            status: "sent",
          },
        ],
      })
    )

    expect(
      screen.getByText(`Sent · ${formatClock(new Date(now))}`)
    ).toBeInTheDocument()
  })

  it("updates the stable live region from sent to read", () => {
    const message: F0ChatMessage = {
      id: "live-status-message",
      author: { id: "me", name: "Me" },
      body: "Waiting for the receipt",
      createdAt: now,
      isMine: true,
      status: "sent",
    }
    const { rerender } = renderChat(
      makeRuntime({
        messages: [message],
      })
    )
    const status = screen.getByRole("status")
    expect(status).toHaveTextContent(`Sent · ${formatClock(new Date(now))}`)

    rerender(
      <F0ChatProvider
        runtime={makeRuntime({
          messages: [{ ...message, status: "read" }],
        })}
      >
        <F0Chat />
      </F0ChatProvider>
    )

    expect(screen.getByRole("status")).toBe(status)
    expect(status).toHaveTextContent(`Read · ${formatClock(new Date(now))}`)
  })

  it("keeps the legacy bare time when the message status is omitted", () => {
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "legacy-message",
            author: { id: "me", name: "Me" },
            body: "No delivery status",
            createdAt: now,
            isMine: true,
          },
        ],
      })
    )

    const status = screen.getByRole("status")
    expect(status).toHaveTextContent(formatClock(new Date(now)))
    expect(status).not.toHaveTextContent(/Sent|Read/)
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
    expect(screen.getByRole("button", { name: /^back$/i })).toHaveFocus()
    expect(screen.getByRole("region", { name: /info/i })).toHaveAttribute(
      "tabindex",
      "0"
    )
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

  it("previews images, videos, and documents immediately in the composer", async () => {
    // The documents upload first — images must still render grouped at the front.
    const uploadFiles = vi.fn().mockResolvedValue([
      {
        kind: "file",
        url: "blob:doc",
        name: "report.pdf",
        mimeType: "application/pdf",
      },
      {
        kind: "file",
        url: "blob:video",
        name: "walkthrough.webm",
        mimeType: "video/webm",
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
          new File(["video"], "walkthrough.webm", { type: "video/webm" }),
          new File(["img"], "photo.png", { type: "image/png" }),
        ],
      },
    })
    // Local object URLs make every supported preview visible before the upload
    // promise swaps them for the host-provided URLs.
    const localPreview = await screen.findByRole("img", {
      name: /photo\.png/i,
    })
    expect(localPreview.getAttribute("src")).toMatch(/^blob:/)
    expect(
      screen.getByTestId("chat-composer-document-preview")
    ).toHaveTextContent("report.pdf")
    expect(
      screen.getByTestId("chat-composer-video-preview")
    ).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.getByRole("img", { name: /photo\.png/i })).toHaveAttribute(
        "src",
        "blob:img"
      )
    )

    // The image preview comes before the document despite uploading last.
    const preview = screen.getByRole("img", { name: /photo\.png/i })
    const document = screen.getByText("report.pdf")
    expect(
      preview.compareDocumentPosition(document) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
    // Each pending attachment carries its own remove action.
    const removeButtons = screen.getAllByRole("button", { name: /^remove /i })
    expect(removeButtons).toHaveLength(3)
    const attachmentStrip = screen.getByRole("region", {
      name: "3 attachments",
    })
    expect(attachmentStrip).toHaveAttribute("tabindex", "0")
    expect(attachmentStrip).toHaveClass("flex-nowrap", "overflow-x-auto")
    await userEvent.click(removeButtons[0])
    expect(
      screen.queryByRole("img", { name: /photo\.png/i })
    ).not.toBeInTheDocument()
    await waitFor(() => expect(attachmentStrip).toHaveFocus())
    expect(document).toBeInTheDocument()
  })

  it("removes a local preview without restoring it when upload finishes", async () => {
    let resolveUpload: (attachments: F0ChatAttachment[]) => void = () => {}
    const uploadFiles = vi.fn(
      () =>
        new Promise<F0ChatAttachment[]>((resolve) => {
          resolveUpload = resolve
        })
    )
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL")
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!

    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["video"], "walkthrough.webm", { type: "video/webm" }),
        ],
      },
    })

    const preview = await screen.findByTestId("chat-composer-video-preview")
    const localUrl = preview.querySelector("video")?.getAttribute("src")
    expect(localUrl).toMatch(/^blob:/)
    expect(
      screen.getByTestId("chat-composer-attachment-uploading")
    ).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: /^remove /i }))
    expect(preview).not.toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.getByPlaceholderText("Write something here..")
      ).toHaveFocus()
    )
    expect(revokeObjectUrl).toHaveBeenCalledWith(localUrl)

    act(() => {
      resolveUpload([
        {
          kind: "file",
          url: "https://cdn.example.com/walkthrough.webm",
          name: "walkthrough.webm",
          mimeType: "video/webm",
        },
      ])
    })
    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-composer-video-preview")
      ).not.toBeInTheDocument()
    )
    revokeObjectUrl.mockRestore()
  })

  it("releases the local preview URL after a successful upload", async () => {
    let resolveUpload: (attachments: F0ChatAttachment[]) => void = () => {}
    const uploadFiles = vi.fn(
      () =>
        new Promise<F0ChatAttachment[]>((resolve) => {
          resolveUpload = resolve
        })
    )
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL")
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!

    fireEvent.change(fileInput, {
      target: {
        files: [
          new File(["video"], "walkthrough.webm", { type: "video/webm" }),
        ],
      },
    })

    const localVideo = (
      await screen.findByTestId("chat-composer-video-preview")
    ).querySelector("video")!
    const localUrl = localVideo.getAttribute("src")
    expect(localUrl).toMatch(/^blob:/)
    const removeButton = screen.getByRole("button", {
      name: "Remove walkthrough.webm",
    })
    removeButton.focus()

    act(() => {
      resolveUpload([
        {
          kind: "file",
          url: "https://cdn.example.com/walkthrough.webm",
          name: "walkthrough.webm",
          mimeType: "video/webm",
        },
      ])
    })

    await waitFor(() =>
      expect(
        screen.getByTestId("chat-composer-video-preview").querySelector("video")
      ).toHaveAttribute("src", "https://cdn.example.com/walkthrough.webm")
    )
    expect(revokeObjectUrl).toHaveBeenCalledWith(localUrl)
    expect(removeButton).toHaveFocus()
    revokeObjectUrl.mockRestore()
  })

  it("preserves attachment order when concurrent uploads resolve out of order", async () => {
    const resolvers = new Map<
      string,
      (attachments: F0ChatAttachment[]) => void
    >()
    const uploadFiles = vi.fn(
      (files: File[]) =>
        new Promise<F0ChatAttachment[]>((resolve) => {
          resolvers.set(files[0]!.name, resolve)
        })
    )
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!
    const first = new File(["first"], "first-batch.zip", {
      type: "application/zip",
    })
    const second = new File(["second"], "second-batch.zip", {
      type: "application/zip",
    })

    fireEvent.change(fileInput, { target: { files: [first] } })
    fireEvent.change(fileInput, { target: { files: [second] } })
    await screen.findByText("second-batch.zip")

    act(() => {
      resolvers.get("second-batch.zip")?.([
        {
          kind: "file",
          url: "https://cdn.example.com/second-batch.zip",
          name: "second-batch.zip",
          mimeType: "application/zip",
        },
      ])
    })
    await waitFor(() =>
      expect(
        screen.getAllByTestId("chat-composer-attachment-uploading")
      ).toHaveLength(1)
    )

    act(() => {
      resolvers.get("first-batch.zip")?.([
        {
          kind: "file",
          url: "https://cdn.example.com/first-batch.zip",
          name: "first-batch.zip",
          mimeType: "application/zip",
        },
      ])
    })
    await waitFor(() =>
      expect(
        screen.queryAllByTestId("chat-composer-attachment-uploading")
      ).toHaveLength(0)
    )

    const firstName = screen.getByText("first-batch.zip")
    const secondName = screen.getByText("second-batch.zip")
    expect(
      firstName.compareDocumentPosition(secondName) &
        Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("releases local preview URLs when an upload fails", async () => {
    let rejectUpload: (error: Error) => void = () => {}
    const uploadFiles = vi.fn(
      () =>
        new Promise<F0ChatAttachment[]>((_resolve, reject) => {
          rejectUpload = reject
        })
    )
    const revokeObjectUrl = vi.spyOn(URL, "revokeObjectURL")
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!

    fireEvent.change(fileInput, {
      target: {
        files: [new File(["image"], "cover.webp", { type: "image/webp" })],
      },
    })

    const localImage = await screen.findByRole("img", {
      name: "cover.webp",
    })
    const localUrl = localImage.getAttribute("src")
    expect(localUrl).toMatch(/^blob:/)

    act(() => rejectUpload(new Error("network failure")))

    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-composer-image-preview")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("Upload failed")).toBeInTheDocument()
    expect(revokeObjectUrl).toHaveBeenCalledWith(localUrl)
    revokeObjectUrl.mockRestore()
  })

  it("keeps an oversized preview document as an F0FileItem", async () => {
    const uploadFiles = vi.fn(() => new Promise<F0ChatAttachment[]>(() => {}))
    const { container } = renderChat(makeRuntime({ uploadFiles }))
    const fileInput =
      container.querySelector<HTMLInputElement>("input[type=file]")!
    const oversizedSheet = new File(["sheet"], "large-report.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })
    Object.defineProperty(oversizedSheet, "size", {
      value: 11 * 1024 * 1024,
    })

    fireEvent.change(fileInput, {
      target: { files: [oversizedSheet] },
    })

    expect(
      await screen.findByTestId("chat-composer-file-preview")
    ).toHaveTextContent("large-report.xlsx")
    expect(
      screen.queryByTestId("chat-composer-document-preview")
    ).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: /^remove /i }))
  })

  it("rejects a whole batch when one file exceeds the configured size limit", async () => {
    vi.useFakeTimers()
    try {
      const maxFileSizeBytes = 100 * 1024 * 1024
      const uploadFiles = vi.fn().mockResolvedValue([])
      const { container } = renderChat(
        makeRuntime({ uploadFiles, maxFileSizeBytes })
      )
      const fileInput =
        container.querySelector<HTMLInputElement>("input[type=file]")!
      const withinLimit = new File(["small"], "notes.txt", {
        type: "text/plain",
      })
      const tooLarge = new File(["small"], "archive.zip", {
        type: "application/zip",
      })
      Object.defineProperty(tooLarge, "size", {
        value: maxFileSizeBytes + 1,
      })

      fireEvent.change(fileInput, {
        target: { files: [withinLimit, tooLarge] },
      })

      expect(uploadFiles).not.toHaveBeenCalled()
      expect(
        screen.getByText("Each file must be 100 MB or smaller")
      ).toBeInTheDocument()

      act(() => vi.advanceTimersByTime(4_000))
      expect(
        screen.getByText("Each file must be 100 MB or smaller")
      ).toBeInTheDocument()

      vi.useRealTimers()
      const atLimit = new File(["small"], "at-limit.zip", {
        type: "application/zip",
      })
      Object.defineProperty(atLimit, "size", { value: maxFileSizeBytes })
      fireEvent.change(fileInput, { target: { files: [atLimit] } })

      expect(uploadFiles).toHaveBeenCalledWith([atLimit])
      await waitFor(() =>
        expect(
          screen.queryByText("Each file must be 100 MB or smaller")
        ).not.toBeInTheDocument()
      )
    } finally {
      vi.useRealTimers()
    }
  })

  it("attaches pasted files without intercepting text-only paste", async () => {
    const maxFileSizeBytes = 100 * 1024 * 1024
    const uploadFiles = vi.fn().mockResolvedValue([])
    renderChat(makeRuntime({ uploadFiles, maxFileSizeBytes }))
    const textarea = screen.getByPlaceholderText("Write something here..")
    const pastedFile = new File(["pasted"], "pasted-notes.txt", {
      type: "text/plain",
    })
    const oversizedFile = new File(["large"], "oversized-paste.zip", {
      type: "application/zip",
    })
    Object.defineProperty(oversizedFile, "size", {
      value: maxFileSizeBytes + 1,
    })

    expect(
      fireEvent.paste(textarea, {
        clipboardData: { files: [pastedFile, oversizedFile] },
      })
    ).toBe(false)
    expect(uploadFiles).not.toHaveBeenCalled()
    expect(
      screen.getByText("Each file must be 100 MB or smaller")
    ).toBeInTheDocument()

    expect(
      fireEvent.paste(textarea, {
        clipboardData: { files: [pastedFile] },
      })
    ).toBe(false)
    await waitFor(() => expect(uploadFiles).toHaveBeenCalledWith([pastedFile]))

    expect(
      fireEvent.paste(textarea, {
        clipboardData: { files: [] },
      })
    ).toBe(true)
  })

  it("renders the empty state when there are no messages", () => {
    renderChat(makeRuntime({ messages: [] }))
    expect(screen.getByText(/no messages yet/i)).toBeInTheDocument()
  })

  it("seeds reader identities on every group message in the application mock", () => {
    for (const seed of SEEDS.filter((item) => item.type === "group")) {
      const messages = initialConvState(seed).messages.filter(isUserMessage)

      for (const message of messages) {
        expect(message.readBy?.length).toBeGreaterThan(0)
        expect(
          message.readBy?.some((reader) => reader.id === message.author.id)
        ).toBe(false)
      }
    }
  })

  it("seeds more than 40 readers for the application frame overflow demo", () => {
    const seed = SEED_BY_ID.get("grp-reporting")
    if (!seed) throw new Error("Expected grp-reporting mock seed")

    const messages = initialConvState(seed).messages.filter(isUserMessage)

    expect(messages.length).toBeGreaterThan(0)
    for (const message of messages) {
      expect(message.readBy?.length).toBeGreaterThan(40)
    }

    const firstParticipant = seed.participants[0]
    if (!firstParticipant) throw new Error("Expected group participants")
    const readers = groupReadersFor(
      {
        ...seed,
        participants: [...seed.participants, firstParticipant],
      },
      ME.id
    )
    expect(new Set(readers?.map(({ id }) => id)).size).toBe(readers?.length)

    const dmSeed = SEED_BY_ID.get("dm-eleanor")
    if (!dmSeed) throw new Error("Expected dm-eleanor mock seed")
    expect(groupReadersFor(dmSeed, ME.id)).toBeUndefined()
  })

  it("adds group readers only when a live message reaches the read state", async () => {
    vi.useFakeTimers()
    const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0.9)

    try {
      const { result } = renderHook(() => useMockChatStore())
      act(() => {
        result.current.send("grp-reporting", { body: "Receipt state test" })
      })

      const getSentMessage = (): F0ChatMessage => {
        const message = result.current.states["grp-reporting"]?.messages
          .filter(isUserMessage)
          .find(({ body }) => body === "Receipt state test")
        if (!message) throw new Error("Expected the live mock message")
        return message
      }

      expect(getSentMessage().status).toBe("sending")
      expect(getSentMessage().readBy).toBeUndefined()

      await act(() => vi.advanceTimersByTimeAsync(400))
      expect(getSentMessage().status).toBe("sent")
      expect(getSentMessage().readBy).toBeUndefined()

      await act(() => vi.advanceTimersByTimeAsync(900))
      expect(getSentMessage().status).toBe("delivered")
      expect(getSentMessage().readBy).toBeUndefined()

      await act(() => vi.advanceTimersByTimeAsync(900))
      expect(getSentMessage().status).toBe("read")
      expect(getSentMessage().readBy).toHaveLength(45)
    } finally {
      randomSpy.mockRestore()
      vi.useRealTimers()
    }
  })

  it("resolves complete and fallback reaction users in the application mock", () => {
    const seed = SEED_BY_ID.get("grp-reporting")
    if (!seed) throw new Error("Expected grp-reporting mock seed")

    const messages = initialConvState(seed).messages
    const message = messages
      .filter(isUserMessage)
      .find((item) => item.reactions?.some(({ emoji }) => emoji === "🎉"))
    if (!message) throw new Error("Expected a seeded reaction message")

    expect(
      resolveMockReactionUsers(seed, messages, message.id, "🎉").map(
        ({ name }) => name
      )
    ).toEqual(["Grace Liang", "Marcus Bennett", "Sam Okafor"])
    expect(resolveMockReactionUsers(seed, messages, message.id, "👍")).toEqual(
      []
    )
    expect(resolveMockReactionUsers(seed, messages, "missing", "🎉")).toEqual(
      []
    )

    const fallbackMessages = messages.map((item) =>
      isUserMessage(item) && item.id === message.id
        ? {
            ...item,
            reactions: [{ emoji: "🎉", count: 2, reactedByMe: false }],
          }
        : item
    )
    expect(
      resolveMockReactionUsers(seed, fallbackMessages, message.id, "🎉").map(
        ({ name }) => name
      )
    ).toEqual(["Grace Liang", "Marcus Bennett"])
  })

  it("keeps a group message sent until every channel member has read it", async () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
          memberCount: 4,
        },
        messages: [
          {
            id: "g-m1",
            author: { id: "me", name: "Me" },
            body: "Shipping today",
            createdAt: now,
            isMine: true,
            status: "read",
            readBy: [
              {
                id: "grace",
                name: "Grace Liang",
                subtitle: "Data Analyst",
                profileHref: "/people/grace",
              },
              {
                id: "marcus",
                name: "Marcus Bennett",
                subtitle: "Engineering Manager",
              },
            ],
            readByCount: 99,
          },
        ],
      })
    )
    expect(
      screen.getByText(`Sent · ${formatClock(new Date(now))}`)
    ).toBeInTheDocument()
    expect(screen.queryByText(/read by 2/i)).not.toBeInTheDocument()

    await userEvent.click(
      screen.getByRole("button", { name: /message actions/i })
    )
    await userEvent.click(screen.getByRole("button", { name: /^Info$/i }))

    const readers = screen.getByRole("list", { name: /read by 2/i })
    const infoPanel = screen.getByRole("region", { name: /info/i })
    expect(infoPanel).toHaveAttribute("tabindex", "0")
    const grace = within(readers).getByRole("link", {
      name: /Grace Liang/i,
    })
    const marcus = within(readers).getByText("Marcus Bennett").parentElement!
    expect(grace).toHaveAttribute("href", "/people/grace")
    expect(marcus).toHaveAttribute("tabindex", "0")
    expect(
      within(readers).queryByRole("link", { name: /Marcus Bennett/i })
    ).not.toBeInTheDocument()

    await userEvent.hover(grace)
    expect(await screen.findByText("Data Analyst")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /view profile/i })).toHaveAttribute(
      "href",
      "/people/grace"
    )
    await userEvent.unhover(grace)
    await waitFor(() =>
      expect(screen.queryByText("Data Analyst")).not.toBeInTheDocument()
    )

    const backButton = screen.getByRole("button", { name: /^back$/i })
    expect(backButton).toHaveFocus()
    await userEvent.tab()
    expect(infoPanel).toHaveFocus()
    await userEvent.tab()
    expect(grace).toHaveFocus()
    expect(await screen.findByText("Data Analyst")).toBeInTheDocument()

    await userEvent.tab()
    expect(marcus).toHaveFocus()
    expect(await screen.findByText("Engineering Manager")).toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.queryByRole("link", { name: /view profile/i })
      ).not.toBeInTheDocument()
    )
  })

  it("shows read with the time once every channel member has read it", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
          memberCount: 3,
        },
        messages: [
          {
            id: "g-m1",
            author: { id: "me", name: "Me" },
            body: "Shipping today",
            createdAt: now,
            isMine: true,
            status: "read",
            readBy: [
              { id: "grace", name: "Grace Liang" },
              { id: "marcus", name: "Marcus Bennett" },
            ],
          },
        ],
      })
    )

    expect(
      screen.getByText(`Read · ${formatClock(new Date(now))}`)
    ).toBeInTheDocument()
    expect(screen.queryByText(/read by 2/i)).not.toBeInTheDocument()
  })

  it("keeps a known group sent when receipt data is unavailable", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
          memberCount: 3,
        },
        messages: [
          {
            id: "g-m1",
            author: { id: "me", name: "Me" },
            body: "Shipping today",
            createdAt: now,
            isMine: true,
            status: "read",
          },
        ],
      })
    )

    expect(screen.getByRole("status")).toHaveTextContent(
      `Sent · ${formatClock(new Date(now))}`
    )
  })

  it("shows a single-member group as read without receipt rows", () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Personal notes",
          avatar: { type: "team", name: "Personal notes" },
          memberCount: 1,
        },
        messages: [
          {
            id: "g-m1",
            author: { id: "me", name: "Me" },
            body: "No other readers are expected",
            createdAt: now,
            isMine: true,
            status: "read",
          },
        ],
      })
    )

    expect(screen.getByRole("status")).toHaveTextContent(
      `Read · ${formatClock(new Date(now))}`
    )
  })

  it("trusts the group message status when member count is unavailable", () => {
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
            readByCount: 2,
          },
        ],
      })
    )

    expect(screen.getByRole("status")).toHaveTextContent(
      `Read · ${formatClock(new Date(now))}`
    )
  })

  it("keeps the legacy group read count inside the info panel", async () => {
    renderChat(
      makeRuntime({
        channel: {
          id: "g1",
          type: "group",
          title: "Product Team",
          avatar: { type: "team", name: "Product Team" },
          memberCount: 4,
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
    expect(
      screen.getByText(`Read · ${formatClock(new Date(now))}`)
    ).toBeInTheDocument()
    expect(screen.queryByText(/read by 3/i)).not.toBeInTheDocument()

    await userEvent.click(
      screen.getByRole("button", { name: /message actions/i })
    )
    await userEvent.click(screen.getByRole("button", { name: /^Info$/i }))
    expect(screen.getByText(/read by 3/i)).toBeInTheDocument()
  })

  it("loads reaction users once across repeated hovers", async () => {
    const loadReactionUsers = vi.fn().mockResolvedValue([
      { id: "grace", name: "Grace Liang" },
      { id: "marcus", name: "Marcus Bennett" },
    ])
    renderChat(
      makeRuntime({
        messages: [
          {
            id: "m-reaction",
            author: { id: "other", name: "María José" },
            body: "Great launch",
            createdAt: now,
            isMine: false,
            reactions: [
              {
                emoji: "👍",
                count: 2,
                reactedByMe: false,
              },
            ],
          },
        ],
        loadReactionUsers,
      })
    )

    const reaction = screen.getByRole("button", {
      name: `${getEmojiLabel("👍")}: 2`,
    })
    expect(reaction).toHaveAttribute("aria-pressed", "false")
    await userEvent.hover(reaction)
    await waitFor(() =>
      expect(loadReactionUsers).toHaveBeenCalledWith("m-reaction", "👍")
    )
    await userEvent.unhover(reaction)
    await userEvent.hover(reaction)
    expect(
      await screen.findAllByText("Grace Liang, Marcus Bennett")
    ).not.toHaveLength(0)
    await userEvent.unhover(reaction)
    await userEvent.hover(reaction)
    expect(loadReactionUsers).toHaveBeenCalledTimes(1)
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
