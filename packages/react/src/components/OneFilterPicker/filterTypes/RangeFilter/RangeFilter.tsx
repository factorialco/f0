"use client"

import { Button } from "@/components/Actions/Button"
import { NumberInput } from "@/experimental/Forms/Fields/NumberInput"
import { FilterTypeComponentProps } from "../types"

export type RangeFilterOptions = {
  min?: number
  max?: number
}

export type RangeFilterValue =
  | [number | undefined, number | undefined]
  | undefined

export type RangeFilterComponentProps = FilterTypeComponentProps<
  RangeFilterValue,
  RangeFilterOptions
> & {
  isCompactMode?: boolean
}

/**
 * A date filter component that provides date picker.
 */
export function RangeFilter({
  value,
  onChange,
  schema,
  isCompactMode,
}: RangeFilterComponentProps) {
  const options = {
    ...schema.options,
  }

  const clear = () => {
    onChange([undefined, undefined])
  }

  return (
    <>
      <div className="space-y-4 overflow-x-hidden p-3">
        <NumberInput
          label="Above or equal to"
          locale="en-US"
          value={value?.[0]}
          onChange={(inputValue) =>
            onChange([inputValue ?? undefined, value?.[1]])
          }
          max={options.max}
          min={options.min}
        />
        <NumberInput
          label="Below or equal to"
          locale="en-US"
          value={value?.[1]}
          onChange={(inputValue) =>
            onChange([value?.[0], inputValue ?? undefined])
          }
          max={options.max}
          min={options.min}
        />
      </div>
      {!isCompactMode && (
        <div className="sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
          <Button
            variant="ghost"
            label="Clear"
            onClick={() => clear()}
            disabled={!value}
            size="sm"
          />
        </div>
      )}
    </>
  )
}
