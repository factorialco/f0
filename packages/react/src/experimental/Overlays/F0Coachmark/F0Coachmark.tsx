import {
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { Cross } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
} from "@/ui/popover"

import { CoachmarkSpotlight } from "./CoachmarkSpotlight"
import type { F0CoachmarkProps } from "./types"

const ARROW_WIDTH = 12
const ARROW_HEIGHT = 6

/**
 * THE PANEL SAYING "OVER HERE": a press that the shield swallowed produces
 * nothing on the page, so the panel is what has to answer for it — a short jump
 * back and forth, the gesture a modal makes when you click its scrim.
 *
 * `translate` rather than `transform`: Radix positions the panel by writing a
 * `transform` on its wrapper, and the tailwindcss-animate classes on the panel
 * itself animate the same property when it opens. `translate` is its own
 * property, so this composes with both instead of fighting them.
 */
const WIGGLE_OFFSETS = ["0px", "-6px", "6px", "-4px", "4px", "0px"]
const WIGGLE_MS = 320

const useWiggle = (ref: RefObject<HTMLElement>) => {
  const reducedMotion = useReducedMotion()

  return useCallback(() => {
    const element = ref.current
    // No `Element.animate` in jsdom, and nothing to say to someone who asked
    // for less motion — the press is still counted either way.
    if (!element || reducedMotion || typeof element.animate !== "function") {
      return
    }
    element.animate(
      WIGGLE_OFFSETS.map((translate) => ({ translate })),
      { duration: WIGGLE_MS, easing: "ease-in-out" }
    )
  }, [ref, reducedMotion])
}

/**
 * The coachmark panel. Rendered by `CoachmarkProvider` for whichever coachmark
 * is at the head of the queue — consumers call `coachmarks.open` instead of
 * rendering this, which is why it takes an already-resolved DOM element and has
 * no `open` prop: being mounted IS being open.
 */
const CoachmarkPanel = ({
  target,
  title,
  description,
  actionLabel,
  onAction,
  onClose,
  step,
  arrow = true,
  side = "bottom",
  align = "center",
  sideOffset = arrow ? ARROW_HEIGHT + 2 : 4,
  container,
  overlay = false,
  onOutsideInteraction,
  leaving = false,
}: F0CoachmarkProps) => {
  const i18n = useI18n()
  const contentRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const wiggle = useWiggle(contentRef)

  const id = useId()
  const titleId = `${id}-title`
  const descriptionId = `${id}-description`

  // The target is a DOM element rather than a child, so Radix positions against
  // it as a "virtual" anchor: a DOM element already satisfies `Measurable`. A
  // fresh ref object per target is what makes Radix re-measure when a step moves
  // the coachmark to a different element.
  const anchorRef = useMemo(() => ({ current: target }), [target])

  // Advancing keeps the panel mounted, so focus would stay on the action button
  // — where a second Enter fires the NEXT step's action before the user has read
  // it, and where the new copy is never announced. Pulling focus back to the
  // panel on each step is what makes a step read like a new message.
  const announcedStep = useRef(step?.current)
  useEffect(() => {
    if (announcedStep.current === step?.current) return
    announcedStep.current = step?.current
    contentRef.current?.focus()
  }, [step?.current])

  // On the last step (or a single-step coachmark) the action ends the coachmark,
  // so it says so; earlier steps say where the button goes.
  const isLastStep = !step || step.current >= step.total
  const label =
    actionLabel ?? (isLastStep ? i18n.coachmark.done : i18n.coachmark.next)

  return (
    <Popover
      open
      onOpenChange={(nextOpen) => {
        // Radix only ever requests closing here (Escape). The coachmark closes
        // itself: there is no `open` prop for a consumer to keep in sync.
        if (!nextOpen) onClose()
      }}
    >
      <PopoverAnchor virtualRef={anchorRef} />
      {/* Under the panel and over everything else. Rendered from here rather
          than by the provider so the two always agree on which element is lit:
          the panel points at `target`, and so does the hole. */}
      {overlay && (
        <CoachmarkSpotlight
          target={target}
          container={container}
          onOutsideInteraction={() => {
            wiggle()
            onOutsideInteraction?.()
          }}
        />
      )}
      <PopoverContent
        ref={contentRef}
        container={container}
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
        // THE STEP-TO-STEP CROSSFADE. `leaving` is the outgoing half: the panel
        // fades down and the provider commits the next step while it is
        // invisible, so the copy swapping and the panel jumping to another
        // element both happen unseen — then the same element fades back up,
        // already in its new place. Two durations rather than one, matched to
        // the provider's own fade-out: going takes less time than arriving.
        //
        // A transition rather than an animation: it has to be interruptible
        // (a second step can start while this one is still fading), and it must
        // not compete with the entrance animation PopoverContent brings, which
        // owns `animation` on this same element. `duration-150` is the provider's
        // own `STEP_FADE_OUT_MS`, so the commit lands on a panel that has just
        // finished going.
        className={cn(
          "w-72 overflow-visible rounded-lg border-none p-4",
          "shadow-lg backdrop-blur-sm",
          "bg-f1-background-inverse text-f1-foreground-inverse",
          "dark:bg-f1-background-tertiary",
          "transition-opacity",
          leaving ? "opacity-0 duration-150" : "opacity-100 duration-200"
        )}
      >
        {/* `dark` so every control inside resolves the tokens that suit a dark
            surface, exactly as F0Toast and F0ActionBar do. Safe to hardcode
            because this panel is dark in both themes. This is what keeps the
            buttons below free of colour overrides. */}
        <div className="dark flex flex-col gap-3">
          {/* Title and description are their own group on a tighter gap-1, the
              same pairing F0Toast uses, so they read as one block. The outer
              gap-3 still separates that block from the action row. */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-start justify-between gap-2">
              <p id={titleId} className="font-semibold">
                {title}
              </p>
              {/* Inset by the panel's own padding rather than pulled into the
                  corner, matching F0Toast's placement. */}
              <ButtonInternal
                variant="outline"
                icon={Cross}
                size="sm"
                hideLabel
                onClick={onClose}
                label={i18n.actions.close}
                className="flex-shrink-0"
              />
            </div>
            {description && (
              // One level down from the title, which keeps the panel's own
              // colour. Same pairing F0Toast uses for title vs description.
              <p
                id={descriptionId}
                className="font-normal text-f1-foreground-inverse-secondary"
              >
                {description}
              </p>
            )}
          </div>
          {/* `ml-auto` on the action rather than `justify-end` on the row, so
              the action stays right aligned whether or not a step is present. */}
          <div className="flex flex-row items-center gap-3">
            {step && (
              <p className="text-f1-foreground-inverse-secondary">
                {step.current}/{step.total}
              </p>
            )}
            <ButtonInternal
              variant="outline"
              label={label}
              onClick={onAction}
              className="ml-auto"
            />
          </div>
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

CoachmarkPanel.displayName = "F0Coachmark"

/**
 * @experimental This is an experimental component use it at your own risk
 *
 * Not part of the public API: usage is counted here, where a coachmark actually
 * reaches the screen, because consumers reach coachmarks through
 * `coachmarks.open` rather than by rendering anything.
 */
export const F0Coachmark = experimentalComponent("F0Coachmark", CoachmarkPanel)
