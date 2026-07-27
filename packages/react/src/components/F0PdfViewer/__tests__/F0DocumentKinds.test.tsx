import * as XLSX from "xlsx"

import { beforeAll, describe, expect, it, vi } from "vitest"

import { Cross as CrossIcon } from "@/icons/app"
import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0PdfViewer } from "../index"

// The kind="pdf" path (default) is covered by F0PdfViewer.test — these tests
// cover the non-PDF kinds the viewer routes to. pdf.js is mocked out so this
// suite never touches the worker.
vi.mock("../pdfWorker", () => ({
  ensurePdfWorker: () => {},
  configurePdfWorker: () => {},
}))
vi.mock("@/ui/pdf", () => ({
  pdfjs: { GlobalWorkerOptions: { workerSrc: "" } },
  Document: () => null,
  Page: () => null,
}))

// Fake docx-preview: rendering a real docx in jsdom isn't meaningful — the
// mock injects recognizable content so the routing/loading wiring is what's
// under test.
vi.mock("docx-preview", () => ({
  renderAsync: vi.fn(async (_data: Blob, container: HTMLElement) => {
    const paragraph = document.createElement("p")
    paragraph.textContent = "Offer of Employment"
    container.appendChild(paragraph)
  }),
}))

// A REAL two-sheet workbook, generated with SheetJS itself.
const workbookBuffer = (): ArrayBuffer => {
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.aoa_to_sheet([
      ["Employee", "Team"],
      ["Ana García", "People"],
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

const MD_CONTENT = "# Release notes\n\n- Document previews\n"

// Document fetches by extension; "broken" URLs 404.
const fetchMock = vi.fn(async (url: string) => {
  const href = String(url)
  if (href.includes("broken")) return { ok: false, status: 404 }
  return {
    ok: true,
    arrayBuffer: async () => workbookBuffer(),
    blob: async () => new Blob(["docx"]),
    text: async () => MD_CONTENT,
  }
})

beforeAll(() => {
  vi.stubGlobal("fetch", fetchMock)
  // jsdom implements neither object URLs nor anchor navigation.
  Object.assign(URL, {
    createObjectURL: vi.fn(() => "blob:mock"),
    revokeObjectURL: vi.fn(),
  })
})

describe("F0PdfViewer document kinds", () => {
  it("renders kind=sheet as an Excel-style grid with one tab per sheet", async () => {
    render(<F0PdfViewer url="https://cdn.example.com/data.xlsx" kind="sheet" />)

    // Column letters + cells from the first sheet.
    expect(await screen.findByText("Ana García")).toBeInTheDocument()
    expect(screen.getByText("A")).toBeInTheDocument()

    // The sheet switcher is a single-type ToggleGroup (items are radios).
    fireEvent.click(screen.getByRole("radio", { name: "Totals" }))
    expect(await screen.findByText("Revenue")).toBeInTheDocument()
    expect(screen.queryByText("Ana García")).not.toBeInTheDocument()
  })

  it("renders kind=docx through docx-preview", async () => {
    render(<F0PdfViewer url="https://cdn.example.com/offer.docx" kind="docx" />)
    expect(await screen.findByText("Offer of Employment")).toBeInTheDocument()
  })

  it("renders kind=text markdown as a document (heading, not raw source)", async () => {
    render(
      <F0PdfViewer
        url="https://cdn.example.com/notes.md"
        kind="text"
        filename="notes.md"
        mimeType="text/markdown"
      />
    )
    expect(
      await screen.findByRole("heading", { name: "Release notes", level: 1 })
    ).toBeInTheDocument()
  })

  it("renders kind=text plain files as monospaced source", async () => {
    render(
      <F0PdfViewer
        url="https://cdn.example.com/app.log"
        kind="text"
        filename="app.log"
        mimeType="text/plain"
      />
    )
    // The markdown source shows verbatim (mocked fetch serves MD_CONTENT for
    // every text URL) — no heading means no markdown rendering.
    expect(await screen.findByText(/# Release notes/)).toBeInTheDocument()
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
  })

  it("shows the failure state when the document can't load", async () => {
    render(
      <F0PdfViewer url="https://cdn.example.com/broken.xlsx" kind="sheet" />
    )
    expect(
      await screen.findByText("Preview isn't available for this file")
    ).toBeInTheDocument()
    // The toolbar survives the failure — download stays reachable.
    expect(screen.getByRole("toolbar")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })

  it("carries a toolbar with download in every non-PDF kind", async () => {
    for (const kind of ["sheet", "docx", "text"] as const) {
      const { unmount } = render(
        <F0PdfViewer
          url={`https://cdn.example.com/file.${kind}`}
          kind={kind}
          filename={`file.${kind}`}
        />
      )
      expect(await screen.findByRole("toolbar")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Download" })
      ).toBeInTheDocument()
      unmount()
    }
  })

  it("zooms the non-PDF content through the toolbar controls", async () => {
    const { container } = render(
      <F0PdfViewer url="https://cdn.example.com/data.xlsx" kind="sheet" />
    )
    await screen.findByText("Ana García")
    const table = container.querySelector("table")!
    expect(table.style.zoom).toBe("1")

    fireEvent.click(screen.getByRole("button", { name: "Zoom in" }))
    expect(table.style.zoom).toBe("1.25")

    fireEvent.click(screen.getByRole("button", { name: "Zoom out" }))
    fireEvent.click(screen.getByRole("button", { name: "Zoom out" }))
    expect(table.style.zoom).toBe("0.75")
  })

  it("appends host actions to the toolbar and fires them", async () => {
    const onClose = vi.fn()
    render(
      <F0PdfViewer
        url="https://cdn.example.com/data.xlsx"
        kind="sheet"
        actions={[{ icon: CrossIcon, label: "Close", onClick: onClose }]}
      />
    )
    fireEvent.click(await screen.findByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("recovers from a failed url when a working one arrives", async () => {
    const { rerender } = render(
      <F0PdfViewer url="https://cdn.example.com/broken.xlsx" kind="sheet" />
    )
    await screen.findByText("Preview isn't available for this file")

    rerender(
      <F0PdfViewer url="https://cdn.example.com/data.xlsx" kind="sheet" />
    )
    expect(await screen.findByText("Ana García")).toBeInTheDocument()
    expect(
      screen.queryByText("Preview isn't available for this file")
    ).not.toBeInTheDocument()
  })

  it("sends credentials with the document fetch, honoring withCredentials", async () => {
    fetchMock.mockClear()
    const { unmount } = render(
      <F0PdfViewer url="https://cdn.example.com/data.xlsx" kind="sheet" />
    )
    await screen.findByText("Ana García")
    expect(fetchMock).toHaveBeenCalledWith(
      "https://cdn.example.com/data.xlsx",
      {
        credentials: "include",
      }
    )
    unmount()

    fetchMock.mockClear()
    render(
      <F0PdfViewer
        url="https://cdn.example.com/data.xlsx"
        kind="sheet"
        withCredentials={false}
      />
    )
    await screen.findByText("Ana García")
    expect(fetchMock).toHaveBeenCalledWith(
      "https://cdn.example.com/data.xlsx",
      {
        credentials: "same-origin",
      }
    )
  })

  it("downloads through a blob object URL instead of navigating to the file", async () => {
    // Capture anchor clicks: a cross-origin href would navigate the app away,
    // so download must go through an object URL.
    const clickedHrefs: string[] = []
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(function (this: HTMLAnchorElement) {
        clickedHrefs.push(this.href)
      })

    render(
      <F0PdfViewer
        url="https://cdn.example.com/notes.md"
        kind="text"
        filename="notes.md"
      />
    )
    fireEvent.click(await screen.findByRole("button", { name: "Download" }))

    await waitFor(() => expect(clickedHrefs).toEqual(["blob:mock"]))
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:mock")
    clickSpy.mockRestore()
  })
})
