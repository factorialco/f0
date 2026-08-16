import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"

import {
  DEFAULT_ASPECT_RATIO,
  SPEAKER_PROMOTION_HOLD_MS,
  SPOTLIGHT_ASPECT,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
  gapFor,
  minTileWidthFor,
} from "../../layout/constants"
import { resolveAutoFocus } from "../../layout/auto-focus"
import { layoutGrid, solveGrid } from "../../layout/grid-solver"
import { reorderForSpeakers } from "../../layout/speaker-order"
import { solveSpotlight } from "../../layout/spotlight-solver"
import { buildTiles, type F0MeetingTile } from "../../layout/tiles"
import { useMeasuredBox } from "../../layout/useMeasuredBox"
import { useF0MeetingRoster } from "../../providers/F0MeetingProvider"
import { useMeetingSpeakers } from "../../providers/useMeetingSignal"
import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0Rect } from "../../types"
import {
  tileEnterTransition,
  tileExitTransition,
  tileTransition,
} from "../../utils/meeting-motion"
import { OverflowTile } from "./OverflowTile"
import { ParticipantTile } from "./ParticipantTile"

type PlacedTile = { tile: F0MeetingTile; rect: F0Rect; compact: boolean }

type GridLayout = {
  placed: PlacedTile[]
  overflow: F0MeetingTile[]
  overflowRect: F0Rect | null
  focusKey: string | null
}

const EMPTY_LAYOUT: GridLayout = {
  placed: [],
  overflow: [],
  overflowRect: null,
  focusKey: null,
}

/**
 * Lays the room out with absolute rects computed in JS rather than CSS grid.
 * That is what lets tiles animate between layouts by x/y/width/height — a FLIP
 * would animate `scale`, and scaling a `<video>` visibly warps its content.
 */
