import { describe, expect, it } from "vitest"

import {
  buildMeta,
  countryForDialCode,
  countryForPartialE164,
  countryForValue,
  e164ToValue,
  isPossiblePhoneValue,
  isValidPhoneValue,
  valueToE164,
} from "../lib/phone"

describe("valueToE164", () => {
  it("joins a stored prefix and national number", () => {
    expect(valueToE164({ prefix: "+34", number: "674897945" })).toBe(
      "+34674897945"
    )
  })

  it("prefers a full international number stored in `number` over the prefix", () => {
    expect(valueToE164({ prefix: undefined, number: "+34674897945" })).toBe(
      "+34674897945"
    )
    expect(valueToE164({ prefix: "+34", number: "+447911123456" })).toBe(
      "+447911123456"
    )
  })

  it("strips formatting characters from international numbers", () => {
    expect(valueToE164({ prefix: undefined, number: "+34 674-89-79-45" })).toBe(
      "+34674897945"
    )
  })

  it("strips the trunk prefix when the stored national number carries one", () => {
    expect(valueToE164({ prefix: "+44", number: "07911123456" })).toBe(
      "+447911123456"
    )
  })

  it("keeps significant leading zeros (Italian numbers)", () => {
    expect(valueToE164({ prefix: "+39", number: "0261234567" })).toBe(
      "+390261234567"
    )
  })

  it("passes through numbers with an unknown dial code", () => {
    expect(valueToE164({ prefix: "+999", number: "123" })).toBe("+999123")
  })

  it("uses the fallback country for prefixless national numbers", () => {
    expect(valueToE164({ prefix: undefined, number: "674897945" }, "ES")).toBe(
      "+34674897945"
    )
  })

  it("cannot represent a prefixless national number without a fallback country", () => {
    expect(
      valueToE164({ prefix: undefined, number: "674897945" })
    ).toBeUndefined()
  })

  it("treats empty numbers as empty values", () => {
    expect(valueToE164(undefined)).toBeUndefined()
    expect(valueToE164({ prefix: "+34", number: "" })).toBeUndefined()
    expect(valueToE164({ prefix: "+34", number: "   " })).toBeUndefined()
  })
})

describe("e164ToValue", () => {
  it("splits a parseable number into dial code and national number", () => {
    expect(e164ToValue("+34674897945", undefined)).toEqual({
      prefix: "+34",
      number: "674897945",
    })
  })

  it("resolves shared dial codes from the number itself", () => {
    expect(e164ToValue("+12042345678", undefined)).toEqual({
      prefix: "+1",
      number: "2042345678",
    })
  })

  it("falls back to the selected country's dial code for partial numbers", () => {
    expect(e164ToValue("+3467", "ES")).toEqual({ prefix: "+34", number: "67" })
  })

  it("treats a bare dial code with no national digits as empty", () => {
    expect(e164ToValue("+34", "ES")).toBeUndefined()
  })

  it("passes through numbers with an unknown dial code untouched", () => {
    expect(e164ToValue("+999123", undefined)).toEqual({
      prefix: undefined,
      number: "+999123",
    })
  })

  it("returns undefined for empty input", () => {
    expect(e164ToValue(undefined, "ES")).toBeUndefined()
    expect(e164ToValue("", "ES")).toBeUndefined()
  })
})

describe("countryForDialCode", () => {
  it("resolves unique dial codes", () => {
    expect(countryForDialCode("+34")).toBe("ES")
  })

  it("resolves shared dial codes to their main country", () => {
    expect(countryForDialCode("+1")).toBe("US")
    expect(countryForDialCode("+44")).toBe("GB")
  })

  it("returns undefined for unknown or malformed dial codes", () => {
    expect(countryForDialCode("+999")).toBeUndefined()
    expect(countryForDialCode("34")).toBeUndefined()
    expect(countryForDialCode("")).toBeUndefined()
  })
})

describe("countryForPartialE164", () => {
  it("resolves the main country of a shared dial code", () => {
    expect(countryForPartialE164("+1")).toBe("US")
    expect(countryForPartialE164("+7")).toBe("RU")
    expect(countryForPartialE164("+44")).toBe("GB")
  })

  it("resolves past the dial code while the number is still ambiguous", () => {
    expect(countryForPartialE164("+4479")).toBe("GB")
  })

  it("resolves unique dial codes", () => {
    expect(countryForPartialE164("+34")).toBe("ES")
  })

  it("respects an allowlist, falling back to other group members", () => {
    expect(countryForPartialE164("+44", ["GG", "JE"])).toBe("GG")
    expect(countryForPartialE164("+44", ["ES"])).toBeUndefined()
  })

  it("returns undefined for incomplete or non-international input", () => {
    expect(countryForPartialE164("+")).toBeUndefined()
    expect(countryForPartialE164("+2")).toBeUndefined()
    expect(countryForPartialE164("44")).toBeUndefined()
  })
})

describe("countryForValue", () => {
  it("derives the country from the number when possible", () => {
    expect(countryForValue({ prefix: undefined, number: "+12042345678" })).toBe(
      "CA"
    )
  })

  it("falls back to the stored prefix when the number is empty", () => {
    expect(countryForValue({ prefix: "+44", number: "" })).toBe("GB")
  })

  it("returns undefined when nothing can be resolved", () => {
    expect(countryForValue(undefined)).toBeUndefined()
    expect(
      countryForValue({ prefix: undefined, number: "674897945" })
    ).toBeUndefined()
  })
})

describe("isValidPhoneValue / isPossiblePhoneValue", () => {
  it("accepts a number matching the country's patterns", () => {
    expect(isValidPhoneValue({ prefix: "+34", number: "674897945" })).toBe(true)
    expect(isPossiblePhoneValue({ prefix: "+34", number: "674897945" })).toBe(
      true
    )
  })

  it("distinguishes possible (length) from valid (pattern)", () => {
    // Right length for a NANPA number, but area codes cannot start with 1
    const value = { prefix: "+1", number: "1234567890" }
    expect(isPossiblePhoneValue(value)).toBe(true)
    expect(isValidPhoneValue(value)).toBe(false)
  })

  it("rejects too-short numbers on both checks", () => {
    expect(isValidPhoneValue({ prefix: "+34", number: "67" })).toBe(false)
    expect(isPossiblePhoneValue({ prefix: "+34", number: "67" })).toBe(false)
  })

  it("validates legacy values holding a full international number", () => {
    expect(
      isValidPhoneValue({ prefix: undefined, number: "+34674897945" })
    ).toBe(true)
  })

  it("rejects empty values", () => {
    expect(isValidPhoneValue(undefined)).toBe(false)
    expect(isValidPhoneValue({ prefix: "+34", number: "" })).toBe(false)
    expect(isPossiblePhoneValue(undefined)).toBe(false)
  })
})

describe("buildMeta", () => {
  it("reports validity and country for complete numbers", () => {
    expect(buildMeta("+34674897945", undefined)).toEqual({
      country: "es",
      e164: "+34674897945",
      isValid: true,
      isPossible: true,
    })
  })

  it("reports partial numbers as not valid, keeping the selected country", () => {
    expect(buildMeta("+3467", "ES")).toEqual({
      country: "es",
      e164: "+3467",
      isValid: false,
      isPossible: false,
    })
  })

  it("handles empty values", () => {
    expect(buildMeta(undefined, "ES")).toEqual({
      country: "es",
      e164: undefined,
      isValid: false,
      isPossible: false,
    })
  })
})
