import { describe, expect, it } from "vitest"
import {
  editKeepsResolution,
  formatLocationValue,
  invalidateResolution,
  isLocationValueEmpty,
  isResolvedValue,
} from "../lib/format"

const resolved = {
  formatted: "Carrer de Colón 12, 08001 Barcelona, Spain",
  addressLine1: "Carrer de Colón 12",
  city: "Barcelona",
  postalCode: "08001",
  state: "Catalonia",
  country: "es" as const,
  placeId: "place-1",
  latitude: 41.38,
  longitude: 2.17,
  timezone: "Europe/Madrid",
}

describe("formatLocationValue", () => {
  it("joins the typed parts with postal code and city on one segment", () => {
    expect(formatLocationValue(resolved, "Spain")).toBe(
      "Carrer de Colón 12, 08001 Barcelona, Catalonia, Spain"
    )
  })

  it("skips empty and whitespace-only parts", () => {
    expect(
      formatLocationValue({ addressLine1: " Main St ", city: "  " }, undefined)
    ).toBe("Main St")
  })

  it("returns undefined when nothing is set", () => {
    expect(formatLocationValue({})).toBeUndefined()
  })
})

describe("editKeepsResolution", () => {
  it("keeps the pin only for the part that stays inside the building", () => {
    expect(editKeepsResolution("addressLine2")).toBe(true)
    // Everything else describes where the pin is
    expect(editKeepsResolution("addressLine1")).toBe(false)
    expect(editKeepsResolution("city")).toBe(false)
    expect(editKeepsResolution("state")).toBe(false)
    expect(editKeepsResolution("postalCode")).toBe(false)
  })
})

describe("invalidateResolution", () => {
  it("drops place id, coordinates and timezone but keeps the text", () => {
    expect(invalidateResolution(resolved)).toEqual({
      formatted: resolved.formatted,
      addressLine1: resolved.addressLine1,
      city: resolved.city,
      postalCode: resolved.postalCode,
      state: resolved.state,
      country: "es",
    })
  })
})

describe("isLocationValueEmpty", () => {
  it("is empty for undefined and for blank parts", () => {
    expect(isLocationValueEmpty(undefined)).toBe(true)
    expect(isLocationValueEmpty({ addressLine1: "  ", city: "" })).toBe(true)
  })

  it("is not empty when a country is selected", () => {
    expect(isLocationValueEmpty({ country: "es" })).toBe(false)
  })

  it("is not empty for a resolved place without granular parts", () => {
    expect(isLocationValueEmpty({ placeId: "poi-1" })).toBe(false)
    expect(isLocationValueEmpty({ formatted: "Sagrada Família" })).toBe(false)
    expect(isLocationValueEmpty({ formatted: "  " })).toBe(true)
  })
})

describe("isResolvedValue", () => {
  it("requires a place id and both coordinates", () => {
    expect(isResolvedValue(resolved)).toBe(true)
    expect(isResolvedValue({ ...resolved, latitude: undefined })).toBe(false)
    expect(isResolvedValue(invalidateResolution(resolved))).toBe(false)
    expect(isResolvedValue(undefined)).toBe(false)
  })
})
