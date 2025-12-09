import { cn } from "@/lib/utils"

export interface SortableBlockProps {
  children: React.ReactNode
  className?: string
}

export const GridBlock = ({ children, className }: SortableBlockProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-md bg-[#f00]">{children}</div>
    </div>
  )
}
