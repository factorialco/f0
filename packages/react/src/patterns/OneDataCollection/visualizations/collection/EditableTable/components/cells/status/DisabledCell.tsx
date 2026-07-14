import { RecordType } from "@/hooks/datasource/types/records.typings"

import { EditableCellProps } from ".."
import { BaseCell } from "../BaseCell"
import { ReadOnlyCellContent } from "../ReadOnlyCellContent"

export function DisabledCell<R extends RecordType>({
  editableColumn,
  item,
  hint,
}: EditableCellProps<R>) {
  return (
    <BaseCell
      borderOnHover={false}
      hint={hint}
      hintPosition="right"
      cursor="not-allowed"
    >
      <ReadOnlyCellContent
        editableColumn={editableColumn}
        item={item}
        iconColor="secondary"
        // px only (no vertical padding) so the disabled cell matches the 48px
        // height of editable/display-only cells and rows stay aligned.
        className="min-h-12 bg-f1-background-disabled [&_*]:text-f1-foreground-secondary"
      />
    </BaseCell>
  )
}
