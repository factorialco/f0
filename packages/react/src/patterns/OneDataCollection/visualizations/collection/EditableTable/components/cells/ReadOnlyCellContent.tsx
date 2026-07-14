import { format, isValid, parseISO } from "date-fns"

import type { F0IconProps } from "@/components/F0Icon"

import { F0Icon } from "@/components/F0Icon"
import { Arrow } from "@/components/F0Select/components/Arrow"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"

import type { EditableCellProps } from "."

import { resolveUnits } from "./hooks/useNumberCellLayout"
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

  // Date cells store an ISO string; format it here so a read-only date cell
  // reads as a date instead of a raw ISO string.
  const rawDateValue = editableColumn.dateConfig
    ? editableColumn.id !== undefined
      ? item[editableColumn.id as keyof R]
      : undefined
    : undefined
  const formattedDate =
    typeof rawDateValue === "string" &&
    rawDateValue &&
    isValid(parseISO(rawDateValue))
      ? format(parseISO(rawDateValue), "dd MMM yyyy")
      : undefined

  // Number/money/percentage cells show a unit next to the value (e.g. "%",
  // "€"); mirror it here so read-only cells match the editable ones.
  const units = resolveUnits(editableColumn.numberConfig, item)
  const unitsBefore = editableColumn.numberConfig?.unitsPosition === "before"
  const unit = units ? (
    <span className="shrink-0 select-none pt-px text-sm">{units}</span>
  ) : null

  return (
    <div
      className={cn(
        "flex h-full w-full min-w-0 items-center gap-1.5",
        // A leading icon aligns with the editable input's icon (8px from the
        // edge); without one the value keeps the 12px text inset.
        leadingIcon ? "pl-2" : "pl-3",
        // The select chevron aligns with the editable select cell's arrow
        // (~4px from the edge), so selects use a tighter right padding.
        isSelect
          ? "justify-between pr-1"
          : cn("pr-3", alignRight && "justify-end"),
        className
      )}
    >
      <span className="flex min-w-0 items-center gap-1.5">
        {leadingIcon && (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <F0Icon icon={leadingIcon} color={iconColor} />
          </span>
        )}
        {unitsBefore && unit}
        <span className="min-w-0 truncate">
          {formattedDate ??
            renderProperty(item, editableColumn, "editableTable", i18n)}
        </span>
        {!unitsBefore && unit}
      </span>
      {isSelect && (
        <span className="flex shrink-0 items-center">
          <Arrow open={false} size="sm" />
        </span>
      )}
    </div>
  )
}
