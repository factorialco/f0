import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function BaseCell({
  readonly = false,
  showRightBorder = true,
  children,
}: {
  readonly?: boolean
  showRightBorder?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "flex w-full h-full min-w-0 min-h-12 border-0 border-r-[1px] border-solid border-f1-border-secondary",
        "cursor-text",
        !showRightBorder && "border-r-0",
        readonly && "bg-f1-background-secondary"
      )}
    >
      {children}
    </div>
  )
}
