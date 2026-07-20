import { useEffect, useState, type ReactNode } from "react"

import { ToggleGroup, ToggleGroupItem } from "@/deprecated/ToggleGroup"
import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"

import { columnLetters, fetchWorkbook, type SheetGrid } from "../sheetPreview"
import { type F0PdfViewerAction } from "../types"
import { DocumentToolbar, useDocumentZoom } from "./DocumentToolbar"

// Grid caps applied at parse time (see sheetPreview): enough for any preview
// while keeping a million-row export from freezing the tab. Truncation is
// announced under the grid.
const VIEWER_MAX_ROWS = 1000
const VIEWER_MAX_COLS = 100

/**
 * Spreadsheet pane for F0PdfViewer's kind="sheet": an Excel-style grid (letter
 * columns, numbered rows) under a toolbar carrying one tab per sheet plus
 * download and the host's custom actions. Kept in its own module so SheetJS
 * stays in a lazy chunk — F0PdfViewer loads it via `React.lazy`. Default
 * export required by `lazy()`.
 */
const SheetViewer = ({
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
  const [sheets, setSheets] = useState<SheetGrid[] | null>(null)
  const [failed, setFailed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    fetchWorkbook(url, { maxRows: VIEWER_MAX_ROWS, maxCols: VIEWER_MAX_COLS })
      .then((parsed) => {
        if (cancelled) return
        if (parsed.length === 0) setFailed(true)
        else setSheets(parsed)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  const active = sheets
    ? sheets[Math.min(activeIndex, sheets.length - 1)]
    : null
  const letters = active ? columnLetters(active.rows) : []

  return (
    <div className="flex h-full w-full flex-col bg-f1-background">
      {/* The toolbar renders in every state so download (and the host's
          actions, e.g. Close) stay reachable even when the preview fails. */}
      <DocumentToolbar
        url={url}
        filename={filename}
        actions={actions}
        zoom={zoom}
      >
        {/* Sheet switcher — one toggle per workbook sheet. Radix single-type
            toggles emit "" when re-clicking the active one; keep it selected. */}
        {sheets && sheets.length > 1 && (
          <ToggleGroup
            type="single"
            size="sm"
            value={String(activeIndex)}
            onValueChange={(value: string) => {
              if (value) setActiveIndex(Number(value))
            }}
            className="justify-start"
          >
            {sheets.map((sheet, index) => (
              <ToggleGroupItem
                key={`${sheet.name}-${index}`}
                value={String(index)}
                className="whitespace-nowrap"
              >
                {sheet.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        )}
      </DocumentToolbar>
      {failed ? (
        <div className="flex min-h-0 grow items-center justify-center text-f1-foreground-secondary">
          {i18n.pdfViewer.previewFailed}
        </div>
      ) : !active ? (
        <Skeleton className="min-h-0 w-full grow rounded-none" />
      ) : (
        <>
          <div className="min-h-0 grow overflow-auto">
            {/* CSS zoom reflows (unlike transform), so the scroll area and the
                sticky header row track the zoomed size correctly. */}
            <table
              className="border-collapse text-sm"
              style={{ zoom: zoom.scale }}
            >
              <thead>
                <tr>
                  {/* Corner cell over the row numbers. */}
                  <th className="sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1" />
                  {letters.map((letter) => (
                    <th
                      key={letter}
                      className="sticky top-0 z-10 border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center font-medium text-f1-foreground-secondary"
                    >
                      {letter}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="border border-solid border-f1-border-secondary bg-f1-background-secondary px-2 py-1 text-center text-f1-foreground-secondary">
                      {rowIndex + 1}
                    </td>
                    {letters.map((_, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="whitespace-nowrap border border-solid border-f1-border-secondary px-2 py-1 text-f1-foreground"
                      >
                        {row[cellIndex] ?? ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {active.truncatedRows && (
            <div className="shrink-0 border-0 border-t border-solid border-f1-border-secondary px-3 py-1.5 text-sm text-f1-foreground-secondary">
              {i18n.t("pdfViewer.showingFirstRows.other", {
                count: VIEWER_MAX_ROWS,
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default SheetViewer
