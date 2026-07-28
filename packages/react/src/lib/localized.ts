/**
 * Shared helpers for content that can be provided in one language (a plain
 * value) or several (a list of per-locale entries) — used by the media players
 * for captions, descriptions, transcriptions and summaries.
 */

export interface LocalizedOption<T> {
  /** BCP-47 language tag, e.g. `"en"`, `"es"`, `"en-US"`. */
  locale: string
  /**
   * Display label for the language picker. Defaults to the language name for
   * `locale` (via `Intl.DisplayNames`), so this is only needed to override it.
   */
  label?: string
  /** The value for this locale. */
  value: T
}

/** A single value, or the same value provided in multiple languages. */
export type Localized<T> = T | LocalizedOption<T>[]

export interface LanguageOption {
  locale: string
  label?: string
}

export function isLocalizedList<T>(
  value: Localized<T> | undefined
): value is LocalizedOption<T>[] {
  return Array.isArray(value)
}

/**
 * The value for `locale`, falling back to the first entry when the locale isn't
 * provided. Plain (non-localized) values pass through unchanged.
 */
export function resolveLocalized<T>(
  value: Localized<T> | undefined,
  locale: string | undefined
): T | undefined {
  if (value === undefined) return undefined
  if (!isLocalizedList(value)) return value
  if (value.length === 0) return undefined
  const match = locale ? value.find((o) => o.locale === locale) : undefined
  return (match ?? value[0]).value
}

/**
 * The ordered, de-duplicated set of languages across several localized values —
 * the union that drives a single shared language picker. Plain values
 * contribute no options (they aren't language-specific).
 */
export function collectLanguages(
  ...values: Array<Localized<unknown> | undefined>
): LanguageOption[] {
  const byLocale = new Map<string, LanguageOption>()
  for (const value of values) {
    if (!isLocalizedList(value)) continue
    for (const option of value) {
      const existing = byLocale.get(option.locale)
      if (!existing) {
        byLocale.set(option.locale, {
          locale: option.locale,
          label: option.label,
        })
      } else if (!existing.label && option.label) {
        existing.label = option.label
      }
    }
  }
  return Array.from(byLocale.values())
}

/**
 * Human language name for a locale (e.g. `"en"` → "English"), preferring an
 * explicit label and falling back to the raw code.
 */
export function languageLabel(
  option: LanguageOption,
  displayLocale?: string
): string {
  if (option.label) return option.label
  try {
    const locale = displayLocale ?? option.locale
    const names = new Intl.DisplayNames([locale], { type: "language" })
    const name = names.of(option.locale) ?? option.locale
    // Endonyms come lowercased for many languages ("español", "français");
    // capitalise the first letter so the options read as proper labels.
    return name.charAt(0).toLocaleUpperCase(locale) + name.slice(1)
  } catch {
    return option.locale
  }
}

/**
 * Initial language: an explicit `preferred` (matched exactly or by primary
 * subtag), else the user's browser language, else the first provided.
 */
export function defaultLocale(
  languages: LanguageOption[],
  preferred?: string
): string | undefined {
  if (languages.length === 0) return undefined
  const codes = languages.map((l) => l.locale)
  const subtag = (tag: string) => tag.split("-")[0]
  const match = (want: string) =>
    codes.find((c) => c === want) ??
    codes.find((c) => subtag(c) === subtag(want))

  if (preferred) {
    const found = match(preferred)
    if (found) return found
  }
  const nav = typeof navigator !== "undefined" ? navigator.language : undefined
  if (nav) {
    const found = match(nav)
    if (found) return found
  }
  return codes[0]
}
