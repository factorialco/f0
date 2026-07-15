import { I18nContextType } from "@/lib/providers/i18n"

import {
  FilterTypeContext,
  FilterTypeSchema,
  getFilterType,
  RegisteredFilterDefinition,
  RegisteredFiltersState,
} from "../filterTypes"

type RenderableFiltersDefinition = Record<string, RegisteredFilterDefinition>

export const getActiveFilterKeys = <
  Filters extends RenderableFiltersDefinition,
>(
  filters: Filters,
  value: RegisteredFiltersState<Filters>,
  i18n: I18nContextType
) =>
  Object.keys(filters).filter((key) => {
    const filterValue = value[key as keyof Filters]
    const filterSchema = filters[key as keyof Filters]

    const filterType = getFilterType(filterSchema.type)

    const isEmpty = (
      filterType.isEmpty as (
        value: unknown,
        context: FilterTypeContext
      ) => boolean
    )(filterValue, {
      schema: filterSchema as unknown as FilterTypeSchema,
      i18n,
    })

    return !isEmpty
  }) as Array<keyof Filters>
