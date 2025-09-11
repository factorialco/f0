"use client"

import { F0Button } from "@/components/actions/F0Button"
import { FilterTypeComponentProps } from "../types"

import { OneCalendar } from "@/experimental/OneCalendar"
import {
  CalendarMode,
  CalendarView,
  DateRange,
} from "@/experimental/OneCalendar/types"

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
>

/**
 * A date filter component that provides date picker.
 */
export function DateFilter({
  value,
  onChange,
  schema,
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
        <OneCalendar
          defaultSelected={value || options.defaultSelected}
          onSelect={(date) => onChange(date ?? undefined)}
          view={options.view}
          mode={options.mode}
          showInput
        />
      </div>
      <div className="sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
        <F0Button
          variant="ghost"
          label="Clear"
          onClick={() => clear()}
          disabled={!value}
          size="sm"
        />
      </div>
    </>
  )
}
