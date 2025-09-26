import { describe, expect, it } from "vitest"
import { getLocale } from "../utils"

describe("getLocale", () => {
  it("should return the correct locale for a simple language code", () => {
    const locale = getLocale("fr")
    expect(locale).toBeDefined()
    expect(locale?.code).toBe("fr")
  })

  it("should handle locale with country code by extracting base language", () => {
    const locale = getLocale("pt-BR")
    expect(locale).toBeDefined()
    expect(locale?.code).toBe("pt")
  })

  it("should return undefined for unsupported locale", () => {
    const locale = getLocale("xyz")
    expect(locale).toBeUndefined()
  })
})
