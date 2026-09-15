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

/** Between the pills themselves (Angel, 2026-09-15). */
/** How long a chevron's glide is assumed to take. */
const TURN_MS = 600
const GAP = 2
/** Kept clear on the right, so nothing is legible under the chevron. */
const CHEVRON_ROOM = 12
/** How steep the fade into the chevron is (Angel, 2026-09-15). */
const FADE_SPAN = 64

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
  const [canGoBack, setCanGoBack] = useState(false)
  /** Where the row is heading, so spammed clicks keep stepping. */
  const target = useRef(0)
  /** When the last chevron glide started. */
  const gliding = useRef(0)
  const [atEnd, setAtEnd] = useState(false)

  const sync = () => {
    const view = viewRef.current
    const track = trackRef.current
    if (!view || !track) return
    const left = view.scrollLeft
    // While a chevron's glide is in flight the button follows the row's
    // DESTINATION, so pressing back to the start collapses it in step
    // with the scroll instead of waiting for it to land (Angel,
    // 2026-09-15). A hand-driven scroll has no destination, so there it
    // simply follows the position.
    if (performance.now() - gliding.current > TURN_MS) {
      target.current = left
      setCanGoBack(left > 0)
    }
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
    setCanGoBack(target.current > 0)
    gliding.current = performance.now()
    view.scrollTo({ left: target.current })
  }

  return (
    <div
      data-home-recommendations
      // gap-1: the arrows sit 4px off the track, not 8 (Angel,
      // 2026-09-15).
      className="flex w-[712px] max-w-full items-center gap-1"
    >
      {pinned}
      {/* Clock-in is its own control, not a recommendation, so the two
          groups are split the way f0's headers split theirs. */}
      {pinned && <div className="mx-1 h-4 w-px bg-f1-border-secondary" />}
      {/* The back arrow GROWS in and shrinks out rather than popping: an
          unmount at the end of the glide snapped the whole row sideways
          (Angel, 2026-09-15). Width and opacity both animate, so the row
          slides into the space instead of jumping into it. */}
      <div
        className="flex shrink-0 items-center overflow-hidden"
        style={{
          width: canGoBack ? 32 : 0,
          opacity: canGoBack ? 1 : 0,
          marginRight: canGoBack ? 0 : -8,
          pointerEvents: canGoBack ? "auto" : "none",
          transition:
            "width 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out, margin-right 260ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <F0Button
          variant="outline"
          size="sm"
          icon={ChevronLeft}
          hideLabel
          label="Previous recommendations"
          onClick={() => go(-1)}
        />
      </div>
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
          size="sm"
          icon={ChevronRight}
          hideLabel
          label="More recommendations"
          onClick={() => go(1)}
        />
      )}
    </div>
  )
}
