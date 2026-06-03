import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseSelect } from "../../shared/InlineProse"
import type { FxSource, ReimbursementCurrency } from "../../types"

/**
 * Foreign-currency handling. The default currency itself is a
 * plain inline-prose value (free text); the FX source is a
 * select. Two distinct controls in one paragraph.
 */

const FX_OPTIONS: { value: FxSource; label: string }[] = [
  { value: "expense-date", label: "the expense date" },
  { value: "submission-date", label: "the submission date" },
  { value: "monthly-average", label: "a monthly average" },
]

const CURRENCY_OPTIONS: { value: string; label: string }[] = [
  { value: "EUR", label: "EUR" },
  { value: "USD", label: "USD" },
  { value: "GBP", label: "GBP" },
  { value: "CHF", label: "CHF" },
]

export function CurrencyCard(props: {
  currency: ReimbursementCurrency
  setDefaultCurrency: (code: string) => void
  setFxSource: (next: FxSource) => void
}) {
  const { currency } = props
  return (
    <F0Card title="Currency">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Expenses are reimbursed in{" "}
          <InlineProseSelect<string>
            value={currency.defaultCurrency}
            options={CURRENCY_OPTIONS}
            onChange={props.setDefaultCurrency}
            ariaLabel="Default reimbursement currency"
          />
          . Foreign-currency expenses are converted using the rate from{" "}
          <InlineProseSelect<FxSource>
            value={currency.fxSource}
            options={FX_OPTIONS}
            onChange={props.setFxSource}
            ariaLabel="Source of foreign-exchange rate"
          />
          .
        </p>
        <F0Text
          content="The applied FX rate is stored on the expense so a future audit can reproduce the conversion."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
