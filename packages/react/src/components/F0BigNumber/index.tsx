import { withDataTestId } from "@/lib/data-testid"
export * from "./types"

import { F0BigNumber as F0BigNumberCmp } from "./F0BigNumber"

export const F0BigNumber = withDataTestId(F0BigNumberCmp)
