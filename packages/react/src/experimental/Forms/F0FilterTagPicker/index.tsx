import { experimentalComponent } from "@/lib/experimental"

import { F0FilterTagPicker as F0FilterTagPickerComponent } from "./F0FilterTagPicker"

export * from "./types"

/**
 * @experimental This component is under active validation and its API may change.
 */
export const F0FilterTagPicker = experimentalComponent(
  "F0FilterTagPicker",
  F0FilterTagPickerComponent
)
