import { filterTypes, type FilterTypeKey, type FilterTypes } from "./filters"

export const getFilterType = <T extends FilterTypeKey>(
  type: T
): FilterTypes[T] => {
  const filterType = filterTypes[type]
  if (!filterType) {
    throw new Error(`Filter type ${type.toString()} not found`)
  }

  return filterType
}
