import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

import type { SummariesDefinition } from "../../../../../summary"
import type { TableColumnDefinition } from "../../../Table/types"

/**
 * Shared props contract that every editable cell component must implement.
 */
export type EditableCellProps = Pick<
  TableColumnDefinition<RecordType, SortingsDefinition, SummariesDefinition>,
  "label" | "align"
> & {
  value: string
  error?: string
  loading?: boolean
  onChange: (value: string) => void
}

/** The edit mode for a column cell in the editable table. */
export type EditableTableCellEditType =
  | "text"
  | "date"
  | "select"
  | "multiselect"
