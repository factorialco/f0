import type { F0ListNavigationProps } from "@/components/F0ListNavigation"
import { NavigationFilterDefinitionBase } from "../../types"

export type ListNavigationOptions = {
  options: F0ListNavigationProps["options"]
}

export const listNavigatorFilterType = "list-navigator" as const

export type ListNavigatorFilterDefinition = NavigationFilterDefinitionBase<
  ListValue,
  typeof listNavigatorFilterType
> &
  ListNavigationOptions

export type ListValue = string

export type ListNavigationProps = {
  filter: ListNavigatorFilterDefinition
  value: ListValue
  onChange: (value: ListValue) => void
}
