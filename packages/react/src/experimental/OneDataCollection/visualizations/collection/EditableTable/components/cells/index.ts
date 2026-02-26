import type { ComponentType } from "react"

import type { RecordType, SortingsDefinition } from "@/hooks/datasource"

import type { SummariesDefinition } from "../../../../../summary"
import type { TableColumnDefinition } from "../../../Table/types"
import type { EditableTableCellEditType } from "../../types"
import { TextCell } from "./TextCell"

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

/**
 * Registry that maps each `editType` to its corresponding cell component.
 * To add a new cell type:
 *  1. Add the type literal to `EditableTableCellEditType` in `types.ts`
 *  2. Create the component in `cells/`
 *  3. Register it here
 */
export const editableCellMap: Record<
  EditableTableCellEditType,
  ComponentType<EditableCellProps>
> = {
  text: TextCell,
}
