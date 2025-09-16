export type EventScalar = string | number | boolean | undefined | null

export type EventName =
  | "datacollection.filter-change"
  | "datacollection.sorting-change"
  | "datacollection.preset-click"

export type EventParams = Record<string, EventScalar | Array<EventScalar>>

export type EventCatcherFunction = (
  eventName: EventName,
  params: EventParams
) => void
