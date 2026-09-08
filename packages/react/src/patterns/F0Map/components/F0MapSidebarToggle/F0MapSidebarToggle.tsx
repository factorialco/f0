import { forwardRef } from "react"
import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { SidebarIconSvg } from "@/patterns/Navigation/Sidebar/Icon"
import { Action } from "@/ui/Action"
import { MapControlCard } from "../internal/MapControlCard"

export interface F0MapSidebarToggleProps extends WithDataTestIdProps {
  /** Whether the panel this button controls is currently open. */
  expanded: boolean
  onToggle: () => void
  /** Overrides the default show / hide label. */
  label?: string
  /**
   * Drop the overlay card, leaving a bare ghost button. For the toggle once it
   * lives inside a panel: the card exists to lift a control off the map, and
   * inside a panel there is no map to lift it off.
   */
  bare?: boolean
  /**
   * Kept in the layout but out of reach: invisible, unfocusable and hidden from
   * assistive tech, while still holding the pointer so the cursor does not fall
   * through to whatever is underneath. For a control another element has taken
   * over from.
   */
  inactive?: boolean
}

/**
 * Opens and closes the map's side panel. Reuses the app sidebar's own icon - the
 * same rectangle whose arrow and divider animate on hover - so the gesture reads
 * the same here as it does in the application frame, but wearing the map's
 * control treatment so it belongs to the overlay rather than the page.
 *
 * Presentational and engine-free, like `F0MapControls`: `F0Map` positions it and
 * owns the state.
 */
export const F0MapSidebarToggle = forwardRef<
  HTMLButtonElement,
  F0MapSidebarToggleProps
>(
  (
    { expanded, onToggle, label, bare = false, inactive = false, dataTestId },
    ref
  ) => {
    const i18n = useI18n()
    const resolvedLabel =
      label ??
      (expanded ? i18n.map.controls.hidePanel : i18n.map.controls.showPanel)

    const button = (
      <Action
        ref={ref}
        variant="ghost"
        size="md"
        compact
        className="group"
        onClick={onToggle}
        title={resolvedLabel}
        aria-label={resolvedLabel}
        aria-expanded={expanded}
        aria-hidden={inactive || undefined}
        tabIndex={inactive ? -1 : undefined}
      >
        <SidebarIconSvg isExpanded={expanded} />
      </Action>
    )

    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        {bare ? button : <MapControlCard>{button}</MapControlCard>}
      </DataTestIdWrapper>
    )
  }
)

F0MapSidebarToggle.displayName = "F0MapSidebarToggle"
