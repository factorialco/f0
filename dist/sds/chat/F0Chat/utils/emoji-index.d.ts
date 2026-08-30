/** A searchable emoji. `version` is the Emoji spec release that introduced it —
 * the key to hiding what the running platform cannot draw (see emoji-support). */
export type EmojiEntry = {
    id: string;
    name: string;
    native: string;
    version: number;
    /** Lowercased codepoints (`1f5e8-fe0f`) — the join key for localized terms. */
    hexcode: string;
    aliases: string[];
    keywords: string[];
    normalizedName: string;
    normalizedShortcodes: string[];
    normalizedKeywords: string[];
    /** Position in the dataset — the tie-breaker that keeps results stable. */
    order: number;
};
export type EmojiCategoryId = (typeof EMOJI_CATEGORY_IDS)[number];
export declare const EMOJI_CATEGORY_IDS: readonly ["people", "nature", "foods", "activity", "places", "objects", "symbols", "flags"];
export declare const EMOJI_INDEX: EmojiEntry[];
export declare const EMOJI_BY_ID: Map<string, EmojiEntry>;
/** Categories in dataset order, resolved to entries. Drives the picker's
 * sections and its jump-to bar. */
export declare const EMOJI_CATEGORIES: {
    id: EmojiCategoryId;
    emojis: EmojiEntry[];
}[];
/** The shortlist shown before anything is typed, and the picker's seed for a
 * first-time user with no history. */
export declare const DEFAULT_EMOJI_IDS: readonly ["+1", "heart", "joy", "tada", "smile", "fire", "eyes", "white_check_mark"];
export declare const findEmojiByShortcode: (shortcode: string) => EmojiEntry | null;
export declare const findEmojiById: (id: string) => EmojiEntry | null;
/**
 * Search the index. An empty query returns {@link DEFAULT_EMOJI_IDS}.
 *
 * `maxVersion` drops emoji the platform can't draw — pass what
 * `detectMaxEmojiVersion()` reports so a search never offers a tofu box.
 *
 * `localizedTerms` maps a lowercased hexcode to that emoji's name and tags in
 * the reader's language (see `emoji-locale`). Absent, the search is English —
 * which is the fallback, not a failure.
 */
export declare const searchEmoji: (rawQuery: string, { limit, maxVersion, localizedTerms, }?: {
    limit?: number;
    maxVersion?: number;
    localizedTerms?: Map<string, string[]>;
}) => EmojiEntry[];
