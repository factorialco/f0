"use client"

import {
  type BaseSyntheticEvent,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { Document, Page, type PDFDocumentProxy } from "@/ui/pdf"

import { PdfLoadingState } from "./components/PdfLoadingState"
import { PdfToolbar } from "./components/PdfToolbar"
import "./F0PdfViewer.styles.css"
import { downloadPdf, printPdf } from "./pdfActions"
import { ensurePdfWorker } from "./pdfWorker"
import { fixedScales, nextScaleDown, nextScaleUp } from "./scales"
import type { F0PdfScale, F0PdfViewerProps } from "./types"
import { calculateVisiblePage } from "./visiblePage"

ensurePdfWorker()

interface PageMetrics {
  originalWidth: number
  originalHeight: number
}

const SCROLL_PADDING = 20

export const F0PdfViewerBase = forwardRef<HTMLDivElement, F0PdfViewerProps>(
  (props, ref) => {
    const {
      url,
      filename,
      page = 0,
      pagesToDisplay = [],
      initialScale = "page-width",
      withCredentials = true,
      onPdfLoaded,
      onPageChange,
      ...rest
    } = props

    const { pdfViewer } = useI18n()

    const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null)
    const [pages, setPages] = useState<PageMetrics[]>([])
    const [scale, setScale] = useState(1)
    const [currentPage, setCurrentPage] = useState(0)
    const [selectedScale, setSelectedScale] = useState<F0PdfScale>(initialScale)

    const containerRef = useRef<HTMLDivElement>(null)
    const toolbarRef = useRef<HTMLDivElement>(null)
    const pageElements = useRef<(HTMLElement | null)[]>([])

    const totalPages =
      pagesToDisplay.length > 0 ? pagesToDisplay.length : pdf?.numPages

    const scaleOptions = useMemo(
      (): { value: F0PdfScale; label: string }[] => [
        { value: "page-width", label: pdfViewer.pageWidth },
        { value: "page-fit", label: pdfViewer.pageFit },
        ...fixedScales.map((value) => ({
          value,
          label: `${Number(value) * 100}%`,
        })),
      ],
      [pdfViewer.pageWidth, pdfViewer.pageFit]
    )

    const file = useMemo(
      () => ({ url, withCredentials }),
      [url, withCredentials]
    )

    const goToPage = useCallback(
      (targetPageIndex: number) => {
        const lastPageIndex = (totalPages ?? 1) - 1
        const destination = Math.min(
          Math.max(targetPageIndex, 0),
          lastPageIndex
        )

        const element = pageElements.current[destination]
        const container = element?.offsetParent
        if (element && container instanceof HTMLElement) {
          container.scrollTop =
            element.offsetTop - (toolbarRef.current?.offsetHeight ?? 0) - 10
        }
      },
      [totalPages]
    )

    const applyDynamicScale = useCallback(
      (value: "page-width" | "page-fit") => {
        const metrics = pages[currentPage - 1]
        const container = containerRef.current
        if (!metrics || !container) return

        const toolbarHeight = toolbarRef.current?.offsetHeight ?? 0
        const computed =
          value === "page-width"
            ? (container.clientWidth - SCROLL_PADDING) / metrics.originalWidth
            : (container.clientHeight - toolbarHeight - SCROLL_PADDING) /
              metrics.originalHeight

        setScale(computed)
        setSelectedScale(value)
      },
      [pages, currentPage]
    )

    const onScaleChange = useCallback(
      (value: F0PdfScale) => {
        if (value === "page-width" || value === "page-fit") {
          applyDynamicScale(value)
          return
        }
        setScale(Number(value))
        setSelectedScale(value)
      },
      [applyDynamicScale]
    )

    const zoomTo = useCallback((value: number | undefined) => {
      if (value === undefined) return
      setScale(value)
      const match = fixedScales.find((option) => Number(option) === value)
      if (match) setSelectedScale(match)
    }, [])

    const onZoomIn = useCallback(
      () => zoomTo(nextScaleUp(scale)),
      [scale, zoomTo]
    )
    const onZoomOut = useCallback(
      () => zoomTo(nextScaleDown(scale)),
      [scale, zoomTo]
    )

    const onDocumentLoadSuccess = useCallback(
      (loadedPdf: PDFDocumentProxy) => {
        setPdf(loadedPdf)
        onPdfLoaded?.(loadedPdf)
        setTimeout(() => {
          setCurrentPage(page + 1)
          goToPage(page)
        }, 0)
      },
      [onPdfLoaded, page, goToPage]
    )

    const onContainerScroll = useCallback((event: BaseSyntheticEvent) => {
      const container = event.target
      if (!(container instanceof HTMLElement)) return
      const visiblePage = calculateVisiblePage(
        container,
        pageElements.current,
        toolbarRef.current?.offsetHeight ?? 0
      )
      if (visiblePage) setCurrentPage(visiblePage)
    }, [])

    const onPrint = useCallback(() => {
      void printPdf(pdf)
    }, [pdf])

    const onDownload = useCallback(() => {
      void downloadPdf(pdf, filename)
    }, [pdf, filename])

    useEffect(() => {
      setPdf(null)
      setPages([])
      pageElements.current = []
    }, [url])

    useEffect(() => {
      goToPage(page)
    }, [page, goToPage])

    useEffect(() => {
      if (currentPage > 0) onPageChange?.(currentPage)
    }, [currentPage, onPageChange])

    useEffect(() => {
      if (
        pages.length > 0 &&
        (initialScale === "page-width" || initialScale === "page-fit")
      ) {
        applyDynamicScale(initialScale)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pages.length, initialScale])

    useEffect(() => {
      const container = containerRef.current
      if (!container) return

      const handleClick = (event: Event) => {
        const target = event.target
        if (target instanceof HTMLAnchorElement) {
          target.target = "_blank"
          target.rel = "noopener noreferrer"
        }
      }

      container.addEventListener("click", handleClick, true)
      return () => container.removeEventListener("click", handleClick, true)
    }, [])

    return (
      <div
        ref={ref}
        {...rest}
        className="F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary"
      >
        <div
          ref={containerRef}
          onScroll={onContainerScroll}
          className="F0PdfViewer__surface relative flex h-full flex-col overflow-auto"
        >
          <PdfToolbar
            toolbarRef={toolbarRef}
            currentPage={currentPage}
            totalPages={totalPages}
            hasDocument={Boolean(pdf?.numPages)}
            selectedScale={selectedScale}
            scaleOptions={scaleOptions}
            onPreviousPage={() => goToPage(currentPage - 2)}
            onNextPage={() => goToPage(currentPage)}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
            onScaleChange={onScaleChange}
            onPrint={onPrint}
            onDownload={onDownload}
          />

          {!pdf && <PdfLoadingState label={pdfViewer.loading} />}

          {url && (
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<PdfLoadingState label={pdfViewer.loading} />}
            >
              {pdf &&
                Array.from({ length: totalPages ?? 0 }).map((_, index) => {
                  const pageNumber =
                    (pagesToDisplay.length > 0
                      ? pagesToDisplay[index]
                      : index) + 1
                  return (
                    <div
                      key={index}
                      className="F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4"
                    >
                      <Page
                        className="overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md"
                        pageNumber={pageNumber}
                        scale={scale}
                        renderForms
                        renderTextLayer
                        inputRef={(reference) => {
                          pageElements.current[index] = reference
                        }}
                        onLoadSuccess={(loadedPage) => {
                          setPages((current) => {
                            const next = [...current]
                            next[index] = {
                              originalWidth: loadedPage.originalWidth,
                              originalHeight: loadedPage.originalHeight,
                            }
                            return next
                          })
                        }}
                      />
                    </div>
                  )
                })}
            </Document>
          )}
        </div>
      </div>
    )
  }
)

F0PdfViewerBase.displayName = "F0PdfViewer"
