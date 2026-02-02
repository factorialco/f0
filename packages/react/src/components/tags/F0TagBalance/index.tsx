import { withDataTestId } from "@/lib/data-testid"

import { F0TagBalance as _F0TagBalance } from "./F0TagBalance"

export type {
  BalanceStatus as Status,
  F0TagBalanceProps as TagBalanceProps,
} from "./types"
export const F0TagBalance = withDataTestId(_F0TagBalance)
