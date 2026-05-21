import { ReactNode } from "react"

import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { RecordType, SortingKey, SortingsDefinition } from "@/hooks/datasource"

import { PropertyDefinition } from "../../../property-render"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
  sorting?: SortingKey<Sortings>
}

export type ItemDefinition = {
  title: string
  description?: string[]
  avatar?: AvatarVariant
  /**
   * Optional inline content rendered immediately after the title (e.g. an
   * icon-only action button that targets the title's underlying resource).
   * Stays on the same line as the title.
   */
  titleActions?: ReactNode
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
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
}
