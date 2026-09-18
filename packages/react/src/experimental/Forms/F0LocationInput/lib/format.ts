import type { EditableLocationPart } from "../internal-types"
import type { F0LocationInputValue } from "../types"

const editableLocationParts = [
  "addressLine1",
  "addressLine2",
  "city",
  "state",
  "postalCode",
] as const satisfies readonly EditableLocationPart[]

/**
 * Parts that do not describe where the pin is: a floor or apartment number
 * refines the address inside the same building, so it leaves a picked place
 * (and its coordinates) valid. Everything else invalidates it, which is the
 * safe default for any part added later.
 */
const resolutionSafeParts = new Set<EditableLocationPart>(["addressLine2"])

/** Whether editing `part` leaves the picked place's coordinates trustworthy */
export const editKeepsResolution = (part: EditableLocationPart): boolean =>
  resolutionSafeParts.has(part)

const trimmed = (text: string | undefined): string | undefined => {
  const value = text?.trim()
  return value ? value : undefined
}

/**
 * A value is empty only when nothing at all identifies a place. A provider can
 * resolve an address that has no granular breakdown (a point of interest, a
 * plus code), so `formatted` and `placeId` count as content: treating them as
 * empty would blank the field right after the user picked the right address.
 */
export const isLocationValueEmpty = (
  value: F0LocationInputValue | undefined
): boolean => {
  if (!value) {
    return true
  }
  if (value.country || value.placeId || trimmed(value.formatted)) {
    return false
  }
  return editableLocationParts.every((part) => !trimmed(value[part]))
}

/**
 * Display-only join of the typed parts. Not a postal format: the order is the
 * same for every country, which is good enough for a summary line and keeps a
 * per-country address engine out of the design system.
 */
export const formatLocationValue = (
  value: F0LocationInputValue,
  countryName?: string
): string | undefined => {
  const cityLine = [trimmed(value.postalCode), trimmed(value.city)]
    .filter(Boolean)
    .join(" ")
  const parts = [
    trimmed(value.addressLine1),
    trimmed(value.addressLine2),
    cityLine || undefined,
    trimmed(value.state),
    trimmed(countryName),
  ].filter((part): part is string => !!part)
  return parts.length ? parts.join(", ") : undefined
}

/**
 * Drops everything that was only true for the picked place. Reusing stale
 * coordinates after the user edits the street would geofence the wrong site.
 */
export const invalidateResolution = (
  value: F0LocationInputValue
): F0LocationInputValue => {
  const {
    placeId: _placeId,
    latitude: _latitude,
    longitude: _longitude,
    timezone: _timezone,
    ...rest
  } = value
  return rest
}

export const isResolvedValue = (
  value: F0LocationInputValue | undefined
): boolean =>
  !!value &&
  !!value.placeId &&
  typeof value.latitude === "number" &&
  typeof value.longitude === "number"
