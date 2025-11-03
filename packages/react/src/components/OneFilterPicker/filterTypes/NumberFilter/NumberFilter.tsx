"use client"

import { F0Button } from "@/components/F0Button"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { useState } from "react"
import { FilterTypeComponentProps } from "../types"

export type NumberFilterOptions = {
  min?: number
  max?: number
  modes?: ("range" | "single")[]
}

export type NumberFilterValue =
  | [number | undefined, number | undefined]
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
    onChange([undefined, undefined])
  }

  const showModeSwitch =
    options.modes === undefined || options.modes?.length > 1
  const [selectionMode, setSelectionMode] = useState(
    options.modes?.[0] ?? "single"
  )

  const handleChange = (inputValue: number | null, index: "from" | "to") => {
    if (selectionMode === "range") {
      onChange([
        index === "from" ? (inputValue ?? undefined) : value?.[0],
        index === "to" ? (inputValue ?? undefined) : value?.[1],
      ])
    } else {
      onChange([inputValue ?? undefined, undefined])
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
                  ? i18n.filters.aboveOrEqual
                  : i18n.filters.value
              }
              locale={l10n.locale}
              value={value?.[0]}
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
                  label={i18n.filters.belowOrEqual}
                  locale={l10n.locale}
                  value={value?.[1]}
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
            title={i18n.filters.range_title}
            checked={selectionMode === "range"}
            onCheckedChange={(checked) =>
              setSelectionMode(checked ? "range" : "single")
            }
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
