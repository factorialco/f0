import { F0Box, F0Icon, F0Text } from "@factorialco/f0-react"
import { Circle } from "@factorialco/f0-react/icons/app"

import { coreNavEntries, type NavEntryId } from "./navConfig"

/**
 * Left navigation pane.
 *
 * Visual contract (matches the PSPEC reference frame):
 *  - Group label "Core sections" — small, muted, sits above the
 *    entries with extra padding.
 *  - Each entry is a row: outline circle icon (step indicator) +
 *    label, full-width clickable area.
 *  - Active entry: light teal `selected` background pill, square
 *    enough to fill the nav column. No border, no shadow.
 *  - Inactive entry: transparent background, hover gets `secondary`.
 *  - Right edge of the pane: vertical 1px stroke separating it from
 *    the main content area (`borderRight="default"`).
 *
 * Composition (BR-005, BR-010): no `F0Button` here because the
 * button-with-icon pattern doesn't give us the full-bleed pill we
 * need. Instead we compose F0Box / F0Icon / F0Text into a row and
 * use a wrapping `<button>` for accessibility + click handling. The
 * wrapper is a bare button purely for keyboard semantics — all
 * visual styling lives on the F0Box children (BR-010 escape, single
 * line, no styling on the button itself).
 */
export function LeftNavPane(props: {
  activeId: NavEntryId
  onSelect: (id: NavEntryId) => void
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      paddingY="lg"
      paddingRight="lg"
      borderRight="default"
      borderColor="secondary"
      width="60"
      shrink={false}
    >
      {/* Group label — muted, not bold. Sits flush with entries. */}
      <F0Box paddingX="md">
        <F0Text content="Core sections" variant="description" />
      </F0Box>

      <F0Box display="flex" flexDirection="column" gap="xs">
        {coreNavEntries.map((entry) => (
          <NavEntryRow
            key={entry.id}
            label={entry.label}
            isActive={entry.id === props.activeId}
            onSelect={() => props.onSelect(entry.id)}
          />
        ))}
      </F0Box>
    </F0Box>
  )
}

/**
 * Single row in the left nav. Rendered as a `<button>` for native
 * keyboard support; all visible styling is delegated to F0Box.
 *
 * The active state uses `background="selected"` (light teal token,
 * BR-005). The icon is a plain outline `Circle` — the canonical
 * "step indicator" icon used in Factorial settings pages.
 */
function NavEntryRow(props: {
  label: string
  isActive: boolean
  onSelect: () => void
}) {
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
        gap="sm"
        paddingX="md"
        paddingY="sm"
        borderRadius="md"
        background={props.isActive ? "selected" : "transparent"}
      >
        <F0Icon icon={Circle} size="sm" />
        <F0Text content={props.label} variant="body" />
      </F0Box>
    </button>
  )
}
