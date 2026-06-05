import { describe, expect, it } from "vitest"

import { validateStorageKey } from "../hooks/useDataColectionStorage/validateStorageKey"
import { deriveFallbackStorageKey } from "./storageKey"

describe("deriveFallbackStorageKey", () => {
  it("turns a path into an `auto/<slug>/v1` key", () => {
    expect(deriveFallbackStorageKey("/employees/list")).toBe(
      "auto/employees%2Flist/v1"
    )
  })

  it("falls back to a 'root' slug for the bare '/' path", () => {
    expect(deriveFallbackStorageKey("/")).toBe("auto/root/v1")
    expect(deriveFallbackStorageKey("")).toBe("auto/root/v1")
  })

  it("encodes non-ASCII and unusual characters into a URL-safe slug", () => {
    const key = deriveFallbackStorageKey("/équipes/équipe 1")
    // The slug never contains raw spaces or non-ASCII; only the trailing
    // segment is the version, and the version is unchanged.
    expect(key).toMatch(/^auto\/[A-Za-z0-9%.\-_~]+\/v1$/)
  })

  it("produces a key that satisfies the `name/version` storage-key contract", () => {
    expect(
      validateStorageKey(deriveFallbackStorageKey("/employees/list"))
    ).toBe(true)
    expect(validateStorageKey(deriveFallbackStorageKey("/"))).toBe(true)
    expect(validateStorageKey(deriveFallbackStorageKey("/équipes"))).toBe(true)
  })

  it("is stable across calls with the same pathname", () => {
    expect(deriveFallbackStorageKey("/employees/list")).toBe(
      deriveFallbackStorageKey("/employees/list")
    )
  })
})
