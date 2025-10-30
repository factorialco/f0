import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker"
import { cn } from "../lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  compact?: boolean
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  compact = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      fixedWeeks={props.fixedWeeks}
      className={className}
      disabled={props.disabled}
      classNames={{
        months: "flex flex-col",
        caption: "hidden",
        nav: "space-x-1 flex items-center",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: cn(
          "flex items-center",
          props.showWeekNumber ? "justify-start" : "justify-between"
        ),
        head_cell: cn(
          "text-f1-foreground-secondary rounded-xs font-medium flex justify-center items-center",
          props.showWeekNumber
            ? compact
              ? "w-[30px] flex-shrink-0"
              : "w-full"
            : "w-full",
          compact ? "h-6 text-sm" : "h-8 text-sm"
        ),
        row: cn(
          "flex w-full items-center",
          props.showWeekNumber ? "justify-start" : "justify-between",
          compact ? "mt-1" : "mt-2"
        ),
        cell: cn(
          "text-center font-medium p-0 relative text-f1-foreground transition-all duration-100",
          props.showWeekNumber
            ? compact
              ? "w-[30px] flex-shrink-0"
              : "w-full"
            : "w-full",
          compact ? "rounded-sm h-7 text-sm" : "rounded-md h-10 text-sm",
          "before:absolute before:inset-0 before:z-0 before:bg-f1-background-selected-bold before:opacity-0 before:transition-all before:duration-100 before:content-[''] hover:before:bg-f1-background-selected-bold-hover before:pointer-events-none",
          compact ? "before:rounded-sm" : "before:rounded-md",
          "[&:has([aria-selected].day-range-start)]:before:opacity-100 [&:has([aria-selected].day-range-end)]:before:opacity-100",
          "[&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none [&:has([aria-selected].day-range-start.day-range-end)]:rounded-md [&:has([aria-selected].day-range-middle)]:bg-f1-background-selected",
          compact
            ? "first:[&:has([aria-selected].day-range-middle)]:rounded-l-sm last:[&:has([aria-selected].day-range-middle)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-r-sm first:[&:has([aria-selected].day-range-end)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-l-sm last:[&:has([aria-selected].day-range-start)]:rounded-r-sm"
            : "first:[&:has([aria-selected].day-range-middle)]:rounded-l-md last:[&:has([aria-selected].day-range-middle)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-r-md",
          "[&:has([aria-selected].day-range-start)]:bg-f1-background-selected [&:has([aria-selected].day-range-end)]:bg-f1-background-selected",
          cn(
            "[&>span.rdp-weeknumber]:text-f1-foreground-secondary [&>span.rdp-weeknumber]:flex [&>span.rdp-weeknumber]:items-center [&>span.rdp-weeknumber]:justify-center [&>span.rdp-weeknumber]:h-full [&>span.rdp-weeknumber]:font-normal",
            compact
              ? "[&>span.rdp-weeknumber]:w-[30px] [&>span.rdp-weeknumber]:flex-shrink-0"
              : "[&>span.rdp-weeknumber]:w-7 [&>span.rdp-weeknumber]:flex-shrink-0",
            "[&>span.rdp-weeknumber]:text-sm"
          ),
          props.mode === "single" &&
            "[&:has([aria-selected].day-selected)]:before:opacity-100",
          props.showWeekNumber &&
            "[&:has([aria-selected].day-range-middle)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-start)]:bg-f1-background-selected-bold [&:has([aria-selected].day-range-end)]:bg-f1-background-selected-bold hover:before:bg-f1-background-selected-bold"
        ),
        day: cn(
          "rounded-[inherit] p-0 aria-selected:opacity-100 z-20 relative",
          compact
            ? props.showWeekNumber
              ? "h-7 w-[30px] text-sm"
              : "h-7 w-7 text-sm"
            : "h-10 w-10 text-sm"
        ),
        day_range_start:
          "day-range-start aria-selected:text-f1-foreground-inverse",
        day_range_end: "day-range-end aria-selected:text-f1-foreground-inverse",
        day_today: cn(
          "relative after:absolute after:inset-x-0 after:z-20 after:mx-auto after:rounded-full after:bg-f1-background-selected-bold after:transition-colors after:duration-100 after:content-[''] after:pointer-events-none aria-selected:after:bg-f1-background",
          compact
            ? "after:bottom-0.5 after:h-0.5 after:w-1"
            : "after:bottom-1 after:h-0.5 after:w-1.5"
        ),
        day_selected: cn(
          "day-selected",
          props.mode === "single" && "aria-selected:text-f1-foreground-inverse"
        ),
        day_outside: "day-outside text-f1-foreground-secondary font-normal",
        day_disabled: "text-f1-foreground-disabled",
        day_range_middle: cn(
          "day-range-middle aria-selected:text-f1-foreground-selected",
          props.showWeekNumber && "aria-selected:text-f1-foreground-inverse"
        ),
        day_hidden: "invisible",
        ...classNames,
      }}
      modifiers={{
        ...props.modifiers,
        ...(compact && {
          hideLastWeek: (date) => {
            // Hide the last week that contains days from the next month
            const nextMonth = new Date(
              date.getFullYear(),
              date.getMonth() + 1,
              1
            )
            const isNextMonth = date.getMonth() === nextMonth.getMonth()
            return isNextMonth
          },
        }),
      }}
      modifiersClassNames={{
        ...props.modifiersClassNames,
        ...(compact && {
          hideLastWeek: "hidden",
        }),
      }}
      components={{
        IconLeft: () => (
          <ChevronLeft className={compact ? "h-3 w-3" : "h-4 w-4"} />
        ),
        IconRight: () => (
          <ChevronRight className={compact ? "h-3 w-3" : "h-4 w-4"} />
        ),
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
