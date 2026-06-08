export * from "./F0TextInput"

import { F0TextInput, type F0TextInputProps } from "./F0TextInput"
export type { F0TextInputProps } from "./F0TextInput"

/**
 * @deprecated Renamed to `F0TextInput` to match the F0 input vocabulary
 * (any component where the user types text in a box has the `Input` suffix
 * and lives under the `Inputs/` group). Will be removed once consumers have
 * migrated. Update your imports:
 *
 *   - import { Input } from "@factorialco/f0-react"
 *   + import { F0TextInput } from "@factorialco/f0-react"
 *
 * @removeIn 2.0.0
 */
export const Input = F0TextInput

/**
 * @deprecated Renamed to `F0TextInputProps`. See the `Input` deprecation note.
 * @removeIn 2.0.0
 */
export type InputProps<T extends string> = F0TextInputProps<T>
