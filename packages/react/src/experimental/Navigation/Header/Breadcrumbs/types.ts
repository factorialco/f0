import { ModuleId } from "@/components/avatars/F0AvatarModule"
import { FiltersDefinition } from "@/components/OneFilterPicker"
import {
  SelectItemObject,
  SelectItemProps,
} from "@/experimental/Forms/Fields/Select"
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

type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
  loading: true
}

type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
  module?: ModuleId
}

type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
  type: "select"
  searchbox?: boolean
  externalSearch?: boolean
  onChange: BreadcrumbSelectProps<string, RecordType>["onChange"]
  value?: string
  defaultItem?: SelectItemObject<string, RecordType>
} & (
    | {
        source: DataSourceDefinition<
          RecordType,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<RecordType>
        >
        mapOptions: (item: RecordType) => SelectItemProps<string>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        options: SelectItemProps<string, RecordType>[]
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
