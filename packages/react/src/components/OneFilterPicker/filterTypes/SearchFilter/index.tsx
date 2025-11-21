import { Search } from "@/icons/app"
import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { SearchFilter } from "./SearchFilter"

export const searchFilter: FilterTypeDefinition<
  string | { value: string; strict: boolean }
> = {
  emptyValue: "",
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
        icon: value.strict ? Search : undefined,
      }
    }
    return value ?? ""
  },
}

export default searchFilter

export type SearchFilterDefinition = BaseFilterDefinition<"search">
