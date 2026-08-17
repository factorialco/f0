"use client"

import { F0Checkbox } from "@/components/F0Checkbox"

export type InFilterOptionCheckboxProps = {
  label: string
  isSelected: boolean
  onToggle: () => void
}

/**
 * Checkbox rendered inside an InFilter option row. It stays interactive so
 * keyboard and assistive-technology users can toggle the option, and its click
 * is stopped from reaching the mouse-friendly row handler that would otherwise
 * toggle the value a second time.
 */
export function InFilterOptionCheckbox({
  label,
  isSelected,
  onToggle,
}: InFilterOptionCheckboxProps) {
  return (
    <div className="shrink-0" onClick={(event) => event.stopPropagation()}>
      <F0Checkbox
        title={label}
        checked={isSelected}
        onCheckedChange={(checked) => {
          if (checked !== isSelected) onToggle()
        }}
        hideLabel
      />
    </div>
  )
}
