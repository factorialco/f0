/**
 * The shape a tile aims for when nothing else decides: the thumbnail strip's
 * ratio, and the tie-break the grid solver falls back on between layouts of
 * equal area. Screen shares use their track's intrinsic ratio instead.
 */
export const DEFAULT_ASPECT_RATIO = 16 / 9

/**
 * How far a tile may stray from the source's 16:9 to fill its cell.
 *
 * Cameras are painted with `object-cover`, so a squarer tile crops the SIDES —
 * which costs shoulders, and is what Google Meet's Dynamic layouts do to
 * "minimize unused space". Going wider than the source would crop top and
 * bottom instead, and that costs the top of the head, so the maximum stops at
 * the source ratio.
 */
export const TILE_ASPECT_MIN = 0.6
export const TILE_ASPECT_MAX = DEFAULT_ASPECT_RATIO

/** Container width below which the grid switches to the tighter gap. */
export const COMPACT_WIDTH = 480

/**
 * Below this even one thumbnail is too much: the room drops to spotlight-only.
 *
 * Deliberately low. A strip that gives up early is what leaves a 1:1 call in a
 * small window showing one huge portrait tile and a "+1" chip standing for the
 * only other person — worse on both counts than a shorter strip.
 */
export const SPOTLIGHT_ONLY_WIDTH = 200

export const GAP_COMPACT = 8
export const GAP_REGULAR = 16

export const gapFor = (width: number): number =>
  width < COMPACT_WIDTH ? GAP_COMPACT : GAP_REGULAR

/**
 * Smallest tile the grid will produce before pushing a participant into the
 * overflow chip.
 *
 * Relative to the container, not a fixed size: a fixed floor either fills a
 * fullscreen room with unreadable thumbnails (the previous 128px cap allowed
 * 49 tiles at 1440px wide, so the chip was unreachable in practice) or leaves a
 * small floating window able to show only two people. A fifth of the width puts
 * roughly 16 faces on a fullscreen room and 9 in a floating window.
 */
export const MIN_TILE_DIVISOR = 5
export const MIN_TILE_FLOOR = 88
export const MIN_TILE_CEILING = 320

export const minTileWidthFor = (width: number): number =>
  Math.max(MIN_TILE_FLOOR, Math.min(MIN_TILE_CEILING, width / MIN_TILE_DIVISOR))

/** Thumbnail strip height as a fraction of the container, clamped. */
export const STRIP_HEIGHT_RATIO = 0.18
/** Small enough that a floating window still gets a strip instead of a chip. */
export const STRIP_HEIGHT_MIN = 48
export const STRIP_HEIGHT_MAX = 168

/**
 * Above this container aspect ratio the strip moves to the right edge, so the
 * spotlight keeps its height on very wide windows.
 */
export const STRIP_SIDE_ASPECT = 2.1

/** Hysteresis before an off-page speaker is promoted into the visible page. */
export const SPEAKER_PROMOTION_HOLD_MS = 2000

/**
 * Below this container aspect ratio the grid stops being a grid: a docked panel
 * is a tall, narrow strip, and stacking faces down it makes every one of them
 * tiny. Past this point the room spotlights whoever is speaking instead, which
 * is what every call product does in a side panel.
 */
export const SPOTLIGHT_ASPECT = 0.85
