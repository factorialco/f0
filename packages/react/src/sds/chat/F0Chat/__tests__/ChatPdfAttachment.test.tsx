import { type ReactNode, useEffect, useRef } from "react"
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

vi.mock("@/components/F0PdfViewer/pdfWorker", () => ({
  ensurePdfWorker: () => {},
  configurePdfWorker: () => {},
}))

// Fake react-pdf: documents whose url contains "broken" fail to load (drives the
// card's chip fallback); everything else loads a 2-page document.
vi.mock("@/ui/pdf", () => ({
  pdfjs: { GlobalWorkerOptions: { workerSrc: "" } },
  Document: ({
    children,
    file,
    onLoadSuccess,
    onLoadError,
  }: {
    children?: ReactNode
    file?: string | { url: string }
    onLoadSuccess?: (pdf: { numPages: number }) => void
    onLoadError?: (error: Error) => void
  }) => {
    const url = typeof file === "string" ? file : (file?.url ?? "")
    useEffect(() => {
      const id = setTimeout(() => {
        if (url.includes("broken")) onLoadError?.(new Error("broken"))
        else onLoadSuccess?.({ numPages: 2 })
      }, 0)
      return () => clearTimeout(id)
    }, [url, onLoadSuccess, onLoadError])
    if (url.includes("broken")) return null
    return <div data-testid="pdf-document">{children}</div>
  },
  Page: ({
    pageNumber,
    onLoadSuccess,
    onRenderSuccess,
    inputRef,
  }: {
    pageNumber: number
    onLoadSuccess?: (page: {
      originalWidth: number
      originalHeight: number
    }) => void
    onRenderSuccess?: () => void
    inputRef?: (el: HTMLElement | null) => void
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
      inputRef?.(ref.current)
      onLoadSuccess?.({ originalWidth: 600, originalHeight: 800 })
      onRenderSuccess?.()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <div ref={ref} data-testid={`pdf-page-${pageNumber}`} />
  },
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
})

const now = new Date().toISOString()

const makeRuntime = (attachments: F0ChatAttachment[]): F0ChatRuntime => ({
  currentUserId: "me",
  channel: {
    id: "c1",
    type: "dm",
    title: "María José",
    avatar: { type: "person", firstName: "María", lastName: "José" },
    presence: "online",
  },
  status: "ready",
  messages: [
    {
      id: "m1",
      author: { id: "other", name: "María José" },
      body: "Here's the report",
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

const pdfAttachment = {
  kind: "file",
  url: "https://cdn.example.com/report.pdf",
  name: "report.pdf",
  mimeType: "application/pdf",
} as const

describe("ChatDocumentAttachmentCard (pdf)", () => {
  it("renders PDFs as snapshot cards and other files as chips", async () => {
    renderChat([
      pdfAttachment,
      { kind: "file", url: "blob:doc", name: "deck.pptx" },
    ])
    const card = screen.getByTestId("chat-document-attachment")
    expect(card).toHaveTextContent("report.pdf")
    expect(
      screen.getByRole("button", { name: "Open document" })
    ).toBeInTheDocument()
    // The snapshot renders the first page once the lazy chunk resolves, and
    // fades in over the card's skeleton once the page reports its paint.
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-1")).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.getByTestId("chat-document-snapshot").className).toContain(
        "opacity-100"
      )
    )
    // The non-previewable file keeps the plain chip (no snapshot card).
    expect(screen.getByText("deck.pptx")).toBeInTheDocument()
    expect(screen.getAllByTestId("chat-document-attachment")).toHaveLength(1)
  })

  it("keeps the chip for a PDF that is still uploading", () => {
    renderChat([{ ...pdfAttachment, progress: 40 }])
    expect(
      screen.queryByTestId("chat-document-attachment")
    ).not.toBeInTheDocument()
    expect(screen.getByText("report.pdf")).toBeInTheDocument()
  })

  it("opens the fullscreen viewer on click and closes it", async () => {
    renderChat([pdfAttachment])
    fireEvent.click(screen.getByRole("button", { name: "Open document" }))

    // The dialog announces the file and the (lazy) F0PdfViewer toolbar appears
    // (generous timeout: the viewer chunk resolves through React.lazy).
    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    expect(
      await screen.findByRole(
        "button",
        { name: "Next page" },
        { timeout: 5000 }
      )
    ).toBeInTheDocument()

    // Close via the top-band pill (the backdrop shares the same label).
    const closeButtons = screen.getAllByRole("button", { name: "Close" })
    fireEvent.click(closeButtons[closeButtons.length - 1])
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
  })

  it("falls back to the plain file chip when the document can't load", async () => {
    renderChat([
      {
        kind: "file",
        url: "https://cdn.example.com/broken.pdf",
        name: "broken.pdf",
        mimeType: "application/pdf",
      },
    ])
    // Card first, then the load error demotes it to the chip.
    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-document-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("broken.pdf")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })
})
