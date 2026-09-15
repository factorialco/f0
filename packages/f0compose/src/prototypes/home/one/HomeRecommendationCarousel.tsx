import type { IconType } from "@factorialco/f0-react"

import { F0Button } from "@factorialco/f0-react"
import { ChevronLeft, ChevronRight } from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"

import { OneHomeRecommendation } from "./OneHomeRecommendation"

/**
 * The recommendations as a one-line carousel under the composer (Angel,
 * 2026-09-15). The row is masked on the right, so an item is already at
 * zero opacity by the time it reaches the chevron; the left edge only
 * fades while the queue is actually turning, since at rest the first pill
 * starts at the input's own left edge.
 *
 * Turning is a ROTATION, not a scroll: the right chevron sends the first
 * item to the back of the queue, so the row can never run out. Each turn
 * is a FLIP — the track is animated by the outgoing item's own width,
 * then the order is committed with the transition off, so the swap is
 * invisible.
 *
 * Clock-in is not part of it: it is pinned in front while it is still
 * outstanding, so the first thing under the input is always the thing you
 * have not done yet.
 */

export type Recommendation = {
  icon: IconType
  label: string
  primary?: boolean
}

/** Matches the turn's transition below. */
const TURN_MS = 420
const GAP = 8

export function HomeRecommendationCarousel({
  pinned,
  items,
}: {
  /** Rendered before the carousel and never rotated. */
  pinned?: React.ReactNode
  items: Recommendation[]
}) {
  const [order, setOrder] = useState(items)
  const [shift, setShift] = useState(0)
  const [animating, setAnimating] = useState(false)
  /** The left chevron only exists once there is something behind you. */
  const [turned, setTurned] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const busy = useRef(false)

  const widthOf = (index: number) => {
    const child = trackRef.current?.children[index]
    return child instanceof HTMLElement
      ? child.getBoundingClientRect().width + GAP
      : 0
  }

  /** Forward: the first item slides out to the LEFT and rejoins the back. */
  const next = () => {
    if (busy.current || order.length < 2) return
    busy.current = true
    setTurned(true)
    setAnimating(true)
    setShift(-widthOf(0))
    window.setTimeout(() => {
      setAnimating(false)
      setShift(0)
      setOrder((current) => [...current.slice(1), current[0]])
      busy.current = false
    }, TURN_MS)
  }

  /** Back: the last item is put in front and eased in from the left. */
  const previous = () => {
    if (busy.current || order.length < 2) return
    busy.current = true
    const incoming = order[order.length - 1]
    setOrder((current) => [incoming, ...current.slice(0, -1)])
    // The new first item is in the DOM but not yet on screen: park the
    // track one item to the left without a transition, then release it.
    requestAnimationFrame(() => {
      setAnimating(false)
      setShift(-widthOf(0))
      requestAnimationFrame(() => {
        setAnimating(true)
        setShift(0)
        window.setTimeout(() => {
          busy.current = false
        }, TURN_MS)
      })
    })
  }

  // The left fade belongs to the TURN: a standing one would eat into the
  // first pill, which sits at the input's left edge (Angel, 2026-09-15).
  const mask = animating
    ? "linear-gradient(to right, transparent 0px, black 28px, black calc(100% - 96px), transparent 100%)"
    : "linear-gradient(to right, black 0px, black calc(100% - 96px), transparent 100%)"

  return (
    <div className="flex w-[712px] max-w-full items-center gap-2">
      {pinned}
      {turned && (
        <F0Button
          variant="outline"
          size="md"
          icon={ChevronLeft}
          hideLabel
          label="Previous recommendations"
          onClick={previous}
        />
      )}
      <div
        className="min-w-0 flex-1 overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center"
          style={{
            gap: GAP,
            transform: `translateX(${shift}px)`,
            transition: animating
              ? `transform ${TURN_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
        >
          {order.map((item) => (
            <OneHomeRecommendation
              key={item.label}
              variant={item.primary ? "primary" : "ghost"}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
      <F0Button
        variant="outline"
        size="md"
        icon={ChevronRight}
        hideLabel
        label="More recommendations"
        onClick={next}
      />
    </div>
  )
}
