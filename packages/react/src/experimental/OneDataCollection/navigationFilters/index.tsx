import dateNavigatorFilter from "./filterTypes/DateNavigation"
import {
  DateNavigatorFilterDefinition,
  dateNavigatorFilterType,
} from "./filterTypes/DateNavigation/types"
import listNavigatorFilter from "./filterTypes/ListNavigation"
import {
  ListNavigatorFilterDefinition,
  listNavigatorFilterType,
} from "./filterTypes/ListNavigation/types"

export const navigationFilterTypes = {
  [dateNavigatorFilterType]: dateNavigatorFilter,
  [listNavigatorFilterType]: listNavigatorFilter,
} as const

// Function overloads for type narrowing
export function getFilterDefinitionByType(
  type: typeof dateNavigatorFilterType
): DateNavigatorFilterDefinition
export function getFilterDefinitionByType(
  type: typeof listNavigatorFilterType
): ListNavigatorFilterDefinition
export function getFilterDefinitionByType(type: string): undefined
export function getFilterDefinitionByType(
  type: string
): DateNavigatorFilterDefinition | ListNavigatorFilterDefinition | undefined {
  switch (type) {
    case dateNavigatorFilterType:
      return dateNavigatorFilter as unknown as DateNavigatorFilterDefinition
    case listNavigatorFilterType:
      return listNavigatorFilter as unknown as ListNavigatorFilterDefinition
    default:
      return undefined
  }
}
