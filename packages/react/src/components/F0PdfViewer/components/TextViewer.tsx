import { useEffect, useState, type ReactNode } from "react"

import { parseMarkdownDocument } from "@/lib/markdown"
import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"

import { type F0PdfViewerAction } from "../types"
import { DocumentToolbar, useDocumentZoom } from "./DocumentToolbar"

/** Matches the chat's text-preview size cap — hosts shouldn't offer a preview
 * beyond this, so the viewer only guards against lying sizes. */
const MAX_CHARS = 2 * 1024 * 1024

// Block-level styles for the sanitized markdown HTML (no typography plugin in
// the design system — targeted arbitrary variants instead).
const MARKDOWN_STYLES = [
  "[&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-2xl [&_h1]:font-semibold",
  "[&_h2]:mb-2 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-semibold",
  "[&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold",
  "[&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:font-semibold",
  "[&_p]:my-3",
  "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-1",
  "[&_a]:text-f1-foreground-accent [&_a]:underline",
  "[&_blockquote]:my-3 [&_blockquote]:border-0 [&_blockquote]:border-l-2 [&_blockquote]:border-solid [&_blockquote]:border-f1-border [&_blockquote]:pl-3 [&_blockquote]:text-f1-foreground-secondary",
  "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-f1-background-secondary [&_pre]:p-3",
  "[&_code]:font-mono [&_code]:text-sm",
  "[&_table]:my-3 [&_table]:border-collapse",
  "[&_th]:border [&_th]:border-solid [&_th]:border-f1-border-secondary [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_th]:font-medium",
  "[&_td]:border [&_td]:border-solid [&_td]:border-f1-border-secondary [&_td]:px-2 [&_td]:py-1",
  "[&_hr]:my-4 [&_hr]:border-f1-border-secondary",
].join(" ")

const isMarkdown = (name: string, mimeType?: string): boolean =>
  Boolean(mimeType?.toLowerCase().includes("markdown")) ||
  name.toLowerCase().endsWith(".md") ||
  name.toLowerCase().endsWith(".markdown")

/**
 * Text pane for F0PdfViewer's kind="text": `.md` files render as a sanitized
 * markdown document (see `parseMarkdownDocument`), everything else
 * (txt/log/json) as monospaced plain text. Lazy-loaded by F0PdfViewer (the
 * remark pipeline isn't free); default export required by `lazy()`.
 */
const TextViewer = ({
  url,
  name,
  mimeType,
  withCredentials = true,
  actions,
}: {
  url: string
  name: string
  mimeType?: string
  withCredentials?: boolean
  actions?: F0PdfViewerAction[]
}): ReactNode => {
  const i18n = useI18n()
  const zoom = useDocumentZoom()
  const [text, setText] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    // Reset so a url change never shows the previous document (or a previous
    // failure) while the new one loads.
    setText(null)
    setFailed(false)
    fetch(url, { credentials: withCredentials ? "include" : "same-origin" })
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`)
        return response.text()
      })
      .then((content) => {
        if (!cancelled) setText(content.slice(0, MAX_CHARS))
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [url, withCredentials])

  return (
    <div className="flex h-full w-full flex-col bg-f1-background">
      {/* The toolbar renders in every state so download (and the host's
          actions, e.g. Close) stay reachable even when the preview fails.
          No title in it — same as the PDF toolbar. */}
      <DocumentToolbar
        url={url}
        filename={name}
        withCredentials={withCredentials}
        actions={actions}
        zoom={zoom}
      />
      {failed ? (
        <div className="flex min-h-0 grow items-center justify-center text-f1-foreground-secondary">
          {i18n.pdfViewer.previewFailed}
        </div>
      ) : text === null ? (
        <Skeleton
          role="status"
          aria-busy={true}
          aria-label={i18n.pdfViewer.loading}
          className="min-h-0 w-full grow rounded-none"
        />
      ) : (
        <div className="min-h-0 grow overflow-auto">
          {/* Zoom on an inner wrapper (the flex layout owns the scroll
              container's size). CSS zoom reflows, so scrolling tracks it. */}
          <div style={{ zoom: zoom.scale }}>
            {isMarkdown(name, mimeType) ? (
              <div
                className={`mx-auto max-w-3xl px-6 py-4 text-base text-f1-foreground ${MARKDOWN_STYLES}`}
                // Sanitized by DOMPurify inside parseMarkdownDocument.
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownDocument(text),
                }}
              />
            ) : (
              <pre className="m-0 whitespace-pre-wrap break-words px-6 py-4 font-mono text-sm text-f1-foreground">
                {text}
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TextViewer
