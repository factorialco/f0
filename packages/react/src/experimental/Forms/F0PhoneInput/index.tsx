import { experimentalComponent } from "@/lib/experimental"

import { F0PhoneInput as F0PhoneInputComponent } from "./F0PhoneInput"

export * from "./types"

/** @experimental This is an experimental component, use it at your own risk. */
export const F0PhoneInput = experimentalComponent(
  "F0PhoneInput",
  F0PhoneInputComponent
)
