import type { F0SelectItemProps } from "@/components/F0Select/types"
import type {
  DataSourceDefinition,
  FiltersDefinition,
  SortingsDefinition,
  GroupingDefinition,
  RecordType,
} from "@/hooks/datasource"

import type { F0BaseField, CommonRenderIfCondition } from "../types"

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

// ============================================================================
// Select Field Config and Type
// ============================================================================

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
}

/**
 * Config for select fields with static options
 */
interface F0SelectConfigWithOptions extends F0SelectConfigBase {
  /** Options for the select dropdown */
  options: F0SelectItemProps<string, unknown>[]
  source?: never
  mapOptions?: never
}

/**
 * Config for select fields with a data source
 */
interface F0SelectConfigWithSource<
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
  mapOptions: (item: R) => F0SelectItemProps<string, R>
  options?: never
}

/**
 * F0 config options specific to select fields
 *
 * Supports either:
 * - Static `options` array
 * - Dynamic `source` with `mapOptions` function
 *
 * Note: `clearable` is derived from the Zod schema:
 * - `z.string().optional()` or `z.string().nullable()` → clearable
 */
export type F0SelectConfig<R extends RecordType = RecordType> =
  | F0SelectConfigWithOptions
  | F0SelectConfigWithSource<R>

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
