import { useRef } from "react"

import { F0Button } from "@/components/F0Button"
import DownloadIcon from "@/icons/app/Download"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { downloadTableAsExcel } from "../utils/tableExport"

/**
 * Table component without download button - for use when parent provides download controls
 */
export function TableSimple({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="mb-2 flex flex-col gap-2">
      <div className="max-h-[600px] overflow-auto rounded-md border border-solid border-f1-border-secondary">
        <table
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

/**
 * Table component with download button
 */
export function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  const { ai } = useI18n()
  const ref = useRef<HTMLTableElement>(null)

  return (
    <div className="mb-2 flex flex-col gap-2">
      <div className="max-h-[600px] overflow-auto rounded-md border border-solid border-f1-border-secondary">
        <table
          ref={ref}
          {...props}
          className={cn(
            "w-full border-separate border-spacing-0",
            props.className
          )}
        >
          {children}
        </table>
      </div>
      <div className="flex justify-start">
        <F0Button
          variant="outline"
          size="sm"
          label={ai.exportTable}
          icon={DownloadIcon}
          onClick={() => {
            if (ref.current)
              downloadTableAsExcel(ref.current, ai.generatedTableFilename)
          }}
        />
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
        "sticky top-0 border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
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
        "border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        props.className
      )}
    >
      {children}
    </td>
  )
}
