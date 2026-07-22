import { useMediaQuery } from "usehooks-ts"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { F0Link, type F0LinkProps } from "@/components/F0Link"
import { cn } from "@/lib/utils"
import { CardFooter } from "@/ui/Card"

export interface CardPrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
  /**
   * Visual emphasis of the primary action. `"outline"` renders it as an outline
   * button while keeping it pinned at the trailing edge (so a lone CTA never
   * sheds into the "⋯" menu). Use it when the card's only action shouldn't carry
   * full primary weight.
   * @default "default"
   */
  variant?: "default" | "outline"
}

export interface CardSecondaryAction {
  label: string
  icon?: IconType
  onClick: () => void
}

export interface CardSecondaryLink extends Pick<
  F0LinkProps,
  "href" | "target" | "disabled"
> {
  label: string
}

interface CardActionsProps {
  primaryAction?: CardPrimaryAction
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink
  compact?: boolean
}

export function CardActions({
  primaryAction,
  secondaryActions,
  compact = false,
}: CardActionsProps) {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const hasActions = primaryAction || hasSecondaryActions()

  if (!hasActions) {
    return null
  }

  return (
    <CardFooter
      className={cn(
        "flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]",
        // Sit above the full-card overlay link (z-1) so the footer never triggers
        // card navigation — only its own buttons/links act, keeping it a safe
        // place for actions. The negative margins stretch this region to the
        // card's edges (over the card padding) so the whole footer band, not just
        // the area right under the buttons, is excluded from the clickable card.
        // cursor-auto so the footer band doesn't inherit the card's pointer cursor
        // (the card root sets it when interactive via onClick) — it isn't clickable
        // as a card; only its own actions are.
        "relative z-[2] -mx-4 -mb-4 mt-4 cursor-auto border-0 border-t border-solid border-t-f1-border-secondary px-4 pb-4 pt-4",
        compact && "-mb-3 pb-3 pt-3"
      )}
      // Stop clicks in the footer from bubbling to the card root's onClick handler
      // (used when the card is interactive via onClick instead of a link).
      onClick={(e) => e.stopPropagation()}
    >
      {secondaryActions && (
        <div className="flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit">
          {Array.isArray(secondaryActions) ? (
            secondaryActions.map((action, index) => (
              <F0Button
                key={index}
                label={action.label}
                icon={action.icon}
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation()
                  action.onClick()
                }}
                hideLabel={isDesktop && index > 0}
                size={isDesktop ? (compact ? "sm" : "md") : "lg"}
              />
            ))
          ) : (
            <F0Link
              href={secondaryActions.href}
              target={secondaryActions.target}
              disabled={secondaryActions.disabled}
              onClick={(e) => e.stopPropagation()}
              data-testid="secondary-link"
            >
              {secondaryActions.label}
            </F0Link>
          )}
        </div>
      )}

      {primaryAction && (
        <div className="w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center">
          <F0Button
            label={primaryAction.label}
            icon={primaryAction.icon}
            variant={primaryAction.variant}
            onClick={(e) => {
              e.stopPropagation()
              primaryAction.onClick()
            }}
            size={isDesktop ? (compact ? "sm" : "md") : "lg"}
            data-testid="primary-button"
          />
        </div>
      )}
    </CardFooter>
  )

  function hasSecondaryActions(): boolean {
    if (!secondaryActions) return false
    if ("href" in secondaryActions) return true
    if ("length" in secondaryActions) return secondaryActions.length > 0

    return false
  }
}
