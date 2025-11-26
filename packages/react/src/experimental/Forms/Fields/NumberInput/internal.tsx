import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"
import { forwardRef, useEffect, useMemo, useState } from "react"
import { InputInternalProps } from "../Input/internal"
import { Arrows } from "./components/Arrows"
import { extractNumber } from "./internal/extractNumber"

const formatValue = (value: number, locale: string, maxDecimals?: number) =>
  new Intl.NumberFormat(locale, {
    maximumFractionDigits: maxDecimals,
    useGrouping: false,
  }).format(value)

export type NumberInputInternalProps = Omit<
  InputInternalProps<string>,
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

export const NumberInputInternal = forwardRef<
  HTMLInputElement,
  NumberInputInternalProps
>(function NumberInput(
  { locale, value, maxDecimals, step, min, max, onChange, units, ...props },
  ref
) {
  const i18n = useI18n()
  const [fieldValue, setFieldValue] = useState<string>(() =>
    value != null ? formatValue(value, locale, maxDecimals) : ""
  )

  const localHint = useMemo(() => {
    if (props.hint !== undefined) {
      return props.hint
    }
    if (min != null && max != null) {
      return i18n.t("numberInput.between", { min, max })
    }
    if (min != null) {
      return i18n.t("numberInput.greaterThan", { min })
    }
    if (max != null) {
      return i18n.t("numberInput.lessThan", { max })
    }
    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We don't need to re-render when the i18n changes
  }, [min, max, props.hint])

  const handleChange = (value: string) => {
    const extractedData = extractNumber(value, { maxDecimals })
    if (!extractedData) {
      setFieldValue("")
      return
    }

    const { value: parsedValue } = extractedData

    /**
     * Apply min and max constraints
     */
    if (parsedValue === null) {
      setFieldValue("")
      onChange?.(null)
      return
    }

    /**
     * Reformat the number to the correct format
     */
    const finalValue = Math.max(
      min ?? -Infinity,
      Math.min(max ?? Infinity, parsedValue)
    )

    const finalExtractedData = extractNumber(finalValue.toString(), {
      maxDecimals,
    })
    setFieldValue(finalExtractedData?.formattedValue ?? "")

    onChange?.(finalExtractedData?.value ?? null)
  }

  const handleStep = (type: "increase" | "decrease") => () => {
    if (!step) return
    if (value == null) {
      const initialValue = step
      return handleChange(formatValue(initialValue, locale, maxDecimals))
    }

    const newValue = type === "increase" ? value + step : value - step
    if ((min != null && newValue < min) || (max != null && newValue > max)) {
      return
    }

    handleChange(formatValue(newValue, locale, maxDecimals))
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
        hint={localHint}
        appendTag={units}
        append={<Arrows step={step} onClickArrow={handleStep} />}
      />
    </div>
  )
})
