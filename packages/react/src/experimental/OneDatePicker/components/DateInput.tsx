import type {
  DateRangeComplete,
  GranularityDefinition,
} from "@/experimental/OneCalendar"
import { isValidDate } from "@/experimental/OneCalendar/utils"
import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField/InputField"
import { forwardRef, useEffect, useState } from "react"
import { DatePickerValue } from "../types"

type DateInputProps = {
  value: DatePickerValue | undefined
  className?: string
  onDateChange?: (date: DateRangeComplete) => void
  onClick?: () => void
  granularity?: GranularityDefinition
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & Pick<
  InputFieldProps<string>,
  | "label"
  | "hideLabel"
  | "error"
  | "disabled"
  | "placeholder"
  | "onClickContent"
>

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      value,
      onDateChange,
      disabled,
      className,
      granularity,
      onOpenChange,
      label,
      hideLabel,
      placeholder,
    },
    ref
  ) => {
    const [localValue, setLocalValue] = useState("")
    const [error, setError] = useState(false)
    const i18n = useI18n()

    useEffect(() => {
      if (granularity) {
        setLocalValue(granularity.toString(value?.value, i18n))
      }
    }, [value, granularity, i18n])

    const handleBlur = () => {
      const range = granularity?.toRange(
        granularity?.fromString(localValue, i18n)
      )
      if (range && isValidDate(range?.from) && isValidDate(range?.to)) {
        onDateChange?.(range)
        onOpenChange?.(false)
      } else {
        setError(true)
      }
    }

    return (
      <Input
        label={label}
        hideLabel={hideLabel}
        ref={ref}
        placeholder={`${placeholder} TODO component not ready, just a boilerplate`}
        value={localValue}
        disabled={disabled}
        error={error}
        className={className}
        onFocus={() => onOpenChange?.(true)}
        onChange={setLocalValue}
        onBlur={handleBlur}
        onClickContent={() => onOpenChange?.(true)}
      />
    )
  }
)

DateInput.displayName = "DateInput"
export { DateInput }
