import { type ReactNode, useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"
import { DataTestIdWrapper, type WithDataTestIdProps } from "@/lib/data-testid"
import { F0Box } from "@/lib/F0Box"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import {
  MAP_PANEL,
  MAP_PANEL_ENTRANCE,
  MAP_PANEL_TIMING,
  mapSurfaceBlur,
  mapSurfaceProps,
  mapSurfaceRadius,
} from "../internal/mapSurface"

/**
 * Left edge of a panel, given the panels open to its left. Panels stack left to
 * right with the shared gap, so the detail sits beside the list it was opened
 * from rather than over it.
 */
export const mapPanelOffset = (widthsToTheLeft: number[]) =>
  widthsToTheLeft.reduce(
    (left, width) => left + width + MAP_PANEL.gap,
    MAP_PANEL.inset
  )

/**
 * Distance the overlay controls travel to clear the open panels: past the
 * rightmost edge, keeping the shared gap. `0` when nothing is open.
 */
export const mapPanelShift = (
  controlInset: number,
  rightmostEdge: number | null
) => (rightmostEdge === null ? 0 : rightmostEdge + MAP_PANEL.gap - controlInset)

export interface F0MapSidebarProps extends WithDataTestIdProps {
  children?: ReactNode
  /** Whether the panel is open. Drives the slide. */
  open: boolean
  /** Distance from the map's left edge, in px. */
  offsetX: number
  /**
   * Distance from the map's top edge, in px. Defaults to the shared inset;
   * raise it to clear something floating over the panel's top corner.
   */
  offsetY?: number
  /** Panel width, in px. */
  width: number
  /**
   * Drop the panel's own padding, for content that brings its own (a header
   * that spans the full width, sections with their own insets). Defaults to
   * `false`.
   */
  disableContentPadding?: boolean
  /**
   * How the panel arrives. `"slide"` (default) travels in from off-canvas, for
   * a panel anchored to the map's edge. `"grow"` scales up into place with a
   * short left-to-right nudge, for one that appears beside another - it has no
   * edge to come from, so sliding it would mean crossing the panel it sits
   * next to.
   */
  entrance?: "slide" | "grow"
  /**
   * A control belonging to the panel itself, in a header row of its own. The
   * row is reserved space, not an overlay: the content below gets whatever
   * height is left and scrolls inside it, so nothing ever passes under the
   * control or is clipped by it.
   */
  headerAction?: ReactNode
  /** Names the region for assistive tech. Defaults to the map's panel label. */
  ariaLabel?: string
}

/**
 * A map side panel: the same material as the overlay controls, given the height
 * of the map. Slides in from the left edge it is anchored to, which is also
 * where its toggle sits - so the panel visibly comes from the button that
 * opened it.
 *
 * A CSS transition rather than a JS one: the open state is a boolean we own, so
 * there is nothing to interpolate imperatively, it keeps running while the map
 * is busy painting tiles, and no ancestor's `MotionConfig` can silently
 * override it (`ApplicationFrame` sets one).
 *
 * Stays mounted and translates out of frame (the map clips it), so the slide
 * runs on the compositor in both directions. `inert` keeps it out of the tab
 * order and off assistive tech while it is away.
 *
 * Presentational: `F0Map` owns the open state and the geometry.
 */
export const F0MapSidebar = ({
  children,
  open,
  offsetX,
  offsetY = MAP_PANEL.inset,
  width,
  disableContentPadding = false,
  entrance = "slide",
  headerAction,
  ariaLabel,
  dataTestId,
}: F0MapSidebarProps) => {
  const i18n = useI18n()
  const reduceMotion = useReducedMotion()

  // Arriving and leaving are different gestures, so they get different timing.
  const timing = open ? MAP_PANEL_TIMING.enter : MAP_PANEL_TIMING.exit
  const shape = MAP_PANEL_ENTRANCE[entrance]

  // Two transforms, on two elements, because they answer to different things.
  //
  // The outer one is the panel's slot in the left-to-right stack. It changes
  // when a panel to its left opens or closes, so it travels on that panel's
  // slide timing - the two move as one.
  //
  // The inner one is this panel's own entrance, on its own timing. Sharing a
  // single transform would force one duration on both, and a follow would run
  // at the entrance's speed instead of the slide's.
  const slotX = offsetX - MAP_PANEL.inset

  // The slot moves because a neighbour arrived or left, so it runs on that
  // direction's timing - travelling with the panel that displaced it rather
  // than on a clock of its own. Keyed on the value, so a repeat render for one
  // commit (StrictMode) leaves the history alone.
  const slotHistory = useRef({ from: slotX, to: slotX })
  if (slotHistory.current.to !== slotX) {
    slotHistory.current = { from: slotHistory.current.to, to: slotX }
  }
  const slotTiming =
    slotX > slotHistory.current.from
      ? MAP_PANEL_TIMING.enter
      : MAP_PANEL_TIMING.exit

  // A slide's own width clears the body and the base inset clears the map's
  // edge, so nothing is left showing. A grow has nowhere to go, so it shrinks
  // back toward the edge it came from instead.
  const closedTransform =
    "closedTransform" in shape
      ? shape.closedTransform
      : `translateX(calc(-100% - ${MAP_PANEL.inset}px))`

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <div
        // The slot spans the panel's full height whether or not the panel is
        // showing, so it must never take a pointer event of its own: an
        // invisible strip over the map would swallow drags there. Only the open
        // panel takes them back.
        className="pointer-events-none absolute bottom-2 z-10"
        style={{
          left: MAP_PANEL.inset,
          top: offsetY,
          width,
          transform: `translateX(${slotX}px)`,
          // `top` is a layout property, so it is the one thing here that can't
          // ride the compositor. It only moves when a panel gains or loses a
          // neighbour floating over it, so the cost is a handful of frames on a
          // single element rather than anything per-interaction.
          transitionProperty: reduceMotion ? "none" : "transform, top",
          transitionDuration: slotTiming.duration,
          transitionTimingFunction: slotTiming.easing,
        }}
      >
        <div
          role="complementary"
          aria-label={ariaLabel ?? i18n.map.panel}
          ref={(node) => {
            if (open) node?.removeAttribute("inert")
            else node?.setAttribute("inert", "")
          }}
          className={cn(
            // MapLibre's stylesheet puts `font-size: 12px` on
            // `.maplibregl-map`, which the panel would otherwise inherit -
            // shrinking any consumer content whose type doesn't pin its own
            // size. Back to the app base.
            "relative h-full overflow-hidden text-base",
            mapSurfaceBlur(mapSurfaceRadius.panel),
            open ? "pointer-events-auto" : "opacity-0"
          )}
          style={{
            // Reduced motion drops the movement but keeps the fade, so the
            // panel still reads as arriving rather than blinking into place.
            transform:
              open || reduceMotion
                ? "translateX(0px) scale(1)"
                : closedTransform,
            transformOrigin: "origin" in shape ? shape.origin : undefined,
            transitionProperty: reduceMotion ? "opacity" : "transform, opacity",
            transitionDuration: timing.duration,
            transitionTimingFunction: timing.easing,
          }}
        >
          <F0Box
            {...mapSurfaceProps}
            borderRadius={mapSurfaceRadius.panel}
            padding="none"
            height="full"
          >
            {/* 2px of breathing room around everything, below F0Box's smallest
                token (`xs` is 4px), so it lives on a plain wrapper. */}
            <div
              className={cn(
                "flex h-full flex-col",
                !disableContentPadding && "p-0.5"
              )}
            >
              {headerAction && (
                <div className="flex shrink-0 justify-start">
                  {headerAction}
                </div>
              )}
              {/* Takes the height the header leaves. The consumer's own scroll
                  container lives in here, so its content can never reach the
                  header row above it. It carries the padding the header doesn't
                  need, keeping the rows off the edge. */}
              <div
                className={cn(
                  "min-h-0 flex-1",
                  !disableContentPadding && "p-1"
                )}
              >
                {children}
              </div>
            </div>
          </F0Box>
        </div>
      </div>
    </DataTestIdWrapper>
  )
}
