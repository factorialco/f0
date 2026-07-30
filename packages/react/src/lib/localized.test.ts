import { describe, expect, it } from "vitest"

import {
  collectLanguages,
  defaultLocale,
  languageLabel,
  resolveLocalized,
} from "./localized"

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
