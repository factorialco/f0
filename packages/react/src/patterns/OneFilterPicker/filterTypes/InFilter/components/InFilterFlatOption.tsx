"use client"

import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn, focusRing } from "@/lib/utils"

import { InFilterOptionItem } from "../types"

export type InFilterFlatOptionProps<T extends string> = {
  option: InFilterOptionItem<T>
  isSelected: boolean
  onToggle: () => void
  isCompactMode?: boolean
}

export function InFilterFlatOption<T extends string>({
  option,
  isSelected,
  onToggle,
  isCompactMode,
}: InFilterFlatOptionProps<T>) {
  const optionId = `option-${String(option.value)}`

  return (
    <div className={cn("w-full", !isCompactMode && "px-2")}>
      <div
        className={cn(
          "flex w-full min-w-0 flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary",
          isCompactMode && "py-1 pr-1",
          focusRing()
        )}
        onClick={onToggle}
      >
        <span className="min-w-0 flex-1">
          <OneEllipsis>{option.label}</OneEllipsis>
        </span>
        {/* The presentational checkbox is purely visual — the row handles the
            click via onToggle. `pointer-events-none` lets a real click on the
            checkbox fall through to the row's onToggle (in and out of a <form>).
            Inside a <form> Radix also renders a hidden BubbleInput whose sync
            effect dispatches a synthetic click on each `checked` change; that
            click (target = the hidden <input>) bubbles here and would re-trigger
            onToggle in an infinite select/deselect loop, so stop just that one. */}
        <div
          className="pointer-events-none shrink-0"
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement) e.stopPropagation()
          }}
        >
          <F0Checkbox
            id={optionId}
            title={option.label}
            checked={isSelected}
            presentational
            hideLabel
          />
        </div>
      </div>
    </div>
  )
}
