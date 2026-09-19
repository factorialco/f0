import { AvatarVariant, IconAvatarVariant } from "@/components/avatars/F0Avatar"
import { RecordType, SortingKey, SortingsDefinition } from "@/hooks/datasource"
import { type ListIconColor } from "@/lib/ListIcon"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { PropertyDefinition } from "../../../property-render"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
  sorting?: SortingKey<Sortings>
}

export type ListItemAvatar =
  | Exclude<AvatarVariant, IconAvatarVariant>
  | (IconAvatarVariant & { color?: ListIconColor })

export type ItemDefinition = {
  title: string
  description?: string[]
  avatar?: ListItemAvatar
}

export type ListPropertyDefinition<
  R,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<R, Sortings> & PropertyDefinition<R>

export type ListVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  itemDefinition: (record: R) => ItemDefinition
  fields: readonly ListPropertyDefinition<R, Sortings>[]
}
