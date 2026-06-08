import { useCallback, useRef } from "react"

import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Download } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

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

export function Table({
  children,
  title,
  ...props
}: React.HTMLAttributes<HTMLTableElement> & { title?: string }) {
  const translation = useI18n()
  const ref = useRef<HTMLTableElement>(null)

  const handleDownload = useCallback(
    (format: DownloadFormat) => {
      if (!ref.current) return
      const filename = title?.replace(/\s+/g, "_").toLowerCase() || "table"
      downloadTable(ref.current, format, filename)
    },
    [title]
  )

  return (
    <div className="group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary">
      <div className="flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2">
        <OneEllipsis
          tag="h2"
          className="text-base font-medium capitalize text-f1-foreground"
        >
          {title ?? translation.ai.reportCard.tableLabel}
        </OneEllipsis>
        <Dropdown
          icon={Download}
          size="md"
          items={[
            {
              label: translation.t("ai.dataDownload.download", {
                format: "Excel",
              }),
              icon: Download,
              onClick: () => handleDownload("xlsx"),
            },
            {
              label: translation.t("ai.dataDownload.download", {
                format: "CSV",
              }),
              icon: Download,
              onClick: () => handleDownload("csv"),
            },
          ]}
        />
      </div>
      <div className="scrollbar-macos overflow-x-auto">
        <table
          ref={ref}
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

export function Th({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      {...props}
      className={cn(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        props.className
      )}
    >
      {children}
    </th>
  )
}

export function Td({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      {...props}
      className={cn(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        props.className
      )}
    >
      {children}
    </td>
  )
}
