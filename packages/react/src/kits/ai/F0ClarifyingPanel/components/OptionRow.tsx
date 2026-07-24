import { forwardRef } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { cn, focusRing } from "@/lib/utils"

import type { ClarifyingOption, ClarifyingSelectionMode } from "../types"

import { RadioIndicator } from "./RadioIndicator"

interface OptionRowProps {
  option: ClarifyingOption
  isSelected: boolean
  mode: ClarifyingSelectionMode
  /** Whether this row is the current tab stop in the roving tabindex group */
  isTabStop?: boolean
  onToggle: (optionId: string) => void
  /** Handle arrow/home/end navigation within the group */
  onKeyNavigate?: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

export const OptionRow = forwardRef<HTMLDivElement, OptionRowProps>(
  ({ option, isSelected, mode, isTabStop, onToggle, onKeyNavigate }, ref) => {
    if (mode === "single") {
      return (
        <div
          ref={ref}
          role="radio"
          aria-checked={isSelected}
          tabIndex={isTabStop ? 0 : -1}
          className={cn(
            "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
            focusRing()
          )}
          onClick={() => onToggle(option.id)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault()
              onToggle(option.id)
              return
            }
            onKeyNavigate?.(e)
          }}
        >
          <RadioIndicator isSelected={isSelected} />
          <span className="text-base font-medium text-f1-foreground">
            {option.label}
          </span>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
        )}
      >
        <F0Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggle(option.id)}
          title={option.label}
          hideLabel
        />
        <span
          className="w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground"
          onClick={() => onToggle(option.id)}
        >
          {option.label}
        </span>
      </div>
    )
  }
)

OptionRow.displayName = "OptionRow"
