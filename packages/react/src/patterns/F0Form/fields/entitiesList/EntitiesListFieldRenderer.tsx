import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form"
import { z, ZodTypeAny } from "zod"

import type { OneEditableTableColumn } from "@/experimental/OneEditableTable"

import { OneEditableTable } from "@/experimental/OneEditableTable"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"

import type { ResolvedField } from "../types"
import type { F0EntitiesListField, EntitiesListItem } from "./types"

import { f0FormField, isZodType, unwrapZodSchema } from "../../f0Schema"
import { openFormDialog } from "../../openFormDialog"

/**
 * With more than this many item-schema properties, adding and editing happen
 * through a form dialog instead of inline cells.
 */
const MAX_INLINE_FIELDS = 2

/** A single field-level validation message. */
interface FieldMessage {
  message?: string
}

/**
 * react-hook-form stores errors for an array field as an array-shaped object
 * keyed by index, with an optional array-level error under `root`/message.
 * Each item error is keyed by the item-schema property name.
 */
type EntitiesListError =
  | ({
      message?: string
      root?: FieldMessage
    } & Record<number, Record<string, FieldMessage | undefined> | undefined>)
  | undefined

/**
 * Internal row record: the item values plus a stable key used as the React
 * key and the drag identity, so reorders keep row identity (and focus).
 * The key property is prefixed to avoid clashing with item-schema fields.
 */
type EntitiesListRow = { __key: string } & Record<string, unknown>

interface EntitiesListFieldRendererProps {
  field: ResolvedField<F0EntitiesListField>
  formField: ControllerRenderProps<FieldValues>
  /**
   * The react-hook-form error for this field. Typed loosely because array
   * errors are index-keyed with an optional array-level `root`, which does not
   * match the flat `FieldError` shape.
   */
  error?: unknown
}

/** Coerce an unknown form value into a normalized list of items. */
function normalizeValue(value: unknown): EntitiesListItem[] {
  if (!Array.isArray(value)) return []
  return value.map((item) =>
    typeof item === "object" && item !== null
      ? { ...(item as EntitiesListItem) }
      : {}
  )
}

/** Capitalizes the first letter of a schema property name for column headers. */
function humanizeKey(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1)
}

/**
 * Renders a sortable, editable table for an array of objects whose shape is
 * defined by the field's item schema. Columns and cell types are derived from
 * the schema (`string` → text, `number` → number, `enum` → select).
 *
 * With up to {@link MAX_INLINE_FIELDS} schema properties, rows are edited
 * inline; with more, adding and editing happen through a form dialog (the
 * FormInDialog pattern) and rows show a pencil action. `editableIds`
 * restricts which items can be edited in either mode.
 */
