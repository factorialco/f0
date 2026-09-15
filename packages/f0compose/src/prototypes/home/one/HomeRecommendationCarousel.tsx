import type { IconType } from "@factorialco/f0-react"

import { F0Icon } from "@factorialco/f0-react"
import { ChevronRight } from "@factorialco/f0-react/icons/app"
import { useLayoutEffect, useRef, useState } from "react"

import { OneHomeRecommendation } from "./OneHomeRecommendation"

/**
 * The recommendations as a one-line carousel under the composer (Angel,
 * 2026-09-15). The row is masked at both ends: an item is already at zero
 * opacity by the time it reaches the chevron on the right, and a new one
 * fades up out of the left edge as the queue turns.
 *
 * Turning is a ROTATION, not a scroll: the chevron takes the item off the
 * end and puts it at the front, which is what makes the arrival happen on
 * the left. The shift is animated the FLIP way — the new first item is in
 * the DOM before it is visible, so its width is measured, the track is
 * parked one item to the left without a transition, and the next frame
 * releases it to 0 with the ease.
 */

export type Recommendation = {
  icon: IconType
  label: string
  /** The one filled pill; everything else is a ghost. */
  primary?: boolean
  dismissOnClick?: boolean
  onClick?: () => void
  onDismissed?: () => void
}

/** Room kept clear on the right for the chevron, so nothing is legible
 *  under it. */
const CHEVRON_ROOM = 40
const GAP = 8

export function HomeRecommendationCarousel({
  items,
}: {
  items: Recommendation[]
}) {
  const [order, setOrder] = useState(items)
  const [shift, setShift] = useState(0)
  const [animating, setAnimating] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const turning = useRef(false)

  // Items can leave the list (Clock-in does, once it has been acted on)
  // and the carousel must not keep showing a pill that is gone.
  useLayoutEffect(() => {
    setOrder((current) => {
      const labels = new Set(items.map((item) => item.label))
      const kept = current.filter((item) => labels.has(item.label))
      const added = items.filter(
        (item) => !current.some((seen) => seen.label === item.label)
      )
      return kept.length + added.length === current.length && added.length === 0
        ? current
        : [...kept, ...added]
    })
  }, [items])

  useLayoutEffect(() => {
    if (!turning.current) return
    turning.current = false
    const first = trackRef.current?.children[0]
    if (!(first instanceof HTMLElement)) return
    setAnimating(false)
    setShift(-(first.getBoundingClientRect().width + GAP))
    const frame = requestAnimationFrame(() => {
      setAnimating(true)
      setShift(0)
    })
    return () => cancelAnimationFrame(frame)
  }, [order])

  const turn = () => {
    if (order.length < 2) return
    turning.current = true
    setOrder((current) => [
      current[current.length - 1],
      ...current.slice(0, -1),
    ])
  }

  const mask = animating
    ? `linear-gradient(to right, transparent 0px, black 28px, black calc(100% - ${CHEVRON_ROOM + 56}px), transparent calc(100% - ${CHEVRON_ROOM}px))`
    : `linear-gradient(to right, black 0px, black calc(100% - ${CHEVRON_ROOM + 56}px), transparent calc(100% - ${CHEVRON_ROOM}px))`

  return (
    // Flush under the input: the 12px gap it used to carry made the row
    // read as a separate block (Angel, 2026-09-15).
    <div className="relative flex w-[712px] max-w-full items-center">
      <div
        className="min-w-0 flex-1 overflow-hidden"
        // The LEFT fade only exists while the queue is turning: at rest
        // the first pill starts at the input's own left edge, and a
        // standing fade there would eat into it.
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{
            gap: GAP,
            transform: `translateX(${shift}px)`,
            transition: animating
              ? "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
        >
          {order.map((item) => (
            <OneHomeRecommendation
              key={item.label}
              variant={item.primary ? "primary" : "ghost"}
              icon={item.icon}
              label={item.label}
              dismissOnClick={item.dismissOnClick}
              onClick={item.onClick}
              onDismissed={item.onDismissed}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="More recommendations"
        onClick={turn}
        className="f0c-pressable absolute right-0 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border-none bg-transparent backdrop-blur-[4px] hover:bg-f1-background-secondary"
      >
        <F0Icon icon={ChevronRight} size="md" color="default" />
      </button>
    </div>
  )
}
