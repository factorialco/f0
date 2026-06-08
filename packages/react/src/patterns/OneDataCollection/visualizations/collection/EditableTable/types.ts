import type { IconType, F0IconProps } from "@/components/F0Icon"
import type {
  F0SelectItemObject,
  F0SelectItemProps,
} from "@/components/F0Select"

import {
  DataSourceDefinition,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"

import type {
  TableColumnDefinition,
  TableVisualizationOptions,
  TableVisualizationSettings,
} from "../Table/types"

import { PrimaryActionItemDefinition } from "../../../actions"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { EditableTableCellEditType } from "./components/cells"

export type AddRowActionsResult =
  | PrimaryActionItemDefinition
  | PrimaryActionItemDefinition[]
  | undefined

export type EditableTableVisualizationSettings = TableVisualizationSettings

/**
 * Map of the attributes modified in a cell update, keyed by record key.
 * Each entry is a `[previousValue, newValue]` tuple.
 */
export type EditableTableCellChanges<R extends RecordType> = {
  [K in keyof R]?: [R[K], R[K]]
}

/**
 * Arguments passed to `onCellChange`.
 */
export type EditableTableOnCellChangeParams<R extends RecordType> = {
  /** The full row item with the change(s) applied. */
  updatedItem: R
  /**
   * Map of the modified attributes keyed by record key, where each entry is a
   * `[previousValue, newValue]` tuple.
   */
  changes: EditableTableCellChanges<R>
}

export type DateCellConfig = {
  /** Earliest selectable date. Dates before this are disabled in the picker. */
  minDate?: Date
  /** Latest selectable date. Dates after this are disabled in the picker. */
  maxDate?: Date
}

export type NumberCellConfig<R extends RecordType = RecordType> = {
  min?: number
  max?: number
  step?: number
  maxDecimals?: number
  locale?: string
  /**
   * Unit label displayed next to the number input.
   * Can be a static string (e.g. `"h"`) or a function that receives the
   * current row item to return a per-row unit (e.g. `(item) => item.type === "role" ? "h" : "u"`).
   */
  units?: string | ((item: R) => string | undefined)
  unitsPosition?: "before" | "after"
}

/**
 * Configuration for select-type cells. Mirrors F0Select's two data modes:
 * - Static `options` (array or per-row function)
 * - Async `source` (DataSourceDefinition) with `mapOptions`
 */
export type SelectCellConfig<R extends RecordType> = {
  placeholder?: string
  clearable?: boolean
  showSearchBox?: boolean
  defaultItem?: (item: R) => F0SelectItemObject<string, RecordType> | undefined
} & (
  | {
      options:
        | F0SelectItemProps<string>[]
        | ((item: R) => F0SelectItemProps<string>[])
      source?: never
      mapOptions?: never
    }
  | {
      source: Omit<
        DataSourceDefinition<
          RecordType,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<RecordType>
        >,
        | "selectable"
        | "grouping"
        | "defaultGrouping"
        | "currentGrouping"
        | "fetchChildren"
        | "itemsWithChildren"
        | "childrenCount"
      >
      mapOptions: (record: RecordType) => F0SelectItemProps<string, RecordType>
      options?: never
    }
)

/**
 * Column definition for Editable Table.
 *
 * When `editType` is set, the column's `id` is used as the record key to
 * read the initial value from `item[id]` and to merge the updated value
 * back into the item passed to `onCellChange`.
 */
export type EditableTableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = TableColumnDefinition<R, Sortings, Summaries> & {
  /** Optional placeholder passed to editable inputs (e.g. date cells). */
  inputPlaceholder?: string

  /**
   * Determines how the cell is rendered in edit mode.
   * Receives the current item and returns the cell type (e.g. `"text"`) or
   * `undefined` to render the cell read-only.
   * The column `id` is used as the record key to read/write the value.
   * When omitted, the cell is always rendered read-only.
   */
  editType?: (item: R) => EditableTableCellEditType | undefined
  /**
   * Configuration for `"select"` cells. Required when `editType` returns `"select"`.
   * Accepts either static `options` or a `source` + `mapOptions` for async data.
   *
   * If `editType` returns `"select"` but `selectConfig` is missing, the cell
   * falls back to a non-editable display with a `console.warn` at runtime.
   * Type-level enforcement is not possible because `editType` is a per-row
   * function whose return value isn't statically known.
   */
  selectConfig?: SelectCellConfig<R>
  /**
   * Configuration for `"number"` cells. Accepts constraints (`min`, `max`),
   * stepping (`step`), formatting (`maxDecimals`, `locale`), and units.
   * Falls back to sensible defaults when omitted.
   */
  numberConfig?: NumberCellConfig<R>

  /**
   * Configuration for `"date"` cells. Accepts `minDate` / `maxDate` to
   * restrict the selectable date range in the picker.
   */
  dateConfig?: DateCellConfig

  /**
   * Called after this cell's value changes. Use to compute derived values
   * and update other cells in the same row.
   *
   * Works with every cell type (text, number, date, select, etc.).
   *
   * @example
   * formula: ({ value, setCellValue }) => {
   *   const hours = roleHoursMap[value as string]
   *   if (hours != null) setCellValue("plannedHours", hours)
   * }
   */
  formula?: (params: {
    /** The new value of this cell. */
    value: unknown
    /** The current row item (before this change is applied). */
    item: R
    /** For select cells: the full record associated with the selected option. */
    selectedItem?: RecordType
    /** Update another cell in the same row by column id. */
    setCellValue: (columnId: string, value: unknown) => void
  }) => void

  /**
   * Returns a hint to display as an icon with tooltip inside the cell.
   * Use to warn the user when a value diverges from its formula-inferred value,
   * or to provide extra context for non-editable / disabled cells (e.g. why a
   * value was inferred, who a row is backfilling, why editing is locked).
   *
   * Supported by all `editType` values, including `display-only` and `disabled`.
   *
   * Return `undefined` to hide the hint.
   *
   * @example
   * cellHint: (item) => {
   *   if (item._inferredSalary != null && item.salary !== item._inferredSalary) {
   *     return { icon: AlertCircle, message: `Differs from catalog (${item._inferredSalary})` }
   *   }
   * }
   */
  cellHint?: (item: R) =>
    | {
        icon: IconType
        message: string
        iconColor?: F0IconProps["color"]
      }
    | undefined
}

export type EditableTableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
> = Omit<
  TableVisualizationOptions<R, _Filters, Sortings, Summaries>,
  "columns"
> & {
  columns: ReadonlyArray<EditableTableColumnDefinition<R, Sortings, Summaries>>
  /**
   * Called when a cell value changes. Receives an object with the full updated
   * row (`updatedItem`) and a `changes` map of the modified attributes, keyed by
   * record key, where each entry is a `[previousValue, newValue]` tuple.
   * Resolve with nothing for success, or `{ columnId: "message" }` to set errors.
   * Rejection sets an error on the edited column.
   */
  onCellChange: (
    params: EditableTableOnCellChangeParams<R>
  ) => Promise<void | Record<string, string>>
  /**
   * When provided, renders action buttons at the bottom of the root-level table.
   * Returns a single action, an array of actions, or undefined to hide the row.
   */
  addRowActions?: () => AddRowActionsResult
  /**
   * Label for the dropdown trigger button when multiple root-level add-row
   * actions are provided. Falls back to the first action's label if omitted.
   */
  addRowActionsLabel?: string
  /**
   * When provided, renders action buttons at the bottom of each expanded nested row.
   * Receives the parent item whose children the new row will be added to.
   */
  addNestedRowActions?: (parent: R) => AddRowActionsResult
  /**
   * Label for the dropdown trigger button when multiple nested add-row
   * actions are provided. Falls back to the first action's label if omitted.
   */
  addNestedRowActionsLabel?: string
}

export type EditableTableCollectionProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = CollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  EditableTableVisualizationOptions<R, Filters, Sortings, Summaries>
>
