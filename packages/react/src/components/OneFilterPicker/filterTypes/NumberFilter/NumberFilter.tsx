"use client"

import { F0Button } from "@/components/F0Button"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { useCallback, useEffect, useState } from "react"
import { FilterTypeComponentProps } from "../types"

export type NumberFilterOptions = {
  min?: number
  max?: number
  modes?: ("range" | "single")[]
}

export type NumberFilterValue =
  | {
      mode: "single"
      value: number | undefined
    }
  | {
      mode: "range"
      value: [number | undefined, number | undefined] | undefined
    }

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
    onChange({
      mode: options.mode,
      value: undefined,
    })
  }

  const showModeSwitch =
    options.modes === undefined || options.modes?.length > 1

  const modeFromValue = useCallback((value: NumberFilterValue) => {
    if (value.mode === "range") {
      return "range"
    }
    return "single"
  }, [])

  const [selectionMode, setSelectionMode] = useState(modeFromValue(value))

  const [localValue, setLocalValue] = useState<
    [number | undefined, number | undefined]
  >([undefined, undefined])

  useEffect(() => {
    setLocalValue(
      value.mode === "range"
        ? [value?.value?.[0], value?.value?.[1]]
        : [value?.value, undefined]
    )
  }, [value])

  const handleModeChange = (checked: boolean) => {
    setSelectionMode(checked ? "range" : "single")
    if (!checked) {
      onChange({ mode: "single", value: localValue?.[0] })
    } else {
      onChange({ mode: "range", value: [localValue?.[0], localValue?.[1]] })
    }
  }

  const handleChange = (inputValue: number | null, index: "from" | "to") => {
    if (selectionMode === "range") {
      onChange({
        mode: "range",
        value: [
          index === "from" ? (inputValue ?? undefined) : localValue?.[0],
          index === "to" ? (inputValue ?? undefined) : localValue?.[1],
        ],
      })
    } else {
      onChange({ mode: "single", value: inputValue ?? undefined })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 space-y-4 overflow-x-hidden p-6">
        <div className="flex flex-row gap-2">
          <div className="flex-1">
            <NumberInput
              label={
                selectionMode === "range"
                  ? i18n.filters.number.greaterOrEqual
                  : i18n.filters.number.value
              }
              locale={l10n.locale}
              value={localValue?.[0]}
              onChange={(inputValue) => handleChange(inputValue, "from")}
              max={options.max}
              min={options.min}
            />
          </div>
          {selectionMode === "range" && (
            <>
              <div className="flex items-center justify-center">-</div>
              <div className="flex-1">
                <NumberInput
                  label={i18n.filters.number.lessOrEqual}
                  locale={l10n.locale}
                  value={localValue?.[1]}
                  onChange={(inputValue) => handleChange(inputValue, "to")}
                  max={options.max}
                  min={options.min}
                />
              </div>
            </>
          )}
        </div>
        {showModeSwitch && (
          <Switch
            title={i18n.filters.number.rangeTitle}
            checked={selectionMode === "range"}
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
