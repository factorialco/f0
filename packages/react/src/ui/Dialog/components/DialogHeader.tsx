import { HTMLAttributes } from "react"

export const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => <div className={className} {...props} />
DialogHeader.displayName = "DialogHeader"
