import { afterEach, describe, expect, it, vi } from "vitest"

import { searchEmoji } from "../emoji-index"
import {
  loadEmojiLocaleTerms,
  resetEmojiLocaleCache,
  resolveEmojiLocale,
} from "../emoji-locale"

afterEach(() => {
  resetEmojiLocaleCache()
  vi.restoreAllMocks()
})

describe("resolveEmojiLocale", () => {
  it("takes a locale emojibase ships as-is", () => {
    expect(resolveEmojiLocale("es")).toBe("es")
    expect(resolveEmojiLocale("zh-hant")).toBe("zh-hant")
  })

  it("is case-insensitive about the tag", () => {
    expect(resolveEmojiLocale("PT")).toBe("pt")
    expect(resolveEmojiLocale("zh-Hant")).toBe("zh-hant")
  })

  it("falls back from a region to its base language", () => {
    // Nobody ships an Argentinian emoji dataset; Spanish is the right answer,
    // and it beats no answer at all.
    expect(resolveEmojiLocale("es-AR")).toBe("es")
    expect(resolveEmojiLocale("pt-BR")).toBe("pt")
    expect(resolveEmojiLocale("fr-CA")).toBe("fr")
  })

  it("keeps a region that has its own dataset", () => {
    expect(resolveEmojiLocale("es-MX")).toBe("es-mx")
  })

  it("asks for nothing when the language is English", () => {
    // It is already in the bundle — requesting it would be pure waste.
    expect(resolveEmojiLocale("en")).toBeNull()
    expect(resolveEmojiLocale("en-US")).toBeNull()
    expect(resolveEmojiLocale("en-AU")).toBeNull()
  })

  it("keeps en-GB, which emojibase does ship separately", () => {
    expect(resolveEmojiLocale("en-GB")).toBe("en-gb")
  })

  it("asks for nothing for a language nobody translated", () => {
    expect(resolveEmojiLocale("eu")).toBeNull()
    expect(resolveEmojiLocale("xx-YY")).toBeNull()
    expect(resolveEmojiLocale(undefined)).toBeNull()
  })
})

describe("loadEmojiLocaleTerms", () => {
  it("maps codepoints to the localized name and tags", async () => {
    const terms = await loadEmojiLocaleTerms("es")

    // Lowercased hexcode is the join key with the emoji-mart index.
    expect(terms.get("1f525")).toContain("fuego")
    expect(terms.get("1f600")).toBeDefined()
  })

  it("covers skin-tone variants, which the index only holds by default tone", async () => {
    const terms = await loadEmojiLocaleTerms("es")
    // 👋🏽 — waving hand, medium skin tone.
    expect(terms.get("1f44b-1f3fd")).toBeDefined()
  })

  it("resolves to nothing for a null locale without touching the network", async () => {
    await expect(loadEmojiLocaleTerms(null)).resolves.toEqual(new Map())
  })

  it("loads a locale once and reuses it", async () => {
    const first = loadEmojiLocaleTerms("it")
    const second = loadEmojiLocaleTerms("it")
    expect(first).toBe(second)
    await first
  })
})

describe("searching with a localized layer", () => {
  it("finds an emoji by its Spanish name", async () => {
    const localizedTerms = await loadEmojiLocaleTerms("es")

    const [top] = searchEmoji("fuego", { limit: 1, localizedTerms })
    expect(top?.native).toBe("🔥")
  })

  it("keeps English working at the same time", async () => {
    const localizedTerms = await loadEmojiLocaleTerms("es")

    // Both languages score in the same tiers, so someone typing Spanish who
    // still remembers the shortcode doesn't lose it.
    expect(searchEmoji("fire", { limit: 1, localizedTerms })[0]?.native).toBe(
      "🔥"
    )
    expect(searchEmoji("tada", { limit: 1, localizedTerms })[0]?.native).toBe(
      "🎉"
    )
  })

  it("finds nothing extra when no layer is loaded", () => {
    // The English-only baseline: this is what a browser in an unsupported
    // language gets, and it is the same search the picker has always had.
    expect(searchEmoji("fuego", { limit: 1 })).toHaveLength(0)
    expect(searchEmoji("fire", { limit: 1 })[0]?.native).toBe("🔥")
  })

  it("still honours the version filter through the localized path", async () => {
    const localizedTerms = await loadEmojiLocaleTerms("es")

    // "cara derritiéndose" is Emoji 14; a platform capped at 13 must not be
    // offered it just because a translation exists.
    const capped = searchEmoji("derriti", { maxVersion: 13, localizedTerms })
    expect(capped).toHaveLength(0)
  })
})
