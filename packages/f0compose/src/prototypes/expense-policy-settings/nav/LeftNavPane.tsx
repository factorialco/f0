import { F0Box, F0Text } from "@factorialco/f0-react"

import { navEntriesInOrder, type NavEntryId } from "./navConfig"

/**
 * Left navigation pane.
 *
 * Visual contract:
 *  - Flat list of entries. Section labels ("Core setup", "Policy
 *    rules") and the divider between sections are NOT rendered \u2014
 *    designers asked to collapse the rail down to a single column
 *    of pages so the navigation reads as one continuous list.
 *  - Each entry is a row: step-indicator circle + label, full-width
 *    clickable area.
 *  - Inactive entry: outline gray circle (icon `color="secondary"`),
 *    transparent background.
 *  - Active entry: solid foreground-colored circle
 *    (icon `color="default"`), `selected` light-teal background pill.
 *  - Right edge of the pane: vertical 1px stroke separating it from
 *    the main content area.
 *  - Sticky behavior: the PANE stays full-height (stroke unbroken),
 *    but its inner column sticks to viewport top on scroll \u2014 same
 *    pattern as ResourceHeader.
 *
 * Composition (BR-005, BR-010): no `F0Button` here because the
 * button-with-icon pattern doesn't give us the full-bleed pill we
 * need. Instead we compose F0Box / F0Icon / F0Text into a row and
 * use a wrapping `<button>` for accessibility + click handling.
 *
 * `navSections` is still the source of truth, but we flatten it
 * here \u2014 entries from all sections concatenate into one list. The
 * order in `navConfig.ts` is preserved.
 */
export function LeftNavPane(props: {
  activeId: NavEntryId
  onSelect: (id: NavEntryId) => void
  isComplete?: (id: NavEntryId) => boolean
}) {
  // Single, lifecycle-ordered entry list (see `navEntriesInOrder` in
  // navConfig.ts): Expense types \u2192 the spending-rule pages \u2192 Approval
  // flows \u2192 Certified documents \u2192 Exceptions.
  const entries = navEntriesInOrder

  return (
    <F0Box
      paddingRight="lg"
      borderRight="default"
      borderColor="secondary"
      width="60"
      shrink={false}
    >
      <div className="sticky top-0">
        <F0Box
          display="flex"
          flexDirection="column"
          gap="xs"
          paddingY="lg"
        >
          {entries.map((entry) => (
            <NavEntryRow
              key={entry.id}
              label={entry.label}
              isActive={entry.id === props.activeId}
              disabled={entry.disabled}
              onSelect={() => props.onSelect(entry.id)}
            />
          ))}
        </F0Box>
      </div>
    </F0Box>
  )
}

/**
 * Single row in the left nav — just the label now (no leading status
 * icon). Rendered as a `<button>` for native keyboard support; the
 * active row gets the `selected` light-teal background pill, everything
 * else is transparent, so the rail reads as a clean flat list.
 *
 * (The per-section completion tracking still exists upstream — see
 * `useNavCompletion` / `LeftNavPane`'s `isComplete` prop — so the green
 * checkmarks can be reinstated by re-adding an F0Icon here.)
 */
function NavEntryRow(props: {
  label: string
  isActive: boolean
  disabled?: boolean
  onSelect: () => void
}) {
  // Disabled entries (e.g. "Card controls") are placeholders with no
  // view yet: render greyed-out, no click handler, default cursor.
  if (props.disabled) {
    return (
      <div style={{ opacity: 0.4, cursor: "default" }} aria-disabled="true">
        <F0Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          paddingX="md"
          paddingY="sm"
          borderRadius="md"
          background="transparent"
        >
          <F0Text content={props.label} variant="body" color="muted" />
        </F0Box>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={props.onSelect}
      className="w-full text-left"
    >
      <F0Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        paddingX="md"
        paddingY="sm"
        borderRadius="md"
        background={props.isActive ? "selected" : "transparent"}
      >
        <F0Text content={props.label} variant="body" />
      </F0Box>
    </button>
  )
}
