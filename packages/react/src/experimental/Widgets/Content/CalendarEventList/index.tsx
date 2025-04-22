import { VerticalOverflowList } from "@/ui/VerticalOverflowList"
import { FC } from "react"
import { CalendarEvent, CalendarEventProps } from "../CalendarEvent"

export interface CalendarEventListProps {
  events: CalendarEventProps[]
  limit?: 1 | 2 | 3 | 4 | 5
  gap?: number
  showAllItems?: boolean
  minSize?: number
}

export const CalendarEventList: FC<CalendarEventListProps> = ({
  events,
  showAllItems,
  gap = 8,
  minSize = 184,
}) => {
  if (!events.length) {
    return null
  }

  if (showAllItems) {
    return (
      <div className="flex flex-col">
        {events.map((item) => (
          <CalendarEvent key={item.title} {...item} />
        ))}
      </div>
    )
  }

  return (
    <VerticalOverflowList
      items={events}
      gap={gap}
      minSize={minSize}
      renderListItem={(item: (typeof events)[number]) => (
        <CalendarEvent key={item.title} {...item} />
      )}
    />
  )
}
