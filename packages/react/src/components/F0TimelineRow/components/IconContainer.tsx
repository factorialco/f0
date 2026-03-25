import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import type { TimelineRowStatus } from "../types"

export const IconContainer = ({
  status,
  children,
}: {
  status: TimelineRowStatus
  children: ReactNode
}) => (
  <div
    className={cn(
      "flex h-7 w-7 shrink-0 items-center justify-center rounded",
      status === "completed"
        ? "border border-f1-border-secondary bg-white"
        : "bg-f1-background-tertiary"
    )}
  >
    {children}
  </div>
)
