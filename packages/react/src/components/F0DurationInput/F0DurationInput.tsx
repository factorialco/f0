import { cva } from "cva"
import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Icon } from "@/components/F0Icon"
import { Bullet } from "@/icons/app"
import { cn } from "@/lib/utils"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { Label } from "@/ui/InputField/components/Label"

import type {
  DurationFields,
  DurationUnit,
  F0DurationInputProps,
} from "./types"
import {
  DEFAULT_UNITS,
  UNIT_ORDER,
  clampValue,
  fieldsToSeconds,
  secondsToVisibleFields,
} from "./utils"

const STATIC_SUFFIXES: Record<DurationUnit, string> = {
  days: "d",
  hours: "h",
  minutes: "min",
  seconds: "s",
}

const UNIT_LABELS: Record<DurationUnit, string> = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
}

const DEFAULT_MAX_VISIBLE_DIGITS = 2

const containerVariants = cva({
  base: [
    "inline-flex items-center gap-1 overflow-hidden rounded-[10px]",
    "border border-solid border-f1-border bg-f1-background",
    "transition-[border-color]",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
  ],
  variants: {
    size: {
      sm: "px-2 py-1",
      md: "px-3 py-[6px]",
    },
    status: {
      default:
        "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning:
        "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error:
        "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical",
    },
    disabled: {
      true: "cursor-not-allowed aria-disabled:cursor-not-allowed opacity-50",
      false: "cursor-text",
    },
    readonly: {
      true: "border-f1-border-secondary bg-f1-background-secondary",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      readonly: false,
      status: "default",
      class: "hover:border-f1-border-hover",
    },
    {
      disabled: false,
      readonly: false,
      status: "warning",
      class: "hover:border-f1-border-warning-bold",
    },
    {
      disabled: false,
      readonly: false,
      status: "info",
      class: "hover:border-f1-border-info-bold",
    },
    {
      disabled: false,
      readonly: false,
      status: "error",
      class: "hover:border-f1-border-critical-bold",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: false,
    readonly: false,
  },
})

export const F0DurationInput = forwardRef<HTMLDivElement, F0DurationInputProps>(
  function F0DurationInput(
    {
      id,
      "aria-describedby": ariaDescribedBy,
      "aria-invalid": ariaInvalid,
      label,
      ariaLabel,
      hideLabel = false,
      value,
      onChange,
      onBlur,
      units = DEFAULT_UNITS,
      fields: fieldConfig,
      status,
      disabled = false,
      required = false,
      readonly = false,
      size = "md",
    },
    ref
  ) {
    const baseId = useId()
    const inputRefs = useRef<Map<DurationUnit, HTMLInputElement>>(new Map())
    const hasWarnedRef = useRef(false)

    const visibleUnits = useMemo(() => {
      const filtered = UNIT_ORDER.filter((u) => units.includes(u))
      if (filtered.length > 0) return filtered
      return UNIT_ORDER.filter((u) => DEFAULT_UNITS.includes(u))
    }, [units])

    const visibleUnitsKey = visibleUnits.join("|")

    const [localFields, setLocalFields] = useState<DurationFields>(() =>
      secondsToVisibleFields(value, visibleUnits)
    )
    const lastEmittedRef = useRef(value)
    const lastVisibleUnitsKeyRef = useRef(visibleUnitsKey)

    if (
      value !== lastEmittedRef.current ||
      visibleUnitsKey !== lastVisibleUnitsKeyRef.current
    ) {
      lastEmittedRef.current = value
      lastVisibleUnitsKeyRef.current = visibleUnitsKey
      setLocalFields(secondsToVisibleFields(value, visibleUnits))
    }

    const firstUnitId = `${baseId}-${visibleUnits[0]}`

    const toVisibleOnlyFields = useCallback(
      (fields: DurationFields): DurationFields => {
        const normalized: DurationFields = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
        for (const unit of visibleUnits) {
          normalized[unit] = fields[unit]
        }
        return normalized
      },
      [visibleUnits]
    )

    const emitChange = useCallback(
      (updatedFields: DurationFields) => {
        const normalized = toVisibleOnlyFields(updatedFields)
        const total = fieldsToSeconds(normalized)
        // Keep typed values while editing; canonical rollover happens on blur.
        setLocalFields(normalized)
        lastEmittedRef.current = total
        onChange(total)
      },
      [onChange, toVisibleOnlyFields]
    )

    const handleFieldChange = useCallback(
      (unit: DurationUnit, max: number | undefined) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const raw = e.target.value

          if (raw === "") {
            emitChange({ ...localFields, [unit]: 0 })
            return
          }

          const digits = raw.replace(/\D/g, "")
          if (digits === "") return

          const parsed = parseInt(digits, 10)
          if (isNaN(parsed)) return

          const clamped = clampValue(parsed, max)
          emitChange({ ...localFields, [unit]: clamped })
        },
      [localFields, emitChange]
    )

    const handleFieldBlur = useCallback(() => {
      const normalized = toVisibleOnlyFields(localFields)
      const total = fieldsToSeconds(normalized)
      // Normalize visible units on blur (e.g. 75 min -> 1h 15m).
      setLocalFields(secondsToVisibleFields(total, visibleUnits))
      lastEmittedRef.current = total
      onBlur?.()
    }, [localFields, onBlur, toVisibleOnlyFields, visibleUnits])

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.metaKey || e.ctrlKey || e.altKey) return
        if (e.key.length > 1) return
        if (!/^\d$/.test(e.key)) {
          e.preventDefault()
        }
      },
      []
    )

    const handleContainerClick = useCallback(
      (e: React.MouseEvent) => {
        if (disabled) return
        if (e.target instanceof HTMLInputElement) return
        const firstUnit = visibleUnits[0]
        if (firstUnit) inputRefs.current.get(firstUnit)?.focus()
      },
      [disabled, visibleUnits]
    )

    const setInputRef = useCallback(
      (unit: DurationUnit) => (el: HTMLInputElement | null) => {
        if (el) inputRefs.current.set(unit, el)
        else inputRefs.current.delete(unit)
      },
      []
    )

    const resolvedAriaLabel =
      (ariaLabel && ariaLabel.trim().length > 0 ? ariaLabel : undefined) ||
      label ||
      undefined

    useEffect(() => {
      if (
        process.env.NODE_ENV !== "production" &&
        !resolvedAriaLabel &&
        !hasWarnedRef.current
      ) {
        hasWarnedRef.current = true
        console.warn(
          "F0DurationInput: provide a non-empty label or ariaLabel for accessibility."
        )
      }
    }, [resolvedAriaLabel])

    const statusType = status?.type ?? "default"
    const showLabel = !hideLabel && label.length > 0

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2",
          "pointer-events-none",
          disabled && "cursor-not-allowed"
        )}
      >
        {showLabel && (
          <Label
            label={label}
            required={required}
            htmlFor={firstUnitId}
            className="min-w-0 flex-1"
            disabled={disabled}
          />
        )}
        <div
          id={id}
          className={cn(
            "pointer-events-auto",
            containerVariants({
              size,
              status: statusType,
              disabled,
              readonly,
            })
          )}
          onClick={handleContainerClick}
          role="group"
          aria-label={resolvedAriaLabel}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          aria-disabled={disabled || undefined}
          data-status={statusType}
          data-disabled={disabled ? "" : undefined}
        >
          {visibleUnits.map((unit, index) => {
            const max = fieldConfig?.[unit]?.max
            const fieldValue = localFields[unit]
            const suffix = fieldConfig?.[unit]?.suffix ?? STATIC_SUFFIXES[unit]
            const displayValue = fieldValue > 0 ? String(fieldValue) : ""
            const maxVisibleDigits = fieldConfig?.[unit]?.maxVisibleDigits
            const resolvedMaxVisibleDigits =
              typeof maxVisibleDigits === "number" &&
              Number.isFinite(maxVisibleDigits)
                ? Math.max(1, Math.floor(maxVisibleDigits))
                : DEFAULT_MAX_VISIBLE_DIGITS

            return (
              <Fragment key={unit}>
                {index > 0 && (
                  <F0Icon
                    icon={Bullet}
                    size="xs"
                    color="default"
                    aria-hidden="true"
                  />
                )}
                <input
                  ref={setInputRef(unit)}
                  id={`${baseId}-${unit}`}
                  className={cn(
                    "border-none bg-transparent p-0 text-inherit outline-none",
                    "font-inherit text-[length:inherit] leading-[inherit]",
                    "placeholder:text-f1-foreground-secondary placeholder:opacity-[0.37]",
                    disabled && "pointer-events-none"
                  )}
                  style={{
                    width: `${Math.min(
                      Math.max(displayValue.length, 1),
                      resolvedMaxVisibleDigits
                    )}ch`,
                  }}
                  aria-label={
                    fieldConfig?.[unit]?.ariaLabel ?? UNIT_LABELS[unit]
                  }
                  aria-describedby={ariaDescribedBy}
                  aria-invalid={ariaInvalid}
                  value={displayValue}
                  placeholder="0"
                  onChange={handleFieldChange(unit, max)}
                  onBlur={handleFieldBlur}
                  onKeyDown={handleKeyDown}
                  inputMode="numeric"
                  disabled={disabled}
                  readOnly={readonly}
                  aria-readonly={readonly || undefined}
                />
                <span className="text-f1-foreground-secondary opacity-[0.61]">
                  {suffix}
                </span>
              </Fragment>
            )
          })}
        </div>
        <InputMessages status={status} />
      </div>
    )
  }
)

F0DurationInput.displayName = "F0DurationInput"
