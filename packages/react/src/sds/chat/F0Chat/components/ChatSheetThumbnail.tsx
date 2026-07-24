import { useEffect, useRef, useState, type ReactNode } from "react"

import { fetchWorkbook } from "@/components/F0PdfViewer/sheetPreview"

// Enough cells to fill the 160px crop; the parse range is capped too, so a
// giant sheet never materializes beyond this.
const THUMB_ROWS = 12
const THUMB_COLS = 8

/**
 * First-sheet snapshot for the chat's spreadsheet card. Kept in its own module
 * so SheetJS lands in a lazy chunk fetched only when a card scrolls into view —
 * `ChatDocumentAttachmentCard` loads it via `React.lazy`. Default export
 * required by `lazy()`.
 */
const ChatSheetThumbnail = ({
  url,
  onError,
  onRendered,
}: {
  url: string
  /** The card falls back to the plain file chip when the sheet can't load. */
  onError: () => void
  /** Grid painted — the card crossfades its skeleton out. */
  onRendered: () => void
}): ReactNode => {
  const [rows, setRows] = useState<string[][] | null>(null)
  // Latest-callback refs: the card passes inline arrows, and the fetch effect
  // must only re-run when the URL changes.
  const onErrorRef = useRef(onError)
  onErrorRef.current = onError
  const onRenderedRef = useRef(onRendered)
  onRenderedRef.current = onRendered

  useEffect(() => {
    let cancelled = false
    fetchWorkbook(url, { maxRows: THUMB_ROWS, maxCols: THUMB_COLS })
      .then((sheets) => {
        if (cancelled) return
        const first = sheets[0]
        if (!first || first.rows.length === 0) {
          onErrorRef.current()
          return
        }
        setRows(first.rows)
        onRenderedRef.current()
      })
      .catch(() => {
        if (!cancelled) onErrorRef.current()
      })
    return () => {
      cancelled = true
    }
  }, [url])

  if (!rows) return null

  return (
    <table className="w-full border-collapse bg-f1-background text-left">
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="whitespace-nowrap border border-solid border-f1-border-secondary px-1.5 py-0.5 text-xs text-f1-foreground"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ChatSheetThumbnail
