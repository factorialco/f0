import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"

import { F0PdfViewerBase } from "./F0PdfViewer"
import { F0PdfViewerSkeleton } from "./F0PdfViewerSkeleton"

export type { F0PdfViewerProps, F0PdfScale } from "./types"
export { pdfScales } from "./types"
export { configurePdfWorker } from "./pdfWorker"

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0PdfViewer = withDataTestId(
  experimentalComponent(
    "F0PdfViewer",
    withSkeleton(F0PdfViewerBase, F0PdfViewerSkeleton)
  )
)
