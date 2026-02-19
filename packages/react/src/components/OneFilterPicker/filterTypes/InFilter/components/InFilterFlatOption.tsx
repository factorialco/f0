"use client"

import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
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
    <div className="w-full px-2">
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
        <div className="shrink-0">
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
