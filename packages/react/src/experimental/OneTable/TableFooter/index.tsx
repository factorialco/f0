import { TableFooter as TableFooterRoot } from "@/ui/table"

import { cn } from "../../../lib/utils"

interface TableFooterProps {
  children: React.ReactNode
}

export function TableFooter({ children }: TableFooterProps) {
  return (
    <TableFooterRoot
      className={cn(
        "bg-f1-background-default sticky bottom-0 z-10 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"
      )}
    >
      {children}
    </TableFooterRoot>
  )
}
