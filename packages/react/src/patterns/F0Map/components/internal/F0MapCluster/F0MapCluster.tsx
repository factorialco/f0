import { forwardRef, useState } from "react"

import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { F0MapMarker, type F0MapMarkerVariantProps } from "../../F0MapMarker"

// The 2x2 grid fits four items. Up to four members every head is shown (a
// "+1" instead of the fourth face would be pointless); from five on, three
// heads plus a "+N" counter in the last slot (f0's avatar-list overflow style).
const GRID_CAPACITY = 4
const MAX_AVATARS_WITH_COUNTER = 3
// Hover pushes the items apart and grows them, along the easing curve.
const HOVER_SPREAD = 1.3
const HOVER_SCALE = 1.08
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)"
// Transparent hover/click target, sized to contain the spread + scaled items.
const BOX = 72

// Item-centre offsets (px) by the number of items shown (heads + optional
// counter). The counter is always the last item, so with four it lands in the
// bottom-right - like an avatar list's "+N".
const LAYOUTS: Record<number, ReadonlyArray<readonly [number, number]>> = {
  1: [[0, 0]],
  2: [
    [-8, 0],
    [8, 0],
  ],
  3: [
    [0, -8],
    [-8, 7],
    [8, 7],
  ],
  4: [
    [-8, -8],
    [8, -8],
    [-8, 8],
    [8, 8],
  ],
}

export interface F0MapClusterProps extends WithDataTestIdProps {
  /** Total number of points in the cluster. */
  count: number
  /**
   * The members' marker configs. Up to four heads are shown; from five
   * members on, three heads plus a `+N` counter.
   */
  members: F0MapMarkerVariantProps[]
  onClick?: () => void
  ariaLabel?: string
  /** @private */
  className?: string
}

const F0MapClusterBase = forwardRef<HTMLDivElement, F0MapClusterProps>(
  function F0MapCluster(
    { count, members, onClick, ariaLabel, dataTestId, className },
    ref
  ) {
    const i18n = useI18n()
    const [active, setActive] = useState(false)
    const heads = members.slice(
      0,
      count <= GRID_CAPACITY ? GRID_CAPACITY : MAX_AVATARS_WITH_COUNTER
    )
    const overflow = Math.max(0, count - heads.length)
    const hasCounter = overflow > 0
    const overflowLabel = overflow > 99 ? "+99" : `+${overflow}`
    // Heads first, then the counter (so it takes the bottom-right slot).
    const items = heads.length + (hasCounter ? 1 : 0)
    const positions = LAYOUTS[items] ?? LAYOUTS[4]
    const spread = active ? HOVER_SPREAD : 1
    const scale = active ? HOVER_SCALE : 1
    const place = (i: number): React.CSSProperties => {
      const [px, py] = positions[i] ?? [0, 0]
      return {
        transform: `translate(${px * spread}px, ${py * spread}px) scale(${scale})`,
        transition: `transform 240ms ${EASE}`,
      }
    }

    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <div
          ref={ref}
          role="button"
          tabIndex={0}
          aria-label={ariaLabel ?? i18n.t("map.cluster", { count })}
          onClick={onClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onClick?.()
            }
          }}
          onPointerEnter={() => setActive(true)}
          onPointerLeave={() => setActive(false)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          // `group`: the div is the focusable element but it is 0x0, so the
          // focus ring renders on the sized target span below via
          // `group-focus-visible:` (a ring on the div itself would be invisible).
          className={cn("group cursor-pointer outline-none", className)}
          // Zero-size origin (like a single marker) so maplibre's `center`
          // anchor lands the origin exactly on the coordinate; everything is
          // centred on that origin. A single sized box would anchor off-centre.
          // The mount pop-in lives in the map layer's motion wrapper (one
          // animation, coordinated with the markers' crossfade).
          style={{ position: "relative", width: 0, height: 0 }}
        >
          {/* Transparent hover/click target centred on the origin, so the whole
              cluster area (not just the items) triggers the hover spread. Also
              carries the keyboard focus ring for the 0x0 focusable div. */}
          <span
            aria-hidden
            className="absolute rounded-lg group-focus-visible:ring-1 group-focus-visible:ring-f1-special-ring group-focus-visible:ring-offset-1"
            style={{ left: -BOX / 2, top: -BOX / 2, width: BOX, height: BOX }}
          />
          {/* Member heads. `flex` + zero line-height: the marker's inline-flex
              root would otherwise sit on a text baseline and shift the head. */}
          {heads.map((m, i) => (
            <span
              key={i}
              className="absolute left-0 top-0 flex leading-none"
              style={{ zIndex: i, ...place(i) }}
            >
              <F0MapMarker {...m} showLabel={false} />
            </span>
          ))}
          {/* Overflow counter: f0's avatar-list "+N" circle (secondary surface,
              secondary foreground, fully rounded), in the last slot. */}
          {hasCounter &&
            (() => {
              const [cx, cy] = positions[heads.length] ?? [0, 0]
              return (
                <span
                  className={cn(
                    "absolute left-0 top-0 flex h-6 min-w-6 items-center justify-center overflow-hidden rounded-full px-1.5",
                    "border border-solid border-f1-border-secondary",
                    // White-90 base with the translucent hover layer on top.
                    "text-f1-foreground-secondary text-sm font-medium leading-none"
                  )}
                  style={{
                    zIndex: MAX_AVATARS_WITH_COUNTER,
                    backgroundColor: "hsl(var(--white-90))",
                    transform: `translate(${cx * spread}px, ${cy * spread}px) translate(-50%, -50%) scale(${scale})`,
                    transition: `transform 240ms ${EASE}`,
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-f1-background-hover"
                  />
                  <span className="relative">{overflowLabel}</span>
                </span>
              )
            })()}
        </div>
      </DataTestIdWrapper>
    )
  }
)

F0MapClusterBase.displayName = "F0MapCluster"

export const F0MapCluster = F0MapClusterBase
