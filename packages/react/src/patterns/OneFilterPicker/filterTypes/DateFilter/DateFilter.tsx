"use client"

import { F0Button } from "@/components/F0Button"
import { OneCalendarInternal } from "@/experimental/OneCalendar"
import {
  CalendarMode,
  CalendarView,
  DateRange,
} from "@/experimental/OneCalendar/types"

import { FilterTypeComponentProps } from "../types"

export type DateFilterOptions = {
  minDate?: Date
  maxDate?: Date
  mode?: CalendarMode
  defaultSelected?: Date | DateRange | null
  view?: CalendarView
}

export type DateFilterComponentProps = FilterTypeComponentProps<
  Date | DateRange | undefined,
  DateFilterOptions
> & {
  isCompactMode?: boolean
}

/**
 * A date filter component that provides date picker.
 */
export function DateFilter({
  value,
  onChange,
  schema,
  isCompactMode,
}: DateFilterComponentProps) {
  const options = {
    mode: "single" as const,
    view: "day" as const,
    ...schema.options,
  }

  const clear = () => {
    onChange(undefined)
  }

  return (
    <>
      <div className="space-y-4 overflow-x-hidden p-3">
        <OneCalendarInternal
          defaultSelected={value || options.defaultSelected}
          onSelect={(date) => onChange(date ?? undefined)}
          view={options.view}
          mode={options.mode}
          compact={isCompactMode}
          showInput
        />
      </div>
      {!isCompactMode && (
        <div className="sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
          <F0Button
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
