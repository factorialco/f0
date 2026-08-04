import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { L10nProvider } from "./l10n-provider"
import { useDateFnsLocale } from "./use-date-fns-locale"

const localeCodeFor = (locale: string) =>
  renderHook(() => useDateFnsLocale(), {
    wrapper: ({ children }) => (
      <L10nProvider l10n={{ locale }}>{children}</L10nProvider>
    ),
  }).result.current.code

describe("useDateFnsLocale", () => {
  it("resolves a language-only key", () => {
    expect(localeCodeFor("de")).toBe("de")
  })

  it("prefers the regional variant over the bare language", () => {
    expect(localeCodeFor("pt-BR")).toBe("pt-BR")
    expect(localeCodeFor("de-AT")).toBe("de-AT")
  })

  it("is case insensitive for the region", () => {
    expect(localeCodeFor("pt-br")).toBe("pt-BR")
  })

  it("falls back to the bare language when the region is unknown", () => {
    expect(localeCodeFor("de-CH")).toBe("de")
  })

  it("resolves script subtags, not just regions", () => {
    expect(localeCodeFor("sr-Latn")).toBe("sr-Latn")
    expect(localeCodeFor("uz-cyrl")).toBe("uz-Cyrl")
  })

  it("resolves English and unsupported locales to en-US", () => {
    expect(localeCodeFor("en")).toBe("en-US")
    expect(localeCodeFor("en-GB")).toBe("en-GB")
    expect(localeCodeFor("xyz")).toBe("en-US")
    expect(localeCodeFor("")).toBe("en-US")
  })
})
