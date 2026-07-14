import { z } from "zod"

import type { IconType } from "@/components/F0Icon"

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
 * Per-column presentation options, keyed by the item-schema property name.
 */
export interface F0EntitiesListColumnConfig {
  /** Column header (defaults to the capitalized property name) */
  label?: string
  /** Placeholder shown in the cell input */
  placeholder?: string
  /** Fixed column width in pixels */
  width?: number
  /**
   * Hides the column while keeping its value in each row. Useful for values
   * that drive row actions (e.g. an `archived` flag toggled from a custom
   * action) but shouldn't be shown or edited as a cell.
   */
  hidden?: boolean
}

// ============================================================================
// Entities List custom row actions
// ============================================================================

/** Helpers passed to a row action's `onClick` to mutate that row. */
export interface F0EntitiesListRowActionContext {
  /** The row's current values. */
  item: EntitiesListItem
  /** The row's index. */
  index: number
  /** Merge a partial update into this row and commit it to the form value. */
  update: (partial: EntitiesListItem) => void
  /** Remove this row. */
  remove: () => void
}

/** A custom trailing action for a row. */
export interface F0EntitiesListRowAction {
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
  onClick: (context: F0EntitiesListRowActionContext) => void
}

/**
 * User-facing text for a entities list field. All labels are optional and
 * fall back to sensible i18n defaults.
 */
export interface F0EntitiesListLabels {
  /** Label for the button that appends a new row (also the create dialog title). */
  addButton?: string
  /**
   * Supporting description shown under the create dialog title. Only visible in
   * dialog mode (when the item schema has more than 2 properties).
   */
  addButtonDescription?: string
  /** Title for the edit dialog (dialog mode only; defaults to an i18n string). */
  editDialogTitle?: string
}

/**
 * Behavior options for a entities list field.
 */
export interface F0EntitiesListOptions {
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
  columns?: Record<string, F0EntitiesListColumnConfig>
  /**
   * Custom trailing actions per row. Resolved per row, so the actions can
   * depend on the row's value — e.g. show "Archive" or "Unarchive" based on a
   * hidden `archived` column. Each action's `onClick` receives helpers to
   * update or remove the row.
   */
  rowActions?: (
    item: EntitiesListItem,
    index: number
  ) => F0EntitiesListRowAction[]
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
  /** Zod object schema describing one row of the list */
  schema: z.ZodObject<z.ZodRawShape>
  /** Behavior options (add button, min/max items, column presentation) */
  config?: F0EntitiesListOptions
}

/**
 * Entities list field with all properties for rendering (runtime type)
 */
export type F0EntitiesListField = F0BaseField & {
  type: "entitiesList"
  /** Zod object schema describing one row; columns are derived from it */
  itemSchema: z.ZodObject<z.ZodRawShape>
  /** Whether rows can be reordered by dragging (defaults to true) */
  sortable?: boolean
  /** Whether the user can append new rows (defaults to true) */
  canAddItems?: boolean
  /** Forces inline cell editing on/off, overriding the column-count heuristic */
  supportInlineEditing?: boolean
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
  /** Conditional rendering based on another field's value */
  renderIf?: EntitiesListFieldRenderIf
}
