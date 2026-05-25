import { FC } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import ApprovalStep, { ApprovalStepProps } from "./ApprovalStep"

type ApprovalStep = ApprovalStepProps

type OneApprovalHistoryProps = {
  steps: ApprovalStep[]
}

const _OneApprovalHistory: FC<OneApprovalHistoryProps> = ({ steps }) => {
  const translations = useI18n()
  const title = translations.approvals.history

  const currentStepIndex = steps.findIndex((step) => step.status === "pending")

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="mb-2 text-lg font-semibold text-f1-foreground">{title}</h2>
      <div className="flex flex-row gap-4">
        <div className="mt-3.5 flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <div
                className={cn(
                  "flex size-5 items-center justify-center rounded-xs text-sm font-medium",
                  index < currentStepIndex
                    ? "bg-f1-background-selected-bold text-f1-foreground-inverse"
                    : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"
                )}
              >
                <span>{index + 1}</span>
              </div>
              {index !== steps.length - 1 && (
                <div className="h-[96px] w-px bg-f1-border-secondary" />
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary">
          {steps.map((step, index) => (
            <>
              <ApprovalStep
                key={step.title}
                title={step.title}
                approvalsRequired={step.approvalsRequired}
                status={step.status}
                approvers={step.approvers}
              />
              {index !== steps.length - 1 && (
                <div className="h-px w-full bg-f1-border-secondary" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const OneApprovalHistory = withDataTestId(
  experimentalComponent("OneApprovalHistory", _OneApprovalHistory)
)
