import { useMediaQuery } from "usehooks-ts"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { F0Link, type F0LinkProps } from "@/components/F0Link"
import { cn } from "@/lib/utils"
import { ButtonGroup } from "@/ui/ButtonGroup"
import { CardFooter } from "@/ui/Card"

export interface CardPrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
  /**
   * Render the button icon-only, hiding the label visually. The label is kept
   * as an accessible tooltip/aria-label. Requires `icon`.
   */
  hideLabel?: boolean
}

export interface CardSecondaryAction {
  label: string
  icon?: IconType
  onClick: () => void
  /**
   * Render the button icon-only, hiding the label visually. The label is kept
   * as an accessible tooltip/aria-label. Requires `icon`.
   */
  hideLabel?: boolean
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
  /**
   * Inline variant used by the one-liner card: actions sit on the same row as
   * the text and only stack (full width) when the card's own width drops below
   * the `@md` container breakpoint. No footer chrome, no viewport media query.
   */
  oneLiner?: boolean
}

export function CardActions({
  primaryAction,
  secondaryActions,
  compact = false,
  oneLiner = false,
}: CardActionsProps) {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const hasActions = primaryAction || hasSecondaryActions()

  if (!hasActions) {
    return null
  }

  if (oneLiner) {
    // Button `size` is a prop, not a CSS value, so it can't be switched by a
    // container query — we keep it constant and let CSS handle layout/width.
    const size = compact ? "sm" : "md"

    return (
      <div
        className={cn(
          "relative z-[1] flex flex-row flex-wrap items-center justify-end gap-2",
          // Narrow (default): a footer-style grey separator spanning the card
          // width, with the actions right-aligned beneath the text — matching
          // the regular CardActions footer.
          "-mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
          compact && "mt-3 pt-3",
          // Wide: inline to the right of the text, no separator.
          "@md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0"
        )}
      >
        {secondaryActions &&
          (Array.isArray(secondaryActions) ? (
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
                hideLabel={action.hideLabel}
                size={size}
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
          ))}

        {primaryAction && (
          <F0Button
            label={primaryAction.label}
            icon={primaryAction.icon}
            onClick={(e) => {
              e.stopPropagation()
              primaryAction.onClick()
            }}
            hideLabel={primaryAction.hideLabel}
            size={size}
            data-testid="primary-button"
          />
        )}
      </div>
    )
  }

  return (
    <CardFooter
      className={cn(
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        compact && "pt-3"
      )}
    >
      <ButtonGroup align="end" stackOnMobile className="relative z-[1] w-full">
        {secondaryActions && (
          <div className="flex w-full flex-col gap-md sm:w-fit sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit">
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
                  hideLabel={action.hideLabel || (isDesktop && index > 0)}
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
              onClick={(e) => {
                e.stopPropagation()
                primaryAction.onClick()
              }}
              hideLabel={primaryAction.hideLabel}
              size={isDesktop ? (compact ? "sm" : "md") : "lg"}
              data-testid="primary-button"
            />
          </div>
        )}
      </ButtonGroup>
    </CardFooter>
  )

  function hasSecondaryActions(): boolean {
    if (!secondaryActions) return false
    if ("href" in secondaryActions) return true
    if ("length" in secondaryActions) return secondaryActions.length > 0

    return false
  }
}
