import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"

import {
  DEFAULT_ASPECT_RATIO,
  SPEAKER_PROMOTION_HOLD_MS,
  TILE_ASPECT_MAX,
  TILE_ASPECT_MIN,
  gapFor,
  gapForTile,
  radiusForTile,
  minTileHeightFor,
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

type PlacedTile = {
  tile: F0MeetingTile
  rect: F0Rect
  compact: boolean
  /** Corner radius in px, scaled to this tile's own width. */
  radius: number
}

type GridLayout = {
  placed: PlacedTile[]
  overflow: F0MeetingTile[]
  overflowRect: F0Rect | null
  /** Matched to whatever the chip ends up sitting next to. */
  overflowRadius: number
  focusKey: string | null
}

const EMPTY_LAYOUT: GridLayout = {
  placed: [],
  overflow: [],
  overflowRect: null,
  overflowRadius: 0,
  focusKey: null,
}

/**
 * Where the chip goes when the layout has no cell to give it: the corner.
 *
 * It still has to exist — vanishing takes the people it stands for with it.
 */
const CORNER_CHIP = { width: 88, height: 44 }

const cornerChipRect = (
  box: { width: number; height: number },
  gap: number
): F0Rect => ({
  x: Math.max(0, box.width - CORNER_CHIP.width - gap),
  y: Math.max(0, box.height - CORNER_CHIP.height - gap),
  ...CORNER_CHIP,
})

/**
 * Lays the room out with absolute rects computed in JS rather than CSS grid.
 * That is what lets tiles animate between layouts by x/y/width/height — a FLIP
 * would animate `scale`, and scaling a `<video>` visibly warps its content.
 */
export const MeetingGrid = () => {
  const { participants } = useF0MeetingRoster()
  const speakers = useMeetingSpeakers()
  const { focusIntent, setFocusIntent } = useMeetingSurface()
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
        intent: focusIntent,
        seenShareKeys: seenShareKeysRef.current,
      }),
    [tiles, focusIntent]
  )
  seenShareKeysRef.current = focus.seenShareKeys

  useEffect(() => {
    if (focus.clearIntent) setFocusIntent({ type: "auto" })
  }, [focus.clearIntent, setFocusIntent])

  const handleToggleFocus = useCallback(
    (key: string) => {
      // Un-focusing has to be expressible, not just "stop pinning": in a
      // one-to-one the auto rule would re-focus the same person immediately,
      // which is what made this button a no-op.
      setFocusIntent(
        focus.focusKey === key ? { type: "none" } : { type: "pinned", key }
      )
    },
    [focus.focusKey, setFocusIntent]
  )

  const layout = useMemo<GridLayout>(() => {
    if (box.width <= 0 || box.height <= 0 || tiles.length === 0) {
      return EMPTY_LAYOUT
    }

    // `floor: 0` drops both minimums — see the "never +1" case below, the one
    // place a tile under the comfort floor beats the alternative.
    const solveWith = (gap: number, floor = 1) =>
      solveGrid({
        count: tiles.length,
        width: box.width,
        height: box.height,
        gap,
        minAspect: TILE_ASPECT_MIN,
        maxAspect: TILE_ASPECT_MAX,
        preferredAspect: DEFAULT_ASPECT_RATIO,
        minTileWidth: floor * minTileWidthFor(box.width),
        minTileHeight: floor * minTileHeightFor(box.height),
      })

    // Two passes, and only two. The gap now depends on the tile size, and the
    // tile size depends on the gap — so solve once with the container's guess,
    // read the tile that produces, and re-solve with the gap that tile actually
    // wants. `solveGrid` is pure and cheap, and stopping at two makes it
    // deterministic rather than a settling loop.
    const provisionalGap = gapFor(box.width)
    const provisional = solveWith(provisionalGap)
    const gap = gapForTile(provisional.tileWidth)
    const solution = gap === provisionalGap ? provisional : solveWith(gap)

    // A spotlight is for something the room is FOCUSED on — a pin, or a screen
    // share the auto-focus picked up. It used to be forced whenever the grid
    // could not seat everyone, and that is the bug behind "with lots of people
    // the tiles float around in odd places": a 30-person room threw away a
    // perfectly good 16-up grid to show one big tile beside a column of 42px
    // slivers. The grid has its own overflow cell, so 15 faces plus a "+15"
    // chip is both the better room and what §Capacity already describes.
    //
    // The exception is a container so small the grid cannot seat even two. There
    // a spotlight is the only honest layout, and it is what keeps the room from
    // rendering nothing but a chip.
    const forcedByFit = solution.visibleCount <= 1 && tiles.length > 1
    const speakingTile = forcedByFit
      ? tiles.find(
          (tile) =>
            tile.kind === "camera" && speakers.includes(tile.participant.id)
        )
      : undefined

    const focusKey =
      focus.focusKey ?? (forcedByFit ? (speakingTile ?? tiles[0])?.key : null)
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
          // The thumbnails take the shape of their own slot, exactly like the
          // grid's tiles: nearly square in a wide room, portrait in a side
          // panel. Pinning them to 16:9 was what left bands above and below
          // them in the panel while the strip claimed the full height.
          stripRange: { min: TILE_ASPECT_MIN, max: TILE_ASPECT_MAX },
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
        {
          tile: spotlight,
          rect: spotlightSolution.spotlight,
          compact: false,
          radius: radiusForTile(spotlightSolution.spotlight.width),
        },
        ...spotlightSolution.strip.slice(0, stripSlots).map((rect, index) => ({
          tile: rest[index] as F0MeetingTile,
          rect,
          compact: true,
          // From each tile's OWN width, so the strip's thumbnails are rounded
          // to their size and not to the spotlight's.
          radius: radiusForTile(rect.width),
        })),
      ]

      // Too narrow for a strip at all: the chip sits in the corner of the
      // spotlight rather than vanishing with the people it represents.
      const overflowRect = hasOverflow
        ? (spotlightSolution.strip[stripSlots] ?? cornerChipRect(box, gap))
        : null

      return {
        placed,
        overflow: rest.slice(stripSlots),
        overflowRect,
        // From its own width, like the thumbnail whose slot it took — so it is
        // rounded exactly like the ones beside it.
        overflowRadius: radiusForTile(overflowRect?.width ?? 0),
        focusKey,
      }
    }

    const capacity = solution.visibleCount
    // The chip is a cell like any other, so it simply takes the last one —
    // except when that is the only cell there is. A room showing nobody and a
    // "+2" is worse than either half of it, so the last face keeps its place
    // and the chip goes in the corner instead.
    const seats = capacity < tiles.length ? Math.max(1, capacity - 1) : capacity

    // Never "+1" (SPEC §Never "+1"): a chip standing for one person costs the
    // same cell as their tile and tells you less. The only way to get there is a
    // container that seats a single tile, and what the spec promises there is
    // the plain two-up grid — so the floor is dropped for that one case rather
    // than hiding a person behind a number.
    const twoUp = tiles.length - seats === 1 ? solveWith(gap, 0) : null
    const grid = twoUp ?? solution
    const visibleCount = twoUp ? tiles.length : seats
    const hasOverflow = visibleCount < tiles.length

    const ordered = reorderForSpeakers({
      tiles,
      speakerIds: speakers,
      pageSize: visibleCount,
      lastSpokenAt: lastSpokenAtRef.current,
      now: Date.now(),
      holdMs: SPEAKER_PROMOTION_HOLD_MS,
    })

    const rects = layoutGrid(grid, box, gap)

    return {
      placed: ordered.slice(0, visibleCount).map((tile, index) => ({
        tile,
        rect: rects[index] as F0Rect,
        compact: grid.tileWidth < 160,
        radius: radiusForTile(grid.tileWidth),
      })),
      overflow: ordered.slice(visibleCount),
      overflowRect: hasOverflow
        ? (rects[visibleCount] ?? cornerChipRect(box, gap))
        : null,
      // The chip is one of these cells, so it takes the tiles' radius rather
      // than deriving its own: same number, by construction.
      overflowRadius: radiusForTile(grid.tileWidth),
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
        {layout.placed.map(({ tile, rect, compact, radius }) => (
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
              radius={radius}
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
            <OverflowTile
              tiles={layout.overflow}
              compact={box.width < 480}
              radius={layout.overflowRadius}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
