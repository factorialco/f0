import { type IconType } from "@/components/F0Icon"
import { DataAttributes } from "@/global.types"
import { WithDataTestIdProps } from "@/lib/data-testid"
import type { PDFDocumentProxy } from "@/ui/pdf"

export const pdfScales = [
  "page-width",
  "page-fit",
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4",
] as const

export type F0PdfScale = (typeof pdfScales)[number]

export type F0PdfRotation = 0 | 90 | 180 | 270

/**
 * Document families the viewer can render. "pdf" is the default and keeps the
 * full toolbar (paging, zoom, print, download); the other kinds render a
 * lazy-loaded, read-only preview: "sheet" (xlsx/xls/csv) as an Excel-style
 * grid with one tab per sheet, "docx" through docx-preview with page layout,
 * and "text" as a rendered markdown document (`.md`) or monospaced source.
 */
export type F0DocumentKind = "pdf" | "sheet" | "docx" | "text"

/**
 * Host-provided toolbar action, appended after the built-in controls in every
 * kind — e.g. a Close button when the viewer lives inside a fullscreen overlay.
 */
export type F0PdfViewerAction = {
  icon: IconType
  label: string
  onClick: () => void
}

export interface F0PdfViewerProps extends WithDataTestIdProps, DataAttributes {
  /** Source URL of the document. */
  url: string
  /** File name used when downloading the document. Defaults to "document.pdf". */
  filename?: string
  /**
   * Document family to render. Defaults to "pdf" (unchanged behavior). For the
   * other kinds the PDF-only props below (page, scale, rotation, print…) are
   * ignored.
   */
  kind?: F0DocumentKind
  /** MIME type of the document — used by kind "text" to detect markdown. */
  mimeType?: string
  /**
   * Custom actions appended to the toolbar (after the built-in controls), in
   * every kind — e.g. a Close button when the viewer fills an overlay.
   */
  actions?: F0PdfViewerAction[]
  /** Zero-based page index to scroll to initially (and on change). */
  page?: number
  /** Restrict rendering to a subset of pages (zero-based indexes). */
  pagesToDisplay?: number[]
  /** Initial zoom level. Defaults to "page-width". */
  initialScale?: F0PdfScale
  /** Send credentials with the document request. Defaults to true. */
  withCredentials?: boolean
  /** Show a toolbar control to rotate the document in 90° steps. */
  rotatable?: boolean
  /** Initial rotation in degrees. Defaults to 0. */
  initialRotation?: F0PdfRotation
  /** Called with the new rotation in degrees whenever the user rotates. */
  onRotationChange?: (rotation: F0PdfRotation) => void
  /** Called once the document has loaded, with the pdf.js document proxy. */
  onPdfLoaded?: (pdf: PDFDocumentProxy) => void
  /** Called with the 1-based page number when the visible page changes. */
  onPageChange?: (page: number) => void
}