export function EntitiesListFieldRenderer({
  field,
  formField,
  error: rawError,
}: EntitiesListFieldRendererProps) {
  const error = rawError as EntitiesListError
  const { forms } = useI18n()
  const translations = forms.entitiesList
  const keyCounter = useRef(0)

  // After a submit attempt, errors show on every cell (even untouched ones).
  const { formState } = useFormContext()
  const submitCount = formState.submitCount

  /**
   * Error-display gating so a freshly added (still empty) row doesn't light up
   * with validation errors before the user had a chance to fill it:
   * - Rows added inline start "fresh"; their cells show no error.
   * - A cell shows its error once it has been edited ("touched").
   * - A submit attempt reveals all errors.
   */
  const freshRowKeysRef = useRef<Set<string>>(new Set())
  const touchedCellsRef = useRef<Set<string>>(new Set())
  const shouldShowCellError = useCallback(
    (rowKey: string, columnId: string): boolean => {
      if (submitCount > 0) return true
      if (!freshRowKeysRef.current.has(rowKey)) return true
      return touchedCellsRef.current.has(`${rowKey}:${columnId}`)
    },
    [submitCount]
  )

  const itemShape: Record<string, ZodTypeAny> = field.itemSchema?.shape ?? {}
  const itemKeys = Object.keys(itemShape)
  // Explicit `supportInlineEditing` wins; otherwise fall back to the
  // column-count heuristic (inline for small lists, dialog for larger ones).
  const useDialogMode =
    field.supportInlineEditing != null
      ? !field.supportInlineEditing
      : itemKeys.length > MAX_INLINE_FIELDS

  const makeRows = useCallback(
    (value: unknown): EntitiesListRow[] =>
      normalizeValue(value).map((item) => ({
        __key: `row-${keyCounter.current++}`,
        ...item,
      })),
    []
  )

  const [rows, setRows] = useState<EntitiesListRow[]>(() =>
    makeRows(formField.value)
  )

  // Track the last value we pushed to the form so the sync effect below can
  // tell our own updates apart from external ones (e.g. a form reset).
  const lastCommittedRef = useRef<string>(
    JSON.stringify(normalizeValue(formField.value))
  )

  // Reseed from the form value when it changes externally (async defaults,
  // programmatic reset). Skipped for our own commits to preserve keys.
  useEffect(() => {
    const incoming = JSON.stringify(normalizeValue(formField.value))
    if (incoming !== lastCommittedRef.current) {
      lastCommittedRef.current = incoming
      setRows(makeRows(formField.value))
    }
  }, [formField.value, makeRows])

  const commit = useCallback(
    (next: EntitiesListRow[]) => {
      setRows(next)
      const value: EntitiesListItem[] = next.map(
        ({ __key: _key, ...item }) => item
      )
      lastCommittedRef.current = JSON.stringify(value)
      formField.onChange(value)
    },
    [formField]
  )

  /**
   * Editable cells emit string values; coerce them back to the type declared
   * in the item schema (currently numbers) so Zod validation sees the right
   * type. Dialog submissions are already parsed by Zod and skip this.
   */
  const coerceRow = useCallback(
    (row: EntitiesListRow): EntitiesListRow => {
      const next = { ...row }
      for (const key of itemKeys) {
        const inner = unwrapZodSchema(itemShape[key])
        if (isZodType(inner, "ZodNumber") && typeof next[key] === "string") {
          const raw = (next[key] as string).trim()
          next[key] = raw === "" ? undefined : Number(raw)
        }
      }
      return next
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemShape derives from field.itemSchema
    [field.itemSchema]
  )

  const isDisabled = !!field.disabled

  /**
   * Whether an item can be edited: every item when `editableIds` is omitted;
   * otherwise items whose `id` is listed. Items without an `id` (rows just
   * added locally) stay editable.
   */
  const isRowEditable = useCallback(
    (row: EntitiesListRow): boolean => {
      if (!field.editableIds) return true
      const id = row.id
      if (id === undefined || id === null) return true
      return field.editableIds.includes(id as string | number)
    },
    [field.editableIds]
  )

  // --- Dialog mode (more than MAX_INLINE_FIELDS schema properties) ----------

  /**
   * Form schema for the add/edit dialog, derived from the item schema. Each
   * property is tagged with F0 field config on a fresh clone (via
   * `.describe()`) so the original item schema stays untouched.
   */
  const dialogSchema = useMemo(() => {
    const shape: Record<string, ZodTypeAny> = {}
    for (const key of itemKeys) {
      const original = itemShape[key]
      const clone = original.describe(original.description ?? "")
      const inner = unwrapZodSchema(original)
      const columnConfig = field.columns?.[key]
      const label = columnConfig?.label ?? humanizeKey(key)
      const placeholder = columnConfig?.placeholder
      if (isZodType(inner, "ZodEnum")) {
        const values: string[] = inner._def.values
        shape[key] = f0FormField(
          clone as never,
          {
            label,
            placeholder,
            options: values.map((value) => ({ value, label: value })),
          } as never
        )
      } else {
        shape[key] = f0FormField(
          clone as never,
          { label, placeholder } as never
        )
      }
    }
    return z.object(shape)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemShape/itemKeys derive from field.itemSchema
  }, [field.itemSchema, field.columns])

  /**
   * Blank item values: honor a schema `.default()` first (e.g. a hidden
   * `archived: z.boolean().default(false)`), then start strings empty and
   * leave the rest unset.
   */
  const makeEmptyItem = useCallback((): EntitiesListItem => {
    const item: EntitiesListItem = {}
    for (const key of itemKeys) {
      const schema = itemShape[key]
      if (isZodType(schema, "ZodDefault")) {
        item[key] = schema._def.defaultValue()
        continue
      }
      const inner = unwrapZodSchema(schema)
      if (isZodType(inner, "ZodString")) item[key] = ""
    }
    return item
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemShape derives from field.itemSchema
  }, [field.itemSchema])

  // Defaults are read through a ref at dialog-open time, so a single form
  // definition serves both the add (empty) and edit (row values) dialogs.
  const dialogDefaultsRef = useRef<EntitiesListItem>({})
  const dialogFormDefinition = useF0FormDefinition({
    name: `${field.id}-item`,
    schema: dialogSchema,
    defaultValues: async () => dialogDefaultsRef.current,
    onSubmit: async () => ({ success: true }),
  })

  const openItemDialog = useCallback(
    async (mode: "add" | "edit", row?: EntitiesListRow) => {
      if (mode === "edit" && row) {
        const { __key: _key, ...item } = row
        dialogDefaultsRef.current = item
      } else {
        dialogDefaultsRef.current = makeEmptyItem()
      }

      const addLabel = field.labels?.addButton ?? translations.add
      const editTitle = field.labels?.editDialogTitle ?? translations.edit
      const result = await openFormDialog({
        formDefinition: dialogFormDefinition,
        title: mode === "add" ? addLabel : editTitle,
        description:
          mode === "add" ? field.labels?.addButtonDescription : undefined,
        ...(mode === "add" ? { labels: { submit: addLabel } } : {}),
      })
      if (!result.submitted) return

      if (mode === "add") {
        commit([
          ...rows,
          { __key: `row-${keyCounter.current++}`, ...result.data },
        ])
      } else if (row) {
        commit(
          rows.map((r) =>
            r.__key === row.__key ? { ...r, ...result.data } : r
          )
        )
      }
      // Re-validate the array after the dialog closes
      formField.onBlur()
    },
    [
      rows,
      commit,
      makeEmptyItem,
      dialogFormDefinition,
      field.labels,
      translations,
      formField,
    ]
  )

  // ---------------------------------------------------------------------------

  const isAtLimit = field.maxItems != null && rows.length >= field.maxItems
  const canAddItems = field.canAddItems !== false

  // Hidden columns keep their value in each row (so row actions can read them)
  // but aren't rendered as editable cells.
  const visibleKeys = itemKeys.filter((key) => !field.columns?.[key]?.hidden)

  const columns: ReadonlyArray<OneEditableTableColumn<EntitiesListRow>> =
    visibleKeys.map((key) => {
      const inner = unwrapZodSchema(itemShape[key])
      const columnConfig = field.columns?.[key]
      const base = {
        id: key,
        label: columnConfig?.label ?? humanizeKey(key),
        width: columnConfig?.width,
        inputPlaceholder: columnConfig?.placeholder,
      }

      // In dialog mode cells are read-only; editing happens via the pencil
      // dialog. Inline mode disables cells per row via `editableIds`.
      const editTypeFor = (
        row: EntitiesListRow,
        editable: "text" | "number" | "select"
      ) => {
        if (useDialogMode) return "display-only" as const
        if (isDisabled || !isRowEditable(row)) return "disabled" as const
        return editable
      }

      if (isZodType(inner, "ZodEnum")) {
        const values: string[] = inner._def.values
        return {
          ...base,
          editType: (row: EntitiesListRow) => editTypeFor(row, "select"),
          selectConfig: {
            options: values.map((value) => ({ value, label: value })),
          },
        }
      }

      if (isZodType(inner, "ZodNumber")) {
        return {
          ...base,
          editType: (row: EntitiesListRow) => editTypeFor(row, "number"),
        }
      }

      return {
        ...base,
        editType: (row: EntitiesListRow) => editTypeFor(row, "text"),
      }
    })

  // Array-level error (e.g. min items). Cell errors render as an error border
  // on the offending cell with the message in a hover/focus tooltip.
  const rootError = error?.root?.message ?? error?.message
  const getCellError = useCallback(
    (row: EntitiesListRow, columnId: string, index: number) => {
      if (!shouldShowCellError(row.__key, columnId)) return undefined
      return error?.[index]?.[columnId]?.message
    },
    [error, shouldShowCellError]
  )

  // Map the field's custom row actions onto OneEditableTable's action shape,
  // supplying `update`/`remove` helpers that commit back to the form value.
  const rowActionsFn = field.rowActions
  const rowActions = rowActionsFn
    ? (row: EntitiesListRow, index: number) => {
        const { __key: _key, ...item } = row
        return rowActionsFn(item, index).map((action) => ({
          icon: action.icon,
          label: action.label,
          showLabel: action.showLabel,
          critical: action.critical,
          disabled: action.disabled,
          onClick: () =>
            action.onClick({
              item,
              index,
              update: (partial) =>
                commit(
                  rows.map((r) =>
                    r.__key === row.__key ? { ...r, ...partial } : r
                  )
                ),
              remove: () => {
                commit(rows.filter((r) => r.__key !== row.__key))
                formField.onBlur()
              },
            }),
        }))
      }
    : undefined

  // Block adding another row while an existing one is still invalid (e.g. the
  // row the user just added and hasn't filled out yet).
  const hasInvalidRow = useMemo(
    () =>
      rows.some(({ __key: _key, ...item }) => {
        const result = field.itemSchema?.safeParse(item)
        return result ? !result.success : false
      }),
    [rows, field.itemSchema]
  )

  return (
    <div className="flex flex-col gap-2">
      <OneEditableTable<EntitiesListRow>
        items={rows}
        getRowId={(row) => row.__key}
        columns={columns}
        getCellError={getCellError}
        onCellChange={async ({ updatedItem, changes }) => {
          const coerced = coerceRow(updatedItem)
          // The edited cells are now fair game for error display
          for (const columnId of Object.keys(changes)) {
            touchedCellsRef.current.add(`${coerced.__key}:${columnId}`)
          }
          commit(
            rows.map((row) => (row.__key === coerced.__key ? coerced : row))
          )
        }}
        sortableRows={!isDisabled && field.sortable !== false}
        onReorderRows={({ items }) => commit(items)}
        onRemoveRow={
          isDisabled
            ? undefined
            : (row) => {
                commit(rows.filter((r) => r.__key !== row.__key))
                formField.onBlur()
              }
        }
        onEditRow={
          useDialogMode && !isDisabled
            ? (row) => openItemDialog("edit", row)
            : undefined
        }
        canEditRow={isRowEditable}
        rowActions={rowActions}
        addRow={
          isDisabled || isAtLimit || !canAddItems
            ? undefined
            : {
                label: field.labels?.addButton ?? translations.add,
                disabled: hasInvalidRow,
                onClick: () => {
                  if (useDialogMode) {
                    openItemDialog("add")
                    return
                  }
                  const key = `row-${keyCounter.current++}`
                  // Fresh rows don't show validation errors until touched
                  freshRowKeysRef.current.add(key)
                  commit([...rows, { __key: key, ...makeEmptyItem() }])
                },
              }
        }
      />

      {rootError && (
        <p className="text-sm font-medium text-f1-foreground-critical">
          {rootError}
        </p>
      )}
    </div>
  )
}
