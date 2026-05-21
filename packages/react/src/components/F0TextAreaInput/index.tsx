export * from "./F0TextAreaInput"

import { F0TextAreaInput } from "./F0TextAreaInput"
export type { F0TextAreaInputProps } from "./F0TextAreaInput"

/**
 * @deprecated Renamed to `F0TextAreaInput` to match the F0 input vocabulary
 * (any component where the user types in a box has the `Input` suffix and
 * lives under the `Inputs/` group). Will be removed once consumers have
 * migrated.
 *
 *   - import { Textarea } from "@factorialco/f0-react"
 *   + import { F0TextAreaInput } from "@factorialco/f0-react"
 *
 * @removeIn 2.0.0
 */
export const Textarea = F0TextAreaInput

/**
 * @deprecated Renamed to `F0TextAreaInputProps`. See the `Textarea`
 * deprecation note.
 * @removeIn 2.0.0
 */
export type TextareaProps = import("./F0TextAreaInput").F0TextAreaInputProps
