import { describe, expect, it } from "vitest"

import {
  collectLanguages,
  defaultLocale,
  isLocalizedList,
  languageLabel,
  resolveLocalized,
} from "./localized"

interface Cue {
  text: string
  startTime?: number
}

const CUES: Cue[] = [
  { text: "**Recruiter:** Tell me about your experience", startTime: 0 },
  { text: "**Alex:** I worked three years in logistics", startTime: 14 },
]

describe("resolveLocalized", () => {
  it("passes a plain value through", () => {
    expect(resolveLocalized("hello", "en")).toBe("hello")
    expect(resolveLocalized(undefined, "en")).toBeUndefined()
  })

  it("returns the entry for the locale", () => {
    const value = [
      { locale: "en", value: "hi" },
      { locale: "es", value: "hola" },
    ]
    expect(resolveLocalized(value, "es")).toBe("hola")
  })

  it("falls back to the first entry when the locale isn't present", () => {
    const value = [
      { locale: "en", value: "hi" },
      { locale: "es", value: "hola" },
    ]
    expect(resolveLocalized(value, "fr")).toBe("hi")
    expect(resolveLocalized(value, undefined)).toBe("hi")
  })

  it("passes a value that is itself an array through untouched", () => {
    expect(resolveLocalized<Cue[]>(CUES, "en")).toBe(CUES)
  })

  it("resolves array values provided per locale", () => {
    const es: Cue[] = [{ text: "**Alex:** Trabajé tres años", startTime: 14 }]
    const value = [
      { locale: "en", value: CUES },
      { locale: "es", value: es },
    ]
    expect(resolveLocalized(value, "es")).toBe(es)
    expect(resolveLocalized(value, "de")).toBe(CUES)
  })

  it("returns undefined for an empty locale list", () => {
    expect(resolveLocalized([], "en")).toBeUndefined()
  })
})

describe("collectLanguages", () => {
  it("unions locales across values in order, de-duplicated, keeping labels", () => {
    const summary = [
      { locale: "en", value: "s-en" },
      { locale: "es", label: "Español", value: "s-es" },
    ]
    const transcription = [
      { locale: "es", value: "t-es" },
      { locale: "fr", value: "t-fr" },
    ]
    expect(collectLanguages(summary, transcription)).toEqual([
      { locale: "en", label: undefined },
      { locale: "es", label: "Español" },
      { locale: "fr", label: undefined },
    ])
  })

  it("ignores plain values", () => {
    expect(collectLanguages("plain", undefined)).toEqual([])
  })

  it("reports no languages for a value that is an array", () => {
    expect(collectLanguages(CUES)).toEqual([])
  })

  it("reports the languages of a locale list of arrays", () => {
    expect(
      collectLanguages([
        { locale: "en", value: CUES },
        { locale: "es", label: "Español", value: CUES },
      ])
    ).toEqual([
      { locale: "en", label: undefined },
      { locale: "es", label: "Español" },
    ])
  })
})

describe("defaultLocale", () => {
  const langs = [{ locale: "en" }, { locale: "es" }, { locale: "fr" }]

  it("prefers an explicit default, matched by primary subtag", () => {
    expect(defaultLocale(langs, "es")).toBe("es")
    expect(defaultLocale(langs, "es-ES")).toBe("es")
  })

  it("falls back to the first when nothing matches", () => {
    expect(defaultLocale(langs, "de")).toBe("en")
  })

  it("returns undefined with no languages", () => {
    expect(defaultLocale([], "en")).toBeUndefined()
  })
})

describe("languageLabel", () => {
  it("prefers an explicit label", () => {
    expect(languageLabel({ locale: "es", label: "Castellano" })).toBe(
      "Castellano"
    )
  })

  it("derives a language name from the locale", () => {
    expect(languageLabel({ locale: "en" }, "en")).toBe("English")
  })

  it("capitalises a lowercased endonym", () => {
    // Intl.DisplayNames returns "español" in its own locale; the option label
    // should read "Español".
    expect(languageLabel({ locale: "es" }, "es")).toBe("Español")
  })
})

describe("isLocalizedList", () => {
  it("reads a list of locale entries as localized", () => {
    expect(isLocalizedList([{ locale: "en", value: "Hello" }])).toBe(true)
  })

  it("does not read a value that is itself an array as localized", () => {
    expect(isLocalizedList(CUES)).toBe(false)
  })

  it("does not read entries missing locale or value as localized", () => {
    expect(isLocalizedList([{ locale: "en" } as never])).toBe(false)
    expect(isLocalizedList([{ value: "Hello" } as never])).toBe(false)
  })

  it("treats a plain value as not localized", () => {
    expect(isLocalizedList("Hello")).toBe(false)
    expect(isLocalizedList(undefined)).toBe(false)
  })
})
