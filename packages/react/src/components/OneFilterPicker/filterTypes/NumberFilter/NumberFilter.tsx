"use client"

import { F0Button } from "@/components/F0Button"
import { NumberInputInternal } from "@/experimental/Forms/Fields/NumberInput/internal"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { LockLocked, LockUnlocked } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { useDeepCompareEffect } from "@reactuses/core"
import { useMemo, useState } from "react"
import { FilterTypeComponentProps } from "../types"

export type NumberFilterOptions = {
  min?: number
  max?: number
  modes?: ("range" | "single")[]
  strictToggle?: boolean
}

export type NumberFilterValue =
  | {
      mode: "single"
      value: number | undefined
    }
  | {
      mode: "range"
      from: {
        value: number | undefined
        strict: boolean
      }
      to: {
        value: number | undefined
        strict: boolean
      }
    }
  | undefined

export type NumberFilterComponentProps = FilterTypeComponentProps<
  NumberFilterValue,
  NumberFilterOptions
> & {
  isCompactMode?: boolean
}

/**
 * A number filter component that provides number input.
 */
export function NumberFilter({
  value,
  onChange,
  schema,
  isCompactMode,
}: NumberFilterComponentProps) {
  const options = {
    mode: schema.options?.modes?.[0] ?? "single",
    ...schema.options,
  }

  const i18n = useI18n()
  const l10n = useL10n()

  const clear = () => {
    onChange(undefined)
  }

  const showModeSwitch =
    options.modes === undefined || options.modes?.length > 1

  const [localValue, setLocalValue] = useState<NumberFilterValue>(
    value ?? {
      mode: "single",
      value: undefined,
    }
  )

  useDeepCompareEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleModeChange = (checked: boolean) => {
    if (checked) {
      setLocalValue({
        mode: "range",
        from: {
          value:
            localValue?.mode === "single"
              ? localValue?.value
              : localValue?.from?.value,
          strict: true,
        },
        to: {
          value:
            localValue?.mode === "single"
              ? localValue?.value
              : localValue?.to?.value,
          strict: true,
        },
      })
    } else {
      setLocalValue({
        mode: "single",
        value:
          localValue?.mode === "single"
            ? localValue?.value
            : localValue?.from?.value,
      })
    }
  }

  const handleStrictChange = (index: "from" | "to", checked: boolean) => {
    if (localValue?.mode === "range") {
      setLocalValue({
        ...localValue,
        [index]: {
          ...localValue?.[index],
          strict: checked,
        },
      })
    }
  }

  const handleValueChange = (
    inputValue: number | null,
    index: "from" | "to"
  ) => {
    setLocalValue((prev) => {
      if (prev?.mode === "range") {
        return {
          ...prev,
          [index]: {
            ...(prev?.[index] ?? {}),
            value: inputValue ?? undefined,
          },
        }
      }
      return {
        ...(prev ?? {
          mode: "single",
          value: undefined,
        }),
        value: inputValue ?? undefined,
      }
    })
  }

  useDeepCompareEffect(() => {
    if (localValue?.mode === "range") {
      onChange({
        mode: "range",
        from: {
          value: localValue?.from?.value,
          strict: localValue?.from?.strict ?? true,
        },
        to: {
          value: localValue?.to?.value,
          strict: localValue?.to?.strict ?? true,
        },
      })
    } else {
      onChange({
        mode: "single",
        value: localValue?.value,
      })
    }
  }, [localValue])

  const valueAsRange = useMemo(() => {
    return {
      from: {
        value:
          localValue?.mode === "range"
            ? localValue?.from?.value
            : localValue?.value,
        strict: localValue?.mode === "range" ? localValue?.from?.strict : true,
      },
      to: {
        value:
          localValue?.mode === "range"
            ? localValue?.to?.value
            : localValue?.value,
        strict: localValue?.mode === "range" ? localValue?.to?.strict : true,
      },
    }
  }, [localValue])

  return (
    <>
      <div className="flex flex-col gap-2 space-y-4 overflow-x-hidden p-6">
        <div className="flex flex-row gap-2">
          <div className="min-w-1/2 flex-1">
            <NumberInputInternal
              label={
                localValue?.mode === "range"
                  ? localValue?.from?.strict
                    ? i18n.filters.number.greaterOrEqual
                    : i18n.filters.number.greaterThan
                  : i18n.filters.number.value
              }
              locale={l10n.locale}
              value={valueAsRange.from.value}
              onChange={(inputValue) => handleValueChange(inputValue, "from")}
              max={options.max}
              min={options.min}
              buttonToggle={
                localValue?.mode === "range" && options.strictToggle
                  ? {
                      label: [
                        i18n.filters.number.greaterThan,
                        i18n.filters.number.lessThan,
                      ],
                      icon: [LockLocked, LockUnlocked],
                      selected: valueAsRange.from.strict,
                      onChange: (checked: boolean) =>
                        handleStrictChange("from", checked),
                    }
                  : undefined
              }
            />
          </div>
          {localValue?.mode === "range" && (
            <div className="min-w-1/2 flex-1">
              <NumberInputInternal
                label={i18n.filters.number.lessOrEqual}
                locale={l10n.locale}
                value={valueAsRange.to.value}
                onChange={(inputValue) => handleValueChange(inputValue, "to")}
                max={options.max}
                min={options.min}
                buttonToggle={
                  localValue?.mode === "range" && options.strictToggle
                    ? {
                        label: [
                          i18n.filters.number.lessOrEqual,
                          i18n.filters.number.lessThan,
                        ],
                        icon: [LockLocked, LockUnlocked],
                        selected: valueAsRange.to.strict,
                        onChange: (checked: boolean) =>
                          handleStrictChange("to", checked),
                      }
                    : undefined
                }
              />
            </div>
          )}
        </div>
        {showModeSwitch && (
          <Switch
            title={i18n.filters.number.rangeTitle}
            checked={localValue?.mode === "range"}
            onCheckedChange={handleModeChange}
          />
        )}
      </div>
      {!isCompactMode && (
        <div className="sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
          <F0Button
            variant="ghost"
            label={i18n.actions.clear}
            onClick={() => clear()}
            disabled={!value}
            size="sm"
          />
        </div>
      )}
    </>
  )
}
