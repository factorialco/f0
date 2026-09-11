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

/**
 * Bounds for a lone photo's box, in CSS px.
 *
 * A photo on its own is not a mosaic cell — it is the message. So it keeps its
 * own proportions and is shown whole; these only stop it from becoming absurd.
 * `SINGLE_MAX_WIDTH` is the shared media width (`CHAT_MEDIA_WIDTH_CLASS`), so a
 * photo is never wider than a video or a map beside it.
 *
 * Anything between 1:3 and 4:1 fits edge to edge. Past that the box stops at the
 * bound and the photo is letterboxed inside it (see `scaleX`/`scaleY`) — a 1:10
 * tower must not push the conversation off screen, but cropping it to a slice
 * was worse than the bands.
 */
export const SINGLE_MIN_WIDTH = 128
export const SINGLE_MAX_WIDTH = 384
export const SINGLE_MIN_HEIGHT = 128
export const SINGLE_MAX_HEIGHT = 512

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
  /** Only on a letterboxed lone photo: its footprint inside the cell, per side.
   * Absent whenever the photo fills the cell, which is nearly always. */
  inset?: { scaleX: number; scaleY: number }
}

export type SinglePhotoBox = {
  /** CSS px for the album container. Still shrinks with the panel (max-w-full);
   * the cell's aspect ratio keeps the proportions while it does. */
  width: number
  height: number
  /** The photo's footprint inside that box, 0–1 per side. Both 1 unless a bound
   * fired — a tower, a panorama, a photo smaller than the floor. */
  scaleX: number
  scaleY: number
}

/**
 * The box a lone photo gets, from its intrinsic dimensions.
 *
 * Returns `null` when the host sends no dimensions: there is nothing to measure,
 * so the caller keeps the full-width square fallback.
 */
export const singlePhotoBox = (
  width?: number,
  height?: number
): SinglePhotoBox | null => {
  if (!width || !height) {
    return null
  }

  // Never enlarged past the source — a 250px screenshot blown up to the media
  // width is just a blurry 250px screenshot.
  let w = Math.min(width, SINGLE_MAX_WIDTH)
  let h = (w * height) / width
  if (h > SINGLE_MAX_HEIGHT) {
    h = SINGLE_MAX_HEIGHT
    w = (h * width) / height
  }

  // Floors last: they can only fire for a ratio the box cannot represent, and
  // then the photo keeps its own size inside the floored box rather than being
  // stretched to it.
  const boxWidth = Math.round(Math.max(w, SINGLE_MIN_WIDTH))
  const boxHeight = Math.round(Math.max(h, SINGLE_MIN_HEIGHT))
  return {
    width: boxWidth,
    height: boxHeight,
    scaleX: Math.min(1, w / boxWidth),
    scaleY: Math.min(1, h / boxHeight),
  }
}

/**
 * The mosaic for `n` photos:
 * - 1 → its own box at its own proportions, whole (see `singlePhotoBox`)
 * - 2 → two tall halves
 * - 3 → a wide hero above two squares
 * - 4+ → a 2×2 of squares, the last carrying `+N`
 */
export const albumCells = (
  images: readonly { width?: number; height?: number }[]
): AlbumCell[] => {
  if (images.length === 0) {
    return []
  }

  if (images.length === 1) {
    const box = singlePhotoBox(images[0]?.width, images[0]?.height)
    const letterboxed = box ? box.scaleX < 1 || box.scaleY < 1 : false
    return [
      {
        index: 0,
        span: 2,
        aspectRatio: box ? box.width / box.height : 1,
        hiddenCount: 0,
        ...(box && letterboxed
          ? { inset: { scaleX: box.scaleX, scaleY: box.scaleY } }
          : {}),
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
