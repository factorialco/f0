import { Numeric, NumericWithFormatter } from "@/lib/numeric"

export type NumberWithFormatter = NumericWithFormatter & {
  animated?: boolean
}

export type TrendConfig = {
  show?: boolean
  invertStatus?: boolean
}

export type BigNumberProps = {
  value: Numeric | NumberWithFormatter | number
  label?: string
  trend?: boolean | TrendConfig
  comparisonHint?: string
  /**
   * The previous-period figure the value is compared against, rendered as a
   * balance tag. Optional: when omitted, no balance tag renders — prefer that
   * over inventing a baseline when there is no comparable previous period.
   */
  comparison?: Numeric | NumberWithFormatter | number
}
