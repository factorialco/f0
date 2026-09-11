import { describe, expect, it } from "vitest"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import { f0FormField, getF0Config } from "../f0Schema"
import { createZodErrorMap } from "../zodErrorMap"

const resolved = {
  formatted: "Carrer de Colón 12, 08002 Barcelona, Spain",
  addressLine1: "Carrer de Colón 12",
  city: "Barcelona",
  state: "Catalonia",
  postalCode: "08002",
  country: "es",
  placeId: "es-1",
  latitude: 41.3809,
  longitude: 2.1785,
  timezone: "Europe/Madrid",
}

const typed = { addressLine1: "Carrer de Colón 12", city: "Barcelona" }

describe("f0FormField.location", () => {
  it("builds a location field config with the given options", () => {
    const schema = f0FormField.location({
      label: "Office address",
      manualEntry: true,
      countries: ["es", "pt"],
      defaultCountry: "es",
    })

    expect(getF0Config(schema)).toMatchObject({
      fieldType: "location",
      label: "Office address",
      manualEntry: true,
      countries: ["es", "pt"],
      defaultCountry: "es",
    })
  })

  it("accepts a typed address and a resolved one", () => {
    const schema = f0FormField.location({ label: "Address" })

    expect(schema.safeParse(typed).success).toBe(true)
    expect(schema.safeParse(resolved).success).toBe(true)
  })

  it("rejects an empty value when required", () => {
    const schema = f0FormField.location({ label: "Address" })

    const result = schema.safeParse({ addressLine1: "  " })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0]).toMatchObject({
        code: "custom",
        params: { type: "location", reason: "empty" },
      })
    }
  })

  it("raises the location message for the undefined a cleared field emits", () => {
    const schema = f0FormField.location({ label: "Address" })

    // The component emits undefined for an empty value, so this, not `{}`, is
    // what the form validates
    const result = schema.safeParse(undefined)

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0]).toMatchObject({
        code: "custom",
        params: { type: "location", reason: "empty" },
      })
    }
  })

  it("uses a custom emptyMessage for that same undefined", () => {
    const schema = f0FormField.location({
      label: "Address",
      emptyMessage: "Where is the office?",
    })

    const result = schema.safeParse(undefined, {
      errorMap: createZodErrorMap(defaultTranslations),
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Where is the office?")
    }
  })

  it("accepts an empty value when optional", () => {
    const schema = f0FormField.location({ label: "Address", optional: true })

    expect(schema.safeParse({}).success).toBe(true)
    expect(schema.safeParse(undefined).success).toBe(true)
  })

  it("counts a country-only value as filled", () => {
    const schema = f0FormField.location({ label: "Address" })

    expect(schema.safeParse({ country: "es" }).success).toBe(true)
  })

  it("accepts a picked place that has no granular parts", () => {
    const schema = f0FormField.location({
      label: "Address",
      requireResolved: true,
    })

    // A point of interest or a plus code resolves to a formatted line and
    // coordinates with nothing to put in the street or city parts
    expect(
      schema.safeParse({
        formatted: "Sagrada Família, Barcelona",
        placeId: "poi-1",
        latitude: 41.4036,
        longitude: 2.1744,
      }).success
    ).toBe(true)
  })

  it("requires a picked place when requireResolved is set", () => {
    const schema = f0FormField.location({
      label: "Address",
      requireResolved: true,
    })

    expect(schema.safeParse(resolved).success).toBe(true)

    const result = schema.safeParse(typed)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0]).toMatchObject({
        code: "custom",
        params: { type: "location", reason: "unresolved" },
      })
    }
  })

  it("skips the resolved check for an empty optional value", () => {
    const schema = f0FormField.location({
      label: "Address",
      optional: true,
      requireResolved: true,
    })

    expect(schema.safeParse({}).success).toBe(true)
  })

  it("localizes both messages through the zod error map", () => {
    const errorMap = createZodErrorMap(defaultTranslations)

    const empty = f0FormField
      .location({ label: "Address" })
      .safeParse({}, { errorMap })
    expect(empty.success).toBe(false)
    if (!empty.success) {
      expect(empty.error.issues[0].message).toBe(
        defaultTranslations.forms.validation.location.empty
      )
    }

    const unresolved = f0FormField
      .location({ label: "Address", requireResolved: true })
      .safeParse(typed, { errorMap })
    expect(unresolved.success).toBe(false)
    if (!unresolved.success) {
      expect(unresolved.error.issues[0].message).toBe(
        defaultTranslations.forms.validation.location.unresolved
      )
    }
  })

  it("uses the custom messages when given", () => {
    const errorMap = createZodErrorMap(defaultTranslations)

    const empty = f0FormField
      .location({ label: "Address", emptyMessage: "Where is the office?" })
      .safeParse({}, { errorMap })
    expect(empty.success).toBe(false)
    if (!empty.success) {
      expect(empty.error.issues[0].message).toBe("Where is the office?")
    }

    const unresolved = f0FormField
      .location({
        label: "Address",
        requireResolved: true,
        unresolvedMessage: "Pick one of the suggestions",
      })
      .safeParse(typed, { errorMap })
    expect(unresolved.success).toBe(false)
    if (!unresolved.success) {
      expect(unresolved.error.issues[0].message).toBe(
        "Pick one of the suggestions"
      )
    }
  })
})
