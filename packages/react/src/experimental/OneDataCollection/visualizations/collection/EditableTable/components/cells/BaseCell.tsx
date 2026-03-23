import { ReactNode, useState } from "react"

import { cn } from "@/lib/utils"

import { ErrorTooltip } from "./ErrorTooltip"

const cursorClass = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed",
} as const

export function BaseCell({
  readonly = false,
  showRightBorder = true,
  cursor = "text",
  error,
  children,
}: {
  readonly?: boolean
  showRightBorder?: boolean
  cursor?: "text" | "pointer" | "default" | "not-allowed"
  error?: string
  children: ReactNode
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        "border-0 border-r-[1px] border-f1-border-secondary",
        !showRightBorder && "border-r-0",
        cursorClass[cursor],
        error
          ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]"
          : isFocused
            ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]"
            : "shadow-none hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))]",
        readonly && "bg-f1-background-secondary"
      )}
    >
      {error ? (
        <ErrorTooltip message={error}>{children}</ErrorTooltip>
      ) : (
        children
      )}
    </div>
  )
}
