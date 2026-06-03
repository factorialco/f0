import { F0Box, F0Card, F0Text } from "@factorialco/f0-react"

import { InlineProseValue } from "../../shared/InlineProse"
import type { ReimbursementTiming } from "../../types"

/**
 * Submission + approval timing — two inline-prose values inside
 * one sentence. Days-based, no currency.
 */
export function TimingCard(props: {
  timing: ReimbursementTiming
  setSubmissionWindowDays: (days: number) => void
  setApprovalSlaDays: (days: number) => void
}) {
  const { timing } = props
  return (
    <F0Card title="Timing">
      <F0Box display="flex" flexDirection="column" gap="sm">
        <p className="text-f1-foreground text-base leading-relaxed">
          Employees have{" "}
          <InlineProseValue
            value={timing.submissionWindowDays}
            onChange={(v) => props.setSubmissionWindowDays(v as number)}
            format="duration-days"
            ariaLabel="Submission window in days"
            suggestions={["14 days", "30 days", "60 days", "90 days"]}
          />{" "}
          from the expense date to submit it. Approvers have{" "}
          <InlineProseValue
            value={timing.approvalSlaDays}
            onChange={(v) => props.setApprovalSlaDays(v as number)}
            format="duration-days"
            ariaLabel="Approval SLA in days"
            suggestions={["3 days", "5 days", "7 days", "14 days"]}
          />{" "}
          to action the submission.
        </p>
        <F0Text
          content="Late submissions can still be processed but trigger a manager notification."
          variant="description"
        />
      </F0Box>
    </F0Card>
  )
}
