import { F0Checkbox } from "@/components/F0Checkbox"
import { cn } from "@/lib/utils"

import type { SelectQuestionOption } from "../../SurveyFormBuilder/types"

export interface SelectFieldConfig {
  options: SelectQuestionOption[]
  type: "select" | "multi-select"
  required?: boolean
}

export interface SelectQuestionFieldProps {
  value: string | string[] | undefined
  onChange: (value: string | string[] | undefined) => void
  onBlur: () => void
  config: SelectFieldConfig
}

function RadioIndicator({ checked }: { checked: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        checked
          ? "bg-f1-background-selected-bold"
          : "border border-solid border-f1-border bg-f1-background"
      )}
    >
      {checked && <div className="h-2 w-2 rounded-full bg-f1-background" />}
    </div>
  )
}

export function SelectQuestionField({
  value,
  onChange,
  onBlur,
  config,
}: SelectQuestionFieldProps) {
  const { options, type, required } = config

  const handleOptionClick = (optionValue: string) => {
    if (type === "select") {
      const newValue =
        !required && value === optionValue ? undefined : optionValue
      onChange(newValue)
    } else {
      const currentValue = Array.isArray(value) ? value : []
      const newValue = currentValue.includes(optionValue)
        ? currentValue.filter((v: string) => v !== optionValue)
        : [...currentValue, optionValue]
      onChange(newValue)
    }
    onBlur()
  }

  return (
    <div className="-mx-0.5 flex flex-col items-start">
      {options.map((option) => {
        const isSelected =
          type === "select"
            ? value === option.value
            : Array.isArray(value) && value.includes(option.value)

        return (
          <div
            key={option.value}
            className="flex min-h-9 w-full cursor-pointer items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover"
            onClick={() => handleOptionClick(option.value)}
          >
            {type === "multi-select" ? (
              <F0Checkbox
                title={option.label}
                checked={!!isSelected}
                onCheckedChange={() => handleOptionClick(option.value)}
                hideLabel
              />
            ) : (
              <RadioIndicator checked={!!isSelected} />
            )}
            <p className="flex-1 font-medium">{option.label}</p>
            <div className="min-h-8" />
          </div>
        )
      })}
    </div>
  )
}
