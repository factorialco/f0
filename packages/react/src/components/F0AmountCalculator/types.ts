export type F0AmountCalculatorProps = {
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
  /** Base amount to display as context (e.g. "of 0,00 €"). Defaults to 0. Only shown when provided or in popover mode. */
  baseAmount?: number | null
  /** Currency or suffix for the base amount (e.g. "€", "USD"). Shown after the base amount. */
  currency?: string
}
