import { forwardRef, useEffect, useState, type ChangeEvent } from "react"

import { cn } from "@/lib/utils"

import type { F0AmountCalculatorProps } from "./types"

function formatNumber(
  value: number,
  locale: string,
  maxDecimals: number
): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
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
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(() =>
      value != null ? formatNumber(value, locale, maxDecimals) : ""
    )

    useEffect(() => {
      if (value != null) {
        setInputValue(formatNumber(value, locale, maxDecimals))
      } else {
        setInputValue("")
      }
    }, [value, locale, maxDecimals])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    }

    return (
      <div ref={ref} className={cn("inline-flex items-center gap-2")}>
        <div
          className={cn(
            "inline-flex items-center rounded-lg border border-solid border-f1-border",
            "h-8 overflow-hidden bg-f1-background",
            disabled && "pointer-events-none opacity-50"
          )}
        >
          <input
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              "h-full w-16 border-none bg-transparent px-2 text-sm outline-none",
              "text-f1-foreground placeholder:text-f1-foreground-secondary"
            )}
          />
          <span
            className={cn(
              "flex h-full items-center border-l border-solid border-f1-border px-2 text-sm",
              "bg-f1-background-secondary text-f1-foreground-secondary"
            )}
          >
            {units}
          </span>
        </div>
        {baseAmount != null && (
          <span className="text-sm text-f1-foreground-secondary">
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
