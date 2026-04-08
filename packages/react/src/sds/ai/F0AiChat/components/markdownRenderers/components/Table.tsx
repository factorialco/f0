import { useRef } from "react"
import * as XLSX from "xlsx"

import { F0Button } from "@/components/F0Button"
import DownloadIcon from "@/icons/app/Download"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  const translation = useI18n()
  const ref = useRef<HTMLTableElement>(null)

  const handleDownload = () => {
    if (!ref.current) return
    const workbook = XLSX.utils.table_to_book(ref.current, { sheet: "Data" })
    XLSX.writeFile(workbook, "table.xlsx")
  }

  return (
    <div className="group/table relative flex flex-col gap-2">
      <div className="absolute right-2 top-2 z-20 opacity-0 transition-opacity group-hover/table:opacity-100">
        <F0Button
          variant="outline"
          label={translation.t("ai.dataDownload.download", { format: "Excel" })}
          hideLabel
          size="sm"
          icon={DownloadIcon}
          onClick={handleDownload}
        />
      </div>
      <div className="scrollbar-macos overflow-x-auto rounded-md border border-solid border-f1-border-secondary">
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
