import { FC } from "react"

import { VerticalOverflowList } from "@/ui/VerticalOverflowList"

import { CalendarEvent, CalendarEventProps } from "../CalendarEvent"

export interface CalendarEventListProps {
  events: CalendarEventProps[]
  /**
   * The space between events, in px. Applies to BOTH paths — the overflow list
   * and `showAllItems` — so a list that stops overflowing keeps its rhythm.
   */
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
    // The SAME `gap` the overflow path hands `VerticalOverflowList`. It used to
    // be missing here, which made "show them all" quietly mean "show them with
    // no space between them" — and left every consumer of this path to discover
    // the spacing was gone and put it back by hand.
    return (
      <div className="flex flex-col" style={{ gap: `${gap}px` }}>
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
