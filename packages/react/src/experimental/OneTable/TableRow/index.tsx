import { cn } from "../../../lib/utils"

import { TableRow as TableRowRoot } from "@/ui/table"
import { forwardRef } from "react"
interface TableRowProps {
  children: React.ReactNode
  selected?: boolean
  className?: string
  sticky?: boolean
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, selected, className, sticky }, ref) => {
    return (
      <TableRowRoot
        ref={ref}
        className={cn(
          selected && "bg-f1-background-selected hover:bg-f1-background-selected",
          className,
          "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']",
          "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring",
          "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring",
          sticky && "hover:bg-f1-background-hover! sticky top-10 z-50 bg-f1-background"
        )}
      >
        {children}
      </TableRowRoot>
    )
  }
)

TableRow.displayName = "TableRow"
export { TableRow }
