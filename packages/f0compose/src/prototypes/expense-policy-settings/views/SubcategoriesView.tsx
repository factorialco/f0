import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { Input } from "@factorialco/f0-react/dist/experimental"
import { Add, Delete } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { Subcategory } from "../data/types"
import type { PolicyData } from "../data/usePolicyData"

/**
 * Subcategories management view (spec §5, iterated §2).
 *
 * Iterated UX (this revision): grouped-by-category layout. The flat
 * list felt heavy to scan and made the parent ambiguous when adding
 * a new row. Instead we render one group per category:
 *
 *   ┌────────────────────────────────────────────────┐
 *   │  Travel                                        │ ← group header
 *   ├────────────────────────────────────────────────┤
 *   │  Flights                              [Delete] │
 *   │  Hotels                               [Delete] │
 *   │  Taxis & rideshare                    [Delete] │
 *   │  + Add subcategory                             │ ← scoped to "Travel"
 *   └────────────────────────────────────────────────┘
 *   ┌────────────────────────────────────────────────┐
 *   │  Per diems                                     │
 *   │  …                                             │
 *
 * Why this beats the flat-with-Category-column shape:
 *  - Scanning: rows are clustered by parent, the eye finds the
 *    relevant group in one glance instead of cross-referencing
 *    a Category column on every row.
 *  - Adding: the "+ Add subcategory" button lives inside each
 *    group, so the parent category is implicit. No category
 *    picker, no default-to-first surprise.
 *  - Empty categories: render with a header + add button so
 *    admins can seed the first subcategory.
 *
 * Hand-composed grid (NOT editableTable) for the same reason as
 * before — OneDataCollection's editable table misaligns inside our
 * bordered container.
 *
 * Empty-name commit deletes the row (see `usePolicyData`).
 */
export function SubcategoriesView(props: {
  /**
   * If provided, renders ONLY that category's subcategories as a
   * single group with no group header (legacy scoped mode kept for
   * back-compat — not used by the current modal entry point).
   */
  categoryId?: string
  policyData: PolicyData
  /** Hide the heading + description (the modal renders its own title). */
  hideHeader?: boolean
}) {
  const {
    categories,
    subcategories,
    addSubcategory,
    renameSubcategory,
    deleteSubcategory,
  } = props.policyData

  // Which row is currently in inline-edit mode. Only one at a time.
  const [editingId, setEditingId] = useState<string | null>(null)

  // Legacy scoped mode: render a single group, no group header.
  // Current entry point (the modal) never uses this branch.
  const groups =
    props.categoryId === undefined
      ? categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          rows: subcategories.filter((s) => s.categoryId === cat.id),
        }))
      : [
          {
            id: props.categoryId,
            name:
              categories.find((c) => c.id === props.categoryId)?.name ?? "",
            rows: subcategories.filter(
              (s) => s.categoryId === props.categoryId
            ),
          },
        ]

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      {!props.hideHeader && (
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading content="Subcategories" variant="heading" as="h2" />
          <F0Text
            content="Subcategories appear under their parent category in the expense form. They are shared across all expense forms."
            variant="description"
          />
        </F0Box>
      )}

      {/* One bordered card per category group. `gap="lg"` puts a
          consistent vertical rhythm between groups; the card border
          gives each group its own visual container so the eye
          parses them as separate units. */}
      <F0Box display="flex" flexDirection="column" gap="lg">
        {groups.map((group) => (
          <CategoryGroup
            key={group.id}
            name={group.name}
            rows={group.rows}
            editingId={editingId}
            showHeader={props.categoryId === undefined}
            onStartEdit={setEditingId}
            onCommitName={(id, name) => {
              renameSubcategory(id, name)
              setEditingId(null)
            }}
            onDelete={deleteSubcategory}
            onAdd={() => {
              const id = addSubcategory(group.id)
              setEditingId(id)
            }}
          />
        ))}
      </F0Box>
    </F0Box>
  )
}

/**
 * One category's worth of subcategories, rendered as a bordered
 * card with its own header + rows + add-button footer.
 *
 * Layout: F0Box grid `columns="12"` with spans 10 / 2 →
 *   1. Name (inline-editable on click; commit on blur/Enter)
 *   2. Delete (outline icon button, right-aligned)
 *
 * Empty-state variant: when the group has zero subcategories we
 * collapse the two grey stripes (header + footer) into a single
 * primary-background panel — the category name on top, a centered
 * "Add subcategory" CTA below. This avoids two secondary stripes
 * blending into one ambiguous grey blob with no visible separator
 * and makes the empty case feel like a recognisable empty state
 * instead of a broken table.
 *
 * Populated variant: keeps the original header / rows / footer
 * sandwich. The body rows (primary background) sit between the
 * two secondary stripes, so the visual separation is naturally
 * provided by the rows themselves.
 */
