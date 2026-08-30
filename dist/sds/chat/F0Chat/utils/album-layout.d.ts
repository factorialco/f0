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
export declare const ALBUM_MAX_CELLS = 4;
export type AlbumCell = {
    /** Index into the original attachment list — what the lightbox opens. */
    index: number;
    /** Grid span. Only the 3-up hero is 2 wide. */
    span: 1 | 2;
    /** CSS `aspect-ratio` value (width ÷ height). */
    aspectRatio: number;
    /** Photos hidden behind this cell, rendered as `+N`. Zero for every other. */
    hiddenCount: number;
};
/**
 * Height ÷ width for a lone photo, clamped. Missing intrinsic dimensions fall
 * back to a square, exactly like mobile.
 */
export declare const singlePhotoRatio: (width?: number, height?: number) => number;
/**
 * The mosaic for `n` photos:
 * - 1 → one full-width cell at the photo's own (clamped) ratio
 * - 2 → two tall halves
 * - 3 → a wide hero above two squares
 * - 4+ → a 2×2 of squares, the last carrying `+N`
 */
export declare const albumCells: (images: readonly {
    width?: number;
    height?: number;
}[]) => AlbumCell[];
