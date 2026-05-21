import { forwardRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

import type { SearchResult } from "./types"

interface F0GraphSearchResultRowProps {
  result: SearchResult
  active: boolean
  hovered: boolean
  showActiveOutline: boolean
  listboxId: string
  onHover: () => void
  onHoverEnd: () => void
  onSelect: (id: string) => void
}

export const F0GraphSearchResultRow = forwardRef<
  HTMLDivElement,
  F0GraphSearchResultRowProps
>(
  (
    {
      result,
      active,
      hovered,
      showActiveOutline,
      listboxId,
      onHover,
      onHoverEnd,
      onSelect,
    },
    ref
  ) => (
    <div
      ref={ref}
      id={`${listboxId}-${result.id}`}
      role="option"
      aria-selected={active}
      data-active={active || undefined}
      tabIndex={-1}
      onMouseDown={(event) => {
        event.preventDefault()
        onSelect(result.id)
      }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      className={cn(
        "relative flex h-9 w-full items-center justify-start gap-2 rounded-md px-2",
        (hovered || (active && showActiveOutline)) &&
          "bg-f1-background-tertiary"
      )}
    >
      {result.icon && (
        <div className="flex shrink-0 items-center justify-center">
          <F0Icon icon={result.icon} size="md" />
        </div>
      )}
      <div className="flex min-w-0 grow items-center gap-1 overflow-hidden">
        <span className="truncate text-base font-medium text-f1-foreground">
          {result.label}
        </span>
      </div>
    </div>
  )
)

F0GraphSearchResultRow.displayName = "F0GraphSearchResultRow"
