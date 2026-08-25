import { I18nContextType } from "@/lib/providers/i18n"

import {
  RegisteredFilterDefinition,
  RegisteredFiltersState,
} from "../filterTypes"

import { getActiveFilterKeys } from "./getActiveFilterKeys"

/**
 * Returns a copy of `value` keeping only the filters that are actually active
 * (non-empty per their type's `isEmpty`).
 *
 * A fully-cleared set collapses to `{}` so it is emitted/applied as "unfiltered"
 * rather than `{ department: [], search: "" }`. The latter would be passed to the
 * data source, where a consumer can read an empty `in` array as "match none" and
 * wrongly return zero results (showing the empty state instead of the full list).
 */
export const getActiveFiltersValue = <
  Filters extends Record<string, RegisteredFilterDefinition>,
>(
  filters: Filters,
  value: RegisteredFiltersState<Filters>,
  i18n: I18nContextType
): RegisteredFiltersState<Filters> => {
  const active = {} as RegisteredFiltersState<Filters>
  for (const key of getActiveFilterKeys(filters, value, i18n)) {
    active[key] = value[key]
  }
  return active
}
