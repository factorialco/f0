import { cn } from "@/lib/utils"

export const ItemActionsRowContainer = ({
  children,
  dropDownOpen,
  className,
}: {
  children: React.ReactNode
  dropDownOpen: boolean
  className?: string
}) => {
  return (
    <aside
      className={cn(
        "absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
        "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
        "via-[#F5F6F8] via-60% dark:via-[#192231]",
        "to-transparent to-100%",
        dropDownOpen ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </aside>
  )
}
