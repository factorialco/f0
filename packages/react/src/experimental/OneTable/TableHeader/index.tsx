import { cn } from "@/lib/utils"
import { TableHeader as TableHeaderRoot } from "@/ui/table"

interface TableHeaderProps {
  children: React.ReactNode
  sticky?: boolean
}

export function TableHeader({ children, sticky = false }: TableHeaderProps) {
  return <TableHeaderRoot className={cn(sticky && "sticky top-0 z-20")}>{children}</TableHeaderRoot>
}
