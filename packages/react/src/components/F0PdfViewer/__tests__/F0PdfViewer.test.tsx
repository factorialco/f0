import { type ReactNode, useEffect, useRef } from "react"
import { describe, expect, it, vi } from "vitest"

import { Cross as CrossIcon } from "@/icons/app"
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
    scale,
    onLoadSuccess,
    inputRef,
  }: {
    pageNumber: number
    rotate?: number
    scale?: number
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
        data-scale={scale}
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

  it("appends host actions after the built-in toolbar controls", async () => {
    const onClose = vi.fn()
    render(
      <F0PdfViewer
        url="/doc.pdf"
        filename="doc.pdf"
        actions={[{ icon: CrossIcon, label: "Close", onClick: onClose }]}
      />
    )
    const close = await screen.findByRole("button", { name: "Close" })
    fireEvent.click(close)
    expect(onClose).toHaveBeenCalledTimes(1)
    // Built-ins stay put alongside the custom action.
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument()
  })

  it("renders the skeleton variant", () => {
    render(<F0PdfViewer.Skeleton />)
    expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
  })

  it("reserves the page box at the target size the moment you zoom (layout leads, raster lags)", async () => {
    render(<F0PdfViewer url="/doc.pdf" filename="doc.pdf" />)
    const page1 = await screen.findByTestId("pdf-page-1")
    // Sizer = the box two levels above the (mocked) page: it carries the explicit
    // target size, with the transform layer in between scaling the canvas.
    const sizer = page1.parentElement?.parentElement as HTMLElement
    // Mock page is 600 wide; nothing has zoomed yet.
    await waitFor(() => expect(sizer.style.width).toBe("600px"))

    fireEvent.click(screen.getByRole("button", { name: "Zoom in" }))

    // Layout jumps to the target (600 * 1.25) synchronously so scroll and
    // neighbouring pages stay correct; the crisp re-raster is deferred, so Page
    // is still rasterizing at the previous renderScale.
    expect(sizer.style.width).toBe("750px")
    expect(page1).toHaveAttribute("data-scale", "1")
  })

  it("defers the crisp re-raster until the zoom settles (debounced)", async () => {
    render(<F0PdfViewer url="/doc.pdf" filename="doc.pdf" />)
    const page1 = await screen.findByTestId("pdf-page-1")
    expect(page1).toHaveAttribute("data-scale", "1")

    fireEvent.click(screen.getByRole("button", { name: "Zoom in" }))
    // Right after the click renderScale still lags: the canvas keeps its raster.
    expect(page1).toHaveAttribute("data-scale", "1")

    // After the debounce, renderScale catches up to the target and re-rasterizes.
    await waitFor(() =>
      expect(screen.getByTestId("pdf-page-1")).toHaveAttribute(
        "data-scale",
        "1.25"
      )
    )
  })
})
