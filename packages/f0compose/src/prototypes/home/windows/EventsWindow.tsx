import { F0Icon } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"

type HomeEvent = {
  id: string
  title: string
  subtitle: string
  month: string
  day: string
  endMonth?: string
  endDay?: string
  accent: string
}

// Same events as the "Home - Vision" feed design.
const events: HomeEvent[] = [
  {
    id: "sarah-birthday",
    title: "Sarah's birthday",
    subtitle: "Turns 30 🎉",
    month: "JUL",
    day: "24",
    accent: "#E51943",
  },
  {
    id: "company-holiday",
    title: "Company holiday",
    subtitle: "2 days off",
    month: "JUL",
    day: "30",
    endMonth: "JUL",
    endDay: "31",
    accent: "#0CA57F",
  },
  {
    id: "team-offsite",
    title: "Team offsite",
    subtitle: "Costa Brava · not confirmed",
    month: "AUG",
    day: "3",
    endMonth: "AUG",
    endDay: "4",
    accent: "#F5A51C",
  },
  {
    id: "all-hands",
    title: "Monthly all-hands",
    subtitle: "Q3 roadmap update",
    month: "AUG",
    day: "7",
    accent: "#5596F6",
  },
]

function DateChip({ month, day }: { month: string; day: string }) {
  return (
    <span className="flex w-9 shrink-0 flex-col items-center rounded-md border border-solid border-f1-border-secondary bg-f1-background py-0.5">
      <span className="text-sm font-medium text-f1-foreground-critical">
        {month}
      </span>
      <span className="text-base font-semibold text-f1-foreground">{day}</span>
    </span>
  )
}

export function EventsWindow() {
  return (
    <div className="flex flex-col gap-1 p-3">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex items-center gap-3 rounded-[10px] py-2 pl-2 pr-1 hover:bg-f1-background-secondary"
        >
          <span
            className="h-9 w-1 shrink-0 rounded-full"
            style={{ backgroundColor: event.accent }}
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-base font-medium text-f1-foreground">
              {event.title}
            </span>
            <span className="truncate text-base text-f1-foreground-secondary">
              {event.subtitle}
            </span>
          </div>
          <DateChip month={event.month} day={event.day} />
          {event.endDay && event.endMonth && (
            <>
              <F0Icon icon={ChevronRight} size="xs" color="secondary" />
              <DateChip month={event.endMonth} day={event.endDay} />
            </>
          )}
        </div>
      ))}
    </div>
  )
}
