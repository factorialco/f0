import { forwardRef } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { F0GraphExpanderProps } from "./types"

// CUSTOM: F0Button only supports sm/md/lg (24/32/40px). The expander needs
// arbitrary pixel sizes (up to 72px at dot zoom). A native <button> styled
// with F0 neutral-variant tokens is used instead.

export const F0GraphExpander = forwardRef<HTMLDivElement, F0GraphExpanderProps>(
  (
    { count, expanded, onClick, size = 24, tabIndex, ariaLabel, loading },
    ref
  ) => {
    const i18n = useI18n()
    const displayCount = count > 99 ? "+99" : String(count)
    const isOverflow = count > 99
    const fontSize = Math.round(size * 0.5)

    return (
      <div ref={ref} className="inline-flex">
        <button
          type="button"
          tabIndex={tabIndex}
          onClick={onClick}
          aria-expanded={expanded}
          aria-label={
            ariaLabel ??
            i18n.t(
              expanded ? "graph.expander.collapse" : "graph.expander.expand",
              { count }
            )
          }
          className={cn(
            "inline-flex items-center justify-center rounded-full border-none p-0 font-medium",
            "bg-f1-background-secondary text-f1-foreground",
            "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]",
            "transition-colors",
            "hover:bg-f1-background-secondary-hover",
            "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]",
            focusRing(),
            isOverflow && "px-2",
            loading && "animate-pulse"
          )}
          style={{
            height: size,
            minWidth: size,
            width: isOverflow ? "auto" : size,
            fontSize,
            lineHeight: 1,
          }}
        >
          {displayCount}
        </button>
      </div>
    )
  }
)

F0GraphExpander.displayName = "F0GraphExpander"
