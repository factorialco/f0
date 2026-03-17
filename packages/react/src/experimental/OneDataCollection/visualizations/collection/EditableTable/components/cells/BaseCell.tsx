import { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

import { ErrorTooltip } from "./ErrorTooltip"

const cursorClass = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed",
} as const

const errorOutlineStyle: CSSProperties = {
  outline: "1px solid hsl(var(--critical-50))",
  outlineOffset: "-0.5px",
}

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
  return (
    <div
      style={error ? errorOutlineStyle : undefined}
      className={cn(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        cursorClass[cursor],
        error
          ? "border-0 bg-f1-background-critical/10"
          : cn(
              "border-0 border-r-[1px] border-f1-border-secondary",
              !showRightBorder && "border-r-0"
            ),
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
