import { FilterTypeKey, FilterTypes } from "."
import { filterTypes } from "."

/**
 * Returns the filter options with the defaults if the option property is not provided by the filter
 * @template T - The filter type key
 * @template D - The default options type
 * @param options - The options to merge with the default options
 * @param defaultOptions - The default options
 * @returns The filter type definition with default options and render function
 */
export function getOptionsWithDefaults<T extends object, D extends object>(
  options: Omit<T, keyof D> & Partial<D>,
  defaultOptions: D
): T & Required<D> {
  return {
    ...defaultOptions,
    ...options,
  } as T & Required<D>
}

/**
 * Returns a filter type definition with default options and render function
 * @template T - The filter type key
 * @param type - The filter type key
 * @returns The filter type definition with default options and render function
 */
export const getFilterType = <T extends FilterTypeKey>(
  type: T
): FilterTypes[T] => {
  const filterType = filterTypes[type]
  if (!filterType) {
    throw new Error(`Filter type ${type.toString()} not found`)
  }

  return filterType
}
