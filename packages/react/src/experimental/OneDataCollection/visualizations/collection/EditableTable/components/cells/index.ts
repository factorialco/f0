import type { ComponentType } from "react"

import type { EditableTableCellEditType } from "../../types"
import { TextCell } from "./TextCell"

/**
 * Shared props contract that every editable cell component must implement.
 */
export type EditableCellProps = {
  label: string
  value: string
  align?: "left" | "right"
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
