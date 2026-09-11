import type { LocationPart } from "./types"

/** Value keys the user can type into, i.e. everything but the resolution data */
export type EditableLocationPart = Exclude<LocationPart, "country">
