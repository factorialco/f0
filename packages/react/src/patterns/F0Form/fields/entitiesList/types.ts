import { z } from "zod"

import type { AvatarVariant } from "@/components/avatars/F0Avatar"
import type { IconType } from "@/components/F0Icon"
import type { NewColor } from "@/components/tags/F0TagDot"
import type { StatusVariant } from "@/components/tags/F0TagStatus"
import type { ConfirmDialogOptions } from "@/lib/providers/dialogs-alike/types"
import type { F0FormDefinitionSingleSchema } from "@/patterns/F0WizardForm/types"

import type {
  F0BaseField,
  F0BaseFieldRenderIfFunction,
  CommonRenderIfCondition,
} from "../types"

// ============================================================================
// Entities List item shape
// ============================================================================

/**
 * A single entry in a entities list field. The row shape is defined by the
 * field's item `schema` (a Zod object), so entries are plain records.
 */
export type EntitiesListItem = Record<string, unknown>

// ============================================================================
// Entities List RenderIf Conditions
// ============================================================================

/**
 * All valid renderIf conditions for entities list fields
 */
export type EntitiesListFieldRenderIf =
  | CommonRenderIfCondition
  | F0BaseFieldRenderIfFunction

// ============================================================================
// Entities List Config and Field
// ============================================================================

/**
 * A read-only colored tag for a field in `list-view`: either a semantic status
 * tag or a dot-color tag. Returned per row from a column's `listTag`.
 */
export type F0EntitiesListFieldTag =
  | {
      type: "status"
      /** Semantic status color (neutral/info/positive/warning/critical). */
      status: StatusVariant
      /** Tag text. */
      label: string
      /** Optional leading icon. */
      icon?: IconType
      /** Optional hover tooltip. */
      tooltip?: string
    }
  | {
      type: "dotTag"
      /** Dot color. */
      color: NewColor
      /** Tag text. */
      label: string
    }

/**
 * Per-column presentation options, keyed by the item-schema property name.
 *
 * @typeParam T - The row value type; inferred from the field `schema` so
 * callbacks like `listTag` receive a fully-typed `item`.
 */
export interface F0EntitiesListColumnConfig<T = EntitiesListItem> {
  /** Column header (defaults to the capitalized property name) */
  label?: string
  /** Placeholder shown in the cell input */
  placeholder?: string
  /** Fixed column width in pixels */
  width?: number
  /**
   * For number/money columns, show the locale's thousands separators in the
   * resting cell display (grouped while blurred, ungrouped while editing).
   * Defaults to `true`; set `false` for numbers that shouldn't group (years,
   * IDs, …).
   */
  grouping?: boolean
  /**
   * Hides the column while keeping its value in each row. Useful for values
   * that drive row actions (e.g. an `archived` flag toggled from a custom
   * action) but shouldn't be shown or edited as a cell.
   */
  hidden?: boolean
  /**
   * In `list-view`, render this field as a read-only colored tag (a semantic
   * status tag or a dot-color tag) instead of plain text — e.g. map an enum
   * value to a color. Returned per row; return `undefined` to fall back to
   * text. The tag shows on the right side of the row and the field is dropped
   * from the description lines. Ignored in `editable-table` mode.
   */
  listTag?: (value: unknown, item: T) => F0EntitiesListFieldTag | undefined
}

// ============================================================================
// Entities List custom row actions
// ============================================================================

/** Helpers passed to a row action's `onClick` to mutate that row. */
export interface F0EntitiesListRowActionContext<T = EntitiesListItem> {
  /** The row's current values. */
  item: T
  /** The row's index. */
  index: number
  /** Merge a partial update into this row and commit it to the form value. */
  update: (partial: Partial<T>) => void
  /** Remove this row. */
  remove: () => void
}

/**
 * A custom trailing action for a row.
 *
 * @typeParam T - The row value type; inferred from the field `schema`.
 */
export interface F0EntitiesListRowAction<T = EntitiesListItem> {
  /** Icon shown in the action button. */
  icon: IconType
  /** Accessible label; also shown next to the icon when `showLabel` is set. */
  label: string
  /** Render the label next to the icon. Icon-only by default. */
  showLabel?: boolean
  /** Use the destructive (critical) button styling. */
  critical?: boolean
  /** Disables the button. */
  disabled?: boolean
  /** Called when the action is clicked, with helpers to mutate the row. */
  onClick: (context: F0EntitiesListRowActionContext<T>) => void
}

/** Title and supporting description for one of the add/edit dialogs. */
export interface F0EntitiesListDialogLabels {
  /**
   * Dialog title. For the edit dialog this is also the tooltip of the per-row
   * edit action when it's shown icon-only (e.g. in `list-view`).
   */
  title?: string
  /**
   * Supporting description shown under the dialog title. For the add (create)
   * dialog this is also shown as the add button's hover tooltip.
   */
  description?: string
}

