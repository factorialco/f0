import { EditableTableCellEditType } from "./components/cells"
import { DateCell } from "./components/cells/DateCell"
import { MoneyCell } from "./components/cells/MoneyCell"
import { NumberCell } from "./components/cells/NumberCell"
import { SelectCell } from "./components/cells/SelectCell"
import { DisabledCell } from "./components/cells/status/DisabledCell"
import { NonEditableCell } from "./components/cells/status/NonEditableCell"
import { TextCell } from "./components/cells/TextCell"

type EditableCellComponent =
  | typeof TextCell
  | typeof NumberCell
  | typeof DateCell
  | typeof SelectCell
  | typeof NonEditableCell
  | typeof DisabledCell

/**
 * Registry that maps each `editType` to its corresponding cell component.
 * To add a new cell type:
 *  1. Add the type literal to `EditableTableCellEditType` in `components/cells/index.ts`
 *  2. Create the component in `cells/`
 *  3. Register it here
 */
export const editableCellMap: Record<
  EditableTableCellEditType,
  EditableCellComponent
> = {
  text: TextCell,
  number: NumberCell,
  money: MoneyCell,
  date: DateCell,
  select: SelectCell,
  multiselect: TextCell,
  "display-only": NonEditableCell,
  disabled: DisabledCell,
}

/**
 * Edit types backed by free-typing inputs. Changes coming from these cells
 * are debounced so onCellChange fires once when the user stops typing,
 * instead of on every keystroke. Discrete cells (select, date...) commit
 * immediately.
 */
export const typingEditTypes: ReadonlySet<EditableTableCellEditType> = new Set([
  "text",
  "number",
  "money",
  "multiselect",
])
