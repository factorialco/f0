import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { downloadPdf, printPdf } from "../pdfActions"

const fakePdf = {
  saveDocument: () => Promise.resolve(new Uint8Array([1, 2, 3])),
} as unknown as Parameters<typeof downloadPdf>[0]

beforeEach(() => {
  URL.createObjectURL = vi.fn(() => "blob:fake")
  URL.revokeObjectURL = vi.fn()
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe("downloadPdf", () => {
  it("does nothing without a pdf", async () => {
    const click = vi.spyOn(HTMLAnchorElement.prototype, "click")
    await downloadPdf(null, "x.pdf")
    expect(click).not.toHaveBeenCalled()
  })

  it("downloads with the provided filename and cleans up the object URL", async () => {
    let downloadName = ""
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function (this: HTMLAnchorElement) {
        downloadName = this.download
      }
    )
    await downloadPdf(fakePdf, "report.pdf")
    expect(downloadName).toBe("report.pdf")
    expect(URL.createObjectURL).toHaveBeenCalled()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:fake")
  })

  it("falls back to document.pdf when the filename is empty", async () => {
    let downloadName = ""
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(
      function (this: HTMLAnchorElement) {
        downloadName = this.download
      }
    )
    await downloadPdf(fakePdf, "")
    expect(downloadName).toBe("document.pdf")
  })
})

describe("printPdf", () => {
  it("does nothing without a pdf", async () => {
    const append = vi.spyOn(document.body, "appendChild")
    await printPdf(null)
    expect(append).not.toHaveBeenCalled()
  })

  it("appends a hidden iframe pointing at the document blob", async () => {
    const append = vi.spyOn(document.body, "appendChild")
    await printPdf(fakePdf)
    expect(URL.createObjectURL).toHaveBeenCalled()
    const iframe = append.mock.calls
      .map(([node]) => node)
      .find(
        (node): node is HTMLIFrameElement => node instanceof HTMLIFrameElement
      )
    expect(iframe).toBeDefined()
    expect(iframe?.style.display).toBe("none")
  })
})
