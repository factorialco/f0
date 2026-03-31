import { withDataTestId } from "@/lib/data-testid"

import { F0Chip as F0ChipComponent } from "./F0Chip"

export { chipVariants, chipVariantValues } from "./types"
export type { F0ChipProps, ChipVariantValue } from "./types"

export const F0Chip = withDataTestId(F0ChipComponent)
