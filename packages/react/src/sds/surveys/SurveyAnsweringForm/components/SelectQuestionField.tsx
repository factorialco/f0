import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon"
import { CheckCircleLine, Cross } from "@/icons/app"
import { cn } from "@/lib/utils"

import type { SelectQuestionOption } from "../../SurveyFormBuilder/types"

export interface SelectFieldConfig {
  options: SelectQuestionOption[]
  type: "select" | "multi-select"
  required?: boolean
  disabled?: boolean
  showAnswerValidation?: boolean
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
  const { options, type, required, disabled, showAnswerValidation } = config
  const hasCorrectAnswers = options.some((option) => option.correct)
  const shouldShowValidation = !!showAnswerValidation && hasCorrectAnswers

  const handleSingleSelectChange = (optionValue: string) => {
    if (disabled) return
    if (type !== "select") return
    const newValue =
      !required && value === optionValue ? undefined : optionValue
    onChange(newValue)
    onBlur()
  }

  const handleMultiSelectChange = (optionValue: string) => {
    if (disabled) return
    if (type !== "multi-select") return
    const currentValue = Array.isArray(value) ? value : []
    const newValue = currentValue.includes(optionValue)
      ? currentValue.filter((v: string) => v !== optionValue)
      : [...currentValue, optionValue]
    onChange(newValue)
    onBlur()
  }

  const handleOptionClick = (optionValue: string) => {
    if (type === "select") {
      handleSingleSelectChange(optionValue)
    } else {
      handleMultiSelectChange(optionValue)
    }
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
            className={cn(
              "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
              disabled
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-f1-background-hover"
            )}
            onClick={(e) => {
              if (disabled) return
              // For multi-select, only trigger on parent div click, not on checkbox
              if (
                type === "multi-select" &&
                (e.target as Element).closest("input")
              ) {
                return
              }
              handleOptionClick(option.value)
            }}
          >
            {type === "multi-select" ? (
              <F0Checkbox
                title={option.label}
                checked={!!isSelected}
                onCheckedChange={() => handleMultiSelectChange(option.value)}
                hideLabel
              />
            ) : (
              <RadioIndicator checked={!!isSelected} />
            )}
            <p className="flex-1 font-medium">{option.label}</p>
            {shouldShowValidation ? (
              <div className="min-h-8 p-1">
                <F0Icon
                  icon={option.correct ? CheckCircleLine : Cross}
                  color={option.correct ? "positive" : "critical"}
                />
              </div>
            ) : (
              <div className="min-h-8" />
            )}
          </div>
        )
      })}
    </div>
  )
}
