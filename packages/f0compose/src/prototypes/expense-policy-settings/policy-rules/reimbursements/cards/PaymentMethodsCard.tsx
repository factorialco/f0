import { F0Box, F0Card, F0Icon, F0Text } from "@factorialco/f0-react"
import { CreditCard, Person } from "@factorialco/f0-react/icons/app"
import type React from "react"

import { InlineProseSelect } from "../../shared/InlineProse"
import type { PaymentMethodPolicy } from "../../types"

/**
 * Payment methods — two tinted tiles inside a single F0Card,
 * one per card type. Same shape as Attendees: outer card, inner
 * tinted-background tiles, F0Text label, inline-prose select.
 *
 * Boolean policies are surfaced as on/off prose selects rather
 * than raw toggles so the page reads as continuous policy
 * narrative ("auto-imports" vs "requires manual entry") rather
 * than a settings form.
 */

type OnOff = "on" | "off"

const CORPORATE_OPTIONS: { value: OnOff; label: string }[] = [
  { value: "on", label: "auto-imports transactions" },
  { value: "off", label: "requires manual entry" },
]

const PERSONAL_OPTIONS: { value: OnOff; label: string }[] = [
  { value: "on", label: "requires manual submission" },
  { value: "off", label: "is not reimbursable" },
]

export function PaymentMethodsCard(props: {
  paymentMethods: PaymentMethodPolicy
  setCorporateCardAutoImport: (next: boolean) => void
  setPersonalCardManual: (next: boolean) => void
}) {
  const { paymentMethods } = props
  return (
    <F0Card title="Payment methods">
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0Text
          content="How each payment method enters the expense pipeline."
          variant="description"
        />
        <F0Box display="grid" columns="2" gap="md">
          <Tile icon={CreditCard} context="Corporate card">
            <InlineProseSelect<OnOff>
              value={paymentMethods.corporateCardAutoImport ? "on" : "off"}
              options={CORPORATE_OPTIONS}
              onChange={(v) => props.setCorporateCardAutoImport(v === "on")}
              ariaLabel="Corporate card import policy"
            />
          </Tile>
          <Tile icon={Person} context="Personal card">
            <InlineProseSelect<OnOff>
              value={paymentMethods.personalCardManual ? "on" : "off"}
              options={PERSONAL_OPTIONS}
              onChange={(v) => props.setPersonalCardManual(v === "on")}
              ariaLabel="Personal card policy"
            />
          </Tile>
        </F0Box>
      </F0Box>
    </F0Card>
  )
}

function Tile(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  context: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-f1-background-positive/5 rounded-md p-4 flex flex-col gap-2">
      <div className="w-8 h-8 rounded-md flex items-center justify-center bg-f1-background mb-1">
        <F0Icon icon={props.icon} color="positive" size="sm" />
      </div>
      <F0Text content={props.context} variant="label" />
      <div>{props.children}</div>
    </div>
  )
}
