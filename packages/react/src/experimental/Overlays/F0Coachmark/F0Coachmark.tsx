import { useId, useRef } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
} from "@/ui/popover"

import type { F0CoachmarkProps } from "./types"

const ARROW_WIDTH = 12
const ARROW_HEIGHT = 6

export const F0Coachmark = ({
  open,
  onDismiss,
  title,
  description,
  action,
  arrow = true,
  side = "bottom",
  align = "center",
  sideOffset = arrow ? ARROW_HEIGHT + 2 : 4,
  children,
}: F0CoachmarkProps) => {
  const i18n = useI18n()
  const contentRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)

  const id = useId()
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        // Radix only requests closing (escape key); opening is consumer-driven.
        if (!nextOpen) onDismiss()
      }}
    >
      <PopoverAnchor asChild>{children}</PopoverAnchor>
      <PopoverContent
        ref={contentRef}
        side={side}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={8}
        tabIndex={-1}
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        // Focusing the panel itself announces the coachmark without landing
        // the user on the dismiss button, which Enter would immediately fire.
        // This fires before focus moves, so it is also where we can still see
        // what had focus beforehand.
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          previouslyFocused.current =
            document.activeElement as HTMLElement | null
          contentRef.current?.focus()
        }}
        // Radix restores focus to the Trigger on close, but a coachmark
        // anchors instead of triggering, so nothing owns the restore.
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          const element = previouslyFocused.current
          previouslyFocused.current = null
          if (
            element &&
            element !== document.body &&
            document.contains(element)
          ) {
            element.focus()
          }
        }}
        // A coachmark stays until it is acknowledged, so clicking the page
        // behind it must not count as a dismissal.
        onInteractOutside={(event) => event.preventDefault()}
        // The surface swaps the foreground/background pair rather than using
        // the `inverse` tokens: both sit on the --neutral-* ramp, so they flip
        // with the theme and the panel always contrasts against the page.
        //
        // Deliberately not the `inverse` tokens, for two separate reasons:
        //   - f1-foreground-inverse is white in *both* themes (it maps to
        //     --white-*, not --neutral-*), so pairing it with the flipping
        //     f1-background-inverse collapses to white-on-white in dark mode.
        //   - f1-background-inverse is 0.92/0.9 alpha. This panel floats over
        //     arbitrary page content and has no backdrop blur, so it needs an
        //     opaque surface to stay legible.
        className={cn(
          "w-[17.5rem] rounded-lg border-f1-background/20 bg-f1-foreground p-4",
          "text-f1-background shadow-md"
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-start justify-between gap-2">
            <p id={titleId} className="font-semibold">
              {title}
            </p>
            <ButtonInternal
              variant="ghost"
              icon={Cross}
              size="sm"
              hideLabel
              onClick={onDismiss}
              label={i18n.actions.close}
              // Action variants resolve against the page theme, not this
              // inverted surface, so the two buttons take their colours from
              // the same flipping pair as the panel.
              className="-mr-2 -mt-1 flex-shrink-0 text-f1-background hover:bg-f1-background/20"
            />
          </div>
          {description && (
            <p id={descriptionId} className="font-normal">
              {description}
            </p>
          )}
          <ButtonInternal
            variant="ghost"
            label={action.label}
            onClick={action.onClick}
            block
            className="bg-f1-background/10 text-f1-background hover:bg-f1-background/20"
          />
        </div>
        {arrow && (
          <PopoverArrow asChild width={ARROW_WIDTH} height={ARROW_HEIGHT}>
            {/* Pulled 1px into the panel so its fill hides the panel border
                running behind the arrow's base. */}
            <svg
              viewBox={`0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`}
              className="-translate-y-px overflow-visible"
            >
              {/* stroke-current picks up the panel's text colour, which is the
                  same token the border is derived from; there is no
                  stroke-f1-background utility to match it directly. */}
              <path
                d={`M0 0L${ARROW_WIDTH / 2} ${ARROW_HEIGHT}L${ARROW_WIDTH} 0`}
                className="fill-f1-foreground stroke-current"
                strokeWidth={1}
                strokeOpacity={0.2}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </PopoverArrow>
        )}
      </PopoverContent>
    </Popover>
  )
}

F0Coachmark.displayName = "F0Coachmark"
