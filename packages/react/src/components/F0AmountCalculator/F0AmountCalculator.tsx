import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
} from "react"

import { cn, focusRing } from "@/lib/utils"

import type { F0AmountCalculatorProps } from "./types"

function formatNumber(
  value: number,
  locale: string,
  maxDecimals: number
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: maxDecimals,
    maximumFractionDigits: maxDecimals,
    useGrouping: false,
  }).format(value)
}

function parseLocaleNumber(str: string, locale: string): number | null {
  const formatter = new Intl.NumberFormat(locale)
  const parts = formatter.formatToParts(1111.1)
  const group = parts.find((p) => p.type === "group")?.value ?? ""
  const decimal = parts.find((p) => p.type === "decimal")?.value ?? "."

  let cleaned = str
  if (group) {
    cleaned = cleaned.replaceAll(group, "")
  }
  cleaned = cleaned.replace(decimal, ".")

  const num = parseFloat(cleaned)
  return isNaN(num) ? null : num
}

const F0AmountCalculator = forwardRef<HTMLDivElement, F0AmountCalculatorProps>(
  (
    {
      value,
      onChange,
      units = "%",
      placeholder = "0,0",
      disabled = false,
      locale = "de-DE",
      maxDecimals = 2,
      baseAmount,
      currency,
      ariaLabel,
      id,
      ...dataAttributes
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(() =>
      value != null ? formatNumber(value, locale, maxDecimals) : ""
    )
    const isFocused = useRef(false)

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value
        setInputValue(raw)

        if (raw === "") {
          onChange?.(null)
          return
        }

        const parsed = parseLocaleNumber(raw, locale)
        if (parsed != null) {
          onChange?.(parsed)
        }
      },
      [locale, onChange]
    )

    const handleFocus = useCallback(() => {
      isFocused.current = true
    }, [])

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        isFocused.current = false
        const raw = e.target.value
        if (raw === "") {
          setInputValue("")
          return
        }
        const parsed = parseLocaleNumber(raw, locale)
        if (parsed != null) {
          setInputValue(formatNumber(parsed, locale, maxDecimals))
        }
      },
      [locale, maxDecimals]
    )

    // Only sync from external value changes when not focused
    const lastExternalValue = useRef(value)
    if (value !== lastExternalValue.current && !isFocused.current) {
      lastExternalValue.current = value
      setInputValue(
        value != null ? formatNumber(value, locale, maxDecimals) : ""
      )
    }

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2")}
        {...dataAttributes}
      >
        <div
          className={cn(
            "inline-flex items-center gap-1.5 rounded-xs border border-solid border-f1-border",
            "h-8 bg-f1-background px-2",
            disabled && "pointer-events-none opacity-50"
          )}
        >
          <input
            id={id}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={ariaLabel}
            className={cn(
              "h-full w-14 border-none bg-transparent text-sm outline-none",
              "text-f1-foreground placeholder:text-f1-foreground-secondary",
              focusRing()
            )}
          />
          <span
            className={cn(
              "inline-flex items-center rounded-xs border border-solid border-f1-border px-1.5 py-0.5 text-xs font-medium",
              "bg-f1-background text-f1-foreground"
            )}
          >
            {units}
          </span>
        </div>
        {baseAmount != null && (
          <span className="text-sm text-f1-foreground-secondary">
            {/* TODO: i18n — use translation key when available */}
            of {formatNumber(baseAmount, locale, maxDecimals)}
            {currency ? ` ${currency}` : ""}
          </span>
        )}
      </div>
    )
  }
)

F0AmountCalculator.displayName = "F0AmountCalculator"

export { F0AmountCalculator }
