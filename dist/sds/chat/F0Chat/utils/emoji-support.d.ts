/** Highest release in {@link PROBES} — also the "show everything" answer. */
export declare const MAX_EMOJI_VERSION: number;
/**
 * The highest Emoji release this platform draws, for filtering the picker.
 *
 * Resolved once and memoized. **Fails open**: with no canvas (SSR, jsdom, a
 * sandboxed frame) or an untrustworthy one it returns
 * {@link MAX_EMOJI_VERSION}, so a broken probe never hides emoji that in fact
 * render fine.
 */
export declare const detectMaxEmojiVersion: () => number;
/** Test seam — the memo would otherwise outlive a stubbed canvas. */
export declare const resetEmojiSupportCache: () => void;
