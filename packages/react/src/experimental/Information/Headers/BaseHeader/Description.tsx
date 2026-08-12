import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

import { useI18n } from "@/lib/providers/i18n"
import {
  lerp,
  px,
} from "@/experimental/Information/Headers/BaseHeader/collapse"
import { cn } from "@/lib/utils"

export const Description = ({
  description,
  progress = 0,
  tween,
}: {
  description: string
  /** How far the header is condensed, 0 to 1. Steps 16px down to f0's 14px. */
  progress?: number
  /** Transition classes, when the caller is switching rather than scrolling. */
  tween?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const translations = useI18n()

  /*
   * We render a hidden block (`measure`) which we then use to read the height of the
   * description block without any restrictions applied.
   *
   * If it is bigger than the height of description, we show the "show more" button.
   */
  const descriptionRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const descriptionSize = useResizeObserver({ ref: descriptionRef })
  const measureSize = useResizeObserver({ ref: measureRef })

  useEffect(() => {
    if (measureSize.height && descriptionSize.height) {
      // A pixel of tolerance. The two heights are observed separately, so while
      // the header is condensing there can be a frame where one has reported
      // the new font size and the other has not, and that gap is not
      // truncation.
      setNeedsTruncation(measureSize.height > descriptionSize.height + 1)
    }
  }, [measureSize.height, descriptionSize.height])

  // Both the visible text and the hidden measure take the same size, or the
  // truncation test that compares their heights misreads.
  const size = {
    fontSize: px(lerp(16, 14, progress)),
    lineHeight: px(lerp(24, 20, progress)),
  }

  /*
   * The box's height is never set: at `auto` it reflows in the very frame the
   * collapse changes the font size, so the chrome above the tab strip moves
   * with the scroll instead of a measurement behind it. That was the cost of
   * animating a measured height: the observer reports after layout, so the
   * header's height trailed every scroll event by a frame and eased for 150ms
   * on top of that.
   *
   * The flip between clamped and expanded is the one moment that should
   * animate, and it is played as a one-shot: measure before, flip, measure
   * after, animate between, release back to `auto`. Nothing persists to fight
   * the reflow afterwards.
   */
  const boxRef = useRef<HTMLDivElement>(null)
  const heightBeforeToggle = useRef<number | null>(null)

  const toggle = () => {
    heightBeforeToggle.current = boxRef.current?.offsetHeight ?? null
    setIsExpanded((current) => !current)
  }

  useLayoutEffect(() => {
    const box = boxRef.current
    const from = heightBeforeToggle.current
    heightBeforeToggle.current = null
    if (!box || from === null || from === box.offsetHeight) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return

    // Missing under jsdom, and the flip works unanimated.
    box.animate?.([{ height: px(from) }, { height: px(box.offsetHeight) }], {
      duration: 150,
      easing: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    })
  }, [isExpanded])

  return (
    <div className="flex max-w-[640px] flex-col gap-1">
      <div
        ref={boxRef}
        className={cn(
          isExpanded ? "overflow-y-scroll" : "overflow-clip",
          "relative max-h-80"
        )}
      >
        <div
          ref={measureRef}
          style={size}
          className={cn(
            "pointer-events-none invisible absolute left-0 top-0 -z-10 text-f1-foreground-secondary",
            // The same transition as the visible text. Without it this block
            // snaps to the new font size while the visible one is still easing
            // into it, so on the way back to full it stands a line-height
            // taller than the text it is measured against and every short
            // description reads as truncated.
            tween
          )}
          aria-hidden="true"
        >
          {description}
        </div>
        <div
          ref={descriptionRef}
          style={size}
          className={cn(
            "text-f1-foreground-secondary",
            tween,
            !isExpanded && "line-clamp-2"
          )}
        >
          {description}
        </div>
      </div>
      {(needsTruncation || isExpanded) && (
        <button
          onClick={toggle}
          className="relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover"
        >
          {isExpanded
            ? translations.actions.showLess
            : translations.actions.showAll}
        </button>
      )}
    </div>
  )
}
