import type { F0IconProps } from "@/components/F0Icon"

import { F0Icon } from "@/components/F0Icon"
import { Arrow } from "@/components/F0Select/components/Arrow"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import type { EditableCellProps } from "."

import { resolveTextCellIcon } from "./textIcon"

type ReadOnlyCellContentProps<R extends RecordType> = Pick<
  EditableCellProps<R>,
  "editableColumn" | "item"
> & {
  /** Color for the leading icon (disabled cells pass a muted color). */
  iconColor?: F0IconProps["color"]
  /** Extra classes for the content container (background, muted text, ...). */
  className?: string
}

/**
 * Body shared by read-only cells (display-only and disabled): the value plus
 * the same field affordances the editable cells show — a url/email leading
 * icon and a select dropdown chevron — so a column reads as that kind of field
 * whether or not it's currently editable. The chevron reuses F0Select's `Arrow`
 * so it matches the editable select cell exactly (never scaled down).
 */
export function ReadOnlyCellContent<R extends RecordType>({
  editableColumn,
  item,
  iconColor = "default",
  className,
}: ReadOnlyCellContentProps<R>) {
  const i18n = useI18n()

  const leadingIcon = resolveTextCellIcon(editableColumn.textConfig)
  const isSelect = !!editableColumn.selectConfig
  const alignRight = editableColumn.align === "right"

  return (
    <div
      className={cn(
        "flex h-full w-full min-w-0 items-center gap-1.5 px-3",
        isSelect ? "justify-between" : alignRight && "justify-end",
        className
      )}
    >
      <span className="flex min-w-0 items-center gap-1.5">
        {leadingIcon && (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <F0Icon icon={leadingIcon} color={iconColor} />
          </span>
        )}
        <span className="min-w-0 truncate">
          {renderProperty(item, editableColumn, "editableTable", i18n)}
        </span>
      </span>
      {isSelect && (
        <span className="flex shrink-0 items-center">
          <Arrow open={false} size="sm" />
        </span>
      )}
    </div>
  )
}
