import type { TestableProps } from "@/global.types"
import { Numeric, NumericWithFormatter } from "@/lib/numeric"

export type NumberWithFormatter = NumericWithFormatter & {
  animated?: boolean
}

export type TrendConfig = {
  show?: boolean
  invertStatus?: boolean
}

export type BigNumberProps = TestableProps & {
  value: Numeric | NumberWithFormatter | number
  label?: string
  trend?: boolean | TrendConfig
  comparisonHint?: string
  comparison: Numeric | NumberWithFormatter | number
}
