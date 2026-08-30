/**
 * Emoji search in the reader's own language.
 *
 * The bundled index is English — emoji-mart's dataset, which also carries the
 * categories, the ordering and the `version` field the tofu filter depends on.
 * Nothing replaces it. What this module adds is a **layer of aliases**: the
 * localized name and tags for each emoji, keyed by codepoint, merged on top so
 * "fuego" and "fire" both find 🔥.
 *
 * Emojibase's compact dataset is the source. It cannot be the dataset on its own
 * — it drops `version`, and without that we would be back to offering emoji the
 * platform draws as empty boxes.
 */
/** Localized search terms for one emoji, keyed by lowercased hexcode. */
export type EmojiLocaleTerms = Map<string, string[]>;
/**
 * Which dataset to load for a browser language tag, or `null` for none.
 *
 * Falls back from region to base language, so `es-AR` gets Spanish rather than
 * nothing. `es-MX` and `en-GB` keep their own, since emojibase ships them.
 * English of any flavour returns `null`: it is already in the index.
 */
export declare const resolveEmojiLocale: (tag: string | undefined) => string | null;
/** The language this browser is asking for. */
export declare const browserEmojiLocale: () => string | undefined;
/**
 * Load the localized terms for a locale, once per session.
 *
 * **Fails open.** A missing chunk, an offline tab or a bad locale resolves to
 * an empty map, and search carries on in English — never less than what the
 * picker does today.
 */
export declare const loadEmojiLocaleTerms: (locale: string | null) => Promise<EmojiLocaleTerms>;
/** Test seam — the memo would otherwise outlive a stubbed loader. */
export declare const resetEmojiLocaleCache: () => void;
