import { HTMLAttributes } from "react"

export const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props} />
)
DialogFooter.displayName = "DialogFooter"
