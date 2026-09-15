import type { IconType } from "@factorialco/f0-react"

import { F0Button } from "@factorialco/f0-react"
import { ChevronLeft, ChevronRight } from "@factorialco/f0-react/icons/app"
import { useLayoutEffect, useRef, useState } from "react"

import { OneHomeRecommendation } from "./OneHomeRecommendation"

/**
 * The recommendations as a one-line carousel under the composer (Angel,
 * 2026-09-15). It SCROLLS, it does not loop: the back arrow only appears
 * once you have moved, and the forward one leaves at the end.
 *
 * It moves by SCROLLING the viewport, and the right-hand fade is per-item
 * opacity — neither is a stylistic choice. A mask and a transform both
 * make their element a BACKDROP ROOT, which is what left the pills'
 * `backdrop-filter` with nothing behind it to blur: the dotted grid was
 * showing through them untouched (Angel, 2026-09-15). Scrolling moves the
 * row without either.
 */

export type Recommendation = {
  icon: IconType
  label: string
  primary?: boolean
}

const GAP = 8
/** Kept clear on the right, so nothing is legible under the chevron. */
const CHEVRON_ROOM = 12
/** Where an item starts fading, measured back from the viewport's edge. */
const FADE_SPAN = 120

export function HomeRecommendationCarousel({
  pinned,
  items,
}: {
  /** Rendered before the carousel and never scrolled. */
  pinned?: React.ReactNode
  items: Recommendation[]
}) {
  const viewRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(0)
  /** Where the row is heading, so spammed clicks keep stepping. */
  const target = useRef(0)
  const [atEnd, setAtEnd] = useState(false)

  const sync = () => {
    const view = viewRef.current
    const track = trackRef.current
    if (!view || !track) return
    const left = view.scrollLeft
    setScrolled(left)
    setAtEnd(left >= view.scrollWidth - view.clientWidth - 1)
    const edge = view.clientWidth - CHEVRON_ROOM
    for (const child of track.children) {
      if (!(child instanceof HTMLElement)) continue
      const fade = (edge - (child.offsetLeft - left)) / FADE_SPAN
      child.style.opacity = String(Math.max(0, Math.min(1, fade)))
    }
  }

  useLayoutEffect(() => {
    sync()
    // Widths move after the webfont lands and whenever the canvas
    // resizes, and a stale measurement fades pills that are in plain
    // sight, so re-run on both.
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(sync)
    observer.observe(track)
    void document.fonts?.ready.then(sync)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const go = (direction: 1 | -1) => {
    const view = viewRef.current
    const track = trackRef.current
    if (!view || !track) return
    const lefts = [...track.children]
      .filter((child): child is HTMLElement => child instanceof HTMLElement)
      .map((child) => child.offsetLeft)
    // Measured from where the row is HEADED, not from where it currently
    // is: a second click during the glide would otherwise step from a
    // mid-flight position and barely move (Angel, 2026-09-15).
    const from = target.current
    const stop =
      direction === 1
        ? lefts.find((left) => left > from + 1)
        : [...lefts].reverse().find((left) => left < from - 1)
    const max = view.scrollWidth - view.clientWidth
    target.current = Math.max(
      0,
      Math.min(max, stop ?? (direction === 1 ? max : 0))
    )
    view.scrollTo({ left: target.current })
  }

  return (
    <div className="-mt-1 flex w-[712px] max-w-full items-center gap-2">
      {pinned}
      {/* Clock-in is its own control, not a recommendation, so the two
          groups are split the way f0's headers split theirs. */}
      {pinned && <div className="mx-1 h-4 w-px bg-f1-border-secondary" />}
      {scrolled > 0 && (
        <F0Button
          variant="outline"
          size="md"
          icon={ChevronLeft}
          hideLabel
          label="Previous recommendations"
          onClick={() => go(-1)}
        />
      )}
      <div
        ref={viewRef}
        onScroll={sync}
        // `overflow-x: hidden` still scrolls programmatically, and the
        // smooth behaviour is the browser's own, so a second click during
        // the glide simply retargets it instead of being swallowed.
        className="home-recommendations min-w-0 flex-1 overflow-x-hidden"
      >
        <div
          ref={trackRef}
          // `relative`, so each pill's offsetLeft is measured against the
          // TRACK: without a positioned parent it resolves against a far
          // ancestor and every fade computes as zero.
          className="relative flex w-max items-center"
          style={{ gap: GAP }}
        >
          {items.map((item) => (
            <OneHomeRecommendation
              key={item.label}
              variant={item.primary ? "primary" : "ghost"}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
      {!atEnd && (
        <F0Button
          variant="outline"
          size="md"
          icon={ChevronRight}
          hideLabel
          label="More recommendations"
          onClick={() => go(1)}
        />
      )}
    </div>
  )
}
