import React from "react"
import { navigationFilterTypes } from "../../navigationFilters"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"

type NavigationFiltersProps<
  NavigationFilters extends NavigationFiltersDefinition,
> = {
  navigationFilters?: NavigationFilters
  currentNavigationFilters: NavigationFiltersState<NavigationFilters>
  onChangeNavigationFilters: (
    value: NavigationFiltersState<NavigationFilters>
  ) => void
}

export const NavigationFilters = <
  NavigationFilters extends NavigationFiltersDefinition,
>({
  navigationFilters,
  currentNavigationFilters,
  onChangeNavigationFilters,
}: NavigationFiltersProps<NavigationFilters>) => {
  return (
    <>
      {navigationFilters &&
        Object.entries(navigationFilters).map(([key, filter]) => {
          const filterDef = navigationFilterTypes[filter.type]
          /* as never is used as typescript can't infer the type correctly
              because of the recursive type definitions. */
          return (
            <React.Fragment key={key}>
              {filterDef.render({
                filter: filter as never,
                value: currentNavigationFilters[key]! as never,
                onChange: (value: (typeof filter)["defaultValue"]) => {
                  onChangeNavigationFilters({
                    ...currentNavigationFilters,
                    [key]: value,
                  })
                },
              })}
            </React.Fragment>
          )
        })}
    </>
  )
}
