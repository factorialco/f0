import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import { EditableCellProps } from ".."
import { BaseCell } from "../BaseCell"

export function NonEditableCell<R extends RecordType>({
  editableColumn,
  item,
  isLastColumn,
  hint,
}: EditableCellProps<R>) {
  const i18n = useI18n()

  return (
    <BaseCell
      showRightBorder={!isLastColumn}
      borderOnHover={false}
      hint={hint}
      hintPosition="right"
      cursor="default"
    >
      <div
        className={cn(
          "flex w-full min-w-0",
          "items-center px-3",
          editableColumn.align === "right" && "justify-end"
        )}
      >
        {renderProperty(item, editableColumn, "editableTable", i18n)}
      </div>
    </BaseCell>
  )
}
