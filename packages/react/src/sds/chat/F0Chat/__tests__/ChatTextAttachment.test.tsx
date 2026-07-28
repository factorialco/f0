import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0Chat } from "../F0Chat"
import { F0ChatProvider } from "../providers/F0ChatProvider"
import { type F0ChatAttachment, type F0ChatRuntime } from "../types"

// jsdom has no layout — wrap Virtuoso in its official mock context so every
// row renders (see mocks/virtuoso-jsdom).
vi.mock("react-virtuoso", async (importOriginal) => {
  const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
  return mockVirtuosoModule(
    await importOriginal<typeof import("react-virtuoso")>()
  )
})

const MD_CONTENT = "# Release notes\n\n- Chat: document previews\n"
const TXT_CONTENT = "plain log line 1\nplain log line 2"

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn()
  // The card's render-on-view gate needs an observer that actually fires —
  // jsdom's setup mock never calls back, so every card reports "in view".
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      private readonly callback: IntersectionObserverCallback
      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
      }
      observe(target: Element) {
        this.callback(
          [{ isIntersecting: true, target } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        )
      }
      unobserve() {}
      disconnect() {}
      takeRecords = () => []
    }
  )
  // Attachment fetches: "broken" URLs 404, otherwise serve by extension.
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      const href = String(url)
      if (href.includes("broken")) return { ok: false, status: 404 }
      return {
        ok: true,
        text: async () => (href.endsWith(".md") ? MD_CONTENT : TXT_CONTENT),
      }
    })
  )
})

const now = new Date().toISOString()

const makeRuntime = (attachments: F0ChatAttachment[]): F0ChatRuntime => ({
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
      body: "Here's the file",
      createdAt: now,
      isMine: false,
      attachments,
    },
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
})

const renderChat = (attachments: F0ChatAttachment[]) =>
  render(
    <F0ChatProvider runtime={makeRuntime(attachments)}>
      <F0Chat />
    </F0ChatProvider>
  )

describe("ChatDocumentAttachmentCard (text)", () => {
  it("renders a txt attachment as a card with the first lines", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/app.log",
        name: "app.log",
        mimeType: "text/plain",
      },
    ])
    const card = screen.getByTestId("chat-document-attachment")
    expect(card).toHaveTextContent("app.log")

    expect(await screen.findByText(/plain log line 1/)).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.getByTestId("chat-document-snapshot").className).toContain(
        "opacity-100"
      )
    )
  })

  it("renders .md fullscreen as a markdown document, not raw source", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/CHANGELOG.md",
        name: "CHANGELOG.md",
        mimeType: "text/markdown",
      },
    ])
    fireEvent.click(screen.getByRole("button", { name: "Open document" }))

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    // The heading renders as an actual <h1> (generous timeout: the viewer
    // chunk resolves through React.lazy).
    expect(
      await screen.findByRole(
        "heading",
        { name: "Release notes" },
        { timeout: 5000 }
      )
    ).toBeInTheDocument()
    expect(screen.getByText("Chat: document previews")).toBeInTheDocument()
  })

  it("renders plain text fullscreen as monospaced source", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/app.log",
        name: "app.log",
        mimeType: "text/plain",
      },
    ])
    fireEvent.click(screen.getByRole("button", { name: "Open document" }))

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    await waitFor(
      () =>
        expect(screen.getAllByText(/plain log line 2/).length).toBeGreaterThan(
          0
        ),
      { timeout: 5000 }
    )
    // No markdown rendering for plain text (the dialog's sr-only title is an
    // h2 — only a document h1 would betray a markdown render).
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument()
  })

  it("falls back to the plain file chip when the file can't load", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/broken.txt",
        name: "notes.txt",
        mimeType: "text/plain",
      },
    ])
    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-document-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("notes.txt")).toBeInTheDocument()
  })
})
