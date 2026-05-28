import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"

import { useI18n } from "@/lib/providers/i18n"
import { Input } from "@/ui/input"

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

  const {
    onBlur: externalOnBlur,
    onPressEnter: externalOnPressEnter,
    ...restProps
  } = props

  const localHint = useMemo(() => {
    if (restProps.hint !== undefined) {
      return restProps.hint
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
  }, [min, max, restProps.hint])

  const handleBeforeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const inputEvent = e.nativeEvent as InputEvent
      const data = inputEvent.data
      if (!data) return

      const input = e.currentTarget
      const start = input.selectionStart ?? 0
      const end = input.selectionEnd ?? 0
      const proposedValue =
        input.value.slice(0, start) + data + input.value.slice(end)

      if (
        !extractNumber(proposedValue, { maxDecimals }) ||
        (maxDecimals === 0 && /[.,]/.test(data))
      ) {
        e.preventDefault()
      }
    },
    [maxDecimals]
  )

  const handleChange = (value: string) => {
    const extractedData = extractNumber(value, { maxDecimals })
    if (!extractedData) return

    const { value: parsedValue } = extractedData

    if (parsedValue === null) {
      setFieldValue("")
      onChange?.(null)
      return
    }

    // Preserve raw input during typing. Min/max constraints are applied
    // on blur/enter so the user can type intermediate values freely.
    setFieldValue(extractedData.formattedValue)
    onChange?.(parsedValue)
  }

  // Clamp and reformat when the user commits (blur or Enter).
  // Normalizes trailing separators (e.g. "17." → "17") and enforces min/max.
  const commitValue = useCallback(() => {
    const extractedData = extractNumber(fieldValue, { maxDecimals })
    if (extractedData?.value == null) return

    const clampedValue = Math.max(
      min ?? -Infinity,
      Math.min(max ?? Infinity, extractedData.value)
    )

    setFieldValue(formatValue(clampedValue, locale, maxDecimals))
    if (clampedValue !== extractedData.value) {
      onChange?.(clampedValue)
    }
  }, [fieldValue, maxDecimals, min, max, onChange, locale])

  const handleBlur = useCallback(() => {
    commitValue()
    externalOnBlur?.()
  }, [commitValue, externalOnBlur])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        commitValue()
        externalOnPressEnter?.()
      }
    },
    [commitValue, externalOnPressEnter]
  )

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

    setFieldValue(value != null ? formatValue(value, locale, maxDecimals) : "")
  }, [fieldValue, maxDecimals, value, locale])

  return (
    <div className="group relative">
      <Input
        type="text"
        ref={ref}
        value={fieldValue}
        inputMode={maxDecimals === 0 ? "numeric" : "decimal"}
        onChange={handleChange}
        {...restProps}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onBeforeInput={handleBeforeInput}
        hint={localHint}
        appendTag={units}
        append={
          step ? (
            <Arrows
              step={step}
              disabled={restProps.disabled}
              onClickArrow={handleStep}
            />
          ) : undefined
        }
      />
    </div>
  )
})

NumberInputInternal.displayName = "NumberInputInternal"
