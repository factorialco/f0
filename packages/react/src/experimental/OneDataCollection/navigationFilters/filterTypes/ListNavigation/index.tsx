import { NavigationFilter } from "../../types"
import { ListNavigation } from "./ListNavigation"
import { ListValue, type ListNavigatorFilterDefinition } from "./types"

const listNavigatorFilter: NavigationFilter<
  ListValue,
  ListNavigatorFilterDefinition
> = {
  render: (props) => <ListNavigation {...props} />,
} as const

export default listNavigatorFilter
