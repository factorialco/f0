import type { F0LocationInputValue, LocationField } from "./types"

/** Value keys the user can type into, i.e. everything but the resolution data */
export type EditableLocationPart = LocationField | "addressLine1"

export type LocationValueAction =
  | { type: "setPart"; part: EditableLocationPart; text: string }
  | { type: "setCountry"; country: F0LocationInputValue["country"] }
  | { type: "applyResolved"; value: F0LocationInputValue }
  | { type: "clear" }
