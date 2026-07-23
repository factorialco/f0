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
        // The overlay (including its wide transparent `pl-20` fade area) must not
        // intercept pointer events: otherwise it swallows hover/click on the cell
        // content beneath it — e.g. a trailing tagList "+N" pill can neither be
        // hovered to open its popover nor clicked. Only the actual action buttons
        // (which set `pointer-events-auto` themselves) stay interactive.
        // Consumers that want the whole overlay clickable (e.g. the List view)
        // opt back in via `className`.
        "pointer-events-none absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
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
