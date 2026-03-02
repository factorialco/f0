import { withDataTestId } from "@/lib/data-testid"

import { F0TagDot as _F0TagDot } from "./F0TagDot"

export { tagDotColors } from "./types"
export type { NewColor, Props as TagDotProps } from "./types"
export const F0TagDot = withDataTestId(_F0TagDot)
