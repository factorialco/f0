import { NavigationFilter } from "../../types"
import { ListNavigation } from "./ListNavigation"
import { ListValue, type ListNavigatorFilterDefinition } from "./types"

const listNavigatorFilter: NavigationFilter<
  ListValue,
  ListValue,
  ListNavigatorFilterDefinition
> = {
  valueConverter: function (value, _filterDef, _i18n) {
    return value
  },
  render: (props) => <ListNavigation {...props} />,
}

export default listNavigatorFilter
