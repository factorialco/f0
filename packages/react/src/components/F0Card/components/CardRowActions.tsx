import { type DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Check, Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import {
  ButtonGroup,
  type ButtonGroupButton,
  type ButtonGroupSecondaryItem,
  type ButtonGroupSecondaryLink,
} from "@/ui/ButtonGroup"

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

/**
 * Width of the actions wrapper. `ButtonGroup` reserves the "⋯"-button width on
 * top of its content, so a shrink-to-fit container would always shed the tail
 * into the menu — it needs a bound *wider* than its content. Inline (at/above
 * the breakpoint) we hand it the remaining row space via `flex-1`, with its own
 * `justify-end` keeping the buttons at the trailing edge; once stacked it spans
 * the full line instead (no `flex-1`, which would grow it vertically in the
 * column). `never` is always inline.
 */
const actionsWidthClassName: Record<CardRowStackAt, string> = {
  sm: "w-full @xs:w-auto @xs:min-w-0 @xs:flex-1",
  md: "w-full @md:w-auto @md:min-w-0 @md:flex-1",
  lg: "w-full @lg:w-auto @lg:min-w-0 @lg:flex-1",
  never: "min-w-0 flex-1",
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
 * Trailing actions for the card row — a thin adapter over {@link ButtonGroup}.
 * The data-driven `primaryAction` / `secondaryActions` / `otherActions` triplet
 * maps straight through; `ButtonGroup` owns the row layout, the width-driven
 * overflow into the "⋯" menu, and pinning the primary at the trailing edge.
 *
 * The card adds two things on top:
 * - The wrapper stops click propagation so an action never triggers the row's
 *   own `onClick` / overlay-link navigation.
 * - `stackAt` drops the cluster onto its own full-width line (with a footer
 *   hairline) below a container breakpoint; the breakpoint mapping is shared
 *   with the row root via {@link cardRowClassName}.
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

  const wrapperClassName = cn(
    "relative z-[1]",
    actionsWidthClassName[stackAt],
    stackedChrome[stackAt],
    stackAt !== "never" && compact && "mt-3 pt-3"
  )

  const wrap = (group: React.ReactNode) => (
    // Keep action clicks from bubbling to the row's onClick / overlay link.
    <div className={wrapperClassName} onClick={(e) => e.stopPropagation()}>
      {group}
    </div>
  )

  // Confirm/reject variant: icon-only outline buttons, reject (✗) then confirm (✓).
  if (confirmAction || rejectAction) {
    const variantActions: ButtonGroupButton[] = []
    if (rejectAction) {
      variantActions.push({
        id: "reject",
        icon: Cross,
        label: rejectAction.label ?? "Reject",
        hideLabel: true,
        disabled: rejectAction.disabled,
        onClick: rejectAction.onClick,
      })
    }
    if (confirmAction) {
      variantActions.push({
        id: "confirm",
        icon: Check,
        label: confirmAction.label ?? "Confirm",
        hideLabel: true,
        disabled: confirmAction.disabled,
        onClick: confirmAction.onClick,
      })
    }
    return wrap(
      <ButtonGroup secondaryActions={variantActions} size={size} gap={GAP} />
    )
  }

  const secondaryItems:
    | ButtonGroupSecondaryItem[]
    | ButtonGroupSecondaryLink
    | undefined = Array.isArray(secondaryActions)
    ? secondaryActions.map(
        (action, index): ButtonGroupButton => ({
          id: `secondary-${index}`,
          label: action.label,
          icon: action.icon,
          onClick: action.onClick,
        })
      )
    : secondaryActions
      ? {
          label: secondaryActions.label,
          // `CardSecondaryLink.href` is loosely typed as optional; a link always
          // carries one in practice, so pass it through unchanged.
          href: secondaryActions.href as string,
          target: secondaryActions.target,
          disabled: secondaryActions.disabled,
        }
      : undefined

  const primary: ButtonGroupButton | undefined = primaryAction
    ? {
        id: "primary",
        label: primaryAction.label,
        icon: primaryAction.icon,
        onClick: primaryAction.onClick,
      }
    : undefined

  const hasAnyAction =
    !!primary ||
    (Array.isArray(secondaryActions)
      ? secondaryActions.length > 0
      : !!secondaryActions) ||
    (otherActions?.length ?? 0) > 0

  if (!hasAnyAction) {
    return null
  }

  return wrap(
    <ButtonGroup
      primaryAction={primary}
      secondaryActions={secondaryItems}
      otherActions={otherActions}
      size={size}
      gap={GAP}
    />
  )
}
