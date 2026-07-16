import { format, isValid } from "date-fns"
import { type MouseEvent, useMemo } from "react"

import type { IconType } from "@/components/F0Icon"

import { ChevronRight, Delete, Pencil } from "@/icons/app"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type {
  EntitiesListItem,
  F0EntitiesListFieldTag,
  F0EntitiesListItemDefinition,
} from "./types"

/** A resolved custom row action for the list overflow menu. */
export interface EntitiesListViewAction {
  label: string
  icon: IconType
  critical?: boolean
  disabled?: boolean
  onClick: () => void
}

/** Internal row shape: item values plus the stable key used as list identity. */
type Row = { __key: string } & Record<string, unknown>
/** A record fed to the collection: the row values plus its stable list id. */
type ListRecord = EntitiesListItem & { id: string }

/** A visible field of the list (schema key + resolved header label). */
export interface EntitiesListViewField {
  id: string
  label: string
  /**
   * When set, this field renders as a read-only colored tag on the right side
   * of the row (instead of a description line). Returns the tag for a row, or
   * `undefined` to render nothing for that row.
   */
  tag?: (item: EntitiesListItem) => F0EntitiesListFieldTag | undefined
}

/** Maps an entities-list tag to a list-visualization field render result. */
function renderTag(tag: F0EntitiesListFieldTag) {
  return tag.type === "status"
    ? {
        type: "status" as const,
        value: {
          status: tag.status,
          label: tag.label,
          icon: tag.icon,
          tooltip: tag.tooltip,
        },
      }
    : {
        type: "dotTag" as const,
        value: { color: tag.color, label: tag.label },
      }
}

interface EntitiesListViewProps {
  /** Rows to display, each carrying a stable `__key`. */
  rows: ReadonlyArray<Row>
  /**
   * Visible fields in display order. The first is used as the row title and
   * the rest as description lines, unless overridden by `listItem`.
   */
  fields: ReadonlyArray<EntitiesListViewField>
  /** Optional overrides for the row title/description/avatar. */
  listItem?: F0EntitiesListItemDefinition
  /** Opens the edit dialog for a row key (omitted in navigable/disabled mode). */
  onEditRow?: (rowKey: string) => void
  /** Removes a row by key (omitted when the field is disabled). */
  onRemoveRow?: (rowKey: string) => void
  /**
   * Whether a row's remove is mid-flight (its `onRemove` hook hasn't settled),
   * so the remove action is disabled until it does.
   */
  isRemovePending?: (rowKey: string) => boolean
  /** Whether a given row can be edited (drives the edit action's presence). */
  canEditRow: (rowKey: string) => boolean
  /** Row click handler — opens the edit dialog (editable mode). */
  onRowClick?: (rowKey: string) => void
  /** Per-row link — makes the row navigable with a trailing arrow (nav mode). */
  getRowHref?: (rowKey: string) => string | undefined
  /** Custom per-row actions (archive/unarchive, …), shown in the overflow menu. */
  getRowActions?: (rowKey: string) => ReadonlyArray<EntitiesListViewAction>
  editLabel: string
  removeLabel: string
  viewLabel: string
}

/** Renders a value for a description line: dates format, arrays join. */
function formatValue(value: unknown): string {
  if (value === null || value === undefined) return ""
  if (value instanceof Date)
    return isValid(value) ? format(value, "dd MMM yyyy") : ""
  if (Array.isArray(value)) return value.map((v) => String(v)).join(", ")
  return String(value)
}

/**
 * Read-only OneDataCollection "list" visualization of an entities-list field's
 * items. Used as the dialog-mode alternative to the editable table: rows are
 * added/edited through the form dialog and each row exposes edit/remove actions.
 */
