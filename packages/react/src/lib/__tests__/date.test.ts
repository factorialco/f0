import { describe, expect, it } from "vitest"

import { getNumericDateFormat } from "../date"

const fallback = "dd/MM/yyyy"

describe("getNumericDateFormat", () => {
  it("follows the field order of the given locale", () => {
    expect(getNumericDateFormat("en-US", fallback)).toBe("MM/dd/yyyy")
    expect(getNumericDateFormat("en-GB", fallback)).toBe("dd/MM/yyyy")
    expect(getNumericDateFormat("en-CA", fallback)).toBe("yyyy-MM-dd")
    expect(getNumericDateFormat("zh-Hant-TW", fallback)).toBe("yyyy/MM/dd")
  })

  it("keeps the locale's separators", () => {
    expect(getNumericDateFormat("de", fallback)).toBe("dd.MM.yyyy")
    expect(getNumericDateFormat("nl", fallback)).toBe("dd-MM-yyyy")
  })

  it("resolves a region-less tag to its default region", () => {
    expect(getNumericDateFormat("en", fallback)).toBe("MM/dd/yyyy")
  })

  it("accepts underscore-separated tags", () => {
    expect(getNumericDateFormat("pt_BR", fallback)).toBe("dd/MM/yyyy")
  })

  it("strips bidirectional marks from separators", () => {
    expect(getNumericDateFormat("ar-EG", fallback)).toBe("dd/MM/yyyy")
  })

  it("returns the fallback for a language the runtime cannot resolve", () => {
    expect(getNumericDateFormat("xyz", fallback)).toBe(fallback)
  })

  it("returns the fallback for a malformed or missing tag", () => {
    expect(getNumericDateFormat("en--US", fallback)).toBe(fallback)
    expect(getNumericDateFormat(undefined, fallback)).toBe(fallback)
    expect(getNumericDateFormat("", fallback)).toBe(fallback)
  })

  it("returns the fallback for calendars that add non date parts", () => {
    expect(getNumericDateFormat("th-TH-u-ca-buddhist", fallback)).toBe(fallback)
  })
})
