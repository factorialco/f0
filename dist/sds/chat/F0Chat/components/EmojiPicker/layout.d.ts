import { EmojiEntry } from '../../utils/emoji-index';
/** One labelled block in the picker: "frequently used", a category, or the
 * flat result list while searching. */
export type EmojiSection = {
    id: string;
    label: string;
    emojis: EmojiEntry[];
};
export type EmojiRow = {
    sectionIndex: number;
    emojis: EmojiEntry[];
    /** Flat index of this row's first cell — `startIndex + column` is all the
     * arrow-key maths needs. */
    startIndex: number;
};
export type EmojiLayout = {
    rows: EmojiRow[];
    /** Rows per section, in order — what GroupedVirtuoso wants. */
    groupCounts: number[];
    /** Every emoji in reading order; the active cell is an index into this. */
    flat: EmojiEntry[];
    /** flat index → row index, for scrolling the active cell into view. */
    rowByIndex: number[];
    /** section index → its first row, for the jump-to bar. */
    firstRowBySection: number[];
};
/**
 * Chop sections into fixed-width rows.
 *
 * Rows, not cells, are the virtualized unit: a row is one DOM node holding up
 * to `columns` buttons, which keeps the mounted-node count in the hundreds
 * instead of the thousands. Sections don't share rows — a category always
 * starts on a fresh line, even when the previous one ended mid-row.
 */
export declare const buildEmojiLayout: (sections: EmojiSection[], columns: number) => EmojiLayout;
/**
 * Where the arrow keys land, as a flat index.
 *
 * Left/right walk the flat order, so they cross row and section boundaries the
 * way reading does. Up/down move a visual line and hold the column — clamped to
 * the target row's width, because a section's last row is usually short.
 * Everything is clamped rather than wrapped: wrapping from the last emoji back
 * to the first is disorienting in a list this long.
 */
export declare const moveActiveIndex: (layout: EmojiLayout, index: number, key: "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown" | "Home" | "End") => number;
