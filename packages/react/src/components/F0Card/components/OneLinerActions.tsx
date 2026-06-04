import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { cn } from "@/lib/utils"
import { useOverflowCalculation } from "@/ui/OverflowList/useOverflowCalculation"

import {
  type CardPrimaryAction,
  type CardSecondaryAction,
  type CardSecondaryLink,
} from "./CardActions"

// Pixel gap between the trailing controls — mirrors the `gap-2` used elsewhere.
const GAP = 8

interface OneLinerActionsProps {
  primaryAction?: CardPrimaryAction
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink
  /** Overflow (⋯) menu actions — always live in the left "more" menu. */
  otherActions?: DropdownItem[]
  compact?: boolean
}

/**
 * Trailing action row for the one-liner card. The "more" (⋯) menu sits on the
 * LEFT and the primary stays pinned at the trailing edge.
 *
 * Two layouts, toggled by the card's `@md` container width:
 * - Wide (inline): all secondary buttons are shown; the ⋯ holds only the
 *   `otherActions`. There's room, so nothing collapses.
 * - Narrow: the row drops onto its own full-width line under the text. There the
 *   cluster IS width-bounded, so we measure it (same engine as
 *   `OverflowList`/`ButtonGroupOverflow`) and shed secondary buttons right→left
 *   into the left ⋯ as it tightens — `otherActions` ride along in that menu.
 *
 * The split is necessary because, inline, the cluster is content-sized (the
 * title truncates and yields space), which makes a measured width meaningless.
 */
export function OneLinerActions({
  primaryAction,
  secondaryActions,
  otherActions,
  compact = false,
}: OneLinerActionsProps) {
  const size = compact ? "sm" : "md"

  const secondaryArray = Array.isArray(secondaryActions) ? secondaryActions : []
  const secondaryLink =
    secondaryActions && !Array.isArray(secondaryActions)
      ? secondaryActions
      : undefined
  const other = otherActions ?? []

  const {
    containerRef,
    measurementContainerRef,
    customOverflowIndicatorRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(secondaryArray, GAP)

  // Before the first measurement, optimistically show everything so the row
  // doesn't flash empty; the measured split takes over once initialized.
  const shown = isInitialized ? visibleItems : secondaryArray
  const overflowed = isInitialized ? overflowItems : []

  const toDropdownItem = (action: CardSecondaryAction): DropdownItem => ({
    label: action.label,
    icon: action.icon,
    onClick: action.onClick,
  })

  // Narrow ⋯ menu = collapsed secondaries, then the always-present otherActions,
  // divided by a separator when both are present.
  const narrowMenu: DropdownItem[] = [
    ...overflowed.map(toDropdownItem),
    ...(overflowed.length > 0 && other.length > 0
      ? [{ type: "separator" } as DropdownItem]
      : []),
    ...other,
  ]

  const hasAnyAction =
    primaryAction ||
    secondaryArray.length > 0 ||
    !!secondaryLink ||
    other.length > 0

  if (!hasAnyAction) {
    return null
  }

  const renderSecondary = (action: CardSecondaryAction, index: number) => (
    <F0Button
      key={index}
      label={action.label}
      icon={action.icon}
      variant="outline"
      size={size}
      onClick={(e) => {
        e.stopPropagation()
        action.onClick()
      }}
    />
  )

  const more = (items: DropdownItem[], ref?: React.Ref<HTMLDivElement>) =>
    items.length > 0 ? (
      <div ref={ref} onClick={(e) => e.stopPropagation()}>
        <Dropdown items={items} size={size} />
      </div>
    ) : null

  const link = secondaryLink ? (
    <F0Link
      href={secondaryLink.href}
      target={secondaryLink.target}
      disabled={secondaryLink.disabled}
      onClick={(e) => e.stopPropagation()}
      data-testid="secondary-link"
    >
      {secondaryLink.label}
    </F0Link>
  ) : null

  const primary = primaryAction ? (
    <F0Button
      label={primaryAction.label}
      icon={primaryAction.icon}
      size={size}
      onClick={(e) => {
        e.stopPropagation()
        primaryAction.onClick()
      }}
      data-testid="primary-button"
    />
  ) : null

  return (
    <>
      {/* Wide (@md+): inline, all secondary buttons shown, ⋯ = otherActions. */}
      <div className="relative z-[1] hidden flex-row items-center justify-end gap-2 @md:flex">
        {more(other)}
        {secondaryArray.map(renderSecondary)}
        {link}
        {primary}
      </div>

      {/* Narrow (<@md): own full-width line; measured left-overflow. */}
      <div
        className={cn(
          "relative z-[1] flex flex-row items-center justify-end gap-2 @md:hidden",
          "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
          compact && "mt-3 pt-3"
        )}
      >
        <div
          ref={containerRef}
          className="relative flex min-w-0 flex-1 items-center justify-end"
          style={{ gap: GAP }}
        >
          {/* Hidden measurement copy of every secondary button. */}
          <div
            ref={measurementContainerRef}
            aria-hidden="true"
            className="pointer-events-none invisible absolute left-0 top-0 flex items-center whitespace-nowrap"
            style={{ gap: GAP }}
          >
            {secondaryArray.map(renderSecondary)}
          </div>

          {more(narrowMenu, customOverflowIndicatorRef)}
          {shown.map(renderSecondary)}
        </div>

        {link}
        {primary}
      </div>
    </>
  )
}
