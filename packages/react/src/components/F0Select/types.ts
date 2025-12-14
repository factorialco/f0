import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"
import type {
  DataSourceDefinition,
  FiltersDefinition,
  FiltersState,
  GroupingDefinition,
  OnSelectItemsCallback,
  RecordType,
  SelectedItemsState,
  SortingsDefinition,
} from "@/hooks/datasource"
import { INPUTFIELD_SIZES, InputFieldProps } from "@/ui/InputField"
import { Action } from "./components/SelectBottomActions"

// Helper type to resolve the actual record type
export type ResolvedRecordType<R> = R extends RecordType ? R : RecordType

/**
 * Re-export selection types from datasource for convenience
 */
export type { FiltersState, OnSelectItemsCallback, SelectedItemsState }

/**
 * Base props shared across all F0Select variants
 */
type F0SelectBaseProps<T extends string, R = unknown> = {
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
  /** Container element to render the portal content into */
  portalContainer?: HTMLElement | null
  /**
   * When true, displays the select as an always-visible list without a trigger.
   * The component renders only the content area (options list) without the input field.
   * Useful for inline selection lists or embedded selectors.
   */
  alwaysOpen?: boolean
}

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted value
 * @template R - The type of the record/item data (used with data source)
 */
export type F0SelectProps<T extends string, R = unknown> = F0SelectBaseProps<
  T,
  R
> & // Single select not clearable
  (
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
        /** Callback for selection changes - provides full selection state for advanced use cases (e.g., "Select All" with exclusions) */
        onSelectItems?: never
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
        onSelectItems?: never
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
        /**
         * Callback for selection changes - provides full selection state including:
         * - `status.allSelected`: true if "Select All" was used, "indeterminate" if some items deselected after Select All
         * - `status.items`: Map of all items with their checked state
         * - `filters`: Current applied filters
         * - `selectedCount`: Total number of selected items
         *
         * Use this for "chunked" selection mode where you need to track:
         * - When allSelected is true/indeterminate: excluded items are those with checked=false
         * - When allSelected is false: included items are those with checked=true
         */
        onSelectItems?: OnSelectItemsCallback<
          ResolvedRecordType<R>,
          FiltersDefinition
        >
        /**
         * Disables the "Select All" functionality, forcing manual selection of items one by one.
         * When enabled, the allSelected state will always be false and users must select items individually.
         */
        disableSelectAll?: boolean
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
