import { AlertCircle } from "@/icons/app"
import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { SearchFilter, SearchFilterOptions } from "./SearchFilter"

export const searchFilter: FilterTypeDefinition<
  string | { value: string; strict: boolean },
  SearchFilterOptions
> = {
  emptyValue: "",
  defaultOptions: {
    strictToggle: false,
  },
  render: (props) => <SearchFilter {...props} />,
  isEmpty: (value) => {
    if (typeof value === "object" && "value" in value) {
      return value.value?.trim() === ""
    }
    return (value ?? "").trim() === ""
  },
  chipLabel: (value) => {
    if (typeof value === "object" && "value" in value) {
      return {
        label: value.value,
        icon: value.strict ? AlertCircle : undefined,
        avatar: undefined,
      }
    }
    return value ?? ""
  },
}

export default searchFilter

export type SearchFilterDefinition = BaseFilterDefinition<"search">
