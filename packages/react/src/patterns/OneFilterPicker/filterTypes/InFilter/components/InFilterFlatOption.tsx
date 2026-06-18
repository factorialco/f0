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
        {/* The presentational checkbox is a Radix Checkbox; inside a <form> it
            renders a hidden BubbleInput whose sync effect dispatches a click that
            bubbles up to this row's onClick (onToggle), causing an infinite
            select/deselect loop ("Maximum update depth exceeded"). The row itself
            handles the click, so stop the checkbox-originated click here. */}
        <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
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
