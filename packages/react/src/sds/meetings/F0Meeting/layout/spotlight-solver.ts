import { type F0Rect } from "../types"
import { clamp, fitInto } from "../utils/aspect"
import {
  SPOTLIGHT_ONLY_WIDTH,
  STRIP_HEIGHT_MAX,
  STRIP_HEIGHT_MIN,
  STRIP_HEIGHT_RATIO,
  STRIP_SIDE_ASPECT,
} from "./constants"

export type SpotlightSolverInput = {
  /** Participants that are NOT the spotlight. */
  stripCount: number
  width: number
  height: number
  gap: number
  /** Ratio of the thumbnails. Deliberately uniform, whatever the spotlight does. */
  stripAspect: number
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
  stripAspect,
  spotlightRange,
}: SpotlightSolverInput): SpotlightSolution => {
  const box = { width, height }

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
    const tileWidth = stripHeight * stripAspect
    const fits = Math.max(1, Math.floor((width + gap) / (tileWidth + gap)))
    const visible = Math.min(stripCount, fits)
    const rowWidth = visible * tileWidth + gap * (visible - 1)
    const startX = (width - rowWidth) / 2

    return {
      spotlight: fitSpotlight({
        width,
        height: height - stripHeight - gap,
      }),
      strip: Array.from({ length: visible }, (_, index) => ({
        x: startX + index * (tileWidth + gap),
        y: height - stripHeight,
        width: tileWidth,
        height: stripHeight,
      })),
      stripOverflow: stripCount - visible,
      stripSide: side,
    }
  }

  const stripWidth = clamp(
    width * STRIP_HEIGHT_RATIO,
    STRIP_HEIGHT_MIN * stripAspect,
    STRIP_HEIGHT_MAX * stripAspect
  )
  const tileHeight = stripWidth / stripAspect
  const fits = Math.max(1, Math.floor((height + gap) / (tileHeight + gap)))
  const visible = Math.min(stripCount, fits)
  const columnHeight = visible * tileHeight + gap * (visible - 1)
  const startY = (height - columnHeight) / 2

  return {
    spotlight: fitSpotlight({ width: width - stripWidth - gap, height }),
    strip: Array.from({ length: visible }, (_, index) => ({
      x: width - stripWidth,
      y: startY + index * (tileHeight + gap),
      width: stripWidth,
      height: tileHeight,
    })),
    stripOverflow: stripCount - visible,
    stripSide: side,
  }
}
