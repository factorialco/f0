import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"
import type { NewColor } from "@/components/tags/F0TagDot/types"
import type { StatusVariant } from "@/components/tags/F0TagStatus/types"
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

import { INPUTFIELD_SIZES, InputFieldProps } from "@/components/F0InputField"
import { WithDataTestIdProps } from "@/lib/data-testid"

import { Action } from "./components/SelectBottomActions"

// Helper type to resolve the actual record type
export type ResolvedRecordType<R> = R extends RecordType ? R : RecordType

/**
 * Re-export selection types from datasource for convenience
 */
export type { FiltersState, OnSelectItemsCallback, SelectedItemsState }

export const selectVariants = ["field", "inline"] as const
export type F0SelectVariant = (typeof selectVariants)[number]

/** Props shared by the field and inline select variants. */
type F0SelectPopupProps<T extends string, R = unknown> = {
  onChangeSelectedOption?: (
    option: F0SelectItemObject<T, ResolvedRecordType<R>> | undefined,
    checked: boolean
  ) => void
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  /**
   * Called when the user changes the in-dropdown filters (requires a `source`
   * with filter definitions). Lets consumers keep an external context — e.g.
   * detail-page navigation — in sync with what the dropdown is showing.
   */
  onFiltersChange?: (filters: FiltersState<FiltersDefinition>) => void
  searchEmptyMessage?: string
  actions?: Action[]
  /** Callback to create a new item from the current search text. When provided, a "+ Create" button is shown in the empty state of the dropdown. */
  onCreate?: (value: string) => Promise<void> | void
  /** Container element to render the portal content into */
  portalContainer?: HTMLElement | null
  /**
   * When true, preserves selections when the dataset changes (search, filters,
   * or sortings). Useful for picker components where the user searches and
   * filters to find items to add to an existing selection.
   *
   * @default true
   */
  preserveSelectionOnDatasetChange?: boolean
  /**
   * When true, the dropdown sizes to its widest option (never narrower than
   * the trigger) instead of the default 20rem minimum. Useful for compact
   * value pickers like month/year selectors.
   *
   * @default false for field selects; true for inline selects
   */
  fitContentWidth?: boolean
} & WithDataTestIdProps

type F0SelectSingleSelectionProps<T extends string, R = unknown> = {
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

type F0SelectSelectionProps<T extends string, R = unknown> =
  | F0SelectSingleSelectionProps<T, R>
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

type F0SelectDataProps<T extends string, R = unknown> =
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

type F0SelectFieldProps<T extends string, R = unknown> = F0SelectPopupProps<
  T,
  R
> &
  F0SelectSelectionProps<T, R> & {
    /** Standard form-field presentation. This remains the default. */
    variant?: "field"
    withApplySelection?: boolean
    applySelectionLabel?: string
    children?: React.ReactNode
    className?: string
    /**
     * When true, renders the select as a static list without the input trigger.
     * Only displays the dropdown content with max height, border and scroll.
     */
    asList?: boolean
    /**
     * When true, shows a selection preview panel on the right side of the dropdown
     * for multi-select mode. When false and filters are present, filters use compact mode.
     * @default false
     */
    showPreview?: boolean
  } & Pick<
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

type F0SelectInlineProps<T extends string, R = unknown> = F0SelectPopupProps<
  T,
  R
> &
  F0SelectSingleSelectionProps<T, R> &
  Pick<InputFieldProps<T>, "label" | "placeholder" | "disabled"> & {
    /**
     * Compact borderless presentation for single-value controls embedded in rows.
     * The required label is used as the accessible name and is not shown visually.
     */
    variant: "inline"
    size?: never
    disableSelectAll?: never
    withApplySelection?: never
    applySelectionLabel?: never
    children?: never
    className?: never
    asList?: never
    showPreview?: never
    required?: never
    loading?: never
    hideLabel?: never
    labelIcon?: never
    icon?: never
    name?: never
    error?: never
    status?: never
    hint?: never
  }

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted value
 * @template R - The type of the record/item data (used with data source)
 */
export type F0SelectProps<T extends string, R = unknown> = (
  | F0SelectFieldProps<T, R>
  | F0SelectInlineProps<T, R>
) &
  F0SelectDataProps<T, R>

/**
 * Static-options-only select props for dependency-leaf consumers.
 *
 * This intentionally excludes data sources, and therefore filters and
 * grouping, whose UI is injected by the configured public F0Select entry.
 */
export type F0SelectStaticProps<T extends string> = (
  | F0SelectFieldProps<T>
  | F0SelectInlineProps<T>
) & {
  source?: never
  mapOptions?: never
  searchFn?: (
    option: F0SelectItemProps<T, unknown>,
    search?: string
  ) => boolean | undefined
  options: F0SelectItemProps<T, unknown>[]
}

export type F0SelectTagProp =
  | string
  | { type: "dot"; text: string; color: NewColor }
  | { type: "person"; name: string; src?: string }
  | { type: "icon"; text: string; icon: IconType }
  | { type: "status"; text: string; variant: StatusVariant }

/**
 * Short token rendered next to the option label, in secondary color, on a
 * single line — never wraps and never affects row height. For prose that
 * deserves its own line use `description`; for chips/badges use `tag`.
 * Can coexist with both.
 *
 * Deliberately strict: no free-form variant. Each variant carries semantics
 * the component can validate and format — add new ones (e.g. currency,
 * locale) as concrete use cases appear.
 */
export type F0SelectItemMetadata = { type: "dialCode"; dialCode: string }

export type F0SelectItemObject<T, R = unknown> = {
  type?: "item"
  value: T
  label: string
  /**
   * What the TRIGGER shows once this item is selected, when that has to differ
   * from the row's own `label`. The row is read in the context the list gives it
   * — under a group header, beside its siblings — and the trigger has none of
   * that, so a label that is clear in the list can be ambiguous on its own
   * ("Tokens", once the "Design system" header is gone). Give the trigger the
   * full path there and leave the row short. Defaults to `label`.
   */
  selectedLabel?: string
  description?: string
  /** Short token shown next to the label (e.g. a dial code) */
  metadata?: F0SelectItemMetadata
  avatar?: AvatarVariant
  tag?: F0SelectTagProp
  icon?: IconType
  item?: R
  disabled?: boolean
}

export type F0SelectItemProps<T, R = unknown> =
  | F0SelectItemObject<T, R>
  | { type: "separator" }

export const selectSizes = INPUTFIELD_SIZES
