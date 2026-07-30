import { describe, expect, it } from "vitest"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import { f0FormField, getF0Config } from "../f0Schema"
import { createZodErrorMap } from "../zodErrorMap"

describe("f0FormField.phone", () => {
  it("builds a phone field config with the given options", () => {
    const schema = f0FormField.phone({
      label: "Phone",
      defaultCountry: "es",
      pinnedCountries: ["es", "gb"],
    })

    expect(getF0Config(schema)).toMatchObject({
      fieldType: "phone",
      label: "Phone",
      defaultCountry: "es",
      pinnedCountries: ["es", "gb"],
    })
  })

  it("accepts a valid number", () => {
    const schema = f0FormField.phone({ label: "Phone" })

    const result = schema.safeParse({ prefix: "+34", number: "674897945" })

    expect(result.success).toBe(true)
  })

  it("rejects a number that does not match the country's patterns", () => {
    const schema = f0FormField.phone({ label: "Phone" })

    const result = schema.safeParse({ prefix: "+34", number: "67" })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0]).toMatchObject({
        code: "custom",
        params: { type: "phone" },
      })
    }
  })

  it("localizes the invalid message through the zod error map", () => {
    const schema = f0FormField.phone({ label: "Phone" })

    const result = schema.safeParse(
      { prefix: "+34", number: "67" },
      { errorMap: createZodErrorMap(defaultTranslations) }
    )

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        defaultTranslations.forms.validation.phone.invalid
      )
    }
  })

  it('only checks the length with validate: "possible"', () => {
    const schema = f0FormField.phone({ label: "Phone", validate: "possible" })

    // Right length for a NANPA number, but area codes cannot start with 1
    const value = { prefix: "+1", number: "1234567890" }

    expect(schema.safeParse(value).success).toBe(true)
    expect(f0FormField.phone({ label: "Phone" }).safeParse(value).success).toBe(
      false
    )
  })

  it("skips validation with validate: false", () => {
    const schema = f0FormField.phone({ label: "Phone", validate: false })

    expect(schema.safeParse({ prefix: "+34", number: "67" }).success).toBe(true)
  })

  it("uses the custom invalid message", () => {
    const schema = f0FormField.phone({
      label: "Phone",
      invalidMessage: "Enter a valid phone number",
    })

    const result = schema.safeParse({ prefix: "+34", number: "67" })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Enter a valid phone number")
    }
  })

  it("allows an empty value only when optional", () => {
    const optional = f0FormField.phone({ label: "Phone", optional: true })
    const required = f0FormField.phone({ label: "Phone" })

    expect(optional.safeParse(undefined).success).toBe(true)
    expect(required.safeParse(undefined).success).toBe(false)
  })
})
