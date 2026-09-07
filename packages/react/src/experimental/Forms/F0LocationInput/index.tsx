import { experimentalComponent } from "@/lib/experimental"

import { F0LocationInput as F0LocationInputComponent } from "./F0LocationInput"

export * from "./types"

/** @experimental This is an experimental component, use it at your own risk. */
export const F0LocationInput = experimentalComponent(
  "F0LocationInput",
  F0LocationInputComponent
)
