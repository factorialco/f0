import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function BaseCell({
  readonly = false,
  showRightBorder = true,
  cursor = "text",
  children,
}: {
  readonly?: boolean
  showRightBorder?: boolean
  cursor?: "text" | "pointer" | "default" | "not-allowed"
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "flex w-full h-full min-w-0 min-h-12 border-0 border-r-[1px] border-solid border-f1-border-secondary",
        `cursor-${cursor}`,
        !showRightBorder && "border-r-0",
        readonly && "bg-f1-background-secondary"
      )}
    >
      {children}
    </div>
  )
}
