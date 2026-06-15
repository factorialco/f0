import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { F0SelectItemObject, F0SelectItemProps } from "@/components/F0Select"
import { FiltersDefinition, FiltersState } from "@/patterns/OneFilterPicker"
import { DropdownItemObject } from "@/experimental/Navigation/Dropdown"
import { NavigationItem } from "@/experimental/Navigation/utils"
import {
  DataAdapter,
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
/**
 * Rewraps every function-valued member of `T` so its parameters are checked
 * BIVARIANTLY (the method-syntax trick). The breadcrumb item union is
 * record-erased (`RecordType`); under `strictFunctionTypes`, arrow-typed
 * members like `selectable?: (item: R) => ...` or the adapter's
 * `fetchData(options: PaginatedFetchOptions<Filters>)` would make a source
 * declared over a CONCRETE record/filters type unassignable here. Sound in
 * this context: each source is fully type-checked against its concrete types
 * where it is declared, and the select only feeds records fetched from that
 * same source back into these callbacks.
 */
type WithBivariantCallbacks<T> = {
  // The [never] guard keeps `paginationType?: never` markers intact —
  // `never` would otherwise match the function check.
  [K in keyof T]: [NonNullable<T[K]>] extends [never]
    ? T[K]
    : NonNullable<T[K]> extends (...args: infer Args) => infer Return
      ? { bivariant(...args: Args): Return }["bivariant"]
      : T[K]
}

/**
 * The record-erased source a collection-select breadcrumb accepts: a
 * `DataSourceDefinition` whose callbacks (and data adapter) tolerate sources
 * declared over concrete record/filter types.
 */
export type CollectionSelectSourceDefinition = WithBivariantCallbacks<
  Omit<
    DataSourceDefinition<
      RecordType,
      FiltersDefinition,
      SortingsDefinition,
      GroupingDefinition<RecordType>
    >,
    "dataAdapter"
  >
> & {
  dataAdapter: WithBivariantCallbacks<
    DataAdapter<RecordType, FiltersDefinition>
  >
}

export type BreadcrumbCollectionSelectItemType = BreadcrumbBaseItemType & {
  type: "collection-select"
  /**
   * The `id` of the OneDataCollection whose persisted state seeds the source
   * (WITHOUT the `datacollection-` prefix). Empty/missing storage → the
   * source is used unfiltered.
   */
  collectionId: string
  /** The declared data source — no mounted collection needed. */
  source: CollectionSelectSourceDefinition
  /** Method syntax on purpose: bivariant, so concrete-record mappers fit. */
  mapOptions(item: RecordType): F0SelectItemProps<string, RecordType>
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
  /**
   * Render the source's filter definitions as an editable filter picker
   * inside the dropdown, pre-applied with the seeded persisted filters —
   * letting users refine the jump-to list in place. When false the seeded
   * filters are still applied, just not editable.
   * @default false
   */
  showFilters?: boolean
  /**
   * Called when the user edits the in-dropdown filters (`showFilters`).
   * Feed the value to `useDataCollectionItemNavigation`'s `currentFilters`
   * so the detail-page prev/next arrows and counter follow the same refined
   * context the dropdown is showing.
   */
  onFiltersChange?: (filters: FiltersState<FiltersDefinition>) => void
} & (
    | {
        /**
         * Href to navigate to when an option is picked, routed through the
         * app's LinkProvider. Return undefined to skip navigation. Method
         * syntax on purpose: bivariant, so concrete-record callbacks fit.
         */
        getItemHref(value: string, item?: RecordType): string | undefined
        onSelect?(value: string, item?: RecordType): void
      }
    | {
        getItemHref?: never
        /** Imperative escape hatch (e.g. router.push) when hrefs don't fit. */
        onSelect(value: string, item?: RecordType): void
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
