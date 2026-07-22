import { cn } from "@/lib/utils"

export interface RatingFieldConfig {
  options: { value: number; label: string }[]
  disabled?: boolean
}

export interface RatingQuestionFieldProps {
  value: number | undefined
  onChange: (value: number | undefined) => void
  onBlur: () => void
  config: RatingFieldConfig
}

export function RatingQuestionField({
  value,
  onChange,
  onBlur,
  config,
}: RatingQuestionFieldProps) {
  const { options, disabled } = config

  const handleClick = (optionValue: number) => {
    if (disabled) return
    onChange(optionValue)
    onBlur()
  }

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <div
          key={option.value}
          className={cn(
            "flex min-h-10 min-w-20 grow basis-auto items-center justify-center rounded-md border border-solid border-f1-border px-3 py-1.5 text-center font-medium",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
            value === option.value &&
              "border-f1-border-selected bg-f1-background-selected-secondary"
          )}
          onClick={() => handleClick(option.value)}
        >
          <span className="text-base font-medium leading-tight">
            {option.label}
          </span>
        </div>
      ))}
    </div>
  )
}
