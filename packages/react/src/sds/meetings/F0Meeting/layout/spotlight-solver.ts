import { type F0Rect } from "../types"
import { clamp, fitInto } from "../utils/aspect"
import {
  SPOTLIGHT_ONLY_WIDTH,
  STRIP_HEIGHT_MAX,
  STRIP_HEIGHT_MIN,
  STRIP_HEIGHT_RATIO,
  STRIP_MIN_TILE_WIDTH,
  STRIP_SIDE_ASPECT,
} from "./constants"

export type SpotlightSolverInput = {
  /** Participants that are NOT the spotlight. */
  stripCount: number
  width: number
  height: number
  gap: number
  /**
   * How far a thumbnail may stray to take the shape of its own slot. Uniform
   * across the strip, but derived from the container rather than fixed: a wide
   * room gets nearly square thumbnails, a side panel portrait ones.
   */
  stripRange: { min: number; max: number }
  /**
   * Cameras pass a range: the spotlight takes the shape of its box, clamped, so
   * it crops the sides rather than leaving most of a tall panel empty.
   *
   * Screen shares omit it and the spotlight takes the WHOLE box, letterboxing
   * the presentation inside its own tile. That is what puts the black exactly
   * where the picture is missing instead of darkening the whole room.
   */
  spotlightRange?: { min: number; max: number }
}

export type SpotlightSolution = {
  spotlight: F0Rect
  strip: F0Rect[]
  /** Thumbnails that did not fit, for the "+N" chip. */
  stripOverflow: number
  stripSide: "bottom" | "right" | "none"
}

/**
 * Spotlight plus a thumbnail strip. The strip is a PROPORTION of the container
 * rather than a fixed height: the previous implementation hard-coded 125px,
 * which is most of a small floating window.
 */
export const solveSpotlight = ({
  stripCount,
  width,
  height,
  gap,
  stripRange,
  spotlightRange,
}: SpotlightSolverInput): SpotlightSolution => {
  const box = { width, height }

  /**
   * The shape a thumbnail takes in a slot of the given size. Clamped for the
   * same reason the grid clamps: a slot far from any usable ratio would crop
   * the face rather than show it.
   */
  const stripAspectFor = (slotWidth: number, slotHeight: number): number =>
    slotHeight > 0
      ? clamp(slotWidth / slotHeight, stripRange.min, stripRange.max)
      : stripRange.max

  const fitSpotlight = (available: {
    width: number
    height: number
  }): F0Rect => {
    // No range: the tile takes the whole box and letterboxes the picture inside
    // itself, so the black is the missing part of the video and nothing else.
    if (!spotlightRange || available.height <= 0) {
      return { x: 0, y: 0, width: available.width, height: available.height }
    }
    return fitInto(
      available,
      clamp(
        available.width / available.height,
        spotlightRange.min,
        spotlightRange.max
      )
    )
  }

  if (stripCount <= 0) {
    return {
      spotlight: fitSpotlight(box),
      strip: [],
      stripOverflow: 0,
      stripSide: "none",
    }
  }

  // Too small for thumbnails: everyone else collapses into the overflow chip.
  if (width < SPOTLIGHT_ONLY_WIDTH) {
    return {
      spotlight: fitSpotlight(box),
      strip: [],
      stripOverflow: stripCount,
      stripSide: "none",
    }
  }

  const side = width / height > STRIP_SIDE_ASPECT ? "right" : "bottom"

  if (side === "bottom") {
    const stripHeight = clamp(
      height * STRIP_HEIGHT_RATIO,
      STRIP_HEIGHT_MIN,
      STRIP_HEIGHT_MAX
    )
    // The strip is a row of the grid: the thumbnails span its full width and
    // take the shape that follows, which is what the design does at both
    // sizes — four across, edge to edge, square-ish wide and portrait narrow.
    let visible = Math.max(1, stripCount)
    let slotWidth = (width - gap * (visible - 1)) / visible
    while (visible > 1 && slotWidth < STRIP_MIN_TILE_WIDTH) {
      visible--
      slotWidth = (width - gap * (visible - 1)) / visible
    }
    visible = Math.min(stripCount, visible)

    const aspect = stripAspectFor(slotWidth, stripHeight)
    let tileWidth = slotWidth
    let tileHeight = tileWidth / aspect
    if (tileHeight > stripHeight) {
      tileHeight = stripHeight
      tileWidth = tileHeight * aspect
    }
    const rowWidth = visible * tileWidth + gap * (visible - 1)
    const startX = (width - rowWidth) / 2

    return {
      spotlight: fitSpotlight({
        width,
        height: height - stripHeight - gap,
      }),
      strip: Array.from({ length: visible }, (_, index) => ({
        x: startX + index * (tileWidth + gap),
        y: height - stripHeight + (stripHeight - tileHeight) / 2,
        width: tileWidth,
        height: tileHeight,
      })),
      stripOverflow: stripCount - visible,
      stripSide: side,
    }
  }

  const stripWidth = clamp(
    width * STRIP_HEIGHT_RATIO,
    STRIP_HEIGHT_MIN * stripRange.max,
    STRIP_HEIGHT_MAX * stripRange.max
  )
  // The mirror of the bottom strip: a column that spans the full height, with
  // the thumbnails taking the shape their slot gives them.
  let visible = Math.max(1, stripCount)
  let slotHeight = (height - gap * (visible - 1)) / visible
  while (visible > 1 && slotHeight * stripRange.max < STRIP_MIN_TILE_WIDTH) {
    visible--
    slotHeight = (height - gap * (visible - 1)) / visible
  }
  visible = Math.min(stripCount, visible)

  const aspect = stripAspectFor(stripWidth, slotHeight)
  let tileHeight = slotHeight
  let tileWidth = tileHeight * aspect
  if (tileWidth > stripWidth) {
    tileWidth = stripWidth
    tileHeight = tileWidth / aspect
  }
  const columnHeight = visible * tileHeight + gap * (visible - 1)
  const startY = (height - columnHeight) / 2

  return {
    spotlight: fitSpotlight({ width: width - stripWidth - gap, height }),
    strip: Array.from({ length: visible }, (_, index) => ({
      x: width - stripWidth + (stripWidth - tileWidth) / 2,
      y: startY + index * (tileHeight + gap),
      width: tileWidth,
      height: tileHeight,
    })),
    stripOverflow: stripCount - visible,
    stripSide: side,
  }
}
