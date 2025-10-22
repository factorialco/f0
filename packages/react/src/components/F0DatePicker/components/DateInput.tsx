import type {
  GranularityDefinition,
  GranularityDefinitionKey,
} from "@/experimental/OneCalendar"
import { isActiveDate } from "@/experimental/OneCalendar/utils"
import { Calendar } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField/InputField"
import { forwardRef, useEffect, useState } from "react"
import { DatePickerValue } from "../types"
import { InputFieldInheritedProps } from "../types.internal"

type DateInputProps = {
  value: DatePickerValue | undefined
  className?: string
  onDateChange?: (date: DatePickerValue | undefined) => void
  onClick?: () => void
  granularity: GranularityDefinition & { key: GranularityDefinitionKey }
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onClear?: () => void
  minDate?: Date
  maxDate?: Date
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
      ...inputProps
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const i18n = useI18n()

    useEffect(() => {
      console.log("useEffect", value, granularity.toString(value?.value, i18n))
      setInputValue(granularity.toString(value?.value, i18n))
    }, [value, granularity, i18n])

    const isValidDate = (date: Date | undefined | null) => {
      return isActiveDate(date, granularity, {
        minDate,
        maxDate,
      })
    }

    const handleNewValue = (
      inputValue: string,
      granularity: GranularityDefinition & { key: GranularityDefinitionKey }
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

      if (range && isValidDate(range?.from) && isValidDate(range?.to)) {
        onDateChange?.({
          value: range,
          granularity: granularity.key,
        })
        setError(false)
      } else {
        setError(true)
      }
    }

    const handleBlur = () => {
      console.log(
        "handleBlur2",
        inputValue,
        granularity.toString(value?.value, i18n)
      )
      handleNewValue(inputValue, granularity)
    }
    const handleChange = (value: string) => {
      console.log("handleChange", value)
      setInputValue(value)
    }

    return (
      <Input
        {...inputProps}
        icon={Calendar}
        ref={ref}
        onFocus={() => onOpenChange?.(true)}
        onClear={() => {
          onClear?.()
          setInputValue("")
          handleNewValue("", granularity)
        }}
        onChange={handleChange}
        error={error || inputProps.error}
        onBlur={handleBlur}
        value={inputValue}
        onClickContent={() => onOpenChange?.(true)}
      />
    )
  }
)

DateInput.displayName = "DateInput"
export { DateInput }
