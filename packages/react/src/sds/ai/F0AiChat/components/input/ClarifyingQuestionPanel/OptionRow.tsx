import { F0Checkbox } from "@/components/F0Checkbox"
import { cn, focusRing } from "@/lib/utils"

import type {
  ClarifyingOption,
  ClarifyingSelectionMode,
} from "../../../actions/core/clarifyingQuestion/types"

import { RadioIndicator } from "./RadioIndicator"

interface OptionRowProps {
  option: ClarifyingOption
  isSelected: boolean
  mode: ClarifyingSelectionMode
  onToggle: (optionId: string) => void
}

export const OptionRow = ({
  option,
  isSelected,
  mode,
  onToggle,
}: OptionRowProps) => {
  if (mode === "single") {
    return (
      <div
        role="radio"
        aria-checked={isSelected}
        tabIndex={0}
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 transition-colors hover:bg-f1-background-secondary",
          focusRing()
        )}
        onClick={() => onToggle(option.id)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            onToggle(option.id)
          }
        }}
      >
        <RadioIndicator isSelected={isSelected} />
        <span className="text-base text-f1-foreground">{option.label}</span>
      </div>
    )
  }

  return (
    <div className="flex cursor-pointer items-center rounded-md pl-1.5 transition-colors hover:bg-f1-background-secondary">
      <F0Checkbox
        checked={isSelected}
        onCheckedChange={() => onToggle(option.id)}
        title={option.label}
        hideLabel
      />
      <span
        className="w-full py-1.5 pl-2 pr-1.5 text-base text-f1-foreground"
        onClick={() => onToggle(option.id)}
      >
        {option.label}
      </span>
    </div>
  )
}
