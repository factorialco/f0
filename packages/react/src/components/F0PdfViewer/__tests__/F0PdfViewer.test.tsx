import { type ReactNode, useEffect, useRef } from "react"
import { describe, expect, it, vi } from "vitest"

import {
  fireEvent,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { F0PdfViewer } from "../index"

interface FakePdf {
  numPages: number
  saveDocument: () => Promise<Uint8Array>
}

const fakePdf: FakePdf = {
  numPages: 2,
  saveDocument: () => Promise.resolve(new Uint8Array()),
}

vi.mock("../pdfWorker", () => ({
  ensurePdfWorker: () => {},
  configurePdfWorker: () => {},
}))

vi.mock("@/ui/pdf", () => ({
  pdfjs: { GlobalWorkerOptions: { workerSrc: "" } },
  Document: ({
    children,
    onLoadSuccess,
  }: {
    children?: ReactNode
    onLoadSuccess?: (pdf: FakePdf) => void
  }) => {
    useEffect(() => {
      const id = setTimeout(() => onLoadSuccess?.(fakePdf), 0)
      return () => clearTimeout(id)
    }, [onLoadSuccess])
    return <div data-testid="pdf-document">{children}</div>
  },
  Page: ({
    pageNumber,
    rotate,
    onLoadSuccess,
    inputRef,
  }: {
    pageNumber: number
    rotate?: number
    onLoadSuccess?: (page: {
      originalWidth: number
      originalHeight: number
    }) => void
    inputRef?: (el: HTMLElement | null) => void
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
      inputRef?.(ref.current)
      onLoadSuccess?.({ originalWidth: 600, originalHeight: 800 })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
      <div
        ref={ref}
        data-testid={`pdf-page-${pageNumber}`}
        data-rotate={rotate}
      />
    )
  },
}))

describe("F0PdfViewer", () => {
  it("renders the toolbar controls", async () => {
    render(<F0PdfViewer url="/doc.pdf" filename="doc.pdf" />)
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Next page" })
      ).toBeInTheDocument()
    )
    expect(
      screen.getByRole("button", { name: "Previous page" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Zoom in" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Zoom out" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Print" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })

  it("calls onPdfLoaded with the loaded document", async () => {
    const onPdfLoaded = vi.fn()
    render(
      <F0PdfViewer
        url="/doc.pdf"
        filename="doc.pdf"
        onPdfLoaded={onPdfLoaded}
      />
    )
    await waitFor(() => expect(onPdfLoaded).toHaveBeenCalledWith(fakePdf))
  })

  it("calls onPageChange once the visible page is set", async () => {
    const onPageChange = vi.fn()
    render(
      <F0PdfViewer
        url="/doc.pdf"
        filename="doc.pdf"
        onPageChange={onPageChange}
      />
    )
    await waitFor(() => expect(onPageChange).toHaveBeenCalledWith(1))
  })

  it("renders one Page per document page", async () => {
    render(<F0PdfViewer url="/doc.pdf" filename="doc.pdf" />)
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-1")).toBeInTheDocument()
    )
    expect(screen.getByTestId("pdf-page-2")).toBeInTheDocument()
  })

  it("renders only the requested pages via pagesToDisplay", async () => {
    render(
      <F0PdfViewer url="/doc.pdf" filename="doc.pdf" pagesToDisplay={[1]} />
    )
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-2")).toBeInTheDocument()
    )
    expect(screen.queryByTestId("pdf-page-1")).not.toBeInTheDocument()
  })

  it("hides the rotate control by default", async () => {
    render(<F0PdfViewer url="/doc.pdf" filename="doc.pdf" />)
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Next page" })
      ).toBeInTheDocument()
    )
    expect(
      screen.queryByRole("button", { name: "Rotate" })
    ).not.toBeInTheDocument()
  })

  it("rotates and reports the new rotation when rotatable", async () => {
    const onRotationChange = vi.fn()
    render(
      <F0PdfViewer
        url="/doc.pdf"
        filename="doc.pdf"
        rotatable
        onRotationChange={onRotationChange}
      />
    )
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-1")).toHaveAttribute(
        "data-rotate",
        "0"
      )
    )

    fireEvent.click(screen.getByRole("button", { name: "Rotate" }))

    expect(onRotationChange).toHaveBeenCalledWith(90)
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-1")).toHaveAttribute(
        "data-rotate",
        "90"
      )
    )
  })

  it("renders the skeleton variant", () => {
    render(<F0PdfViewer.Skeleton />)
    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
  })
})
