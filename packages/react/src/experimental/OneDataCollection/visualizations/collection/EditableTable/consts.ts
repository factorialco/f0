import type { ComponentType } from "react"

import {
  EditableCellProps,
  EditableTableCellEditType,
} from "./components/cells"
import { TextCell } from "./components/cells/TextCell"

/**
 * Registry that maps each `editType` to its corresponding cell component.
 * To add a new cell type:
 *  1. Add the type literal to `EditableTableCellEditType` in `components/cells/index.ts`
 *  2. Create the component in `cells/`
 *  3. Register it here
 */
export const editableCellMap: Record<
  EditableTableCellEditType,
  ComponentType<EditableCellProps>
> = {
  text: TextCell,
  date: TextCell,
  select: TextCell,
  multiselect: TextCell,
}
