import { parseISO } from "date-fns"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form"
import { z, ZodTypeAny } from "zod"

import type { F0FormEditableTableColumn } from "@/experimental/F0FormEditableTable"

import { F0Button } from "@/components/F0Button"
import { F0FormEditableTable } from "@/experimental/F0FormEditableTable"
import { Add } from "@/icons/app"
import { dialogs } from "@/lib/providers/dialogs-alike"
import type { ConfirmDialogOptions } from "@/lib/providers/dialogs-alike/types"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { useF0FormDefinition } from "@/patterns/F0WizardForm/useF0FormDefinition"

import type { ResolvedField } from "../types"
import type { F0EntitiesListField, EntitiesListItem } from "./types"

import type { EntitiesListViewAction } from "./EntitiesListView"

import { EntitiesListView } from "./EntitiesListView"

import {
  f0FormField,
  getF0Config,
  isZodType,
  unwrapZodSchema,
} from "../../f0Schema"
import { openFormDialog } from "../../openFormDialog"
import { isFieldRequired } from "../schema"
import { resolveEntitiesListCell } from "./resolveCell"

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

/**
 * The field header "add" button. When disabled it shows a hover tooltip
 * explaining why it's blocked; when enabled it shows the optional `tooltip`
 * hint (the create dialog's description).
 */
