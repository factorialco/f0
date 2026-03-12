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
    <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
      {options.map((option) => (
        <div
          key={option.value}
          className={cn(
            "flex h-10 min-w-20 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium",
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
            value === option.value &&
              "border-f1-border-selected bg-f1-background-selected-secondary"
          )}
          onClick={() => handleClick(option.value)}
        >
          <span className="text-base font-medium">{option.label}</span>
        </div>
      ))}
    </div>
  )
}
