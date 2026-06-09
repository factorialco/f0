import type { IconType, F0IconProps } from "@/components/F0Icon"
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
  inputPlaceholder?: string
  error?: string
  loading?: boolean
  onChange: (
    value: string | null,
    context?: { selectedItem?: RecordType }
  ) => void
  item: R
  isLastColumn?: boolean
  hint?: {
    icon: IconType
    message: string
    iconColor?: F0IconProps["color"]
    position?: "left" | "right"
  }
}

/** The edit mode for a column cell in the editable table. */
export type EditableTableCellEditType =
  | "text"
  | "number"
  | "money"
  | "date"
  | "select"
  | "multiselect"
  | "display-only"
  | "disabled"
