import { forwardRef, useEffect, useState } from "react"
import {
  InputFieldProps,
  type InputFieldVariant,
} from "@/components/F0InputField"
import type {
  GranularityDefinition,
  NavigationGranularityKey,
} from "@/components/OneCalendar"
import { DateStringFormat } from "@/components/OneCalendar/granularities/types"
import { isActiveDate } from "@/components/OneCalendar/utils"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"
import { DatePickerValue } from "../types"
import { InputFieldInheritedProps } from "../types.internal"

type DateInputProps = {
  value: DatePickerValue | undefined
  className?: string
  onDateChange?: (date: DatePickerValue | undefined) => void
  onClick?: () => void
  granularity: GranularityDefinition & { key: NavigationGranularityKey }
  onOpenChange?: (open: boolean) => void
  onClear?: () => void
  minDate?: Date
  maxDate?: Date
  showIcon?: boolean
  displayFormat?: DateStringFormat
  variant?: InputFieldVariant
  editing?: boolean
  onInputBlur?: () => void
} & Pick<InputFieldProps<string>, InputFieldInheritedProps>

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      value,
      onDateChange,
      granularity,
      onOpenChange,
      minDate,
      maxDate,
      onClear,
      showIcon = true,
      displayFormat,
      variant,
      editing,
      onInputBlur,
      ...inputProps
    },
    ref
  ) => {
    const i18n = useI18n()
    const [inputValue, setInputValue] = useState(() =>
      granularity.toString(value?.value, i18n, displayFormat ?? "long")
    )
    const [error, setError] = useState(false)

    useEffect(() => {
      setInputValue(
        granularity.toString(value?.value, i18n, displayFormat ?? "long")
      )
    }, [value, granularity, i18n, displayFormat])

    const isValidDate = (date: Date | undefined | null) => {
      return isActiveDate(date, granularity, {
        minDate,
        maxDate,
      })
    }

    const handleNewValue = (
      inputValue: string,
      granularity: GranularityDefinition & { key: NavigationGranularityKey }
    ) => {
      if (inputValue === "") {
        onDateChange?.({
          value: undefined,
          granularity: granularity.key,
        })

        setError(inputProps.required ?? false)
        return
      }

      const range = granularity.toRange(
        granularity.fromString(inputValue, i18n)
      )

      if (range) {
        if (isValidDate(range?.from) && isValidDate(range?.to)) {
          onDateChange?.({
            value: range,
            granularity: granularity.key,
          })
          setError(false)
        } else {
          setError(true)
        }
      }
    }

    const handleBlur = () => {
      handleNewValue(inputValue, granularity)
    }
    const handleChange = (value: string) => {
      setInputValue(value)
    }

    // Use granularity placeholder as default if no placeholder provided
    const placeholder = inputProps.placeholder ?? granularity.placeholder()

    return (
      <Input
        {...inputProps}
        placeholder={placeholder}
        icon={showIcon ? getFieldInputIcon("date") : undefined}
        ref={ref}
        onFocus={() => onOpenChange?.(true)}
        onClear={() => {
          onClear?.()
          setInputValue("")
          handleNewValue("", granularity)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // Inline, Enter parses what was typed and nothing else. Left alone
            // it is also a form's implicit submission.
            if (variant === "inline") {
              e.preventDefault()
            }
            handleBlur()
          }
        }}
        type="text"
        onChange={handleChange}
        error={error || inputProps.error}
        onBlur={() => {
          handleBlur()
          onInputBlur?.()
        }}
        value={inputValue}
        onClickContent={() => onOpenChange?.(true)}
        variant={variant}
        editing={editing}
      />
    )
  }
)

DateInput.displayName = "DateInput"
export { DateInput }
