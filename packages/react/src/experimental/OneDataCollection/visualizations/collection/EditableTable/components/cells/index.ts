import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

import type { SummariesDefinition } from "../../../../../summary"

import { EditableTableColumnDefinition } from "../../types"

/**
 * Shared props contract that every editable cell component must implement.
 */
export type EditableCellProps<R extends RecordType> = {
  editableColumn: EditableTableColumnDefinition<
    R,
    SortingsDefinition,
    SummariesDefinition
  >
  value: string
  error?: string
  loading?: boolean
  onChange: (value: string) => void
  item: R
  isLastColumn?: boolean
}

/** The edit mode for a column cell in the editable table. */
export type EditableTableCellEditType =
  | "text"
  | "date"
  | "select"
  | "multiselect"
  | "display-only"
  | "disabled"
