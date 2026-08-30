/**
 * WhatsApp-style photo album mosaic, ported from the mobile Communications
 * module (`mobile/src/modules/communications/lib/albumLayout.ts`).
 *
 * Mobile solves the mosaic in pixels because it knows the window width. On the
 * web the panel is resizable between 300 and 712px, so the same layout is
 * expressed with CSS grid spans and `aspect-ratio` instead: identical
 * proportions, no measurement in the virtualized hot path, and the box is
 * reserved before the image loads (which is what Virtuoso needs).
 */

/** Cells past this are folded into a `+N` badge on the last one. */
export const ALBUM_MAX_CELLS = 4

/** How far a lone photo may deviate from square, as height ÷ width. Beyond it
 * the cell keeps this ratio and the image is cropped — a 1:10 tower must not
 * push the rest of the conversation off screen. */
const SINGLE_MIN_RATIO = 0.6
const SINGLE_MAX_RATIO = 1.4

/** A pair reads as two tall halves, not two squares (WhatsApp does the same). */
const PAIR_RATIO = 1.3
/** The hero of a 3-up sits above two squares. */
const TRIPLE_HERO_RATIO = 0.6

export type AlbumCell = {
  /** Index into the original attachment list — what the lightbox opens. */
  index: number
  /** Grid span. Only the 3-up hero is 2 wide. */
  span: 1 | 2
  /** CSS `aspect-ratio` value (width ÷ height). */
  aspectRatio: number
  /** Photos hidden behind this cell, rendered as `+N`. Zero for every other. */
  hiddenCount: number
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value))

/**
 * Height ÷ width for a lone photo, clamped. Missing intrinsic dimensions fall
 * back to a square, exactly like mobile.
 */
export const singlePhotoRatio = (width?: number, height?: number): number =>
  width && height
    ? clamp(height / width, SINGLE_MIN_RATIO, SINGLE_MAX_RATIO)
    : 1

/**
 * The mosaic for `n` photos:
 * - 1 → one full-width cell at the photo's own (clamped) ratio
 * - 2 → two tall halves
 * - 3 → a wide hero above two squares
 * - 4+ → a 2×2 of squares, the last carrying `+N`
 */
export const albumCells = (
  images: readonly { width?: number; height?: number }[]
): AlbumCell[] => {
  if (images.length === 0) return []

  if (images.length === 1) {
    return [
      {
        index: 0,
        span: 2,
        aspectRatio: 1 / singlePhotoRatio(images[0]?.width, images[0]?.height),
        hiddenCount: 0,
      },
    ]
  }

  if (images.length === 2) {
    return images.map((_, index) => ({
      index,
      span: 1 as const,
      aspectRatio: 1 / PAIR_RATIO,
      hiddenCount: 0,
    }))
  }

  if (images.length === 3) {
    return [
      { index: 0, span: 2, aspectRatio: 1 / TRIPLE_HERO_RATIO, hiddenCount: 0 },
      { index: 1, span: 1, aspectRatio: 1, hiddenCount: 0 },
      { index: 2, span: 1, aspectRatio: 1, hiddenCount: 0 },
    ]
  }

  const hidden = images.length - ALBUM_MAX_CELLS
  return images.slice(0, ALBUM_MAX_CELLS).map((_, index) => ({
    index,
    span: 1 as const,
    aspectRatio: 1,
    hiddenCount: index === ALBUM_MAX_CELLS - 1 ? hidden : 0,
  }))
}
