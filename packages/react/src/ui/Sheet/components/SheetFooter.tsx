import { HTMLAttributes } from "react"

import { cn } from "../../../lib/utils"

export const SheetFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"
