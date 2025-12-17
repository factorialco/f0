import { Numeric, RelaxedNumericWithFormatter } from "@/lib/numeric"

export const statuses = ["positive", "neutral", "negative"] as const
export type BalanceStatus = (typeof statuses)[number]

export interface NumericValue {
  number: number
  units?: string
  unitsPosition?: "left" | "right"
  decimalPlaces?: number | undefined
  locale?: string
}

export type F0TagBalanceProps = {
  /**
   * Inverts the balance status color. Is useful when a negative percent mean something positive.
   */
  invertStatus?: boolean
  /**
   * Hint text to display next to the tag (This text is not displayed when the balance is null or undefined)
   */
  hint?: string
  /**
   * Info text to display an i icon and a tooltip next to the tag
   */
  info?: string

  /**
   * Text to display when the balance is null or undefined
   */
  nullText?: string

  /**
   * Value to display next to the tag can be a number, a Numeric or a NumericWithFormatter
   */
  amount: RelaxedNumericWithFormatter | Numeric
} & (
  | {
      percentage:
        | (Omit<RelaxedNumericWithFormatter, "value"> & {
            value: Omit<Numeric, "units" | "unitsPosition">
          })
        | Omit<Numeric, "units" | "unitsPosition">
    }
  | {
      percentage?: null
      formatterOptions?: undefined
    }
)
