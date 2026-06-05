import { forwardRef } from "react"

import { F0Link } from "@/components/F0Link"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { withDataTestId } from "@/lib/data-testid"
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
  cardRowClassName,
} from "./components/CardRowActions"
import { type CardAlertProps } from "./types"

export interface F0CardRowProps {
  /**
   * The primary line of text.
   */
  title: string

  /**
   * Optional secondary line shown beneath the title (single line, truncated).
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
   * Compact layout: tighter padding and smaller controls.
   */
  compact?: boolean

  /**
   * Container width at which the actions drop to their own line (below it) vs.
   * sit inline (at/above it). `never` keeps them inline at every width.
   * @default "never"
   */
  stackAt?: CardRowStackAt

  /**
   * When set, the whole row becomes a link to this href.
   */
  link?: string

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
   * Called when the row is clicked.
   */
  onClick?: () => void

  /**
   * Disables the full-row overlay link so a parent can manage drag-and-drop while
   * still allowing click navigation via `onClick`.
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
      compact = false,
      link,
      fullHeight = false,
      alert,
      onClick,
      disableOverlayLink = false,
      stackAt = "never",
    },
    ref
  ) {
    const hasAlert = !!alert && alert.visible !== false

    const body = (
      <Card
        ref={hasAlert ? undefined : ref}
        className={cn(
          "group relative @container bg-f1-background shadow-none transition-all",
          compact && "p-3",
          fullHeight && "h-full",
          link &&
            "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md"
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
          <div className="flex min-w-0 flex-row items-center gap-3">
            {avatar && <CardAvatar avatar={avatar} size="lg" />}
            <div className="flex min-w-0 flex-col gap-0">
              {title && (
                <Text
                  variant="body"
                  content={title}
                  className="font-medium"
                  ellipsis
                />
              )}
              {description && (
                <Text variant="description" content={description} ellipsis />
              )}
            </div>
          </div>

          <CardRowActions
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            otherActions={otherActions}
            confirmAction={confirmAction}
            rejectAction={rejectAction}
            compact={compact}
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

const F0CardRowSkeleton = ({ compact = false }: { compact?: boolean }) => {
  return (
    <Card
      className={cn(
        "group relative bg-f1-background shadow-none",
        compact && "p-3"
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex min-w-0 flex-row items-center gap-3">
          <Skeleton
            className={cn("h-10 w-10 rounded-full", compact && "h-8 w-8")}
          />
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

export const F0CardRow = withDataTestId(
  withSkeleton(F0CardRowBase, F0CardRowSkeleton)
)