export const MeetingGrid = () => {
  const { participants } = useF0MeetingRoster()
  const speakers = useMeetingSpeakers()
  const { manualFocusKey, setManualFocusKey } = useMeetingSurface()
  const shouldReduceMotion = useReducedMotion()
  const [containerRef, box] = useMeasuredBox<HTMLDivElement>()

  const seenShareKeysRef = useRef<ReadonlySet<string>>(new Set())
  const lastSpokenAtRef = useRef<Record<string, number>>({})

  const tiles = useMemo(() => buildTiles(participants), [participants])

  useEffect(() => {
    const now = Date.now()
    for (const id of speakers) lastSpokenAtRef.current[id] = now
  }, [speakers])

  const focus = useMemo(
    () =>
      resolveAutoFocus({
        tiles,
        manualFocusKey,
        seenShareKeys: seenShareKeysRef.current,
      }),
    [tiles, manualFocusKey]
  )
  seenShareKeysRef.current = focus.seenShareKeys

  useEffect(() => {
    if (focus.clearManualFocus) setManualFocusKey(null)
  }, [focus.clearManualFocus, setManualFocusKey])

  const handleToggleFocus = useCallback(
    (key: string) => {
      setManualFocusKey(manualFocusKey === key ? null : key)
    },
    [manualFocusKey, setManualFocusKey]
  )

  const layout = useMemo<GridLayout>(() => {
    if (box.width <= 0 || box.height <= 0 || tiles.length === 0) {
      return EMPTY_LAYOUT
    }

    const gap = gapFor(box.width)
    // A tall, narrow container (a docked panel) spotlights the active speaker
    // even when nobody is pinned: a column of stacked faces is unreadable.
    const forcedByShape =
      box.width / box.height < SPOTLIGHT_ASPECT && tiles.length > 1
    const speakingTile = forcedByShape
      ? tiles.find(
          (tile) =>
            tile.kind === "camera" && speakers.includes(tile.participant.id)
        )
      : undefined

    const focusKey =
      focus.focusKey ?? (forcedByShape ? (speakingTile ?? tiles[0])?.key : null)
    const spotlight = focusKey
      ? tiles.find((tile) => tile.key === focusKey)
      : undefined

    const rest = spotlight
      ? tiles.filter((tile) => tile.key !== spotlight.key)
      : []
    const spotlightSolution = spotlight
      ? solveSpotlight({
          stripCount: rest.length,
          width: box.width,
          height: box.height,
          gap,
          stripAspect: DEFAULT_ASPECT_RATIO,
          // A camera takes the shape of its box; a screen share fills the box
          // and letterboxes inside its own tile, so only the missing part of
          // the picture goes black.
          spotlightRange:
            spotlight.kind === "screenShare" ||
            spotlight.participant.preventCrop
              ? undefined
              : { min: TILE_ASPECT_MIN, max: TILE_ASPECT_MAX },
        })
      : null

    // A chip standing for ONE person costs the same slot as that person's tile
    // and tells you less, so it never earns its place. Where the strip has a
    // slot the arithmetic below already guarantees at least "+2"; where it has
    // none there is nothing to give back, and the room is better off as a plain
    // two-up grid than as one huge tile beside a "+1".
    const wouldHideOnePerson =
      spotlightSolution?.strip.length === 0 && rest.length === 1

    if (spotlight && spotlightSolution && !wouldHideOnePerson) {
      // The chip needs a cell of its own, so when the strip is full it takes
      // the last thumbnail's place instead of being appended past the edge.
      const hasOverflow = spotlightSolution.stripOverflow > 0
      const stripSlots = hasOverflow
        ? Math.max(0, spotlightSolution.strip.length - 1)
        : spotlightSolution.strip.length

      const placed: PlacedTile[] = [
        { tile: spotlight, rect: spotlightSolution.spotlight, compact: false },
        ...spotlightSolution.strip.slice(0, stripSlots).map((rect, index) => ({
          tile: rest[index] as F0MeetingTile,
          rect,
          compact: true,
        })),
      ]

      // Too narrow for a strip at all: the chip still has to exist, so it sits
      // in the corner of the spotlight rather than vanishing with the people
      // it represents.
      const cornerChip = { width: 88, height: 44 }
      const overflowRect = hasOverflow
        ? (spotlightSolution.strip[stripSlots] ?? {
            x: Math.max(0, box.width - cornerChip.width - gap),
            y: Math.max(0, box.height - cornerChip.height - gap),
            ...cornerChip,
          })
        : null

      return {
        placed,
        overflow: rest.slice(stripSlots),
        overflowRect,
        focusKey,
      }
    }

    const minTileWidth = minTileWidthFor(box.width)
    // How many cells fit at a usable size. Solving a second time to "make room"
    // for the chip is what used to lose a slot: the re-solve often returned the
    // same cell count, so one fewer person was shown than actually fit.
    const solution = solveGrid({
      count: tiles.length,
      width: box.width,
      height: box.height,
      gap,
      minAspect: TILE_ASPECT_MIN,
      maxAspect: TILE_ASPECT_MAX,
      preferredAspect: DEFAULT_ASPECT_RATIO,
      minTileWidth,
    })
    const capacity = solution.visibleCount
    const hasOverflow = capacity < tiles.length
    // The chip is a cell like any other, so it simply takes the last one.
    const visibleCount = hasOverflow ? Math.max(0, capacity - 1) : capacity

    const ordered = reorderForSpeakers({
      tiles,
      speakerIds: speakers,
      pageSize: visibleCount,
      lastSpokenAt: lastSpokenAtRef.current,
      now: Date.now(),
      holdMs: SPEAKER_PROMOTION_HOLD_MS,
    })

    const rects = layoutGrid(solution, box, gap)

    return {
      placed: ordered.slice(0, visibleCount).map((tile, index) => ({
        tile,
        rect: rects[index] as F0Rect,
        compact: solution.tileWidth < 160,
      })),
      overflow: ordered.slice(visibleCount),
      overflowRect: hasOverflow ? (rects[visibleCount] ?? null) : null,
      focusKey: null,
    }
  }, [box, tiles, speakers, focus.focusKey])

  const transition = shouldReduceMotion ? { duration: 0 } : tileTransition

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      data-testid="meeting-grid"
    >
      <AnimatePresence initial={false}>
        {layout.placed.map(({ tile, rect, compact }) => (
          <motion.div
            key={tile.key}
            className="absolute left-0 top-0"
            initial={{
              opacity: 0,
              x: rect.x,
              y: rect.y,
              width: rect.width,
              height: rect.height,
            }}
            animate={{
              opacity: 1,
              x: rect.x,
              y: rect.y,
              width: rect.width,
              height: rect.height,
            }}
            exit={{
              opacity: 0,
              transition: shouldReduceMotion
                ? { duration: 0 }
                : tileExitTransition,
            }}
            transition={{
              ...transition,
              opacity: shouldReduceMotion
                ? { duration: 0 }
                : tileEnterTransition,
            }}
          >
            <ParticipantTile
              tile={tile}
              compact={compact}
              isFocused={layout.focusKey === tile.key}
              canFocus={tiles.length > 1}
              onToggleFocus={handleToggleFocus}
            />
          </motion.div>
        ))}

        {layout.overflowRect && layout.overflow.length > 0 && (
          <motion.div
            key="meeting-overflow"
            className="absolute left-0 top-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: layout.overflowRect.x,
              y: layout.overflowRect.y,
              width: layout.overflowRect.width,
              height: layout.overflowRect.height,
            }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <OverflowTile tiles={layout.overflow} compact={box.width < 480} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
