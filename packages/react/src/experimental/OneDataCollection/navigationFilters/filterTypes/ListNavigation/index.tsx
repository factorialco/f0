import { NavigationFilter } from "../../types"
import { ListNavigation } from "./ListNavigation"
import { ListValue, type ListNavigatorFilterDefinition } from "./types"

const listNavigatorFilter: NavigationFilter<
  ListValue,
  ListNavigatorFilterDefinition
> = {
  valueConverter: function (value, _filterDef, _i18n) {
    return value
  },
  render: (props) => <ListNavigation {...props} />,
} as const

export default listNavigatorFilter
