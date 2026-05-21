export * from "./F0NumberInput"

import { F0NumberInput } from "./F0NumberInput"
export type { F0NumberInputProps } from "./F0NumberInput"

/**
 * @deprecated Renamed to `F0NumberInput` to match the F0 input vocabulary
 * (any component where the user types in a box has the `Input` suffix and
 * lives under the `Inputs/` group). Will be removed once consumers have
 * migrated.
 *
 *   - import { NumberInput } from "@factorialco/f0-react"
 *   + import { F0NumberInput } from "@factorialco/f0-react"
 *
 * @removeIn 2.0.0
 */
export const NumberInput = F0NumberInput

/**
 * @deprecated Renamed to `F0NumberInputProps`. See the `NumberInput`
 * deprecation note.
 * @removeIn 2.0.0
 */
export type NumberInputProps = import("./F0NumberInput").F0NumberInputProps
