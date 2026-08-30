/**
 * Shared helpers for content that can be provided in one language (a plain
 * value) or several (a list of per-locale entries) — used by the media players
 * for captions, descriptions, transcriptions and summaries.
 */
export interface LocalizedOption<T> {
    /** BCP-47 language tag, e.g. `"en"`, `"es"`, `"en-US"`. */
    locale: string;
    /**
     * Display label for the language picker. Defaults to the language name for
     * `locale` (via `Intl.DisplayNames`), so this is only needed to override it.
     */
    label?: string;
    /** The value for this locale. */
    value: T;
}
/** A single value, or the same value provided in multiple languages. */
export type Localized<T> = T | LocalizedOption<T>[];
export interface LanguageOption {
    locale: string;
    label?: string;
}
export declare function isLocalizedList<T>(value: Localized<T> | undefined): value is LocalizedOption<T>[];
/**
 * The value for `locale`, falling back to the first entry when the locale isn't
 * provided. Plain (non-localized) values pass through unchanged.
 */
export declare function resolveLocalized<T>(value: Localized<T> | undefined, locale: string | undefined): T | undefined;
/**
 * The ordered, de-duplicated set of languages across several localized values —
 * the union that drives a single shared language picker. Plain values
 * contribute no options (they aren't language-specific).
 */
export declare function collectLanguages(...values: Array<Localized<unknown> | undefined>): LanguageOption[];
/**
 * Human language name for a locale (e.g. `"en"` → "English"), preferring an
 * explicit label and falling back to the raw code.
 */
export declare function languageLabel(option: LanguageOption, displayLocale?: string): string;
/**
 * Initial language: an explicit `preferred` (matched exactly or by primary
 * subtag), else the user's browser language, else the first provided.
 */
export declare function defaultLocale(languages: LanguageOption[], preferred?: string): string | undefined;