/**
 * User-facing text for a entities list field. All labels are optional and
 * fall back to sensible i18n defaults.
 */
export interface F0EntitiesListLabels {
  /** Label for the button that appends a new row (defaults to i18n "Add"). */
  addButton?: string
  /**
   * Title/description for the add (create) dialog. `title` defaults to
   * `addButton`; `description` also becomes the add button's hover tooltip.
   */
  create?: F0EntitiesListDialogLabels
  /**
   * Title/description for the edit (update) dialog. `title` also becomes the
   * tooltip of the per-row edit action when it's shown icon-only (list-view).
   */
  update?: F0EntitiesListDialogLabels
  /**
   * Label for the per-row edit action. Shown as visible text in the editable
   * table and as the tooltip on the icon-only edit action in `list-view`
   * (where it defaults to the `update` dialog title).
   */
  edit?: string
  /** Label for the per-row remove action (defaults to i18n "Remove"). */
  remove?: string
}

/**
 * How the list is presented when inline cell editing is off (dialog mode).
 * - `"editable-table"` (default): a read-only editable-style table.
 * - `"list-view"`: a OneDataCollection list of the items; add/edit still go
 *   through the form dialog, and each row gets edit/remove actions.
 */
export type F0EntitiesListVisualization = "editable-table" | "list-view"

/**
 * Overrides how each row is labelled in `list-view` mode. When omitted, the
 * first visible field becomes the title and the remaining visible fields
 * become description lines.
 *
 * @typeParam T - The row value type; inferred from the field `schema`.
 */
export interface F0EntitiesListItemDefinition<T = EntitiesListItem> {
  /** Row title (defaults to the first visible field's value). */
  title?: (item: T) => string
  /** Description lines shown under the title (defaults to the other fields). */
  description?: (item: T) => string[]
  /** Optional leading avatar for the row. */
  avatar?: (item: T) => AvatarVariant | undefined
}

/**
 * Behavior options for a entities list field.
 *
 * @typeParam T - The row value type; inferred from the field `schema` so
 * `itemHref`, `listItem`, `rowActions` and `columns` receive a typed `item`.
 */
export interface F0EntitiesListOptions<T = EntitiesListItem> {
  /**
   * Whether rows can be reordered by dragging their handle.
   * @default true
   */
  sortable?: boolean
  /**
   * Whether the user can append new rows.
   * @default true
   */
  canAddItems?: boolean
  /**
   * Forces inline cell editing on/off, overriding the automatic behavior.
   * By default, lists with 2 or fewer columns edit inline and larger ones
   * add/edit through a dialog. Set `true` to edit inline even with 3+ columns,
   * or `false` to always use the dialog.
   */
  supportInlineEditing?: boolean
  /**
   * How the list is presented when there's no inline editing (dialog mode).
   * @default "editable-table"
   * @see {@link F0EntitiesListVisualization}
   */
  visualization?: F0EntitiesListVisualization
  /**
   * Overrides how each row is labelled in `list-view` mode. Ignored for the
   * `editable-table` visualization.
   */
  listItem?: F0EntitiesListItemDefinition<T>
  /**
   * Per-item link (`list-view` only). When set, each row becomes navigable —
   * clicking the row (or its trailing arrow) goes to the returned URL. Only
   * honored when there's no `updateSchema`: with a split schema the row shows
   * the edit (pencil) action and opens the update dialog on click instead.
   */
  itemHref?: (item: T) => string | undefined
  /** User-facing text (add button, dialog description/title). */
  labels?: F0EntitiesListLabels
  /**
   * Restricts which items can be edited, matched against each item's `id`
   * property. When omitted, every item is editable. Items without an `id`
   * (e.g. rows just added by the user and not yet persisted) stay editable.
   *
   * With 2 or fewer schema properties this enables/disables inline cell
   * editing per row; with more than 2 it shows/hides the per-row edit
   * (pencil) action that opens the edit dialog.
   */
  editableIds?: Array<string | number>
  /** Minimum number of rows required (defaults to 1 unless the field is optional) */
  minItems?: number
  /** Maximum number of rows allowed. When reached the add button is hidden. */
  maxItems?: number
  /** Per-column presentation options, keyed by item-schema property name */
  columns?: Record<string, F0EntitiesListColumnConfig<T>>
  /**
   * Custom trailing actions per row. Resolved per row, so the actions can
   * depend on the row's value — e.g. show "Archive" or "Unarchive" based on a
   * hidden `archived` column. Each action's `onClick` receives helpers to
   * update or remove the row.
   */
  rowActions?: (item: T, index: number) => F0EntitiesListRowAction<T>[]
  /**
   * Persistence hook for removing a row — the delete counterpart to
   * `createFormDefinition` (add) and `updateFormDefinition` (edit). Called with
   * the row's item **after** the user confirms the destructive action. Return
   * `{ success: false }` or throw to keep the row and surface an error; return
   * `{ success: true }` (or nothing) to drop it from the field value.
   *
   * When omitted, removal is value-only (the row is spliced from the array with
   * no network call) — but the confirmation is still shown, per the CRUD
   * "Delete & destructive" guidance.
   */
  onRemove?: (item: T) => Promise<{ success: boolean } | void>
  /**
   * Per-item confirmation copy for the remove action, so callers can **name the
   * resource** and its scope (per the CRUD "Delete & destructive" doc). Receives
   * the row item and returns the confirmation dialog options
   * (`title`, `msg`, `type`, `confirm`/`cancel` labels). When omitted, a generic
   * default confirmation is shown.
   */
  confirmRemove?: (item: T) => ConfirmDialogOptions
}

