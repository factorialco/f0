import { Button } from "@/components/Actions/Button"
import { Link, type LinkProps } from "@/components/Actions/Link"
import { IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { CardFooter } from "@/ui/Card"
import { useMediaQuery } from "usehooks-ts"

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

export interface CardSecondaryLink
  extends Pick<LinkProps, "href" | "target" | "disabled"> {
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
  const hasActions = primaryAction || (secondaryActions?.length)

  if (!hasActions) {
    return null
  }

  return (
    <CardFooter
      className={cn(
        "flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]",
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        compact && "pt-3"
      )}
    >
      {secondaryActions && (
        <div className="flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit">
          {Array.isArray(secondaryActions) ? (
            secondaryActions.map((action, index) => (
              <Button
                key={index}
                label={action.label}
                icon={action.icon}
                variant="outline"
                onClick={action.onClick}
                hideLabel={isDesktop && index > 0}
                round={isDesktop && index > 0}
                size={isDesktop ? (compact ? "sm" : "md") : "lg"}
              />
            ))
          ) : (
            <Link
              href={secondaryActions.href}
              target={secondaryActions.target}
              disabled={secondaryActions.disabled}
              data-testid="secondary-link"
            >
              {secondaryActions.label}
            </Link>
          )}
        </div>
      )}

      {primaryAction && (
        <div className="w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center">
          <Button
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
}
