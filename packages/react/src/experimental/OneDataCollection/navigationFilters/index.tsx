import dateNavigatorFilter from "./filterTypes/DateNavigation"
import listNavigatorFilter from "./filterTypes/ListNavigation"

export const navigationFilterTypes = {
  "date-navigator": dateNavigatorFilter,
  "list-navigator": listNavigatorFilter,
} as const
