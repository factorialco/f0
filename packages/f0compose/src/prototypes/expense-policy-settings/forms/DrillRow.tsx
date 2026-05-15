import { F0Box, F0Icon, F0Text } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"
import type { ReactNode } from "react"

/**
 * Wraps a field row whose body is itself clickable (modal opener or
 * inline expander). Adds:
 *
 *  - subtle hover background (the row is clearly clickable),
 *  - a row-level click handler that fires when the user clicks
 *    anywhere on the row body.
 *
 * Spec §2: clicking row controls (Switch, Required/Optional pills)
 * MUST NOT trigger the row click. The controls themselves call
 * `stopPropagation` in `ExpenseFormsSection`; this wrapper provides
 * the row-wide click target for the non-control area.
 *
 * Note: F0Box doesn't expose a `hover:` background prop, so the
 * hover state is rendered via a small Tailwind escape hatch — a
 * single class on a wrapping <div> (BR-010, documented).
 */
export function DrillRow(props: {
  onClick: () => void
  children: ReactNode
}) {
  return (
    <div
      className="cursor-pointer rounded transition-colors hover:bg-f1-background-secondary"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

/**
 * Inline "N set ›" hint, rendered inside the Field-name cell next
 * to the label. Subdued styling — it's an affordance, not a primary
 * action. The caller passes the full label so the hint reads
 * naturally for any target (previously we composed it from singular
 * + plural nouns, but the iterated copy is uniformly "N set" across
 * Subcategory + Payment method, so a free-form label is simpler).
 */
export function DrillHint(props: { label: string }) {
  return (
    <F0Box display="flex" alignItems="center" gap="xs">
      <F0Text content={props.label} variant="description" />
      <F0Icon icon={ChevronRight} size="sm" />
    </F0Box>
  )
}
