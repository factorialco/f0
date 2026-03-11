import { cva } from "cva"
import {
  Fragment,
  forwardRef,
  useCallback,
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
  getAutoMax,
  secondsToFields,
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

const containerVariants = cva({
  base: [
    "inline-flex items-center gap-1 rounded-[10px]",
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
      true: "cursor-not-allowed opacity-50",
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
      class: "hover:border-[hsl(var(--neutral-40))]",
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
      label,
      hideLabel = false,
      value,
      onChange,
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
    const [localFields, setLocalFields] = useState<DurationFields>(() =>
      secondsToFields(value)
    )
    const lastEmittedRef = useRef(value)

    if (value !== lastEmittedRef.current) {
      lastEmittedRef.current = value
      setLocalFields(secondsToFields(value))
    }

    const visibleUnits = useMemo(
      () => UNIT_ORDER.filter((u) => units.includes(u)),
      [units]
    )

    const firstUnitId =
      visibleUnits.length > 0 ? `${baseId}-${visibleUnits[0]}` : ""

    const handleFieldChange = useCallback(
      (unit: DurationUnit, max: number | undefined) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const raw = e.target.value

          if (raw === "") {
            const updatedFields = { ...localFields, [unit]: 0 }
            setLocalFields(updatedFields)
            const total = fieldsToSeconds(updatedFields)
            lastEmittedRef.current = total
            onChange(total)
            return
          }

          const digits = raw.replace(/\D/g, "")
          if (digits === "") return

          const parsed = parseInt(digits, 10)
          if (isNaN(parsed)) return

          const clamped = clampValue(parsed, max)
          const updatedFields = { ...localFields, [unit]: clamped }
          setLocalFields(updatedFields)
          const total = fieldsToSeconds(updatedFields)
          lastEmittedRef.current = total
          onChange(total)
        },
      [localFields, onChange]
    )

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowed = [
          "Backspace",
          "Delete",
          "Tab",
          "ArrowLeft",
          "ArrowRight",
          "Home",
          "End",
        ]
        if (allowed.includes(e.key)) return
        if (e.metaKey || e.ctrlKey) return
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

    const statusType = status?.type ?? "default"
    const showLabel = !hideLabel && label.length > 0

    return (
      <div ref={ref} className="flex flex-col gap-2">
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
          className={cn(
            containerVariants({
              size,
              status: statusType,
              disabled,
              readonly,
            })
          )}
          onClick={handleContainerClick}
          role="group"
          aria-label={label || undefined}
          aria-disabled={disabled || undefined}
          data-status={statusType}
          data-disabled={String(disabled)}
        >
          {visibleUnits.map((unit, index) => {
            const max =
              fieldConfig?.[unit]?.max ?? getAutoMax(unit, visibleUnits)
            const fieldValue = localFields[unit]
            const suffix = fieldConfig?.[unit]?.suffix ?? STATIC_SUFFIXES[unit]
            const displayValue = fieldValue > 0 ? String(fieldValue) : ""

            return (
              <Fragment key={unit}>
                {index > 0 && (
                  <F0Icon icon={Bullet} size="xs" color="default" />
                )}
                <input
                  ref={setInputRef(unit)}
                  id={`${baseId}-${unit}`}
                  className={cn(
                    "border-none bg-transparent p-0 text-inherit outline-none",
                    "text-right font-inherit text-[length:inherit] leading-[inherit]",
                    "placeholder:text-f1-foreground-secondary placeholder:opacity-100",
                    "focus:placeholder:opacity-40",
                    disabled && "cursor-not-allowed"
                  )}
                  style={{ width: `${Math.max(displayValue.length, 1)}ch` }}
                  aria-label={UNIT_LABELS[unit]}
                  value={displayValue}
                  placeholder="0"
                  onChange={handleFieldChange(unit, max)}
                  onKeyDown={handleKeyDown}
                  inputMode="numeric"
                  disabled={disabled}
                  readOnly={readonly}
                  aria-readonly={readonly || undefined}
                />
                <span className="text-f1-foreground-secondary">{suffix}</span>
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
