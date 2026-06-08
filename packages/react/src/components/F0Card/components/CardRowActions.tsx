import { F0Icon, type IconType } from "@/components/F0Icon"
import { type StatusVariant } from "@/components/tags/F0TagStatus"
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
 * `justify-end` keeping the buttons at the trailing edge. Once stacked we leave
 * it `auto`: the flex column stretches it to full width, and crucially that lets
 * the `-mx-4` full-bleed footer extend symmetrically — an explicit `w-full`
 * would clip the right edge, since a negative right margin can't widen a
 * fixed-width box. `never` is always inline.
 */
const actionsWidthClassName: Record<CardRowStackAt, string> = {
  sm: "@xs:min-w-0 @xs:flex-1",
  md: "@md:min-w-0 @md:flex-1",
  lg: "@lg:min-w-0 @lg:flex-1",
  never: "min-w-0 flex-1",
}

// Visibility of the icon-only inline cluster — shown at/above the breakpoint
// (and always, for `never`). Pairs with `stackedClusterVisibility` below; only
// the confirm/reject variant renders both, to swap icon-only ↔ labelled on stack.
const inlineClusterVisibility: Record<CardRowStackAt, string> = {
  sm: "hidden @xs:flex",
  md: "hidden @md:flex",
  lg: "hidden @lg:flex",
  never: "flex",
}

// Visibility of the labelled stacked cluster — shown only below the breakpoint.
const stackedClusterVisibility: Record<CardRowStackAt, string> = {
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

/**
 * Resolved state shown at the trailing edge in place of the actions: a coloured
 * icon (e.g. `Check` for accepted, `Cross` for rejected) carrying the outcome.
 */
export interface CardRowStatus {
  /** The icon to render (e.g. `Check` for accepted, `Cross` for rejected). */
  icon: IconType
  /** Colour family. */
  variant: StatusVariant
  /** Accessible label; the icon carries meaning, so this is required. */
  label: string
}

// Status variant → F0Icon colour token (no "neutral" icon colour; map to secondary).
const statusIconColor: Record<
  StatusVariant,
  "secondary" | "info" | "positive" | "warning" | "critical"
> = {
  neutral: "secondary",
  info: "info",
  positive: "positive",
  warning: "warning",
  critical: "critical",
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
  /**
   * Resolved-state icon shown at the trailing edge in place of any actions
   * (e.g. the "Accepted" / "Rejected" outcome of a confirm/reject row).
   * Takes precedence over every action prop.
   */
  status?: CardRowStatus
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
 * Pass `confirmAction` / `rejectAction` for the confirm/reject variant — reject
 * (✗, outline) then confirm (✓, solid primary), which replaces the standard
 * actions. Icon-only while inline; the buttons reveal their labels once the row
 * stacks onto its own line.
 */
export function CardRowActions({
  primaryAction,
  secondaryActions,
  otherActions,
  confirmAction,
  rejectAction,
  status,
  compact = false,
  stackAt = "never",
}: CardRowActionsProps) {
  const size = compact ? "sm" : "md"

  // Resolved state: a status tag replaces the actions. It's informational, so
  // no click-stop / z-index — a row-level overlay link stays clickable through
  // it. The outer flex drops it to its own line when stacked, with the footer.
  if (status) {
    return (
      <div
        className={cn(
          "flex items-center justify-end",
          stackedChrome[stackAt],
          stackAt !== "never" && compact && "mt-3 pt-3"
        )}
      >
        <F0Icon
          icon={status.icon}
          color={statusIconColor[status.variant]}
          size="lg"
          role="img"
          aria-label={status.label}
        />
      </div>
    )
  }

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

  // Confirm/reject variant: reject (✗, outline) then confirm (✓, solid primary).
  // Icon-only while inline; once the row stacks, the buttons drop onto their own
  // line and reveal their labels. `hideLabel` is a static per-button prop and the
  // stack is a container query (invisible to ButtonGroup), so we render both
  // clusters and toggle them with CSS — mirroring the row root's breakpoint.
  if (confirmAction || rejectAction) {
    const variant = (hideLabel: boolean) => {
      const reject: ButtonGroupButton | undefined = rejectAction
        ? {
            id: "reject",
            icon: Cross,
            label: rejectAction.label ?? "Reject",
            hideLabel,
            disabled: rejectAction.disabled,
            onClick: rejectAction.onClick,
          }
        : undefined
      const confirm: ButtonGroupButton | undefined = confirmAction
        ? {
            id: "confirm",
            icon: Check,
            label: confirmAction.label ?? "Confirm",
            hideLabel,
            disabled: confirmAction.disabled,
            onClick: confirmAction.onClick,
          }
        : undefined
      return (
        <ButtonGroup
          primaryAction={confirm}
          secondaryActions={reject ? [reject] : undefined}
          size={size}
          gap={GAP}
        />
      )
    }

    const inline = (
      // Icon-only, inline at the trailing edge.
      <div
        className={cn(
          "relative z-[1] min-w-0 flex-1",
          inlineClusterVisibility[stackAt]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {variant(true)}
      </div>
    )

    // `never` never stacks, so the labelled cluster (and its duplicate
    // ButtonGroup) is skipped entirely.
    if (stackAt === "never") {
      return inline
    }

    return (
      <>
        {inline}
        {/* Labelled, on its own line below the breakpoint. Width left to the
            flex column's stretch so the `-mx-4` footer bleeds symmetrically. */}
        <div
          className={cn(
            "relative z-[1]",
            stackedClusterVisibility[stackAt],
            stackedChrome[stackAt],
            compact && "mt-3 pt-3"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {variant(false)}
        </div>
      </>
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