export function EntitiesListView({
  rows,
  fields,
  listItem,
  onEditRow,
  onRemoveRow,
  isRemovePending,
  canEditRow,
  onRowClick,
  getRowHref,
  getRowActions,
  editLabel,
  removeLabel,
  viewLabel,
}: EntitiesListViewProps) {
  const titleField = fields[0]
  // Fields after the title split into right-side tags and description lines.
  const restFields = fields.slice(1)
  const tagFields = restFields.filter((f) => f.tag)
  const descriptionFields = restFields.filter((f) => !f.tag)
  const navigable = !!getRowHref

  // Map rows to collection records, using the stable `__key` as the record id.
  const items = useMemo<ListRecord[]>(
    () => rows.map(({ __key, ...item }) => ({ ...item, id: __key })),
    [rows]
  )

  // Only attach itemActions when there's at least one — an empty actions
  // function still renders the (hover) actions container, which would cover the
  // navigable row's trailing arrow.
  const hasActions = !!onEditRow || !!onRemoveRow || !!getRowActions

  const source = useDataCollectionSource<ListRecord>(
    {
      dataAdapter: {
        fetchData: () => ({ records: items }),
      },
      // Navigable rows link to their href; editable rows open the dialog.
      itemUrl: getRowHref
        ? (record: ListRecord) => getRowHref(String(record.id))
        : undefined,
      itemOnClick: onRowClick
        ? (record: ListRecord) => () => onRowClick(String(record.id))
        : undefined,
      itemActions: hasActions
        ? (record: ListRecord) => {
            const id = String(record.id)
            return [
              // Edit is inline (`type: "primary"`) so the pencil stays visible;
              // custom actions and remove go into the overflow (⋮) menu.
              ...(onEditRow && canEditRow(id)
                ? [
                    {
                      label: editLabel,
                      icon: Pencil,
                      type: "primary" as const,
                      hideLabel: true,
                      onClick: () => onEditRow(id),
                    },
                  ]
                : []),
              ...(getRowActions?.(id) ?? []).map((action) => ({
                label: action.label,
                icon: action.icon,
                critical: action.critical,
                enabled: action.disabled ? false : undefined,
                onClick: action.onClick,
              })),
              // Remove respects `editableIds` (via `canEditRow`), same as edit:
              // a locked row (e.g. a pinned owner) is neither editable nor
              // removable.
              ...(onRemoveRow && canEditRow(id)
                ? [
                    {
                      label: removeLabel,
                      icon: Delete,
                      critical: true,
                      enabled: isRemovePending?.(id) ? false : undefined,
                      onClick: () => onRemoveRow(id),
                    },
                  ]
                : []),
            ]
          }
        : undefined,
    },
    [
      items,
      hasActions,
      onEditRow,
      onRemoveRow,
      isRemovePending,
      canEditRow,
      getRowActions,
      getRowHref,
      onRowClick,
    ]
  )

  const visualizations = useMemo(
    () => [
      {
        type: "list" as const,
        options: {
          itemDefinition: (record: ListRecord) => ({
            title:
              listItem?.title?.(record) ??
              (titleField ? formatValue(record[titleField.id]) : ""),
            description:
              listItem?.description?.(record) ??
              descriptionFields
                .map((field) => formatValue(record[field.id]))
                .filter(Boolean),
            avatar: listItem?.avatar?.(record),
          }),
          // Right-side fields: any tag fields first, then a trailing arrow for
          // navigable rows — but only when there are no row actions, since the
          // actions overlay the trailing area (the row still navigates on click
          // either way).
          fields: [
            ...tagFields.map((field) => ({
              label: field.label,
              render: (record: ListRecord) => {
                const tag = field.tag?.(record)
                return tag ? renderTag(tag) : undefined
              },
            })),
            ...(navigable && !hasActions
              ? [
                  {
                    label: "",
                    render: () => ({
                      type: "icon" as const,
                      value: {
                        icon: ChevronRight,
                        label: viewLabel,
                        hideLabel: true,
                      },
                    }),
                  },
                ]
              : []),
          ],
        },
      },
    ],
    [
      listItem,
      titleField,
      descriptionFields,
      tagFields,
      navigable,
      hasActions,
      viewLabel,
    ]
  )

  // The list visualization wraps itself in full-page gutters (`px-page`) and
  // vertical padding meant for a standalone collection page — plus the scroll
  // area keeps a bottom gutter (`pb-3`). Zero them so the list sits flush in the
  // form field and its help text lines up with the editable table's.
  //
  // OneDataCollection's action buttons (edit/remove/…) don't set `type`, so
  // embedded inside the parent `<form>` they default to `type="submit"` and
  // would submit it. Cancel the implicit submit for any such button here, while
  // leaving row links and real `type="button"` controls untouched.
  const suppressImplicitSubmit = (e: MouseEvent) => {
    const button = (e.target as HTMLElement).closest("button")
    if (button && button.type !== "button") e.preventDefault()
  }

  return (
    <div
      className="w-full [&_.px-page]:!px-0 [&_.px-page]:!py-0 [&_.overflow-auto]:!pb-0"
      onClickCapture={suppressImplicitSubmit}
    >
      <OneDataCollection
        source={source}
        visualizations={visualizations as never}
        storage={false}
        disableUrlParams
      />
    </div>
  )
}