/**
 * F0 config options specific to entities list fields.
 *
 * A entities list renders an editable table for an array of objects whose
 * shape is defined by `schema`. Columns and cell types are derived from the
 * schema: `z.string()` → text cell, `z.number()` → number cell,
 * `z.enum([...])` → select cell. Rows can be reordered by dragging, removed
 * individually, and appended (when `config.canAddItems` is not false).
 */
export interface F0EntitiesListConfig {
  /**
   * Zod object schema describing one row of the list (used for add, edit and
   * display). Provide this — the add/edit dialogs share the parent form's
   * submit — or `createFormDefinition` + `updateFormDefinition` for separate
   * submit handlers.
   */
  schema?: z.ZodObject<z.ZodRawShape>
  /**
   * Form definition (own `onSubmit`) for the add dialog. Pair with
   * `updateFormDefinition`. Its submit runs on add, then the item is committed
   * to the field value.
   */
  createFormDefinition?: F0FormDefinitionSingleSchema<
    z.ZodObject<z.ZodRawShape>
  >
  /**
   * Form definition (own `onSubmit`) for the edit dialog. Its schema is the
   * canonical row shape (columns, display, value type). Its submit runs on
   * edit, then the row is updated in the field value.
   */
  updateFormDefinition?: F0FormDefinitionSingleSchema<
    z.ZodObject<z.ZodRawShape>
  >
  /** Behavior options (add button, min/max items, column presentation) */
  config?: F0EntitiesListOptions
}

/**
 * Entities list field with all properties for rendering (runtime type)
 */
export type F0EntitiesListField = F0BaseField & {
  type: "entitiesList"
  /** Canonical row schema; columns/display/value are derived from it */
  itemSchema: z.ZodObject<z.ZodRawShape>
  /** User-provided add-dialog form definition (own onSubmit), if any */
  createFormDefinition?: F0FormDefinitionSingleSchema<
    z.ZodObject<z.ZodRawShape>
  >
  /** User-provided edit-dialog form definition (own onSubmit), if any */
  updateFormDefinition?: F0FormDefinitionSingleSchema<
    z.ZodObject<z.ZodRawShape>
  >
  /** Whether rows can be reordered by dragging (defaults to true) */
  sortable?: boolean
  /** Whether the user can append new rows (defaults to true) */
  canAddItems?: boolean
  /** Forces inline cell editing on/off, overriding the column-count heuristic */
  supportInlineEditing?: boolean
  /** How the list is presented in dialog mode (@default "editable-table") */
  visualization?: F0EntitiesListVisualization
  /** Overrides row title/description/avatar in `list-view` mode */
  listItem?: F0EntitiesListItemDefinition
  /** Per-item link for navigable `list-view` rows (no `updateSchema`) */
  itemHref?: (item: EntitiesListItem) => string | undefined
  /** User-facing text (add button, dialog description/title) */
  labels?: F0EntitiesListLabels
  /** Ids of the items that can be edited (matched against `item.id`) */
  editableIds?: Array<string | number>
  /** Maximum number of rows allowed */
  maxItems?: number
  /** Per-column presentation options, keyed by item-schema property name */
  columns?: Record<string, F0EntitiesListColumnConfig>
  /** Custom trailing actions per row (resolved per row) */
  rowActions?: (
    item: EntitiesListItem,
    index: number
  ) => F0EntitiesListRowAction[]
  /** Persistence hook for removing a row (runs after the user confirms) */
  onRemove?: (item: EntitiesListItem) => Promise<{ success: boolean } | void>
  /** Per-item confirmation copy for the remove action */
  confirmRemove?: (item: EntitiesListItem) => ConfirmDialogOptions
  /** Conditional rendering based on another field's value */
  renderIf?: EntitiesListFieldRenderIf
}
