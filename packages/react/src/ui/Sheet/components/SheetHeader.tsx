import { HTMLAttributes } from "react"

import { cn } from "../../../lib/utils"

export const SheetHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1 p-4", className)} {...props} />
)
SheetHeader.displayName = "SheetHeader"
