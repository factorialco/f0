import type { IconType } from "@/components/F0Icon"
import type { F0SelectItemProps } from "@/components/F0Select/types"
import type {
  DataSourceDefinition,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition,
  RecordType,
} from "@/hooks/datasource"

import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

// ============================================================================
// Select Field RenderIf Conditions
// ============================================================================

/**
 * Base for select-specific conditions
 */
interface SelectRenderIfBase {
  fieldId: string
}

/**
 * RenderIf conditions specific to select fields
 */
export type SelectRenderIfCondition = SelectRenderIfBase &
  (
    | { equalsTo: string }
    | { notEqualsTo: string }
    | { includes: string }
    | { notIncludes: string }
    | { isEmpty: boolean }
  )

/**
 * All valid renderIf conditions for select fields
 */
export type SelectFieldRenderIf =
  | SelectRenderIfCondition
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Select Field Config and Type
// ============================================================================

/**
 * Value types supported by select fields
 */
export type SelectValueType = string | number

/**
 * Predicate used to filter static options against the current search text.
 * Mirrors the `F0Select` component's `searchFn` signature.
 * @typeParam T - The value type (string or number)
 */
export type F0SelectSearchFn<T extends SelectValueType = string> = (
  option: F0SelectItemProps<T, unknown>,
  search?: string
) => boolean | undefined

/**
 * Base config options shared by all select field variants
 */
interface F0SelectConfigBase {
  /** Whether multiple selection is allowed */
  multiple?: boolean
  /** Whether to show the search box */
  showSearchBox?: boolean
  /** Placeholder for the search box */
  searchBoxPlaceholder?: string
  /** Icon displayed on the left side of the select input */
  icon?: IconType
  /** Callback to create a new item from the search text. Shows a "+ Create" button in the empty state of the dropdown. */
  onCreate?: (value: string) => Promise<void> | void
  /** Called when the dropdown opens or closes. Enables lazy-fetch-on-first-open flows. */
  onOpenChange?: (open: boolean) => void
  /** Shows a loading indicator inside the select input (e.g. while options are being fetched). */
  loading?: boolean
  /** Message shown when the search yields no results. */
  searchEmptyMessage?: string
}

/**
 * Config for select fields with static options
 * @typeParam T - The value type (string or number)
 */
interface F0SelectConfigWithOptions<
  T extends SelectValueType = string,
> extends F0SelectConfigBase {
  /** Options for the select dropdown */
  options: F0SelectItemProps<T, unknown>[]
  /**
   * Custom predicate to filter static options against the search text.
   * Only valid in options mode — mutually exclusive with `source`.
   */
  searchFn?: F0SelectSearchFn<T>
  source?: never
  mapOptions?: never
}

/**
 * Config for select fields with a data source
 * @typeParam T - The value type (string or number)
 * @typeParam R - Record type from the data source
 */
interface F0SelectConfigWithSource<
  T extends SelectValueType = string,
  R extends RecordType = RecordType,
> extends F0SelectConfigBase {
  /** Data source for fetching options dynamically */
  source: DataSourceDefinition<
    R,
    FiltersDefinition,
    SortingsDefinition,
    GroupingDefinition<R>
  >
  /** Function to map data source items to select options */
  mapOptions: (item: R) => F0SelectItemProps<T, R>
  options?: never
  /** `searchFn` is options-only — invalid alongside `source`. */
  searchFn?: never
}

/**
 * Config for select fields whose options/source are provided at runtime
 * via `customFieldName` and `renderCustomField`.
 */
interface F0SelectConfigWithCustomFieldName extends F0SelectConfigBase {
  options?: never
  source?: never
  mapOptions?: never
  /** `searchFn` is options-only — invalid with a runtime-provided field. */
  searchFn?: never
  /** Required: identifies the custom field provider */
  customFieldName: string
}

/**
 * F0 config options specific to select fields
 *
 * Supports either:
 * - Static `options` array
 * - Dynamic `source` with `mapOptions` function
 * - Runtime-provided via `customFieldName` (no options/source needed at definition time)
 *
 * @typeParam T - The value type (string or number)
 * @typeParam R - Record type from the data source
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.string().optional()` or `z.string().nullable()` → clearable
 */
export type F0SelectConfig<
  T extends SelectValueType = string,
  R extends RecordType = RecordType,
> =
  | F0SelectConfigWithOptions<T>
  | F0SelectConfigWithSource<T, R>
  | F0SelectConfigWithCustomFieldName

/**
 * Select field with all properties for rendering
 * Includes properties derived from Zod schema
 */
export type F0SelectField = F0BaseField &
  F0SelectConfig & {
    type: "select"
    /** Whether the select can be cleared (derived from optional/nullable) */
    clearable?: boolean
    /** Conditional rendering based on another field's value */
    renderIf?: SelectFieldRenderIf
  }
