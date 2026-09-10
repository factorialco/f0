import { format, isValid, parseISO } from "date-fns"
import type { Locale } from "date-fns"
import type { F0IconProps } from "@/components/F0Icon"
import { F0Icon } from "@/components/F0Icon"
import { Arrow } from "@/components/F0Select/components/Arrow"
import { RecordType } from "@/hooks/datasource/types/records.typings"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { useDateFnsLocale } from "@/lib/providers/l10n"
import { cn } from "@/lib/utils"
import { renderProperty } from "@/patterns/OneDataCollection/property-render"
import { resolveUnits } from "./hooks/useNumberCellLayout"
import { resolveTextCellIcon } from "./textIcon"
import type { EditableCellProps } from "."

type ReadOnlyCellContentProps<R extends RecordType> = Pick<
  EditableCellProps<R>,
  "editableColumn" | "item"
> & {
  /** Color for the leading icon (disabled cells pass a muted color). */
  iconColor?: F0IconProps["color"]
  /** Extra classes for the content container (background, muted text, ...). */
  className?: string
  /**
   * Show the field affordances (leading url/email/date icon, the select
   * chevron and number/money/percentage units). Disabled cells keep them so
   * the column still reads as its field type; display-only cells opt out and
   * render just the value as plain text.
   */
  showFieldAffordances?: boolean
}

/**
 * A date column shows the shared calendar icon (same as the editable date cell
 * and the F0Form date field); otherwise a text cell's url/email icon.
 */
function readOnlyLeadingIcon<R extends RecordType>(
  editableColumn: ReadOnlyCellContentProps<R>["editableColumn"]
) {
  if (editableColumn.dateConfig) {
    return getFieldInputIcon("date")
  }
  return resolveTextCellIcon(editableColumn.textConfig)
}

/**
 * Date cells store an ISO string; formatted here so a read-only date cell
 * reads as a date instead of a raw ISO string.
 */
function readOnlyDateLabel<R extends RecordType>(
  editableColumn: ReadOnlyCellContentProps<R>["editableColumn"],
  item: R,
  locale: Locale
): string | undefined {
  if (!editableColumn.dateConfig || editableColumn.id === undefined) {
    return undefined
  }
  const raw = item[editableColumn.id as keyof R]
  if (typeof raw !== "string" || !raw || !isValid(parseISO(raw))) {
    return undefined
  }
  return format(parseISO(raw), "dd MMM yyyy", { locale })
}

/**
 * A multi-select cell holds an array; read it back as the selected options'
 * labels, falling back to the raw values.
 */
function selectedOptionLabels<R extends RecordType>(
  editableColumn: ReadOnlyCellContentProps<R>["editableColumn"],
  item: R,
  values: unknown[]
): string {
  const config = editableColumn.selectConfig
  const opts =
    config && typeof config.options === "function"
      ? config.options(item)
      : config?.options
  const byValue = new Map<unknown, unknown>(
    (Array.isArray(opts) ? opts : [])
      // Options can include non-selectable separators (`{ type: "separator" }`);
      // keep only real items, which carry `value`/`label`.
      .filter((o): o is Extract<typeof o, { value: unknown }> => "value" in o)
      .map((o) => [o.value, o.label])
  )
  return values
    .map((v) => (byValue.get(v) as string | undefined) ?? String(v))
    .join(", ")
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
  showFieldAffordances = true,
}: ReadOnlyCellContentProps<R>) {
  const i18n = useI18n()
  const locale = useDateFnsLocale()

  const leadingIcon = showFieldAffordances
    ? readOnlyLeadingIcon(editableColumn)
    : undefined
  const isSelect =
    showFieldAffordances &&
    !editableColumn.disabledConfig?.hideSelectChevron &&
    !!editableColumn.selectConfig
  const alignRight = editableColumn.align === "right"

  const formattedDate = readOnlyDateLabel(editableColumn, item, locale)

  // Multi-select cells hold an array; show the selected options as a
  // comma-separated list of their labels (falling back to raw values).
  const rawValue =
    editableColumn.id !== undefined
      ? item[editableColumn.id as keyof R]
      : undefined
  const multiSelectLabel = Array.isArray(rawValue)
    ? selectedOptionLabels(editableColumn, item, rawValue)
    : undefined

  // Number/money/percentage cells show a unit next to the value (e.g. "%",
  // "€"); mirror it here so read-only cells match the editable ones. Treated as
  // a field affordance, so display-only cells opt out of it too.
  const units = showFieldAffordances
    ? resolveUnits(editableColumn.numberConfig, item)
    : undefined
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
        {leadingIcon ? (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <F0Icon icon={leadingIcon} color={iconColor} />
          </span>
        ) : null}
        {unitsBefore ? unit : null}
        <span className="min-w-0 truncate">
          {formattedDate ??
            multiSelectLabel ??
            renderProperty({
              item,
              property: editableColumn,
              visualization: "editableTable",
              i18n,
            })}
        </span>
        {!unitsBefore ? unit : null}
      </span>
      {isSelect ? (
        <span className="flex shrink-0 items-center">
          <Arrow open={false} size="sm" />
        </span>
      ) : null}
    </div>
  )
}
