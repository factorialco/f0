import { F0Box } from "@factorialco/f0-react"

import type { PolicyRulesHandle } from "../usePolicyRulesData"

import { OneEditCard } from "../shared/OneEditCard"
import { HeroBlock } from "./HeroBlock"
import { CurrencyCard } from "./cards/CurrencyCard"
import { PaymentMethodsCard } from "./cards/PaymentMethodsCard"
import { TimingCard } from "./cards/TimingCard"

/** Hero → Timing → Currency → Payment methods. */
export function ReimbursementsView(props: { rules: PolicyRulesHandle }) {
  const { rules } = props
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <HeroBlock
        title="Reimbursements"
        description="Submission windows, approval SLAs, currency conversion, and payment-method handling."
      />
      <OneEditCard label="reimbursement timing rule (windows & SLAs)">
        <TimingCard
          timing={rules.reimbursements.timing}
          setSubmissionWindowDays={rules.setSubmissionWindowDays}
          setApprovalSlaDays={rules.setApprovalSlaDays}
        />
      </OneEditCard>
      <OneEditCard label="reimbursement currency handling">
        <CurrencyCard
          currency={rules.reimbursements.currency}
          setDefaultCurrency={rules.setDefaultCurrency}
          setFxSource={rules.setFxSource}
        />
      </OneEditCard>
      <OneEditCard label="reimbursement payment-method handling">
        <PaymentMethodsCard
          paymentMethods={rules.reimbursements.paymentMethods}
          setCorporateCardAutoImport={rules.setCorporateCardAutoImport}
          setPersonalCardManual={rules.setPersonalCardManual}
        />
      </OneEditCard>
    </F0Box>
  )
}