function AddButton({
  config,
}: {
  config: {
    label: string
    disabled: boolean
    /** Tooltip shown while disabled, explaining why adding is blocked. */
    disabledTooltip?: string
    /** Hint tooltip shown while enabled (the create dialog description). */
    tooltip?: string
    onClick: () => void
  }
}) {
  const button = (
    <F0Button
      type="button"
      variant="outline"
      size="md"
      icon={Add}
      label={config.label}
      onClick={config.onClick}
      disabled={config.disabled}
    />
  )
  const tooltip = config.disabled ? config.disabledTooltip : config.tooltip
  if (!tooltip) return button
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {config.disabled ? (
            <span className="inline-flex cursor-not-allowed [&_button]:pointer-events-none">
              {button}
            </span>
          ) : (
            <span className="inline-flex">{button}</span>
          )}
        </TooltipTrigger>
        <TooltipContent side="top">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
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
 * Builds the form schema for an add/edit dialog from an item schema. Each
 * property is tagged with F0 field config on a fresh clone (via `.describe()`)
 * so the original item schema stays untouched. Fields authored with an
 * `f0FormField` shortcut already carry their config and are reused as-is.
 */
function buildDialogSchema(
  itemSchema: z.ZodObject<z.ZodRawShape> | undefined,
  columns: F0EntitiesListField["columns"]
): z.ZodObject<z.ZodRawShape> {
  const shape: Record<string, ZodTypeAny> = {}
  const itemShape = itemSchema?.shape ?? {}
  for (const key of Object.keys(itemShape)) {
    const original = itemShape[key]
    if (getF0Config(original)) {
      shape[key] = original
      continue
    }
    const clone = original.describe(original.description ?? "")
    const inner = unwrapZodSchema(original)
    const columnConfig = columns?.[key]
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
      shape[key] = f0FormField(clone as never, { label, placeholder } as never)
    }
  }
  return z.object(shape)
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

  // Resolved user-facing labels, each falling back to an i18n default.
  const labels = field.labels
  const addButtonLabel = labels?.addButton ?? translations.add
  const createTitle = labels?.create?.title ?? addButtonLabel
  const createDescription = labels?.create?.description
  const updateTitle = labels?.update?.title ?? translations.edit
  const updateDescription = labels?.update?.description
  // Visible edit-action text (editable table); the icon-only list-view action
  // falls back to the update dialog title so its tooltip stays meaningful.
  const editLabel = labels?.edit ?? translations.edit
  const editTooltipLabel =
    labels?.edit ?? labels?.update?.title ?? translations.edit
  const removeLabel = labels?.remove ?? translations.remove

  // After a submit attempt, errors show on every cell (even untouched ones) —
  // except when the field auto-saves, since auto-save submits silently and
  // would otherwise light up a just-added row before the user edits it.
  const { formState } = useFormContext()
  const revealAllOnSubmit = formState.submitCount > 0 && !field.autoSave

  /**
   * Error-display gating so a freshly added (still empty) row doesn't light up
   * with validation errors before the user had a chance to fill it:
   * - Rows added inline start "fresh"; their cells show no error.
   * - A cell shows its error once it has been edited ("touched").
   * - An explicit submit reveals all errors (auto-save doesn't).
   */
  const freshRowKeysRef = useRef<Set<string>>(new Set())
  const touchedCellsRef = useRef<Set<string>>(new Set())
  const shouldShowCellError = useCallback(
    (rowKey: string, columnId: string): boolean => {
      if (revealAllOnSubmit) return true
      if (!freshRowKeysRef.current.has(rowKey)) return true
      return touchedCellsRef.current.has(`${rowKey}:${columnId}`)
    },
    [revealAllOnSubmit]
  )

  const itemShape: Record<string, ZodTypeAny> = field.itemSchema?.shape ?? {}
  const itemKeys = Object.keys(itemShape)
  // The list-view visualization is always read-only + dialog-edited, so it
  // never uses inline cells regardless of the field count.
  const useListView = field.visualization === "list-view"
  // Separate create/update form definitions can't be inline-edited (their
  // dialogs differ and run their own onSubmit), so they always use the dialog.
  const hasFormDefinitions =
    field.createFormDefinition != null || field.updateFormDefinition != null
  // Explicit `supportInlineEditing` wins; otherwise fall back to the
  // column-count heuristic (inline for small lists, dialog for larger ones).
  // `list-view` and split form definitions imply dialog editing.
  const useDialogMode =
    useListView ||
    hasFormDefinitions ||
    (field.supportInlineEditing != null
      ? !field.supportInlineEditing
      : itemKeys.length > MAX_INLINE_FIELDS)

  // Fields that render as date cells. The date cell works with ISO strings, so
  // their values are stored as strings on the row and converted back to `Date`
  // for the form value (which the schema validates as `z.date()`).
  const dateKeys = useMemo(
    () =>
      itemKeys.filter(
        (key) => resolveEntitiesListCell(itemShape[key])?.kind === "date"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemShape derives from field.itemSchema
    [field.itemSchema]
  )

  /** Form item (`Date`) → row item (ISO string) for date fields. */
  const formItemToRow = useCallback(
    (item: EntitiesListItem): EntitiesListItem => {
      if (dateKeys.length === 0) return item
      const next = { ...item }
      for (const key of dateKeys) {
        if (next[key] instanceof Date) {
          next[key] = (next[key] as Date).toISOString()
        }
      }
      return next
    },
    [dateKeys]
  )

  /** Row item (ISO string) → form item (`Date`) for date fields. */
  const rowItemToForm = useCallback(
    (item: EntitiesListItem): EntitiesListItem => {
      if (dateKeys.length === 0) return item
      const next = { ...item }
      for (const key of dateKeys) {
        const value = next[key]
        if (typeof value === "string" && value !== "") {
          const parsed = parseISO(value)
          next[key] = Number.isNaN(parsed.getTime()) ? undefined : parsed
        } else if (value === "") {
          next[key] = undefined
        }
      }
      return next
    },
    [dateKeys]
  )

  const makeRows = useCallback(
    (value: unknown): EntitiesListRow[] =>
      normalizeValue(value).map((item) => ({
        __key: `row-${keyCounter.current++}`,
        ...formItemToRow(item),
      })),
    [formItemToRow]
  )

  const [rows, setRows] = useState<EntitiesListRow[]>(() =>
    makeRows(formField.value)
  )

  // Keys of rows whose `onRemove` persistence hook is currently in flight, so
  // the row's remove action can be disabled until it settles.
  const [removingKeys, setRemovingKeys] = useState<Set<string>>(() => new Set())
  const isRemovePending = useCallback(
    (rowKey: string) => removingKeys.has(rowKey),
    [removingKeys]
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
      const value: EntitiesListItem[] = next.map(({ __key: _key, ...item }) =>
        rowItemToForm(item)
      )
      lastCommittedRef.current = JSON.stringify(value)
      formField.onChange(value)
    },
    [formField, rowItemToForm]
  )

  const onRemove = field.onRemove
  const confirmRemove = field.confirmRemove
  /**
   * Confirmation-gated, persistence-aware row removal — the delete counterpart
   * to the add/edit dialogs. Shared by the editable table, the list-view remove
   * action and the `rowActions` `remove()` helper, so every removal path:
   *
   * 1. Confirms first (custom copy via `confirmRemove`, else a generic default),
   *    per the CRUD "Delete & destructive" doc. Cancelling leaves the row.
   * 2. Runs `onRemove` (if provided) with the item; a thrown error or a
   *    `{ success: false }` result keeps the row and shows an error, and the
   *    action is disabled while the hook is in flight.
   * 3. Only splices the row from the field value on success.
   */
  const performRemove = useCallback(
    async (row: EntitiesListRow) => {
      const { __key, ...rawItem } = row
      // Hand callbacks the item in its form shape (ISO date strings → `Date`),
      // matching the row value type the schema declares.
      const item = rowItemToForm(rawItem)

      const confirmOptions: ConfirmDialogOptions = confirmRemove
        ? confirmRemove(item)
        : {
            type: "critical",
            title: translations.removeConfirmTitle,
            msg: translations.removeConfirmMessage,
            confirm: { label: removeLabel },
          }
      const confirmed = await dialogs.confirmation(confirmOptions)
      if (!confirmed) return

      if (onRemove) {
        setRemovingKeys((prev) => new Set(prev).add(__key))
        try {
          const result = await onRemove(item)
          if (result && result.success === false) {
            await dialogs.alert({
              type: "critical",
              title: translations.removeErrorTitle,
              msg: translations.removeError,
            })
            return
          }
        } catch {
          await dialogs.alert({
            type: "critical",
            title: translations.removeErrorTitle,
            msg: translations.removeError,
          })
          return
        } finally {
          setRemovingKeys((prev) => {
            const next = new Set(prev)
            next.delete(__key)
            return next
          })
        }
      }

      commit(rows.filter((r) => r.__key !== __key))
      formField.onBlur()
    },
    [
      rows,
      commit,
      formField,
      onRemove,
      confirmRemove,
      rowItemToForm,
      translations,
      removeLabel,
    ]
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

  /**
   * Whether an item can be removed: independent of {@link isRowEditable}.
   * Every item when `removableIds` is omitted; otherwise items whose `id` is
   * listed. Items without an `id` (rows just added locally) stay removable.
   */
  const isRowRemovable = useCallback(
    (row: EntitiesListRow): boolean => {
      if (!field.removableIds) return true
      const id = row.id
      if (id === undefined || id === null) return true
      return field.removableIds.includes(id as string | number)
    },
    [field.removableIds]
  )

  // --- Dialog editing (dialog mode, or a split create/update schema) --------

  /**
   * Blank item values for a given schema: honor a `.default()` first (e.g. a
   * hidden `archived: z.boolean().default(false)`), then start strings empty
   * and multi-select arrays empty, and leave the rest unset.
   */
  const makeEmptyItem = useCallback(
    (schema: z.ZodObject<z.ZodRawShape> | undefined): EntitiesListItem => {
      const item: EntitiesListItem = {}
      const shape = schema?.shape ?? {}
      for (const key of Object.keys(shape)) {
        const propSchema = shape[key]
        if (isZodType(propSchema, "ZodDefault")) {
          item[key] = propSchema._def.defaultValue()
          continue
        }
        const inner = unwrapZodSchema(propSchema)
        if (isZodType(inner, "ZodString")) item[key] = ""
        else if (isZodType(inner, "ZodArray")) item[key] = []
        // A boolean field (e.g. an optional switch/checkbox) has no inline cell,
        // so seed `false` — otherwise a new inline row can never satisfy the
        // required `z.boolean()` and the add button stays blocked.
        else if (isZodType(inner, "ZodBoolean")) item[key] = false
      }
      return item
    },
    []
  )

  // Dialog form derived from the item schema, used when the field doesn't bring
  // its own create/update form definitions. Its submit is a no-op — the item is
  // committed to the parent form value (shared submit).
  const dialogSchema = useMemo(
    () => buildDialogSchema(field.itemSchema, field.columns),
    [field.itemSchema, field.columns]
  )
  const internalDialogDefinition = useF0FormDefinition({
    name: `${field.id}-item`,
    schema: dialogSchema,
    defaultValues: {},
    onSubmit: async () => ({ success: true }),
  })
  // User-provided create/update forms (each with its own onSubmit) win.
  const createFormDefinition =
    field.createFormDefinition ?? internalDialogDefinition
  const updateFormDefinition =
    field.updateFormDefinition ?? internalDialogDefinition

  const openItemDialog = useCallback(
    async (mode: "add" | "edit", row?: EntitiesListRow) => {
      const baseDef =
        mode === "add" ? createFormDefinition : updateFormDefinition

      // Seed this open's defaults, overriding the definition's own (a fresh
      // dialog form is mounted per open). For add with a user-provided create
      // form, keep that form's own defaults instead.
      let formDefinition = baseDef
      const seedDefaults = (seed: EntitiesListItem) => {
        formDefinition = {
          ...baseDef,
          defaultValues: undefined,
          asyncDefaultValues: (async () =>
            seed) as typeof baseDef.asyncDefaultValues,
        }
      }
      if (mode === "edit" && row) {
        const { __key: _key, ...item } = row
        // The dialog form validates dates as `Date`, so convert the row's ISO
        // date strings back before seeding.
        seedDefaults(rowItemToForm(item))
      } else if (mode === "add" && !field.createFormDefinition) {
        seedDefaults(makeEmptyItem(field.itemSchema))
      }

      const result = await openFormDialog({
        formDefinition,
        title: mode === "add" ? createTitle : updateTitle,
        description: mode === "add" ? createDescription : updateDescription,
        ...(mode === "add" ? { labels: { submit: addButtonLabel } } : {}),
      })
      if (!result.submitted) return

      // Dialog data has `Date`s; store ISO strings on the row (commit converts
      // them back to `Date` for the form value).
      const rowData = formItemToRow(result.data as EntitiesListItem)
      if (mode === "add") {
        commit([...rows, { __key: `row-${keyCounter.current++}`, ...rowData }])
      } else if (row) {
        commit(
          rows.map((r) => (r.__key === row.__key ? { ...r, ...rowData } : r))
        )
      }
      // Re-validate the array after the dialog closes
      formField.onBlur()
    },
    [
      rows,
      commit,
      makeEmptyItem,
      field.itemSchema,
      field.createFormDefinition,
      rowItemToForm,
      formItemToRow,
      createFormDefinition,
      updateFormDefinition,
      createTitle,
      updateTitle,
      createDescription,
      updateDescription,
      addButtonLabel,
      formField,
    ]
  )

  // ---------------------------------------------------------------------------

  const isAtLimit = field.maxItems != null && rows.length >= field.maxItems
  const canAddItems = field.canAddItems !== false

  // In dialog mode cells are read-only; editing happens via the pencil dialog.
  // Inline mode disables cells per row via `editableIds`.
  const editTypeFor = (
    row: EntitiesListRow,
    editable: "text" | "number" | "money" | "date" | "select" | "multiselect"
  ) => {
    if (useDialogMode) return "display-only" as const
    if (isDisabled || !isRowEditable(row)) return "disabled" as const
    return editable
  }

  // Build one column per item-schema field, skipping:
  // - hidden columns (value kept for row actions, no cell), and
  // - fields whose type has no inline cell (e.g. boolean, date, file); those
  //   keep their value but aren't shown as a column (editable via the dialog).
  const columns: ReadonlyArray<F0FormEditableTableColumn<EntitiesListRow>> =
    itemKeys
      .map((key): F0FormEditableTableColumn<EntitiesListRow> | null => {
        if (field.columns?.[key]?.hidden) return null
        const resolution = resolveEntitiesListCell(itemShape[key])
        if (!resolution) return null

        const columnConfig = field.columns?.[key]
        const base = {
          id: key,
          label:
            columnConfig?.label ??
            getF0Config(itemShape[key])?.label ??
            humanizeKey(key),
          width: columnConfig?.width,
          inputPlaceholder: columnConfig?.placeholder,
        }

        switch (resolution.kind) {
          case "select":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "select"),
              selectConfig: { options: resolution.options },
            }
          case "multiselect":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "multiselect"),
              selectConfig: { options: resolution.options },
            }
          case "number":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "number"),
              numberConfig: {
                ...(resolution.units ? { units: resolution.units } : {}),
                ...(columnConfig?.grouping !== undefined
                  ? { grouping: columnConfig.grouping }
                  : {}),
              },
            }
          case "money":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "money"),
              numberConfig: {
                ...(resolution.units ? { units: resolution.units } : {}),
                ...(columnConfig?.grouping !== undefined
                  ? { grouping: columnConfig.grouping }
                  : {}),
              },
            }
          case "date":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "date"),
              // Present so read-only cells format the value as a date.
              dateConfig: {},
            }
          case "text":
            return {
              ...base,
              editType: (row) => editTypeFor(row, "text"),
              textConfig: { inputType: resolution.inputType },
            }
        }
      })
      .filter(
        (column): column is F0FormEditableTableColumn<EntitiesListRow> =>
          column !== null
      )

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

  // Map the field's custom row actions onto F0FormEditableTable's action shape,
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
              // Route through the confirm + persist path so custom actions that
              // call remove() also confirm and hit onRemove.
              remove: () => void performRemove(row),
            }),
        }))
      }
    : undefined

  // Block adding another row while any existing one is invalid. Distinguish the
  // common case — a freshly added row the user hasn't filled out yet — from an
  // error on an already-existing row, so the tooltip can explain the right one.
  const { hasInvalidRow, hasInvalidExistingRow } = useMemo(() => {
    let anyInvalid = false
    let existingInvalid = false
    for (const { __key, ...item } of rows) {
      // Validate the form representation (ISO date strings → Date).
      const result = field.itemSchema?.safeParse(rowItemToForm(item))
      if (result && !result.success) {
        anyInvalid = true
        if (!freshRowKeysRef.current.has(__key)) existingInvalid = true
      }
    }
    return { hasInvalidRow: anyInvalid, hasInvalidExistingRow: existingInvalid }
  }, [rows, field.itemSchema, rowItemToForm])

  // Shared add affordance shown in the field header. Kept visible (just
  // disabled) while the field is disabled (e.g. submitting) or at the max-items
  // limit, so it doesn't pop in/out; only hidden when adding is turned off.
  const addConfig = !canAddItems
    ? undefined
    : {
        label: addButtonLabel,
        disabled: isDisabled || isAtLimit || hasInvalidRow,
        disabledTooltip: isAtLimit
          ? translations.addBlockedMaxHint
          : hasInvalidRow
            ? hasInvalidExistingRow
              ? translations.addBlockedErrorHint
              : translations.addBlockedHint
            : undefined,
        // When enabled, hint the create dialog's description on hover.
        tooltip: createDescription,
        onClick: () => {
          if (useDialogMode) {
            openItemDialog("add")
            return
          }
          const key = `row-${keyCounter.current++}`
          // Fresh rows don't show validation errors until touched
          freshRowKeysRef.current.add(key)
          commit([...rows, { __key: key, ...makeEmptyItem(field.itemSchema) }])
        },
      }

  // Row callbacks keyed by the stable row key, for the list-view visualization.
  const findRow = useCallback(
    (rowKey: string) => rows.find((r) => r.__key === rowKey),
    [rows]
  )
  const editRowByKey = useCallback(
    (rowKey: string) => {
      const row = findRow(rowKey)
      if (row) openItemDialog("edit", row)
    },
    [findRow, openItemDialog]
  )
  const removeRowByKey = useCallback(
    (rowKey: string) => {
      const row = findRow(rowKey)
      if (row) void performRemove(row)
    },
    [findRow, performRemove]
  )
  const canEditRowByKey = useCallback(
    (rowKey: string) => {
      const row = findRow(rowKey)
      return row ? isRowEditable(row) : true
    },
    [findRow, isRowEditable]
  )
  const canRemoveRowByKey = useCallback(
    (rowKey: string) => {
      const row = findRow(rowKey)
      return row ? isRowRemovable(row) : true
    },
    [findRow, isRowRemovable]
  )
  const itemHref = field.itemHref
  const hrefByKey = useCallback(
    (rowKey: string) => {
      const row = findRow(rowKey)
      if (!row || !itemHref) return undefined
      const { __key: _key, ...item } = row
      return itemHref(item)
    },
    [findRow, itemHref]
  )
  // Custom row actions (archive/unarchive, …) resolved by row key for the list
  // overflow menu, with the same update/remove helpers as the table.
  const rowActionsByKey = useCallback(
    (rowKey: string): EntitiesListViewAction[] => {
      if (!rowActionsFn) return []
      const index = rows.findIndex((r) => r.__key === rowKey)
      if (index < 0) return []
      const { __key: _key, ...item } = rows[index]
      return rowActionsFn(item, index).map((action) => ({
        label: action.label,
        icon: action.icon,
        critical: action.critical,
        disabled: action.disabled,
        onClick: () =>
          action.onClick({
            item,
            index,
            update: (partial) =>
              commit(
                rows.map((r) => (r.__key === rowKey ? { ...r, ...partial } : r))
              ),
            // Route through the confirm + persist path so custom actions that
            // call remove() also confirm and hit onRemove.
            remove: () => void performRemove(rows[index]),
          }),
      }))
    },
    [rowActionsFn, rows, commit, formField, performRemove]
  )

  // The field renders its own label (FieldRenderer suppresses the default one)
  // in a header row alongside the add button, pinned to the top-right.
  const isRequired = field.validation
    ? isFieldRequired(field.validation, "entitiesList")
    : false
  const header = (
    <div className="flex w-full items-center justify-between gap-3">
      <label
        htmlFor={field.id}
        className="text-base font-medium leading-normal text-f1-foreground-secondary"
      >
        {field.label}
        {isRequired && (
          <span className="ml-0.5 text-f1-foreground-critical">*</span>
        )}
      </label>
      {addConfig && <AddButton config={addConfig} />}
    </div>
  )

  if (useListView) {
    // A per-item `href` (only without a split `updateSchema`) makes rows
    // navigable instead of editable: the row links out and shows a trailing
    // arrow, with no edit dialog.
    const isNavigable = !hasFormDefinitions && !!field.itemHref
    // Display rows with dates as `Date` (rows hold ISO strings) so the list
    // formats them; the stable `__key` still maps actions back to the row.
    const listRows = rows.map(({ __key, ...item }) => ({
      __key,
      ...rowItemToForm(item),
    }))
    return (
      <div className="flex flex-col items-start gap-3">
        {header}
        <EntitiesListView
          rows={listRows}
          fields={columns.map((column) => {
            const listTag = field.columns?.[column.id]?.listTag
            return {
              id: column.id,
              label: column.label,
              // A field with a `listTag` renders as a right-side colored tag.
              tag: listTag
                ? (item: EntitiesListItem) => listTag(item[column.id], item)
                : undefined,
            }
          })}
          listItem={field.listItem}
          canEditRow={canEditRowByKey}
          canRemoveRow={canRemoveRowByKey}
          onEditRow={isNavigable || isDisabled ? undefined : editRowByKey}
          onRowClick={isNavigable || isDisabled ? undefined : editRowByKey}
          onRemoveRow={isDisabled ? undefined : removeRowByKey}
          isRemovePending={isRemovePending}
          getRowActions={rowActionsFn ? rowActionsByKey : undefined}
          getRowHref={isNavigable ? hrefByKey : undefined}
          editLabel={editTooltipLabel}
          removeLabel={removeLabel}
          viewLabel={translations.view}
        />

        {rootError && (
          <p className="text-sm font-medium text-f1-foreground-critical">
            {rootError}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {header}
      <F0FormEditableTable<EntitiesListRow>
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
        // Keep the handle/actions columns mounted while disabled (they're
        // disabled via `disabled` below) so submitting doesn't shift the layout.
        sortableRows={field.sortable !== false}
        onReorderRows={({ items }) => commit(items)}
        onRemoveRow={(row) => void performRemove(row)}
        onEditRow={
          useDialogMode ? (row) => openItemDialog("edit", row) : undefined
        }
        canEditRow={isRowEditable}
        canRemoveRow={isRowRemovable}
        rowActions={rowActions}
        editLabel={editLabel}
        removeLabel={removeLabel}
        // The editable table disables the remove control table-wide (there's no
        // per-row remove disable), so freeze it while any onRemove is in flight.
        disabled={isDisabled || removingKeys.size > 0}
      />

      {rootError && (
        <p className="text-sm font-medium text-f1-foreground-critical">
          {rootError}
        </p>
      )}
    </div>
  )
}
