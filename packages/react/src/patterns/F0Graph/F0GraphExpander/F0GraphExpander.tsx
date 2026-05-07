import { forwardRef, type CSSProperties } from "react"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"

import type { F0GraphExpanderProps } from "./types"

export const F0GraphExpander = forwardRef<HTMLDivElement, F0GraphExpanderProps>(
  ({ count, expanded, onClick, size = 24 }, ref) => {
    const displayCount = count > 99 ? "+99" : String(count)
    const isOverflow = count > 99
    const fontSize = Math.round(size * 0.5)

    return (
      <div
        ref={ref}
        className={cn(
          "[&_button]:rounded-full [&_button]:p-0 [&_button>div]:min-w-fit [&_button>div]:overflow-visible",
          isOverflow && "[&_button]:px-2"
        )}
        style={
          {
            "--f0-expander-size": `${size}px`,
            "--f0-expander-font": `${fontSize}px`,
          } as CSSProperties
        }
      >
        <div
          className={cn(
            "[&_button]:!h-[var(--f0-expander-size)]",
            isOverflow
              ? "[&_button]:!w-auto [&_button]:!min-w-[var(--f0-expander-size)]"
              : "[&_button]:!w-[var(--f0-expander-size)]",
            "[&_button_*]:!text-[length:var(--f0-expander-font)] [&_button_*]:!leading-none"
          )}
        >
          <F0Button
            variant="neutral"
            size="sm"
            label={displayCount}
            onClick={onClick}
            aria-expanded={expanded}
            aria-label={`${expanded ? "Collapse" : "Expand"} ${count} items`}
          />
        </div>
      </div>
    )
  }
)

F0GraphExpander.displayName = "F0GraphExpander"
