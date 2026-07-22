import { RecordType } from "@/hooks/datasource/types/records.typings"

import { EditableCellProps } from ".."
import { BaseCell } from "../BaseCell"
import { ReadOnlyCellContent } from "../ReadOnlyCellContent"

export function NonEditableCell<R extends RecordType>({
  editableColumn,
  item,
  isLastColumn,
  hint,
}: EditableCellProps<R>) {
  return (
    <BaseCell
      showRightBorder={!isLastColumn}
      borderOnHover={false}
      hint={hint}
      hintPosition="right"
      cursor="default"
    >
      <ReadOnlyCellContent
        editableColumn={editableColumn}
        item={item}
        showFieldAffordances={false}
      />
    </BaseCell>
  )
}
