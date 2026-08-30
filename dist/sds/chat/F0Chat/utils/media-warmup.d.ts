import { ChatRow } from './grouping';
/** How far past the rendered edge to warm, in rows. */
export declare const WARMUP_LOOKAHEAD_ROWS = 8;
/**
 * Which rows to warm, given the rendered window and where the reader is going.
 *
 * Virtuoso's window is deliberately lopsided — a generous buffer above so
 * estimate→real height corrections land far from the fold, and almost nothing
 * below. Scrolling down there is barely a row of runway, which is nowhere near
 * enough to fetch a photo, so the warm-up leans into the direction of travel
 * and keeps a shorter tail behind for the way back.
 */
export declare const warmupRange: (renderedStart: number, renderedEnd: number, direction: "up" | "down", total: number) => {
    start: number;
    end: number;
};
/** Every image URL a row will paint, in the order the reader meets them. */
export declare const rowImageUrls: (row: ChatRow | undefined) => string[];
/**
 * Decodes images off-screen so they are already in the browser's cache by the
 * time their row is rendered.
 *
 * This lives outside the React tree on purpose. Virtuoso destroys rows that
 * leave its window — it does not hide them — so "this photo is already loaded"
 * cannot be held in component state: on the way back the `<img>` is recreated
 * and `img.complete` is only synchronously true while the decoded bitmap is
 * still resident. The `seen` set is what survives that, which is why scrolling
 * back over a stretch you have already read shows the photos instantly.
 */
export declare const createMediaWarmer: () => {
    warm: (urls: readonly string[]) => void;
    dispose: () => void;
};
