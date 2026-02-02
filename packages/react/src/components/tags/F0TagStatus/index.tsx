import { withDataTestId } from "@/lib/data-testid"

import { F0TagStatus as _F0TagStatus } from "./F0TagStatus"

export type {
  StatusVariant,
  F0TagStatusProps as TagStatusProps,
  Variant,
} from "./types"
export const F0TagStatus = withDataTestId(_F0TagStatus)
