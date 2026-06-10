import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { F0SelectItemObject, F0SelectItemProps } from "@/components/F0Select"
import { FiltersDefinition } from "@/patterns/OneFilterPicker"
import { DropdownItemObject } from "@/experimental/Navigation/Dropdown"
import { NavigationItem } from "@/experimental/Navigation/utils"
import {
  DataSourceDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import { BreadcrumbSelectProps } from "./internal/BreadcrumbSelect"

type BreadcrumbBaseItemType = NavigationItem & {
  id: string
  loading?: boolean
  label: string
}

export type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
  loading: true
}

export type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
  module?: ModuleId
}

export type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
  type: "select"
  searchbox?: boolean
  externalSearch?: boolean
  onChange: BreadcrumbSelectProps<string, RecordType>["onChange"]
  value?: string
  defaultItem?: F0SelectItemObject<string, RecordType>
} & (
    | {
        source: DataSourceDefinition<
          RecordType,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<RecordType>
        >
        mapOptions: (item: RecordType) => F0SelectItemProps<string>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        options: F0SelectItemProps<string, RecordType>[]
      }
  )

/**
 * A breadcrumb "jump-to" select bound to a OneDataCollection: the options are
 * fetched from the declared `source`, seeded with the filters/sortings the
 * list persisted under `collectionId` — so on the detail page (even via a
 * direct link, with the list never mounted) the select only shows the items
 * the user was looking at on the list.
 *
 * F0 owns the seeding, pagination handling (a `pages` adapter is transparently
 * consumed as infinite scroll), current selection, navigation, and
 * loop-safety: `source` is captured when the crumb mounts, so inline-recreated
 * item objects never retrigger fetches. Give the item a new `id` to swap
 * sources.
 */
export type BreadcrumbCollectionSelectItemType = BreadcrumbBaseItemType & {
  type: "collection-select"
  /**
   * The `id` of the OneDataCollection whose persisted state seeds the source
   * (WITHOUT the `datacollection-` prefix). Empty/missing storage → the
   * source is used unfiltered.
   */
  collectionId: string
  /** The declared data source — no mounted collection needed. */
  source: DataSourceDefinition<
    RecordType,
    FiltersDefinition,
    SortingsDefinition,
    GroupingDefinition<RecordType>
  >
  mapOptions: (item: RecordType) => F0SelectItemProps<string, RecordType>
  /** Current item id (the record the detail page is showing). */
  value?: string
  /**
   * Fallback option so a direct link shows the current item as selected
   * before/without it appearing in the fetched options. The item `label` is
   * used as the trigger label until an option is selected.
   */
  defaultItem?: F0SelectItemObject<string, RecordType>
  searchbox?: boolean
  /** Which persisted state to seed. @default { filters: true, sortings: true } */
  seed?: { filters?: boolean; sortings?: boolean }
} & (
    | {
        /**
         * Href to navigate to when an option is picked, routed through the
         * app's LinkProvider. Return undefined to skip navigation.
         */
        getItemHref: (value: string, item?: RecordType) => string | undefined
        onSelect?: (value: string, item?: RecordType) => void
      }
    | {
        getItemHref?: never
        /** Imperative escape hatch (e.g. router.push) when hrefs don't fit. */
        onSelect: (value: string, item?: RecordType) => void
      }
  )

export type BreadcrumbItemType =
  | BreadcrumbLoadingItemType
  | BreadcrumbNavItemType
  | BreadcrumbSelectItemType
  | BreadcrumbCollectionSelectItemType

export interface BreadcrumbState {
  visibleCount: number
  headItem: BreadcrumbItemType | null
  tailItems: BreadcrumbItemType[]
  collapsedItems: BreadcrumbItemType[]
  isOnly: boolean
  minWidth: number | undefined
}

export type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">
