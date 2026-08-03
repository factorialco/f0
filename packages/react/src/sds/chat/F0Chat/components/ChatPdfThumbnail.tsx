import { type ReactNode } from "react"

import { ensurePdfWorker } from "@/components/F0PdfViewer/pdfWorker"
import { Document, Page } from "@/ui/pdf"

ensurePdfWorker()

/**
 * First-page snapshot for the chat's PDF card. Kept in its own module so
 * react-pdf/pdf.js (heavy) land in a lazy chunk fetched only when a PDF card
 * scrolls into view — `ChatDocumentAttachmentCard` loads it via `React.lazy`.
 * Default export required by `lazy()`.
 */
const ChatPdfThumbnail = ({
  url,
  width,
  onError,
  onRendered,
}: {
  url: string
  /** Rendered page width in CSS pixels (the card crops the height). */
  width: number
  /** The card falls back to the plain file chip when the document can't load. */
  onError: () => void
  /** First page painted — the card crossfades its skeleton out. */
  onRendered: () => void
}): ReactNode => (
  // No inner loading skeletons: the card keeps its own skeleton UNDER this
  // layer and fades the snapshot in over it once the page paints.
  <Document
    file={url}
    loading={null}
    error={null}
    onLoadError={onError}
    onSourceError={onError}
  >
    <Page
      pageNumber={1}
      width={width}
      renderTextLayer={false}
      renderAnnotationLayer={false}
      loading={null}
      error={null}
      onRenderError={onError}
      onRenderSuccess={onRendered}
    />
  </Document>
)

export default ChatPdfThumbnail
