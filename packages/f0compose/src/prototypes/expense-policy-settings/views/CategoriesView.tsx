import { F0Box, F0Button, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Input, Switch } from "@factorialco/f0-react/dist/experimental"
import { ChevronRight, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { Category } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Categories management view (spec §4 / §8 / §10).
 *
 * Hand-composed grid (NOT editableTable) because the spec requires:
 *   - an inline visibility Switch in the row (editableTable cells
 *     don't support arbitrary components),
 *   - a dedicated drill cell into Subcategories (editableTable has
 *     no row-click hook),
 *   - a 50% opacity treatment for hidden categories (BR-010 escape).
 *
 * Layout: F0Box grid `columns="12"` with proportional spans
 * 5 / 2 / 3 / 2 →
 *   1. Name (inline-editable on single click — same UX as
 *      Subcategories / Payment methods rows)
 *   2. Show / Hide (Switch)
 *   3. Subcategories: "N subcategories ›" — clicking this cell drills
 *      into the Subcategories view for this category. Pulled out of
 *      the name cell so editing the name and drilling never compete
 *      for the same click target.
 *   4. Delete (critical ghost icon button)
 *
 * Inline name editing: clicking the name cell enters edit mode and
 * swaps to an `<Input>` (experimental). Commit on blur / Enter —
 * both call `renameCategory`, which itself replaces empty strings
 * with "Untitled category" (spec §8).
 *
 * The Switch + Delete + Input controls eat the click
 * (`stopPropagation`) so they never trigger drill or edit.
 */
export function CategoriesView(props: {
  policyData: PolicyData
  onDrill: (categoryId: string) => void
}) {
  const {
    categories,
    subcategories,
    renameCategory,
    deleteCategory,
    toggleCategoryVisible,
  } = props.policyData

  // Which row is currently in inline-edit mode. Only one at a time.
  const [editingId, setEditingId] = useState<string | null>(null)

  const subcategoryCount = (categoryId: string) =>
    subcategories.filter((s) => s.categoryId === categoryId).length

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {/* Section title + helper text */}
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Categories" variant="heading" as="h2" />
        <F0Text
          content="Categories appear in every expense form. Hide a category to remove it from the dropdown without losing its subcategories."
          variant="description"
        />
      </F0Box>

      {/* Table */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        {/* Header row */}
        <F0Box
          display="grid"
          columns="12"
          paddingX="lg"
          paddingY="md"
          alignItems="center"
          background="secondary"
          gap="md"
        >
          <F0Box colSpan="5">
            <F0Text content="Name" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="Show / Hide" variant="label" />
          </F0Box>
          <F0Box colSpan="3">
            <F0Text content="Subcategories" variant="label" />
          </F0Box>
          <F0Box colSpan="2">
            <F0Text content="" variant="label" />
          </F0Box>
        </F0Box>

        {/* Body rows */}
        <F0Box
          display="flex"
          flexDirection="column"
          divider="y"
          dividerColor="default"
        >
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              subcategoryCount={subcategoryCount(category.id)}
              isEditing={editingId === category.id}
              onStartEdit={() => setEditingId(category.id)}
              onCommitName={(name) => {
                renameCategory(category.id, name)
                setEditingId(null)
              }}
              onCancelEdit={() => setEditingId(null)}
              onToggleVisible={() => toggleCategoryVisible(category.id)}
              onDelete={() => deleteCategory(category.id)}
              onDrill={() => props.onDrill(category.id)}
            />
          ))}
        </F0Box>

      </F0Box>
    </F0Box>
  )
}

/**
 * Single category row. Pulled out so each row owns its own edit-input
 * state without re-rendering the whole list on every keystroke.
 *
 * Hidden categories render at 50% opacity (spec §4). The opacity is
 * applied via a wrapping <div className="opacity-50"> — BR-010
 * escape hatch, no F0 primitive for "opacity" exists.
 */
function CategoryRow(props: {
  category: Category
  subcategoryCount: number
  isEditing: boolean
  onStartEdit: () => void
  onCommitName: (name: string) => void
  onCancelEdit: () => void
  onToggleVisible: () => void
  onDelete: () => void
  onDrill: () => void
}) {
  const [draft, setDraft] = useState(props.category.name)

  // Keep the draft in sync if the parent name changes externally
  // (e.g. another row got renamed via the chat copilot).
  if (!props.isEditing && draft !== props.category.name) {
    setDraft(props.category.name)
  }

  const rowBody = (
    <F0Box
      display="grid"
      columns="12"
      paddingX="lg"
      paddingY="sm"
      minHeight="12"
      alignItems="center"
      gap="md"
    >
      {/* Name cell — single-click enters edit mode. Wrapped in a
          bare div so the click is captured at the cell level (the
          row itself has no click handler — drill lives in a separate
          column). */}
      <F0Box colSpan="5" display="flex" alignItems="center" gap="sm">
        {props.isEditing ? (
          <div className="flex-1">
            <Input
              label="Category name"
              hideLabel
              autoFocus
              size="sm"
              value={draft}
              onChange={(v) => setDraft(v)}
              onBlur={() => props.onCommitName(draft)}
              onPressEnter={() => props.onCommitName(draft)}
            />
          </div>
        ) : (
          <div
            className="flex-1 cursor-text"
            onClick={() => props.onStartEdit()}
          >
            <F0Text content={props.category.name} variant="label" />
          </div>
        )}
      </F0Box>

      {/* Show / Hide column */}
      <F0Box colSpan="2" display="flex" alignItems="center">
        <div onClick={(e) => e.stopPropagation()}>
          <Switch
            title={`Show ${props.category.name}`}
            hideLabel
            checked={props.category.visible}
            onCheckedChange={() => props.onToggleVisible()}
          />
        </div>
      </F0Box>

      {/* Subcategories drill cell — clicking anywhere in this cell
          opens the Subcategories view for this category. Separated
          from the name cell so edit and drill never share a click
          target. */}
      <F0Box colSpan="3" display="flex" alignItems="center">
        <div
          className="flex cursor-pointer items-center gap-1 rounded-md py-1 hover:text-f1-foreground"
          onClick={() => props.onDrill()}
        >
          <F0Text
            content={`${props.subcategoryCount} subcategories`}
            variant="description"
          />
          <F0Icon icon={ChevronRight} size="sm" />
        </div>
      </F0Box>

      {/* Delete column */}
      <F0Box colSpan="2" display="flex" alignItems="center" justifyContent="end">
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="outline"
            size="md"
            icon={Delete}
            label={`Delete ${props.category.name}`}
            hideLabel
            onClick={() => props.onDelete()}
          />
        </div>
      </F0Box>
    </F0Box>
  )

  // Hidden categories get the visual fade (BR-010 escape). No row-
  // level click handler — edit and drill live on their respective
  // cells so they never conflict. The hover background mirrors
  // Subcategories / Payment methods so the row reads as editable.
  const fadeClass = props.category.visible ? "" : "opacity-50"

  return (
    <div className={fadeClass}>
      <div className="transition-colors hover:bg-f1-background-hover">
        {rowBody}
      </div>
    </div>
  )
}
