import { cva } from "cva"
import {
  Fragment,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Icon } from "@/components/F0Icon"
import { Bullet } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
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
    "inline-flex cursor-text items-center gap-1",
    "border border-solid border-f1-border bg-f1-background",
    "transition-all",
  ],
  variants: {
    size: {
      sm: "rounded-[10px] px-2 py-1",
      md: "rounded-[12px] px-3 py-[6px]",
    },
    status: {
      default: "",
      warning: "border-f1-border-warning-bold",
      info: "border-f1-border-info-bold",
      error:
        "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
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
      class: "hover:border-f1-border-selected-bold",
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
      "data-testid": testId,
    },
    ref
  ) {
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

    const noEdit = disabled || readonly

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
        if (noEdit) return
        if (e.target instanceof HTMLInputElement) return
        const firstUnit = visibleUnits[0]
        if (firstUnit) inputRefs.current.get(firstUnit)?.focus()
      },
      [noEdit, visibleUnits]
    )

    const setInputRef = useCallback(
      (unit: DurationUnit) => (el: HTMLInputElement | null) => {
        if (el) inputRefs.current.set(unit, el)
        else inputRefs.current.delete(unit)
      },
      []
    )

    const statusType = status?.type ?? "default"

    return (
      <div ref={ref} className="flex flex-col gap-2" data-testid={testId}>
        {!hideLabel && (
          <Label
            label={label}
            required={required}
            htmlFor=""
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
            }),
            !noEdit && focusRing()
          )}
          onClick={handleContainerClick}
          role="group"
          aria-label={label}
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
                  className={cn(
                    "border-none bg-transparent p-0 text-inherit outline-none",
                    "text-right font-inherit text-[length:inherit] leading-[inherit]",
                    "placeholder:text-f1-foreground-secondary placeholder:opacity-100",
                    "focus:placeholder:opacity-40",
                    disabled && "pointer-events-none cursor-not-allowed"
                  )}
                  style={{ width: `${Math.max(displayValue.length, 1)}ch` }}
                  aria-label={UNIT_LABELS[unit]}
                  value={displayValue}
                  placeholder="0"
                  onChange={handleFieldChange(unit, max)}
                  onKeyDown={handleKeyDown}
                  inputMode="numeric"
                  disabled={noEdit}
                  readOnly={readonly}
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
