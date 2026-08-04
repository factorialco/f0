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
        // Same surface recipe as F0Toast and F0ActionBar, the library's other
        // floating dark panels: dark in both themes, held off the page by
        // shadow + blur rather than by inverting. Keeping the three consistent
        // is why this does not use its own tokens.
        //
        // Because the surface no longer flips polarity, the content below can
        // sit in a plain `dark` wrapper and every control inside resolves the
        // right tokens on its own — which is what lets the buttons here be
        // stock, with no colour overrides.
        //
        // w-72 (18rem) is the relative spacing scale step the DS maps `width`
        // to, and matches PopoverContent's own default. No border: an outline on
        // the panel has to be matched on the arrow, which leaves a seam where
        // the two meet. `border-none` rather than relying on PopoverContent's
        // `border` computing to 0px.
        // `overflow-visible` is required, not cosmetic. PopoverContent ships
        // `overflow-auto`, and `backdrop-blur` makes this element a containing
        // block for absolutely-positioned descendants — which pulls the arrow
        // inside that scroll box and clips it away entirely. A coachmark is a
        // few lines tall and never needs to scroll, so the clip buys nothing.
        className={cn(
          "w-72 overflow-visible rounded-lg border-none p-4",
          "shadow-lg backdrop-blur-sm",
          "bg-f1-background-inverse text-f1-foreground-inverse",
          "dark:bg-f1-background-tertiary"
        )}
      >
        {/* `dark` so every control inside resolves the tokens that suit a dark
            surface, exactly as F0Toast and F0ActionBar do. Safe to hardcode
            because this panel is dark in both themes. This is what keeps the
            buttons below free of colour overrides. */}
        <div className="dark flex flex-col gap-3">
          <div className="flex flex-row items-start justify-between gap-2">
            <p id={titleId} className="font-semibold">
              {title}
            </p>
            {/* Same treatment as F0Toast's close button: outline, sm, icon-only,
                inset by the panel's own padding rather than pulled into the
                corner, so the two components read consistently. */}
            <ButtonInternal
              variant="outline"
              icon={Cross}
              size="sm"
              hideLabel
              onClick={onDismiss}
              label={i18n.actions.close}
              className="flex-shrink-0"
            />
          </div>
          {description && (
            <p id={descriptionId} className="font-normal">
              {description}
            </p>
          )}
          <ButtonInternal
            variant="outline"
            label={action.label}
            onClick={action.onClick}
            block
          />
        </div>
        {arrow && (
          <PopoverArrow asChild width={ARROW_WIDTH} height={ARROW_HEIGHT}>
            {/* The fill uses the panel's own surface tokens, alpha included, so
                both composite over the same backdrop to the same colour. It is
                NOT pulled into the panel: the surface is translucent, so an
                overlap would stack the two alphas and draw a darker line along
                the arrow's base. Abutting instead keeps them a single shape. */}
            <svg viewBox={`0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`}>
              <path
                d={`M0 0L${ARROW_WIDTH / 2} ${ARROW_HEIGHT}L${ARROW_WIDTH} 0Z`}
                className="fill-f1-background-inverse dark:fill-f1-background-tertiary"
              />
            </svg>
          </PopoverArrow>
        )}
      </PopoverContent>
    </Popover>
  )
}

F0Coachmark.displayName = "F0Coachmark"
