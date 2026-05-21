import type { NumberInputProps } from "@/experimental/Forms/Fields/NumberInput"
import type { DataAttributes } from "@/global.types"

type BaseProps = Omit<
  NumberInputProps,
  "label" | "hideLabel" | "step" | "min" | "max" | "locale"
>

export interface F0AmountCalculatorProps extends BaseProps, DataAttributes {
  /** Base amount to display as context. Controlled by the consumer. Only rendered when explicitly provided. */
  baseAmount?: number | null
  /** Currency or suffix for the base amount (e.g. "€", "USD"). Shown after the base amount. */
  currency?: string
  /** Accessible label for the input (visually hidden). Default: "Amount calculator" */
  label?: string
  /** Locale for number formatting (e.g. "en-US", "de-DE", "es-ES"). Required. */
  locale: string
}
