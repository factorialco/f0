import { type Ref } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Link } from "@/components/F0Link"
import { Dropdown, type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Check, Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useOverflowCalculation } from "@/ui/OverflowList/useOverflowCalculation"

import {
  type CardPrimaryAction,
  type CardSecondaryAction,
  type CardSecondaryLink,
} from "./CardActions"

// Pixel gap between the trailing controls — mirrors the `gap-2` used elsewhere.
const GAP = 8

/**
 * Container breakpoint at which the card row switches between its inline and its
 * stacked (actions-on-their-own-line) layout. `never` keeps it inline at every
 * width.
 */
export type CardRowStackAt = "sm" | "md" | "lg" | "never"

/**
 * Outer row layout: a stacked column that becomes an inline row at the chosen
 * container breakpoint. Exported so the card root and the actions share one source
 * of truth (the breakpoint must match for the layout to stay coherent).
 * Each value is a full static string so Tailwind's JIT can see the classes.
 *
 * Breakpoint mapping (ascending): the `"sm"` option uses Tailwind's `@xs`
 * (24rem / 384px). f0-core overrides `@sm` to 40rem (640px) — larger than
 * `@md` (28rem / 448px) — so using `@sm` here would (wrongly) stack *before*
 * `md`. `@xs < @md < @lg` keeps sm < md < lg as expected.
 */
export const cardRowClassName: Record<CardRowStackAt, string> = {
  sm: "flex flex-col @xs:flex-row @xs:items-center @xs:justify-between @xs:gap-4",
  md: "flex flex-col @md:flex-row @md:items-center @md:justify-between @md:gap-4",
  lg: "flex flex-col @lg:flex-row @lg:items-center @lg:justify-between @lg:gap-4",
  never: "flex flex-row items-center justify-between gap-4",
}

// Inline ("wide") cluster — shown only at/above the breakpoint.
const wideClusterVisibility: Record<CardRowStackAt, string> = {
  sm: "hidden @xs:flex",
  md: "hidden @md:flex",
  lg: "hidden @lg:flex",
  never: "flex",
}

// Stacked ("narrow") cluster — shown only below the breakpoint.
const narrowClusterVisibility: Record<CardRowStackAt, string> = {
  sm: "flex @xs:hidden",
  md: "flex @md:hidden",
  lg: "flex @lg:hidden",
  never: "hidden",
}

// Footer-style separator shown while the actions sit on their own stacked line;
// removed once they go inline at the breakpoint.
const stackedChrome: Record<CardRowStackAt, string> = {
  sm: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @xs:mx-0 @xs:mt-0 @xs:border-t-0 @xs:px-0 @xs:pt-0",
  md: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0",
  lg: "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @lg:mx-0 @lg:mt-0 @lg:border-t-0 @lg:px-0 @lg:pt-0",
  never: "",
}

export interface CardRowConfirmAction {
  onClick: () => void
  /** Accessible label and tooltip. Defaults to "Confirm" / "Reject". */
  label?: string
  disabled?: boolean
}

interface CardRowActionsProps {
  primaryAction?: CardPrimaryAction
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink
  /** Overflow (⋯) menu actions — always live in the left "more" menu. */
  otherActions?: DropdownItem[]
  /** Confirm (✓) icon-only action — enables the confirm/reject variant. */
  confirmAction?: CardRowConfirmAction
  /** Reject (✗) icon-only action — enables the confirm/reject variant. */
  rejectAction?: CardRowConfirmAction
  compact?: boolean
  /** Container breakpoint at which the actions drop to their own line. */
  stackAt?: CardRowStackAt
}

/**
 * Trailing actions for the card row. The "more" (⋯) menu sits on the LEFT and
 * the primary stays pinned at the trailing edge.
 *
 * Two layouts, toggled by the card's container width at `stackAt`:
 * - Wide (inline): all secondary buttons shown; the ⋯ holds only `otherActions`.
 * - Narrow: the row drops onto its own full-width line; there the cluster IS
 *   width-bounded, so we measure it (same engine as `OverflowList`) and shed
 *   secondary buttons right→left into the left ⋯ as it tightens.
 *
 * Pass `confirmAction` / `rejectAction` for the icon-only confirm/reject variant
 * (✗ then ✓), which replaces the standard actions.
 */
export function CardRowActions({
  primaryAction,
  secondaryActions,
  otherActions,
  confirmAction,
  rejectAction,
  compact = false,
  stackAt = "never",
}: CardRowActionsProps) {
  const size = compact ? "sm" : "md"

  // Hook must run unconditionally, before any early return.
  const secondaryArray = Array.isArray(secondaryActions) ? secondaryActions : []
  const {
    containerRef,
    measurementContainerRef,
    customOverflowIndicatorRef,
    visibleItems,
    overflowItems,
    isInitialized,
  } = useOverflowCalculation(secondaryArray, GAP)

  const chrome = cn(
    stackedChrome[stackAt],
    stackAt !== "never" && compact && "mt-3 pt-3"
  )

  // Confirm/reject variant: icon-only outline buttons, reject (✗) then confirm (✓).
  if (confirmAction || rejectAction) {
    return (
      <div
        className={cn(
          "relative z-[1] flex flex-row items-center justify-end gap-2",
          chrome
        )}
      >
        {rejectAction && (
          <F0Button
            icon={Cross}
            label={rejectAction.label ?? "Reject"}
            hideLabel
            variant="outline"
            size={size}
            disabled={rejectAction.disabled}
            onClick={(e) => {
              e.stopPropagation()
              rejectAction.onClick()
            }}
            data-testid="reject-button"
          />
        )}
        {confirmAction && (
          <F0Button
            icon={Check}
            label={confirmAction.label ?? "Confirm"}
            hideLabel
            variant="outline"
            size={size}
            disabled={confirmAction.disabled}
            onClick={(e) => {
              e.stopPropagation()
              confirmAction.onClick()
            }}
            data-testid="confirm-button"
          />
        )}
      </div>
    )
  }

  const secondaryLink =
    secondaryActions && !Array.isArray(secondaryActions)
      ? secondaryActions
      : undefined
  const other = otherActions ?? []

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

  const more = (items: DropdownItem[], ref?: Ref<HTMLDivElement>) =>
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
      {/* Wide (inline): all secondary buttons shown, ⋯ = otherActions. */}
      <div
        className={cn(
          "relative z-[1] flex-row items-center justify-end gap-2",
          wideClusterVisibility[stackAt]
        )}
      >
        {more(other)}
        {secondaryArray.map(renderSecondary)}
        {link}
        {primary}
      </div>

      {/* Narrow: own full-width line; measured left-overflow. Only rendered when
          a breakpoint is set — with `never` the inline cluster above is enough,
          and we avoid a hidden measurement subtree + its ResizeObserver. */}
      {stackAt !== "never" && (
        <div
          className={cn(
            "relative z-[1] flex-row items-center justify-end gap-2",
            narrowClusterVisibility[stackAt],
            chrome
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
      )}
    </>
  )
}
