import React from "react"

import { cn } from "../utils"

export const Placeholder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function Placeholder({ className, children, ...props }, ref) {
  return (
    <div
      className={cn(
        className,
        "flex place-content-center items-center justify-center rounded-xs border border-dashed border-f1-border bg-transparent p-4 dark:border-f1-border-secondary"
      )}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      <div className="text-lg text-f1-foreground-secondary">{children}</div>
    </div>
  )
})
