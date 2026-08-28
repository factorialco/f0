import data from "@emoji-mart/data/sets/15/native.json"

/**
 * The one emoji index in F0 — shared by the picker and by the chat composer's
 * `:shortcode` autocomplete, so the two can't disagree about what "fire" finds.
 *
 * The dataset is emoji-mart's **native** set rather than its Twitter one: we
 * render the system glyph, and `native.json` is both smaller and 21 emoji
 * larger (twemoji is frozen and missing the recent additions).
 */

type EmojiMartEmoji = {
  id: string
  name: string
  keywords?: string[]
  emoticons?: string[]
  version: number
  skins: { native: string; unified: string }[]
}

type EmojiMartCategory = { id: string; emojis: string[] }

/** A searchable emoji. `version` is the Emoji spec release that introduced it —
 * the key to hiding what the running platform cannot draw (see emoji-support). */
export type EmojiEntry = {
  id: string
  name: string
  native: string
  version: number
  /** Lowercased codepoints (`1f5e8-fe0f`) — the join key for localized terms. */
  hexcode: string
  aliases: string[]
  keywords: string[]
  normalizedName: string
  normalizedShortcodes: string[]
  normalizedKeywords: string[]
  /** Position in the dataset — the tie-breaker that keeps results stable. */
  order: number
}

export type EmojiCategoryId = (typeof EMOJI_CATEGORY_IDS)[number]

export const EMOJI_CATEGORY_IDS = [
  "people",
  "nature",
  "foods",
  "activity",
  "places",
  "objects",
  "symbols",
  "flags",
] as const

const normalize = (value: string): string =>
  value.toLowerCase().replace(/[_-]+/g, " ").trim()

const aliasesByEmoji = new Map<string, string[]>()
for (const [alias, emojiId] of Object.entries(
  data.aliases as Record<string, string>
)) {
  const aliases = aliasesByEmoji.get(emojiId) ?? []
  aliases.push(alias)
  aliasesByEmoji.set(emojiId, aliases)
}

export const EMOJI_INDEX: EmojiEntry[] = (
  Object.values(data.emojis) as EmojiMartEmoji[]
).flatMap((emoji, order) => {
  const native = emoji.skins[0]?.native
  if (!native) return []
  const aliases = aliasesByEmoji.get(emoji.id) ?? []
  const keywords = emoji.keywords ?? []
  return [
    {
      id: emoji.id,
      name: emoji.name,
      native,
      version: emoji.version,
      hexcode: (emoji.skins[0]?.unified ?? "").toLowerCase(),
      aliases,
      keywords,
      normalizedName: normalize(emoji.name),
      normalizedShortcodes: [emoji.id, ...aliases].map(normalize),
      normalizedKeywords: keywords.map(normalize),
      order,
    },
  ]
})

export const EMOJI_BY_ID = new Map(
  EMOJI_INDEX.map((emoji) => [emoji.id, emoji])
)

const EMOJI_BY_SHORTCODE = new Map<string, EmojiEntry>()
for (const emoji of EMOJI_INDEX) {
  EMOJI_BY_SHORTCODE.set(emoji.id.toLowerCase(), emoji)
  for (const alias of emoji.aliases) {
    EMOJI_BY_SHORTCODE.set(alias.toLowerCase(), emoji)
  }
}

/** Categories in dataset order, resolved to entries. Drives the picker's
 * sections and its jump-to bar. */
export const EMOJI_CATEGORIES: { id: EmojiCategoryId; emojis: EmojiEntry[] }[] =
  (data.categories as EmojiMartCategory[]).flatMap((category) => {
    if (!(EMOJI_CATEGORY_IDS as readonly string[]).includes(category.id)) {
      return []
    }
    return [
      {
        id: category.id as EmojiCategoryId,
        emojis: category.emojis.flatMap((id) => {
          const emoji = EMOJI_BY_ID.get(id)
          return emoji ? [emoji] : []
        }),
      },
    ]
  })

/** The shortlist shown before anything is typed, and the picker's seed for a
 * first-time user with no history. */
export const DEFAULT_EMOJI_IDS = [
  "+1",
  "heart",
  "joy",
  "tada",
  "smile",
  "fire",
  "eyes",
  "white_check_mark",
] as const

export const findEmojiByShortcode = (shortcode: string): EmojiEntry | null =>
  EMOJI_BY_SHORTCODE.get(shortcode.toLowerCase()) ?? null

export const findEmojiById = (id: string): EmojiEntry | null =>
  EMOJI_BY_ID.get(id) ?? null

/**
 * Relevance for one candidate, or null when it doesn't match at all. Lower
 * wins. The tiers matter: an exact shortcode has to beat a substring hit
 * somewhere in a keyword list, or typing `:fire` surfaces "firefighter" first.
 */
const scoreCandidate = (
  emoji: EmojiEntry,
  query: string,
  /** Localized name and tags, already normalized. Scored in the SAME tiers as
   * the English ones, so both languages work at once — someone typing Spanish
   * who still remembers `:tada:` keeps finding it. */
  localized: string[] = []
): number | null => {
  if (
    emoji.normalizedShortcodes.some((term) => term === query) ||
    localized.some((term) => term === query)
  ) {
    return 0
  }
  if (
    emoji.normalizedShortcodes.some((term) => term.startsWith(query)) ||
    localized.some((term) => term.startsWith(query))
  ) {
    return 10
  }
  if (emoji.normalizedKeywords.some((term) => term === query)) return 20
  if (emoji.normalizedKeywords.some((term) => term.startsWith(query))) return 30
  if (emoji.normalizedName.startsWith(query)) return 40
  if (
    emoji.normalizedShortcodes.some((term) => term.includes(query)) ||
    emoji.normalizedKeywords.some((term) => term.includes(query)) ||
    emoji.normalizedName.includes(query) ||
    localized.some((term) => term.includes(query))
  ) {
    return 50
  }
  return null
}

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
export const searchEmoji = (
  rawQuery: string,
  {
    limit,
    maxVersion,
    localizedTerms,
  }: {
    limit?: number
    maxVersion?: number
    localizedTerms?: Map<string, string[]>
  } = {}
): EmojiEntry[] => {
  const query = normalize(rawQuery)
  const withinVersion = (emoji: EmojiEntry) =>
    maxVersion === undefined || emoji.version <= maxVersion

  if (!query) {
    const defaults = DEFAULT_EMOJI_IDS.flatMap((id) => {
      const emoji = EMOJI_BY_ID.get(id)
      return emoji && withinVersion(emoji) ? [emoji] : []
    })
    return limit === undefined ? defaults : defaults.slice(0, limit)
  }

  const matches = EMOJI_INDEX.flatMap((emoji) => {
    if (!withinVersion(emoji)) return []
    const localized = localizedTerms?.get(emoji.hexcode)?.map(normalize)
    const score = scoreCandidate(emoji, query, localized)
    return score === null ? [] : [{ emoji, score }]
  }).sort(
    (a, b) =>
      a.score - b.score ||
      a.emoji.id.length - b.emoji.id.length ||
      a.emoji.order - b.emoji.order
  )

  return (limit === undefined ? matches : matches.slice(0, limit)).map(
    ({ emoji }) => emoji
  )
}
