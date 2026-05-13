import { useCallback, useRef } from "react"

import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Download } from "@/icons/app"
import { F0Box } from "@/lib/F0Box"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import type { DataDownloadDataset } from "../canvas/types"

type DownloadFormat = "xlsx" | "csv"

async function downloadTable(
  table: HTMLTableElement,
  format: DownloadFormat,
  filename: string
) {
  const XLSX = await import("xlsx")
  const workbook = XLSX.utils.table_to_book(table, { sheet: "Data" })
  XLSX.writeFile(workbook, `${filename}.${format}`)
}

export type F0AiTableCardProps = {
  /**
   * Tabular data to render. Reuses the same shape used by the
   * `dataDownload` canvas entity so the agent payload travels untouched.
   */
  dataset: DataDownloadDataset
  /**
   * Title shown above the table. Defaults to `"Table"`.
   */
  title?: string
  /**
   * Filename used for downloads (without extension). Defaults to the
   * slugified title, or `"table"` when no title is provided.
   */
  filename?: string
}

/**
 * Compact inline table for small datasets shown directly in an AI chat
 * stream. Headers come from `columnLabels` when present, otherwise from
 * the raw column id. Shows a download dropdown (Excel / CSV) — Excel
 * support is loaded lazily via `xlsx`. Pure presentational — no hooks,
 * no AI coupling.
 */
export function F0AiTableCard({
  dataset,
  title = "Table",
  filename,
}: F0AiTableCardProps) {
  const tableRef = useRef<HTMLTableElement>(null)

  const handleDownload = useCallback(
    (format: DownloadFormat) => {
      if (!tableRef.current) return
      const resolved =
        filename ?? (title.replace(/\s+/g, "_").toLowerCase() || "table")
      void downloadTable(tableRef.current, format, resolved)
    },
    [title, filename]
  )

  if (!dataset.columns?.length) return null

  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      borderRadius="md"
      border="default"
      borderColor="secondary"
    >
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="lg"
        border="none"
        borderBottom="default"
        borderColor="secondary"
        paddingX="md"
        paddingY="sm"
      >
        <OneEllipsis
          tag="h2"
          className="text-base font-medium capitalize text-f1-foreground"
        >
          {title}
        </OneEllipsis>
        <Dropdown
          icon={Download}
          size="md"
          items={[
            {
              label: "Download Excel",
              icon: Download,
              onClick: () => handleDownload("xlsx"),
            },
            {
              label: "Download CSV",
              icon: Download,
              onClick: () => handleDownload("csv"),
            },
          ]}
        />
      </F0Box>
      <F0Box overflowX="auto">
        <table
          ref={tableRef}
          className={cn(
            "w-full border-separate border-spacing-0 text-sm",
            "[&_tbody_tr:last-child_td]:border-b-0"
          )}
        >
          <thead>
            <tr>
              {dataset.columns.map((col) => (
                <th
                  key={col}
                  className="sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary"
                >
                  {dataset.columnLabels?.[col] ?? col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataset.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {dataset.columns.map((col) => {
                  const value = row[col]
                  return (
                    <td
                      key={col}
                      className="max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground"
                    >
                      {value == null ? "" : String(value)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </F0Box>
    </F0Box>
  )
}

F0AiTableCard.displayName = "F0AiTableCard"
