import { Numeric } from "@/lib/numeric"

export interface BigNumberProps {
  value: Numeric
  label: string
  comparison: {
    value: Numeric
  }
}
