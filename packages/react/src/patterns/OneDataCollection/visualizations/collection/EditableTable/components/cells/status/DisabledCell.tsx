import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import { EditableCellProps } from ".."
import { BaseCell } from "../BaseCell"

export function DisabledCell<R extends RecordType>({
  editableColumn,
  item,
  hint,
}: EditableCellProps<R>) {
  const i18n = useI18n()

  return (
    <BaseCell borderOnHover={false} hint={hint} disabled>
      <div
        className={cn(
          editableColumn.align === "right" ? "justify-end" : "",
          "flex p-4 min-h-12 items-center border-0 h-full",
          "cursor-pointer w-full"
        )}
      >
        {renderProperty(item, editableColumn, "editableTable", i18n)}
      </div>
    </BaseCell>
  )
}
