import { forwardRef, useEffect, useId, useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { experimentalComponent } from "@/lib/experimental"
import { InputFieldProps } from "@/ui/InputField"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { Label } from "@/ui/InputField/components/Label"

interface DurationInputProps extends Pick<
  InputFieldProps<string>,
  | "label"
  | "labelIcon"
  | "hideLabel"
  | "error"
  | "status"
  | "hint"
  | "disabled"
  | "required"
  | "readonly"
  | "size"
  | "onFocus"
  | "onBlur"
> {
  value?: number | null
  onChange?: (value: number | null) => void
  hoursLabel?: string
  minutesLabel?: string
  hideMinutes?: boolean
  min?: number
  max?: number
  name?: string
}

interface DurationInputInternalProps extends DurationInputProps {
  className?: string
}

const privateProps = ["className"] as const

const splitDuration = (
  value: number | null | undefined,
  hideMinutes?: boolean
) => {
  if (value == null) {
    return {
      hours: "",
      minutes: "",
    }
  }

  const normalized = Math.max(0, value)
  const hours = Math.floor(normalized / 60)
  const minutes = normalized % 60

  return {
    hours: String(hours),
    minutes: hideMinutes ? "" : String(minutes),
  }
}

const getStatus = ({
  hint,
  error,
  status,
}: Pick<DurationInputProps, "hint" | "error" | "status">) => {
  if (error) {
    return {
      type: "error" as const,
      message: typeof error === "string" ? error : undefined,
    }
  }

  if (hint) {
    return {
      type: "default" as const,
      message: hint,
    }
  }

  return status
}

const sanitizeInput = (value: string) => value.replace(/\D/g, "")

const getInputValue = (value: string) => {
  if (value === "") {
    return null
  }

  return Number.parseInt(value, 10)
}

const getComparableMinutes = (
  hours: string,
  minutes: string,
  hideMinutes: boolean
) => {
  const parsedHours = getInputValue(hours)
  const parsedMinutes = hideMinutes ? 0 : getInputValue(minutes)

  if (parsedHours == null && (hideMinutes || parsedMinutes == null)) {
    return null
  }

  return (parsedHours ?? 0) * 60 + (parsedMinutes ?? 0)
}

const wrapperSizeClass = {
  sm: "rounded-[10px] min-h-[32px]",
  md: "rounded-[12px] min-h-[40px]",
}

const inputSizeClass = {
  sm: "py-1 text-md",
  md: "py-2 text-md",
}

const DurationInputBase = forwardRef<
  HTMLInputElement,
  DurationInputInternalProps
>(
  (
    {
      label,
      labelIcon,
      hideLabel = false,
      error,
      status,
      hint,
      disabled = false,
      readonly = false,
      required = false,
      size = "sm",
      className,
      onFocus,
      onBlur,
      value,
      onChange,
      hoursLabel = "h",
      minutesLabel = "mins",
      hideMinutes = false,
      min,
      max,
      name,
    },
    ref
  ) => {
    const id = useId()
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")

    useEffect(() => {
      if (value === undefined) {
        return
      }

      if (value === getComparableMinutes(hours, minutes, hideMinutes)) {
        return
      }

      const nextDuration = splitDuration(value, hideMinutes)
      setHours(nextDuration.hours)
      setMinutes(nextDuration.minutes)
    }, [value, hideMinutes, hours, minutes])

    const localStatus = useMemo(
      () => getStatus({ hint, error, status }),
      [hint, error, status]
    )

    const noEdit = disabled || readonly

    const applyConstraints = (nextValue: number) => {
      return Math.max(min ?? -Infinity, Math.min(max ?? Infinity, nextValue))
    }

    const emitChange = (nextHours: string, nextMinutes: string) => {
      const parsedHours = getInputValue(nextHours)
      const parsedMinutes = hideMinutes ? 0 : getInputValue(nextMinutes)

      if (parsedHours == null && (hideMinutes || parsedMinutes == null)) {
        setHours("")
        setMinutes("")
        onChange?.(null)
        return
      }

      const totalMinutes = applyConstraints(
        (parsedHours ?? 0) * 60 + (parsedMinutes ?? 0)
      )
      const normalizedDuration = splitDuration(totalMinutes, hideMinutes)
      const shouldNormalizeMinutes = !hideMinutes && (parsedMinutes ?? 0) >= 60
      const shouldNormalizeForConstraints =
        totalMinutes !== (parsedHours ?? 0) * 60 + (parsedMinutes ?? 0)

      setHours(
        shouldNormalizeMinutes || shouldNormalizeForConstraints
          ? normalizedDuration.hours
          : nextHours
      )
      setMinutes(
        hideMinutes || shouldNormalizeMinutes || shouldNormalizeForConstraints
          ? normalizedDuration.minutes
          : nextMinutes
      )
      onChange?.(totalMinutes)
    }

    return (
      <div
        className={cn(
          "flex flex-col gap-2",
          "pointer-events-none",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        {!hideLabel && label && (
          <div className="flex max-w-full items-center gap-1">
            <div
              className="flex min-w-0 flex-1 flex-row gap-4"
              data-testid="input-field-top"
            >
              <Label
                label={label}
                required={required}
                htmlFor={id}
                icon={labelIcon}
                className="min-w-0 flex-1"
                disabled={disabled}
              />
            </div>
          </div>
        )}

        <div
          className={cn(
            "relative h-fit transition-all",
            "border-[1px] border-solid border-f1-border bg-f1-background",
            !noEdit && "hover:border-f1-border-hover",
            "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
            "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover",
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
            localStatus?.type === "error" &&
              "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical hover:border-f1-border-critical-bold",
            localStatus?.type === "warning" &&
              "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning hover:border-f1-border-warning-bold",
            localStatus?.type === "info" &&
              "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info hover:border-f1-border-info-bold",
            readonly && "border-f1-border-secondary bg-f1-background-secondary",
            disabled && "cursor-not-allowed",
            wrapperSizeClass[size]
          )}
        >
          <div className="pointer-events-auto relative flex h-full w-full min-w-0 items-center px-3">
            <div className="flex min-w-0 flex-1 items-center gap-6">
              <div className="flex min-w-0 items-center gap-1">
                <input
                  id={id}
                  ref={ref}
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  disabled={noEdit}
                  readOnly={readonly}
                  aria-label={`${label} hours`}
                  aria-invalid={localStatus?.type === "error"}
                  name={name ? `${name}-hours` : undefined}
                  value={hours}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={(event) => {
                    emitChange(sanitizeInput(event.target.value), minutes)
                  }}
                  className={cn(
                    "w-[4ch] min-w-[3ch] bg-transparent text-right outline-none placeholder:text-f1-foreground-secondary disabled:cursor-not-allowed",
                    inputSizeClass[size]
                  )}
                />
                <span className="whitespace-nowrap text-f1-foreground-secondary">
                  {hoursLabel}
                </span>
              </div>

              {!hideMinutes && (
                <div className="flex min-w-0 items-center gap-1">
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    disabled={noEdit}
                    readOnly={readonly}
                    aria-label={`${label} minutes`}
                    aria-invalid={localStatus?.type === "error"}
                    name={name ? `${name}-minutes` : undefined}
                    value={minutes}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={(event) => {
                      emitChange(hours, sanitizeInput(event.target.value))
                    }}
                    className={cn(
                      "w-[4ch] min-w-[3ch] bg-transparent text-right outline-none placeholder:text-f1-foreground-secondary disabled:cursor-not-allowed",
                      inputSizeClass[size]
                    )}
                  />
                  <span className="whitespace-nowrap text-f1-foreground-secondary">
                    {minutesLabel}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <InputMessages status={localStatus} />
      </div>
    )
  }
)

DurationInputBase.displayName = "DurationInputBase"

const _DurationInput = forwardRef<HTMLInputElement, DurationInputProps>(
  (props, ref) => {
    const publicProps = privateProps.reduce((acc, key) => {
      const { [key]: _, ...rest } = acc
      return rest
    }, props as DurationInputInternalProps)

    return <DurationInputBase {...publicProps} ref={ref} />
  }
)

_DurationInput.displayName = "DurationInput"

export { _DurationInput }
export type { DurationInputProps }

export const DurationInput = experimentalComponent(
  "DurationInput",
  _DurationInput
)
