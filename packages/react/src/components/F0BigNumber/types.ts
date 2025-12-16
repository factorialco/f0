import { Numeric, NumericWithFormatter } from "@/lib/numeric"

export type NumberWithFormatter = NumericWithFormatter & {
  animated?: boolean
}

export type BigNumberProps = {
  value: Numeric | NumberWithFormatter | number
  label: string
  comparison: Numeric | NumberWithFormatter | number
}
