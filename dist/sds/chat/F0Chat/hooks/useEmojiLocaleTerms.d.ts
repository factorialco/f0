import { EmojiLocaleTerms } from '../utils/emoji-locale';
/**
 * Emoji search terms in the reader's language, layered over the English index.
 *
 * Shared by the picker and by the composer's `:` autocomplete so the two agree
 * in every language, not only in English.
 *
 * Returns `undefined` until (and unless) a dataset arrives — English is already
 * in the bundle, so that is a complete search, not a loading state. Nothing here
 * blocks a render.
 */
export declare const useEmojiLocaleTerms: (locale?: string) => EmojiLocaleTerms | undefined;
