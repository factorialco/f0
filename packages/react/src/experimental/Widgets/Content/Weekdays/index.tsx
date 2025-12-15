import { ToggleGroup, ToggleGroupItem } from "@/ui/toggleGroup"
import { forwardRef } from "react"

interface WeekdaysProps {
  activatedDays?: number[]
  daysOfTheWeek?: string[]
}

const DAYS_OF_THE_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export const Weekdays = forwardRef<HTMLDivElement, WeekdaysProps>(function WeekDays(
  { daysOfTheWeek = DAYS_OF_THE_WEEK, activatedDays = [] },
  ref
) {
  const activatedDayValues = activatedDays.map((index) => `${index}-${daysOfTheWeek[index]}`)

  return (
    <ToggleGroup
      type="multiple"
      value={activatedDayValues}
      disabled
      className="flex justify-start"
      ref={ref}
    >
      {daysOfTheWeek.map((day, index) => (
        <ToggleGroupItem
          aria-label={day}
          key={index}
          value={`${index}-${day}`}
          className="h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected"
        >
          {day[0]}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
})
