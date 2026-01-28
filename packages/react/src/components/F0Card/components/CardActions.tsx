import { useMemo } from "react"
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

type CardSecondaryActions = {
  /** Hide labels for secondary actions */
  hideLabels?: boolean
  /** The secondary actions to display */
  actions: CardSecondaryAction[] | CardSecondaryLink
}

interface CardActionsProps {
  primaryAction?: CardPrimaryAction
  secondaryActions?:
    | CardSecondaryAction[]
    | CardSecondaryLink
    | CardSecondaryActions
  compact?: boolean
}

export function CardActions({
  primaryAction,
  compact = false,
  ...props
}: CardActionsProps) {
  // Normalize the secondaryActions prop to always return an object with the actions and hideLabels properties
  const secondaryActions = useMemo(
    () =>
      props.secondaryActions && "actions" in props.secondaryActions
        ? props.secondaryActions
        : {
            actions: props.secondaryActions,
            hideLabels: false,
          },
    [props.secondaryActions]
  )
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const hasActions = primaryAction || hasSecondaryActions()

  if (!hasActions) {
    return null
  }

  const areCecondaryActionsButtons = (
    buttons: CardSecondaryAction[] | CardSecondaryLink
  ): buttons is CardSecondaryAction[] => {
    return Array.isArray(buttons)
  }

  return (
    <CardFooter
      className={cn(
        "flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]",
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        compact && "pt-3"
      )}
    >
      {secondaryActions.actions && (
        <div className="flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit">
          {areCecondaryActionsButtons(secondaryActions.actions) ? (
            secondaryActions.actions.map((action, index) => (
              <F0Button
                key={index}
                label={action.label}
                icon={action.icon}
                variant="outline"
                onClick={action.onClick}
                hideLabel={
                  secondaryActions.hideLabels || (isDesktop && index > 0)
                }
                size={isDesktop ? (compact ? "sm" : "md") : "lg"}
              />
            ))
          ) : (
            <F0Link
              href={secondaryActions.actions.href}
              target={secondaryActions.actions.target}
              disabled={secondaryActions.actions.disabled}
              data-testid="secondary-link"
            >
              {secondaryActions.actions.label}
            </F0Link>
          )}
        </div>
      )}

      {primaryAction && (
        <div className="w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center">
          <F0Button
            label={primaryAction.label}
            icon={primaryAction.icon}
            onClick={primaryAction.onClick}
            size={isDesktop ? (compact ? "sm" : "md") : "lg"}
            data-testid="primary-button"
          />
        </div>
      )}
    </CardFooter>
  )

  function hasSecondaryActions(): boolean {
    if (!secondaryActions) {
      return false
    }
    if ("href" in secondaryActions) {
      return true
    }
    if (secondaryActions.actions && "length" in secondaryActions.actions) {
      return secondaryActions.actions.length > 0
    }
    return false
  }
}
