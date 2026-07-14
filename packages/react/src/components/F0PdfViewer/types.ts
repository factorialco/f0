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

export interface F0PdfViewerProps extends WithDataTestIdProps, DataAttributes {
  /** Source URL of the PDF document. */
  url: string
  /** File name used when downloading the document. Defaults to "document.pdf". */
  filename?: string
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
