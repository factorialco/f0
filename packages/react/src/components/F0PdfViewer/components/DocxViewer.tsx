import { useEffect, useRef, useState, type ReactNode } from "react"

import { renderAsync } from "docx-preview"

import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"

import { type F0PdfViewerAction } from "../types"
import { DocumentToolbar, useDocumentZoom } from "./DocumentToolbar"

/**
 * Word pane for F0PdfViewer's kind="docx": docx-preview renders the document
 * with its page layout (breaks, headers/footers) into a scrollable container,
 * under a toolbar with download and the host's custom actions.
 * Kept in its own module so docx-preview (+ jszip) stay in a lazy chunk —
 * F0PdfViewer loads it via `React.lazy`. Default export required by `lazy()`.
 */
const DocxViewer = ({
  url,
  filename,
  actions,
}: {
  url: string
  filename?: string
  actions?: F0PdfViewerAction[]
}): ReactNode => {
  const i18n = useI18n()
  const zoom = useDocumentZoom()
  const hostRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<"loading" | "ready" | "failed">("loading")

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    let cancelled = false
    setState("loading")
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`)
        return response.blob()
      })
      .then((blob) => {
        if (cancelled) return
        // The wrapper brings docx-preview's page chrome (page background and
        // spacing between pages), matching what a Word preview looks like.
        return renderAsync(blob, host, undefined, {
          inWrapper: true,
          breakPages: true,
        }).then(() => {
          if (!cancelled) setState("ready")
        })
      })
      .catch(() => {
        if (!cancelled) setState("failed")
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return (
    <div className="flex h-full w-full flex-col bg-f1-background">
      {/* The toolbar renders in every state so download (and the host's
          actions, e.g. Close) stay reachable even when the preview fails.
          No title in it — same as the PDF toolbar. */}
      <DocumentToolbar
        url={url}
        filename={filename}
        actions={actions}
        zoom={zoom}
      />
      <div className="relative min-h-0 grow overflow-auto bg-f1-background-secondary">
        {state === "loading" && (
          <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
        )}
        {state === "failed" && (
          <div className="flex h-full w-full items-center justify-center bg-f1-background text-f1-foreground-secondary">
            {i18n.pdfViewer.previewFailed}
          </div>
        )}
        {/* Always mounted: the render effect writes into it across url changes.
            CSS zoom reflows, so the scroll container tracks the zoomed pages. */}
        <div
          ref={hostRef}
          className={state === "failed" ? "hidden" : undefined}
          style={{ zoom: zoom.scale }}
        />
      </div>
    </div>
  )
}

export default DocxViewer
