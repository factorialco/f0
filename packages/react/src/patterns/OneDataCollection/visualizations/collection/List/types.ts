import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { IconType } from "@/components/F0Icon"
import { FiltersDefinition } from "@/patterns/OneFilterPicker/types"
import { RecordType, SortingKey, SortingsDefinition } from "@/hooks/datasource"

import { PropertyDefinition } from "../../../property-render"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
  sorting?: SortingKey<Sortings>
}

/**
 * Declarative action rendered next to the item title. Mirrors the
 * `FileItem.actions` / timeline `metadata.actions` shape so the list
 * visualization controls the canonical styling (ghost, sm, icon-only,
 * collapse to overflow menu when multiple).
 */
export type ItemTitleAction = {
  icon: IconType
  label: string
  onClick?: () => void
  href?: string
  target?: React.HTMLAttributeAnchorTarget
  critical?: boolean
}

export type ItemDefinition = {
  title: string
  description?: string[]
  avatar?: AvatarVariant
  /**
   * Optional actions rendered immediately after the title (e.g. an
   * icon-only button targeting the title's underlying resource). When a
   * single action is provided it renders as an icon-only ghost button;
   * multiple actions collapse into an overflow menu.
   */
  titleActions?: ItemTitleAction[]
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
