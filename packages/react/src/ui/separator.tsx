import React, { forwardRef } from "react"
import { cn } from "../lib/utils.ts"

type SeparatorProps = {
  bare?: boolean
} & React.HTMLProps<HTMLDivElement>

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
  { bare = false, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      role="separator"
      className={cn("-mx-4 h-[1px]", !bare ? "my-4" : undefined)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)",
      }}
      {...rest}
    />
  )
})
