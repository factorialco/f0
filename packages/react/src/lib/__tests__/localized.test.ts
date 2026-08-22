import { describe, expect, it } from "vitest"

import {
  collectLanguages,
  isLocalizedList,
  resolveLocalized,
} from "../localized"

interface Cue {
  text: string
  startTime?: number
}

const CUES: Cue[] = [
  { text: "**Recruiter:** Tell me about your experience", startTime: 0 },
  { text: "**Alex:** I worked three years in logistics", startTime: 14 },
]

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

describe("resolveLocalized", () => {
  it("passes an array value through untouched", () => {
    expect(resolveLocalized<Cue[]>(CUES, "en")).toBe(CUES)
  })

  it("resolves array values provided per locale", () => {
    const es: Cue[] = [{ text: "**Alex:** Trabajé tres años", startTime: 14 }]
    const localized = [
      { locale: "en", value: CUES },
      { locale: "es", value: es },
    ]

    expect(resolveLocalized(localized, "es")).toBe(es)
    expect(resolveLocalized(localized, "de")).toBe(CUES)
  })

  it("still resolves plain string values", () => {
    expect(resolveLocalized("Hello", "en")).toBe("Hello")
    expect(
      resolveLocalized(
        [
          { locale: "en", value: "Hello" },
          { locale: "es", value: "Hola" },
        ],
        "es"
      )
    ).toBe("Hola")
  })

  it("returns undefined for an empty locale list", () => {
    expect(resolveLocalized([], "en")).toBeUndefined()
  })
})

describe("collectLanguages", () => {
  it("reports no languages for a value that is an array", () => {
    expect(collectLanguages(CUES)).toEqual([])
  })

  it("reports the languages of a locale list of arrays", () => {
    expect(
      collectLanguages([
        { locale: "en", value: CUES },
        { locale: "es", label: "Español", value: CUES },
      ])
    ).toEqual([{ locale: "en" }, { locale: "es", label: "Español" }])
  })
})
