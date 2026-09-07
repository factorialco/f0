import { I18nContextType } from "@/lib/providers/i18n"
import { FilterTypeSchema, getFilterType } from "../filterTypes"
import { FiltersDefinition, FiltersState } from "../types"

export const getActiveFilterKeys = <Filters extends FiltersDefinition>(
  filters: Filters,
  value: FiltersState<Filters>,
  i18n: I18nContextType
) =>
  Object.keys(filters).filter((key) => {
    const filterValue = value[key as keyof Filters]
    const filterSchema = filters[key as keyof Filters]

    const filterType = getFilterType(filterSchema.type)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We need to pass the filter value as any to the isEmpty function
    const isEmpty = filterType.isEmpty(filterValue as any, {
      schema: filterSchema as unknown as FilterTypeSchema,
      i18n,
    })

    return !isEmpty
  }) as Array<keyof Filters>
