import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"
import type {
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { INPUTFIELD_SIZES, InputFieldProps } from "@/ui/InputField"
import { Action } from "./components/SelectBottomActions"

// Helper type to resolve the actual record type
export type ResolvedRecordType<R> = R extends RecordType ? R : RecordType

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted  value
 * @template R - The type of the record/item data (used with data source)
 *
 */
export type F0SelectProps<T extends string, R = unknown> = {
  onChangeSelectedOption?: (
    option: F0SelectItemObject<T, ResolvedRecordType<R>> | undefined,
    checked: boolean
  ) => void
  children?: React.ReactNode
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
} & ( // Single select not clearable
  | {
      clearable?: false
      multiple?: false
      value?: T
      defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>
      onChange?: (
        value: T,
        originalItem?: ResolvedRecordType<R> | undefined,
        option?: F0SelectItemObject<T, ResolvedRecordType<R>>
      ) => void
    }
  // Single select clearable
  | {
      clearable: true
      multiple?: false
      value?: T
      defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>
      onChange?: (
        value: T,
        originalItem?: ResolvedRecordType<R> | undefined,
        option?: F0SelectItemObject<T, ResolvedRecordType<R>>
      ) => void
    }
  // Multiple select
  | {
      multiple: true
      clearable?: boolean
      value?: T[]
      defaultItem?: F0SelectItemObject<T, ResolvedRecordType<R>>[]
      onChange?: (
        value: T[],
        originalItems: ResolvedRecordType<R>[],
        options: F0SelectItemObject<T, ResolvedRecordType<R>>[]
      ) => void
    }
) &
  (
    | {
        source: DataSourceDefinition<
          ResolvedRecordType<R>,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<ResolvedRecordType<R>>
        >
        mapOptions: (
          item: ResolvedRecordType<R>
        ) => F0SelectItemProps<T, ResolvedRecordType<R>>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        searchFn?: (
          option: F0SelectItemProps<T, unknown>,
          search?: string
        ) => boolean | undefined
        options: F0SelectItemProps<T, unknown>[]
      }
  ) &
  Pick<
    InputFieldProps<T>,
    | "required"
    | "loading"
    | "hideLabel"
    | "labelIcon"
    | "size"
    | "label"
    | "icon"
    | "placeholder"
    | "disabled"
    | "name"
    | "error"
    | "status"
    | "hint"
  >

export type F0SelectItemObject<T, R = unknown> = {
  type?: "item"
  value: T
  label: string
  description?: string
  avatar?: AvatarVariant
  tag?: string
  icon?: IconType
  item?: R
  disabled?: boolean
}

export type F0SelectItemProps<T, R = unknown> =
  | F0SelectItemObject<T, R>
  | { type: "separator" }

export const selectSizes = INPUTFIELD_SIZES
