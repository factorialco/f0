import { describe, expect, it } from "vitest"

import { getDateFnsLocale, getNumericDateFormat } from "../date"

describe("getDateFnsLocale", () => {
  it("keeps the region when date-fns ships a locale for it", () => {
    expect(getDateFnsLocale("en-US")?.code).toBe("en-US")
    expect(getDateFnsLocale("en-GB")?.code).toBe("en-GB")
    expect(getDateFnsLocale("pt-BR")?.code).toBe("pt-BR")
  })

  it("resolves region-less English to en-US", () => {
    expect(getDateFnsLocale("en")?.code).toBe("en-US")
  })

  it("falls back to the base language for unshipped regions", () => {
    expect(getDateFnsLocale("es-MX")?.code).toBe("es")
  })

  it("accepts underscore-separated tags and mixed casing", () => {
    expect(getDateFnsLocale("pt_br")?.code).toBe("pt-BR")
  })

  it("returns undefined for an unsupported language", () => {
    expect(getDateFnsLocale("xyz")).toBeUndefined()
  })

  it("tolerates a missing locale instead of throwing", () => {
    expect(getDateFnsLocale(undefined)).toBeUndefined()
    expect(getDateFnsLocale("")).toBeUndefined()
  })
})

describe("getNumericDateFormat", () => {
  it("returns the fallback for a locale date-fns does not ship", () => {
    expect(getNumericDateFormat("xyz", "dd/MM/yyyy")).toBe("dd/MM/yyyy")
    expect(getNumericDateFormat(undefined, "dd/MM/yyyy")).toBe("dd/MM/yyyy")
  })

  it("follows the field order of the given locale", () => {
    expect(getNumericDateFormat("en-US", "dd/MM/yyyy")).toBe("MM/dd/yyyy")
    expect(getNumericDateFormat("en-GB", "dd/MM/yyyy")).toBe("dd/MM/yyyy")
    expect(getNumericDateFormat("en-CA", "dd/MM/yyyy")).toBe("yyyy-MM-dd")
  })

  it("pads locale patterns that use a bare year token", () => {
    expect(getNumericDateFormat("es", "dd/MM/yyyy")).toBe("dd/MM/yyyy")
    expect(getNumericDateFormat("de", "dd/MM/yyyy")).toBe("dd.MM.yyyy")
  })
})
