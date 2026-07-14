import { F0Icon } from "@/components/F0Icon"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { DropdownOpen } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import { EditableCellProps } from ".."
import { BaseCell } from "../BaseCell"
import { resolveTextCellIcon } from "../textIcon"

export function NonEditableCell<R extends RecordType>({
  editableColumn,
  item,
  isLastColumn,
  hint,
}: EditableCellProps<R>) {
  const i18n = useI18n()

  // Keep the field affordances (url/email leading icon, select dropdown
  // chevron) even when the cell isn't inline-editable — e.g. an entities list
  // in dialog mode — so the column still reads as that kind of field.
  const leadingIcon = resolveTextCellIcon(editableColumn.textConfig)
  const isSelect = !!editableColumn.selectConfig
  const alignRight = editableColumn.align === "right"

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
          "flex h-full w-full min-w-0 items-center gap-1.5 px-3",
          isSelect ? "justify-between" : alignRight && "justify-end"
        )}
      >
        <span className="flex min-w-0 items-center gap-1.5">
          {leadingIcon && (
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              <F0Icon icon={leadingIcon} color="default" />
            </span>
          )}
          <span className="min-w-0 truncate">
            {renderProperty(item, editableColumn, "editableTable", i18n)}
          </span>
        </span>
        {isSelect && (
          <span className="flex shrink-0 rotate-180 items-center text-f1-icon">
            <F0Icon icon={DropdownOpen} size="sm" />
          </span>
        )}
      </div>
    </BaseCell>
  )
}
