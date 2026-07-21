"use client"

import { lazy, type ReactNode, Suspense, useEffect, useState } from "react"

import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Dialog, DialogContent, DialogTitle } from "@/ui/Dialog"
import { Skeleton } from "@/ui/skeleton"

import { useChatDocumentPreview } from "../providers/ChatUIProvider"

// The document viewer is heavy (pdf.js up front, and it lazy-loads the
// sheet/docx/text panes itself) — its chunk loads the first time a document
// is opened, not with the chat.
const LazyDocumentViewer = lazy(() =>
  import("@/components/F0PdfViewer").then((module) => ({
    default: module.F0PdfViewer,
  }))
)

/**
 * In-chat fullscreen document viewer, mirroring {@link ChatImagePreview}: a
 * modal portaled to `document.body` (above the chat panel and its host) with a
 * click-anywhere-to-close backdrop. The content is {@link F0PdfViewer} routing
 * by document `kind` — the full pdf.js viewer for PDFs, an Excel-style grid
 * for spreadsheets, docx-preview for Word, and a rendered document for
 * text/markdown. Every kind carries the viewer's toolbar, and Close rides in
 * it as a custom action (no floating band on top).
 */
export const ChatDocumentPreview = (): ReactNode => {
  const i18n = useI18n()
  const { documentPreview, closeDocumentPreview } = useChatDocumentPreview()

  // Portal above the whole app (see ChatImagePreview) — resolved on the client
  // to stay SSR-safe.
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  useEffect(() => setPortalTarget(document.body), [])

  const file = documentPreview?.file
  const kind = documentPreview?.kind

  return (
    <Dialog
      open={documentPreview !== null}
      onOpenChange={(next) => {
        if (!next) closeDocumentPreview()
      }}
    >
      {file && kind && (
        <DialogContent
          container={portalTarget}
          className="h-full w-full max-w-none rounded-none bg-transparent p-0 shadow-none"
          withTranslateAnimation={false}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {file.name || i18n.chat.documentPreview}
          </DialogTitle>

          {/* Click-anywhere-to-close backdrop (the dim itself is the dialog
              overlay, behind this). */}
          <button
            type="button"
            tabIndex={-1}
            aria-label={i18n.chat.closePreview}
            className="absolute inset-0 cursor-default"
            onClick={closeDocumentPreview}
          />

          {/* Centered viewer. It opts back into pointer events over the
              click-through wrapper. */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 pb-4 pt-4">
            <div className="pointer-events-auto h-full w-full max-w-4xl overflow-hidden rounded-lg">
              <Suspense fallback={<Skeleton className="h-full w-full" />}>
                <LazyDocumentViewer
                  url={file.url}
                  kind={kind}
                  filename={file.name}
                  mimeType={file.mimeType}
                  initialScale="page-width"
                  withCredentials={false}
                  actions={[
                    {
                      icon: Cross,
                      label: i18n.chat.closePreview,
                      onClick: closeDocumentPreview,
                    },
                  ]}
                />
              </Suspense>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
