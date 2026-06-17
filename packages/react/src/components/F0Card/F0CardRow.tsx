import { forwardRef } from "react"

import { F0Link } from "@/components/F0Link"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"
import { cn, focusRing } from "@/lib/utils"
import { Card } from "@/ui/Card"
import { Skeleton } from "@/ui/skeleton"
import { Text } from "@/ui/Text"

import {
  type CardPrimaryAction,
  type CardSecondaryAction,
  type CardSecondaryLink,
} from "./components/CardActions"
import { CardAlertWrapper, alertBorderColor } from "./components/CardAlert"
import { CardAvatar, type CardAvatarVariant } from "./components/CardAvatar"
import {
  CardRowActions,
  type CardRowConfirmAction,
  type CardRowStackAt,
  type CardRowStatus,
  cardRowClassName,
  cardRowLeadingAlignClassName,
} from "./components/CardRowActions"
import { type CardAlertProps } from "./types"

export interface F0CardRowProps {
  /**
   * The primary line of text.
   */
  title: string

  /**
   * Optional secondary line shown beneath the title (wraps across multiple
   * lines when long).
   */
  description?: string

  /**
   * Optional avatar rendered at a fixed `lg` size on the left (the size is not
   * configurable). Accepts any avatar type in the system: person, company, team,
   * file, flag, icon, emoji, module, alert, date, pulse. Types without a `lg`
   * variant (date, pulse) render at their intrinsic size.
   */
  avatar?: CardAvatarVariant

  /**
   * The primary action button, shown at the trailing edge of the row.
   */
  primaryAction?: CardPrimaryAction

  /**
   * Secondary actions (buttons) or a single link, shown before the primary action.
   */
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink

  /**
   * Overflow (⋯) menu actions, rendered as the trailing control of the row.
   */
  otherActions?: DropdownItem[]

  /**
   * Confirm/reject variant: renders an icon-only ✗ (reject) + ✓ (confirm) pair
   * instead of the standard actions. Provide either or both.
   */
  confirmAction?: CardRowConfirmAction

  /**
   * Reject (✗) action of the confirm/reject variant. See {@link confirmAction}.
   */
  rejectAction?: CardRowConfirmAction

  /**
   * Resolved-state icon shown at the trailing edge in place of any actions — the
   * outcome of a confirm/reject row, e.g.
   * `{ icon: Check, variant: "positive", label: "Accepted" }`.
   * Takes precedence over the action props.
   */
  status?: CardRowStatus

  /**
   * Strikes through and dims the title/description, marking the row's subject as
   * void or closed (e.g. a rejected request). Purely presentational — pair it
   * with the matching `status` tag at the call site.
   */
  inactive?: boolean

  /**
   * Container width at which the actions drop to their own line (below it) vs.
   * sit inline (at/above it). `never` keeps them inline at every width.
   * @default "never"
   */
  stackAt?: CardRowStackAt

  /**
   * Stretch to fill the height of its container.
   */
  fullHeight?: boolean

  /**
   * Alert banner displayed above the row with a coloured header strip and matching
   * border. Supports info, warning, critical and positive variants.
   * Use `visible` + `onDismiss` for controlled dismiss behaviour.
   */
  alert?: CardAlertProps

  /**
   * Opt-in: makes the whole row a link to this href. The row only becomes a
   * click target (pointer cursor + hover affordance + overlay link) when `link`
   * or `onClick` is set — otherwise it's a static row whose only interactive
   * parts are its actions.
   */
  link?: string

  /**
   * Opt-in: called when the row is clicked. Like `link`, it turns the whole row
   * into an explicit click target (pointer cursor + hover affordance). Use it
   * for cards whose entire surface is the action (e.g. entry-point cards with no
   * CTA button); leave it unset for rows that act only through their buttons.
   */
  onClick?: () => void

  /**
   * Disables the full-row overlay link (used with `link`) so a parent can manage
   * drag-and-drop while still allowing click navigation via `onClick`.
   */
  disableOverlayLink?: boolean
}

/**
 * A single-row card: optional avatar on the left, stacked title + description,
 * and actions on the right. By default the actions stay inline at every width;
 * set `stackAt` to drop them onto their own line below a container breakpoint
 * (a container query on the card's width, not the viewport), so it reacts
 * correctly inside grids and columns.
 */
const F0CardRowBase = forwardRef<HTMLDivElement, F0CardRowProps>(
  function F0CardRow(
    {
      title,
      description,
      avatar,
      primaryAction,
      secondaryActions,
      otherActions,
      confirmAction,
      rejectAction,
      status,
      inactive = false,
      fullHeight = false,
      alert,
      link,
      onClick,
      disableOverlayLink = false,
      stackAt = "never",
    },
    ref
  ) {
    const hasAlert = !!alert && alert.visible !== false
    // The row is a click target only when it explicitly opts in via `link` or
    // `onClick`; otherwise it's static (only its actions are interactive). This
    // keeps the hover affordance + pointer cursor tied to an actual click action.
    const clickable = !!link || !!onClick

    const body = (
      <Card
        ref={hasAlert ? undefined : ref}
        className={cn(
          "group relative @container bg-f1-background shadow-none transition-all",
          fullHeight && "h-full",
          // Pointer + hover/focus affordance only when the whole row is clickable.
          clickable &&
            "cursor-pointer focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md"
        )}
        style={
          hasAlert
            ? {
                borderColor: alertBorderColor[alert.variant],
                borderWidth: "2px",
              }
            : undefined
        }
        onClick={onClick}
        data-testid="card"
      >
        {link && !disableOverlayLink && (
          <F0Link
            href={link}
            variant="unstyled"
            className={cn("z-1 absolute inset-0 block rounded-xl", focusRing())}
            aria-label={title}
          >
            &nbsp;
          </F0Link>
        )}

        <div className={cardRowClassName[stackAt]}>
          <div
            className={cn(
              "flex min-w-0 flex-row gap-3",
              // Centre a short single-line group against the taller controls, but
              // let it fill from the top once it grows (see the class doc).
              cardRowLeadingAlignClassName[stackAt],
              // Keep the avatar pinned to the top so it stays aligned with the
              // title when the row grows (e.g. a long wrapping description).
              avatar ? "items-start" : "items-center"
            )}
          >
            {avatar && <CardAvatar avatar={avatar} size="lg" />}
            <div className="flex min-w-0 flex-col gap-0">
              <Text
                variant="body"
                content={title}
                className={cn(
                  "break-words font-medium",
                  inactive && "text-f1-foreground-secondary line-through"
                )}
              />
              {description && (
                <Text
                  variant="description"
                  content={description}
                  className={cn("break-words", inactive && "line-through")}
                />
              )}
            </div>
          </div>

          <CardRowActions
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            otherActions={otherActions}
            confirmAction={confirmAction}
            rejectAction={rejectAction}
            status={status}
            stackAt={stackAt}
          />
        </div>
      </Card>
    )

    if (hasAlert) {
      return (
        <CardAlertWrapper ref={ref} alert={alert} fullHeight={fullHeight}>
          {body}
        </CardAlertWrapper>
      )
    }

    return body
  }
)

F0CardRowBase.displayName = "F0CardRow"

const F0CardRowSkeleton = () => {
  return (
    <Card
      className={cn("group relative bg-f1-background shadow-none")}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex min-w-0 flex-row items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-3 w-32 rounded-md" />
            <Skeleton className="h-3 w-20 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
    </Card>
  )
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 */
export const F0CardRow = withDataTestId(
  experimentalComponent(
    "F0CardRow",
    withSkeleton(F0CardRowBase, F0CardRowSkeleton)
  )
)
