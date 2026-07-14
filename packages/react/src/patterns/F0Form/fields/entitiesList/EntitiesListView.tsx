import { format, isValid } from "date-fns"
import { useMemo } from "react"

import { Delete, Pencil } from "@/icons/app"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"

import type { EntitiesListItem, F0EntitiesListItemDefinition } from "./types"

/** Internal row shape: item values plus the stable key used as list identity. */
type Row = { __key: string } & Record<string, unknown>
/** A record fed to the collection: the row values plus its stable list id. */
type ListRecord = EntitiesListItem & { id: string }

/** A visible field of the list (schema key + resolved header label). */
export interface EntitiesListViewField {
  id: string
  label: string
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
  /** Opens the edit dialog for a row key (omitted when the field is disabled). */
  onEditRow?: (rowKey: string) => void
  /** Removes a row by key (omitted when the field is disabled). */
  onRemoveRow?: (rowKey: string) => void
  /** Whether a given row can be edited (drives the edit action's presence). */
  canEditRow: (rowKey: string) => boolean
  editLabel: string
  removeLabel: string
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
  canEditRow,
  editLabel,
  removeLabel,
}: EntitiesListViewProps) {
  const titleField = fields[0]
  const descriptionFields = fields.slice(1)

  // Map rows to collection records, using the stable `__key` as the record id.
  const items = useMemo<ListRecord[]>(
    () => rows.map(({ __key, ...item }) => ({ ...item, id: __key })),
    [rows]
  )

  const source = useDataCollectionSource<ListRecord>(
    {
      dataAdapter: {
        fetchData: () => ({ records: items }),
      },
      itemActions: (record: ListRecord) => {
        const id = String(record.id)
        return [
          ...(onEditRow && canEditRow(id)
            ? [
                {
                  label: editLabel,
                  icon: Pencil,
                  onClick: () => onEditRow(id),
                },
              ]
            : []),
          ...(onRemoveRow
            ? [
                {
                  label: removeLabel,
                  icon: Delete,
                  critical: true,
                  onClick: () => onRemoveRow(id),
                },
              ]
            : []),
        ]
      },
    },
    [items, onEditRow, onRemoveRow, canEditRow]
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
          fields: [],
        },
      },
    ],
    [listItem, titleField, descriptionFields]
  )

  // The list visualization wraps itself in full-page gutters (`px-page`) and
  // vertical padding meant for a standalone collection page; zero them so the
  // list sits flush inside the form field.
  return (
    <div className="w-full [&_.px-page]:!px-0 [&_.px-page]:!py-0">
      <OneDataCollection
        source={source}
        visualizations={visualizations as never}
        storage={false}
        disableUrlParams
      />
    </div>
  )
}
