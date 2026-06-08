export * from "./F0SearchInput"

import { F0SearchInput } from "./F0SearchInput"
export type { F0SearchInputProps } from "./F0SearchInput"

/**
 * @deprecated Renamed to `F0SearchInput` to match the F0 input vocabulary
 * (any component where the user types in a box has the `Input` suffix and
 * lives under the `Inputs/` group). The `F1` prefix was also legacy. Will
 * be removed once consumers have migrated.
 *
 *   - import { F1SearchBox } from "@factorialco/f0-react"
 *   + import { F0SearchInput } from "@factorialco/f0-react"
 *
 * @removeIn 2.0.0
 */
// Typed as `typeof F0SearchInput` (rather than inferred) so the bundled
// declaration references F0SearchInput's type instead of re-expanding the
// forwardRef type — which otherwise produces a circular `InputFieldProps_2`
// self-import that resolves to `any` for consumers.
export const F1SearchBox: typeof F0SearchInput = F0SearchInput
