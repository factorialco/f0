import { Input } from "@/ui/input"
import { forwardRef, useEffect, useState } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import { ChevronDown, ChevronUp } from "../../../../icons/app"
import { InputProps } from "../Input"
import { extractNumber } from "./extractNumber"

const formatValue = (value: number, locale: string, maxDecimals?: number) =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxDecimals,
    useGrouping: false,
  }).format(value)

export type NumberInputProps = Omit<
  InputProps<string>,
  "value" | "type" | "onChange"
> & {
  locale: string
  value?: number | null
  step?: number
  min?: number
  max?: number
  maxDecimals?: number
  onChange?: (value: number | null) => void
  units?: string
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    { locale, value, maxDecimals, step, min, max, onChange, units, ...props },
    ref
  ) {
    const [fieldValue, setFieldValue] = useState<string>(() =>
      value != null ? formatValue(value, locale, maxDecimals) : ""
    )

    const handleChange = (value: string) => {
      const extractedData = extractNumber(value, { maxDecimals })
      if (!extractedData) {
        setFieldValue("")
        return
      }

      const { formattedValue, value: parsedValue } = extractedData

      setFieldValue(formattedValue)
      onChange?.(parsedValue)
    }

    const handleStep = (type: "increase" | "decrease") => () => {
      if (!step) return
      if (value == null) {
        const initialValue = step ?? min ?? 0
        return handleChange(formatValue(initialValue, locale, maxDecimals))
      }

      const newValue = type === "increase" ? value + step : value - step
      if ((min != null && newValue < min) || (max != null && newValue > max)) {
        return
      }

      handleChange(formatValue(newValue, locale, maxDecimals))
    }

    const Arrows = () => {
      if (!step) return null

      return (
        <div
          className="-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex"
          onClick={(e) => e.preventDefault()}
        >
          <div
            onClick={handleStep("increase")}
            className="h-3 cursor-pointer"
            role="button"
          >
            <F0Icon size="sm" icon={ChevronUp} />
          </div>
          <div
            onClick={handleStep("decrease")}
            className="h-3 cursor-pointer"
            role="button"
          >
            <F0Icon size="sm" icon={ChevronDown} />
          </div>
        </div>
      )
    }

    useEffect(() => {
      // This reconciles the fieldValue when `value` changes external to this component
      const extractedData = extractNumber(fieldValue, { maxDecimals })

      if (value === undefined || value == extractedData?.value) return

      setFieldValue(value ? formatValue(value, locale, maxDecimals) : "")
    }, [fieldValue, maxDecimals, value, locale])

    return (
      <div className="group relative">
        <Input
          type="text"
          ref={ref}
          value={fieldValue}
          inputMode="decimal"
          onChange={handleChange}
          {...props}
          appendTag={units}
          append={<Arrows />}
        />
      </div>
    )
  }
)