function CategoryGroup(props: {
  name: string
  rows: Subcategory[]
  editingId: string | null
  /** Suppress the group header (legacy scoped mode). */
  showHeader: boolean
  onStartEdit: (id: string) => void
  onCommitName: (id: string, name: string) => void
  onDelete: (id: string) => void
  onAdd: () => void
}) {
  const isEmpty = props.rows.length === 0

  // Empty-state variant — keep the secondary-bg header (matches
  // populated groups for visual consistency), drop the "No
  // subcategories yet" line (redundant — the absence of rows + the
  // Add CTA already communicate the empty state), and render just
  // the centered Add button beneath the header.
  if (isEmpty && props.showHeader) {
    return (
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderColor="secondary"
        borderRadius="md"
        background="primary"
        overflow="hidden"
      >
        <F0Box
          paddingX="lg"
          paddingY="md"
          background="secondary"
          display="flex"
          alignItems="center"
        >
          <F0Text
            content={props.name || "Untitled category"}
            variant="label"
          />
        </F0Box>
        <F0Box
          paddingX="lg"
          paddingY="sm"
          display="flex"
          alignItems="center"
        >
          <F0Button
            variant="ghost"
            size="sm"
            icon={Add}
            label="Add subcategory"
            onClick={() => props.onAdd()}
          />
        </F0Box>
      </F0Box>
    )
  }

  // Populated variant — header / rows / footer sandwich.
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      border="default"
      borderColor="secondary"
      borderRadius="md"
      background="primary"
      overflow="hidden"
    >
      {/* Group header — the category name, on the same secondary
          background as column-header rows for visual consistency. */}
      {props.showHeader && (
        <F0Box
          paddingX="lg"
          paddingY="md"
          background="secondary"
          display="flex"
          alignItems="center"
        >
          <F0Text content={props.name || "Untitled category"} variant="label" />
        </F0Box>
      )}

      {/* Body rows */}
      <F0Box
        display="flex"
        flexDirection="column"
        divider="y"
        dividerColor="default"
      >
        {props.rows.map((sub) => (
          <SubcategoryRow
            key={sub.id}
            subcategory={sub}
            isEditing={props.editingId === sub.id}
            onStartEdit={() => props.onStartEdit(sub.id)}
            onCommitName={(name) => props.onCommitName(sub.id, name)}
            onDelete={() => props.onDelete(sub.id)}
          />
        ))}
      </F0Box>

      {/* Footer — scoped Add button. The parent category is implicit
          (the button lives inside the group), eliminating the need
          for a category picker. */}
      <F0Box
        paddingX="lg"
        paddingY="sm"
        background="secondary"
        display="flex"
        alignItems="center"
        borderTop="default"
        borderColor="default"
      >
        <F0Button
          variant="ghost"
          size="sm"
          icon={Add}
          label="Add subcategory"
          onClick={() => props.onAdd()}
        />
      </F0Box>
    </F0Box>
  )
}

/**
 * Single subcategory row. Owns its own draft state so each keystroke
 * doesn't re-render the entire group.
 *
 * Edit trigger: single-click on the name cell.
 */
function SubcategoryRow(props: {
  subcategory: Subcategory
  isEditing: boolean
  onStartEdit: () => void
  onCommitName: (name: string) => void
  onDelete: () => void
}) {
  const [draft, setDraft] = useState(props.subcategory.name)

  // Keep the draft in sync when the parent name changes externally
  // (e.g. via the chat copilot).
  if (!props.isEditing && draft !== props.subcategory.name) {
    setDraft(props.subcategory.name)
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
      {/* Name cell — single-click enters edit mode */}
      <F0Box colSpan="10" display="flex" alignItems="center" gap="sm">
        {props.isEditing ? (
          <div className="flex-1">
            <Input
              label="Subcategory name"
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
            <F0Text content={props.subcategory.name} variant="label" />
          </div>
        )}
      </F0Box>

      {/* Delete column */}
      <F0Box
        colSpan="2"
        display="flex"
        alignItems="center"
        justifyContent="end"
      >
        <div onClick={(e) => e.stopPropagation()}>
          <F0Button
            variant="outline"
            size="md"
            icon={Delete}
            label={`Delete ${props.subcategory.name}`}
            hideLabel
            onClick={() => props.onDelete()}
          />
        </div>
      </F0Box>
    </F0Box>
  )

  return (
    <div className="transition-colors hover:bg-f1-background-hover">
      {rowBody}
    </div>
  )
}
