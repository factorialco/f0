import type { DataAttributes } from "@/global.types"

export interface F0AmountCalculatorProps extends DataAttributes {
  /** Current numeric value (the percentage or unit value entered) */
  value?: number | null
  /** Callback when value changes */
  onChange?: (value: number | null) => void
  /** Unit label displayed as a tag (default: "%") */
  units?: string
  /** Placeholder text for the input */
  placeholder?: string
  /** Whether the calculator is disabled */
  disabled?: boolean
  /** Locale for number formatting */
  locale?: string
  /** Maximum decimal places allowed */
  maxDecimals?: number
  /** Base amount to display as context. Only rendered when explicitly provided. */
  baseAmount?: number | null
  /** Currency or suffix for the base amount (e.g. "€", "USD"). Shown after the base amount. */
  currency?: string
  /** Accessible label for the input (used as aria-label) */
  ariaLabel?: string
  /** HTML id for the input element */
  id?: string
}
