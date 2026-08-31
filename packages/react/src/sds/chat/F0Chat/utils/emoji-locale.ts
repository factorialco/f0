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
export type EmojiLocaleTerms = Map<string, string[]>

type CompactEmoji = {
  hexcode: string
  label: string
  tags?: string[]
  skins?: { hexcode: string; label: string; tags?: string[] }[]
}

/**
 * Every locale emojibase ships, minus `en` — that one is already in the index,
 * so asking for it should never cost a request.
 *
 * Written out rather than built from a template because a bundler can only
 * split `import()` calls it can see. With a template the whole set would end up
 * in one chunk (or in the main bundle); like this, each locale is its own file
 * and only the one asked for travels.
 */
const LOADERS: Record<string, () => Promise<{ default: CompactEmoji[] }>> = {
  bn: () => import("emojibase-data/bn/compact.json"),
  da: () => import("emojibase-data/da/compact.json"),
  de: () => import("emojibase-data/de/compact.json"),
  "en-gb": () => import("emojibase-data/en-gb/compact.json"),
  es: () => import("emojibase-data/es/compact.json"),
  "es-mx": () => import("emojibase-data/es-mx/compact.json"),
  et: () => import("emojibase-data/et/compact.json"),
  fi: () => import("emojibase-data/fi/compact.json"),
  fr: () => import("emojibase-data/fr/compact.json"),
  hi: () => import("emojibase-data/hi/compact.json"),
  hu: () => import("emojibase-data/hu/compact.json"),
  it: () => import("emojibase-data/it/compact.json"),
  ja: () => import("emojibase-data/ja/compact.json"),
  ko: () => import("emojibase-data/ko/compact.json"),
  lt: () => import("emojibase-data/lt/compact.json"),
  ms: () => import("emojibase-data/ms/compact.json"),
  nb: () => import("emojibase-data/nb/compact.json"),
  nl: () => import("emojibase-data/nl/compact.json"),
  pl: () => import("emojibase-data/pl/compact.json"),
  pt: () => import("emojibase-data/pt/compact.json"),
  ru: () => import("emojibase-data/ru/compact.json"),
  sv: () => import("emojibase-data/sv/compact.json"),
  th: () => import("emojibase-data/th/compact.json"),
  uk: () => import("emojibase-data/uk/compact.json"),
  vi: () => import("emojibase-data/vi/compact.json"),
  zh: () => import("emojibase-data/zh/compact.json"),
  "zh-hant": () => import("emojibase-data/zh-hant/compact.json"),
}

/**
 * Which dataset to load for a browser language tag, or `null` for none.
 *
 * Falls back from region to base language, so `es-AR` gets Spanish rather than
 * nothing. `es-MX` and `en-GB` keep their own, since emojibase ships them.
 * English of any flavour returns `null`: it is already in the index.
 */
export const resolveEmojiLocale = (tag: string | undefined): string | null => {
  if (!tag) return null
  const normalized = tag.toLowerCase()
  if (normalized === "en" || normalized.startsWith("en-")) {
    return normalized in LOADERS ? normalized : null
  }
  if (normalized in LOADERS) return normalized
  const base = normalized.split("-")[0]
  return base in LOADERS ? base : null
}

/** The language this browser is asking for. */
export const browserEmojiLocale = (): string | undefined =>
  typeof navigator === "undefined" ? undefined : navigator.language

const cache = new Map<string, Promise<EmojiLocaleTerms>>()

const buildTerms = (data: CompactEmoji[]): EmojiLocaleTerms => {
  const terms: EmojiLocaleTerms = new Map()
  const add = (hexcode: string, label: string, tags?: string[]) => {
    // Emojibase writes hexcodes uppercase (`1F5E8-FE0F`), emoji-mart writes
    // them lowercase (`1f5e8-fe0f`). One `toLowerCase` is the whole join.
    terms.set(hexcode.toLowerCase(), [label, ...(tags ?? [])])
  }
  for (const emoji of data) {
    add(emoji.hexcode, emoji.label, emoji.tags)
    // Skin-tone variants carry their own hexcode but the same words; the index
    // only holds the default tone, so they'd otherwise be unsearchable.
    for (const skin of emoji.skins ?? []) {
      add(skin.hexcode, skin.label ?? emoji.label, skin.tags ?? emoji.tags)
    }
  }
  return terms
}

/**
 * Load the localized terms for a locale, once per session.
 *
 * **Fails open.** A missing chunk, an offline tab or a bad locale resolves to
 * an empty map, and search carries on in English — never less than what the
 * picker does today.
 */
export const loadEmojiLocaleTerms = (
  locale: string | null
): Promise<EmojiLocaleTerms> => {
  if (!locale) return Promise.resolve(new Map())

  const cached = cache.get(locale)
  if (cached) return cached

  const loader = LOADERS[locale]
  if (!loader) return Promise.resolve(new Map())

  const pending = loader()
    .then((module) => buildTerms(module.default))
    .catch(() => new Map<string, string[]>())
  cache.set(locale, pending)
  return pending
}

/** Test seam — the memo would otherwise outlive a stubbed loader. */
export const resetEmojiLocaleCache = (): void => {
  cache.clear()
}
