import * as XLSX from "xlsx"

import { beforeAll, describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
  within,
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

// A REAL two-sheet workbook, generated with SheetJS itself — the preview
// parses it through the same library, so the test exercises the actual
// fetch → parse → grid pipeline.
const workbookBuffer = (): ArrayBuffer => {
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.aoa_to_sheet([
      ["Employee", "Team"],
      ["Ana García", "People"],
      ["Luis Pérez", "Finance"],
    ]),
    "Roster"
  )
  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.aoa_to_sheet([
      ["Quarter", "Revenue"],
      ["Q1", "12000"],
    ]),
    "Totals"
  )
  return XLSX.write(workbook, { type: "array", bookType: "xlsx" })
}

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
  // Attachment fetches: "broken" URLs 404, anything else serves the workbook.
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      if (String(url).includes("broken")) return { ok: false, status: 404 }
      return { ok: true, arrayBuffer: async () => workbookBuffer() }
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
      body: "Here's the data",
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

const sheetAttachment = {
  kind: "file",
  url: "https://cdn.example.com/raw-data.xlsx",
  name: "raw-data.xlsx",
  mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
} as const

describe("ChatDocumentAttachmentCard (sheet)", () => {
  it("renders the spreadsheet as a card with the first sheet's cells", async () => {
    renderChat([sheetAttachment])
    const card = screen.getByTestId("chat-document-attachment")
    expect(card).toHaveTextContent("raw-data.xlsx")

    // The lazy SheetJS chunk resolves, the workbook parses, cells appear and
    // the snapshot fades in over the skeleton.
    expect(await screen.findByText("Ana García")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.getByTestId("chat-document-snapshot").className).toContain(
        "opacity-100"
      )
    )
  })

  it("opens the fullscreen grid with one tab per sheet", async () => {
    renderChat([sheetAttachment])
    fireEvent.click(screen.getByRole("button", { name: "Open document" }))

    // Scope to the dialog — the transcript card shows the same cells.
    const dialog = within(await screen.findByRole("dialog"))
    // Excel-style grid: the first sheet's cells (generous timeout: the viewer
    // chunk resolves through React.lazy).
    expect(
      await dialog.findByText("Luis Pérez", undefined, { timeout: 5000 })
    ).toBeInTheDocument()

    // Both workbook sheets are offered in the toolbar's ToggleGroup (items
    // are radios); switching swaps the grid.
    fireEvent.click(dialog.getByRole("radio", { name: "Totals" }))
    expect(await dialog.findByText("Revenue")).toBeInTheDocument()

    const closeButtons = screen.getAllByRole("button", { name: "Close" })
    fireEvent.click(closeButtons[closeButtons.length - 1])
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
  })

  it("falls back to the plain file chip when the sheet can't load", async () => {
    renderChat([
      { ...sheetAttachment, url: "https://cdn.example.com/broken.xlsx" },
    ])
    await waitFor(() =>
      expect(
        screen.queryByTestId("chat-document-attachment")
      ).not.toBeInTheDocument()
    )
    expect(screen.getByText("raw-data.xlsx")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })

  it("keeps the chip for files too big to parse client-side", () => {
    renderChat([{ ...sheetAttachment, size: 11 * 1024 * 1024 }])
    expect(
      screen.queryByTestId("chat-document-attachment")
    ).not.toBeInTheDocument()
    expect(screen.getByText("raw-data.xlsx")).toBeInTheDocument()
  })
})
