import { describe, expect, it } from "vitest"

import { type F0ChatFileAttachment } from "../../types"
import { documentPreviewKind, withinPreviewSizeLimit } from "../attachments"

const file = (
  overrides: Partial<F0ChatFileAttachment>
): F0ChatFileAttachment => ({
  kind: "file",
  url: "https://cdn.example.com/doc",
  name: "document",
  ...overrides,
})

describe("documentPreviewKind", () => {
  it("detects each family by MIME type", () => {
    expect(
      documentPreviewKind(file({ name: "r", mimeType: "application/pdf" }))
    ).toBe("pdf")
    expect(
      documentPreviewKind(
        file({
          name: "r",
          mimeType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        })
      )
    ).toBe("sheet")
    expect(
      documentPreviewKind(
        file({ name: "r", mimeType: "application/vnd.ms-excel" })
      )
    ).toBe("sheet")
    expect(documentPreviewKind(file({ name: "r", mimeType: "text/csv" }))).toBe(
      "sheet"
    )
    expect(
      documentPreviewKind(
        file({
          name: "r",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        })
      )
    ).toBe("docx")
    expect(
      documentPreviewKind(file({ name: "r", mimeType: "text/plain" }))
    ).toBe("text")
    expect(
      documentPreviewKind(file({ name: "r", mimeType: "text/markdown" }))
    ).toBe("text")
    expect(
      documentPreviewKind(file({ name: "r", mimeType: "application/json" }))
    ).toBe("text")
  })

  it("falls back to the extension when MIME is missing or generic", () => {
    expect(documentPreviewKind(file({ name: "report.pdf" }))).toBe("pdf")
    expect(documentPreviewKind(file({ name: "data.XLSX" }))).toBe("sheet")
    expect(documentPreviewKind(file({ name: "legacy.xls" }))).toBe("sheet")
    expect(documentPreviewKind(file({ name: "list.csv" }))).toBe("sheet")
    expect(documentPreviewKind(file({ name: "offer.docx" }))).toBe("docx")
    expect(documentPreviewKind(file({ name: "notes.txt" }))).toBe("text")
    expect(documentPreviewKind(file({ name: "README.md" }))).toBe("text")
    expect(documentPreviewKind(file({ name: "app.log" }))).toBe("text")
    expect(documentPreviewKind(file({ name: "config.json" }))).toBe("text")
    expect(
      documentPreviewKind(
        file({ name: "report.PDF", mimeType: "application/octet-stream" })
      )
    ).toBe("pdf")
  })

  it("uses the LAST extension — .pdf.txt is text, not pdf", () => {
    expect(documentPreviewKind(file({ name: "not-a.pdf.txt" }))).toBe("text")
  })

  it("returns null for chip-only files (ppt, binary .doc, unknown)", () => {
    expect(documentPreviewKind(file({ name: "deck.pptx" }))).toBeNull()
    expect(
      documentPreviewKind(
        file({ name: "deck", mimeType: "application/vnd.ms-powerpoint" })
      )
    ).toBeNull()
    expect(documentPreviewKind(file({ name: "old.doc" }))).toBeNull()
    expect(
      documentPreviewKind(file({ name: "old", mimeType: "application/msword" }))
    ).toBeNull()
    expect(documentPreviewKind(file({ name: "archive.zip" }))).toBeNull()
    expect(documentPreviewKind(file({ name: "no-extension" }))).toBeNull()
    expect(documentPreviewKind(file({ name: ".gitignore" }))).toBeNull()
  })

  it("prefers MIME over the extension when both are present", () => {
    // The transport says csv even though the name looks like txt.
    expect(
      documentPreviewKind(file({ name: "export.txt", mimeType: "text/csv" }))
    ).toBe("sheet")
  })
})

describe("withinPreviewSizeLimit", () => {
  const mb = 1024 * 1024

  it("caps client-side parsing per family", () => {
    expect(
      withinPreviewSizeLimit(file({ name: "a.xlsx", size: 10 * mb }), "sheet")
    ).toBe(true)
    expect(
      withinPreviewSizeLimit(file({ name: "a.xlsx", size: 11 * mb }), "sheet")
    ).toBe(false)
    expect(
      withinPreviewSizeLimit(file({ name: "a.docx", size: 11 * mb }), "docx")
    ).toBe(false)
    expect(
      withinPreviewSizeLimit(file({ name: "a.txt", size: 3 * mb }), "text")
    ).toBe(false)
    expect(
      withinPreviewSizeLimit(file({ name: "a.pdf", size: 50 * mb }), "pdf")
    ).toBe(true)
  })

  it("treats an unknown size as previewable", () => {
    expect(withinPreviewSizeLimit(file({ name: "a.xlsx" }), "sheet")).toBe(true)
  })
})
