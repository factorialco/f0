import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { F0SelectItemObject, F0SelectItemProps } from "@/components/F0Select"
import { FiltersDefinition } from "@/components/OneFilterPicker"
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

export type BreadcrumbItemType =
  | BreadcrumbLoadingItemType
  | BreadcrumbNavItemType
  | BreadcrumbSelectItemType

export interface BreadcrumbState {
  visibleCount: number
  headItem: BreadcrumbItemType | null
  tailItems: BreadcrumbItemType[]
  collapsedItems: BreadcrumbItemType[]
  isOnly: boolean
  minWidth: number | undefined
}

export type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">
