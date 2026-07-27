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

// Fake docx-preview: rendering a real docx in jsdom isn't meaningful — the
// mock injects recognizable content so the card/viewer wiring is what's
// under test.
vi.mock("docx-preview", () => ({
  renderAsync: vi.fn(async (_data: Blob, container: HTMLElement) => {
    const paragraph = document.createElement("p")
    paragraph.textContent = "Offer of Employment"
    container.appendChild(paragraph)
  }),
}))

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
  // Attachment fetches: "broken" URLs 404, anything else serves a fake blob
  // (the mocked docx-preview never reads it).
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      if (String(url).includes("broken")) return { ok: false, status: 404 }
      return { ok: true, blob: async () => new Blob(["docx"]) }
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
      body: "Here's the offer",
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

const docxAttachment = {
  kind: "file",
  url: "https://cdn.example.com/offer-letter.docx",
  name: "offer-letter.docx",
  mimeType:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
} as const

describe("ChatDocumentAttachmentCard (docx)", () => {
  it("renders the Word document as a card with a page snapshot", async () => {
    renderChat([docxAttachment])
    const card = screen.getByTestId("chat-document-attachment")
    expect(card).toHaveTextContent("offer-letter.docx")

    expect(await screen.findByText("Offer of Employment")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.getByTestId("chat-document-snapshot").className).toContain(
        "opacity-100"
      )
    )
  })

  it("opens the fullscreen viewer on click", async () => {
    renderChat([docxAttachment])
    fireEvent.click(screen.getByRole("button", { name: "Open document" }))

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    // The viewer renders its own copy of the document (generous timeout: the
    // viewer chunk resolves through React.lazy).
    await waitFor(
      () =>
        expect(
          screen.getAllByText("Offer of Employment").length
        ).toBeGreaterThan(1),
      { timeout: 5000 }
    )

    const closeButtons = screen.getAllByRole("button", { name: "Close" })
    fireEvent.click(closeButtons[closeButtons.length - 1])
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
  })

  it("falls back to the plain file chip when the document can't load", async () => {
    renderChat([
      { ...docxAttachment, url: "https://cdn.example.com/broken.docx" },
    ])
    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-document-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("offer-letter.docx")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })

  it("never offers a preview for binary .doc files", () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/legacy.doc",
        name: "legacy.doc",
        mimeType: "application/msword",
      },
    ])
    expect(
      screen.queryByTestId("chat-document-attachment")
    ).not.toBeInTheDocument()
    expect(screen.getByText("legacy.doc")).toBeInTheDocument()
  })
})
