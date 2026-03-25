import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

import type { TimelineRowStatus } from "../types"

export const IconContainer = ({
  status,
  children,
  className,
  ...rest
}: {
  status: TimelineRowStatus
  children: ReactNode
} & ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "flex h-7 w-7 shrink-0 items-center justify-center rounded",
      status === "completed"
        ? "border border-f1-border-secondary bg-f1-background-primary"
        : "bg-f1-background-tertiary",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
