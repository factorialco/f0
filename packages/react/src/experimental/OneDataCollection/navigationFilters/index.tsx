import dateNavigatorFilter from "./filterTypes/DateNavigation"
import { dateNavigatorFilterType } from "./filterTypes/DateNavigation/types"
import listNavigatorFilter from "./filterTypes/ListNavigation"
import { listNavigatorFilterType } from "./filterTypes/ListNavigation/types"

export const navigationFilterTypes = {
  [dateNavigatorFilterType]: dateNavigatorFilter,
  [listNavigatorFilterType]: listNavigatorFilter,
} as const

export type NavigationFilterTypes = typeof navigationFilterTypes

export function getFilterDefinitionByType<
  T extends keyof NavigationFilterTypes,
>(type: T): NavigationFilterTypes[T]
export function getFilterDefinitionByType(
  type: string
): NavigationFilterTypes[keyof NavigationFilterTypes] | undefined
export function getFilterDefinitionByType(
  type: string
): NavigationFilterTypes[keyof NavigationFilterTypes] | undefined {
  return navigationFilterTypes[type as keyof NavigationFilterTypes]
}
